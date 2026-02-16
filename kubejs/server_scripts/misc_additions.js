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
    event.recipes.create.filling("minecraft:ink_sac", [Fluid.of("create_enchantment_industry:ink"), "minecraft:leather"])
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
})

// Adding tags to blocks not items
ServerEvents.tags('block', event => {
    // Electrum (I still can't figure out how to make it drop itself but at least it's breakable now)
    event.add("minecraft:mineable/pickaxe", "createaddition:electrum_block")
})
