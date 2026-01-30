// Recipes changed:
// Minecraft eggs -> #eggs
// Salts -> #salt
// Replaces several rotten flesh recipes with #fleshes recipes
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
  Item.of('farmersdelight:organic_compost', 1),
  [
    "3x #dungeonsdelight:fleshes",
    "2x caverns_and_chasms:silver_ingot",
    "2x minecraft:ghast_tear"
  ]
)
})

ServerEvents.tags('item', event => {
    event.add("dungeonsdelight:slime_balls", "#forge:slimeballs")
    event.add("c:eggs", "quark:egg_parrot_blue")
    event.add("c:eggs", "quark:egg_parrot_green")
    event.add("c:eggs", "quark:egg_parrot_gray")
    event.add("c:eggs", "quark:egg_parrot_red_blue")
    
})