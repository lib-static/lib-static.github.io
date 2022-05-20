---
title: Static Web
contributor: "@evanwill"
updated: 2021-08-04
type: Concepts
---

Static websites are a collection of HTML, CSS, JS, images, and other files that are delivered to users exactly as they are on the server. 
You can think of a [static website](https://en.wikipedia.org/wiki/Static_web_page){:target="_blank" rel="noopener"} as a shared folder of readonly files exposed on the web.
The URL in your web browser is basically just a path to find a document in a folder, generally representing a request for an HTML file in a specific location on the server.

In the *olden days* static web was the norm, but database driven *dynamic web* sites have dominated the last decade.
Dynamic websites use a server-side programming language to create pages on the fly when a user makes a request. 
Thus a URL represents a query to the application, rather than an existing document on the server. 
Think of complex sites such as social media, where users are constantly adding more data and there is no "static" documents, but streams of ever changing content.

In dynamic platforms content, templates, and metadata are usually stored in a database. 
For example, the popular [content management systems](https://en.wikipedia.org/wiki/Content_management_system) [WordPress](https://wordpress.com/) and [Drupal](https://www.drupal.org/) use the scripting language PHP and database MySQL which must be installed on the server along with the CMS application.
For each page that a user visits, the server processes the request on the fly, pulls info out of the database, puts it together with template parts, and delivers the final results back to the user.
This enables complex interactivity such as comments, customized views, user management, and a web-based admin interface.

This is kind of magical, but does come with costs. 
For quality performance and scaling you need big beefy servers, often for both your user side and admin workflows. 
These are heavy, complicated pieces of infrastructure--they use a lot of energy, they require a lot of IT support, and need constant updates and maintenance to avoid major security risks.
Setting up a platform such as Drupal or Omeka isn't just set it and forget it! 
You are adopting a puppy that needs constant ongoing attention.

Deployed static sites are much less needy--without updates they may start to look dated, but won't create security risks.
Their on going costs are minimal (if not free). 
Rather than keeping up with your system admin work, you can go build something new!

Thus, despite the power of dynamic sites, static web has experienced a [boom since around 2015](https://www.smashingmagazine.com/2015/11/modern-static-website-generators-next-big-thing/) in the web development landscape.
Driven by [static website generators]({{ '/concepts/static-site-generators/' | relative_url }}) and [Jamstack methods](https://jamstack.org/), the modern static web approach has become a viable alternative because it offers some advantages over heavy dynamic infrastructure:

- faster performance (easy caching / CDN, low bandwidth, no processing time, scale).
- minimal hosting requirements (basic web servers, no dependencies, simple development environment).
- minimal security vulnerabilities (no software or server programming language to get hacked).
- easy version control (everything is plain text).
