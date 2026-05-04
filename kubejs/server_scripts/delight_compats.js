// Recipes changed:
// Minecraft eggs -> #eggs
// Salts -> #salt
// Replaces several rotten flesh recipes with #fleshes recipes
// Krayfish Dough -> #dough
ServerEvents.recipes(event => {
    event.replaceInput(
  { input: 'minecraft:egg' },
  'minecraft:egg',
  '#c:eggs'
)
    event.replaceInput(
  { input: 'compatdelight:salt' },
  'compatdelight:salt',
  '#forge:salt'
)
    event.replaceInput(
  { input: 'fishermans_haven:salt' },
  'fishermans_haven:salt',
  '#forge:salt'
)
    event.replaceInput(
  { input: 'refurbished_furniture:sea_salt' },
  'refurbished_furniture:sea_salt',
  '#forge:salt'
)
    event.replaceInput(
  { input: 'refurbished_furniture:sea_salt' },
  'refurbished_furniture:sea_salt',
  '#forge:salt'
)
    event.replaceInput(
      {input: "refurbished_furniture:dough"},
      "refurbished_furniture:dough",
      "#forge:dough/wheat"
)
  event.remove({ input: "minecraft:rotten_flesh", output: "fishermans_haven:fertilizer" })
  event.remove({ output: "farmersdelight:organic_compost" })
  event.remove({ not: {input: "caverns_and_chasms:sanguine_block"}, output: "caverns_and_chasms:living_flesh" })
  
  event.shapeless(
  Item.of('fishermans_haven:fertilizer', 1),
  [
    'minecraft:bone_meal',
    "#dungeonsdelight:fleshes",
    "minecraft:wheat"
  ]
)
  event.shapeless(
  Item.of('farmersdelight:organic_compost', 1),
  [
    '4x minecraft:bone_meal',
    "2x #dungeonsdelight:fleshes",
    "2x farmersdelight:straw",
    "#minecraft:dirt"
  ]
)
  event.shapeless(
  Item.of('caverns_and_chasms:living_flesh', 1),
  [
    "3x #dungeonsdelight:fleshes",
    "2x caverns_and_chasms:silver_ingot",
    "2x minecraft:ghast_tear"
  ]
)
  // Mushroom Stews
  event.recipes.create.emptying([Fluid.of("tconstruct:mushroom_stew", 250), "minecraft:bowl"], "minecraft:mushroom_stew")
  event.recipes.create.filling("minecraft:mushroom_stew", [Fluid.of("tconstruct:mushroom_stew", 250), "minecraft:bowl"])
  event.recipes.create.mixing(Fluid.of("tconstruct:mushroom_stew", 250), ["minecraft:red_mushroom", "minecraft:brown_mushroom"]).heated()
  // Cocoa powder, so it's not 100% useless make it able to at least do some of the basic things the beans can do
  event.shapeless(
    "8x minecraft:cookie",
    [
      "2x minecraft:wheat",
      "2x create_confectionery:cocoa_powder"
    ]
  )
  event.shapeless("minecraft:brown_dye", 'create_confectionery:cocoa_powder')
  event.recipes.create.mixing(Fluid.of("create:chocolate", 250), ["2x create_confectionery:cocoa_powder", "minecraft:sugar", Fluid.of("minecraft:milk", 250)]).heated()
})

ServerEvents.tags('item', event => {
    event.add("dungeonsdelight:slime_balls", "#forge:slimeballs")
    event.add("c:eggs", "quark:egg_parrot_blue")
    event.add("c:eggs", "quark:egg_parrot_green")
    event.add("c:eggs", "quark:egg_parrot_gray")
    event.add("c:eggs", "quark:egg_parrot_red_blue")
    event.add("sliceanddice:allowed_tools", "#minecraft:pickaxes")
    event.add("sliceanddice:allowed_tools", "#minecraft:shovels")
    event.add("sliceanddice:allowed_tools", "#forge:shears")
    event.add("forge:dough/wheat", "refurbished_furniture:dough")
})