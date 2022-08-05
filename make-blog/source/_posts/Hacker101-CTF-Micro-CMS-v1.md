---
title: 'Hacker101 CTF: Micro-CMS v1'
date: 2021-09-25 13:57:58
tags:
---
This is a part of a series I’m doing for the [Hacker101](https://www.hacker101.com/) CTF’s.

This first post will focus on the first CTF, named “Micro-CMS v1”. This has 4 flags, and is rated as “Easy”.

Flag 0
This first flag is relitively easy to find, to start off with, I created a page after looking around, and saw that the pages were indexed as such:
1, 2, 10
Which begs the question, where is 3 to 8?
Upon accessing page 6 (by simply typing the url myself), it responds with a 403, which means there is some content on the page, just none I can access. To get to this, I next tried to edit a page, which resolved the URL:
`http://[example]/[user_string]/page/edit/1`
So, what happens if I change the 1 to a 6 here?
Bingo, our first flag!

## Flag 1
For our second flag, we get a hint of trying to tamper with every input, so thats just what i did. I decided to insert `<script>alert(0)</script>` everywhere I could, eventually trying the title of a post, and voilla! Upon going to the home page, the XSS activates, and I get my second flag!

## Flag 2
Upon editing a page, it is fairly obvious that some sort of SQL request must be sent to retrieve said pages contents, so I decided to add a single quote to the end of the URL, netting us our third flag with an SQL injection vulnerability!

Flag 3
The edit page has a curious statement on the bottom:

```plaintext
Markdown is supported, but scripts are not
```
Which begs the question, what about other HTML tags?
So I test with a simple `<h1>Testing</h1>`, and it turns out that works, so, is there a way to execute code inside of a html element? Yes, there is!
```html
<button "onclick=alert(0)">Click me!</button>
```
aaand, no flag? Curious to see what was going wrong, I took a look using inspect element, and, funnily enough, there was the flag, inside the properties of the button class!

Done
With that, we’ve just completed the first proper CTF!
