const assert = require('assert');

//Test the non-rdflib functionality
const ns = require('./index.js')();
assert.equal(ns.schema('Recipe'), 'http://schema.org/Recipe');


//Test the rdflib functionality
const rdflib = {
    namedNode: val => 'RDF::'+val
};
const rdfns = require('./index.js')(rdflib);
assert.equal(rdfns.schema('Recipe'), 'RDF::http://schema.org/Recipe');
