---
title: Geocaching Event Project
date: 2022-01-14 16:46:59
tags: circuit, electronics, 
---

Recently, I designed a GeoCache for a "lab" event on behalf of my mother. If you don't know what a geocache is, it's a puzzle you hide, then give coordinates for. For this event, I aimed to simply create a technically challenging cache.

To do this, I decided to use something called a [liquid crystal valve](https://cdn-shop.adafruit.com/product-videos/1024x768/3330-04.mp4), which is *basically* a piece of glass you can toggle between completely black, and nearly clear.

So, all I needed was a voltage source, and an NO switch with a piece of paper behind the glass, right? Not quite...

It turns out if you intend on running this valve for more than about a minute, you create a DC bias, damaging the display, breaking it.

To fix this, I first tried to use a 555 timer circuit, however, that started to become a complication when the display wouldn't turn off properly. (Preview of toggle glass with a 555 timer circuit available [here](https://youtu.be/jOSFQYeMsKA))

To both make this smaller, and easier to wire, I simplified it a bunch. I simply connected an attiny85 with the following code to a NOT/Invert gate made with a 2N2222 transistor, connected to a reed switch (magnet activated switch) through an 18650 Li-ion battery and that was about it!

Theoretically, I could have done this all just with the microcontroller, getting the input from the reed switch, pull-down resistor, etc... But I wanted to keep it more "electronics" based for this project.

Code:

```c
#define F_CPU 1000000 // Define the cpu clock speed to be 1mhz, so that my wait functions time for the correct time.

                      // Mis-calculating this can lead to some... interesting bugs...

                      // e.g. if clock speed is defined as "8000000", with a 1 second wait It will wait 8 seconds instead.



#include <avr/io.h>     // Input and output package

#include <util/delay.h> // Package to do timing and delays



int main(){

    PORTB = (1 << PB3);         // Configure PB3 as output. (Screen); all others input.

    while (1){

      PORTB ^= (1 << PB3);      // Invert the current value of PB3

      _delay_ms(50/3);          // Wait 16.6666 milliseconds, or 1/60 of a second, this is to generate a 60hz square wave

    }

    return 0;                   // Only reason this is here is to stop GCC from cracking it

}
```

Here, you can see the full setup (Spoilers!!)
![Full Geocache](/images/geocache.png)
Yellow wires are reed switch, red and yellow go to the display, backed with a perf. board since the leads by themselves are a bit flimsy. Red and black are the battery. 

### Important to Note:
This project (and it's code) is licensed under the CC BY-NC 4.0 license, a copy of which is available [here](https://creativecommons.org/licenses/by-nc/4.0/legalcode). To summerise:

You are free to:
Share — copy and redistribute the material in any medium or format
Adapt — remix, transform, and build upon the material 

Under the following terms:
Attribution — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.

NonCommercial — You may not use the material for commercial purposes.

No additional restrictions — You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits.

(Summary Courtesy of the CC foundation)