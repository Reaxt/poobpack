ServerEvents.recipes(event => {
    event.recipes.farmersdelight.cutting(
        "#fishermans_haven:fish",
        "#forge:tools/knives",
        [
            "2x fishermans_haven:fish_fillet"
        ]
    )
    event.recipes.farmersdelight.cutting(
        "fishermans_haven:crab_item",
        "#forge:tools/knives",
        [
            "2x fishermans_haven:crab_meat"
        ]
    )
    event.remove({output: "fishermans_haven:fish_fillet", type: "minecraft:crafting"})
    event.remove({output: "fishermans_haven:crab_meat", type:"minecraft:crafting"})

})