/**
 * Provides a way to access commonly used namespaces
 *
 * Usage:
 *
 *   ```
 *   const $rdf = require('rdflib'); //or any other RDF/JS-compatible library
 *   const ns = require('solid-namespace')($rdf);
 *   const store = $rdf.graph();
 *
 *   let me = ...;
 *   let name = store.any(me, ns.vcard(‘fn’)) || store.any(me, ns.foaf(‘name’));
 *   ```
 * @module vocab
 */
const aliases = {
  acl: 'http://www.w3.org/ns/auth/acl#',
  arg: 'http://www.w3.org/ns/pim/arg#',
  as: 'https://www.w3.org/ns/activitystreams#',
  cal: 'http://www.w3.org/2002/12/cal/ical#',
  contact: 'http://www.w3.org/2000/10/swap/pim/contact#',
  dc: 'http://purl.org/dc/elements/1.1/',
  dct: 'http://purl.org/dc/terms/',
  doap: 'http://usefulinc.com/ns/doap#',
  foaf: 'http://xmlns.com/foaf/0.1/',
  http: 'http://www.w3.org/2007/ont/http#',
  httph: 'http://www.w3.org/2007/ont/httph#',
  icalTZ: 'http://www.w3.org/2002/12/cal/icaltzd#', // Beware: not cal:
  ldp: 'http://www.w3.org/ns/ldp#',
  link: 'http://www.w3.org/2007/ont/link#',
  log: 'http://www.w3.org/2000/10/swap/log#',
  meeting: 'http://www.w3.org/ns/pim/meeting#',
  mo: 'http://purl.org/ontology/mo/',
  owl: 'http://www.w3.org/2002/07/owl#',
  pad: 'http://www.w3.org/ns/pim/pad#',
  patch: 'http://www.w3.org/ns/pim/patch#',
  prov: 'http://www.w3.org/ns/prov#',
  qu: 'http://www.w3.org/2000/10/swap/pim/qif#',
  trip: 'http://www.w3.org/ns/pim/trip#',
  rdf: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
  rdfs: 'http://www.w3.org/2000/01/rdf-schema#',
  rss: 'http://purl.org/rss/1.0/',
  sched: 'http://www.w3.org/ns/pim/schedule#',
  schema: 'http://schema.org/', // @@ beware confusion with documents no 303
  sioc: 'http://rdfs.org/sioc/ns#',
  solid: 'http://www.w3.org/ns/solid/terms#',
  space: 'http://www.w3.org/ns/pim/space#',
  stat: 'http://www.w3.org/ns/posix/stat#',
  tab: 'http://www.w3.org/2007/ont/link#',
  tabont: 'http://www.w3.org/2007/ont/link#',
  ui: 'http://www.w3.org/ns/ui#',
  vcard: 'http://www.w3.org/2006/vcard/ns#',
  wf: 'http://www.w3.org/2005/01/wf/flow#',
  xsd: 'http://www.w3.org/2001/XMLSchema#',
  cco: 'http://www.ontologyrepository.com/CommonCoreOntologies/'
}

/**
 * @param [rdflib] {RDF} Optional RDF Library (such as rdflib.js or rdf-ext) to inject
 */
function vocab (rdf = { namedNode: u => u }) {
  const namespaces = {}
  for (const alias in aliases) {
    const expansion = aliases[alias]
    namespaces[alias] = function (localName = '') {
      return rdf.namedNode(expansion + localName)
    }
  };

  return namespaces
};

module.exports = vocab
