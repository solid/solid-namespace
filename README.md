# Solid Namespace
[![](https://img.shields.io/badge/project-Solid-7C4DFF.svg?style=flat)](https://github.com/solid/solid)
[![NPM Version](https://img.shields.io/npm/v/solid-namespace.svg?style=flat)](https://npm.im/solid-namespace)

A collection of common RDF namespaces used in the Solid project.

solid-namespace can be used with any RDF/JS-compatible library (e.g. [rdflib.js](/linkeddata/rdflib.js)). 


## Usage

You can use this library in two ways. 

1. With a RDF JS library to get NamedNodes
2. Without a library to get url strings

### With a rdf library

If a rdf library is provided then the map of namespaces given will be the result of calling `rdflib.Namespace` on the namespace urls.

```js
const $rdf = require('rdflib');
const ns = require('solid-namespace')($rdf);
const store = $rdf.graph();
    
let me = ...;
let name = store.any(me, ns.vcard('fn')) || store.any(me, ns.foaf('name'));

console.log(ns.foaf('name')); // -> NamedNode(<http://xmlns.com/foaf/0.1/name>)
```

### Without a rdf library

```js
const ns = require('solid-namespace')();
console.log(ns.foaf('name')); // -> "http://xmlns.com/foaf/0.1/name"
```
