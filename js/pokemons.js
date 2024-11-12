const pokemons = [
  {
    id: 1,
    name: "bulbasaur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1.ogg",
  },
  {
    id: 2,
    name: "ivysaur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/2.ogg",
  },
  {
    id: 3,
    name: "venusaur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/3.ogg",
  },
  {
    id: 4,
    name: "charmander",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/4.ogg",
  },
  {
    id: 5,
    name: "charmeleon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/5.ogg",
  },
  {
    id: 6,
    name: "charizard",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/6.ogg",
  },
  {
    id: 7,
    name: "squirtle",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/7.ogg",
  },
  {
    id: 8,
    name: "wartortle",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/8.ogg",
  },
  {
    id: 9,
    name: "blastoise",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/9.ogg",
  },
  {
    id: 10,
    name: "caterpie",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10.ogg",
  },
  {
    id: 11,
    name: "metapod",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/11.ogg",
  },
  {
    id: 12,
    name: "butterfree",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/12.ogg",
  },
  {
    id: 13,
    name: "weedle",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/13.ogg",
  },
  {
    id: 14,
    name: "kakuna",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/14.ogg",
  },
  {
    id: 15,
    name: "beedrill",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/15.ogg",
  },
  {
    id: 16,
    name: "pidgey",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/16.ogg",
  },
  {
    id: 17,
    name: "pidgeotto",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/17.ogg",
  },
  {
    id: 18,
    name: "pidgeot",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/18.ogg",
  },
  {
    id: 19,
    name: "rattata",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/19.ogg",
  },
  {
    id: 20,
    name: "raticate",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/20.ogg",
  },
  {
    id: 21,
    name: "spearow",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/21.ogg",
  },
  {
    id: 22,
    name: "fearow",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/22.ogg",
  },
  {
    id: 23,
    name: "ekans",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/23.ogg",
  },
  {
    id: 24,
    name: "arbok",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/24.ogg",
  },
  {
    id: 25,
    name: "pikachu",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/25.ogg",
  },
  {
    id: 26,
    name: "raichu",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/26.ogg",
  },
  {
    id: 27,
    name: "sandshrew",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/27.ogg",
  },
  {
    id: 28,
    name: "sandslash",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/28.ogg",
  },
  {
    id: 29,
    name: "nidoran-f",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/29.ogg",
  },
  {
    id: 30,
    name: "nidorina",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/30.ogg",
  },
  {
    id: 31,
    name: "nidoqueen",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/31.ogg",
  },
  {
    id: 32,
    name: "nidoran-m",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/32.ogg",
  },
  {
    id: 33,
    name: "nidorino",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/33.ogg",
  },
  {
    id: 34,
    name: "nidoking",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/34.ogg",
  },
  {
    id: 35,
    name: "clefairy",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/35.ogg",
  },
  {
    id: 36,
    name: "clefable",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/36.ogg",
  },
  {
    id: 37,
    name: "vulpix",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/37.ogg",
  },
  {
    id: 38,
    name: "ninetales",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/38.ogg",
  },
  {
    id: 39,
    name: "jigglypuff",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/39.ogg",
  },
  {
    id: 40,
    name: "wigglytuff",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/40.ogg",
  },
  {
    id: 41,
    name: "zubat",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/41.ogg",
  },
  {
    id: 42,
    name: "golbat",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/42.ogg",
  },
  {
    id: 43,
    name: "oddish",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/43.ogg",
  },
  {
    id: 44,
    name: "gloom",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/44.ogg",
  },
  {
    id: 45,
    name: "vileplume",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/45.ogg",
  },
  {
    id: 46,
    name: "paras",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/46.ogg",
  },
  {
    id: 47,
    name: "parasect",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/47.ogg",
  },
  {
    id: 48,
    name: "venonat",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/48.ogg",
  },
  {
    id: 49,
    name: "venomoth",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/49.ogg",
  },
  {
    id: 50,
    name: "diglett",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/50.ogg",
  },
  {
    id: 51,
    name: "dugtrio",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/51.ogg",
  },
  {
    id: 52,
    name: "meowth",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/52.ogg",
  },
  {
    id: 53,
    name: "persian",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/53.ogg",
  },
  {
    id: 54,
    name: "psyduck",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/54.ogg",
  },
  {
    id: 55,
    name: "golduck",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/55.ogg",
  },
  {
    id: 56,
    name: "mankey",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/56.ogg",
  },
  {
    id: 57,
    name: "primeape",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/57.ogg",
  },
  {
    id: 58,
    name: "growlithe",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/58.ogg",
  },
  {
    id: 59,
    name: "arcanine",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/59.ogg",
  },
  {
    id: 60,
    name: "poliwag",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/60.ogg",
  },
  {
    id: 61,
    name: "poliwhirl",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/61.ogg",
  },
  {
    id: 62,
    name: "poliwrath",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/62.ogg",
  },
  {
    id: 63,
    name: "abra",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/63.ogg",
  },
  {
    id: 64,
    name: "kadabra",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/64.ogg",
  },
  {
    id: 65,
    name: "alakazam",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/65.ogg",
  },
  {
    id: 66,
    name: "machop",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/66.ogg",
  },
  {
    id: 67,
    name: "machoke",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/67.ogg",
  },
  {
    id: 68,
    name: "machamp",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/68.ogg",
  },
  {
    id: 69,
    name: "bellsprout",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/69.ogg",
  },
  {
    id: 70,
    name: "weepinbell",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/70.ogg",
  },
  {
    id: 71,
    name: "victreebel",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/71.ogg",
  },
  {
    id: 72,
    name: "tentacool",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/72.ogg",
  },
  {
    id: 73,
    name: "tentacruel",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/73.ogg",
  },
  {
    id: 74,
    name: "geodude",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/74.ogg",
  },
  {
    id: 75,
    name: "graveler",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/75.ogg",
  },
  {
    id: 76,
    name: "golem",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/76.ogg",
  },
  {
    id: 77,
    name: "ponyta",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/77.ogg",
  },
  {
    id: 78,
    name: "rapidash",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/78.ogg",
  },
  {
    id: 79,
    name: "slowpoke",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/79.ogg",
  },
  {
    id: 80,
    name: "slowbro",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/80.ogg",
  },
  {
    id: 81,
    name: "magnemite",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/81.ogg",
  },
  {
    id: 82,
    name: "magneton",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/82.ogg",
  },
  {
    id: 83,
    name: "farfetchd",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/83.ogg",
  },
  {
    id: 84,
    name: "doduo",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/84.ogg",
  },
  {
    id: 85,
    name: "dodrio",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/85.ogg",
  },
  {
    id: 86,
    name: "seel",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/86.ogg",
  },
  {
    id: 87,
    name: "dewgong",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/87.ogg",
  },
  {
    id: 88,
    name: "grimer",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/88.ogg",
  },
  {
    id: 89,
    name: "muk",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/89.ogg",
  },
  {
    id: 90,
    name: "shellder",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/90.ogg",
  },
  {
    id: 91,
    name: "cloyster",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/91.ogg",
  },
  {
    id: 92,
    name: "gastly",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/92.ogg",
  },
  {
    id: 93,
    name: "haunter",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/93.ogg",
  },
  {
    id: 94,
    name: "gengar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/94.ogg",
  },
  {
    id: 95,
    name: "onix",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/95.ogg",
  },
  {
    id: 96,
    name: "drowzee",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/96.ogg",
  },
  {
    id: 97,
    name: "hypno",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/97.ogg",
  },
  {
    id: 98,
    name: "krabby",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/98.ogg",
  },
  {
    id: 99,
    name: "kingler",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/99.ogg",
  },
  {
    id: 100,
    name: "voltorb",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/100.ogg",
  },
  {
    id: 101,
    name: "electrode",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/101.ogg",
  },
  {
    id: 102,
    name: "exeggcute",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/102.ogg",
  },
  {
    id: 103,
    name: "exeggutor",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/103.ogg",
  },
  {
    id: 104,
    name: "cubone",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/104.ogg",
  },
  {
    id: 105,
    name: "marowak",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/105.ogg",
  },
  {
    id: 106,
    name: "hitmonlee",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/106.ogg",
  },
  {
    id: 107,
    name: "hitmonchan",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/107.ogg",
  },
  {
    id: 108,
    name: "lickitung",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/108.ogg",
  },
  {
    id: 109,
    name: "koffing",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/109.ogg",
  },
  {
    id: 110,
    name: "weezing",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/110.ogg",
  },
  {
    id: 111,
    name: "rhyhorn",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/111.ogg",
  },
  {
    id: 112,
    name: "rhydon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/112.ogg",
  },
  {
    id: 113,
    name: "chansey",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/113.ogg",
  },
  {
    id: 114,
    name: "tangela",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/114.ogg",
  },
  {
    id: 115,
    name: "kangaskhan",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/115.ogg",
  },
  {
    id: 116,
    name: "horsea",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/116.ogg",
  },
  {
    id: 117,
    name: "seadra",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/117.ogg",
  },
  {
    id: 118,
    name: "goldeen",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/118.ogg",
  },
  {
    id: 119,
    name: "seaking",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/119.ogg",
  },
  {
    id: 120,
    name: "staryu",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/120.ogg",
  },
  {
    id: 121,
    name: "starmie",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/121.ogg",
  },
  {
    id: 122,
    name: "mr-mime",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/122.ogg",
  },
  {
    id: 123,
    name: "scyther",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/123.ogg",
  },
  {
    id: 124,
    name: "jynx",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/124.ogg",
  },
  {
    id: 125,
    name: "electabuzz",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/125.ogg",
  },
  {
    id: 126,
    name: "magmar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/126.ogg",
  },
  {
    id: 127,
    name: "pinsir",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/127.ogg",
  },
  {
    id: 128,
    name: "tauros",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/128.ogg",
  },
  {
    id: 129,
    name: "magikarp",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/129.ogg",
  },
  {
    id: 130,
    name: "gyarados",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/130.ogg",
  },
  {
    id: 131,
    name: "lapras",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/131.ogg",
  },
  {
    id: 132,
    name: "ditto",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/132.ogg",
  },
  {
    id: 133,
    name: "eevee",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/133.ogg",
  },
  {
    id: 134,
    name: "vaporeon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/134.ogg",
  },
  {
    id: 135,
    name: "jolteon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/135.ogg",
  },
  {
    id: 136,
    name: "flareon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/136.ogg",
  },
  {
    id: 137,
    name: "porygon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/137.ogg",
  },
  {
    id: 138,
    name: "omanyte",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/138.ogg",
  },
  {
    id: 139,
    name: "omastar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/139.ogg",
  },
  {
    id: 140,
    name: "kabuto",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/140.ogg",
  },
  {
    id: 141,
    name: "kabutops",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/141.ogg",
  },
  {
    id: 142,
    name: "aerodactyl",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/142.ogg",
  },
  {
    id: 143,
    name: "snorlax",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/143.ogg",
  },
  {
    id: 144,
    name: "articuno",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/144.ogg",
  },
  {
    id: 145,
    name: "zapdos",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/145.ogg",
  },
  {
    id: 146,
    name: "moltres",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/146.ogg",
  },
  {
    id: 147,
    name: "dratini",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/147.ogg",
  },
  {
    id: 148,
    name: "dragonair",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/148.ogg",
  },
  {
    id: 149,
    name: "dragonite",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/149.ogg",
  },
  {
    id: 150,
    name: "mewtwo",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/150.ogg",
  },
  {
    id: 151,
    name: "mew",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
    cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/151.ogg",
  },
];
