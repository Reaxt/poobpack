// Misc additions, please be sure to document them
ServerEvents.tags('item', event => {
    // Various nugget tags
    event.add("forge:nuggets/netherite", "createdeco:netherite_nugget")
    event.add("forge:nuggets", "createdeco:netherite_nugget")
    event.add("forge:nuggets", "createdeco:industrial_iron_nugget")
    event.add("forge:nuggets", "createbigcannons:cast_iron_nugget")
    event.add("forge:nuggets", "createbigcannons:nethersteel_nugget")
    // Cheeses (not the "Brewin' and Chewin'" one as that one takes more effort to craft)
    event.add("forge:cheese", "tconstruct:cheese_ingot")
    event.add("forge:cheese", "refurbished_furniture:cheese")
    // Stones
    event.add("quark:stone_tool_materials", "#minecraft:stone_tool_materials")
    // Zinc
    event.add("forge:plates/zinc", "createaddition:zinc_sheet")
    event.add("forge:plates/zinc", "createdeco:zinc_sheet")
    // Electrum Amulet
    event.add("curios:necklace", "createaddition:electrum_amulet")
    // Chalks
    Color.DYE.forEach(color => {    
        event.add(`forge:chalk/${color}`, `natures_spirit:${color}_chalk`)
        event.add(`forge:chalk/${color}`, `arts_and_crafts:${color}_chalk`)
    })
})

