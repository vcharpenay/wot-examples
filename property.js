'use strict'

const context = require('./context')
const url = require('url')
const SimpleRDF = require('simplerdf/lite').SimpleRDF

class Property extends SimpleRDF {
  constructor(iri, value) {
    super(context, iri)
    this.val = value
    this.type = context.Property
  }

  get () {
    return this
  }

}

class WritableProperty extends Property {
  constructor(iri, value) {
    super(iri, value)
    this.type = context.WritableProperty
  }

  put (input) {
    // this.val = input.val (FIXME why input.val is undefined?)
    this.val = 50
    return this
  }

}

module.exports = {
  Property: Property,
  WritableProperty: WritableProperty
}
