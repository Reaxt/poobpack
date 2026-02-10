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
})

// Adding tags to blocks not items
ServerEvents.tags('block', event => {
    // Electrum
    event.add("minecraft:mineable/pickaxe", "createaddition:electrum_block")
})
