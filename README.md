# Solid Namespace
[![](https://img.shields.io/badge/project-Solid-7C4DFF.svg?style=flat)](https://github.com/solid/solid)
[![NPM Version](https://img.shields.io/npm/v/solid-namespace.svg?style=flat)](https://npm.im/solid-namespace)

A collection of common RDF namespaces used in the Solid project.

solid-namespace is meant to be used with [rdflib.js](/linkeddata/rdflib.js). It exports a collection of `NamedNode` values for commonly used namespaces, thereby shortcutting the need to call `$rdf.namespace(...)`.

## Usage

```js
const $rdf = require('rdflib');
const ns = require('solid-namespace');
const store = $rdf.graph();
    
let me = ...;
let name = store.any(me, ns.vcard(‘fn’)) || store.any(me, ns.foaf(‘name’));

console.log(ns.foaf); // -> NamedNode(<http://xmlns.com/foaf/0.1/name>)
```
