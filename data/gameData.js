const gameData = {
  characters: [
    { id: 1, name: "lila", url: "/resources/characters/lila.png" },
    { id: 2, name: "kassie", url: "/resources/characters/kassie.png" },
    { id: 3, name: "kairos", url: "/resources/characters/kairos.png" },
    { id: 4, name: "ryden", url: "/resources/characters/ryden.png" },
    { id: 5, name: "ignis", url: "/resources/characters/ignis.png" },
    { id: 6, name: "suzy", url: "/resources/characters/suzy.png" },
    { id: 7, name: "sonia", url: "/resources/characters/sonia.png" },
    { id: 8, name: "orion", url: "/resources/characters/orion.png" },
    { id: 9, name: "santino", url: "/resources/characters/santino.png" },
    { id: 10, name: "luna", url: "/resources/characters/luna.png" },
    { id: 12, name: "tatsuya", url: "/resources/characters/tatsuya.png" },
    { id: 13, name: "a-patroa", url: "/resources/characters/A-patroa.png" },
    { id: 14, name: "iris", url: "/resources/characters/iris.png" },
    { id: 15, name: "j.biebs", url: "/resources/characters/jbiebs.png" },
    { id: 16, name: "homer", url: "/resources/characters/homer.png" },
    { id: 17, name: "kenta", url: "/resources/characters/kenta.png" },
    { id: 18, name: "nairi", url: "/resources/characters/nairi.png" },
    { id: 19, name: "otho", url: "/resources/characters/otho.png" },
    { id: 20, name: "leon", url: "/resources/characters/leon.png" },
    { id: 21, name: "thiva", url: "/resources/characters/thiva.png" },
    { id: 22, name: "dimitri", url: "/resources/characters/dimitri.png" },
    { id: 23, name: "d-bee", url: "/resources/characters/d-bee.png" },
    { id: 24, name: "maro", url: "/resources/characters/maro.png" },
    { id: 25, name: "skyler", url: "/resources/characters/skyler.png" },
    { id: 26, name: "xayne", url: "/resources/characters/xayne.png" },
    { id: 27, name: "shirou", url: "/resources/characters/shirou.png" },
    { id: 28, name: "chrono", url: "/resources/characters/chrono.png" },
    { id: 29, name: "dasha", url: "/resources/characters/dasha.png" },
    { id: 30, name: "k", url: "/resources/characters/k.png" },
    { id: 31, name: "luqueta", url: "/resources/characters/luqueta.png" },
    { id: 32, name: "kelly", url: "/resources/characters/kelly.png" },
    { id: 33, name: "hayato", url: "/resources/characters/hayato.png" },
    { id: 34, name: "moco", url: "/resources/characters/moco.png" },
    { id: 35, name: "steffie", url: "/resources/characters/steffie.png" },
    { id: 36, name: "misha", url: "/resources/characters/misha.png" },
    { id: 37, name: "maxim", url: "/resources/characters/maxim.png" },
    { id: 38, name: "andrew", url: "/resources/characters/andrew.png" },
    { id: 39, name: "caroline", url: "/resources/characters/caroline.png" },
    { id: 40, name: "laura", url: "/resources/characters/laura.png" },
    { id: 41, name: "rafael", url: "/resources/characters/rafael.png" },
    { id: 42, name: "alok", url: "/resources/characters/alok.png" },
    { id: 43, name: "jota", url: "/resources/characters/jota.png" },
    { id: 44, name: "clu", url: "/resources/characters/clu.png" },
    { id: 45, name: "wolfrahh", url: "/resources/characters/wolfrahh.png" },
    { id: 46, name: "alvaro", url: "/resources/characters/alvaro.png" },
    { id: 47, name: "antonio", url: "/resources/characters/antonio.png" },
    { id: 48, name: "paloma", url: "/resources/characters/paloma.png" },
    { id: 49, name: "miguel", url: "/resources/characters/miguel.png" },
    { id: 50, name: "nikita", url: "/resources/characters/nikita.png" },
    { id: 51, name: "kapella", url: "/resources/characters/kapella.png" },
    { id: 52, name: "joseph", url: "/resources/characters/joseph.png" },
    { id: 53, name: "notora", url: "/resources/characters/notora.png" },
    { id: 54, name: "a124", url: "/resources/characters/a124.png" },
    { id: 55, name: "kla", url: "/resources/characters/kla.png" },
    { id: 56, name: "wukong", url: "/resources/characters/wukong.png" },
    { id: 57, name: "olivia", url: "/resources/characters/olivia.png" },
    { id: 58, name: "ford", url: "/resources/characters/ford.png" },
    { id: 59, name: "shani", url: "/resources/characters/shani.png" },
  ],

  weapons: [
    {
      id: 110,
      name: "launcher",
      url: "/resources/weapons-logos/launcher.png",
      subItems: [
        { id: 1, name: "RGS50", url: "/resources/weapons/launcher/RGS50.png" },
        { id: 2, name: "MGL140", url: "/resources/weapons/launcher/MGL140.png" },
        { id: 3, name: "M79", url: "/resources/weapons/launcher/M79.png" },

      ],
    },

    {
      id: 12,
      name: "machineGun",
      url: "/resources/weapons-logos/machineGun.png",
      subItems: [
        { id: 1, name: "GATLING", url: "/resources/weapons/machineGun/GATLING.png" },
        { id: 2, name: "M60", url: "/resources/weapons/machineGun/M60.png" },
        { id: 3, name: "M249", url: "/resources/weapons/machineGun/M249.png" },
        { id: 4, name: "KORD", url: "/resources/weapons/machineGun/KORD.png" },
      ],
    },



    {
      id: 13,
      name: "subMachineGun",
      url: "/resources/weapons-logos/subMachineGun.png",
      subItems: [
        { id: 1, name: "CG15", url: "/resources/weapons/subMachineGun/CG15.png" },
        { id: 2, name: "P90", url: "/resources/weapons/subMachineGun/P90.png" },
        { id: 3, name: "VECTOR", url: "/resources/weapons/subMachineGun/VECTOR.png" },
        { id: 4, name: "THOMPSON", url: "/resources/weapons/subMachineGun/THOMPSON.png" },
        { id: 5, name: "MP40", url: "/resources/weapons/subMachineGun/MP40.png" },
        { id: 6, name: "UMP", url: "/resources/weapons/subMachineGun/UMP.png" },
        { id: 7, name: "MP5", url: "/resources/weapons/subMachineGun/MP5.png" },
        { id: 8, name: "VSS", url: "/resources/weapons/subMachineGun/VSS.png" },
        { id: 9, name: "MAC10", url: "/resources/weapons/subMachineGun/MAC10.png" },
        { id: 10, name: "BIZON", url: "/resources/weapons/subMachineGun/BIZON.png" },
      ],
    },
    {
      id: 14,
      name: "melee",
      url: "/resources/weapons-logos/melee.png",
      subItems: [
        { id: 1, name: "BASEBALLPOLE", url: "/resources/weapons/melee/BASEBALLPOLE.png" },
        { id: 2, name: "FF KNIFE", url: "/resources/weapons/melee/FFKNIFE.png" },
        { id: 3, name: "KATANA", url: "/resources/weapons/melee/KATANA.png" },
        { id: 4, name: "MACHETE", url: "/resources/weapons/melee/MACHETE.png" },
        { id: 5, name: "SICKLE", url: "/resources/weapons/melee/SICKLE.png" },
        { id: 6, name: "PAN", url: "/resources/weapons/melee/PAN.png" },
      ],
    },
    {
      id: 15,
      name: "rifle",
      url: "/resources/weapons-logos/rifle.png",
      subItems: [

        { id: 16, name: "SHIELD GUN", url: "/resources/weapons/rifle/SHIELDGUN.png" },
        { id: 17, name: "TREATMENT LASER GUN", url: "/resources/weapons/rifle/TREATMENTLASERGUN.png" },
        { id: 18, name: "AN94", url: "/resources/weapons/rifle/AN94.png" },
        { id: 19, name: "XM8", url: "/resources/weapons/rifle/XM8.png" },
        { id: 20, name: "FAMAS", url: "/resources/weapons/rifle/FAMAS.png" },
        { id: 21, name: "M4A1", url: "/resources/weapons/rifle/M4A1.png" },
        { id: 22, name: "AK47", url: "/resources/weapons/rifle/AK47.png" },
        { id: 23, name: "GROZA", url: "/resources/weapons/rifle/GROZA.png" },
        { id: 24, name: "M14", url: "/resources/weapons/rifle/M14.png" },
        { id: 25, name: "SCAR", url: "/resources/weapons/rifle/SCAR.png" },
        { id: 26, name: "PLASMA", url: "/resources/weapons/rifle/PLASMA.png" },
        { id: 27, name: "AUG", url: "/resources/weapons/rifle/AUG.png" },
        { id: 28, name: "PARAFAL", url: "/resources/weapons/rifle/PARAFAL.png" },
        { id: 29, name: "KINGFISHER", url: "/resources/weapons/rifle/KINGFISHAR.png" },
        { id: 30, name: "G36", url: "/resources/weapons/rifle/G36.png" },


      ],
    },
    {
      id: 16,
      name: "pistol",
      url: "/resources/weapons-logos/pistol.png",
      subItems: [
        { id: 1, name: "USP", url: "/resources/weapons/pistol/USP.png" },
        { id: 2, name: "G18", url: "/resources/weapons/pistol/G18.png" },
        { id: 3, name: "DESERT EAGLE", url: "/resources/weapons/pistol/DESERTEAGLE.png" },
        { id: 4, name: "HAND-CANNON", url: "/resources/weapons/pistol/HANDCANNON.png" },
        { id: 5, name: "FGL-24", url: "/resources/weapons/pistol/FGL-24.png" },
        { id: 6, name: "HEALING PISTOL", url: "/resources/weapons/pistol/HEALINGPISTOL.png" },
        { id: 7, name: "M500", url: "/resources/weapons/pistol/M500.png" },
        { id: 8, name: "M1873", url: "/resources/weapons/pistol/M1873.png" },
        { id: 9, name: "M1917", url: "/resources/weapons/pistol/M1917.png" },
        { id: 10, name: "USP-2", url: "/resources/weapons/pistol/USP-2.png" },
        { id: 11, name: "UZI", url: "/resources/weapons/pistol/UZI.png" },
        { id: 12, name: "FLAMETHROWER", url: "/resources/weapons/pistol/FLAMETHROWER.png" },
      ],
    },
    {
      id: 17,
      name: "shotGun",
      url: "/resources/weapons-logos/shotGun.png",
      subItems: [
        { id: 1, name: "TROGON", url: "/resources/weapons/shotGun/TROGON.png" },
        { id: 2, name: "SPAS12", url: "/resources/weapons/shotGun/SPAS12.png" },
        { id: 3, name: "M1014", url: "/resources/weapons/shotGun/M1014.png" },
        { id: 4, name: "M1887", url: "/resources/weapons/shotGun/M1887.png" },
        { id: 5, name: "MAG-7", url: "/resources/weapons/shotGun/MAG-7.png" },
        { id: 6, name: "CHARGE BUSTER", url: "/resources/weapons/shotGun/CHARGEBUSTER.png" },
      ],
    },
    {
      id: 18,
      name: "bow",
      url: "/resources/weapons-logos/bow.png",
      subItems: [
        { id: 1, name: "CROSSBOW", url: "/resources/weapons/bow/CROSSBOW.png" },

      ],
    },
    {
      id: 19,
      name: "sniper",
      url: "/resources/weapons-logos/sniper.png",
      subItems: [
        { id: 1, name: "VSK94", url: "/resources/weapons/sniper/VSK94.png" },
        { id: 2, name: "KAR98K", url: "/resources/weapons/sniper/KAR98K.png" },
        { id: 3, name: "AWM", url: "/resources/weapons/sniper/AWM.png" },
        { id: 4, name: "M82B", url: "/resources/weapons/sniper/M82B.png" },
        { id: 5, name: "HEALING SNIPER", url: "/resources/weapons/sniper/HEALINGSNIPER.png" },
        { id: 6, name: "M24", url: "/resources/weapons/sniper/M24.png" },
      ],
    },
    {
      id: 20,
      name: "projectiles",
      url: "/resources/weapons-logos/projectiles.png",
      subItems: [
        { id: 1, name: "GLOO MELTER", url: "/resources/weapons/projectiles/GLOOMELTER.png" },
        { id: 2, name: "GRENADE", url: "/resources/weapons/projectiles/GRENADE.png" },
        { id: 3, name: "SMOKE GRENADE", url: "/resources/weapons/projectiles/SMOKEGRENADE.png" },
        { id: 4, name: "GLOO WALL", url: "/resources/weapons/projectiles/GLOOWALL.png" },
        { id: 5, name: "FLASH FREEZE", url: "/resources/weapons/projectiles/FLASHFREEZE.png" },
      ],
    },
    {
      id: 21,
      name: "marksmanRifle",
      url: "/resources/weapons-logos/marksmanRifle.png",
      subItems: [
        { id: 1, name: "SVD", url: "/resources/weapons/marksmanRifle/SVD.png" },
        { id: 2, name: "SKS", url: "/resources/weapons/marksmanRifle/SKS.png" },
        { id: 3, name: "WOODPECKER", url: "/resources/weapons/marksmanRifle/WOODPECKER.png" },
        { id: 4, name: "AC80", url: "/resources/weapons/marksmanRifle/AC80.png" },
      ],
    },
  ],

  pets: [
    { id: 22, name: "KACTUS", url: "/resources/pets/KACTUS.png" },
    { id: 23, name: "FANG", url: "/resources/pets/FANG.png" },
    { id: 24, name: "HOOT", url: "/resources/pets/HOOT.png" },
    { id: 25, name: "FINN", url: "/resources/pets/FINN.png" },
    { id: 26, name: "ZASIL", url: "/resources/pets/ZASIL.png" },
    { id: 27, name: "ARVON", url: "/resources/pets/ARVON.png" },
    { id: 28, name: "FLASH", url: "/resources/pets/FLASH.png" },
    { id: 29, name: "YETI", url: "/resources/pets/YETI.png" },
    { id: 30, name: "AGENT HOP", url: "/resources/pets/agentHop.png" },
    { id: 31, name: "SENSEI TIG", url: "/resources/pets/senseiTig.png" },
    { id: 32, name: "DR. BEANIE", url: "/resources/pets/drBeanie.png" },
    { id: 33, name: "MOONY", url: "/resources/pets/MOONY.png" },
    { id: 34, name: "DREKI", url: "/resources/pets/DREKI.png" },
    { id: 35, name: "BEASTON", url: "/resources/pets/BEASTON.png" },
    { id: 36, name: "ROCKIE", url: "/resources/pets/ROCKIE.png" },
    { id: 37, name: "MR. WAGGOR", url: "/resources/pets/mrWaggor.png" },
    { id: 38, name: "FALCO", url: "/resources/pets/FALCO.png" },
    { id: 39, name: "OTTERO", url: "/resources/pets/OTTERO.png" },
    { id: 40, name: "ROBO", url: "/resources/pets/ROBO.png" },
    { id: 41, name: "SPIRIT FOX", url: "/resources/pets/spiritFox.png" },
    { id: 42, name: "SHIBA", url: "/resources/pets/SHIBA.png" },
    { id: 43, name: "DETECTIVE PANDA", url: "/resources/pets/detectivePanda.png" },
    { id: 44, name: "NIGHT PANTHER", url: "/resources/pets/nightPanther.png" },
    { id: 45, name: "PUG", url: "/resources/pets/PUG.png" },
  ],

  emotes: [
    { id: 46, name: "baby shark", url: "/resources/emotes/BABYSHARK.png" },
    { id: 47, name: "battle dance", url: "/resources/emotes/BATTLEDANCE.png" },
    { id: 48, name: "hello", url: "/resources/emotes/HELLO.png" },
    { id: 49, name: "laugh", url: "/resources/emotes/LAUGH.png" },
    { id: 50, name: "provoke", url: "/resources/emotes/PROVOKE.png" },
    { id: 51, name: "selfie", url: "/resources/emotes/SELFIE.png" },
  ],
  coins: [
    { id: 1, name: "800", url: "/resources/buttons/diamondCoin/COINS/coin-1.png" },
    { id: 2, name: "1200", url: "/resources/buttons/diamondCoin/COINS/coin-2.png" },
    { id: 3, name: "1500", url: "/resources/buttons/diamondCoin/COINS/coin-3.png" },
    { id: 4, name: "2000", url: "/resources/buttons/diamondCoin/COINS/coin-4.png" },
    { id: 5, name: "2500", url: "/resources/buttons/diamondCoin/COINS/coin-5.png" },
    { id: 6, name: "5000+", url: "/resources/buttons/diamondCoin/COINS/coin-6.png" },
  ],

  elite: [
    {
      name: "Exclusive Skins",
      description: "Unique character outfits"
    },
    {
      name: "Accessories",
      description: "Backpacks, hats, masks, and more"
    },
    {
      name: "Emotes",
      description: "Special dance moves and gestures"
    },
    {
      name: "Vehicle Skins",
      description: "Custom vehicles for in-game"
    },
    {
      name: "Pet Skins",
      description: "Stylish looks for pets"
    },
    {
      name: "Vouchers",
      description: "Free spins for Luck Royale."
    },
    {
      name: "Avatars and Banners",
      description: "Personalized profile decorations"
    },
    {
      name: "Tokens",
      description: "Used to redeem exclusive rewards"
    }
  ],
  booyah: [
    { id: 1, name: "Exclusive Outfits", description: "Special character costumes" },
    { id: 2, name: "Weapon Skins", description: "Custom designs for weapons" },
    { id: 3, name: "Vehicle Skins", description: "Unique styles for in-game vehicles" },
    { id: 4, name: "Emotes", description: "Special animations or dance" },
    { id: 5, name: "Backpack Skins", description: "Stylish designs for backpacks" },
    { id: 6, name: "Pet Skins", description: "Exclusive looks for pets" },
    { id: 7, name: "Profile Decorations", description: "Avatars, banners & backgrounds" },
    { id: 8, name: "BOOYAH Crates", description: "Mystery crates exclusive item" }
  ],
  rewards: [
    { id: 1, name: "Weapon Skins", description: "Custom designs for weapons" },
    { id: 2, name: "Vehicle Skins", description: "Unique styles for in-game vehicles" },
    { id: 3, name: "Emotes", description: "Special animations or dance" },
    { id: 4, name: "Backpack Skins", description: "Stylish designs for backpacks" },
    { id: 5, name: "Pet Skins", description: "Exclusive looks for pets" },
    { id: 6, name: "Outfits", description: "Special character costumes" }
  ],
  players: [
    { id: 1, name: "Pro Players", url: "/resources/characters/kairos.png" },
    { id: 2, name: "Casual Players", url: "/resources/characters/orion.png" },
    { id: 3, name: "Mix Players", url: "/resources/characters/luna.png" },
    
  ],
  level: [
    { id: 1, name: "0 - 25", },
    { id: 2, name: "26 - 40", },
    { id: 3, name: "41 - 50",  },
    { id: 4, name: "51 - 60", },
    { id: 5, name: "61 - 70 ", },
    { id: 6, name: " 70+ " ,  },
    
  ]
};

export default gameData;
