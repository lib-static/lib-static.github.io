---
title: Static Site Generators
contributor: "@evanwill"
updated: 2021-08-04
type: concept
---

what is it
usual features
how to choose

a piece of software that packages together a set of development tools to convert a folder of source code into a complete static site. 
This gives you some of the power of a content management system, without all the infrastructure overhead. 

So we leverage Jekyll's tool set:
We can write content in Markdown, 
use the templating language Liquid to create complex layouts out of modular components,
and use metadata to generate web pages.

which brings us finally to CollectionBuilder itself-- 
at a basic level, CB is a jekyll project template, literally a folder of text files.
It is a the source code written in modular chunks of HTML, JS, Sass, and Liquid that Jekyll will convert into a digital collection website. 

The first part of our "stack" is Jekyll itself, a static site generator that bundles a set of development tools that enable the creation of reusable, data-driven templates. As I displayed earlier, CollectionBuilder is essentially a Jekyll theme--the project consists of a template of modular HTML, SASS, JavaScript, and Ruby components which are knit together by Jekyll to generate a complete static site (i.e. a folder of HTML, CSS, JSON, and JavaScript files).
Each of the tools in Jekyll's stack make it easier to write these components, and keep the data, content, and presentation layers cleanly separated.


If you are familiar with using CMS such as WordPress or Drupal
(in the DH world Scalar, Omeka, Islandora, CONTENTdm),
one thing you may have noticed is missing from that workflow is some sort of GUI Admin interface.

CollectionBuilder is literally a folder of files. 
It isn't content management systems or digital asset management system or other type of dynamic web application you might be used to seeing in the context of building digital collections or websites in general. 

CMS are dynamic web applications, they require a server-side programming language, databases, and a suite of applications to function. 
You interact with them via the typical web based Admin interface, where you click through all sort of forms and settings to build and manage your digital collections and websites. 

For each page that a user visits, the server processes the request on the fly, pulls info out of the database, puts it together with template parts, and delivers the final results back to the user.

This is kind of magical, if you think of something like social media with never ending streams of unique content for each user--
but that comes with some costs. 
For quality performance and scaling you need big beefy servers, often for both your user side and admin workflows. 
These a heavy, complicated pieces of infrastructure--they use a lot of energy, they require a lot of IT support, you need constant updates and maintenance to avoid major security risks.

Setting up Drupal or Omeka isn't just set it and forget it! 
You are adopting a puppy that needs constant ongoing attention.

Since around 2015 static site generators and the “JAM Stack” approach have exploded in the web development landscape--utilizing simplified markup, plain text data files, and web APIs to create complete websites without the need for complex server-side software, databases, or content management systems. Rather than a relying on server-side processing to generate a dynamic page on the fly for each user request, static web tools "pre-render" every page into HTML, CSS, and JS files that can be delivered directly to users with high performance, efficiency, and security from the most basic web servers or services. The modern static web approach provides high performance for users, minimal infrastructure requirements for IT, and lower barriers for developers. 

Lib-Static (https://lib-static.github.io/) - Since around 2015 static site generators and the “JAM Stack” approach have exploded in the web development landscape—utilizing simplified markup, plain text data files, and web APIs to create complete websites without the need for complex server-side software, databases, or content management systems. Rather than relying on server-side processing to generate a dynamic page on the fly for each user request, static web tools “pre-render” every page into HTML, CSS, and JS files that can be delivered directly to users with high performance, efficiency, and security from the most basic web servers or services. The modern static web approach provides high performance for users, minimal infrastructure requirements for IT, and lower barriers for developers. 


The first part of our “stack” is Jekyll itself, a static site generator that bundles a set of development tools that enable the creation of reusable, data-driven templates. As I displayed earlier, CollectionBuilder is essentially a Jekyll theme--the project consists of a template of modular HTML, SASS, JavaScript, and Ruby components which are knit together by Jekyll to generate a complete static site (i.e. a folder of HTML, CSS, JSON, and JavaScript files).
Each of the tools in Jekyll’s stack make it easier to write these components, and keep the data, content, and presentation layers cleanly separated.
