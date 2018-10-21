/**
 * Provides a way to access commonly used namespaces
 *
 * Usage:
 *
 *   ```
 *   const $rdf = require('rdflib');
 *   const ns = require('solid-namespace');
 *   const store = $rdf.graph();
 *
 *   let me = ...;
 *   let name = store.any(me, ns.vcard(‘fn’)) || store.any(me, ns.foaf(‘name’));
 *   ```
 * @module vocab
 */

var $rdf = require('rdflib')

var vocab = {
  acl: $rdf.Namespace('http://www.w3.org/ns/auth/acl#'),
  arg: $rdf.Namespace('http://www.w3.org/ns/pim/arg#'),
  cal: $rdf.Namespace('http://www.w3.org/2002/12/cal/ical#'),
  contact: $rdf.Namespace('http://www.w3.org/2000/10/swap/pim/contact#'),
  dc: $rdf.Namespace('http://purl.org/dc/elements/1.1/'),
  dct: $rdf.Namespace('http://purl.org/dc/terms/'),
  doap: $rdf.Namespace('http://usefulinc.com/ns/doap#'),
  foaf: $rdf.Namespace('http://xmlns.com/foaf/0.1/'),
  http: $rdf.Namespace('http://www.w3.org/2007/ont/http#'),
  httph: $rdf.Namespace('http://www.w3.org/2007/ont/httph#'),
  icalTZ: $rdf.Namespace('http://www.w3.org/2002/12/cal/icaltzd#'), // Beware: not cal:
  ldp: $rdf.Namespace('http://www.w3.org/ns/ldp#'),
  link: $rdf.Namespace('http://www.w3.org/2007/ont/link#'),
  log: $rdf.Namespace('http://www.w3.org/2000/10/swap/log#'),
  meeting: $rdf.Namespace('http://www.w3.org/ns/pim/meeting#'),
  mo: $rdf.Namespace('http://purl.org/ontology/mo/'),
  owl: $rdf.Namespace('http://www.w3.org/2002/07/owl#'),
  pad: $rdf.Namespace('http://www.w3.org/ns/pim/pad#'),
  patch: $rdf.Namespace('http://www.w3.org/ns/pim/patch#'),
  qu: $rdf.Namespace('http://www.w3.org/2000/10/swap/pim/qif#'),
  trip: $rdf.Namespace('http://www.w3.org/ns/pim/trip#'),
  rdf: $rdf.Namespace('http://www.w3.org/1999/02/22-rdf-syntax-ns#'),
  rdfs: $rdf.Namespace('http://www.w3.org/2000/01/rdf-schema#'),
  rss: $rdf.Namespace('http://purl.org/rss/1.0/'),
  sched: $rdf.Namespace('http://www.w3.org/ns/pim/schedule#'),
  schema: $rdf.Namespace('http:/schema.org/'), // @@ beware confusion with documents no 303
  sioc: $rdf.Namespace('http://rdfs.org/sioc/ns#'),
  solid: $rdf.Namespace('http://www.w3.org/ns/solid/terms#'),
  space: $rdf.Namespace('http://www.w3.org/ns/pim/space#'),
  stat: $rdf.Namespace('http://www.w3.org/ns/posix/stat#'),
  tab: $rdf.Namespace('http://www.w3.org/2007/ont/link#'),
  tabont: $rdf.Namespace('http://www.w3.org/2007/ont/link#'),
  ui: $rdf.Namespace('http://www.w3.org/ns/ui#'),
  vcard: $rdf.Namespace('http://www.w3.org/2006/vcard/ns#'),
  wf: $rdf.Namespace('http://www.w3.org/2005/01/wf/flow#'),
  xsd: $rdf.Namespace('http://www.w3.org/2001/XMLSchema#')
}

module.exports = vocab
