---
title: FPGA Holidays Adventures
date: 2022-07-16 13:48:51
tags: FPGA, programming, icelink
---

Hello! Long time no write... Guess who forgot to upload their finished blog posts in the correct format?

With the school holidays wrapping up in 2 days, I thought I might cover what I did for fun over the 3 week break I got. 
I decided to get into the world of fpga programming!

An fpga (field programmable gate array) is a close relative to the cpu, with a key small difference. 
While a cpu has a set pattern of logic gates constructed at the factory using a laser to etch into silicon, an fpga can change it's gates depending on what you want.

This makes it incredibly ~~pansexual~~ useful for anything in the realm of digital electronics.
For example, it can be any logic gate, a gpu, a cpu, a video encoder, a tool to mine bitcoin, and more.

In this post, I'll go over the details of the process I went through to program this little bugger, and how to replace the default blinking an led Green with a new exciting color: Blue! (And slightly faster).


First, let's install the iceprog cmd line tools, as per their [documentation](https://clifford.at/icestorm):
```
git clone https://github.com/YosysHQ/icestorm.git icestorm
cd icestorm
make -j$(nproc)
sudo make install
```
(This assumes you already have the dependancies installed)

Alternatively, if on arch linux, simply yay install icestorm-git, arachne-pnr-git, and yosys-git

Then run:
```
git clone https://github.com/FPGAwars/toolchain-icesprog.git
cd toolchain-icesprog
./build.sh linux_x86_64 # Assuming you are on 64 bit linux
```
If this errors out, do the following:
```
wget https://github.com/FPGAwars/tools-oss-cad-suite/releases/download/v0.0.8/tools-oss-cad-suite-linux_x86_64-0.0.8.tar.gz
tar -xzvf tools-oss-cad-suite-linux_x86_64-0.0.8.tar.gz
sudo cp -n * /bin/
sudo cp -n -r * /usr/
```

After this, you should be able to run `icesprog --help` to display the following:
```
usage: /usr/libexec/icesprog [OPTION] [FILE]
             -w | --write                   write spi-flash or gpio                      
             -r | --read                    read  spi-flash or gpio                      
             -e | --erase                   erase spi-flash                              
             -p | --probe                   probe spi-flash                              
             -o | --offset                  spi-flash offset                  			 
             -l | --len                     len of write/read                            
             -g | --gpio                    icelink gpio write/read                      
             -m | --mode                    icelink gpio mode                            
             -j | --jtag-sel                jtag interface select (1 or 2)               
             -c | --clk-sel                 clk source select (1 to 4)                   
             -h | --help                    display help info                            

             -- version 1.1b --
```
Hurrah! 
Now, if you run `icesprog -r` it will error out, saying `iCELink open fail!`

