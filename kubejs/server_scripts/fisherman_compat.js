ServerEvents.tags('item', event => {
    event.add("forge:salt", "fishermans_haven:salt")
    event.add("forge:salt", "refurbished_furniture:sea_salt")
})

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
    event.remove({input: "fishermans_haven:fishermans_knife"});
    event.remove({output: "fishermans_haven:fishermans_knife"});
    event.remove({output: "fishermans_haven:fish_stew"})
    event.remove({output: "fishermans_haven:fish_soup"})
    event.remove({output: "fishermans_haven:shrimp_soup"})
    event.remove({output: "fishermans_haven:seafood_soup"})
    event.remove({output:"fishermans_haven:lobster_stew"})
    event.campfireCooking( "fishermans_haven:cooked_lobster", "fishermans_haven:lobster", 1, 200);

    event.recipes.farmersdelight.cooking(
        ["minecraft:potato", "minecraft:carrot", "fishermans_haven:salt", "fishermans_haven:cooked_fish_fillet"],
        "fishermans_haven:fish_stew",
        1,
        7,
        "minecraft:bowl"
    )
        event.recipes.farmersdelight.cooking(
        ["fishermans_haven:salt", "fishermans_haven:fish_fillet"],
        "fishermans_haven:fish_soup",
        1,
        7,
        "minecraft:bowl"
    )
    event.recipes.farmersdelight.cooking(
        ["fishermans_haven:shrimp", "fishermans_haven:salt", "minecraft:carrot", "minecraft:beetroot"],
        "fishermans_haven:shrimp_soup",
        1,
        7,
        "minecraft:bowl"
    )
    event.recipes.farmersdelight.cooking(
        ["fishermans_haven:cooked_fish_fillet", "fishermans_haven:cooked_crab_meat", "minecraft:carrot", "fishermans_haven:salt"],
        "fishermans_haven:seafood_soup",
        1,
        7,
        "minecraft:bowl"
    )
    event.recipes.farmersdelight.cooking(
        ["minecraft:carrot", "fishermans_haven:cooked_lobster", "minecraft:potato", "fishermans_haven:salt"],
        "fishermans_haven:lobster_stew",
        1,
        7,
        "minecraft:bowl"
    )



})
