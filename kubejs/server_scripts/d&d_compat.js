ServerEvents.recipes(event => 
    {
        //Recipe for tin without having to load new chunks
        event.recipes.create.crushing([Item.of("create:crushed_raw_tin").withChance(0.2), Item.of("create_dd:tin_nugget").withChance(0.1)],"create:scoria")
        //Removing sheet recipes from dd that are pre-existing
        event.remove({input: "create:zinc_ingot" , output: "create_dd:zinc_sheet"})
        event.replaceInput({input: 'create_dd:zinc_sheet' },'create_dd:zinc_sheet','createaddition:zinc_sheet')
        event.replaceOutput({input: 'create_dd:zinc_sheet' },'create_dd:zinc_sheet','createaddition:zinc_sheet')
        event.remove({input: "create:andesite_alloy" , output: "create_dd:andesite_sheet"})
        event.replaceInput({input: 'create_dd:andesite_sheet' },'create_dd:andesite_sheet','createdeco:andesite_sheet')
        event.replaceOutput({input: 'create_dd:andesite_sheet' },'create_dd:andesite_sheet','createdeco:andesite_sheet')
        
        //Adjusting industrial iron recipes for parity between mods & so its not broken (lol)
        event.remove({id: "create:industrial_iron_block_from_ingots_iron_stonecutting"})
        event.remove({id: "create:industrial_iron_block_from_iron_ingots_stonecutting"})
        event.remove({id: "createdeco:industrial_iron_block"})
        event.remove({id: "createdeco:industrial_iron_ingot_from_industrial_iron_block"})
        event.remove({id: "create_dd:crafting/industrial_iron_block_from_compacting"})
        event.remove({id: "create_dd:crafting/industrial_iron_ingot_from_decompacting"})
        event.remove({id: "createbigcannons:compacting/iron_to_cast_iron_block"})
        event.remove({id: "createbigcannons:compacting/iron_to_cast_iron_ingot"})
        event.remove({id: "createdeco:compacting/industrial_iron_ingot"})
        event.remove({id: "create_dd:compacting/industrial_iron_ingot"})

        event.shapeless(Item.of("create_dd:industrial_iron_ingot", 1),["createdeco:industrial_iron_ingot"])
        event.recipes.create.compacting('2x create_dd:industrial_iron_ingot', 'minecraft:iron_ingot').heated()
        event.recipes.create.compacting('2x create:industrial_iron_block', 'minecraft:iron_block').heated()
        event.replaceInput({input: 'createdeco:industrial_iron_ingot' },'createdeco:industrial_iron_ingot','create_dd:industrial_iron_ingot')
        event.replaceOutput({input: 'createdeco:industrial_iron_ingot' },'createdeco:industrial_iron_ingot','create_dd:industrial_iron_ingot')
        event.replaceInput({input: "createdeco:industrial_iron_sheet" },'createdeco:industrial_iron_sheet','create_dd:industrial_iron_sheet')
        event.shapeless("9x create_dd:industrial_iron_ingot", "create:industrial_iron_block")
        event.shapeless("create:industrial_iron_block", "9x create_dd:industrial_iron_ingot")
        event.recipes.create.deploying("create_dd:blaze_gold_casing", ['create:industrial_iron_block', 'create_dd:blaze_gold'])
        //Fixing bronze recipes for big cannons
        event.shaped(
        Item.of("createbigcannons:bronze_sliding_breechblock", 1),
        [
            ' A ',
            'BAB',
            ' A '
        ],
        {
            A: "create_dd:bronze_ingot",
            B: "create:cogwheel"
        })
        //fuck tcintegrations bruh oh my god
        event.shapeless(Item.of("tcintegrations:bronze_ingot", 2),["create_dd:bronze_ingot", "create_dd:bronze_ingot"])
        event.shapeless(Item.of("create_dd:bronze_ingot", 2),["tcintegrations:bronze_ingot", "tcintegrations:bronze_ingot"])
        //flywheel compat
        event.remove({id: 'create_dd:mechanical_crafting/flywheel'})
        event.shaped(
        Item.of("create_dd:flywheel", 1),
        [
            '   ',
            'BA ',
            ' C ',
        ],
        {
            A: "create:flywheel",
            B: "create_dd:integrated_mechanism",
            C: "create_dd:steel_casing"
        })
        // Removing D&D Copycats because CC+ is better
        event.remove({output: "create_dd:copycat_block"})
        event.remove({output: "create_dd:copycat_slab"})
        // Fixing a missing sheet recipe
        event.recipes.create.pressing('create_dd:stargaze_singularity_sheet', 'create_dd:stargaze_singularity')
})