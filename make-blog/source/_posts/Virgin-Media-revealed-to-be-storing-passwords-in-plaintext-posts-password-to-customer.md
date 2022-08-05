---
title: >-
  Virgin Media revealed to be storing passwords in plaintext, posts password to
  customer
date: 2021-11-26 09:39:28
tags: security, cybersecurity, Virgin Media, Virgin, password, plaintext, password
---
In a recent twitter thread detailing the password recovery process be twitter user [_freakyclown\_](https://twitter.com/_Freakyclown_), the user mentioned multiple fails from the popular airline company, starting the thread with this:

```plaintext
Ok a thread: I have never signed into my @virginmedia account but I 
did set one up years ago but forgot all the details. I request a 
password reset. The person on the phone gives me “one last chance” to 
guess what email I used, I get it on the third try!
```

This is clearly an issue, as nobody should be granted extra tries on a password login, for any reason, as this clearly enables more brute-force attempts by bad actors, however, it gets even worse.

```plaintext
I finally get the password reset request actioned, phone 
representative tells me password will be posted to me.. ok weird but I 
accept. Today the post arrives and I shit you not it’s my old 
password!!!! (I remembered it on sight) So they store the password and 
just posted me it!!
```

This is where it gets borderline [illegal](https://www.gov.uk/data-protection) in some countries (namely the UK). This means that Virgin Media stores their passwords in, generously, a reversible encryption standard. This is a dream for any potential hackers, as they don't even need to work to reverse the password hashes with a tool like [hashcat](https://hashcat.net/hashcat/), instead, they can simply export the database and be home free!! On top of this, they ***posted*** it. What. The. Hell. 
This is clearly absolutely, immeasurably stupid. What's to stop someone from intercepting that mail, opening it, taking a photo of the password, and then re-packing the envelope? Nothing. 
The geniuses at Virgin Media had an excellent response to this however:

```plaintext
Posting it to you is secure, as it's illegal to open someone elses mail. ^JGS
```

Which is just... wow... it's on the same level of "If someone's assaulting you, just say no, they can't touch you without your consent".
What an absolute embarrassment, as even hashing ***without salt*** would be better than this...
