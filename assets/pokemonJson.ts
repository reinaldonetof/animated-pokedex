interface Pokemons {
  name: string;
  url: string;
  image: string;
}

const pokemons: Pokemons[] = [
  {
    name: "bulbasaur",
    url: "https://pokeapi.co/api/v2/pokemon/1/",
    image: require("./pokemonsPng/001.png")
  },
  {
    name: "ivysaur",
    url: "https://pokeapi.co/api/v2/pokemon/2/",
    image: require("./pokemonsPng/002.png")
  },
  {
    name: "venusaur",
    url: "https://pokeapi.co/api/v2/pokemon/3/",
    image: require("./pokemonsPng/003.png")
  },
  {
    name: "charmander",
    url: "https://pokeapi.co/api/v2/pokemon/4/",
    image: require("./pokemonsPng/004.png")
  },
  {
    name: "charmeleon",
    url: "https://pokeapi.co/api/v2/pokemon/5/",
    image: require("./pokemonsPng/005.png")
  },
  {
    name: "charizard",
    url: "https://pokeapi.co/api/v2/pokemon/6/",
    image: require("./pokemonsPng/006.png")
  },
  {
    name: "squirtle",
    url: "https://pokeapi.co/api/v2/pokemon/7/",
    image: require("./pokemonsPng/007.png")
  },
  {
    name: "wartortle",
    url: "https://pokeapi.co/api/v2/pokemon/8/",
    image: require("./pokemonsPng/008.png")
  },
  {
    name: "blastoise",
    url: "https://pokeapi.co/api/v2/pokemon/9/",
    image: require("./pokemonsPng/009.png")
  },
  {
    name: "caterpie",
    url: "https://pokeapi.co/api/v2/pokemon/10/",
    image: require("./pokemonsPng/010.png")
  },
  {
    name: "metapod",
    url: "https://pokeapi.co/api/v2/pokemon/11/",
    image: require("./pokemonsPng/011.png")
  },
  {
    name: "butterfree",
    url: "https://pokeapi.co/api/v2/pokemon/12/",
    image: require("./pokemonsPng/012.png")
  },
  {
    name: "weedle",
    url: "https://pokeapi.co/api/v2/pokemon/13/",
    image: require("./pokemonsPng/013.png")
  },
  {
    name: "kakuna",
    url: "https://pokeapi.co/api/v2/pokemon/14/",
    image: require("./pokemonsPng/014.png")
  },
  {
    name: "beedrill",
    url: "https://pokeapi.co/api/v2/pokemon/15/",
    image: require("./pokemonsPng/015.png")
  },
  {
    name: "pidgey",
    url: "https://pokeapi.co/api/v2/pokemon/16/",
    image: require("./pokemonsPng/016.png")
  },
  {
    name: "pidgeotto",
    url: "https://pokeapi.co/api/v2/pokemon/17/",
    image: require("./pokemonsPng/017.png")
  },
  {
    name: "pidgeot",
    url: "https://pokeapi.co/api/v2/pokemon/18/",
    image: require("./pokemonsPng/018.png")
  },
  {
    name: "rattata",
    url: "https://pokeapi.co/api/v2/pokemon/19/",
    image: require("./pokemonsPng/019.png")
  },
  {
    name: "raticate",
    url: "https://pokeapi.co/api/v2/pokemon/20/",
    image: require("./pokemonsPng/020.png")
  },
  {
    name: "spearow",
    url: "https://pokeapi.co/api/v2/pokemon/21/",
    image: require("./pokemonsPng/021.png")
  },
  {
    name: "fearow",
    url: "https://pokeapi.co/api/v2/pokemon/22/",
    image: require("./pokemonsPng/022.png")
  },
  {
    name: "ekans",
    url: "https://pokeapi.co/api/v2/pokemon/23/",
    image: require("./pokemonsPng/023.png")
  },
  {
    name: "arbok",
    url: "https://pokeapi.co/api/v2/pokemon/24/",
    image: require("./pokemonsPng/024.png")
  },
  {
    name: "pikachu",
    url: "https://pokeapi.co/api/v2/pokemon/25/",
    image: require("./pokemonsPng/025.png")
  },
  {
    name: "raichu",
    url: "https://pokeapi.co/api/v2/pokemon/26/",
    image: require("./pokemonsPng/026.png")
  },
  {
    name: "sandshrew",
    url: "https://pokeapi.co/api/v2/pokemon/27/",
    image: require("./pokemonsPng/027.png")
  },
  {
    name: "sandslash",
    url: "https://pokeapi.co/api/v2/pokemon/28/",
    image: require("./pokemonsPng/028.png")
  },
  {
    name: "nidoran-f",
    url: "https://pokeapi.co/api/v2/pokemon/29/",
    image: require("./pokemonsPng/029.png")
  },
  {
    name: "nidorina",
    url: "https://pokeapi.co/api/v2/pokemon/30/",
    image: require("./pokemonsPng/030.png")
  },
  {
    name: "nidoqueen",
    url: "https://pokeapi.co/api/v2/pokemon/31/",
    image: require("./pokemonsPng/031.png")
  },
  {
    name: "nidoran-m",
    url: "https://pokeapi.co/api/v2/pokemon/32/",
    image: require("./pokemonsPng/032.png")
  },
  {
    name: "nidorino",
    url: "https://pokeapi.co/api/v2/pokemon/33/",
    image: require("./pokemonsPng/033.png")
  },
  {
    name: "nidoking",
    url: "https://pokeapi.co/api/v2/pokemon/34/",
    image: require("./pokemonsPng/034.png")
  },
  {
    name: "clefairy",
    url: "https://pokeapi.co/api/v2/pokemon/35/",
    image: require("./pokemonsPng/035.png")
  },
  {
    name: "clefable",
    url: "https://pokeapi.co/api/v2/pokemon/36/",
    image: require("./pokemonsPng/036.png")
  },
  {
    name: "vulpix",
    url: "https://pokeapi.co/api/v2/pokemon/37/",
    image: require("./pokemonsPng/037.png")
  },
  {
    name: "ninetales",
    url: "https://pokeapi.co/api/v2/pokemon/38/",
    image: require("./pokemonsPng/038.png")
  },
  {
    name: "jigglypuff",
    url: "https://pokeapi.co/api/v2/pokemon/39/",
    image: require("./pokemonsPng/039.png")
  },
  {
    name: "wigglytuff",
    url: "https://pokeapi.co/api/v2/pokemon/40/",
    image: require("./pokemonsPng/040.png")
  },
  {
    name: "zubat",
    url: "https://pokeapi.co/api/v2/pokemon/41/",
    image: require("./pokemonsPng/041.png")
  },
  {
    name: "golbat",
    url: "https://pokeapi.co/api/v2/pokemon/42/",
    image: require("./pokemonsPng/042.png")
  },
  {
    name: "oddish",
    url: "https://pokeapi.co/api/v2/pokemon/43/",
    image: require("./pokemonsPng/043.png")
  },
  {
    name: "gloom",
    url: "https://pokeapi.co/api/v2/pokemon/44/",
    image: require("./pokemonsPng/044.png")
  },
  {
    name: "vileplume",
    url: "https://pokeapi.co/api/v2/pokemon/45/",
    image: require("./pokemonsPng/045.png")
  },
  {
    name: "paras",
    url: "https://pokeapi.co/api/v2/pokemon/46/",
    image: require("./pokemonsPng/046.png")
  },
  {
    name: "parasect",
    url: "https://pokeapi.co/api/v2/pokemon/47/",
    image: require("./pokemonsPng/047.png")
  },
  {
    name: "venonat",
    url: "https://pokeapi.co/api/v2/pokemon/48/",
    image: require("./pokemonsPng/048.png")
  },
  {
    name: "venomoth",
    url: "https://pokeapi.co/api/v2/pokemon/49/",
    image: require("./pokemonsPng/049.png")
  },
  {
    name: "diglett",
    url: "https://pokeapi.co/api/v2/pokemon/50/",
    image: require("./pokemonsPng/050.png")
  },
  {
    name: "dugtrio",
    url: "https://pokeapi.co/api/v2/pokemon/51/",
    image: require("./pokemonsPng/051.png")
  },
  {
    name: "meowth",
    url: "https://pokeapi.co/api/v2/pokemon/52/",
    image: require("./pokemonsPng/052.png")
  },
  {
    name: "persian",
    url: "https://pokeapi.co/api/v2/pokemon/53/",
    image: require("./pokemonsPng/053.png")
  },
  {
    name: "psyduck",
    url: "https://pokeapi.co/api/v2/pokemon/54/",
    image: require("./pokemonsPng/054.png")
  },
  {
    name: "golduck",
    url: "https://pokeapi.co/api/v2/pokemon/55/",
    image: require("./pokemonsPng/055.png")
  },
  {
    name: "mankey",
    url: "https://pokeapi.co/api/v2/pokemon/56/",
    image: require("./pokemonsPng/056.png")
  },
  {
    name: "primeape",
    url: "https://pokeapi.co/api/v2/pokemon/57/",
    image: require("./pokemonsPng/057.png")
  },
  {
    name: "growlithe",
    url: "https://pokeapi.co/api/v2/pokemon/58/",
    image: require("./pokemonsPng/058.png")
  },
  {
    name: "arcanine",
    url: "https://pokeapi.co/api/v2/pokemon/59/",
    image: require("./pokemonsPng/059.png")
  },
  {
    name: "poliwag",
    url: "https://pokeapi.co/api/v2/pokemon/60/",
    image: require("./pokemonsPng/060.png")
  },
  {
    name: "poliwhirl",
    url: "https://pokeapi.co/api/v2/pokemon/61/",
    image: require("./pokemonsPng/061.png")
  },
  {
    name: "poliwrath",
    url: "https://pokeapi.co/api/v2/pokemon/62/",
    image: require("./pokemonsPng/062.png")
  },
  {
    name: "abra",
    url: "https://pokeapi.co/api/v2/pokemon/63/",
    image: require("./pokemonsPng/063.png")
  },
  {
    name: "kadabra",
    url: "https://pokeapi.co/api/v2/pokemon/64/",
    image: require("./pokemonsPng/064.png")
  },
  {
    name: "alakazam",
    url: "https://pokeapi.co/api/v2/pokemon/65/",
    image: require("./pokemonsPng/065.png")
  },
  {
    name: "machop",
    url: "https://pokeapi.co/api/v2/pokemon/66/",
    image: require("./pokemonsPng/066.png")
  },
  {
    name: "machoke",
    url: "https://pokeapi.co/api/v2/pokemon/67/",
    image: require("./pokemonsPng/067.png")
  },
  {
    name: "machamp",
    url: "https://pokeapi.co/api/v2/pokemon/68/",
    image: require("./pokemonsPng/068.png")
  },
  {
    name: "bellsprout",
    url: "https://pokeapi.co/api/v2/pokemon/69/",
    image: require("./pokemonsPng/069.png")
  },
  {
    name: "weepinbell",
    url: "https://pokeapi.co/api/v2/pokemon/70/",
    image: require("./pokemonsPng/070.png")
  },
  {
    name: "victreebel",
    url: "https://pokeapi.co/api/v2/pokemon/71/",
    image: require("./pokemonsPng/071.png")
  },
  {
    name: "tentacool",
    url: "https://pokeapi.co/api/v2/pokemon/72/",
    image: require("./pokemonsPng/072.png")
  },
  {
    name: "tentacruel",
    url: "https://pokeapi.co/api/v2/pokemon/73/",
    image: require("./pokemonsPng/073.png")
  },
  {
    name: "geodude",
    url: "https://pokeapi.co/api/v2/pokemon/74/",
    image: require("./pokemonsPng/074.png")
  },
  {
    name: "graveler",
    url: "https://pokeapi.co/api/v2/pokemon/75/",
    image: require("./pokemonsPng/075.png")
  },
  {
    name: "golem",
    url: "https://pokeapi.co/api/v2/pokemon/76/",
    image: require("./pokemonsPng/076.png")
  },
  {
    name: "ponyta",
    url: "https://pokeapi.co/api/v2/pokemon/77/",
    image: require("./pokemonsPng/077.png")
  },
  {
    name: "rapidash",
    url: "https://pokeapi.co/api/v2/pokemon/78/",
    image: require("./pokemonsPng/078.png")
  },
  {
    name: "slowpoke",
    url: "https://pokeapi.co/api/v2/pokemon/79/",
    image: require("./pokemonsPng/079.png")
  },
  {
    name: "slowbro",
    url: "https://pokeapi.co/api/v2/pokemon/80/",
    image: require("./pokemonsPng/080.png")
  },
  {
    name: "magnemite",
    url: "https://pokeapi.co/api/v2/pokemon/81/",
    image: require("./pokemonsPng/081.png")
  },
  {
    name: "magneton",
    url: "https://pokeapi.co/api/v2/pokemon/82/",
    image: require("./pokemonsPng/082.png")
  },
  {
    name: "farfetchd",
    url: "https://pokeapi.co/api/v2/pokemon/83/",
    image: require("./pokemonsPng/083.png")
  },
  {
    name: "doduo",
    url: "https://pokeapi.co/api/v2/pokemon/84/",
    image: require("./pokemonsPng/084.png")
  },
  {
    name: "dodrio",
    url: "https://pokeapi.co/api/v2/pokemon/85/",
    image: require("./pokemonsPng/085.png")
  },
  {
    name: "seel",
    url: "https://pokeapi.co/api/v2/pokemon/86/",
    image: require("./pokemonsPng/086.png")
  },
  {
    name: "dewgong",
    url: "https://pokeapi.co/api/v2/pokemon/87/",
    image: require("./pokemonsPng/087.png")
  },
  {
    name: "grimer",
    url: "https://pokeapi.co/api/v2/pokemon/88/",
    image: require("./pokemonsPng/088.png")
  },
  {
    name: "muk",
    url: "https://pokeapi.co/api/v2/pokemon/89/",
    image: require("./pokemonsPng/089.png")
  },
  {
    name: "shellder",
    url: "https://pokeapi.co/api/v2/pokemon/90/",
    image: require("./pokemonsPng/090.png")
  },
  {
    name: "cloyster",
    url: "https://pokeapi.co/api/v2/pokemon/91/",
    image: require("./pokemonsPng/091.png")
  },
  {
    name: "gastly",
    url: "https://pokeapi.co/api/v2/pokemon/92/",
    image: require("./pokemonsPng/092.png")
  },
  {
    name: "haunter",
    url: "https://pokeapi.co/api/v2/pokemon/93/",
    image: require("./pokemonsPng/093.png")
  },
  {
    name: "gengar",
    url: "https://pokeapi.co/api/v2/pokemon/94/",
    image: require("./pokemonsPng/094.png")
  },
  {
    name: "onix",
    url: "https://pokeapi.co/api/v2/pokemon/95/",
    image: require("./pokemonsPng/095.png")
  },
  {
    name: "drowzee",
    url: "https://pokeapi.co/api/v2/pokemon/96/",
    image: require("./pokemonsPng/096.png")
  },
  {
    name: "hypno",
    url: "https://pokeapi.co/api/v2/pokemon/97/",
    image: require("./pokemonsPng/097.png")
  },
  {
    name: "krabby",
    url: "https://pokeapi.co/api/v2/pokemon/98/",
    image: require("./pokemonsPng/098.png")
  },
  {
    name: "kingler",
    url: "https://pokeapi.co/api/v2/pokemon/99/",
    image: require("./pokemonsPng/099.png")
  },
  {
    name: "voltorb",
    url: "https://pokeapi.co/api/v2/pokemon/100/",
    image: require("./pokemonsPng/100.png")
  },
  {
    name: "electrode",
    url: "https://pokeapi.co/api/v2/pokemon/101/",
    image: require("./pokemonsPng/101.png")
  },
  {
    name: "exeggcute",
    url: "https://pokeapi.co/api/v2/pokemon/102/",
    image: require("./pokemonsPng/102.png")
  },
  {
    name: "exeggutor",
    url: "https://pokeapi.co/api/v2/pokemon/103/",
    image: require("./pokemonsPng/103.png")
  },
  {
    name: "cubone",
    url: "https://pokeapi.co/api/v2/pokemon/104/",
    image: require("./pokemonsPng/104.png")
  },
  {
    name: "marowak",
    url: "https://pokeapi.co/api/v2/pokemon/105/",
    image: require("./pokemonsPng/105.png")
  },
  {
    name: "hitmonlee",
    url: "https://pokeapi.co/api/v2/pokemon/106/",
    image: require("./pokemonsPng/106.png")
  },
  {
    name: "hitmonchan",
    url: "https://pokeapi.co/api/v2/pokemon/107/",
    image: require("./pokemonsPng/107.png")
  },
  {
    name: "lickitung",
    url: "https://pokeapi.co/api/v2/pokemon/108/",
    image: require("./pokemonsPng/108.png")
  },
  {
    name: "koffing",
    url: "https://pokeapi.co/api/v2/pokemon/109/",
    image: require("./pokemonsPng/109.png")
  },
  {
    name: "weezing",
    url: "https://pokeapi.co/api/v2/pokemon/110/",
    image: require("./pokemonsPng/110.png")
  },
  {
    name: "rhyhorn",
    url: "https://pokeapi.co/api/v2/pokemon/111/",
    image: require("./pokemonsPng/111.png")
  },
  {
    name: "rhydon",
    url: "https://pokeapi.co/api/v2/pokemon/112/",
    image: require("./pokemonsPng/112.png")
  },
  {
    name: "chansey",
    url: "https://pokeapi.co/api/v2/pokemon/113/",
    image: require("./pokemonsPng/113.png")
  },
  {
    name: "tangela",
    url: "https://pokeapi.co/api/v2/pokemon/114/",
    image: require("./pokemonsPng/114.png")
  },
  {
    name: "kangaskhan",
    url: "https://pokeapi.co/api/v2/pokemon/115/",
    image: require("./pokemonsPng/115.png")
  },
  {
    name: "horsea",
    url: "https://pokeapi.co/api/v2/pokemon/116/",
    image: require("./pokemonsPng/116.png")
  },
  {
    name: "seadra",
    url: "https://pokeapi.co/api/v2/pokemon/117/",
    image: require("./pokemonsPng/117.png")
  },
  {
    name: "goldeen",
    url: "https://pokeapi.co/api/v2/pokemon/118/",
    image: require("./pokemonsPng/118.png")
  },
  {
    name: "seaking",
    url: "https://pokeapi.co/api/v2/pokemon/119/",
    image: require("./pokemonsPng/119.png")
  },
  {
    name: "staryu",
    url: "https://pokeapi.co/api/v2/pokemon/120/",
    image: require("./pokemonsPng/120.png")
  },
  {
    name: "starmie",
    url: "https://pokeapi.co/api/v2/pokemon/121/",
    image: require("./pokemonsPng/121.png")
  },
  {
    name: "mr-mime",
    url: "https://pokeapi.co/api/v2/pokemon/122/",
    image: require("./pokemonsPng/122.png")
  },
  {
    name: "scyther",
    url: "https://pokeapi.co/api/v2/pokemon/123/",
    image: require("./pokemonsPng/123.png")
  },
  {
    name: "jynx",
    url: "https://pokeapi.co/api/v2/pokemon/124/",
    image: require("./pokemonsPng/124.png")
  },
  {
    name: "electabuzz",
    url: "https://pokeapi.co/api/v2/pokemon/125/",
    image: require("./pokemonsPng/125.png")
  },
  {
    name: "magmar",
    url: "https://pokeapi.co/api/v2/pokemon/126/",
    image: require("./pokemonsPng/126.png")
  },
  {
    name: "pinsir",
    url: "https://pokeapi.co/api/v2/pokemon/127/",
    image: require("./pokemonsPng/127.png")
  },
  {
    name: "tauros",
    url: "https://pokeapi.co/api/v2/pokemon/128/",
    image: require("./pokemonsPng/128.png")
  },
  {
    name: "magikarp",
    url: "https://pokeapi.co/api/v2/pokemon/129/",
    image: require("./pokemonsPng/129.png")
  },
  {
    name: "gyarados",
    url: "https://pokeapi.co/api/v2/pokemon/130/",
    image: require("./pokemonsPng/130.png")
  },
  {
    name: "lapras",
    url: "https://pokeapi.co/api/v2/pokemon/131/",
    image: require("./pokemonsPng/131.png")
  },
  {
    name: "ditto",
    url: "https://pokeapi.co/api/v2/pokemon/132/",
    image: require("./pokemonsPng/132.png")
  },
  {
    name: "eevee",
    url: "https://pokeapi.co/api/v2/pokemon/133/",
    image: require("./pokemonsPng/133.png")
  },
  {
    name: "vaporeon",
    url: "https://pokeapi.co/api/v2/pokemon/134/",
    image: require("./pokemonsPng/134.png")
  },
  {
    name: "jolteon",
    url: "https://pokeapi.co/api/v2/pokemon/135/",
    image: require("./pokemonsPng/135.png")
  },
  {
    name: "flareon",
    url: "https://pokeapi.co/api/v2/pokemon/136/",
    image: require("./pokemonsPng/136.png")
  },
  {
    name: "porygon",
    url: "https://pokeapi.co/api/v2/pokemon/137/",
    image: require("./pokemonsPng/137.png")
  },
  {
    name: "omanyte",
    url: "https://pokeapi.co/api/v2/pokemon/138/",
    image: require("./pokemonsPng/138.png")
  },
  {
    name: "omastar",
    url: "https://pokeapi.co/api/v2/pokemon/139/",
    image: require("./pokemonsPng/139.png")
  },
  {
    name: "kabuto",
    url: "https://pokeapi.co/api/v2/pokemon/140/",
    image: require("./pokemonsPng/140.png")
  },
  {
    name: "kabutops",
    url: "https://pokeapi.co/api/v2/pokemon/141/",
    image: require("./pokemonsPng/141.png")
  },
  {
    name: "aerodactyl",
    url: "https://pokeapi.co/api/v2/pokemon/142/",
    image: require("./pokemonsPng/142.png")
  },
  {
    name: "snorlax",
    url: "https://pokeapi.co/api/v2/pokemon/143/",
    image: require("./pokemonsPng/143.png")
  },
  {
    name: "articuno",
    url: "https://pokeapi.co/api/v2/pokemon/144/",
    image: require("./pokemonsPng/144.png")
  },
  {
    name: "zapdos",
    url: "https://pokeapi.co/api/v2/pokemon/145/",
    image: require("./pokemonsPng/145.png")
  },
  {
    name: "moltres",
    url: "https://pokeapi.co/api/v2/pokemon/146/",
    image: require("./pokemonsPng/146.png")
  },
  {
    name: "dratini",
    url: "https://pokeapi.co/api/v2/pokemon/147/",
    image: require("./pokemonsPng/147.png")
  },
  {
    name: "dragonair",
    url: "https://pokeapi.co/api/v2/pokemon/148/",
    image: require("./pokemonsPng/148.png")
  },
  {
    name: "dragonite",
    url: "https://pokeapi.co/api/v2/pokemon/149/",
    image: require("./pokemonsPng/149.png")
  },
  {
    name: "mewtwo",
    url: "https://pokeapi.co/api/v2/pokemon/150/",
    image: require("./pokemonsPng/150.png")
  },
  {
    name: "mew",
    url: "https://pokeapi.co/api/v2/pokemon/151/",
    image: require("./pokemonsPng/151.png")
  }
];

export default pokemons;
