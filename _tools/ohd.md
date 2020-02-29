---
objectid: ohd # a short identifier with no spaces, weird characters, etc.
title: Oral History as Data #short descriptive title identifying main purpose/use and possibly technology
description: "The Oral History as Data (OHD) tool is a static website generator that allows users to analyze and publish coded oral history or qualitative interview files. By turning transcriptions into tagged/coded CSV files, adding a list of filters, and creating a simple markdown file for each interview (to be included in the _transcipt collection), OHD will provide filterable transcripts and a color coded visualization for all transcripts included." # short description providing contextual information about the uses, technologies, examples, tools, and/or category the recipe addresses
related-project: ctrl-shift;voicesofgayrodeo # use the objectid of the project that was built with this tool; if more than one, separate by semi-colon. 
category: Qualitative Data Analysis; Oral History; # Choose from: (Digital Collection; Institutional Repository; Research Guide; Qualitative Data Analysis; Oral History; Library Website; Critical Edition; OER; screwing-around;) or, if you have to, add a new one
generator-type: jekyll # list the static site generator that enables the tool 
technologies: CSV, SVG; javascript filter; bootstrap; 	# list the required technologies (broadly speaking) important to and/or necessary for your recipe; separate by semi-colon. Example: bootstrap;svg;
people: dcnb # provide the github ids of the person and/or people developing this recipe; separate multiple people by semi-colon
image1: ohd1.png # filenames for main image, including extension and folder
image1-caption: Colorful, SVG-based visualization for interviews based on coded subjects. Uses a liquid loop to assign colors based on subjects and pull CSV transcript into a colorful, interactive bar for exploring the interview by subject.  # caption for main image
image2: ohd2.png # OPTIONAL -- filenames for secondary image
image2-caption: Interactive transcript page generated for each transcrip CSV. # OPTIONAL -- caption for secondary image
---

### Context

Oral History as Data (OHD) was initially developed by Devin Becker for use in his CTRL-Shift web project in order to visualize the coded subjects for each interview. It has since been more fully developed and implemented into oral history collection sites for the Voices of Gay Rode and Idaho Queered projects and used as the analysis tool for a qualitative study of University of Idaho researchers. The development of the tool has has been supported by funding from the University of Idaho Library's [Center for Digital Inquiry and Learning](http://cdil.lib.uidaho.edu) and IMLS.

### How To 

