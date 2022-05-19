---
title: "CTRL+Shift"
type: Models Of
contributor: "@dcnb"
updated: 2021-08-04
description: "CTRL-Shift is an online collection of audio recordings, transcripts, process visualizations, and data analyses broken out from interviews conducted with 11 prominent contemporary American poets from across the United States. "
project_link: https://ctrl-shift.org/ 
project_repository: https://github.com/ctrlshifty/ctrlshifty.github.io 
project_genre: Poetry; Qualitative Data Analysis; Oral History; Screwing-Around 
project_creators: "@dcnb; Corey Oglesby; Lauren Westerfield" 
image: /images/ctrlshift1.jpg 
image_alt: CTRL-Shift home page featuring open book pages of writing
---

Build using an early version of [Oral History as Data]({{ '/models/ohd/' | relative_url }}).
Uses: Jekyll; CSV; SVG; JavaScript; Bootstrap; Voyant; YouTube.

Interpretive and generated visualizations for writing process and coded transcript, respectively, are created for each poet.

![process visualization example]({{ '/images/ctrlshift3.png' | relative_url }}){:.img-fluid}

[Writing process visualization](https://ctrl-shift.org/processes/) is generated using YML and HTML Table, and a Liquid based layout that uses the processes.yml file to generate a grid of writing process visualizations with additional details appearing as tooltips when hovered.

[YouTube Transcription Poem Generator](https://ctrl-shift.org/flotsam/genpoems/), is created by automated transcriptions downloaded from YouTube into a collection folder, then transformed using Liquid and some Javascript.

![random generated poem]({{ '/images/ctrlshift2.png' | relative_url }}){:.img-fluid}

