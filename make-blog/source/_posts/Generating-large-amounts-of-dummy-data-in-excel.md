---
title: Generating large amounts of 'dummy' data in excel
date: 2022-03-01 12:08:28
tags: excel, microsoft excel, spreadsheet, data science, data, automation, database, base
---


Often I come across the following problem when designing a database:



I need to test my queries, but to do that, I need some data. Sometimes large amounts in order to properly test them.



Now I ***could*** enter all of my data manually, but if I have many fields, or need a lot of diversity in my data, that will take forever. 



The solution: Excel!

Let's instead generate our data by using excel and excel formulas. For this demonstration, i will be using the following data dictionary:

| ID            | first_name     | last_name      | called_by_first  | email          | postcode | gender | DOB  |
| ------------- | -------------- | -------------- | ---------------- | -------------- | -------- | ------ | ---- |
| AutoValue INT | Text [VARCHAR[ | Text [VARCHAR] | Yes/No [Boolean] | Text [VARCHAR] | Int      | Char   | Date |




The ID is easy, we can just use an incrementinfg number. 

First name is where it starts to get harder... To do this, I've actually made a custom webpage that generates any amount of space seporated names as you want! (Although >1000 names tends to lag your computer). 

Then I use the "text to columns" tool in excel (Under Data>Text to columns>Delimited>Tick the "Space" option) to seporate into the first_name and last_name fields. 



Next, to generate a random "Yes/No" answer, I used excels `=CHOOSE` formula, which, given a number, chooses between options. For example, `=CHOOSE(1, YES, NO)` would give us "Yes" and a 2 would give us "No".

This gives us our next function:`=CHOOSE(RANDBETWEEN(1,2), YES, NO)`, which randomly gives us either yes or no. 

Next, our email. To do this, I made a nieve approach. To do this, i simply used the concat function`=CONCAT(B2, C2, RANDBETWEEN(10, 99), "@example.gov.au")`

Where B2 is our first name, and C2 our last.

The postcode is very simple, as we can just use `=RANDBETWEEN(3000, 3999)` (This is the range for victorian postcodes).

Gender, once again, is fairly simple, and similar to the `called_by_first` solution:

`=CHOOSE(RANDBETWEEN(1,3), "M", "F", "O")`



Finally, our most challenging field (in my opinion), the date. This is difficult because base demands we must format it with padded zero's (e.g. not 3/4/2022 but 03/04/2022).

For our day, we can use the following:

`=TEXT(RANDBETWEEN(1, 28), REPT("0", 2))`

Which says: Join a random number with enough zero's to make it 2 digits wide.

We can repeat this for the month: `=TEXT(RANDBETWEEN(1, 12), REPT("0", 2))`

And the year is fairly simple: `=RANDBETWEEN(1900, 2012)`

Then, we join all of these, making this monster of a formula:

`=CONCAT(TEXT(RANDBETWEEN(1, 28), REPT("0", 2)), "/", TEXT(RANDBETWEEN(1, 12), REPT("0", 2)), "/", RANDBETWEEN(1900, 2012))`    

Now obviously this has a few holes, such as not including > 28th day of any months, but this is perfectly fine for a bit of "filler" data. 

So, to recap, this is our final formula set:

| first_name                     | last_name        | called by first                    | email                                                    | postcode                 | Gender                                   | DOB                                                                                                                        |
| ------------------------------ | ---------------- | ---------------------------------- | -------------------------------------------------------- | ------------------------ | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| generator into text to columns | Split first name | =CHOOSE(RANDBETWEEN(1,2), YES, NO) | =CONCAT(B2, C2, RANDBETWEEN(10, 99), "@example.gov.au")` | =RANDBETWEEN(3000, 3999) | =CHOOSE(RANDBETWEEN(1,3), "M", "F", "O") | =CONCAT(TEXT(RANDBETWEEN(1, 28), REPT("0", 2)), "/", TEXT(RANDBETWEEN(1, 12), REPT("0", 2)), "/", RANDBETWEEN(1900, 2012)) |

