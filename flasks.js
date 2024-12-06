const flaskData = [
    {
        id: "eternal_life",
        name: "Eternal Life",
        duration: 4.0,
        chargeUsed: 15,
        chargeCapacity: 45,
        spriteImage: "assets/lifeflask11.png",
        basePosition: "0% 0%",
        liquidPosition: "100% 0%"
    },
    {
        id: "eternal_mana",
        name: "Eternal Mana",
        duration: 7.0,
        chargeUsed: 8,
        chargeCapacity: 42,
        spriteImage: "assets/manaflask11.png",
        basePosition: "0% 0%",
        liquidPosition: "100% 0%"
    },
    {
        id: "hallowed_hybrid",
        name: "Hallowed Hybrid",
        duration: 5.0,
        chargeUsed: 20,
        chargeCapacity: 40,
        spriteImage: "assets/hybridflask4.png",
        basePosition: "0% 0%",
        liquidPosition: "100% 0%"
    },
    {
        id: "quicksilver",
        name: "Quicksilver Flask",
        duration: 6.0,
        chargeUsed: 30,
        chargeCapacity: 60,
        spriteImage: "assets/sprint.png",
        basePosition: "0% 0%",
        liquidPosition: "100% 0%"
    },
    {
        id: "bismuth",
        name: "Bismuth Flask",
        duration: 5.5,
        chargeUsed: 15,
        chargeCapacity: 40,
        spriteImage: "assets/bismuth.png",
        basePosition: "0% 0%",
        liquidPosition: "100% 0%"
    },
    {
        id: "amethyst",
        name: "Amethyst Flask",
        duration: 4.5,
        chargeUsed: 35,
        chargeCapacity: 65,
        spriteImage: "assets/Amethyst.png",
        basePosition: "0% 0%",
        liquidPosition: "100% 0%"
    },
    {
        id: "ruby",
        name: "Ruby Flask",
        duration: 5.0,
        chargeUsed: 20,
        chargeCapacity: 50,
        spriteImage: "assets/ruby.png",
        basePosition: "0% 0%",
        liquidPosition: "100% 0%"
    },
    {
        id: "sapphire",
        name: "Sapphire Flask",
        duration: 5.0,
        chargeUsed: 20,
        chargeCapacity: 50,
        spriteImage: "assets/sapphire.png",
        basePosition: "0% 0%",
        liquidPosition: "100% 0%"
    },
    {
        id: "topaz",
        name: "Topaz Flask",
        duration: 5.0,
        chargeUsed: 20,
        chargeCapacity: 50,
        spriteImage: "assets/topaz.png",
        basePosition: "0% 0%",
        liquidPosition: "100% 0%"
    },
    {
        id: "aquamarine",
        name: "Aquamarine Flask",
        duration: 5.0,
        chargeUsed: 20,
        chargeCapacity: 50,
        spriteImage: "assets/aquamarine.png",
        basePosition: "0% 0%",
        liquidPosition: "100% 0%"
    },
    {
        id: "diamond",
        name: "Diamond Flask",
        duration: 4.0,
        chargeUsed: 20,
        chargeCapacity: 40,
        spriteImage: "assets/diamond.png",
        basePosition: "0% 0%",
        liquidPosition: "100% 0%"
    },
    {
        id: "granite",
        name: "Granite Flask",
        duration: 4.0,
        chargeUsed: 30,
        chargeCapacity: 60,
        spriteImage: "assets/granite.png",
        basePosition: "0% 0%",
        liquidPosition: "100% 0%"
    },
    {
        id: "jade",
        name: "Jade Flask",
        duration: 4.0,
        chargeUsed: 30,
        chargeCapacity: 60,
        spriteImage: "assets/evasionflask01.png",
        basePosition: "0% 0%",
        liquidPosition: "100% 0%"
    },
    {
        id: "quartz",
        name: "Quartz Flask",
        duration: 4.0,
        chargeUsed: 30,
        chargeCapacity: 60,
        spriteImage: "assets/phaseflask01.png",
        basePosition: "0% 0%",
        liquidPosition: "100% 0%"
    },
    // {
    //     id: "sulphur",
    //     name: "Sulphur Flask",
    //     duration: 5.0,
    //     chargeUsed: 40,
    //     chargeCapacity: 60,
    //     spriteImage: "assets/sulphur.png",
    //     basePosition: "0% 0%",
    //     liquidPosition: "100% 0%"
    // },
    // {
    //     id: "basalt",
    //     name: "Basalt Flask",
    //     duration: 5.0,
    //     chargeUsed: 40,
    //     chargeCapacity: 60,
    //     spriteImage: "assets/basalt.png",
    //     basePosition: "0% 0%",
    //     liquidPosition: "100% 0%"
    // },
    // {
    //     id: "iron",
    //     name: "Iron Flask",
    //     duration: 3.0,
    //     chargeUsed: 40,
    //     chargeCapacity: 60,
    //     spriteImage: "assets/iron.png",
    //     basePosition: "0% 0%",
    //     liquidPosition: "100% 0%"
    // },
    {
        id: "silver",
        name: "Silver Flask",
        duration: 4.0,
        chargeUsed: 40,
        chargeCapacity: 60,
        spriteImage: "assets/silver.png",
        basePosition: "0% 0%",
        liquidPosition: "100% 0%"
    },
    {
        id: "stibnite",
        name: "Stibnite Flask",
        duration: 5.0,
        chargeUsed: 40,
        chargeCapacity: 60,
        spriteImage: "assets/stibnite.png",
        basePosition: "0% 0%",
        liquidPosition: "100% 0%"
    },
    {
        id: "blood_of_karui",
        name: "Blood of the Karui",
        duration: 2.86,
        chargeUsed: 15,
        chargeCapacity: 30,
        spriteImage: "assets/BloodOfTheKarui.png",
        basePosition: "0% 0%",
        liquidPosition: "100% 0%"
    },
    // {
    //     id: "doedres_elixir",
    //     name: "Doedre's Elixir",
    //     duration: 4.0,
    //     chargeUsed: 20,
    //     chargeCapacity: 36,
    //     spriteImage: "assets/doedres_elixir.png",
    //     basePosition: "0% 0%",
    //     liquidPosition: "100% 0%"
    // },
    {
        id: "zerphis_breath",
        name: "Zerphi's Last Breath",
        duration: 4.5,
        chargeUsed: 10,
        chargeCapacity: 30,
        spriteImage: "assets/ZerphisLastBreath.png",
        basePosition: "0% 0%",
        liquidPosition: "100% 0%"
    },
    {
        id: "laviangas_spirit",
        name: "Lavianga's Spirit",
        duration: 3.25,
        chargeUsed: 7,
        chargeCapacity: 35,
        spriteImage: "assets/LaviangasOil.png",
        basePosition: "0% 0%",
        liquidPosition: "100% 0%"
    },
    {
        id: "divination_distillate",
        name: "Divination Distillate",
        duration: 5.0,
        chargeUsed: 20,
        chargeCapacity: 40,
        spriteImage: "assets/yFlasks17.png",
        basePosition: "0% 0%",
        liquidPosition: "100% 0%"
    },
    {
        id: "wise_oak",
        name: "The Wise Oak",
        duration: 5.0,
        chargeUsed: 20,
        chargeCapacity: 50,
        spriteImage: "assets/TheWiseOak.png",
        basePosition: "0% 0%",
        liquidPosition: "100% 0%"
    },
    {
        id: "taste_of_hate",
        name: "Taste of Hate",
        duration: 5.0,
        chargeUsed: 20,
        chargeCapacity: 50,
        spriteImage: "assets/TasteOfHate.png",
        basePosition: "0% 0%",
        liquidPosition: "100% 0%"
    },
    {
        id: "lions_roar",
        name: "Lion's Roar",
        duration: 4.0,
        chargeUsed: 30,
        chargeCapacity: 60,
        spriteImage: "assets/yFlask5.png",
        basePosition: "0% 0%",
        liquidPosition: "100% 0%"
    },
    // {
    //     id: "bottled_faith",
    //     name: "Bottled Faith",
    //     duration: 5.0,
    //     chargeUsed: 40,
    //     chargeCapacity: 60,
    //     spriteImage: "assets/bottled_faith.png",
    //     basePosition: "0% 0%",
    //     liquidPosition: "100% 0%"
    // },
    {
        id: "atziris_promise",
        name: "Atziri's Promise",
        duration: 4.5,
        chargeUsed: 35,
        chargeCapacity: 65,
        spriteImage: "assets/AtzirisPromise.png",
        basePosition: "0% 0%",
        liquidPosition: "100% 0%"
    },
    {
        id: "dying_sun",
        name: "Dying Sun",
        duration: 5.0,
        chargeUsed: 45,
        chargeCapacity: 50,
        spriteImage: "assets/ShapersFlask.png",
        basePosition: "0% 0%",
        liquidPosition: "100% 0%"
    },
    {
        id: "rumis_concoction",
        name: "Rumi's Concoction",
        duration: 4.0,
        chargeUsed: 30,
        chargeCapacity: 60,
        spriteImage: "assets/BlockFlask.png",
        basePosition: "0% 0%",
        liquidPosition: "100% 0%"
    },
    {
        id: "vessel_of_vinktar",
        name: "Vessel of Vinktar",
        duration: 4.0,
        chargeUsed: 57,
        chargeCapacity: 60,
        spriteImage: "assets/VinktarFlask.png",
        basePosition: "0% 0%",
        liquidPosition: "100% 0%"
    },
    {
        id: "replica_laviangas",
        name: "Replica Lavianga's Spirit",
        duration: 13.0,
        chargeUsed: 7,
        chargeCapacity: 35,
        spriteImage: "assets/LaviangasOil.png",
        basePosition: "0% 0%",
        liquidPosition: "100% 0%"
    },
    {
        id: "writhing_jar",
        name: "The Writhing Jar",
        duration: 5.0,
        chargeUsed: 17,
        chargeCapacity: 40,
        spriteImage: "assets/WrithingJar.png",
        basePosition: "0% 0%",
        liquidPosition: "100% 0%"
    },
    {
        id: "coruscating_elixir",
        name: "Coruscating Elixir",
        duration: 10.0,
        chargeUsed: 20,
        chargeCapacity: 50,
        spriteImage: "assets/CorusElixir.png",
        basePosition: "0% 0%",
        liquidPosition: "100% 0%"
    },
    // {
    //     id: "coralitos_signature",
    //     name: "Coralito's Signature",
    //     duration: 4.0,
    //     chargeUsed: 20,
    //     chargeCapacity: 40,
    //     spriteImage: "assets/CoralitosSignature.png",
    //     basePosition: "0% 0%",
    //     liquidPosition: "100% 0%"
    // },
    {
        id: "forbidden_taste",
        name: "Forbidden Taste",
        duration: 4.0,
        chargeUsed: 30,
        chargeCapacity: 60,
        spriteImage: "assets/PhantomBlood.png",
        basePosition: "0% 0%",
        liquidPosition: "100% 0%"
    },
    // {
    //     id: "soul_catcher",
    //     name: "Soul Catcher",
    //     duration: 4.0,
    //     chargeUsed: 30,
    //     chargeCapacity: 60,
    //     spriteImage: "assets/SoulCatcher.png",
    //     basePosition: "0% 0%",
    //     liquidPosition: "100% 0%"
    // },
    // {
    //     id: "soul_ripper",
    //     name: "Soul Ripper",
    //     duration: 4.0,
    //     chargeUsed: 30,
    //     chargeCapacity: 85,
    //     spriteImage: "assets/SoulRipper.png",
    //     basePosition: "0% 0%",
    //     liquidPosition: "100% 0%"
    // },
    {
        id: "kiaras_determination",
        name: "Kiara's Determination",
        duration: 2.0,
        chargeUsed: 40,
        chargeCapacity: 60,
        spriteImage: "assets/KiarasDetermination.png",
        basePosition: "0% 0%",
        liquidPosition: "100% 0%"
    },
    {
        id: "rotgut",
        name: "Rotgut",
        duration: 6.0,
        chargeUsed: 35,
        chargeCapacity: 50,
        spriteImage: "assets/Rotgut.png",
        basePosition: "0% 0%",
        liquidPosition: "100% 0%"
    },
    {
        id: "sins_rebirth",
        name: "Sin's Rebirth",
        duration: 5.0,
        chargeUsed: 10,
        chargeCapacity: 30,
        spriteImage: "assets/Sin.png",
        basePosition: "0% 0%",
        liquidPosition: "100% 0%"
    },
    // {
    //     id: "cinderswallow_urn",
    //     name: "Cinderswallow Urn",
    //     duration: 4.0,
    //     chargeUsed: 40,
    //     chargeCapacity: 60,
    //     spriteImage: "assets/CinderswallowUrn.png",
    //     basePosition: "0% 0%",
    //     liquidPosition: "100% 0%"
    // },
    {
        id: "witchfire_brew",
        name: "Witchfire Brew",
        duration: 5.0,
        chargeUsed: 60,
        chargeCapacity: 60,
        spriteImage: "assets/WitchFireBrew.png",
        basePosition: "0% 0%",
        liquidPosition: "100% 0%"
    },
    {
        id: "replica_rumis",
        name: "Replica Rumi's Concoction",
        duration: 0.4,
        chargeUsed: 30,
        chargeCapacity: 60,
        spriteImage: "assets/BlockFlask.png",
        basePosition: "0% 0%",
        liquidPosition: "100% 0%"
    },
    {
        id: "overflowing_chalice",
        name: "The Overflowing Chalice",
        duration: 4.6,
        chargeUsed: 20,
        chargeCapacity: 60,
        spriteImage: "assets/OverflowingChalice.png",
        basePosition: "0% 0%",
        liquidPosition: "100% 0%"
    },
    {
        id: "sorrow_of_divine",
        name: "The Sorrow of the Divine",
        duration: 5.5,
        chargeUsed: 20,
        chargeCapacity: 60,
        spriteImage: "assets/SorrowOfTheDivine.png",
        basePosition: "0% 0%",
        liquidPosition: "100% 0%"
    },
    {
        id: "replica_sorrow_divine",
        name: "Replica Sorrow of the Divine",
        duration: 5.5,
        chargeUsed: 20,
        chargeCapacity: 60,
        spriteImage: "assets/SorrowOfTheDivine.png",
        basePosition: "0% 0%",
        liquidPosition: "100% 0%"
    }
];