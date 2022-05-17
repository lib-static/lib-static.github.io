---
title: The Letters of Marie Mancini 
type: Models Of
contributor: "@owikle"
updated: 2021-08-04
description: A digital edition of the 17th-century letters of Marie Mancini. Users can view letter translations side by side with digitized letters, and explore map and timeline visualizations.
project_link: https://cdil.lib.uidaho.edu/mancini/
project_repository: https://github.com/thecdil/mancini_source 
project_genre: Critical Edition; Digital Publishing
project_creators: "@owikle; Sarah Nelson (University of Idaho); Alessandro Martina (University of Wisconsin); Liam Marchant (University of Idaho)"
image: /images/mancini2.png
image_alt: Letter accompanied by annotated translation
---

Marie Mancini's (1639-1715) unpublished letters to Lorenzo Colonna (her estranged husband) and others reside in the Colonna Archive at the Library of the Abbey of Santa Scolastica, in Subiaco, Italy. 
The Letters of Marie Mancini is an initiative to transpose, translate, visualize, and make them available to the public.

The site is build using Jekyll, with Ruby Rake tasks used to transform TEI marked up texts into web ready formats.
Entities identified in the TEI are transformed into browseable glossaries of people and places.
The digitized document images are processed using Rake tasks provided by the Wax project to be served in a static IIIF api. 
