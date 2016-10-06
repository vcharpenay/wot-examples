'use strict'

const context = require('./context')
const hydraFetch = require('hydra-fetch')
const SimpleRDF = require('simplerdf/lite').SimpleRDF

const iri = 'http://localhost:8080/'

// fetch temperature sensor's threshold
hydraFetch(iri + 'threshold/', {context: context}).then((threshold) => {

  // change the threshold
  threshold.val = 30

  return threshold.put(threshold).then((threshold) => {
    console.log('new threshold: ' + threshold.val)
  })

/*
  // add an event
  let temperatureChange = new SimpleRDF(context, temperatureSensor.temperatureChange.iri())
  temperatureChange.method = 'POST'
  temperatureChange.target = 'http://localhost:8081/temperatureChange'

  return temperatureSensor.temperatureChange.post(temperatureChange).then((event) => {
    // IRI of the event
    console.log('event IRI: ' + event.iri())

    // remove the event again
    // return event.delete()
  })
  */
}).catch((err) => {
  console.error(err.stack || err.message)
})
