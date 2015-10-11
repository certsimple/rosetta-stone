// Note this can't be merged into another var statement, due to the way brfs works.
var fs = require("fs");

var log = console.log.bind(console)

var rosettaTemplate = fs.readFileSync('mustache/template.mustache', 'utf8');
var rosettaData = JSON.parse(fs.readFileSync('json/rosetta-stone.json', 'utf8'));

var Ractive = require("ractive"),
	$ = require("jquery");

// For testing
window.$ = $
log('rosettaData', rosettaData)

rosettaData.operatingSystems = {
	"Windows Server": {
		"enabled": true,
		"docs": "https://technet.microsoft.com/en-us/library/bb978526.aspx",
		"logo": "windows"
	},
	"Red Hat Enterprise Linux": {
		"enabled": false,
		"docs": "https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/",
		"logo": "rhel"
	},
	"Debian": {
		"enabled": false,
		"docs": "https://www.debian.org/doc/manuals/debian-reference/",
		"logo": "debian"
	},
	"Ubuntu": {
		"enabled": true,
		"docs": "https://help.ubuntu.com/lts/serverguide/index.html",
		"logo": "ubuntu"
	},
	"Arch Linux": {
		"enabled": false,
		"docs": "https://wiki.archlinux.org/",
		"logo": "archlinux"
	},
	"OS X": {
		"enabled": true,
		"docs": "https://www.apple.com/uk/support/osxserver/",
		"logo": "osx"
	},
	"OpenBSD": {
		"enabled": false,
		"docs": "http://www.openbsd.org/faq/",
		"logo": "openbsd"
	},
	"FreeBSD": {
		"enabled": false,
		"docs": "http://www.freebsd.org/docs.html",
		"logo": "freebsd"
	},
	"SmartOS": {
		"enabled": false,
		"docs": "https://wiki.smartos.org/display/DOC/Home",
		"logo": "smartos"
	}
}

rosettaData.isAnOSEnabled = true;

var rosettaStoneUI = new Ractive({
	el: '.rosetta-stone',
	data: rosettaData,
	template: rosettaTemplate,
	oncomplete: function(){
		$('.enable-operating-systems').on('click', 'img', function(ev){
			var operatingSystem = $(ev.target).data('operating-system')
			var enabledPath = 'operatingSystems.'+operatingSystem+'.enabled'
			var isEnabled = rosettaStoneUI.get(enabledPath)
			rosettaStoneUI.set(enabledPath, ( ! isEnabled ) )
		})
	}
})

rosettaStoneUI.observe('operatingSystems.*.enabled', function(oldValue, newValue){
	var operatingSystems = rosettaStoneUI.get('operatingSystems')
	var operatingSystemNames = Object.keys(operatingSystems)
	var isAnOSEnabled = operatingSystemNames.some(function(osName){
		return operatingSystems[osName].enabled
	})
	log('isAnOSEnabled', isAnOSEnabled)
	rosettaStoneUI.set('isAnOSEnabled', isAnOSEnabled)
})

// Debugging
window.rosettaStoneUI = rosettaStoneUI

