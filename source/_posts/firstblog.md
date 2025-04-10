---
title: My First Experience Building a Website
date: 2025-04-04 18:29:32
tags:
  - Hexo
categories: hexo
sticky: true
cover: /img/sumire.webp
---

# From C++ to Front-End: A Cross-Domain Journey

Compared to other coding prodigies, I started programming pretty late—around the first semester of my first year in high school, when I began learning C++. I decided to pursue a university track focused on information security and competitive programming (~~mainly because I was afraid I’d go broke doing front-end dev~~). Still, I wanted to challenge myself and try web development (part of the application requirements).  
That said, **this website wasn’t built entirely from scratch—I used the Hexo framework and applied a pre-built theme** (~~because I lack the skills~~). Even though the process was relatively simple, it gave me a basic understanding of website structure (planning to rewrite everything in my second year of high school).

# Choosing Hexo and Getting Set Up

## Why Hexo?

When I first started learning about web development, I was faced with a big question: where do I even begin? After looking at websites made by some coding gods, I came across the Hexo framework. Hexo is a fast, simple, and efficient static site generator—perfect for someone like me with ~~limited tech skills~~. Its advantages include:

> **User-Friendly**: You only need to install Node.js and npm (~~Linux-friendly too~~), and you can quickly set up a site.  

> **Markdown Support**: For beginners who aren’t familiar with HTML, writing in Markdown is very beginner-friendly.  

> **Plenty of Themes**: Tons of available themes make it easy to create a beautiful site.

Using Hexo allowed me to focus on content creation without getting bogged down by technical details. For someone just starting out with web development, it was the ideal choice.

## Applying a Theme

The moment I decided to use Hexo, I already had a theme in mind. Out of countless options, the Reimu theme by D-Sketon instantly caught the eye of my inner.  
Little did I know, **that was just the beginning of my descent into hell…**

# Hands-On Experience & Takeaways

## Major Roadblock

The first problem I encountered was: “How do I build a Hexo website on Linux?”  
My computer runs Linux, and I had never cloned a repo from GitHub or used Hexo before. Just getting the environment set up took forever. Node.js, npm, Hexo CLI, permission settings… I had to dig through forum posts and documentation on my own.

But the real nightmare was **deploying to GitHub Pages**. The site kept throwing errors saying it couldn’t find the Reimu theme. I double-checked—files were uploaded, paths were correct—but nothing worked.  
**What I didn’t know was that GitHub Pages enables the Jekyll processor by default, while I was using Hexo… of course it wouldn’t run.**

I was stuck on this for almost a month. Tried everything. Then one day I randomly asked an AI for help, and it suggested: “Put an empty file named `.nojekyll` in the root directory.”  
No idea why that worked, but at least the site loaded (◉３◉)

> *(2025/04/09 update)* I found out that enabling i18n (multilingual support) basically requires rewriting the entire structure...

## The Influence of `Cursor AI`

Recently, there's been a lot of buzz around `Vibe Coding`, which emphasizes **“coding purely based on intuition and vibes, embracing AI and forgetting about the actual code.”** In some ways, this mindset frees developers to create like they’re painting or composing music, instead of grinding through line after line of code ( ´•̥̥̥ω•̥̥̥` )

This project wasn’t full-on `vibe coding`, but honestly, **about 40% of the problems** were discovered and solved with AI’s help. From CSS syntax errors and YAML formatting issues to small quirks in Hexo’s config files, AI often spotted bugs I hadn’t even noticed and suggested fixes.

That said, while AI can be incredibly helpful, it sometimes goes off-track—especially when it comes to more complex issues that require careful judgment.

For example, I once had a YAML syntax error, and the AI’s suggestion looked right—but only **superficially**. The indentation was fine, but the logic was wrong, and Hexo still wouldn't run.  
It also gave outdated or totally made-up syntax in some cases, especially when I tried to use obscure features or customize components.

Another issue: **overreliance on AI**. The more I relied on it, the less motivated I was to look things up or read docs. My debugging skills were starting to rust.  
When AI’s suggestions didn’t hit the mark, **I often had no idea what to do next**, which made me get stuck even longer.  
(~~Some people today can’t even use git properly~~)

## The Importance of English

With the AI wave sweeping through everything, I used to think I could get by just by knowing how to code. But this project made me realize how important English really is.  
Whether it’s `VSCode`, `Cursor`, or `GitHub`, their interfaces and documentation are basically all in English. Whenever I ran into an issue, I had to spend tons of time reading English instructions and error messages, trying to understand what they meant (~~I seriously couldn’t read any of it~~).

These experiences made it painfully clear that English isn't just a “bonus” skill for CS students—**it's a necessity**. From technical documentation to programming keywords to participating in global dev communities, English is everywhere.  
Without at least basic English proficiency, your learning curve gets steeper, and you miss out on valuable resources and opportunities.

This project taught me: no more sleeping through English class~~(´◓Д◔`)

# Reflection & What’s Next

## A Sense of Accomplishment—and Shortcomings

Using the Hexo framework to build a website and apply a theme gave me a huge sense of accomplishment (I got cocky for a bit).  
Building something from scratch, step-by-step, was a lot of fun (~~and a lot of pain~~).  
With help from LLMs, I was able to quickly solve problems and implement features I once thought were too hard.

Still, there were areas that could definitely be improved:

> **Reliance on Templates & AI**: Because I mainly used a template and AI assistance, I didn’t gain a deep understanding of the underlying website structure or code logic.

> **Lack of Independence**: Some of the code was generated by AI, and I didn’t fully grasp how it worked. This could cause problems down the line when it comes to maintenance (~~I’ll just rewrite everything again anyway~~).

## Plans for the Future

This experience sparked my interest in web development (~~one step closer to going broke~~) and gave me some direction for future learning. Here’s how I plan to grow:

> **Build a Website from Scratch**  
> Next time, I plan to learn HTML, CSS, and JavaScript from the ground up and build a simple static site (~~or dynamic?~~). This will deepen my understanding of the basics and improve my independence as a developer.

> **Explore Backend Technologies**  
> Besides front-end, I also want to explore backend tech (why not just learn everything?), like Node.js or Python Flask, to understand server-side logic and database operations.

> **Combine Cybersecurity & Competitive Programming**  
> As someone with a background in C++ and an interest in security and algorithms, I hope to blend those skills with web dev. For example, I’ll try to learn about common web vulnerabilities (like XSS and SQL injection) and how to prevent them. I also want to explore how algorithm efficiency can enhance web functionality.

> **Reduce AI Dependence**  
> Although `Cursor AI` made development way easier, I want to rely less on it in the future and develop my own problem-solving skills.

# Final Thoughts

**This project introduced me to many people, taught me a lot, and gave me my first taste of bringing an idea to life.**

From setting up the blog, learning Hexo, tweaking themes, styling, and eventually deploying, debugging, and writing Markdown, I realized that web development isn’t just about code—it’s a way of expressing, organizing, and sharing.  
**This blog still has a lot of room for improvement, but it represents my effort and growth during this time.**  
I’ll keep updating it to document my learning journey, and I hope to **meet more like-minded people to code, share, and grow together.**

To all the beginners out there—don’t be afraid to try new things. Even if you start by applying themes or using AI assistance, **every bit of effort is part of the growth process**.  
I hope to one day build a fully customized site from scratch and combine my cybersecurity and competitive programming background to unlock even more possibilities.

# Special Thanks

## Shoutout to the legendary dev **`Small R`** [`Small R`](https://smallr-portfolio.vercel.app/en)

Thank you for helping me fix the bugs in the Waline comment system, both front-end and back-end!
