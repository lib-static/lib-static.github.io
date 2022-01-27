---
title: timelinejs-template
type: Models For
type: Models For
contributor: "@evanwill"
updated: 2022-01-05
project_link: https://thecdil.github.io/timelinejs-template/ 
project_repository: https://github.com/thecdil/timelinejs-template 
project_documentation: https://github.com/thecdil/timelinejs-template/blob/main/docs/timeline.md 
project_genre: Digital Exhibit
description: "A basic Jekyll template for creating self-hosted TimelineJS on GitHub Pages."
project_creators: "@evanwill"
image:
image_alt:
---

`timelinejs-template` is a minimal Jekyll template for creating self-hosted [TimelineJS](https://timeline.knightlab.com/) features on GitHub Pages with a basic Bootstrap 5 theme. 
The template provides a self-contained package of data, media, and code for simplified and sustainable hosting of a timeline that does not rely on 3rd party resources.

## Why

TimelineJS is a very popular open-source project to create visual timelines that can be embedded on a webpage (in an iframe). 
Their "authoring tool" provides an easy way to create and publish a timeline embed using Google Sheets and Knightlab's infrastructure. 
This is great for getting started with minimal setup and no overhead.

However, relying on Google Sheets can be problematic:

- API outages and changes unexpectedly break the TimelineJS service
- you may not have a convenient location to host your media files or a website to embed your timelines
- Google platform exposes your users to unnecessary privacy tradeoffs

To avoid these issues you can self-host your TimelineJS projects and use the standalone javascript to create timelines without relying on any 3rd party services.

The timelinejs-template implements the basics of TimelineJS in a simple Jekyll project template to make self-hosting easy on GitHub Pages. 
This approach is more sustainable, keeping the library assets, metadata, and media together in a self-contained package (rather than multiple 3rd party platforms).

## How

timelinejs-template is compatible with existing timelines created in Google Sheets following the TimelineJS template, or can be used with your own spreadsheet or JSON file that follows the TimelineJS conventions.

To use, make a copy of the template and add your timeline data. 
Add any media files (jpg, png, mp3, pdf) you want to host into the "media" folder.
The timeline can be added to a page in a variety of layouts depending on your use case (on a page with navigation or with no theme to use as embed elsewhere).
Activating GitHub Pages will build the site and your timelines will be available on the web!

The template is based on [bootstrap-template](https://github.com/thecdil/bootstrap-template) which provides some builtin features for basic customization.
