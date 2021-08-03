---
title: Structured Data and Data Transformation
---

***tl;dr***

- For static web projects to work, data needs to be structured following certain guidelines and/or standards
- Static web projects transform user data to create their features and utility
- User data can be transformed into different data formats and outputs to enable preservation and reuse of the data. 


Static web applications and frameworks depend on data structures and data transformations to enable their features and utility. Data can be strcutured via a variety of formats, including tabular data represented most often via CSV spreadsheets, semi-structured data JSON, and YML files or frontmatter. 

The important thing to remember in regards to a static context is that any static framework or model you might be working on will require certain features of your data, be these specific field names, specific ways of formatting that data (for instance, requiring field names be lowercase), or specific means of delimiting data within fields (i.e. by using a semi-colon, comma, or other character to disambiguate entities within a field -- for instance, multiple authors or subjects). Developers depend on these requirements when they structure the code that transforms user data into its various representations. 

Static web projects and frameworks depend on users following specific data models in order to make available, via data transformation, the visualization and alternative data output features core to their use. These features require data be ingested into their scripts or [templates](templates.html) in specifically organized and formatted ways in order for the visualizations to work. 

Static web frameworks can enable a number of different types of visualizations and interactions by creating a variety of data outputs from the structured data provide by users, thus enabling a user to focus on their collection or exhibit data as a whole rather than learning a series of specific ways of represeti.

Many static projects and frameworks, especially those coming out of the library world, use this inherent data transformation ability to provide project data in a variety of open formats. For instance, CollectionBuilder (following the #collectionsasdata mantra) provides digital collection data in several different formats, including CSV and JSON files that present the entirety of the collection to GEOJSON files of just those items that have latitude and longitude to enable reuse in various mapping applications. 

This transformational ability allows project/collection data: 
- to be reused in a variety of contexts; 
- to be preserved in open, reusable formats going forward;
- and to enable certain machine learning and indexing functions, 
    - such as providing structured data in the "<head>" of html files to allow for better discovery via Google and other search engines.)

