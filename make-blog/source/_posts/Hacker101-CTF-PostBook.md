---
title: 'Hacker101 CTF: PostBook'
date: 2021-09-26 17:22:32
tags:
categories:
- CTF Writeups
---
This is a part of a series I'm doing for the [Hacker101](https://www.hacker101.com/) CTF's.

This post will focus on the seventh CTF, named "Postbook". This has a whopping 7 flags, and is rated as "Easy".

## Flag 0 
This site has a login page, after signing up (using test:test as my username:pword), I saw that there was a user called "user", often this is left behind from default configurations, so, I wonder, is that user using a generic password?
Turns out, they are (a password of 'password')! Which nets us our first flag!

## Flag 1 and 4
This one, I accidently got both at once.
I had a look at the URL during the edit page, and wondered what would happen if i changed it from "2" to "1", this did 2 things:
Allowed me to EDIT a private post
Allowed me to VIEW a private post

Both of these netting me a flag!

## Flag 2
This flag is again a quite interesting one, if you use inspect element to look at how the site formats a POST request for a new post, you would see the following element:
`<input type="hidden" name="user_id" value="2">`
By simply removing the `type="hidden"` part, we can impersonate another user, for example, the admin!
Upon posting, we get our flag!

## Flag 3
This flag is once again trivial, as the clue in hacker101 gives it away: `189 * 5`. To get this flag, I simply change the post ID to 945.

## Flag 5
This is where things start getting interesting, in a browser, there are things called cookies, in our postbook example, they make it so you don't have to sign in every new page, this is extremely useful for the user, however, could we exploit this to login as someone else?

First things first, I had to be able to view this cookie, to do that, I downloaded the awesome open-source project [Cookie-Quick-Manager](https://github.com/ysard/cookie-quick-manager/), which allows me to edit and view using a browser extension. 
This cookie had 2 fields, "session" and "id". I assumed ID was for user ID (as the rest of the website used this as well), but it was just jumbled garbage at the moment, it didnt just say "2" for my user ID, it said "c81e728d9d4c2f636f067f89cc14862c". This string of text, i thought, might be a hash of the number 2, so I decided to run it through a [hash reverse lookup](https://md5hashing.net/hash), and to my surprise, it spat out the number 2, telling me that it was an MD5 hash.
After this, I simply encoded the number "1" in MD5, and edited the cookie. 
This gave me my flag, only 1 more to go!

## Flag 6
The clue for this one is:
`Deleting a post seems to take an ID that is not a number. Can you figure out what it is?`

First things first, I copied the link to the "delete" page, and inspected it:
`/index.php?page=delete.php&id=eccbc87e4b5ce2fe28308fd9f2a7baf3`
So it's calling "delete.php" with a parameter "id" which appears to be a hash.
So, once again, I put this hash into a reverse lookup tool (see above), and selected MD5, crossed my fingers, and, it put out "3", which was the ID of the post I wanted to remove!
So, I decided to try and remove the first ever post by the admin ("Hello world").
To do so, I just needed to visit this link:
`/index.php?page=delete.php&id=c4ca4238a0b923820dcc509a6f75849b`
And this gives us our flag, as well as deleting the admins post, while being logged in as any user!