ServerEvents.recipes(event => {
    // Nugget recipes
    event.shaped(
        Item.of("tconstruct:cheese_ingot", 1),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A: "gemsrealm:/tconstruct/cheese_nugget"
        }
)
    // Cheeses
    event.replaceInput(
        { input: "tconstruct:cheese_ingot" },
        "tconstruct:cheese_ingot",
        "#forge:cheese"
)
    event.replaceInput(
        { input: "refurbished_furniture:cheese" },
        "refurbished_furniture:cheese",
        "#forge:cheese"
)
    // Zinc sheets
    event.remove({ input: "create:zinc_ingot" , output: "createdeco:zinc_sheet" })
    //* Just in case, swap the recipes for tags
    event.replaceInput(
        { input: "createdeco:zinc_sheet"},
        "createdeco:zinc_sheet",
        "#forge:plates/zinc"
    )
    event.replaceInput(
        { input: "createaddition:zinc_sheet"},
        "createaddition:zinc_sheet",
        "#forge:plates/zinc"
    )
    // Secret :)
    event.recipes.create.filling(Item.of("minecraft:player_head", {SkullOwner:"Boltycat"}), [Fluid.of("estrogen:liquid_estrogen"), "minecraft:zombie_head"])
    // Ink Sacs
    event.recipes.create.filling("minecraft:ink_sac", [Fluid.of("create_enchantment_industry:ink", 500), "minecraft:leather"])
    // Natures Spirit crushing
    event.recipes.create.crushing(["3x minecraft:orange_dye", Item.of("minecraft:yellow_dye").withChance(0.1)], "natures_spirit:marigold")
    event.recipes.create.crushing(["3x minecraft:orange_dye", Item.of("minecraft:green_dye").withChance(0.2)], "natures_spirit:begonia")
    event.recipes.create.crushing(["5x minecraft:purple_dye", Item.of("minecraft:green_dye").withChance(0.2)], "natures_spirit:lavender")
    event.recipes.create.crushing(["5x minecraft:pink_dye", Item.of("minecraft:green_dye").withChance(0.2)], "natures_spirit:bleeding_heart")
    event.recipes.create.crushing(["5x minecraft:blue_dye", Item.of("minecraft:green_dye").withChance(0.2)], "natures_spirit:blue_bulbs")
    event.recipes.create.crushing(["5x minecraft:red_dye", Item.of("minecraft:green_dye").withChance(0.2)], "natures_spirit:carnation")
    event.recipes.create.crushing(["3x minecraft:white_dye", Item.of("minecraft:green_dye").withChance(0.2)], "natures_spirit:gardenia")
    event.recipes.create.crushing(["3x minecraft:pink_dye", Item.of("minecraft:green_dye").withChance(0.2)], "natures_spirit:snapdragon")
    event.recipes.create.crushing(["5x minecraft:red_dye", Item.of("minecraft:green_dye").withChance(0.2)], "natures_spirit:carnation")
    event.recipes.create.crushing(["3x minecraft:purple_dye", Item.of("minecraft:green_dye").withChance(0.2)], "natures_spirit:foxglove")
    event.recipes.create.crushing(["2x minecraft:red_dye", Item.of("minecraft:orange_dye").withChance(0.3)], "natures_spirit:ornate_succulent")
    event.recipes.create.crushing(["3x minecraft:brown_dye", Item.of("minecraft:green_dye").withChance(0.2)], "natures_spirit:cattail")
    event.recipes.create.crushing(["2x minecraft:purple_dye", Item.of("minecraft:magenta_dye").withChance(0.3)], "natures_spirit:imperial_succulent")
    event.recipes.create.crushing(["2x minecraft:light_blue_dye", Item.of("minecraft:lime_dye").withChance(0.3)], "natures_spirit:foamy_succulent")
    event.recipes.create.crushing(["2x minecraft:yellow_dye", Item.of("minecraft:lime_dye").withChance(0.3)], "natures_spirit:aureate_succulent")
    event.recipes.create.crushing(["2x minecraft:lime_dye", Item.of("minecraft:green_dye").withChance(0.3)], "natures_spirit:drowsy_succulent")
    event.recipes.create.crushing(["3x minecraft:blue_dye", Item.of("minecraft:light_blue_dye").withChance(0.1)], "natures_spirit:bluebell")
    event.recipes.create.crushing(["2x minecraft:pink_dye", Item.of("minecraft:black_dye").withChance(0.1)], "natures_spirit:dwarf_blossoms")
    event.recipes.create.crushing(["2x minecraft:magenta_dye", Item.of("minecraft:black_dye").withChance(0.1)], "natures_spirit:anemone")
    event.recipes.create.crushing(["3x minecraft:purple_dye", Item.of("minecraft:magenta_dye").withChance(0.1)], "natures_spirit:purple_heather")
    event.recipes.create.crushing(["3x minecraft:white_dye", Item.of("minecraft:light_gray_dye").withChance(0.1)], "natures_spirit:white_heather")
    event.recipes.create.crushing(["3x minecraft:red_dye", Item.of("minecraft:orange_dye").withChance(0.1)], "natures_spirit:red_heather")
    event.recipes.create.crushing(["3x minecraft:yellow_dye", Item.of("minecraft:orange_dye").withChance(0.1)], "natures_spirit:yellow_wildflower")
    event.recipes.create.crushing(["3x minecraft:purple_dye", Item.of("minecraft:magenta_dye").withChance(0.1)], "natures_spirit:purple_wildflower")
    event.recipes.create.crushing(["3x minecraft:orange_dye", Item.of("minecraft:yellow_dye").withChance(0.1)], "natures_spirit:tiger_lily")
    event.recipes.create.crushing(["2x minecraft:pink_dye", Item.of("minecraft:lime_dye").withChance(0.1)], "natures_spirit:protea")
    event.recipes.create.crushing(["2x minecraft:red_dye", Item.of("minecraft:orange_dye").withChance(0.1)], "natures_spirit:hibiscus")
    event.recipes.create.crushing(["2x minecraft:light_blue_dye", Item.of("minecraft:yellow_dye").withChance(0.1)], "natures_spirit:blue_iris")
    event.recipes.create.crushing(["2x minecraft:black_dye", Item.of("minecraft:purple_dye").withChance(0.1)], "natures_spirit:black_iris")
    event.recipes.create.crushing(["3x minecraft:red_dye", Item.of("minecraft:magenta_dye").withChance(0.1)], "natures_spirit:ruby_blossoms")
    event.recipes.create.crushing(["3x minecraft:light_gray_dye", Item.of("minecraft:gray_dye").withChance(0.1)], "natures_spirit:silverbush")
    event.shapeless(Item.of('minecraft:light_gray_dye', 2), ["natures_spirit:silverbush"])
    event.recipes.create.crushing(["2x minecraft:white_dye", Item.of("minecraft:yellow_dye").withChance(0.3)], "natures_spirit:helova_flower")
    event.recipes.create.crushing(["2x minecraft:pink_dye", Item.of("minecraft:yellow_dye").withChance(0.3)], "natures_spirit:lotus_flower")
    // Breeze rods, in line w/ blaze rod crushing
    event.recipes.create.crushing(["5x trials:wind_charge", Item.of("3x trials:wind_charge").withChance(0.25)], "trials:breeze_rod")
    // What if we had MONEY.
    event.shapeless("9x kubejs:diamond_coin", "kubejs:diamond_coinstack")
    event.shapeless("kubejs:diamond_coinstack", "9x kubejs:diamond_coin")
    event.remove({ input: "#forge:ores/diamond" , output: "create:experience_nugget" })
    event.recipes.create.crushing(
        [
            "minecraft:diamond", 
            "kubejs:diamond_coin",
            Item.of("minecraft:diamond").withChance(0.75),
            Item.of("kubejs:diamond_coin").withChance(0.75),
            Item.of("create:experience_nugget").withChance(0.75),
            Item.of("minecraft:cobblestone").withChance(0.12),
        ], 
        "minecraft:diamond_ore"
    )
    event.recipes.create.crushing(
        [
            "2x minecraft:diamond", 
            "2x kubejs:diamond_coin",
            Item.of("minecraft:diamond").withChance(0.25),
            Item.of("kubejs:diamond_coin").withChance(0.25),
            Item.of("create:experience_nugget").withChance(0.75),
            Item.of("minecraft:cobbled_deepslate").withChance(0.12),
        ], 
        "minecraft:deepslate_diamond_ore"
    )
    // Honey(comb)
    event.recipes.farmersdelight.cutting("minecraft:honeycomb_block", "#forge:tools/knives", '4x minecraft:honeycomb')
    event.recipes.create.mixing(["minecraft:honeycomb", Item.of("minecraft:honeycomb").withChance(0.25)], ["#forge:slimeballs", {fluidTag: "forge:honey", amount: 250}])
    // What if you could obtain the shelf tho
    event.shaped(
        '6x minecraft:pale_oak_shelf',
        [
            "LLL",
            "   ",
            "LLL"
        ],
        {L: "minecraft:stripped_pale_oak_log"}
    )
    // Fuck it I want chalk and I want it NOOOOW!!!!!!
    event.recipes.create.crushing(Item.of("natures_spirit:chalk_powder").withChance(0.25), "natures_spirit:calcite_shard")
    Color.DYE.forEach(color => {    
        event.replaceInput(
            {
                input: `arts_and_crafts:${color}_chalk`, 
                output: `arts_and_crafts:${color}_chalk_stick`
            }, 
            `arts_and_crafts:${color}_chalk`, 
            `#forge:chalk/${color}`
        )
    })
    // Crystalized Sap -> Resin
    event.recipes.create.haunting("minecraft:resin_clump", "create_dd:crystallized_sap")
    // Corundum -> Silver nuggets (to make farming them a little more worth it beyond just looks)
    event.recipes.create.crushing([Item.of("caverns_and_chasms:silver_nugget").withChance(0.16)], "#quark:corundum")
})

