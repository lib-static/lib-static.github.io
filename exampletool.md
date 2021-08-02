---
objectid: blank # a short identifier with no spaces, weird characters, etc.
objecttype: project # either tool or project
title: TITLE #short descriptive title identifying main purpose/use and possibly technology
objectlink: LINK_to_Project # link to the main tool/project site
github-repo: LINK_to_GitHubRepo # link to the main tool/project github repository, only if different
description: "Project Description" # short description providing contextual information about the uses, technologies, examples, tools, and/or category the recipe addresses 
development-state: middle # [OPTIONS: very very early, early, middle, mature, finished, sunset ]
related-project: project1_objectid;project2_objectid # use the objectid of the project that was built with this tool; if more than one, separate by semi-colon. 
category: Qualitative Data Analysis; Oral History; # Choose from: (Digital Collection; Institutional Repository; Research Guide; Qualitative Data Analysis; Oral History; Library Website; Critical Edition; OER; screwing-around;) or, if you have to, add a new one
generator-type: jekyll # list the static site generator that enables the tool 
technologies: CSV, SVG; javascript filter; bootstrap; 	# list the required technologies (broadly speaking) important to and/or necessary for your recipe; separate by semi-colon. Example: bootstrap;svg;
software-requirements: This tool can be used entirely through the GitHub.com web interface, and the generated website can be published via GitHub pages. To use the tool on a local computer, you would need to install Git, Ruby, and Jekyll. # Free text statement describing software installs required before getting started on a local computer.
people: Devin Becker/dcnb # provide the name / github ids of the person and/or people developing this recipe; separate multiple people by semi-colon
image1: ohd1.png # filenames for main image, including extension and folder
image1-caption: Colorful, SVG-based visualization for interviews based on coded subjects.  # caption for main image
image2: ohd2.png # OPTIONAL -- filenames for secondary image
image2-caption: Interactive transcript page generated for each transcript CSV. # OPTIONAL -- caption for secondary image
---

### Context

Oral History as Data (OHD) was initially developed by Devin Becker for use in his CTRL-Shift web project in order to visualize the coded subjects for each interview. It has since been more fully developed and implemented into oral history collection sites for the Voices of Gay Rode and Idaho Queered projects and used as the analysis tool for a qualitative study of University of Idaho researchers. The development of the tool has has been supported by funding from the University of Idaho Library's [Center for Digital Inquiry and Learning](http://cdil.lib.uidaho.edu) and IMLS.

### How To 
