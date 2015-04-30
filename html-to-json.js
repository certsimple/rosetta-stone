#!/usr/bin/env node
var marked = require('marked'),
	fs = require('fs'),
	multiline = require('multiline');

require('es6-shim')

var DEBUG = false

var log;
if ( DEBUG ) {
	log = console.log.bind(console);
} else {
	log = function(){}
}

module.exports = function(window){
	var $ = window.$;
	var data = {}
	var firstSection = $('h2').each(function(sectionIndex, sectionElement){
		var $sectionElement = $(sectionElement)
		var sectionTitle = $sectionElement.text()
		log('\n\nMAKING SECTION AND TABLE FOR', sectionTitle)
		data[sectionTitle] = {}
		var currentRow = 0
		var currentCell = 0
		var rowName
		var previousCellContents;
		$sectionElement.nextUntil('h2').each(function(nonSectionIndex, element){
			var $element = $(element)
			var elementText = $element.text()
			if ( $element.is('h3') ) {
				// We're done with previous row, so add it
				rowName = elementText
				data[sectionTitle][rowName] = {}
				log('  MAKING ROW FOR', rowName)
				currentRow++
			} else {
				if ( $element.is('h4') ) {
					cellName = elementText
					data[sectionTitle][rowName][cellName] = []
					currentCell++
				} else {
					if ( elementText.toLowerCase().includes('as above') ) {
						data[sectionTitle][rowName][cellName] = previousCellContents
						return
					}
					log('      ADDING TO CELL', currentCell, ':', elementText)
					data[sectionTitle][rowName][cellName].push('<p>'+$element.html()+'</p>')
					// Commands might be the same, but don't copy references
					if ( ! $element.is('a') ) {
						previousCellContents = data[sectionTitle][rowName][cellName]
					}
				}
			}
		})
	})
	return data
}


