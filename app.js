const express = require('express')
const path = require('path')
const hbs = require('hbs')
const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.get('/',(req, res)=>{
    let products = [
        {
            name:"ASUS ROG Zephyrus",
            category:"laptop",
            description:"ASUS ROG Zephyrus Duo 16 (2022) with 90Whr Battery Ryzen 9 Octa Core 6900HX - (32 GB/2 TB SSD/Windows 11 Home/16 GB Graphics/NVIDIA GeForce RTX 3080 Ti) GX650RXZ-LB226WS Gaming Laptop  (16 Inch, Black, 2.55 Kg, With MS Office)",
            image:"	https://rukminim1.flixcart.com/image/416/416/l58iaa80/computer/5/q/p/gx650rm-ls019ws-gaming-laptop-asus-original-imagfyg8tkytthbb.jpeg?q=70"
        },
        {
            name:"MSI Core i9 12th Gen",
            category:"laptop",
            description:"MSI Core i9 12th Gen - (32 GB/2 TB SSD/Windows 11 Home/16 GB Graphics/NVIDIA GeForce RTX 3080 Ti/120 Hz) Raider GE77HX 12UHS-205IN Gaming Laptop  (17.3 Inch, Titanium Dark Grey, 2.9 Kg) Laptop, Power Adaptor, User Guide, Warranty Documents",
            image:"https://rukminim1.flixcart.com/image/416/416/xif0q/computer/8/l/c/raider-ge77hx-12uhs-205in-gaming-laptop-msi-original-imaghffpfubseq3n.jpeg?q=70"
        },
        {
            name:"APPLE 2020 Macbook Air M1",
            category:"laptop",
            description:"APPLE 2020 Macbook Air M1 Stylish & Portable Thin and Light Laptop Light Laptop without Optical Disk Drive MacBook Air, 30 W USB-C Power Adapter, USB-C Charge Cable (2m), User Guide, Warranty Quad LED Backlit IPS Display  ",
            image:"https://rukminim1.flixcart.com/image/416/416/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=70"
        },
        {
            name:"Acer",
            category:"laptop",
            description:"Acer NoteBook is a Windows 10 laptop with a 15.60-inch display that has a resolution of 1366x768 pixels. It is powered by a Core i5 processor and it comes with 8GB of RAM. The HP NoteBook packs 256GB of SSD storage. Graphics are powered by Intel HD Graph",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYIweUHT3bLjlttoY3RORnDqWg0zZWDqlUow&usqp=CAU"
        }
    ]

    res.render('index1', { products })

})
app.get('/index2', function(req, res){
    let phones=[
        {
          name:"APPLE iPhone 14 (Midnight, 128 GB)",
          category:"Mobile",
          description:"Dimensions 160.8 x 78.1 x 7.7 mm (6.33 x 3.07 x 0.30 in) Weight 240 g (8.47 oz) Build Glass front (Corning-made glass), glass back (Corning-made glass), stainless steel frame SIM Single SIM (Nano-SIM and/or eSIM) or Dual SIM (Nano-SIM/eSIM, dual stand-by) IP68 dust/water resistant (up to 6m for 30 mins) Apple Pay (Visa, MasterCard, AMEX certified) Type Super Retina XDR OLED, 120Hz, HDR10, Dolby Vision, 1000 nits (HBM), 1200 nits (peak) Size 6.7 inches, 109.8 cm2 (~87.4% screen-to-body ratio) Resolution 1284 x 2778 pixels, 19.5:9 ratio (~458 ppi density) Protection Ceramic Shield glass",
          image:"https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=70"
        },
        {
          name:"Google Pixel 7 (Obsidian, 128 GB)",
          category:"Mobile",
          description:"	Dimensions 164 x 76.5 x 8.1 mm (6.46 x 3.01 x 0.32 in) Weight 193 g (6.81 oz) Build Glass front (Gorilla Glass 5), glass back (Gorilla Glass 5), plastic frame SIM Dual SIM (Nano-SIM, dual stand-by) IP53, dust and splash resistant OS Android 11, upgradable to Android 12, MIUI 13 Chipset Qualcomm SM7150 Snapdragon 732G (8 nm) CPU Octa-core (2x2.3 GHz Kryo 470 Gold & 6x1.8 GHz Kryo 470 Silver) GPU Adreno 618",
          image:"data:image/jpeg;base64,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"
        },
        {
          name:"OPPO F15",
          category:"Mobile",
          description:"	Dimensions 160.2 x 73.3 x 7.9 mm (6.31 x 2.89 x 0.31 in) Weight 172 g (6.07 oz) Build Glass front (Gorilla Glass 5), plastic back, plastic frame SIM Dual SIM (Nano-SIM, dual stand-by) OS Android 9.0 (Pie), upgradable to Android 11, ColorOS 11.1 Chipset Mediatek MT6771V Helio P70 (12nm) CPU Octa-core (4x2.1 GHz Cortex-A73 & 4x2.0 GHz Cortex-A53) GPU Mali-G72 MP3",
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXJPmBpMcw2J8EG9QI92M6Pv4K9-knPqz46w&usqp=CAU"
        },
        {
          name:"SAMSUNG Galaxy S22 Ultra 5G (Green, 256 GB)",
          category:"Mobile",
          description:"Dimensions 160 x 74.2 x 8.7 mm (EU/NA) 160 x 73.9 x 8.1 mm (IN/CN) Weight 192 g (EU/NA) 183 g (IN/CN) (6.46 oz) Build Glass front (Gorilla Glass 5), glass back (Gorilla Glass 5), plastic frame SIM Single SIM (Nano-SIM) or Dual SIM (Nano-SIM, dual stand-by) IP68 (T-Mobile version only) OS Android 11, upgradable to Android 12, OxygenOS 12 Chipset Qualcomm SM8350 Snapdragon 888 5G (5 nm) CPU Octa-core (1x2.84 GHz Cortex-X1 & 3x2.42 GHz Cortex-A78 & 4x1.80 GHz Cortex-A55) GPU Adreno 660",
          image:"https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/g/h/2/-original-imaggj68pbbezxcr.jpeg?q=70"
        }
      ]
     
      res.render('index2', { phones});
})
app.get('/index3', function(req, res){
    let names=[
        {
            name:'Alan Joseph'
        },
        {
            name:'Jithin KS'
        },
        {
            name:'Edwin '
        },
        {
            name:'Anoop'
        },
        {
            name:'Sam Sabu'
        },
        {
            name:'Gokul Das'
        }
    ]
    res.render('index3', { names});
})

app.listen(3000,()=>{
    console.log(" server started at port 3000")
})