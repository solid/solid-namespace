# solid-namespace
[![](https://img.shields.io/badge/project-Solid-7C4DFF.svg?style=flat)](https://github.com/solid/solid)
[![NPM Version](https://img.shields.io/npm/v/solid-namespace.svg?style=flat)](https://npm.im/solid-namespace)

A collection of common RDF namespaces used in the Solid project.

## Usage

```js
var rdf = require('rdflib')  // optional
var vocab = require('solid-namespace')(rdf)  // or require('solid-namespace')()
console.log(vocab.foaf('name'))  
// -> NamedNode(<http://xmlns.com/foaf/0.1/name>)
```
