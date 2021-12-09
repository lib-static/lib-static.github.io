---
objectid: ohd # a short identifier with no spaces, weird characters, etc.
objecttype: framework # either tool, project, or sketch
title: Oral History as Data #short descriptive title identifying main purpose/use and possibly technology
objectlink: https://uidaholib.github.io/oral-history-as-data/ # link to the main tool/project site
github-repo: https://github.com/uidaholib/oral-history-as-data # link to the main tool/project github repository, only if different
description: "The Oral History as Data (OHD) tool is a static website generator that allows users to analyze and publish coded oral history or qualitative interview files." # short description providing contextual information about the uses, technologies, examples, tools, and/or category the recipe addresses
development-state: in production # [OPTIONS: early stages; in development; in production ]
related-project: 
- title: CTRL+Shift
  url: https://ctrl-shift.org
  objectid: ctrlshift # use the object id of the corresponding project if it is listed in Lib-STATIC; if not, leave blank
- title: Voices of Gay Rodeo
  url: https://voicesofgayrodeo.com  
  objectid: # use the object id of the corresponding project if it is listed in Lib-STATIC; if not, leave blank
category: Qualitative Data Analysis; Oral History; # Choose from: (Digital Collection; Institutional Repository; Research Guide; Qualitative Data Analysis; Oral History; Library Website; Critical Edition; OER; screwing-around;) or, if you have to, add a new one
technologies: Jekyll; CSV; SVG; JavaScript; Bootstrap; YouTube; SoundCloud; Vimeo;	# list the required technologies (broadly speaking) important to and/or necessary for your recipe; separate by semi-colon. Include the site generator first. Example: jekyll; bootstrap;svg;
software-requirements: This tool can be used entirely through the GitHub.com web interface, and the generated website can be published via GitHub pages. To use the tool on a local computer, you would need to install Git, Ruby, and Jekyll. # Free text statement describing software installs required before getting started on a local computer.
people: # list all people responsible for code development
- name: Devin Becker
  github: dcnb # provide the name / github ids of the person and/or people developing this recipe; separate multiple people by semi-colon
  website: https://devinbecker.org # optional -- points to site for individual. 
images: # try and keep it to no more than 2-3 images. 
- filelocation: /images/ohd1.png # filename for image, including url, or extension and folder of this repository (i.e. '/images/picture.jpg')
  caption: Colorful, SVG-based visualization for interviews based on coded subjects.  # caption for image
- filelocation: /images/ohd2.png # filename for image, including url, or extension and folder of this repository (i.e. '/images/picture.jpg')
  caption: Interactive transcript page generated for each transcript CSV.  # caption for image  
code: 
- title: Interactive SVG-based/color-coded transcript visualization
  url: https://github.com/uidaholib/oral-history-as-data/blob/master/_includes/js/visualization-js.html; https://github.com/uidaholib/oral-history-as-data/blob/master/_layouts/visualization.html # link to where people can view the piece of code, preferabbly in a GitHub repo
  description: Liquid based SVG layout and interactive javascript features combine to build the color-coded horizontal bars that allow users to investigate transcripts via coded subjects. # brief description of the piece of code and how it's used. 
  page: https://uidaholib.github.io/oral-history-as-data/visualizations.html # url of page where this code works
- title: Searchable/Filterable Transcript
  url: https://github.com/uidaholib/oral-history-as-data/blob/master/_includes/js/transcript-js.html; https://github.com/uidaholib/oral-history-as-data/blob/master/_layouts/transcript.html # link to where people can view the piece of code, preferabbly in a GitHub repo
  description: Liquid based layout using transcript CSVs and interactive javascript features for creating the search- and filter-able transcripts, using URL parameters and Liquid. Paremeters enable linked sharing.  # brief description of the piece of code and how it's used. 
  page: https://uidaholib.github.io/oral-history-as-data/transcripts/gluck.html?filter=career # url of page where this code works
---

### Context

Oral History as Data (OHD) was initially developed by Devin Becker for use in his CTRL-Shift web project in order to visualize the coded subjects for each interview. It has since been more fully developed and implemented into oral history collection sites for the Voices of Gay Rode and Idaho Queered projects and used as the analysis tool for a qualitative study of University of Idaho researchers. The development of the tool has has been supported by funding from the University of Idaho Library's [Center for Digital Inquiry and Learning](http://cdil.lib.uidaho.edu) and IMLS.

### How To 

