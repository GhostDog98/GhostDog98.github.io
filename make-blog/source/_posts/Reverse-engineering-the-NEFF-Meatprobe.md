---
title: Reverse engineering the NEFF Meatprobe
date: 2023-09-22 02:53:45
tags:
---
I want to get into brewing my own beer, so naturally, i needed a thermometer to moniter the temperature.
I already had a food safe thermometer laying around though... the NEFF Meatprobe, which i got with my oven, but don't use since i'm vegan.

At first, i simply tried to search "Neff meatprobe pinout", but to no avail.
Additionally, i tried searching for any patents, but that also turned up nothing... time to put in actual work!
I knew it wasen't a PT100 nor a thermocouple, as neither of those modes picked up a rational temperature on my multimeter.

This left only the NTC Thermistor as an option, as when measuring the resistance between pins, it decreased with temperature increase (thus Negative Temperature Coefficient).

Next, I simply took measurements of the resistance at 3 different temperatures, as such:
Temperature 		|Resistance (kΩ)
---|---
30°C|60
15.8°C|132
7°C|235

Plugging these into the Steinhart-Hart formula, we get the following β model coefficient of 4863.74K.
To be completely transparent, however, i cheated, i used a [nice calculator](https://www.thinksrs.com/downloads/programs/therm%20calc/ntccalibrator/ntccalculator.html) developed by the Standford Research systems.
This also gives us a very nice visualisation of how accurate we were, comparing the β model coefficient to our observed results:
![Graph of accuracy](/images/Accuracy.png)

From here, I needed to determine two things, particularly:
- How does each ring corrospond to the three measurement spots?
- What the hell is this plug?

Let's first determine what plug this uses, having a simple look at it, it's reminicent to a 6.5mm audio jack (to be more specific, a 6.5mm TRS jack, as pointed out by Vdekje):
![Photograph of the plug, no dimensions](/images/non-dimensioned.png)

Let's take some measurements first, however:
![Same photograph of the plug, but with dimensions](/images/dimensioned.png)

Here, we can see that it isn't a 6.5mm TRS for a few reasons, namely:
- It isn't as "pointy" at the tip
- It is 6.5mm diameter
That second one might seem counterintuitive, however, it turns out that 6.5mm is a bit of a misnomer, as it's just 6.35mm (converted in europeon countries), which is actually 1/4" in the USA. Totally not confusing at all!