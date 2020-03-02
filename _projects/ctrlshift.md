---
objectid: ctrlshift # a short identifier with no spaces, weird characters, etc.
objecttype: project # either tool or project
title: "CTRL+Shift: Writing Practice at the Dawn of the Digital Age" #short descriptive title identifying main purpose/use and possibly technology
objectlink: https://ctrl-shift.org/ # link to the main tool/project site
github-repo: https://github.com/ctrlshifty/ctrlshifty.github.io # link to the main tool/project github repository, only if different
description: "CTRL-Shift is an online collection of audio recordings, transcripts, process visualizations, and data analyses broken out from interviews conducted with 11 prominent contemporary American poets from across the United States. " # short description providing contextual information about the uses, technologies, examples, tools, and/or category the recipe addresses 
category: Poetry; Qualitative Data Analysis; Oral History; Screwing-Around # Choose from: (Digital Collection; Institutional Repository; Research Guide; Qualitative Data Analysis; Oral History; Library Website; Critical Edition; OER; Screwing-Around;) or, if you have to, add a new one
technologies: Jekyll; CSV; SVG; JavaScript; Bootstrap; Voyant; YouTube; # list the required technologies (broadly speaking) important to and/or necessary for your recipe; separate by semi-colon. Include the site generator first. Example: jekyll; bootstrap;svg;
people: # list all people responsible for code development
- name: Devin Becker
  github: dcnb
  website: https://devinbecker.org # optional -- points to site for individual. 
- name: Corey Oglesby
  website: http://coreyoglesby.com/ # optional -- points to site for individual. 
- name: Lauren Westerfield
  website: http://www.laurenwesterfield.com/ # optional -- points to site for individual. 
images: # try and keep it to no more than 2-3 images. 
- filelocation: /images/ctrlshift1.jpg # filename for image, including url, or extension and folder of this repository (i.e. '/images/picture.jpg')
  caption: Website home page.  # caption for image
- filelocation: /images/ctrlshift2.png # filename for image, including url, or extension and folder of this repository (i.e. '/images/picture.jpg')
  caption: Poem generator based on youtube automatic transcription. # caption for image  
- filelocation: /images/ctrlshift3.png # filename for image, including url, or extension and folder of this repository (i.e. '/images/picture.jpg')
  caption: Interpretive and generated visualizations for writing process and coded transcript, respectively, are created for each poet.  # caption for image  
code: 
- title: YouTube Transcription Poem Generator
  url: https://github.com/ctrlshifty/ctrlshifty.github.io/blob/main-branch/_layouts/poems.html;https://github.com/ctrlshifty/ctrlshifty.github.io/tree/main-branch/_genpoems  # link to where people can view the piece of code, preferabbly in a GitHub repo
  description: Automated transcriptions are downloaded from YouTube into a collection folder, then transformed using Liquid and some Javascript. # brief description of the piece of code and how it's used. 
  technologies: JavaScript; Liquid; YouTube # list the required technologies (broadly speaking) important to and/or necessary for your recipe; separate by semi-colon. Include the site generator first. Example: jekyll; bootstrap;svg;
  category: Screwing-Around # Choose one that relates from: (Digital Collection; Institutional Repository; Research Guide; Qualitative Data Analysis; Oral History; Library Website; Critical Edition; OER; Screwing-Around;) or, if you have to, add a new one
  page: https://ctrl-shift.org/flotsam/genpoems/ # url of page where this code works
- title: Writing process visualization using YML and HTML Table
  url: https://github.com/ctrlshifty/ctrlshifty.github.io/blob/main-branch/processes.html; https://github.com/ctrlshifty/ctrlshifty.github.io/blob/main-branch/_data/processes.yml;  # link to where people can view the piece of code, preferabbly in a GitHub repo
  description: Liquid based layout that uses the processes.yml file to generate a grid of writing process visualizations with additional details appearing as tooltips when hovered. # brief description of the piece of code and how it's used. 
  technologies: YML; Liquid; HTML Table # list the required technologies (broadly speaking) important to and/or necessary for your recipe; separate by semi-colon. Include the site generator first. Example: jekyll; bootstrap;svg;
  category: # Choose from: (Digital Collection; Institutional Repository; Research Guide; Qualitative Data Analysis; Oral History; Library Website; Critical Edition; OER; Screwing-Around;) or, if you have to, add a new one
  page: https://ctrl-shift.org/processes/ # url of page where this code works
---


