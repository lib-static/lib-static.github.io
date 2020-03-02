---
objectid: blank # a short identifier with no spaces, weird characters, etc.
objecttype: project # either tool or project
title: TITLE #short descriptive title identifying main purpose/use and possibly technology
objectlink: LINK_to_Project # link to the main tool/project site
github-repo: LINK_to_GitHubRepo # link to the main tool/project github repository, only if different
description: "Project Description" # short description providing contextual information about the uses, technologies, examples, tools, and/or category the recipe addresses 
category: Cat1; Cat2 # Choose from: (Digital Collection; Institutional Repository; Research Guide; Qualitative Data Analysis; Oral History; Library Website; Critical Edition; OER; screwing-around;) or, if you have to, add a new one
technologies: tech1; tech2; # list the required technologies (broadly speaking) important to and/or necessary for your recipe; separate by semi-colon. Include the site generator first. Example: jekyll; bootstrap;svg;
people: # list all people responsible for code development
- name: Person 1
  github: Person 1 GitHub id # provide the name / github ids of the person and/or people developing this recipe; separate multiple people by semi-colon
  website: Person 1 website link # optional -- points to site for individual. 
- name: Person 2
  github: Person 2 GitHub id # provide the name / github ids of the person and/or people developing this recipe; separate multiple people by semi-colon
  website: Person 2 website link # optional -- points to site for individual. 
images: # try and keep it to no more than 2-3 images. 
- filelocation: image 1 location # filename for image, including url, or extension and folder of this repository (i.e. '/images/picture.jpg')
  caption: image 1 caption  # caption for image
- filelocation: image 2 location # filename for image, including url, or extension and folder of this repository (i.e. '/images/picture.jpg')
  caption: image 2 caption  # caption for image
code: 
- title: Code1 Example Title
  url: code1 url 1; code1 url 2; # link to where people can view the piece of code, preferabbly in a GitHub repo
  description: code1 example description of how it works # brief description of the piece of code and how it's used.
  page: Where Code1 is working 
- title: Code 2 Example Title
  url: code2 url 1; code2 url 2; # link to where people can view the piece of code, preferabbly in a GitHub repo
  description: code2 example description of how it works # brief description of the piece of code and how it's used.
  page: Where Code2 is working 
---


