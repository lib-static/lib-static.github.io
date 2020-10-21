---
objectid: # a short identifier with no spaces, weird characters, etc.
objecttype:  # either project, tool, or sketch
title: #short descriptive title identifying main purpose/use and possibly technology
objectlink: # full url to the main tool/project site
github-repo: # link to the main tool/project github repository, only if different
documentation: # link to documentaton, if avialble. 
description:  # short description providing contextual information about the uses, technologies, examples, tools, and/or category the recipe addresses 
category:  # Choose from: (Digital Collection; Institutional Repository; Research Guide; Qualitative Data Analysis; Oral History; Library Website; Critical Edition; OER; Screwing-Around;) or add a new one -- separate multiple using semi-colons.
technologies: # list the required technologies (broadly speaking) important to and/or necessary for your recipe; separate by semi-colon. Include the site generator first. Example: jekyll; bootstrap;svg;
people: # list all people responsible for code development
#example person
- name: # full name
  github: # GitHub username
images: # try and keep it to no more than 2-3 images. 
- filelocation: # filename for image, including url, or extension and folder of this repository (i.e. '/images/picture.jpg')
  caption: # caption for image
code: #code that you think others might find useful from the project, sketch or tool
- title: # a helpful short description of the code piece or pieces that do the thing you think another person might like to do. 
  codelink: # link to where people can view the piece of code, preferabbly in a GitHub repo -- separate multiple links by semi-colon
  demolink: # url of page where this code works, demonstrating the features. 
  description: # brief description of the piece of code - how it's used in project/sketch/tool + how it might be used
  technologies: # list the required technologies (broadly speaking) important to and/or necessary for your recipe; separate by semi-colon. Include the site generator first. Example: jekyll; bootstrap;svg;
---

**objectid:** # a short identifier with no spaces, weird characters, etc.

**objecttype**: # either project, tool, or sketch

**title**: #short descriptive title identifying main purpose/use and possibly technology

**objectlink**: # full url to the main tool/project site

**github-repo**: # link to the main tool/project github repository, only if different

**documentation**: # link to documentaton, if avialble. 

**description**:  # short description providing contextual information about the uses, technologies, examples, tools, and/or category the recipe addresses 

**category:  # Choose from**: (Digital Collection; Institutional Repository; Research Guide; Qualitative Data Analysis; Oral History; Library Website; Critical Edition; OER; Screwing-Around;) or add a new one -- separate multiple using semi-colons.

**technologies: # list the required technologies (broadly speaking) important to and/or necessary for your recipe; separate by semi-colon. Include the site generator first. Example**: jekyll; bootstrap;svg;

**people**: # list all people responsible for code development

#example person
  - name: # full name
  - github: # GitHub username

**images**: # try and keep it to no more than 2-3 images. 
  - filelocation: # filename for image, including url, or extension and folder of this repository (i.e. '/images/picture.jpg')
  - caption: # caption for image

**code**: #code that you think others might find useful from the project, sketch or tool
- *title*: # a helpful short description of the code piece or pieces that do the thing you think another person might like to do. 
  - *codelink*  # link to where people can view the piece of code, preferabbly in a GitHub repo -- separate multiple links by semi-colon
  - *demolink*  # url of page where this code works, demonstrating the features. 
  - *description*  # brief description of the piece of code - how it's used in project/sketch/tool + how it might be used
  - *technologies*: # list the required technologies (broadly speaking) important to and/or necessary for your recipe; separate by semi-colon. Include the site generator first. Example: jekyll; bootstrap;svg;
