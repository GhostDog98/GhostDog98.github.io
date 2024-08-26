(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[582],{827:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Firmware-Flash/Updating_Manta_klipper_firmware_remotely",function(){return i(2617)}])},2967:function(e,n){"use strict";n.Z={src:"/_next/static/media/644c499b9642d.7f36508f.png",height:346,width:1248,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAADFBMVEVERUUjIyM1NTUmJiY8QK9yAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAFElEQVR4nGNgAAEmRkYwzcDEzAgAAEwAC0LFG1MAAAAASUVORK5CYII=",blurWidth:8,blurHeight:2}},2617:function(e,n,i){"use strict";i.r(n),i.d(n,{__toc:function(){return c}});var a=i(5893),r=i(2673),t=i(7693),s=i(8426);i(9128);var l=i(2643),o=i(2967),d=i(9013);let c=[{depth:2,value:"Requirements",id:"requirements"},{depth:2,value:"Updating Klipper",id:"updating-klipper"},{depth:2,value:"Make The klipper firmware",id:"make-the-klipper-firmware"},{depth:2,value:"Put the Manta in DFU mode via Canboot script",id:"put-the-manta-in-dfu-mode-via-canboot-script"},{depth:2,value:"Flash the Manta",id:"flash-the-manta"}];function _createMdxContent(e){let n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",span:"span",details:"details",summary:"summary",img:"img"},(0,l.a)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{children:"Updating klipper on the Manta remotely"}),"\n",(0,a.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,a.jsx)(n.p,{children:"This is for use with a working printer that requires the klipper firmware on the Manta to be updated. You must have at least downloaded the CanBoot repo per the initial flashing instructions as we will use one of its scripts to put the Manta in DFU mode over CAN."}),"\n",(0,a.jsx)(n.h2,{id:"updating-klipper",children:"Updating Klipper"}),"\n",(0,a.jsx)(n.p,{children:"You will need the canbus ID for your Manta, it can be found in your printer.cfg file under [mcu], write this down, you will need it later in the process."}),"\n",(0,a.jsx)(d.UW,{type:"warning",children:(0,a.jsx)(n.p,{children:"Note that on some boards, like the Octopus Pro v1, entering DFU mode can cause undesired actions (such as powering the heater while in DFU mode). I experienced no issue while updating my Manta M8P V2, but this is noted in the klipper docs, so I'm passing it along."})}),"\n",(0,a.jsx)(n.h2,{id:"make-the-klipper-firmware",children:"Make The klipper firmware"}),"\n",(0,a.jsx)(n.p,{children:"Stop the klipper Service (This can be done from in mainsail)"}),"\n",(0,a.jsx)(n.p,{children:"Connect to your printer via SSH"}),"\n",(0,a.jsx)(n.pre,{"data-language":"shell","data-theme":"default",children:(0,a.jsxs)(n.code,{"data-language":"shell","data-theme":"default",children:[(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"$"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"cd"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"~/klipper"})]}),"\n",(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"$"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"make"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"menuconfig"})]})]})}),"\n",(0,a.jsxs)(n.details,{children:[(0,a.jsx)(n.summary,{children:"Manta M8P V1"}),(0,a.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,a.jsxs)(n.code,{"data-language":"text","data-theme":"default",children:[(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"[*] Enable extra low-level configuration options"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    Micro-controller Architecture (STMicroelectronics STM32)  --->"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    Processor model (STM32G0B1)  --->"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    Bootloader offset (8KiB bootloader)  --->  "})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    Clock Reference (8 MHz crystal)  --->"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    Communication interface (USB to CAN bus bridge (USB on PA11/PA12))  --->"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    CAN bus interface (CAN bus (on PD12/PD13))  --->"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    USB ids  --->"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(1000000) CAN bus speed"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"()  GPIO pins to set at micro-controller startup"})})]})}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://img.mpx.wiki/i/2023/03/19/6415f8cc73d94.webp",alt:"image-20230319014546632"})})]}),"\n",(0,a.jsxs)(n.details,{children:[(0,a.jsx)(n.summary,{children:"Manta M8P V2"}),(0,a.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,a.jsxs)(n.code,{"data-language":"text","data-theme":"default",children:[(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"[*] Enable extra low-level configuration options"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    Micro-controller Architecture (STMicroelectronics STM32)  --->"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    Processor model (STM32H723)  --->"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    Bootloader offset (128KiB bootloader  --->"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    Clock Reference (25 MHz crystal)  --->"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    Communication interface (USB to CAN bus bridge (USB on PA11/PA12))  --->"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    CAN bus interface (CAN bus (on PD0/PD1))  --->"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    USB ids  --->"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(1000000) CAN bus speed"})}),"\n",(0,a.jsx)(n.span,{className:"line",children:(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"()  GPIO pins to set at micro-controller startup"})})]})}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://img.mpx.wiki/i/2024/04/15/661c5bae827cb.webp",alt:"KlipperMantaConfig2.webp"})})]}),"\n",(0,a.jsxs)(n.p,{children:["Press Q to save and then run ",(0,a.jsx)(n.code,{children:"make"})," from the terminal:"]}),"\n",(0,a.jsx)(n.pre,{"data-language":"shell","data-theme":"default",children:(0,a.jsx)(n.code,{"data-language":"shell","data-theme":"default",children:(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"$"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"make"})]})})}),"\n",(0,a.jsx)(n.h2,{id:"put-the-manta-in-dfu-mode-via-canboot-script",children:"Put the Manta in DFU mode via Canboot script"}),"\n",(0,a.jsx)(d.UW,{type:"info",children:(0,a.jsx)(n.p,{children:"Canboot was recently renamed to Katapult. Depending on your installation you may need to substitute katapult for CanBoot below."})}),"\n",(0,a.jsx)(n.p,{children:"Via SSH:"}),"\n",(0,a.jsx)(n.pre,{"data-language":"shell","data-theme":"default",children:(0,a.jsx)(n.code,{"data-language":"shell","data-theme":"default",children:(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"$"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"python3"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"~/CanBoot/scripts/flashtool.py"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"-i"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"can0"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"-u"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"uui"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"d"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"-r"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"# replacing <uuid> with the uuid for your Manta"})]})})}),"\n",(0,a.jsx)(n.p,{children:"Let's verify that the Manta is in DFU mode:"}),"\n",(0,a.jsx)(n.pre,{"data-language":"shell","data-theme":"default",children:(0,a.jsx)(n.code,{"data-language":"shell","data-theme":"default",children:(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"$"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"lsusb"})]})})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"image-20230319015826219",placeholder:"blur",src:o.Z})}),"\n",(0,a.jsxs)(n.p,{children:["There should be a DFU Mode device found. Record its ID, but normally it's ",(0,a.jsx)(n.code,{children:"0483:df11"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"flash-the-manta",children:"Flash the Manta"}),"\n",(0,a.jsx)(n.pre,{"data-language":"shell","data-theme":"default",children:(0,a.jsx)(n.code,{"data-language":"shell","data-theme":"default",children:(0,a.jsxs)(n.span,{className:"line",children:[(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"$"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"make"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"flash"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"FLASH_DEVICE="}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"0483"}),(0,a.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:":df11"})]})})}),"\n",(0,a.jsx)(n.p,{children:"Restart your printer"}),"\n",(0,a.jsx)(d.UW,{type:"info",children:(0,a.jsx)(n.p,{children:"In the event the Klipper flash fails and the Manta becomes unresponive, it can be recovered by reflashing the bootloader and then Klipper - see the troubleshooting section of the initial flashing guide. The USB_5v jumper on the Manta is not needed if the board is powered from the printer."})})]})}let h={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,l.a)(),e.components);return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/Firmware-Flash/Updating_Manta_klipper_firmware_remotely.mdx",route:"/Firmware-Flash/Updating_Manta_klipper_firmware_remotely",timestamp:1713542556e3,pageMap:[{kind:"Folder",name:"Firmware-Flash",route:"/Firmware-Flash",children:[{kind:"MdxPage",name:"Updating_EBB_klipper_firmware_via_CanBoot",route:"/Firmware-Flash/Updating_EBB_klipper_firmware_via_CanBoot"},{kind:"MdxPage",name:"Updating_Manta_klipper_firmware_remotely",route:"/Firmware-Flash/Updating_Manta_klipper_firmware_remotely"},{kind:"Meta",data:{"flash-m8p-v2-ebb":"Flash M8P V2 and EBB SB2209","flash-m8p-v1-ebb":"Flash M8P V1 and EBB SB2209",Updating_EBB_klipper_firmware_via_CanBoot:"Updating EBB Klipper firmware via CanBoot",Updating_Manta_klipper_firmware_remotely:"Updating Manta Klipper firmware remotely"}},{kind:"MdxPage",name:"flash-m8p-v1-ebb",route:"/Firmware-Flash/flash-m8p-v1-ebb"},{kind:"MdxPage",name:"flash-m8p-v2-ebb",route:"/Firmware-Flash/flash-m8p-v2-ebb"}]},{kind:"Folder",name:"Firmware-Setting",route:"/Firmware-Setting",children:[{kind:"Meta",data:{"sensorless-homing-m8p-v2":"M8P v2 Sensorless Homing","sensorless-homing-m8p-v1":"M8P v1 Sensorless Homing"}},{kind:"MdxPage",name:"sensorless-homing-m8p-v1",route:"/Firmware-Setting/sensorless-homing-m8p-v1"},{kind:"MdxPage",name:"sensorless-homing-m8p-v2",route:"/Firmware-Setting/sensorless-homing-m8p-v2"}]},{kind:"MdxPage",name:"Firmware",route:"/Firmware"},{kind:"Folder",name:"GENERAL-KIT",route:"/GENERAL-KIT",children:[{kind:"MdxPage",name:"Assembly-Tips",route:"/GENERAL-KIT/Assembly-Tips"},{kind:"MdxPage",name:"FAQ",route:"/GENERAL-KIT/FAQ"},{kind:"MdxPage",name:"Troubleshooting",route:"/GENERAL-KIT/Troubleshooting"},{kind:"MdxPage",name:"What-Else",route:"/GENERAL-KIT/What-Else"},{kind:"MdxPage",name:"Whats-This",route:"/GENERAL-KIT/Whats-This"},{kind:"MdxPage",name:"Wiring-Guide",route:"/GENERAL-KIT/Wiring-Guide"},{kind:"Meta",data:{"Whats-This":"About Our Kits","What-Else":"What Else Will I Need?","Assembly-Tips":"General Assembly Tips","Wiring-Guide":"General Wiring Guide",Troubleshooting:"Troubleshooting",FAQ:"FAQ"}}]},{kind:"Folder",name:"Maintenance",route:"/Maintenance",children:[{kind:"MdxPage",name:"Linear-rail-lubrication",route:"/Maintenance/Linear-rail-lubrication"},{kind:"MdxPage",name:"Spare-Parts",route:"/Maintenance/Spare-Parts"},{kind:"MdxPage",name:"Standard-Maintenance-Cycle",route:"/Maintenance/Standard-Maintenance-Cycle"},{kind:"Meta",data:{"Linear-rail-lubrication":"Linear Rail Lubrication","Standard-Maintenance-Cycle":"Standard Maintenance","Spare-Parts":"Spare Parts"}}]},{kind:"MdxPage",name:"Sound",route:"/Sound"},{kind:"Folder",name:"Troubleshooting",route:"/Troubleshooting",children:[{kind:"Meta",data:{troubleshooting:"General Troubleshooting","corexy-direction":"CoreXY Direction Issues"}},{kind:"MdxPage",name:"corexy-direction",route:"/Troubleshooting/corexy-direction"},{kind:"MdxPage",name:"troubleshooting",route:"/Troubleshooting/troubleshooting"}]},{kind:"MdxPage",name:"Tuning",route:"/Tuning"},{kind:"Folder",name:"VORON-2.4-CBT-KIT",route:"/VORON-2.4-CBT-KIT",children:[{kind:"MdxPage",name:"Assembly-Tips",route:"/VORON-2.4-CBT-KIT/Assembly-Tips"},{kind:"MdxPage",name:"BOM-List",route:"/VORON-2.4-CBT-KIT/BOM-List"},{kind:"MdxPage",name:"Print-Guide",route:"/VORON-2.4-CBT-KIT/Print-Guide"},{kind:"MdxPage",name:"Umbilical-Guide",route:"/VORON-2.4-CBT-KIT/Umbilical-Guide"},{kind:"MdxPage",name:"Wiring-Guide",route:"/VORON-2.4-CBT-KIT/Wiring-Guide"},{kind:"Meta",data:{"BOM-List":"BOM List","Print-Guide":"Print Guide","Assembly-Tips":"Assembly Tips","Umbilical-Guide":"Umbilical Guide","Wiring-Guide":"Wiring Guide"}}]},{kind:"Folder",name:"VORON-AWD-2WD-MOD",route:"/VORON-AWD-2WD-MOD",children:[{kind:"MdxPage",name:"2.4-manual",route:"/VORON-AWD-2WD-MOD/2.4-manual"},{kind:"MdxPage",name:"2.4-wiring",route:"/VORON-AWD-2WD-MOD/2.4-wiring"},{kind:"Meta",data:{intro:"9mm AWD/2WD Intro",bom:"9mm AWD/2WD BOM","trident-manual":"Trident AWD/2WD Manual","2.4-manual":"2.4 AWD/2WD Manual","2.4-wiring":"2.4 AWD/2WD Wiring",tuning:"Tuning"}},{kind:"MdxPage",name:"bom",route:"/VORON-AWD-2WD-MOD/bom"},{kind:"MdxPage",name:"intro",route:"/VORON-AWD-2WD-MOD/intro"},{kind:"MdxPage",name:"trident-manual",route:"/VORON-AWD-2WD-MOD/trident-manual"},{kind:"MdxPage",name:"tuning",route:"/VORON-AWD-2WD-MOD/tuning"}]},{kind:"Folder",name:"VORON-TRIDENT-CBT-KIT",route:"/VORON-TRIDENT-CBT-KIT",children:[{kind:"MdxPage",name:"About-Trident-Kit",route:"/VORON-TRIDENT-CBT-KIT/About-Trident-Kit"},{kind:"MdxPage",name:"Assembly-Tips",route:"/VORON-TRIDENT-CBT-KIT/Assembly-Tips"},{kind:"MdxPage",name:"Print-Guide",route:"/VORON-TRIDENT-CBT-KIT/Print-Guide"},{kind:"MdxPage",name:"Trident-CBT-Bom",route:"/VORON-TRIDENT-CBT-KIT/Trident-CBT-Bom"},{kind:"MdxPage",name:"Wiring",route:"/VORON-TRIDENT-CBT-KIT/Wiring"},{kind:"Meta",data:{"About-Trident-Kit":"MPX vs Official Trident","Trident-CBT-Bom":"BOM List","Print-Guide":"Print Guide","Assembly-Tips":"Assembly Tips",Wiring:"Wiring Guide"}}]},{kind:"Meta",data:{index:"Introduction","-- Voron Kits":{type:"separator",title:"VORON Kits"},"GENERAL-KIT":"General Kit Info","VORON-2.4-CBT-KIT":"V2.4 CBT Specific","VORON-TRIDENT-CBT-KIT":"Trident CBT Specific","-- General":{type:"separator",title:"General"},Firmware:"Firmware","Firmware-Flash":"Firmware Flash","Firmware-Setting":"Firmware Settings",Tuning:"Initial Startup & Tuning",Troubleshooting:"Troubleshooting",Maintenance:"Maintenance","-- Mods":{type:"separator",title:"Mods"},"VORON-AWD-2WD-MOD":"VORON AWD/2WD Mod",Sound:"Adding Sound","-- Archive":{type:"separator",title:"Archive"}}},{kind:"MdxPage",name:"index",route:"/"}],flexsearch:{codeblocks:!0},title:"Updating klipper on the Manta remotely",headings:c},pageNextRoute:"/Firmware-Flash/Updating_Manta_klipper_firmware_remotely",nextraLayout:t.ZP,themeConfig:s.Z};n.default=(0,r.j)(h)},8426:function(e,n,i){"use strict";var a=i(5893);i(7294);let r={logo:(0,a.jsx)("span",{children:"MPX WIKI"}),project:{link:"https://github.com/MagicPhoenix/mpx-wiki/"},chat:{link:"https://discord.gg/3Uhq6k7YSg"},docsRepositoryBase:"https://github.com/MagicPhoenix/mpx-wiki/tree/main",footer:{text:"MPX Wiki @2020-2024"},sidebar:{defaultMenuCollapseLevel:1},head:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("link",{rel:"icon",type:"image/x-icon",href:"/favicon.ico"})}),useNextSeoProps:()=>({titleTemplate:"%s – MPX Wiki"})};n.Z=r},5789:function(){}},function(e){e.O(0,[774,162,888,179],function(){return e(e.s=827)}),_N_E=e.O()}]);