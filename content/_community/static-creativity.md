---
title: Waking Up to Static
contributor: "@dcnb"
updated: 2021-08-04
type: pathways
---

I was sleeping in the basement guest room. We had a baby. He'd been sick that summer. My wife was kind to me the night before; she said, "go sleep in the basement and catch up." 

And I did, fell right asleep and slept through the night, or almost. It was 5AM when, my body unsure of what it was feeling -- *could I have slept for more than 3 hours in a row* -- woke itself expecting some sort of calamity and my mind, finding none, settled into its usual annoying pattern and began to walk through the various projects I had to do at work or at home. 

Luckily, navigating its bureaucratic maze of worry, my mind stuck on a design problem I'd been thinking of the day before: What to do with these interviews I had, interviews that were coded by subject, that I had ported into my static project as CSVs. I had even gotten them to be vaguely interactive, using some simple CSS and jQuery to turn, as most scripts seem to, display options on and off based on a button clicked or an option selected. 

But there were many interviews, so I wondered how I could get them altogether in such a way that patterns might emerge, that people could see them at scale and then drill into the portions they found interesting? 

I thought about a box I had recently made using SVG on a web page. It wasn't that hard -- it needed a base, what they called a canvas, and then an x and y coordinate where it started on the canvas and a volume based on width and height. 

I thought, I could make a lot of boxes, a box for each paragraph basically, color them based on code. 

Could I have the colors turn on and off based on a legend? I could. I was good at turning things on and off, even if my code was inelegant. 

Could I list the relevant text below. Why not? It's just a page, but a page of text-- small in file size, quick to load. 

This isn't, I admit, Michelangelo seeing David in a piece of marble or Philip Glass hearing melodies in a water fountain, and the visualization I came up with, first for my interview project CTRL+Shift and then as the framework Oral History as Data, will likely not be a visualization that our generation's Tufte immortalizes in some book. 

But it did have something elemental to it, something simple, and even insightful in its display, and I felt thinking it up much as I did when coming up with the idea for poem (I was a poet before I worked in libraries) ...  thinking of a first line, or rhythm to follow. And then, when I executed my idea in code, I felt as I did when I knew I wasn't writing something terrible, that I had something. 

Now I have also had these type of eureka moments that turned out terrible or crazy in their execution. Just ask my colleagues about some emails they've received, or doomed pilot projects I've tried to get them excited about. But those are good too; how else to learn? 

And it's not like I needed static web practices in particular to do this. There are ways to do this using PHP, or in a python app. 

But the simplicity of the static approach, and the ease of the infrastructure involved, allowed me to take the idea, think it through, and then start executing all within a morning, at home in my little basement room with the broken light fixture. 

And the static approach, and my learning Jekyll in particular, had let me start to think about these interviews as data more easily, the templating and iteration that the generators facilitated let me think about the content of what I was working on and the content of its interpretations differently. I really was able to think of the interviews as data. 

And, most importantly, I wasn't getting stuck any more by thoughts like "I can't do that" or "I'd need help for that" -- I had learned in building CTRL+Shift and working with my grad student collaborators, I could build some version of what we thought up. It might not be the most beautifully designed web display ever, but I could make it work, then make it better. And the ideas behind how we displayed the content were sound, and the outputs and interpretations they allowed added to our study. 

So that is the reason I find this lib-STATIC approach so liberating. I don't need to wait for the Stanfords, Yales, or Googles of the world to create the application that displays the content I care about in the way I feel it wants to be displayed. I can steal code and debug issues and surf Stack Overflow until my eyes bleed and end up  cobbling something together that fits what I see. 

And (***and! And!***) then I can work with others to make tools and frameworks (and projects like lib-STATIC) that can help others do the same. 
