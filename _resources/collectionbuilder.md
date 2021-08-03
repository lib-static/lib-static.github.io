---
objectid: collectionbuilder # a short identifier with no spaces, weird characters, etc.
objecttype: framework # either project, tool, or sketch
title: CollectionBuilder #short descriptive title identifying main purpose/use and possibly technology
objectlink: https://collectionbuilder.github.io/ # full url to the main tool/project site
github-repo: https://github.com/collectionbuilder/ # link to the main tool/project github repository, only if different
documentation: https://collectionbuilder.github.io/docs/introduction.html # link to documentaton, if avialble. 
description: CollectionBuilder is an open source tool for creating digital collection and exhibit websites that are driven by metadata and powered by modern static web technology. There are four types currently in development. # short description providing contextual information about the uses, technologies, examples, tools, and/or category the recipe addresses 
category: Digital Collection; # Choose from: (Digital Collection; Institutional Repository; Research Guide; Qualitative Data Analysis; Oral History; Library Website; Critical Edition; OER; Screwing-Around;) or add a new one -- separate multiple using semi-colons.
technologies: Jekyll; Ruby; Rake; JavaScript; Bootstrap; YouTube; Leaflet; JSON; # list the required technologies (broadly speaking - include APIs, services, etc.) important to and/or necessary for your recipe; separate by semi-colon. Include the site generator first. Example: jekyll; bootstrap;svg;
software-requirements: The GH version can be used solely via GitHub's web interface (with a GitHub account). The other versions require <a href='https://collectionbuilder.github.io/docs/software.html'>Git, Ruby, and Jekyll</a>. The ES version also requires <a target="_blank" href='https://github.com/CollectionBuilder/collectionbuilder-sa_draft#collectionbuilder-sa_draft'>ImageMagick, GhostScript, ElasticSearch, and connections with some cloud services</a>.  # Free text statement describing software installs required before getting started on a local computer.
people: # list all people responsible for code development
#example person
- name: Devin Becker # full name
  github: dcnb # GitHub username
- name: Evan Williamson # full name
  github: evanwill # GitHub username
- name: Olivia Wikle # full name
  github: owikle # GitHub username
images: # try and keep it to no more than 2-3 images. 
- filelocation: https://collectionbuilder.github.io/images/home/map.jpg # filename for image, including url, or extension and folder of this repository (i.e. '/images/picture.jpg')
  caption: Leaflet Map Generated from Metadata # caption for image
- filelocation: https://collectionbuilder.github.io/images/home/timeline-postcards.png # filename for image, including url, or extension and folder of this repository (i.e. '/images/picture.jpg')
  caption: Auto-Generated Timeline # caption for image
- filelocation: https://collectionbuilder.github.io/images/home/browse.png # filename for image, including url, or extension and folder of this repository (i.e. '/images/picture.jpg')
  caption: Interactive Browsing Feature # caption for image
code: #code that you think others might find useful from the project, sketch or tool
- title: Timeline JS Visualization # a helpful short description of the code piece or pieces that do the thing you think another person might like to do. 
  codelink: https://github.com/CollectionBuilder/collectionbuilder-gh/blob/master/assets/data/timelinejs.json; https://github.com/CollectionBuilder/collectionbuilder-gh/blob/master/_includes/feature/timelinejs.html# link to where people can view the piece of code, preferabbly in a GitHub repo -- separate multiple links by semi-colon
  demolink: https://www.lib.uidaho.edu/digital/1918flu/ # url of page where this code works, demonstrating the features. 
  description: Generate a Timeline JS Visualization from a CSV file, which can also be filtered based on characteristics # brief description of the piece of code - how it's used in project/sketch/tool + how it might be used
  technologies: JSON; JavaScript; # list the required technologies (broadly speaking) important to and/or necessary for your recipe; separate by semi-colon. Include the site generator first. Example: jekyll; bootstrap;svg;
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




