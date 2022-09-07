const ofertasIndex = [
    {
        id: "1",
        descripcion: "Azaleas en flor",
        name: "Azalea",
        cant: 1,
        price: "1600",
        category: "ofertas",
        img: "https://images.pexels.com/photos/7718158/pexels-photo-7718158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 " 
    },
    {
        id: "2",
        descripcion: "clavelines en flor",
        name: "Clavelines",
        cant: 1,
        price: "850",
        category: "ofertas",
        img: "https://images.pexels.com/photos/2480232/pexels-photo-2480232.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: "3",
        descripcion: "geranios en flor",
        name: "Geranios",
        cant: 1,
        price: "780",
        category: "ofertas",
        img: "https://images.pexels.com/photos/6608986/pexels-photo-6608986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        id: "4",
        descripcion: "jazmin de leche en flor",
        name: "Jazmin de leche",
        cant: 1,
        price: "879",
        category: "ofertas",
        img: "https://images.pexels.com/photos/5649254/pexels-photo-5649254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        id: "5",
        descripcion: "margarita en flor",
        name: "Margarita (Colores varios)",
        cant: 1,
        price: "990",
        category: "ofertas",
        img: "https://images.pexels.com/photos/6617355/pexels-photo-6617355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        id: "6",
        descripcion: "narcisos en flor",
        name: "Narcisos",
        cant: 1,
        price: "1800",
        category: "ofertas",
        img: "https://images.pexels.com/photos/11958833/pexels-photo-11958833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        id: "7",
        descripcion: "tulipanes en flor",
        name: "Tulipanes",
        cant: 1,
        price: "2100",
        category: "ofertas",
        img: "https://images.pexels.com/photos/12938951/pexels-photo-12938951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        id: "8",
        descripcion: "rosa china en flor",
        name: "Rosa china",
        cant: 1,
        price: "1900",
        category: "ofertas",
        img: "https://images.pexels.com/photos/6471887/pexels-photo-6471887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        id: "9",
        descripcion: "planta-con-flor-dimorphoteca",
        name: "dimorphoteca",
        cant: 1,
        price: "890",
        category: "Plantas de exterior",
        img: "https://images.pexels.com/photos/531774/pexels-photo-531774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        id: "10",
        descripcion: "calendula-en-flor",
        name: "Calendula",
        cant: 1,
        price: "545",
        category: "Plantas de exterior",
        img: "https://images.pexels.com/photos/10719234/pexels-photo-10719234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        id: "11",
        descripcion: "pensamientos-en-flor",
        name: "Pensamientos",
        cant: 1,
        price: "500",
        category: "Plantas de exterior",
        img: "https://images.pexels.com/photos/668940/pexels-photo-668940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        id: "12",
        descripcion: "erica-en-flor",
        name: "Erica",
        cant: 1,
        price: "560",
        category: "Plantas de exterior",
        img: "https://images.pexels.com/photos/10916884/pexels-photo-10916884.jpeg"
    },
    {
        id: "13",
        descripcion: "ficus",
        name: "Ficus",
        cant: 1,
        price: "1.800",
        category: "Plantas de exterior",
        img: "https://images.pexels.com/photos/1903964/pexels-photo-1903964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        id: "14",
        descripcion: "suculenta",
        name: "Aeonium-rubra",
        cant: 1,
        price: " 550",
        category: "Plantas de exterior",
        img: "https://images.pexels.com/photos/5720098/pexels-photo-5720098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        id: "15",
        descripcion: "planta-de-interior",
        name: "Aphelandra-variegda",
        cant: 1,
        price: "1022",
        category: "Plantas de interior",
        img: "https://images.pexels.com/photos/3571563/pexels-photo-3571563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        id: "16",
        descripcion: "plantas-aromaticas",
        name: "Aromaticas",
        cant: 1,
        price: "840",
        category: "Plantas de exterior",
        img: "https://images.pexels.com/photos/8547929/pexels-photo-8547929.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: "17",
        descripcion: "plantas-de-interior",
        name: "Aspidistra",
        cant: 1,
        price: "1220",
        category: "Plantas de interior",
        img: "https://i.pinimg.com/564x/9b/4e/ce/9b4ece56c1b498e9d6d0e547f0dee3f5.jpg"
    },
    {
        id: "18",
        descripcion: "cactus-piedra",
        name: "Cactus piedra",
        cant: 1,
        price: "645",
        category: "Plantas de exterior",
        img: "https://i.pinimg.com/564x/74/4a/ef/744aef265b3f63265a9dc83bf8313408.jpg"
    },
    {
        id: "19",
        descripcion: "cactus-de-coleccion",
        name: "Cactus de coleccion",
        cant: 1,
        price: "840",
        category: "Plantas de exterior",
        img: "https://i.pinimg.com/564x/49/6b/7d/496b7ded4891aeb2d5e7ffe14c4205ac.jpg"
    },
    {
        id: "20",
        descripcion: "cactus-de-flor-amarilla",
        name: "Cactus especial de flor amarilla",
        cant: 1,
        price: "940",
        category: "Plantas de exterior",
        img: "https://i.pinimg.com/564x/50/db/69/50db6978337338538cbdb16fa4808999.jpg"
    },
    {
        id: "21",
        descripcion: "cactus-espiralado",
        name: "Cactus espiralado",
        cant: 1,
        price: "1654",
        category: "Plantas de exterior",
        img: "https://i.pinimg.com/564x/23/b8/11/23b8118e01f380b7aadcecdca79697e5.jpg"
    },
    {
        id: "22",
        descripcion: "cactus-injertado",
        name: "Cactus injertado",
        cant: 1,
        price: "890",
        category: "Plantas de exterior",
        img: "https://i.pinimg.com/564x/49/12/3a/49123a0f2ce2d7b493100cae0fcfb343.jpg"
    },
    {
        id: "23",
        descripcion: "croton-petra",
        name: "Croton petra",
        cant: 1,
        price: "950",
        category: "Plantas de interior",
        img: "https://i.pinimg.com/564x/fc/92/c1/fc92c165a7651ebaa2cbed250c52c646.jpg"
    },
    {
        id: "24",
        descripcion: "semillas-de-cesped",
        name: "Semillas de cesped",
        cant: 1,
        price: "1890",
        category: "Plantas de exterior",
        img: "https://pasturastropicales.com/wp-content/uploads/2021/04/pasto-mano.jpg"
    },
    {
        id: "25",
        descripcion: "maceta-de-balcon",
        name: "Balconera fibrocemento",
        cant: 1,
        price: "1800",
        category: "Macetas",
        img: "https://i.pinimg.com/564x/00/11/f1/0011f1a95f635b5fa6ed41f908bdefed.jpg"
    },
    {
        id: "26",
        descripcion: "maceta-cilindro-fibrocemento",
        name: "Maceta fibrocemento cilindro",
        cant: 1,
        price: "1200",
        category: "Macetas",
        img: "https://i.pinimg.com/564x/fd/10/d9/fd10d96f9b1d7df0673b20c0526198db.jpg"
    },
    {
        id: "27",
        descripcion: "cubo-fibrocemento",
        name: "Cubo de fibrocemento ",
        cant: 1,
        price: "890",
        category: "Macetas",
        img: "https://i.pinimg.com/564x/24/45/e9/2445e997e2ab4637bf5d25f084447246.jpg"
    },
    {
        id: "28",
        descripcion: "americana-terracota",
        name: "Americana terracota",
        cant: 1,
        price: "660",
        category: "Macetas",
        img: "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/159/765/products/americana-blum11-f4266b44526257a4ce15874961633288-640-0.jpg"
    },
    {
        id: "29",
        descripcion: "balconera-terracota",
        name: "Balconera terracota",
        cant: 1,
        price: "890",
        category: "Macetas",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_894323-MLA49855054049_052022-F.webp"
    },
    {
        id: "30",
        descripcion: "colgadera-de-pared",
        name: "colgadera de pared terracota",
        cant: 1,
        price: "1000",
        category: "Macetas",
        img: "https://www.terracotalerma.com/sites/default/files/imagenes_productos_sin_venta/maceta-pared-ceramica-terracota-lerma.jpg"
    },
    {
        id: "31",
        descripcion: "italiana-terracota ",
        name: "Italiana terracota",
        cant: 1,
        price: "1045",
        category: "Macetas",
        img: "https://puebloflorido.com/wp-content/uploads/2020/07/D_NQ_NP_687784-MLA31636430473_072019-1.jpg"
    },
    {
        id: "32",
        descripcion: "nordica-terracota ",
        name: "Nordica terracota esmaltada",
        cant: 1,
        price: " 1390",
        category: "Macetas",
        img: "https://http2.mlstatic.com/D_NQ_NP_674003-MLA49086899045_022022-W.jpg"
    },
    {
        id: "33",
        descripcion: "maceta-esmaltada-deco",
        name: "Esmaltada deco-azul ",
        cant: 1,
        price: "1220",
        category: "Macetas",
        img:"https://i.pinimg.com/474x/25/e3/cf/25e3cfc4962dc4d12c4e7d160c9ef75e.jpg"
    },

    {
        id: "33",
        descripcion: " maceta-cono ",
        name: "Maceta cono",
        cant: 1,
        price: " 1200",
        category: "Macetas",
        img: "https://i.pinimg.com/474x/01/93/8a/01938a0c0ce4c796f1dbe7b12cd2d31d.jpg"
    },

    {
        id: "34",
        descripcion: " maceta-rectangular-rotomoldeada ",
        name: "Maceta rectangular rotomoldeada",
        cant: 1,
        price: "4300",
        category: "Macetas",
        img: "https://http2.mlstatic.com/D_NQ_NP_931449-MLA45078559917_032021-W.webp"
    },

    {
        id: "35",
        descripcion: " maceta-cubo ",
        name: "Cubo plastico rotomoldeado",
        cant: 1,
        price: " 980",
        category: "Macetas",
        img: "https://http2.mlstatic.com/D_NQ_NP_830637-MLA45360144423_032021-W.webp "
    },

    {
        id: "36",
        descripcion: "esfera-leparc ",
        name: "Esfera rotomoldeada leparc",
        cant: 1,
        price: " 1890",
        category: "Macetas",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_982583-MLA48325898310_112021-F.webp"
    },

    {
        id: "37",
        descripcion: " maceta-hexagonal ",
        name: "Hexagonal con plato deco",
        cant: 1,
        price: " $ 960",
        category: "Macetas",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_795936-MLA48278128010_112021-F.webp"
    },

    {
        id: "38",
        descripcion: " maceta-inca-deco ",
        name: "Inca rustica rotomoldeado ",
        cant: 1,
        price: " 980",
        category: "Macetas",
        img: "https://http2.mlstatic.com/D_NQ_NP_704030-MLA49425799633_032022-W.webp"
    },

    {
        id: "39",
        descripcion: "vaso-colonial ",
        name: "vaso colonial",
        cant: 1,
        price: " 760",
        category: "Macetas",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_904801-MLA26250454444_102017-F.webp "
    },

    {
        id: "40",
        descripcion: "terrafertil ",
        name: "Terrafertil -Cactus y suculentas-",
        cant: 1,
        price: " 1800",
        category: "Insumos",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_640654-MLA46937241101_072021-F.webp"
    },
    {
        id: "41",
        descripcion: "terrafertil-compost ",
        name: "Abono Terrafertil",
        cant: 1,
        price: " 1200",
        category: "Insumos",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_811857-MLA46481367180_062021-F.webp" 
    },
    {
        id: "42",
        descripcion: "terrafertil ",
        name: "Terrafertil -bonsái- ",
        cant: 1,
        price: " 1350",
        category: "Insumos",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_927609-MLA31067304642_062019-F.webp"
    },
    {
        id: "43",
        descripcion: "terrafertil ",
        name: "Terrafertil -huerta- ",
        cant: 1,
        price: " 1240",
        category:"Insumos",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_998966-MLA46793771482_072021-F.webp"
    },
    {
        id: "44",
        descripcion: "terrafertil ",
        name: "Terrafertil -jardin-",
        cant: 1,
        price: " 1400",
        category: "Insumos",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_661861-MLA31036212561_062019-F.webp" 
    },
    {
        id: "45",
        descripcion: "terrafertil ",
        name: "Terrafertil -Chips-",
        cant: 1,
        price: " 890",
        category: "Insumos",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_852095-MLA44377602803_122020-F.webp" 
    },
    {
        id: "46",
        descripcion: "terrafertil ",
        name: " Humus",
        cant: 1,
        price: " 875",
        category:"Insumos",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_843260-MLA32821420561_112019-F.webp"
    },
    {
        id: "47",
        descripcion: "terrafertil ",
        name: "Terrafertil resaca",
        cant: 1,
        price: " 1200",
        category: "Insumos",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_910589-MLA32815283943_112019-F.webp"
    },
    {
        id: "48",
        descripcion: " musgo-tucumano  ",
        name: " Musgo tucumano ",
        cant: 1,
        price: " 880",
        category: "Insumos",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_999428-MLA50099916144_052022-F.webp" 
    },
    {
        id: "49",
        descripcion: " perlita  ",
        name: " Perlita ",
        cant: 1,
        price: " 1050",
        category:"Insumos",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_683145-MLA47546479552_092021-F.webp"
    },
    {
        id: "50",
        descripcion: "trichoderma ",
        name: " Trichoderma ",
        cant: 1,
        price: " 980",
        category:"Insumos",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_610036-MLA45136143629_032021-F.webp"
    },
    {
        id: "51",
        descripcion: "turba",
        name: " Turba ",
        cant: 1,
        price: " 1050",
        category:"Insumos",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_646172-MLA46794845008_072021-F.webp"
    },
    {
        id: "52",
        descripcion: "jabón-potásico",
        name: "  Jabón potásico + neem canela ",
        cant: 1,
        price: " 1680",
        category:"Insumos",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_745782-MLA49665231886_042022-F.webp"
    },
    {
        id: "53",
        descripcion: "tierra-de-diatomeas",
        name: " Tierra de diatomeas",
        cant: 1,
        price: " 950",
        category:"Insumos",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_692072-MLA46179879181_052021-F.webp"
    },
    {
        id: "54",
        descripcion: "fertizante-organico ",
        name: " Fertizante organico ",
        cant: 1,
        price: "980",
        category:"Insumos",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_600910-MLA45499485683_042021-F.webp"
    },
    {
        id: "55",
        descripcion: "fertilizante-organico-liquido ",
        name:  "Fertilizante organico liquido" ,
        cant: 1,
        price: " 890",
        category:"Insumos",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_965888-MLA32341807028_092019-F.webp"
    },
    {
        id: "56",
        descripcion: " barre-hojas  ",
        name: " Barre hojas/rastrillo ",
        cant: 1,
        price: " 1680",
        category:"Insumos",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_722861-MLA31121532288_062019-F.webp" 
    },
    {
        id: "57",
        descripcion: " pala-corazón",
        name: " Pala corazón de mango largo",
        cant: 1,
        price: " 1050",
        category:"Insumos",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_984176-MLA31050473190_062019-F.webp"
    },
    {
        id: "58",
        descripcion: "palita_jardin",
        name: " palita de jardín",
        cant: 1,
        price: " 750",
        category:"Insumos",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_892497-MLA46546010754_062021-F.webp"
    },
    {
        id: "59",
        descripcion: "tijera_podar",
        name: " Tijera de podar",
        cant: 1,
        price: " 1450",
        category:"Insumos",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_852033-MLA43312912052_082020-F.webp"
    },
    {
        id: "60",
        descripcion: "set_jardin_maceta",
        name: "Juego de herramientas para macetas",
        cant: 1,
        price: " 1350",
        category:"Insumos",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_893457-MLA31635415763_072019-F.webp" 
    },
    {
        id: "61",
        descripcion: "guante-colores1",
        name: "  Guantes reforzados",
        cant: 1,
        price: " 860",
        category:"Insumos",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_968598-MLA46495567060_062021-F.webp" 
    },
    {
        id: "62",
        descripcion: "combo-Herramientas-Guantes",
        name: "Guantes reforzado profesional + set de herramientas",
        cant: 1,
        price: " 9860",
        category:"Insumos",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_706645-MLA47355670220_092021-F.webp" 
    },
    {
        id: "63",
        descripcion: "piedras-tejo",
        name: "Piedra de rio, tejo plato x30 kg",
        cant: 1,
        price: " 900",
        category:"Decoracion",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_728885-MLA42753214208_072020-F.webp" 
    },
    {
        id: "64",
        descripcion: "estaca-solar",
        name: "Estaca solar decorativa, efecto llama x4",
        cant: 1,
        price: " 14000",
        category:"Decoracion",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_955097-MLA47339198187_092021-F.webp" 
    },
    {
        id: "65",
        descripcion: "maceta-simil-balde",
        name: "Macetas de barricas, roble frances",
        cant: 1,
        price: " 7900",
        category:"Decoracion",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_743882-MLA44384615532_122020-F.webp" 
    },
    {
        id: "66",
        descripcion: "escultura-angelito",
        name: "Escultura angelito, con lampara 12v",
        cant: 1,
        price: " 5900",
        category:"Decoracion",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_953470-MLA46214389344_052021-F.webp" 
    },
    {
        id: "67",
        descripcion: "flamenco-deco",
        name: "Flamenco deco x2",
        cant: 1,
        price: "7800",
        category:"Decoracion",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_701688-MLA42146235446_062020-F.webp" 
    },
    {
        id: "68",
        descripcion: "tucan ceramica",
        name: "Tucan ceramica artesanal",
        cant: 1,
        price: " 2500",
        category:"Decoracion",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_885677-MLA26956415450_032018-F.webp" 
    },
    {
        id: "69",
        descripcion: "antorcha-de-mesa",
        name: "Antorcha de mesa, acero inox 27cm",
        cant: 1,
        price: " 4900",
        category:"Decoracion",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_859845-MLA43558023452_092020-F.webp" 
    },
    {
        id: "70",
        descripcion: "escultura-buda",
        name: "Escultura hindu <Buda> de resina",
        cant: 1,
        price: " 19800",
        category:"Decoracion",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_885568-MLA48494267185_122021-F.webp" 
    },
    {
        id: "71",
        descripcion: "fuente-buda",
        name: "Fuente de agua -Buda- decoracion",
        cant: 1,
        price: " 16000",
        category:"Decoracion",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_758629-MLA50866640269_072022-F.webp" 
    },
    {
        id: "72",
        descripcion: "fuente-cascada",
        name: "Fuente de agua, cascada grande",
        cant: 1,
        price: " 146900",
        category:"Decoracion",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_991982-MLA47032394488_082021-F.webp" 
    },
    {
        id: "73",
        descripcion: "escultura-guerrero",
        name: "Escultura de guerrero terracota  resina",
        cant: 1,
        price: " 25900",
        category:"Decoracion",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_634140-MLA48950042827_012022-F.webp" 
    },
    {
        id: "74",
        descripcion: "escultura-perro-fu",
        name: "Escultura perro fu 28cm budismo zen deco",
        cant: 1,
        price: " 8900",
        category:"Decoracion",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_892714-MLA31590524114_072019-F.webp" 
    },
    {
        id: "75",
        descripcion: "piedras-partida",
        name: "Piedra partida blanca para caminos x25kg",
        cant: 1,
        price: " 1900",
        category:"Decoracion",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_729465-MLA44564068920_012021-F.webp" 
    },




]























