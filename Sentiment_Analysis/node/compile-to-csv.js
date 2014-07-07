#!/usr/bin/env node
'use strict'

var fs = require('fs')
var path = require('path')
var dsv = require('dsv')

var basePath = path.join(__dirname, '..', 'chambua-articles')

var clusters = ['people', 'places', 'organizations']

// var decades = fs.readdirSync(basePath)
var decades = ['1990s', '2010s']

var rows = []

decades.forEach(processDecade)

var outFile = path.join(__dirname, 'output.csv')

fs.writeFileSync(outFile, dsv.csv.format(rows))
console.log('Saved to ' + outFile)


function processDecade(decade) {
    var decadePath = path.join(basePath, decade)
    // console.log(decadePath)
    var years = fs.readdirSync(decadePath)
    // console.log(years)

    years.forEach(function(year) {
        processYear(year, decade)
    })

    // console.log(rows)
}

function processYear(year, decade) {
    var decadePath = path.join(basePath, decade, year, 'output')

    // console.log('processYear', decadePath)

    var files = fs.readdirSync(decadePath)
    files.forEach(function(file) {
        processFile(path.join(decadePath, file), year)
    })
}

function processFile(file, year) {
    // console.log('processFile', file)
    var data = JSON.parse(fs.readFileSync(file, 'UTF-8'))
    // console.log(data)

    clusters.forEach(function(c) {
        if (!data[c]) return;
        data[c].forEach(function(d) {
            var value = 'places' === c ? d.name : d
            rows.push({
                year: year,
                file: path.basename(file),
                cluster: c,
                value: value
            })
        })
    })
    // var decadePath = path.join(basePath, decade, year)
}