If we look at the [iceSugar-Pro github issues page](https://github.com/wuxx/icesugar-pro/issues), we get nothing.
But, if we look at the model before it, [we do](https://github.com/wuxx/icesugar/issues/44)!
This is on macos, but, macos is still unix based. Lets see if it fixes things...

After this, we can compile our program.
Now we need to upload it.
To install the tools for this, simply run:
```
git clone https://github.com/ntfreak/openocd.git
cd openocd
git submodule init
git submodule update
./bootstrap
./configure --enable-cmsis-dap
make -j
sudo make install
```
Then, by using the fancy pants "drag and drop" programming that this dev board supports, we can simply plug the board into our computer, and then drag and drop our compiled file.

Next, lets make our first program.
I'll be using verilog as it's a more gentle learning curve

To program our fpga, we use 2 files:
 - The .v file, this contains our "code" we want to execute 
 - The .lpf file, this contains our definitions for what pins do what, for example, saying that `led_o` is actually pin B11.

So, lets go over our v file first:

```c
module blink (
    input      clk_i, // our input clock signal for keeping time, this is defined in our lpf file, it's 25MHz
    output reg led_o  // Our output for our led, reg is the only type we can use for outputs, and is similar in concept to a flipflop
);
localparam MAX = 2_500_000;
localparam WIDTH = $clog2(MAX);

// Initialise 2 variables as wires, think of these as point a to point b connections, kind of like a literal copper wire
wire rst_s;
wire clk_s;

assign clk_s = clk_i; // We are taking our input (clk_i) and giving it's value to clk_s
//pll_12_16 pll_inst (.clki(clk_i), .clko(clk_s), .rst(rst_s));
rst_gen rst_inst (.clk_i(clk_s), .rst_i(1'b0), .rst_o(rst_s));

reg  [WIDTH-1:0] cpt_s;
wire [WIDTH-1:0] cpt_next_s = cpt_s + 1'b1;

wire             end_s = cpt_s == MAX-1;

always @(posedge clk_s) begin
    cpt_s <= (rst_s || end_s) ? {WIDTH{1'b0}} : cpt_next_s;

    if (rst_s) 
        led_o <= 1'b0;
    else if (end_s)
        led_o <= ~led_o; // Invert the current value of led_o
end
endmodule

```

Next, lets cover our lpf file:
```c

LOCATE COMP "clk_i" SITE "P6"; // As per the documentation, this pin gets our on-board oscillator!
IOBUF PORT "clk_i" IO_TYPE=LVCMOS33;
FREQUENCY PORT "clk_i" 25 MHZ; // We have 25MHz, so make sure the compiler knows that


// Uncomment the following for various led colors, detailed on the front page of the fpga documentaion
//LOCATE COMP "led_o" SITE "A11";
LOCATE COMP "led_o" SITE "B11";
//LOCATE COMP "led_o" SITE "A12";

IOBUF PORT "led_o" IO_TYPE=LVCMOS25;
```

To upload this, we drag and drop our 2 output files from compiling into the emulated usb storage device.
The current LED blinking program should halt (the large white body rgb led blinking Green), and then a small red led near the usb port should flash, that means that our program is now getting put into the flash memory of the board, meaning it will persist on our next reboot.

After this, simply hit the reset button (in the middle of the rgb led and usb-c port), and tada!

# IMPORTANT NOTE
## TO PROGRAM, DO NOT USE THE USB-C PROVIDED IN THE BREAKOUT (GREEN) BOARD, AS THIS WILL NOT UPLOAD OUR FILES AND ERROR OUT SILENTLY
## INSTEAD, UNPLUG THE ENTIRE MODULE FROM THE BREAKOUT BOARD, AND CONNECT YOUR USB CABLE TO THE PORT ON THAT.


Now as a fun exercise for the reader, try adjusting the speed of the blinking LED.
For the sake of being able to replicate things; I'll include my makefile, basically ripped of the documentation, minus a small inconvenience:
```make
TARGET=blink_slow
TOP=blink_slow

OBJS+=blink.v rst_gen.v

all: ${TARGET}.bit

$(TARGET).json: $(OBJS)
    yosys -p "synth_ecp5 -json $@" $(OBJS)

$(TARGET)_out.config: $(TARGET).json
    nextpnr-ecp5 --25k --package CABGA256 --speed 6 --json $< --textcfg $@ --lpf $(TARGET).lpf --freq 65

$(TARGET).bit: out.config
    ecppack --svf ${TARGET}.svf $< $@

${TARGET}.svf : ${TARGET}.bit

prog: ${TARGET}.svf
    openFPGALoader -c digilent_hs2 $(TARGET).bit

clean:
    rm -f *.svf *.bit *.ys

.PHONY: prog clean

```
And my config file (which i have named `out.config`) is straight from the github page [here](https://raw.githubusercontent.com/wuxx/icesugar-pro/master/src/blink/blink_out.config).

I'm planning another project involving this fpga, one thats more challenging than anything i've really ever programmed, so hopefully that goes well!

See ya round - GhostDog