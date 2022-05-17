# Create a Website Using bootstrap5-template

[bootstrap5-template](https://github.com/thecdil/bootstrap5-template) is a basic template repository to create a [Bootstrap](https://getbootstrap.com/) site using Jekyll on GitHub Pages (or where every you want to host it). 
The layout is based on the [Bootstrap starter template example](https://getbootstrap.com/docs/5.1/examples/) with a navbar, search box (using lunr.js), and sticky footer.
It is intended as a quick starting point for creating new web projects.

The basic steps for using bootstrap-template are: 

1. create a new repository from the template
2. edit _config.yml
3. edit content pages
4. use customization options

## Set Up Repository

- Visit bootstrap5-template: <https://github.com/thecdil/bootstrap5-template>
- Make your own copy of the repository by clicking the green "Use this template" button (alternatively, use Import or manually copy files to a new repo).
    - Since the repository name will become part of the site URL, use a sensible name with no spaces or odd characters (dash or underscore are okay).
- Activate GitHub Pages. 
    - On your repository visit "Settings", click "Pages" on the side menu.
    - In the "GitHub Pages" settings, under "Source" select Branch "main" from the drop down, and click Save. 
    - Once activated, it will provide your new URL, following the pattern `https://username.github.io/repository_name`

## Edit _config.yml

The file "_config.yml" contains the central variables Jekyll uses to fill in template elements in your site.
Edit `_config.yml` with your site information:

- `title` will appear in the navbar with link to home page.
- `description`, `author`, and `year` appear in footer and meta tags.
- `search` can be set to `true` / `false`, true will include a search box in the navbar. The search box will search site content using lunr.js.
- URL variables (`url` and `baseurl`) are optional if using GitHub Pages, but should be filed in if hosting else where.
- `google-analytics-id` is optional. Add your Analytics id to automatically add the embed code to head. (alternatively, paste your the snippet provided by your analytics platform into the file "_includes/template/analytics.html")
- Set `noindex` to `true` if you do NOT want Google to index your site.
- Leave the Build settings section as is.

## Edit Content Pages

Edit and create pages in the "pages" folder.
Generally this will be done using Markdown (files with extension `.md`) or HTML (`.html`).
To include them in the navbar, add front matter option `nav` with the text you want to be displayed, e.g. `nav: Demo`.
Alternatively, if `nav: true` page will show up in navbar using the page `title`.
Use `nav_order` to control order of pages in the navbar.

Front matter options:

- `title` will appear as h1 at top of the page content (when using `page`, `page-full-width`, or `page-narrow` layouts only).
- `nav` if this option has a value, it will appear in the navbar as link to this page. (any stub without a `nav` value will not appear in the navbar)
- `nav_order` navbar items will be sorted using this number. 
- `layout` by default is set to `page`, but can be optionally added to override the default. Built in options are `default`, `page`, `page-full-width`, or `page-narrow`.

Use `includes` to simplify adding Bootstrap features to Markdown pages, see comments in `_include/` files for instructions.

## Customization Options

bootstrap-template has a few built in customization options enabling you to quickly tweak the template theme:

- Tweak base variables in `assets/css/custom.scss` (text color, link color, container size). The variables in this file work with `_sass/_template.scss` to set some default options.
- Tweak bootstrap theme colors using `_data/theme-colors.csv`. Add a css color in the color column next to the BS color-class to override, or create a new class name. This works with `_sass/_theme-colors.scss` to auto generate btn-, text-, and bg- classes based on your settings.
- Add custom CSS to `_sass/_custom.scss`. Styles in this file will override the template and bootstrap.

Once you exhaust the possibilities of these built in options, checkout the `_layouts/` and `_includes/template/` folders. 
These files provide the basic template and can be easily tweaked using Bootstrap classes.

## Template Assets

Project assets from external sources are included in assets/lib folder:

- [Bootstrap](https://getbootstrap.com/docs/5.1/getting-started/introduction/) 5.1
- [Bootstrap Icons](https://icons.getbootstrap.com/) 1.7.1
- [lunr.js](https://lunrjs.com/) 2.3.9
- [lazysizes](https://github.com/aFarkas/lazysizes) 5.3.2

They are included in this directory to ensure template projects can be self-contained and could be run with out connections to external dependencies or an internet connection. 
Links to these assets are contained in the `_includes/template/head.html` and `_includes/template/foot.html` files and could easily be replaced by CDN links if desired.
