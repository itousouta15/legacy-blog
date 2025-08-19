---
title: My First Website Building Experience
date: 2025-04-04 18:29:32
tags: 
  - Hexo
categories:
  - 前端
sticky: false
cover: /img/mainweb.webp
urlname: firstblog
lang: en
---

# From C++ to Frontend: My First Cross-Disciplinary Experience
I started programming relatively late compared to other coding prodigies—around the first semester of my first year in high school, learning C++. I decided to pursue this path for university admissions, aiming for cybersecurity and competitive programming (mainly because I was afraid I'd starve if I went into frontend, haha). Still, I wanted to challenge myself and try web development (for academic requirements). However, **this time I didn't build the website from scratch, but used the Hexo framework and an existing template** (my skills weren't enough yet). Although the process was relatively simple, it gave me a basic understanding of website structure (I'll rewrite everything in my second year).

# Choosing and Preparing for the Hexo Framework
## Why Hexo?
When I first got into web development, I faced a problem: where should I start? After browsing many personal sites, I discovered Hexo. Hexo is a fast, simple, and efficient static site generator—perfect for someone like me with limited skills. Its advantages include:
> **Easy to use**: Just install Node.js and npm (very friendly for Linux users), and you can quickly set up a site.

> **Markdown support**: For beginners unfamiliar with HTML, writing content in Markdown is very user-friendly.

> **Rich templates**: There are plenty of ready-made templates to choose from, making it easy to create a beautiful site.

With Hexo, I could focus on content creation instead of technical details. For someone just starting out, it was an ideal choice.

## Applying the Template
Once I decided to use Hexo, I quickly found a template I liked: the Reimu theme by D-Sketon. Its style immediately caught my attention (yes, I'm a bit of an otaku). But I didn't know that the real challenge was just beginning....

# Hands-on Experience and Thoughts
## Major Roadblocks
The first problem I encountered was: "How do I build a Hexo site on Linux?" My computer runs Linux, and I'd never cloned anything from GitHub or used Hexo before. Just setting up the environment took me a while—Node.js, npm, Hexo CLI, permissions... I had to figure everything out by searching online.

But the real issue came when deploying to GitHub Pages. The backend kept reporting "Reimu theme not found." I checked that all files were uploaded and paths were correct, but nothing worked. **I didn't realize that GitHub Pages enables the Jekyll processor by default, but my site was built with Hexo... no wonder it wouldn't run!**

I was stuck on this for almost a month, trying everything. One day, I finally asked AI for help, and it suggested: "Put an empty file named .nojekyll in the root directory."
I still don't know exactly why this works, but at least it did (◉３◉)

(2025/04/09 update) I realized that to implement i18n, I'd have to rewrite the whole structure...

## The Impact of `AI`
The recently popular "Vibe Coding" emphasizes **"going with the flow, embracing AI, and forgetting about the code itself"**. This approach frees developers' minds, making the creative process more like painting or composing music, rather than writing code line by line.

Although this project wasn't true "vibe coding," about **40% of the problems** I encountered were discovered and solved with AI's help. From CSS syntax errors to YAML formatting issues and Hexo config details, AI caught bugs I hadn't even noticed and offered fixes.

While AI can provide instant and accurate help in many situations, sometimes it goes off track with complex or nuanced problems.

For example, a few times I had YAML syntax errors, and AI's suggestions looked correct but were only "superficially right"—the indentation was fine, but the logic was wrong, so Hexo still didn't work. Sometimes it gave outdated solutions or syntax that didn't exist, especially for niche features or custom components.

Another issue is **"over-reliance on AI"**. Once you get used to asking AI, you spend less time searching for answers or reading docs yourself, and your debugging skills can decline. If AI's answer misses the mark and you don't know how to debug, you can get stuck for even longer.
(These days, some people don't even know how to use git!)

## The Importance of English
With the rise of AI, I often overlooked the importance of English, thinking that as long as I could code, I'd be fine. But during this project, I realized that tools like VS Code, Cursor, and GitHub are almost entirely in English. Whenever I ran into problems, I had to spend a lot of time reading English docs and error messages, trying to understand them (sometimes I really couldn't!).

These experiences made me realize that English is not just a "bonus" for CS students—it's a **must-have skill**. From technical docs to programming keywords and international developer communities, English is everywhere. Without basic English skills, your learning progress will slow down, and you might miss out on valuable resources and opportunities.

This project taught me: I won't dare sleep in English class anymore!

# Reflection and Future Plans
## Sense of Achievement and Shortcomings
Using Hexo and a template to build my site gave me a sense of accomplishment I'd never felt before. Every step from nothing to something was fun (and painful). With the help of LLMs, I could quickly solve problems and implement features I once thought were too complex.

However, there were still shortcomings:

> **Reliance on templates and AI**: Since I mainly used a template and AI assistance, my understanding of the underlying structure and logic is still shallow.

> **Lack of independence**: Although AI solved many problems, some code was generated by AI, and I didn't fully grasp its logic, which could make future maintenance harder (but I can always rewrite it!).

## Future Plans
This experience sparked my interest in web development (one step closer to starving, haha) and pointed me in some new directions. I hope to improve in the following areas:

> **Build a site from scratch**:
Next time, I plan to learn HTML, CSS, and JavaScript from the ground up and try building a simple static site (or maybe dynamic?). This will help me understand the basics of web development and improve my independence.

> **Explore backend technologies**:
Besides frontend, I want to learn backend tech like Node.js or Python Flask to understand server-side logic and database operations.

> **Combine cybersecurity and competitive programming**:
As someone familiar with C++ and interested in cybersecurity and competitive programming, I want to combine these skills. For example, while learning web development, I'll try to understand common vulnerabilities (like XSS, SQL injection) and how to prevent them. I can also study how to apply efficient algorithms to web features.

> **Reduce reliance on AI tools**:
While `AI` is super convenient, I hope to gradually rely less on it and do more development on my own.

# Conclusion

**This project helped me meet many people, learn a lot, and experience turning an idea into reality for the first time.**

From setting up the blog, learning Hexo, changing themes, tweaking styles, to researching deployment, debugging, and learning Markdown, I realized that building a website isn't just about coding—it's a way to express, organize, and share. **Although there's still much to improve, this blog represents my effort and growth during this time.** I'll keep updating it, documenting my learning journey, and hope to meet more like-minded friends to write, share, and improve together.

Finally, I want to encourage all beginners: don't be afraid to try new things. Even if you start with templates or rely on AI, **every bit of effort is part of your growth**. In the future, I hope to create a site that's truly my own, combining cybersecurity and competitive programming to achieve more possibilities.

# Special Thanks
## Special thanks to coding master **`Small R`** [`Small R`](https://smallr-portfolio.vercel.app/en) for helping me fix the Waline comment system bugs!
