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

If a rdf library is provided then the map of namespaces given will be the result of calling `$rdf.namedNode` on the namespace urls.

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

## Vocabularies included

The vocabularies included in this repo are endorsed by [the Solid leader](https://github.com/solid/information/blob/master/solid-team.md#solid-leader), and are recommended to use in Solid projects. Below are the vocabularies listed with a short explanation of intent.

| Name                                                         | Abbreviation      | URL                                                          | Description                                                  |
| ------------------------------------------------------------ | ----------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Basic Access Control ontology                                | acl               | [https://www.w3.org/ns/auth/acl#](https://www.w3.org/ns/auth/acl#) | Defines the class Authorization and its essential properties, and also some classes of access such as read and write. |
| A simple Argumentation ontology                              | arg               | [http://www.w3.org/ns/pim/arg#](http://www.w3.org/ns/pim/arg#) | This ontology may be used to capture the relationship between different [description ends here…] (**NEED BETTER DESCRIPTION**) |
| **NEED NAME**                                                | cal               | [http://www.w3.org/2002/12/cal/ical#](http://www.w3.org/2002/12/cal/ical#) | **NEED DESCRIPTION**                                         |
| Contact: Utility concepts for everyday life                  | contact           | [http://www.w3.org/2000/10/swap/pim/contact#](http://www.w3.org/2000/10/swap/pim/contact#) | To illustrate with examples the creation of a schema of RDF properties and classes, but using abstract things for people, rather than strings, etc. If you have an "Assistant's phone number", then really you have an assitant who has a phone number - and that is much more useful in general. For example, when data about you and your assietnt in merged, you will end up with an "assistant's email" and the like. |
| DCMI Metadata Terms - elements (**CORRECT NAME?**)           | dc                | [http://purl.org/dc/elements/1.1/](http://purl.org/dc/elements/1.1/) | **NEED DESCRIPTION**                                         |
| DCMI Metadata Terms - terms (**CORRECT NAME?**)              | dct               | [http://purl.org/dc/terms/](http://purl.org/dc/terms/)       | **NEED DESCRIPTION**                                         |
| Description of a Project (DOAP) vocabulary                   | doap              | [http://usefulinc.com/ns/doap#](http://usefulinc.com/ns/doap#) | The Description of a Project (DOAP) vocabulary, described using W3C RDF Schema and the Web Ontology Language. |
| Friend of a Friend                                           | foaf              | [http://xmlns.com/foaf/0.1/](http://xmlns.com/foaf/0.1/)     | FOAF is a project devoted to linking people and information using the Web. Regardless of whether information is in people's heads, in physical or digital documents, or in the form of factual data, it can be linked. FOAF integrates three kinds of network: *social networks* of human collaboration, friendship and association; *representational networks* that describe a simplified view of a cartoon universe in factual terms, and *information networks* that use Web-based linking to share independently published descriptions of this inter-connected world. FOAF does not compete with socially-oriented Web sites; rather it provides an approach in which different sites can tell different parts of the larger story, and by which users can retain some control over their information in a non-proprietary format. |
| Good Relations Vocabulary                                    | gr                | [http://purl.org/goodrelations/v1#](http://purl.org/goodrelations/v1#) | This is a vocabulary for product, price, store, and company data. |
| HTTP Message Vocabulary                                      | http              | [http://www.w3.org/2007/ont/http#](http://www.w3.org/2007/ont/http#) | This is a vocabulary for describing HTTP messages.           |
| HTTP Header Vocabulary                                       | https             | [http://www.w3.org/2007/ont/httph#](http://www.w3.org/2007/ont/httph#) | This vocabulary is a one deemed to contain all HTTP headers. The rdflib.js library uses it as for relationships between an HTTP response and the  content (value) of the HTTP header in that response.<br /><br />The ontology is deemed to contain one property for every HTTP header, standard or not. The property in this ontology has a localname which is the header field converted to lower case. |
| **NEED NAME**                                                | icalTZ            | [http://www.w3.org/2002/12/cal/icaltzd#](http://www.w3.org/2002/12/cal/icaltzd#) | **NEED DESCRIPTION**                                         |
| The W3C Linked Data Platform (LDP) Vocabulary                | ldp               | [http://www.w3.org/ns/ldp#](http://www.w3.org/ns/ldp#)       | This document is an HTML representation of OWL ontology describing all vocabulary URIs defined in the Linked Data Platform (LDP) namespace. This ontology provides an informal representation of the concepts and terms as defined in the LDP or other relevant specifications. Consult the LDP specification for normative reference, unless a different specification is indicated inline. See also [http://www.w3.org/2012/ldp](http://www.w3.org/2012/ldp), [http://www.w3.org/TR/ldp-ucr/](http://www.w3.org/TR/ldp-ucr/), [http://www.w3.org/TR/ldp/](http://www.w3.org/TR/ldp/), [http://www.w3.org/2011/09/LinkedData/](http://www.w3.org/2011/09/LinkedData/) |
| Ontology for Linked Data                                     | link, tab, tablet | [http://www.w3.org/2007/ont/link#](http://www.w3.org/2007/ont/link#) | This is a vocabulary for describing relationships between linked data objects and things fetched from the web. |
| **NEED NAME**                                                | log               | [http://www.w3.org/2000/10/swap/log#](http://www.w3.org/2000/10/swap/log#) | **NEED DESCRIPTION**                                         |
| An ontology for an online meeting                            | meeting           | [http://www.w3.org/ns/pim/meeting#](http://www.w3.org/ns/pim/meeting#) | An online meeting, in Solid world, is a collection of linked data resources which allow people to collaborate in real time toward the objectives of the meeting. The online state of a meeting may also evolve before the meeting as it is planned, and it should also in time evolve to give a clear idea of the take-aways for posterity |
| Music Ontology                                               | mo                | [http://purl.org/ontology/mo/](http://purl.org/ontology/mo/) | The Music Ontology Specification provides main concepts and properties fo describing music (i.e. artists, albums and tracks) on the Semantic Web. |
| The OWL 2 Schema vocabulary (OWL 2)                          | owl               | [http://www.w3.org/2002/07/owl#](http://www.w3.org/2002/07/owl#) | This ontology partially describes the built-in classes and   properties that together form the basis of the RDF/XML syntax of OWL 2.<br /><br />The content of this ontology is based on Tables 6.1 and 6.2   in Section 6.4 of the OWL 2 RDF-Based Semantics specification, available at http://www.w3.org/TR/owl2-rdf-based-semantics/.<br /><br />Please note that those tables do not include the different annotations   (labels, comments and rdfs:isDefinedBy links) used in this file. Also note that the descriptions provided in this ontology do not   provide a complete and correct formal description of either the syntax or the semantics of the introduced terms (please see the OWL 2   recommendations for the complete and normative specifications).<br /><br />Furthermore, the information provided by this ontology may be misleading if not used with care. This ontology SHOULD NOT be imported into OWL ontologies. Importing this file into an OWL 2 DL ontology will cause it to become an OWL 2 Full ontology and may have other, unexpected, consequences. |
| **NEED NAME**                                                | pad               | [http://www.w3.org/ns/pim/pad#](http://www.w3.org/ns/pim/pad#) | **NEED DESCRIPTION**                                         |
| **NEED NAME**                                                | patch             | [http://www.w3.org/ns/pim/patch#](http://www.w3.org/ns/pim/patch#) | **NEED DESCRIPTION**                                         |
| Products Ontology | pto | [http://www.productontology.org/id/](http://www.productontology.org/id/) | This joint venture between Schema.org, Wikipedia, and Good Relations, supports using many Wikipedia entries as RDF subclasses of Schema:Product and Schema:Service.
| An ontology for personal finances                            | qu                | [http://www.w3.org/2000/10/swap/pim/qif#](http://www.w3.org/2000/10/swap/pim/qif#) | An ontology for data exported, for example, by Quicken, as an interchange format. Also a generally useful ontology for bank transactions.  See also the OFX ontology. |
| **NEED NAME**                                                | trip              | [http://www.w3.org/ns/pim/trip#](http://www.w3.org/ns/pim/trip#) | This ontology is for use in describing trips, such as business trips. Trips connect where we are at a given point in time, meetings which are part of the trip, and who pays for the trip  or part of the trip. They are useful for describing travel plans, for working out expenses, and for categoizing photographs. Trips do not in fact logically have to involve travel. A trip could be used to collate expenses relating to an activity or event at ones home base, or a set of photos taken at home etc. |
| The RDF Concepts Vocabulary (RDF)                            | rdf               | [http://www.w3.org/1999/02/22-rdf-syntax-ns#](http://www.w3.org/1999/02/22-rdf-syntax-ns#) | This is the RDF Schema for the RDF vocabulary terms in the RDF Namespace, defined in RDF 1.1 Concepts. |
| The RDF Schema vocabulary (RDFS)                             | rdfs              | [http://www.w3.org/2000/01/rdf-schema#](http://www.w3.org/2000/01/rdf-schema#) | **NEED DESCRIPTION**                                         |
| **NEED NAME**                                                | rss               | [http://purl.org/rss/1.0/](http://purl.org/rss/1.0/)         | **NEED DESCRIPTION**                                         |
| **NEED NAME**                                                | sched             | [http://www.w3.org/ns/pim/schedule#](http://www.w3.org/ns/pim/schedule#) | **NEED DESCRIPTION**                                         |
| Schema.org                                                   | schema            | [http://schema.org/](http://schema.org/)                     | Schema.org is a collaborative, community activity with a mission to create, maintain, and promote schemas for structured data on the Internet, on web pages, in email messages, and beyond. |
| SIOC Core Ontology Namespace                                 | sioc              | [http://rdfs.org/sioc/ns#](http://rdfs.org/sioc/ns#)         | SIOC (Semantically-Interlinked Online Communities) is an ontology for describing the information in online communities. |
| Solid terms                                                  | solid             | [http://www.w3.org/ns/solid/terms#](http://www.w3.org/ns/solid/terms#) | Vocabulary for terms used in the Solid project.              |
| Workspace Ontology                                           | space             | [http://www.w3.org/ns/pim/space#](http://www.w3.org/ns/pim/space#) | This ontology is for use in describing Workspaces. Workspaces are place where data is stored and asscoiated prolices of privacy. A given application typically stores information in several different workspaces, some being user private, some shared, and some public. It is crucial that the user has easy control over the destiny of information.<br/><br/>Goals then are that the user can:<br/><br/>- create workspaces<br/>- easily understand which workspace data is going into<br/>- understand what the implications of that are<br/>- (later) set ACLS on them<br/>- publish apropriate use policies for them |
| **NEED NAME**                                                | stat              | [http://www.w3.org/ns/posix/stat#](http://www.w3.org/ns/posix/stat#) | **NEED DESCRIPTION**                                         |
| An ontology for User Interface description, Hints and Forms. | ui                | [http://www.w3.org/ns/ui#](http://www.w3.org/ns/ui#)         | The User Interface ontology allows the definition of forms for processing RDF model data, and include a bootstrap form for editing forms. It allows user interface hints such as background colors, can be associated with objects and classes. |
| Ontology for vCard                                           | vcard             | [http://www.w3.org/2006/vcard/ns#](http://www.w3.org/2006/vcard/ns#) | Ontology for vCard based on RFC6350                          |
| Issue Tracking Ontology                                      | wf                | [http://www.w3.org/2005/01/wf/flow#](http://www.w3.org/2005/01/wf/flow#) | This ontology defines a very general class (Task) which can used for any kind of bug tracking, issue tracking, to-do-list management, action items, goal depednency, and so on. It captures the state of a task as a subclass, so that subsumption can be used. It captures a discussion thread about a task. It captures subtasks structure if necessary. A "Tracker" defines actual set of states, categories, etc., which  a task can be in. The data about the tracker guides the software managing the task. <br/><br/>There is some workflow modeling finite state machine terms which are optional for  more complex definition of the transitions allowed. |
| XML Schema                                                   | xsd               | [http://www.w3.org/2001/XMLSchema#](http://www.w3.org/2001/XMLSchema#) | This document describes the [XML Schema](https://www.w3.org/2001/XMLSchema#xmlschemap1) namespace. It also contains a directory of links to these related resources, using [Resource Directory Description Language](http://www.rddl.org/). |
| Simple Knowledge Organization System | skos | [http://www.w3.org/2004/02/skos/core#](http://www.w3.org/2004/02/skos/core#) | Simple Knowledge Organization System (SKOS) and associated web technologies aim to enable preexisting controlled vocabularies to be consumed on the web and to allow vocabulary creators to publish born-digital vocabularies on the web. |
| Vocabulary for annotating vocabulary descriptions | vann | [http://purl.org/vocab/vann/](http://purl.org/vocab/vann/) | This document describes a vocabulary for annotating descriptions of vocabularies with examples and usage notes. |
| Annotea Bookmark Schema | bookmark | [http://www.w3.org/2002/01/bookmark#](http://www.w3.org/2002/01/bookmark#) | The Annotea Bookmark Schema, describing properties used to define instances of bookmarks, topics, and shortcuts. |

### Not finding what you need?

In case the vocabularies do not cover your need, we recommend checking out the following resources:

- [Linked Open Vocabularies](https://lov.linkeddata.es/dataset/lov/vocabs): "LOV provides a choice of several hundreds of [...] vocabularies, based on quality requirements including URI stability and availability on the Web, use of standard formats and publication best practices, quality metadata and documentation, identifiable and trustable publication body, proper versioning policy." (From the [about page on the website](https://lov.linkeddata.es/dataset/lov/about))
