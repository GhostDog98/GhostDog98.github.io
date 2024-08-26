(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[165],{5207:function(e,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Firmware",function(){return n(6817)}])},6817:function(e,i,n){"use strict";n.r(i),n.d(i,{__toc:function(){return x},default:function(){return m}});var r=n(5893),t=n(2673),a=n(7693),s=n(8426);n(9128);var l=n(2643),o={src:"/_next/static/media/65aff0f1451af.9bfa9805.png",height:824,width:1509,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAACVBMVEUiISErKyodFRUpEYVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAHUlEQVR4nGNgZGBgZGRkAJEQzMDEyAhlMDAygGgAAXYAE/t6wkcAAAAASUVORK5CYII=",blurWidth:8,blurHeight:4},d={src:"/_next/static/media/65af007baa676.4f6a5c30.png",height:797,width:1274,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAACVBMVEUyMjZBQUY5Oz8xeXY3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIElEQVR4nD3IwQkAAAiAQHX/oYOCfB0SqUYocIhtz6MBAzkAHUqjvnQAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5},c={src:"/_next/static/media/65af08b16fb19.c402c81d.png",height:889,width:1129,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAADFBMVEX+/v7s6+v4+Pjl3t5d1PhQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIElEQVR4nGNgZmRkYmBgYGZgYmICMRgZoACZAZZBYgAABDUAIOAzKdsAAAAASUVORK5CYII=",blurWidth:8,blurHeight:6},h={src:"/_next/static/media/65af07c747863.131a82f8.png",height:706,width:1089,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAD1BMVEX5+fn+/v7x8vPs7e3l4eN+pyHfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nCWIwREAMAiDIGb/mXtaXgDtJKGEoA6yfFHN9Z4HBYQAMPlG5zsAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5},p=n(9013);let x=[{depth:2,value:"Slicer Settings",id:"slicer-settings"},{depth:3,value:"print_start/print_end macros",id:"print_startprint_end-macros"},{depth:2,value:"Configuration for Specific Hardware",id:"configuration-for-specific-hardware"},{depth:3,value:"Disco LED",id:"disco-led"},{depth:4,value:"Klipper NeoPixel",id:"klipper-neopixel"},{depth:3,value:"Rapido Thermistor",id:"rapido-thermistor"}];function _createMdxContent(e){let i=Object.assign({h1:"h1",p:"p",code:"code",ul:"ul",li:"li",a:"a",img:"img",h2:"h2",h3:"h3",details:"details",summary:"summary",pre:"pre",span:"span",strong:"strong",h4:"h4"},(0,l.a)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h1,{children:"Universal Firmware"}),"\n","\n",(0,r.jsxs)(i.p,{children:["Klipper depends on a configuration file called ",(0,r.jsx)(i.code,{children:"printer.cfg"})," that drives much of its operation.  However, the default file provided by BTT is not useful and will in fact cause Klipper to report an error instead.  Our printer.cfg files have all of the configuration information needed for our standard kits as long as you follow our wiring guide."]}),"\n",(0,r.jsx)(i.p,{children:"You will need to download two files. They can be found in the respective Github repository for your particular printer."}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["For V2.4 printers, go to ",(0,r.jsx)(i.a,{href:"https://github.com/MagicPhoenix/MPX-VORON-24R2-CBT/tree/main/Firmware",children:"https://github.com/MagicPhoenix/MPX-VORON-24R2-CBT/tree/main/Firmware"})]}),"\n",(0,r.jsxs)(i.li,{children:["For Trident printers, go to ",(0,r.jsx)(i.a,{href:"https://github.com/MagicPhoenix/MPX-VORON-TRIDENT-CBT/tree/main/Firmware",children:"https://github.com/MagicPhoenix/MPX-VORON-TRIDENT-CBT/tree/main/Firmware"})]}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:["The first file to download will become your new ",(0,r.jsx)(i.code,{children:"printer.cfg"})," file.  To get it:"]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Go to the appropriate link above for your printer (V2.4 or Trident)"}),"\n",(0,r.jsxs)(i.li,{children:["Download the configuration file that matches your printer size (300mm vs 350mm) and the version of Manta M8P that you have (V1 vs V2).  e.g. ",(0,r.jsx)(i.code,{children:"300_printer_m8p_v2.cfg"})]}),"\n",(0,r.jsxs)(i.li,{children:["Get that file onto your printer.  Either","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["rename that file to ",(0,r.jsx)(i.code,{children:"printer.cfg"})," and upload it to the CB1 via the Mainsail interface, overwriting the old ",(0,r.jsx)(i.code,{children:"printer.cfg"})," or,"]}),"\n",(0,r.jsxs)(i.li,{children:["open the file on your PC with your editor of choice to copy and paste the file contents into the existing ",(0,r.jsx)(i.code,{children:"printer.cfg"}),".  No trace of the original ",(0,r.jsx)(i.code,{children:"printer.cfg"})," file should remain."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:["You can use the Mainsail web interface to easily make these changes. This annotated screenshot points out the key parts of the interface you'll need to know about to do so.\n",(0,r.jsx)(i.img,{alt:"Mainsail Interface",placeholder:"blur",src:o})]}),"\n",(0,r.jsxs)(i.p,{children:["The second file to download is required for the LEDs on the Stealthburner.  Download ",(0,r.jsx)(i.code,{children:"stealthburner_leds.cfg"})," from the same place you got the first file and upload it to the printer via the Mainsail interface.  Do not change the filename this time around."]}),"\n",(0,r.jsxs)(i.p,{children:["If you ordered the Disco LEDs or Rapido hotend, you also need to follow ",(0,r.jsx)(i.a,{href:"#configuration-for-specific-hardware",children:(0,r.jsx)(i.code,{children:"Configuration for Specific Hardware"})})," to make further edits to your new ",(0,r.jsx)(i.code,{children:"printer.cfg"})," file.  Note that the Chaoticlab CNC tap does not require any special software configuration."]}),"\n",(0,r.jsx)(i.h2,{id:"slicer-settings",children:"Slicer Settings"}),"\n",(0,r.jsx)(i.h3,{id:"print_startprint_end-macros",children:"print_start/print_end macros"}),"\n",(0,r.jsx)(i.p,{children:"The print_start/print_end macros run some actions that are required before and after the actual printing. With the basic macros included in the printer.cfg, it will do the following:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["print_start","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Home all axis"}),"\n",(0,r.jsx)(i.li,{children:"Level the bed (QUAD_GANTRY_LEVEL for v2.4 or Z_TILT_ADJUST for Trident)"}),"\n",(0,r.jsx)(i.li,{children:"Rehome the axis"}),"\n",(0,r.jsx)(i.li,{children:"Park over the center of the bed"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["print_end","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Turns off the heaters"}),"\n",(0,r.jsx)(i.li,{children:"Parks the toolhead at the back"}),"\n",(0,r.jsx)(i.li,{children:"Turns off fans"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"In order to trigger these macros, we need to tell our slicer to pass the commands along in the gcode. See the sections below for the location to add our custom gcode for different slicers."}),"\n",(0,r.jsxs)(i.details,{children:[(0,r.jsx)(i.summary,{children:"OrcaSlicer"}),(0,r.jsx)(i.p,{children:"The custom gcode settings are under Printer setting > Machine G-code (You will need to enable advanced settings to see it)"}),(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"Orca_Machine_G-Code2.png",placeholder:"blur",src:d})}),(0,r.jsx)(i.p,{children:"Machine start G-code"}),(0,r.jsx)(i.pre,{"data-language":"text","data-theme":"default",children:(0,r.jsxs)(i.code,{"data-language":"text","data-theme":"default",children:[(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"M190 S[bed_temperature_initial_layer_single]"})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"M109 S150"})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"PRINT_START"})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"M109 S[nozzle_temperature_initial_layer]"})})]})}),(0,r.jsx)(i.p,{children:"Machine end G-code"}),(0,r.jsx)(i.pre,{"data-language":"text","data-theme":"default",children:(0,r.jsx)(i.code,{"data-language":"text","data-theme":"default",children:(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"PRINT_END"})})})})]}),"\n",(0,r.jsxs)(i.details,{children:[(0,r.jsx)(i.summary,{children:"PrusaSlicer"}),(0,r.jsx)(i.p,{children:"The custom gcode settings are under Printer Setting > Custom G-code (You will need to enable Expert settings to see it)"}),(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"Prusa_Machine_G-Code2.png",placeholder:"blur",src:c})}),(0,r.jsx)(i.p,{children:"Start G-code"}),(0,r.jsx)(i.pre,{"data-language":"text","data-theme":"default",children:(0,r.jsxs)(i.code,{"data-language":"text","data-theme":"default",children:[(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"M190 S[first_layer_bed_temperature]"})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"M109 S150"})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"PRINT_START"})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"M109 S[first_layer_temperature[initial_extruder]]"})})]})}),(0,r.jsx)(i.p,{children:"End G-code"}),(0,r.jsx)(i.pre,{"data-language":"text","data-theme":"default",children:(0,r.jsx)(i.code,{"data-language":"text","data-theme":"default",children:(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"PRINT_END"})})})})]}),"\n",(0,r.jsxs)(i.details,{children:[(0,r.jsx)(i.summary,{children:"SuperSlicer"}),(0,r.jsx)(i.p,{children:"The custom gcode settings are under Printer Setting > Custom G-code (You will need to enable Expert settings to see it)"}),(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"Super_Machine_G-Code.png",placeholder:"blur",src:h})}),(0,r.jsx)(i.p,{children:"Start G-code"}),(0,r.jsx)(i.pre,{"data-language":"text","data-theme":"default",children:(0,r.jsxs)(i.code,{"data-language":"text","data-theme":"default",children:[(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"M190 S[first_layer_bed_temperature]"})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"M109 S150"})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"PRINT_START"})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"M109 S{first_layer_temperature[initial_extruder] + extruder_temperature_offset[initial_extruder]}"})})]})}),(0,r.jsx)(i.p,{children:"End G-code"}),(0,r.jsx)(i.pre,{"data-language":"text","data-theme":"default",children:(0,r.jsx)(i.code,{"data-language":"text","data-theme":"default",children:(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"PRINT_END"})})})})]}),"\n",(0,r.jsx)(p.UW,{type:"info",children:(0,r.jsxs)(i.p,{children:["Once you've got the basics down, you may want to look at this ",(0,r.jsx)(i.a,{href:"https://github.com/jontek2/A-better-print_start-macro",children:'"Better Print Start Macro"'})," by jontek2 on Github."]})}),"\n",(0,r.jsx)(i.h2,{id:"configuration-for-specific-hardware",children:"Configuration for Specific Hardware"}),"\n",(0,r.jsx)(i.h3,{id:"disco-led",children:"Disco LED"}),"\n",(0,r.jsx)(p.UW,{type:"info",children:(0,r.jsx)(i.p,{children:"The Disco LED configuration is different depending on if you have a Manta V1 or V2.  The former has two pins that separately drive each stick, the latter has a single pin that drives both sticks connected in series."})}),"\n",(0,r.jsxs)(i.p,{children:["Uncomment the lines (remove the ",(0,r.jsx)(i.code,{children:"#"}),' character) in the "Disco LED" section in the ',(0,r.jsx)(i.code,{children:"printer.cfg"})," file.  For Manta V1 and its two drive pins, it should look something like this.    Update the ",(0,r.jsx)(i.code,{children:"chain_count"})," values in each section to equal the number of LEDs in each stick if necessary."]}),"\n",(0,r.jsx)(p.UW,{type:"info",children:(0,r.jsxs)(i.p,{children:["Most people will need to change the ",(0,r.jsx)(i.code,{children:"color_order"})," value.  The ",(0,r.jsx)(i.code,{children:"BGRW"})," setting below indicates a LED that supports a fourth, pure white channel that the Disco sticks generally don't have.  If your LEDs aren't working right or colors are wrong, try a ",(0,r.jsx)(i.code,{children:"color_order"})," of ",(0,r.jsx)(i.code,{children:"RGB"})," or ",(0,r.jsx)(i.code,{children:"GRB"}),"."]})}),"\n",(0,r.jsx)(i.pre,{"data-language":"text","data-theme":"default",children:(0,r.jsxs)(i.code,{"data-language":"text","data-theme":"default",children:[(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"[neopixel disco1]"})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"pin: PD15"})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"chain_count: 25"})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"color_order: BGRW"})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"initial_RED: 1.0"})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"initial_GREEN: 1.0"})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"initial_BLUE: 1.0"})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:" "})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"[neopixel disco2]"})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"pin: PB15"})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"chain_count: 25"})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"color_order: BGRW"})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"initial_RED: 1.0"})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"initial_GREEN: 1.0"})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"initial_BLUE: 1.0"})})]})}),"\n",(0,r.jsxs)(i.p,{children:["For Manta V2 and its single drive pin, it should look something like this, with the last half commented out.  Update the ",(0,r.jsx)(i.code,{children:"chain_count"})," value in the top half to equal the ",(0,r.jsx)(i.strong,{children:"total"})," number of LEDs in ",(0,r.jsx)(i.strong,{children:"both"})," sticks if necessary.  The values in the bottom half are commented out so don't matter."]}),"\n",(0,r.jsx)(i.pre,{"data-language":"text","data-theme":"default",children:(0,r.jsxs)(i.code,{"data-language":"text","data-theme":"default",children:[(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"[neopixel disco1]"})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"pin: PD15"})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"chain_count: 50"})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"color_order: BGRW"})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"initial_RED: 1.0"})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"initial_GREEN: 1.0"})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"initial_BLUE: 1.0"})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:" "})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"# [neopixel disco2]"})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"# pin: PB15"})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"# chain_count: 25"})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"# color_order: BGRW"})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"# initial_RED: 1.0"})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"# initial_GREEN: 1.0"})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"# initial_BLUE: 1.0"})})]})}),"\n",(0,r.jsx)(i.h4,{id:"klipper-neopixel",children:"Klipper NeoPixel"}),"\n",(0,r.jsx)(p.UW,{type:"info",children:(0,r.jsxs)(i.p,{children:["The Disco LED has some cool uses, such as using it as a progress bar for printing, indicating extruder temperature or printing speed.  You can check it out at the ",(0,r.jsx)(i.a,{href:"https://github.com/digitalninja-ro/klipper-neopixel",children:"Klipper Neopixel Github"}),"."]})}),"\n",(0,r.jsx)(i.p,{children:"Our two Disco LEDs can be configured independently, so you can choose to use them for the same purpose or for different purposes. For example, you can use the left one to display extruder temperature and the right one to show print progress."}),"\n",(0,r.jsx)(i.h3,{id:"rapido-thermistor",children:"Rapido Thermistor"}),"\n",(0,r.jsxs)(i.p,{children:["The Rapido has its own integrated thermistor. Specify ",(0,r.jsx)(i.code,{children:"ATC Semitec 104NT-4-R025H42G"})," instead of the stock ",(0,r.jsx)(i.code,{children:"generic 3950"})," in your ",(0,r.jsx)(i.code,{children:"printer.cfg"})," file.  In other words, change this"]}),"\n",(0,r.jsx)(i.pre,{"data-language":"text","data-theme":"default",children:(0,r.jsxs)(i.code,{"data-language":"text","data-theme":"default",children:[(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"heater_pin: EBBCan: PB13"})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"sensor_type: Generic 3950"})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"sensor_pin: EBBCan: PA3"})})]})}),"\n",(0,r.jsx)(i.p,{children:"to this"}),"\n",(0,r.jsx)(i.pre,{"data-language":"text","data-theme":"default",children:(0,r.jsxs)(i.code,{"data-language":"text","data-theme":"default",children:[(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"heater_pin: EBBCan: PB13"})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"sensor_type: ATC Semitec 104NT-4-R025H42G"})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"sensor_pin: EBBCan: PA3"})})]})}),"\n",(0,r.jsxs)(i.p,{children:["in ",(0,r.jsx)(i.code,{children:"printer.cfg"}),"."]})]})}let u={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:i}=Object.assign({},(0,l.a)(),e.components);return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/Firmware.mdx",route:"/Firmware",timestamp:1706600589e3,pageMap:[{kind:"Folder",name:"Firmware-Flash",route:"/Firmware-Flash",children:[{kind:"MdxPage",name:"Updating_EBB_klipper_firmware_via_CanBoot",route:"/Firmware-Flash/Updating_EBB_klipper_firmware_via_CanBoot"},{kind:"MdxPage",name:"Updating_Manta_klipper_firmware_remotely",route:"/Firmware-Flash/Updating_Manta_klipper_firmware_remotely"},{kind:"Meta",data:{"flash-m8p-v2-ebb":"Flash M8P V2 and EBB SB2209","flash-m8p-v1-ebb":"Flash M8P V1 and EBB SB2209",Updating_EBB_klipper_firmware_via_CanBoot:"Updating EBB Klipper firmware via CanBoot",Updating_Manta_klipper_firmware_remotely:"Updating Manta Klipper firmware remotely"}},{kind:"MdxPage",name:"flash-m8p-v1-ebb",route:"/Firmware-Flash/flash-m8p-v1-ebb"},{kind:"MdxPage",name:"flash-m8p-v2-ebb",route:"/Firmware-Flash/flash-m8p-v2-ebb"}]},{kind:"Folder",name:"Firmware-Setting",route:"/Firmware-Setting",children:[{kind:"Meta",data:{"sensorless-homing-m8p-v2":"M8P v2 Sensorless Homing","sensorless-homing-m8p-v1":"M8P v1 Sensorless Homing"}},{kind:"MdxPage",name:"sensorless-homing-m8p-v1",route:"/Firmware-Setting/sensorless-homing-m8p-v1"},{kind:"MdxPage",name:"sensorless-homing-m8p-v2",route:"/Firmware-Setting/sensorless-homing-m8p-v2"}]},{kind:"MdxPage",name:"Firmware",route:"/Firmware"},{kind:"Folder",name:"GENERAL-KIT",route:"/GENERAL-KIT",children:[{kind:"MdxPage",name:"Assembly-Tips",route:"/GENERAL-KIT/Assembly-Tips"},{kind:"MdxPage",name:"FAQ",route:"/GENERAL-KIT/FAQ"},{kind:"MdxPage",name:"Troubleshooting",route:"/GENERAL-KIT/Troubleshooting"},{kind:"MdxPage",name:"What-Else",route:"/GENERAL-KIT/What-Else"},{kind:"MdxPage",name:"Whats-This",route:"/GENERAL-KIT/Whats-This"},{kind:"MdxPage",name:"Wiring-Guide",route:"/GENERAL-KIT/Wiring-Guide"},{kind:"Meta",data:{"Whats-This":"About Our Kits","What-Else":"What Else Will I Need?","Assembly-Tips":"General Assembly Tips","Wiring-Guide":"General Wiring Guide",Troubleshooting:"Troubleshooting",FAQ:"FAQ"}}]},{kind:"Folder",name:"Maintenance",route:"/Maintenance",children:[{kind:"MdxPage",name:"Linear-rail-lubrication",route:"/Maintenance/Linear-rail-lubrication"},{kind:"MdxPage",name:"Spare-Parts",route:"/Maintenance/Spare-Parts"},{kind:"MdxPage",name:"Standard-Maintenance-Cycle",route:"/Maintenance/Standard-Maintenance-Cycle"},{kind:"Meta",data:{"Linear-rail-lubrication":"Linear Rail Lubrication","Standard-Maintenance-Cycle":"Standard Maintenance","Spare-Parts":"Spare Parts"}}]},{kind:"MdxPage",name:"Sound",route:"/Sound"},{kind:"Folder",name:"Troubleshooting",route:"/Troubleshooting",children:[{kind:"Meta",data:{troubleshooting:"General Troubleshooting","corexy-direction":"CoreXY Direction Issues"}},{kind:"MdxPage",name:"corexy-direction",route:"/Troubleshooting/corexy-direction"},{kind:"MdxPage",name:"troubleshooting",route:"/Troubleshooting/troubleshooting"}]},{kind:"MdxPage",name:"Tuning",route:"/Tuning"},{kind:"Folder",name:"VORON-2.4-CBT-KIT",route:"/VORON-2.4-CBT-KIT",children:[{kind:"MdxPage",name:"Assembly-Tips",route:"/VORON-2.4-CBT-KIT/Assembly-Tips"},{kind:"MdxPage",name:"BOM-List",route:"/VORON-2.4-CBT-KIT/BOM-List"},{kind:"MdxPage",name:"Print-Guide",route:"/VORON-2.4-CBT-KIT/Print-Guide"},{kind:"MdxPage",name:"Umbilical-Guide",route:"/VORON-2.4-CBT-KIT/Umbilical-Guide"},{kind:"MdxPage",name:"Wiring-Guide",route:"/VORON-2.4-CBT-KIT/Wiring-Guide"},{kind:"Meta",data:{"BOM-List":"BOM List","Print-Guide":"Print Guide","Assembly-Tips":"Assembly Tips","Umbilical-Guide":"Umbilical Guide","Wiring-Guide":"Wiring Guide"}}]},{kind:"Folder",name:"VORON-AWD-2WD-MOD",route:"/VORON-AWD-2WD-MOD",children:[{kind:"MdxPage",name:"2.4-manual",route:"/VORON-AWD-2WD-MOD/2.4-manual"},{kind:"MdxPage",name:"2.4-wiring",route:"/VORON-AWD-2WD-MOD/2.4-wiring"},{kind:"Meta",data:{intro:"9mm AWD/2WD Intro",bom:"9mm AWD/2WD BOM","trident-manual":"Trident AWD/2WD Manual","2.4-manual":"2.4 AWD/2WD Manual","2.4-wiring":"2.4 AWD/2WD Wiring",tuning:"Tuning"}},{kind:"MdxPage",name:"bom",route:"/VORON-AWD-2WD-MOD/bom"},{kind:"MdxPage",name:"intro",route:"/VORON-AWD-2WD-MOD/intro"},{kind:"MdxPage",name:"trident-manual",route:"/VORON-AWD-2WD-MOD/trident-manual"},{kind:"MdxPage",name:"tuning",route:"/VORON-AWD-2WD-MOD/tuning"}]},{kind:"Folder",name:"VORON-TRIDENT-CBT-KIT",route:"/VORON-TRIDENT-CBT-KIT",children:[{kind:"MdxPage",name:"About-Trident-Kit",route:"/VORON-TRIDENT-CBT-KIT/About-Trident-Kit"},{kind:"MdxPage",name:"Assembly-Tips",route:"/VORON-TRIDENT-CBT-KIT/Assembly-Tips"},{kind:"MdxPage",name:"Print-Guide",route:"/VORON-TRIDENT-CBT-KIT/Print-Guide"},{kind:"MdxPage",name:"Trident-CBT-Bom",route:"/VORON-TRIDENT-CBT-KIT/Trident-CBT-Bom"},{kind:"MdxPage",name:"Wiring",route:"/VORON-TRIDENT-CBT-KIT/Wiring"},{kind:"Meta",data:{"About-Trident-Kit":"MPX vs Official Trident","Trident-CBT-Bom":"BOM List","Print-Guide":"Print Guide","Assembly-Tips":"Assembly Tips",Wiring:"Wiring Guide"}}]},{kind:"Meta",data:{index:"Introduction","-- Voron Kits":{type:"separator",title:"VORON Kits"},"GENERAL-KIT":"General Kit Info","VORON-2.4-CBT-KIT":"V2.4 CBT Specific","VORON-TRIDENT-CBT-KIT":"Trident CBT Specific","-- General":{type:"separator",title:"General"},Firmware:"Firmware","Firmware-Flash":"Firmware Flash","Firmware-Setting":"Firmware Settings",Tuning:"Initial Startup & Tuning",Troubleshooting:"Troubleshooting",Maintenance:"Maintenance","-- Mods":{type:"separator",title:"Mods"},"VORON-AWD-2WD-MOD":"VORON AWD/2WD Mod",Sound:"Adding Sound","-- Archive":{type:"separator",title:"Archive"}}},{kind:"MdxPage",name:"index",route:"/"}],flexsearch:{codeblocks:!0},title:"Universal Firmware",headings:x},pageNextRoute:"/Firmware",nextraLayout:a.ZP,themeConfig:s.Z};var m=(0,t.j)(u)},8426:function(e,i,n){"use strict";var r=n(5893);n(7294);let t={logo:(0,r.jsx)("span",{children:"MPX WIKI"}),project:{link:"https://github.com/MagicPhoenix/mpx-wiki/"},chat:{link:"https://discord.gg/3Uhq6k7YSg"},docsRepositoryBase:"https://github.com/MagicPhoenix/mpx-wiki/tree/main",footer:{text:"MPX Wiki @2020-2024"},sidebar:{defaultMenuCollapseLevel:1},head:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("link",{rel:"icon",type:"image/x-icon",href:"/favicon.ico"})}),useNextSeoProps:()=>({titleTemplate:"%s – MPX Wiki"})};i.Z=t},5789:function(){}},function(e){e.O(0,[774,162,888,179],function(){return e(e.s=5207)}),_N_E=e.O()}]);