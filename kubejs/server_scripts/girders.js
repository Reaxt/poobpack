ServerEvents.recipes(event => {
    //Add weathered iron recipes
    event.shapeless(Item.of("kubejs:weathered_iron_ingot", 9),["create:weathered_iron_block"])
    event.recipes.create.pressing('kubejs:weathered_iron_sheet', 'kubejs:weathered_iron_ingot')
    event.shaped(
        Item.of("createmoregirder:andesite_girder", 8),
        [
            'AAA',
            'BBB',
        ],
        {
            A: "createdeco:andesite_sheet",
            B: "create:andesite_alloy"
        })
    event.stonecutting('2x createmoregirder:andesite_girder_strut', 'createmoregirder:andesite_girder')
    event.shaped(
        Item.of("createmoregirder:brass_girder", 8),
        [
            'AAA',
            'BBB',
        ],
        {
            A: "create:brass_sheet",
            B: "create:andesite_alloy"
        })
    event.stonecutting('2x createmoregirder:brass_girder_strut', 'createmoregirder:brass_girder')
    event.shaped(
        Item.of("createmoregirder:copper_girder", 8),
        [
            'AAA',
            'BBB',
        ],
        {
            A: "create:copper_sheet",
            B: "create:andesite_alloy"
        })
    event.shaped(
        Item.of("createmoregirder:industrial_iron_girder", 8),
        [
            'AAA',
            'BBB',
        ],
        {
            A: "create_dd:industrial_iron_ingot",
            B: "create:andesite_alloy"
        })
    event.stonecutting('2x createmoregirder:industrial_iron_girder_strut', 'createmoregirder:industrial_iron_girder')
    event.shaped(
        Item.of("createmoregirder:weathered_iron_girder", 8),
        [
            'AAA',
            'BBB',
        ],
        {
            A: "kubejs:weathered_iron_sheet",
            B: "create:andesite_alloy"
        })
    event.stonecutting('2x createmoregirder:weathered_iron_girder_strut', 'createmoregirder:weathered_iron_girder')
    event.recipes.create.splashing('createmoregirder:exposed_copper_girder', 'createmoregirder:copper_girder')
    event.recipes.create.splashing('createmoregirder:weathered_copper_girder', 'createmoregirder:exposed_copper_girder')
    event.recipes.create.splashing('createmoregirder:oxidized_copper_girder', 'createmoregirder:weathered_copper_girder')
    event.shapeless(Item.of("createmoregirder:waxed_copper_girder", 1),["createmoregirder:copper_girder","minecraft:honeycomb"])
    event.shapeless(Item.of("createmoregirder:waxed_exposed_copper_girder", 1),["createmoregirder:exposed_copper_girder","minecraft:honeycomb"])
    event.shapeless(Item.of("createmoregirder:waxed_weathered_copper_girder", 1),["createmoregirder:weathered_copper_girder","minecraft:honeycomb"])
    event.shapeless(Item.of("createmoregirder:waxed_oxidized_copper_girder", 1),["createmoregirder:oxidized_copper_girder","minecraft:honeycomb"])
    event.stonecutting('2x createmoregirder:waxed_copper_girder_strut', 'createmoregirder:waxed_copper_girder')
    event.stonecutting('2x createmoregirder:waxed_exposed_copper_girder_strut', 'createmoregirder:waxed_exposed_copper_girder')
    event.stonecutting('2x createmoregirder:waxed_weathered_copper_girder_strut', 'createmoregirder:waxed_weathered_copper_girder')
    event.stonecutting('2x createmoregirder:waxed_oxidized_copper_girder_strut', 'createmoregirder:waxed_oxidized_copper_girder')
    })
ServerEvents.tags('item', event => {
    event.add('forge:ingots/weatherediron', 'kubejs:weathered_iron_ingot')
    event.add('forge:plates/weatherediron', 'kubejs:weathered_iron_sheet')
    event.add('forge:ingots', 'kubejs:weathered_iron_ingot')
    event.add('forge:plates', 'kubejs:weathered_iron_sheet')
})