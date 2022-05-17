---
title: "Integrated Musicianship: Theory"
type: Models Of
contributor: "@evanwill"
updated: 2021-08-04
description: "An open-source, interactive, online textbook for college-level music theory courses."
project_link: https://intmus.github.io/inttheory20-21/
project_repository: https://github.com/intmus/inttheory20-21 
project_genre: OER; Digital Publishing
project_creators: "@evanwill; Sean Butterfield (University of Idaho)"
image: /images/intmus.png
image_alt: screenshot of IntMus ABCjs playground with happy birthday music displaying
---

Integrated Musicianship is an open-source, interactive, online textbook for college-level music theory courses. 
The website features live, playable, interactive musical examples directly embedded in the content.
Students are able to modify the examples to test and hear their ideas about the music theory topics.

## Why

The textbook uses the affordances of a static web workflow to maximize flexibility and support a responsive inquiry-based model of instruction.
The static web template and Markdown-based content simplifies sharing, adaptation, and modification as an open educational resource, as well as making hosting simple on services such as GitHub Pages.

## How

The website is built using Jekyll static site generator and hosted on GitHub pages. 
All content is written in Markdown by the author Sean Butterfield.
A new version is created for each year of the course, allowing it to be customized to current students and schedule.
The course's graduate assistants record class discussion directly into the text book (writing markdown in the GitHub web interface), making the website a unique record of their learning process.

The interactive music examples are added to the content using Jekyll includes to simplify writing, and are powered by [abcjs](https://github.com/paulrosen/abcjs) to avoid any external dependencies.

## Examples

- Current and past versions of the textbook can be found at [Integrated Musicianship home page](https://intmus.github.io/)
- Learn more details in the article "Developing Interactive and Open Source OER: Integrated Musicianship", *IDEAH*, 2020, <https://doi.org/10.21428/f1f23564.bc46d8c9>.
