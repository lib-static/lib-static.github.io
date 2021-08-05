---
title: Publication and Preservation
author: Olivia Wikle
---

### Publication

When you build a static website, you generate a series of pre-rendered html, css, and javascript files. To deploy your site, you'll need to transfer these flat files to a web server of your choice. A simple server will work just fine; because you're pre-rendering the files, your site won't need to run complex scripts or access a database when a user requests a webpage.

Not sure where to serve it? There are quite a few cloud-based options, many of them free. 

Here are just a few:

- [GitHub Pages](https://pages.github.com/)
- [Netlify](https://www.netlify.com/)
- [Render](https://render.com/)
- [Cloudfare](https://www.cloudflare.com/)
- [Reclaim Hosting](https://reclaimhosting.com/)
- [Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html)

---

### Preservation

Keep in mind that because your site's code is generated completely *before* being served, your website will remain functional for users over the long-term, even if you were to never update it again (though, if you never update it, it will probably start to look outdated!). This means less maintenance work to preserve your site's performance and functionality. There are three parts to your static project that you'll want to think about preserving:

#### Template code

This is the code/scripts that, combined with your project's data, enable a static site generator to produce the code for your website.

**Preservation**: Often this is stored in a cloud-hosted repository service such as [GitHub](https://github.com/). You can back up this repository by storing it in a personal or institutional dark archive, or consider using a tool such as [Zenodo](https://guides.github.com/activities/citable-code/) to archive a GitHub repository and assign it a DOI.

#### Data

This is your project's content: data formatted in csv/yaml/json files, written content in markdown/html files, and/or digital objects such as images, pdfs, audio, or video.

**Preservation**: When creating your project, you probably created clean, well-structured content in standard formats (if you didn't, go back and do this!). Because of the care you put into creating them, they should be ready for preservation. Store them in a personal or institutional dark archive.

#### Site code

These are the pre-rendered flat html, css, and javascript files that constitute your website.

**Preservation**: Store these files in a personal or institutional dark archive.