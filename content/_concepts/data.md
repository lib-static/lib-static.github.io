---
title: Thinking Through Data
contributor: "@dcnb"
updated: 2021-08-04
type: concept
---

***tl;dr***

- For static web projects to work, data needs to be structured following framework-specific guidelines and/or professional standards
- Static web projects transform data to create their features and utility
- Data can be transformed into different data formats and outputs to enable preservation and reuse of the data. 

Static web applications and [frameworks](/gallery/) depend on data structures and data transformations to enable their features and utility. Data can be structured via a variety of formats, including tabular data represented most often via [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) spreadsheets, semi-structured data represented as [JSON](https://en.wikipedia.org/wiki/JSON), and human readable key-value pairs listed in [YAML](https://en.wikipedia.org/wiki/YAML) files or frontmatter. These formats are all plain text formats, and making sure that your content and files are in [plain text](/concepts/plaintext) is essential for static sites and frameworks to operate.  

### Data Requirements

The important thing to remember in regards to a static context is that any static framework or model you might be working on will require certain features of your data. These might include:

- specific field names 
    - certain static frameworks, for instance, require specific fields, (such as `title` or `objectid`) because their displays and logic depend on referencing those fields
- specific ways of formatting that data 
    - field names often need to be lowercase
    - there are often specific means for delimiting data within fields as well (i.e. by using a semi-colon, comma, or other character to disambiguate entities within a field -- for instance, multiple authors or subjects). 

### How Static Site Generators use Data

Static web projects and frameworks depend on users following specific data requiremnts in order to make available, via data transformation, the visualization and alternative data output features core to their use. They do so because the features their building will also require data be ingested into their scripts or [templates](templates.html) in specifically organized and formatted ways in order for the visualizations to work. 

Static web frameworks can enable a number of different types of visualizations and interactions, as well as a variety of additional data outputs, by iterating over collection and configuration data. This enables a user to focus on their collection or exhibit data as a whole rather than learning a series of specific ways of represeting that data for various scripts or presentations.

### Data Transformation as Preservation Practice

Many static projects and frameworks, especially those coming out of the library world, use this inherent data transformation ability to provide project data in a variety of open formats. For instance, [CollectionBuilder](https://collectionbuilder.github.io/) (following the [#collectionsasdata](https://collectionsasdata.github.io/) mantra) provides digital collection data in several different formats, including CSV and JSON files that present the entirety of the collection to [GEOJSON](https://geojson.org/) files of just those items that have latitude and longitude to enable reuse in various mapping applications. 

This transformational ability allows project/collection data: 

- to be reused in a variety of contexts; 
- to be preserved in open, reusable formats going forward;
- and to enable certain machine learning and indexing functions, 
    - such as providing structured data in the "<head>" of html files to allow for better discovery via Google and other search engines.)

