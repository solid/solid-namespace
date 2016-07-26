'use strict'
/**
 * Provides a hashmap of relevant vocabs / namespaces.
 * Usage:
 *
 *   ```
 *   var rdf = require('rdflib')  // optional
 *   var vocab = require('solid-vocab')(rdf)  // or require('solid-vocab')()
 *   console.log(vocab.foaf('name'))  // -> <http://xmlns.com/foaf/0.1/name>
 *   ```
 * @module vocab
 */

/**
 * @param [rdf] {RDF} Optional RDF Library (such as rdflib.js or rdf-ext) to
 *   inject
 */
function vocab (rdf) {
  var ns = require('rdf-ns')(rdf)
  var vocabMap = {
    'acl': ns.base('http://www.w3.org/ns/auth/acl#'),
    'app': ns.base('http://www.w3.org/ns/solid/app#'),
    'dct': ns.base('http://purl.org/dc/terms/'),
    'foaf': ns.base('http://xmlns.com/foaf/0.1/'),
    'ldp': ns.base('http://www.w3.org/ns/ldp#'),
    'owl': ns.base('http://www.w3.org/2002/07/owl#'),
    'pim': ns.base('http://www.w3.org/ns/pim/space#'),
    'rdf': ns.base('http://www.w3.org/1999/02/22-rdf-syntax-ns#'),
    'rdfs': ns.base('http://www.w3.org/2000/01/rdf-schema#'),
    'schema': ns.base('http://schema.org/'),
    'sioc': ns.base('http://rdfs.org/sioc/ns#'),
    'solid': ns.base('http://www.w3.org/ns/solid/terms#'),
    'vcard': ns.base('http://www.w3.org/2006/vcard/ns#'),
    'xsd': ns.base('http://www.w3.org/2001/XMLSchema#')
  }
  return vocabMap
}

module.exports = vocab