// Adding tags to blocks not items
ServerEvents.tags('block', event => {
    // Electrum
    event.add("minecraft:mineable/pickaxe", "createaddition:electrum_block")
    // Fairylights
    let fairylights_blocks = [
        "fairylights:candle_lantern",
        "fairylights:candle_lantern_light",
        "fairylights:fairy_light",
        "fairylights:fastener",
        "fairylights:flower_light",
        "fairylights:paper_lantern",
        "fairylights:orb_lantern",
        "fairylights:oil_lantern",
        "fairylights:oil_lantern_light",
        "fairylights:jack_o_lantern",
        "fairylights:skull_light",
        "fairylights:ghost_light",
        "fairylights:witch_light",
        "fairylights:snowflake_light",
        "fairylights:spider_light",
        "fairylights:heart_light",
        "fairylights:moon_light",
        "fairylights:star_light",
        "fairylights:icicle_lights",
        "fairylights:meteor_light",
        "fairylights:incandescent_light"
    ]
    fairylights_blocks.forEach(fairylight =>{
        event.add("minecraft:mineable/pickaxe", fairylight)
    })
    
})

// LootJS
LootJS.modifiers((event) => {
    // Fixing electrum
    event.addBlockLootModifier("createaddition:electrum_block").addLoot("createaddition:electrum_block");
    // Fixing diamond ore silk touch
    let diamond_ores = [
        "minecraft:diamond_ore",
        "minecraft:deepslate_diamond_ore"
    ]
    diamond_ores.forEach(ore =>{
    event
        .addBlockLootModifier(ore)
        .addLoot(
            LootEntry.of("kubejs:diamond_coin")
            .applyOreBonus("minecraft:fortune")
        )
        .or((or) => {
            or
            .matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch"))
            .matchMainHand(ItemFilter.custom( item =>
                {
                    if (item.nbt.contains("tic_modifiers"))
                    {
                        if (item.nbt.tic_modifiers.find(i => i.name == 'tconstruct:silky') != undefined)
                        {
                            return true
                        }
                        else
                        {
                            return false
                        }
                    }
                    else
                    {
                        return false
                    }
                }))
        })
        .removeLoot(Ingredient.all)
        .addLoot(ore);
    });

    // Rubber trees drop saplings
    event.addBlockLootModifier("create_dd:rubber_leaves")
    .addLoot(LootEntry.of("create_dd:rubber_sapling").when((c) => c.randomChance(0.05)))
    .addLoot(LootEntry.of("create_dd:crystallized_sap").when((c) => c.randomChance(0.005)));
})
