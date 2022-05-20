---
title: Waking Up to Static
contributor: "@dcnb"
updated: 2021-08-04
type: Pathways
subtitle: Sleep deprivation and way too many hours working spreadsheets leads to a static-web-based information visualization idea
---

I was sleeping in the basement guest room. We had a baby. He'd been sick that summer. My wife was kind to me the night before; she said, "go sleep in the basement and catch up." 

And I did, fell right asleep and slept through the night, or almost. It was 5AM when my body, unsure of what it was feeling (*could I have slept for more than 3 hours in a row*), woke itself expecting some sort of calamity and my mind, finding none, settled into its usual bureaucratic maze of worry. 

I started thinking about some interviews I'd done recently with poets, and what I might do with them, now that they were coded and ported into my static web project as CSVs. 

How could you present them as a collection, I wondered. How might you create some feature that enabled the collection's patterns and intersections emerge?

Then I thought about a box, an SVG box, specifically, one that I had made recently via a web tutorial. 

I could make a lot of boxes, I thought, a box for each paragraph basically, color them based on the codes assigned them. Do that for each interview then have an interactive legend at the top that lets users click a button to see the topic represented across the collection ... 

This isn't, I readily admit, Michelangelo seeing David in a piece of marble or Philip Glass hearing melodies in a water fountain. The visualization I came up with, first for my interview project [CTRL+Shift](https://ctrl-shift.org/subjectviz/) and then as [the framework Oral History as Data](https://oralhistoryasdata.github.io/), will likely not be a visualization that our generation's Tufte immortalizes in some book. 

But it did have something elemental to it, something simple, even insightful in its display, and I felt thinking it up much as I did when coming up with the idea for poem (I am a [poet](https://www.boaeditions.org/products/shame-shame) in another life)--  hearing a first line emerge in my head, then writing it down and having the rhythm it establishes to follow as I write the rest. 

And then, when I executed my idea in code, and I saw it on the screen, I felt the same way I do when I know I didn't write something terrible (a rare feeling!). I knew that I had something. 

{% include figure.html img="armantrout_ctrl.png" caption="The visualization in question" link="https://ctrl-shift.org/subjectviz/" alt="A visualization of the poet Rae Armantrout's interview for CTRL+Shift" %}

Now it's not like I needed static web practices in particular to do this. There are ways to do this using PHP, or in a python app. 

But the simplicity of the static approach, and the ease of the infrastructure involved, allowed me to take the idea, think it through, and then start developing the code all within a morning, at home in my little basement room with the broken light fixture. 

The lib-static approach led me to think about these interviews "as data" more easily; the templating and iteration that the generators facilitate allowed me to better envision my content and its possible interpretations as bits awaiting manipulation and interpretation. 

Most importantly, I wasn't getting stuck any more by thoughts like "I can't do that" or "I'd need to contact IT for that" -- I had learned in building CTRL+Shift and working with my grad student collaborators, I could build some version of whatever we thought up. 

It might not be the most beautifully designed web display ever, but I could make web designs that worked, then make them better. 

And it was rewarding to be able to use the outputs and interpretations created by the visualization to add to the findings of our study. 

So that is the reason I find this Lib-Static approach so liberating. I don't need to wait for the Stanfords, Yales, or Googles (no offense to them!) of the world to create the application that displays the content I care about in the way I feel it wants to be displayed. 

I can steal code and debug issues and surf Stack Overflow until my eyes bleed and end up cobbling something together that fits what I see. 

And (***and! And!***) then I can work with others to make tools and frameworks (and projects like Lib-Static) that can help others do the same. 
