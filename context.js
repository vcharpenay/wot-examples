'use strict'

const context = {
  // rdf + rdfs + owl
  label: 'http://www.w3.org/2000/01/rdf-schema#label',
  sameAs: 'http://www.w3.org/2002/07/owl#sameAs',
  type: {
    '@id': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
    '@type': '@id'
  },

  // hydra
  Collection: 'http://www.w3.org/ns/hydra/core#Collection',
  member: {
    '@id': 'http://www.w3.org/ns/hydra/core#member',
    '@type': '@id',
    '@container': '@set'
  },
  method: 'http://www.w3.org/ns/hydra/core#method',

  // wot
  Property: 'http://example.org/wot#Property',
  WritableProperty: 'http://example.org/wot#WritableProperty',
  Event: 'http://example.org/wot#Event',
  OccurredEvent: 'http://example.org/wot#OccurredEvent',
  target: {
    '@id': 'http://example.org/wot#target',
    '@type': '@id'
  },
  val: 'http://example.org/wot#hasValue',

  // examples
  TemperatureSensor: 'http://example.org/example#TemperatureSensor',
  temperature: 'http://example.org/example#temperature',
  temperatureChange: 'http://example.org/example#temperatureChange',
  threshold: 'http://example.org/example#threshold',
  thresholdWarning: 'http://example.org/example#thresholdWarning'
}

module.exports = context
