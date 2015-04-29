// Note this can't be merged into another var statement, due to the way brfs works.
var fs = require("fs");

var log = console.log.bind(console)

var rosettaTemplate = fs.readFileSync(__dirname + '/template.mustache', 'utf8');
var commandData = JSON.parse(fs.readFileSync(__dirname + '/json/rosetta-stone.json', 'utf8'));

var Ractive = require("ractive"),
	$ = require("jquery"),
	superagent = require("superagent");

log('commandData', commandData)

var rosettaStoneUI = new Ractive({
	el: '.rosetta-stone',
	data: commandData,
	template: rosettaTemplate
})
