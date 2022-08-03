---
id: 288
title: Data
date: '2022-07-28T00:02:24+00:00'
author: ghostdog
layout: revision
guid: 'http://localhost:8888/wordpress/?p=288'
permalink: '/?p=288'
---

The raw data for my findings can be downloaded as a MySQL database, with each table inside of the aforementioned zip.

<div class="wp-block-file">[Full database (.ZIP, 3.3MB)](http://localhost:8888/wordpress/wp-content/uploads/2022/07/data.zip)[Download](http://localhost:8888/wordpress/wp-content/uploads/2022/07/data.zip)</div>I collected a total of 256,844 known good records for each sensor (manually verified), synchronised to ~1 second within each other across the multiple locations.

This totals 770,532 total records across the entire database (Not including the primary key).

Below is my database data dictionary

<figure class="wp-block-table">| Name | Type | Desc | Field Properties |
|---|---|---|---|
| UID | BigInt | A unique identifier as my primary key | Autovalued |
| CO2\_PPM | Numeric | Carbon Dioxide parts per million | Entry Required = Yes |
| VOC\_PPb | Numeric | Volitile Organic Compounds (VOC) parts per billion | Entry Required = Yes |

</figure>## Data Cleaning

After getting the data files from all sources, I proceeded to clean them and make sure all data collected was accurate. The first step was to copy the files to ensure that the data was not destructively edited. After this, I used the GNU SED tool to remove specific repeated strings in the output file:

sed -i ” ‘s/;CO2, VOC//’ data\_01.txt

-i for inplace

Two quotes since this is the OSX version of sed.

Then I construct my search query, with the s switch (for substitution), then use a / to separate my query I want to search for, which is “;CO2, VOC”, then another / to mark the start of what I want to replace it with, which is nothing, then an ending tag.

I then follow this with my file name to replace things inside of.

After this, my terminal looks like this:

```
<pre class="wp-block-code">```
SS-ARONJ23:data_processing aronj23$ tail data_01.txt
 
400,0;CO2, VOC
 
405,0;CO2, VOC
 
400,0;CO2, VOC
 
400,0;CO2, VOC
 
405,0;
 
SS-ARONJ23:data_processing aronj23$ sed -i '' 's/;CO2, VOC//' data_01.txt
SS-ARONJ23:data_processing aronj23$ tail data_01.txt
 
400,0
 
405,0
 
400,0
 
400,0


```
```

This still leaves me the issue of every second line being a blank line.

To fix this I used the following command:

awk ‘NF’ data\_01.txt &gt;&gt; data\_clean.txt

Where NF is null-field, then use the redirect character, to append to a new file called “data\_clean.txt”.

```
<pre class="wp-block-code">```
SS-ARONJ23:data_processing aronj23$ awk 'NF' data_01.txt >> data_clean.txt
SS-ARONJ23:data_processing aronj23$ tail data_clean.txt
405,0
400,0
400,0
400,0
405,0
400,0
405,0
400,0
400,0

```
```

After this, I repeated this for the rest of the data files from the wetlands.

I then used “cat file1 file2 file3 &gt; AllData.txt” to make everything into 1 file.

I then needed to start a database to store this data. To manage this the LibreOffice Base application was used.

I created a new database, registered it, and then opened it.

I then created my data dictionary thusly:

<figure class="wp-block-table">| Name | Type | Desc | Field Properties |
|---|---|---|---|
| UID | BigInt | A unique identifier as my primary key | Autovalued |
| CO2\_PPM | Numeric | Carbon Dioxide parts per million | Entry Required = Yes |
| VOC\_PPB | Numeric | Volatile Organic Compounds (VOC) parts per billion | Entry Required = Yes |

</figure>This was then saved under the name “Freeway” for the sensor beside the freeway.

I then installed pbcopy using the brew tool, and used that to attach the data to my clipboard: pbcopy &lt; AllData.txt

I tried to paste my data into the database, without success. I also tried to use an extension script for base, which didn’t succeed.

After this, I imported my CSV into a spreadsheet and then simply copy-pasted from there, which worked.

There are a number of reasons why I used a database to store my data instead of a CSV. First, a database offers a much more robust way to manage data. I can easily add, remove and update data in a database, and I can also query the data in a variety of ways. Second, a database is significantly more secure than a CSV file, as it can easily be password locked. If my data is stored in a database, it is much less likely to be compromised by a hacker or other malicious actor. Finally, a database is simply a more efficient way to store and retrieve data. With a CSV file, I would have to write code to parse the data out of the file; with a database, I can simply query the data I need.

Speaking of queries, I’ve prepared a few test queries to implement, in order to test my data.

<figure class="wp-container-534 wp-block-gallery-533 wp-block-gallery has-nested-images columns-default is-cropped"><figure class="wp-block-image size-large">![](http://localhost:8888/wordpress/wp-content/uploads/2022/07/Picture-4.png)</figure><figure class="wp-block-image size-large">![](http://localhost:8888/wordpress/wp-content/uploads/2022/07/Picture-5.png)</figure></figure>As you can see, the data is quite varied!

I then repeated the data cleaning process for the wetlands, copying the data dictionary over, then again for the sensor at my house.

## Data analysis

I wanted to run a students T test across both my baseline and collected data, which would tell me if my data is statistically significant. To do this, however, I need to do quite a lot of math, which libreoffice base is poorly equiped to handle.

### Installing MySQL

After installing MySQL, I then tried to start it, only to get the error “ERROR 2002 (HY000): Can’t connect to local MySQL server through socket ‘/tmp/mysql.sock’ (2)”

To fix this, I tried just reinstalling, then running `brew service start mysql`, which also didnt work.

I then tried to go into: /usr/local/opt/mysql/bin/mysql -uroot

Which worked!

I then created a new table and tried to link it to my new database through base.

This brung up an error though, as I had no “user” other than root.

To fix this I ran:

```
<pre class="wp-block-code">```
CREATE USER ‘aronj23’@‘localhost’;
```
```

Then connected to verify that account exists.

After opening the table tab in base though, it said that I didnt have permissions to access that table.

To fix this, I then ran:

```
<pre class="wp-block-code">```
GRANT ALL PRIVILEGES ON *.* TO ‘aronj23’@‘localhost’ WITH GRANT OPTION;
```
```

This gives my user all permissions!

### Importing Data

After that, I copied over the data tables from my original base file.

After linking, I then executed the following commands in MySQL terminal:

```
<pre class="wp-block-code">```
SELECT database(); // list my databases
use data; // Select my database

Show databases; // List all of my tables

CREATE TABLE Wetlands (UID bigint, CO2_PPM DECIMAL, VOC_PPB DECIMAL); // create my new wetlands table!

SELECT * FROM Wetlands; // verify it exists

INSERT INTO Wetlands VALUES (0, 400, 0); // Insert some test data!

SELECT * FROM Wetlands; // Get my data

+------+---------+---------+
| UID  | CO2_PPM | VOC_PPB |
+------+---------+---------+
|    0      |     400     |       0       |
+------+---------+---------+
1 row in set (0.00 sec)


```
```

I did forget one thing though, UID should have been auto-increment.

To fix this, I dropped the table and recreated it thusly:

```
<pre class="wp-block-code">```
CREATE TABLE Wetlands (UID bigint NOT NULL, CO2_PPM DECIMAL, VOC_PPB DECIMAL, PRIMARY KEY (UID)); // create my new wetlands table!
```
```

And reinsert my data:

```
<pre class="wp-block-code">```
INSERT INTO Wetlands (CO2_PPM, VOC_PPB) VALUES (400, 0);
```
```

Verify my recreation:

```
<pre class="wp-block-code">```
mysql> SELECT * FROM Wetlands;
+-----+---------+---------+
| UID | CO2_PPM | VOC_PPB |
+-----+---------+---------+
|   1 |     400 |       0 |
|   2 |     400 |       0 |
|   3 |     400 |       0 |
|   4 |     400 |       0 |
|   5 |     400 |       0 |
+-----+---------+---------+
5 rows in set (0.00 sec)

```
```

Next, to import my data, I need to copy it back to a CSV from my base database to MySQL.

To do this, I open a new spreadsheet, Ctrl+C the table, then Ctrl+V into the spreadsheet.

To do this, I attempted to use the following query:

```
<pre class="wp-block-code">```
LOAD DATA INFILE "./wetlands.csv" INTO TABLE wetlands FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n' IGNORE 1 ROWS;
```
```

To which MySQL said: ERROR 1290 (HY000): The MySQL server is running with the –secure-file-priv option so it cannot execute this statement

It turns out, that this is a security feature to try to prevent malicious actions. To fix this, I need to access the config file, located in:

~/.my.conf

Then ran “mysql.server restart”

After trying again, I got “operation not permitted”

Which is an os ERROR.

To fix this, I first tried “chmod 777 wetlands.csv” to allow all reading. Which also didn’t work…

Then instead of adding nothing in the path (which should mean anywhere) I tried adding my export folder.

This worked, as I got a different error.

It now is complaining of having duplicate records.

To fix this, I simply used the SQL delete statement: DELETE FROM wetlands.

Then ran my command to import and success!

I then repeated this for the rest of my tables…

### Analysis in MySQL

<figure class="wp-block-image size-large">![](http://localhost:8888/wordpress/wp-content/uploads/2022/07/ttest-1024x757.png)</figure>I then crafted a simple student t-test, as per the above graphic. I did the math and discovered that my value is exactly 0. This value allows me to reject the null hypothesis of no colouration between location and pollution levels, in favour of my current hypothesis.

The formula for a student’s T-test in my situation is:

<figure class="wp-block-image size-full">![](http://localhost:8888/wordpress/wp-content/uploads/2022/07/Picture-1.png)</figure>Where:

x1 = Mean of the first table

x2 = Mean of the second table

s^2 = Pooled Standard deviation

n1 = Number of records in the first table

n2 = Number of records in the second table

f = Our test result

To do this test, I used the helpful tutorial by red-gate, running the following:

```
<pre class="wp-block-code">```
DELIMITER //

BEGIN
DECLARE @t NUMERIC(18,2);
DECLARE @df INT;

DECLARE @st1 NUMERIC(18,2), @x1 NUMERIC(18,2), @N1 NUMERIC(18,2), @st2 NUMERIC(18,2), @x2 NUMERIC(18,2), @N2 NUMERIC(18,2);

SELECT @st1 = StDev(s.CO2_PPM), @x1 = Avg(Convert(NUMERIC(18, 2), CO2_PPM)), @N1 = Count(*) FROM Highway AS s;

SELECT @st2 = StDev(s.CO2_PPM), @x2 = Avg(Convert(NUMERIC(18, 2), CO2_PPM)), @N2 = Count(*) FROM Wetlands AS s;

SELECT @t=(@x1 - @x2) / Sqrt((Square(@st1) / @N1) + (Square(@st2) / @N2)), @df=@N1+@N2-2;

SELECT 'The t value was '+ Convert(VARCHAR(20),@t)+ ' with '+ Convert(VARCHAR(20),@df)+' degrees of freedom';

END // 
DELIMITER ;


```
```

This means that my data is undoubtedly statistically significant when comparing the wetlands (my baseline) and the highway.

What about my home measurements?

Is there a statistically significant difference between the measurements taken on the highway, and at home?

Once again, I assume the null hypothesis of there being no relationship between distance to the highway and pollution.

Absolutely. A 2 tail students t-test returns 0.014, which is substantially below my (and the wider scientific communities consensus) 0.05 statistical significance threshold.

```
<pre class="wp-block-code">```

```
```