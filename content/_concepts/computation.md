---
title: Leveraging Computation
author: "@elotroalex"
date: 2021-08-04
type: concept
---

Part of what makes static web frameworks powerful is the access to project files at all levels. Besides being able to more easily change the look or structure of the pages on your project, you can usually add automation or *computation* with fewer obstacles.

Let's take a Table of Contents (ToC) as an example. There are generally two different ways to build one. You can literally write it out by hand, and every time there is a change you can go and add it to the file where you wrote it; or, you can write a little script—a little machine—that can create it for you based on new files being added that meet a certain criteria. When we speak of computation or automation, we speak of the latter process. 

Computation is already central to static web frameworks. It is used to transform your [data from one format to another](/concepts/data/), to convert your [templates](/concepts/templates/) into a full blown site, and much more. Despite this ubiquity, computation remains somewhat mysterious to the average user. It doesn't need to be this way.

Four basic actions lie at the core of computation. In order for us to say that a machine can compute, it must be able to do all four actions. The digital universe is built on a combination and massive organization of these basic building blocks:

1. *Input and Output*: Data goes in one way, and it comes out another way after some process. We can call that process a black box when we don't know what it is. The input and output are sine qua nons of computation. 

2. *Assignments*: We have to be able to say that something belongs to something else, to connect two different things, to assign one to the other. This works like variables. We can say that the variable `x` is the same as all the data in Wikipedia, or that this place in the hard drive is where this piece of data belongs. A computer has to be able to assign something to something else.

3. *Logic*: Think flow chart here. We have to be able to evaluate whether something is true or not and do different things accordingly. The jargon for this is "control flow," but it's nothing more than a flow chart. Software usually has immense control flows. In our ToC example, we would use one of these to evaluate whether a new page meets the criteria or not to be included in the ToC.

4. *Iteration*: Finally, in order to be a computer proper, our machine must be able to repeat the same action over and over again. If our ToC has many entries, it must be able to do the same thing to each. This is not hard to imagine. If we want to display our contents using a standard format, say Title and Author, we can ask our machine to pick that data and write it all one by one in the same format. 

These actions belong to most programming languages you will encounter. Certainly there will be variations in syntax, organization and structure, but the actions will be available to you. In static web development you will be using computation mostly in two domains: to tweak the [template](/concepts/templates/) itself to automate the content creation, or to change the front end functionality of the site. This latter is almost always JavaScript. The former could be [a number of things](https://en.wikipedia.org/wiki/Template_processor).