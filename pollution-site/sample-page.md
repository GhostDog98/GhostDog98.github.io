---
id: 2
title: 'Data Collection Methods'
date: '2022-07-19T01:59:33+00:00'
author: ghostdog
layout: page
guid: 'http://localhost:8888/wordpress/?page_id=2'
---

## Building of sensor

For my specific question, I needed to gather my own primary data. To do this, a sensor was built. Challenges to this included economic and time constraints (intensified by shipping delays after ordering).

The sensors needed to be soldered together as they came as a set of parts.

<figure class="wp-container-2 wp-block-gallery-1 wp-block-gallery has-nested-images columns-default is-cropped"><figure class="wp-block-image size-large">![](http://localhost:8888/wordpress/wp-content/uploads/2022/07/Picture-1-2.png)</figure><figure class="wp-block-image size-large">![](http://localhost:8888/wordpress/wp-content/uploads/2022/07/Picture-2.png)</figure></figure>I then made a new Arduino sketch after soldering them up, then wired one up using an Arduino (see photo). I uploaded their baseline sketch:[ https://wiki.dfrobot.com/CCS811\_Air\_Quality\_Sensor\_SKU\_SEN0339](https://wiki.dfrobot.com/CCS811_Air_Quality_Sensor_SKU_SEN0339)

This output is for determining the baseline of the sensor, as per the datasheet from DFRobot.

<figure class="wp-block-image size-medium">![](http://localhost:8888/wordpress/wp-content/uploads/2022/07/Picture-3-165x300.png)</figure>```
<pre class="wp-block-code">```
13:00:08.847 -> ⸮⸮⸮⸮⸮⸮⸮⸮⸮Data is not ready!
13:00:18.485 -> CBCA
13:00:19.489 -> 7ECA
13:00:20.487 -> 3ECA
13:00:21.503 -> FEC9
13:00:22.492 -> C7C9
13:00:23.524 -> 97C9
13:00:24.498 -> 69C9
13:00:25.506 -> 42C9
13:00:26.522 -> 1FC9
13:00:27.517 -> FEC8
13:00:28.518 -> DAC8
13:00:29.502 -> B6C8
13:00:30.524 -> 99C8
13:00:31.515 -> 7AC8
13:00:32.514 -> 61C8
13:00:33.519 -> 4BC8
13:00:34.510 -> 32C8
13:00:35.511 -> 19C8
13:00:36.534 -> AC8
13:00:37.532 -> F2C7
13:00:38.515 -> DFC7
13:00:39.523 -> CFC7
13:00:40.537 -> BAC7
13:00:41.522 -> ABC7
13:00:42.536 -> 96C7
13:00:43.555 -> 86C7
13:00:44.535 -> 79C7
13:00:45.526 -> 69C7
13:00:46.543 -> 59C7
13:00:47.548 -> 4AC7
13:00:48.527 -> 3FC7
13:00:49.539 -> 31C7
13:00:50.532 -> 22C7
13:00:51.561 -> 13C7
13:00:52.535 -> 9C7
13:00:53.571 -> 2C7
13:00:54.545 -> F3C6
13:00:55.552 -> E9C6
13:00:56.543 -> DFC6
13:00:57.543 -> D3C6
13:00:58.576 -> C9C6
13:00:59.553 -> C2C6
13:01:00.557 -> B3C6
13:01:01.546 -> ADC6
13:01:02.558 -> A1C6
13:01:03.571 -> 9AC6
13:01:04.556 -> 8EC6
13:01:05.574 -> 87C6
13:01:06.578 -> 7DC6
13:01:07.558 -> 73C6
13:01:08.586 -> 6DC6
13:01:09.571 -> 66C6
13:01:10.586 -> 5EC6
13:01:11.582 -> 52C6
13:01:12.588 -> 4FC6
13:01:13.574 -> 4AC6
13:01:14.590 -> 42C6
13:01:15.574 -> 37C6
13:01:16.577 -> 32C6
13:01:17.580 -> 2BC6
13:01:18.598 -> 79C5
13:01:19.578 -> 79C5
13:01:20.585 -> 79C5
13:01:21.588 -> 79C5
13:01:22.584 -> 79C5
13:01:23.577 -> 79C5
13:01:24.588 -> 79C5
13:01:25.608 -> 79C5
13:01:26.605 -> 79C5
13:01:27.611 -> 79C5
13:01:28.589 -> 79C5
13:01:29.611 -> 79C5

```
```

After I record this data, I then upload the consistent 79C5 at the end of the log, as this is the sensor’s individual baseline. I will have to record this for each sensor so it can accurately record its data.

I then tested its functionality, by breathing into it for a short period at intermittent times.

```
<pre class="wp-block-code">```
13:03:57.714 -> CO2: 400ppm, TVOC: 0ppb
13:03:58.703 -> CO2: 402ppm, TVOC: 0ppb
13:03:59.734 -> CO2: 400ppm, TVOC: 0ppb
13:04:00.737 -> CO2: 400ppm, TVOC: 0ppb
13:04:01.742 -> CO2: 400ppm, TVOC: 0ppb
13:04:02.751 -> CO2: 405ppm, TVOC: 0ppb
13:04:03.734 -> CO2: 400ppm, TVOC: 0ppb
13:04:04.743 -> CO2: 400ppm, TVOC: 0ppb
13:04:05.734 -> CO2: 400ppm, TVOC: 0ppb
13:04:06.732 -> CO2: 424ppm, TVOC: 3ppb
13:04:07.758 -> CO2: 502ppm, TVOC: 15ppb
13:04:08.749 -> CO2: 400ppm, TVOC: 0ppb
13:04:09.777 -> CO2: 400ppm, TVOC: 0ppb
13:04:10.765 -> CO2: 400ppm, TVOC: 0ppb
13:04:11.777 -> CO2: 400ppm, TVOC: 0ppb
13:04:12.758 -> CO2: 643ppm, TVOC: 37ppb
13:04:13.767 -> CO2: 435ppm, TVOC: 5ppb
13:04:14.765 -> CO2: 400ppm, TVOC: 0ppb
13:04:15.767 -> CO2: 400ppm, TVOC: 0ppb
13:04:16.795 -> CO2: 400ppm, TVOC: 0ppb
13:04:17.800 -> CO2: 400ppm, TVOC: 0ppb
13:04:18.810 -> CO2: 400ppm, TVOC: 0ppb
13:04:19.799 -> CO2: 400ppm, TVOC: 0ppb
13:04:20.815 -> CO2: 403ppm, TVOC: 0ppb
13:04:21.818 -> CO2: 400ppm, TVOC: 0ppb
13:04:22.793 -> CO2: 400ppm, TVOC: 0ppb

```
```

The peaks in both CO2 and TVOC seen in the data above (highlighted) align with when I exhaled into it. My breath increases both of these readings as CO2 and VOC are released when we exhale.

I then discovered you can change the report and heat frequency, so I changed this to 60 seconds, saving a large amount of power and ensuring I can run the collection for up to 2 days before needing to replace batteries.

The line to enable it is:

 CCS811.setMeasurementMode(CCS811.eCycle\_60s, 0, 0);

The power consumption when measured using a multimeter, showed a total of 4.6 to 4.8 milliamps consumption.

To further compress the numbers (allowing for better storage), I’ve also come up with a method to compress repeating numbers, planned out with the below pseudocode:

```
<pre class="wp-block-code">```
data = "16490427478192F1187F"
 
dictionary = {
	"00": "A",
	"11": "B",
	"22": "C",
	"33": "D",
	"44": "E"
	}
 
For every key in dictionary:
	if key is in data:
    	replace the key with it’s value

```
```

This overall leads to a large amount of compression.

Next, I needed to consider my method for storing the data I am collecting. This is largely impacted by both financial constraints (as it would be easy to simply use a 64gb SD card for every collector, but that is outside of financial viability) and by time constraints (what I can solder and code up).

For the sensor that will be placed near my house (with a Wi-Fi signal), I can send the data over emails every hour. This is not only a way of backing up this data (as the email is stored on Google servers) it’s also a way of communicating the data to my computer.

The first thing I did was source a resource (Santos, 2022) on sending emails with the esp8266 chip which is a Wi-Fi enabled microcontroller.

I edited this removing unnecessary parts and setting up an email application password with Google, then merged this with my existing code for reading the CO2 and VOC levels.

```
<pre class="wp-block-code">```
void loop(){
int counter = 0;
if((CCS811.checkDataReady() == true){
  counter = counter + 1;
  String past_CO = String(CCS811.getCO2PPM());
  String past_VOC = String(CCS811.getTVOCPPB());
}
if(counter >= 60){ // It's our measurement time!!!
 
  String textMsg = past_CO + "," + past_VOC;
 
  if (!smtp.connect(&session))
  	return;
 
	// Start sending Email and close the session
	if (!MailClient.sendMail(&smtp, &message))
  	Serial.println("Error sending Email, " + smtp.errorReason());
 counter = 0;
}
}

```
```

The above code checks when the sensor is ready to be read (which is every 60 seconds). It then increments a counter, and stores the VOC and CO2 in a variable. If the counter is more than or equal to 60, it then sends the most recent data to my email. After sending, it resets the counter to 0 and repeats.

The total code amounts to roughly 190 lines of code.

## <a>Data collection and summary</a>

The locations I chose to set up the sensors are dispersed along &lt;REDACTED STREET&gt; which runs directly perpendicular to the Mornington Peninsula Freeway.

Sensor 1: Positioned 30mt from MP Freeway

Sensor 2: Positioned 330mt from freeway (my house)

Sensor 3: Planned 500mt from freeway (a friends house – this location was eventually not used due to broken sensor parts)

Sensor 4: Positioned 800mt from the freeway (walking path in wetlands).

For the location near my house (my front yard), I used an internet-connected wireless microcontroller to automatically send the data over an internet messaging service at the end of each minute, allowing for remote collection. For the walking path, I saved the data to an EEPROM.

I used a custom-made SD card adaptor for the wetlands and freeway sensors, as a SD card uses the I2C protocol, allowing for easy recording of data for an extended period of time. I walked to both of these sensors, took out the SD card and manually read that onto my phone or computer every 2 days for backup.

During the process of data collection, there were multiple unexpected challenges. Firstly, prior to collecting data, out of the 4 sensors that I ordered and received, 1 arrived broken. Given time constraints I was unable to order a new one. For this reason, I had to omit one of the sensor locations. I chose to omit the sensor at 500m distance from the freeway.

Additionally, during the data collection period one of the sensors was seized by the Victorian Police bomb squad, as it was suspected to be a possible IED (Improvised Explosive Device). Fortunately, after investigations, it was deemed to be safe enough to simply unplug and store for investigation and was thus not blown up.

Upon seeing it was missing from the location, I enquired and found that it had been seized. I was then able to go to the police station and retrieve the sensor from an evidence satchel, after presenting documentation that it was indeed my device (such as images of the construction and documentation).

&lt;IMAGE WITHHELD FOR PRIVACY&gt;

After this, with coordination and cooperation from the Senior Constable at Chelsea Police Station, we agreed upon emailing them the location and images of the sensor in location, as well as clearly marking the sensors to avoid a repeat incident in the future. Despite the delay, this only resulted in approximately one day of no data collection which did not have a significant impact on the results.

Source code and schematics for the Arduino can be provided upon request