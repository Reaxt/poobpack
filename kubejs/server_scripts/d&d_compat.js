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
        
        //* Adding more uses to some of the DD materials
        event.shaped(
            "6x create:andesite_funnel",
            [
                "   ",
                "A  ",
                "R  ",
            ],
            {
                A: "create:andesite_alloy",
                R: "create_dd:rubber"
            }
        )
        event.shaped(
            "6x create:andesite_tunnel",
            [
                "   ",
                "AA ",
                "RR ",
            ],
            {
                A: "create:andesite_alloy",
                R: "create_dd:rubber"
            }
        )
        // Oh god this is gonna get messy (Brass Funnels/Tunnels)
        let brass_six_combos = [
            {
                E: "create:electron_tube",
                B: "create:brass_ingot",
                R: "create_dd:rubber"
            },
            {
                E: "create:electron_tube",
                B: "create_dd:bronze_ingot",
                R: "minecraft:dried_kelp"
            },
            {
                E: "create_dd:integrated_mechanism",
                B: "create:brass_ingot",
                R: "minecraft:dried_kelp"
            }
        ]
        brass_six_combos.forEach(brass_ingredients =>{
            event.shaped(
                "6x create:brass_funnel",
                [
                    "E  ",
                    "B  ",
                    "R  ",
                ],
                brass_ingredients
            )
            event.shaped(
                "6x create:brass_tunnel",
                [
                    "E  ",
                    "BB ",
                    "RR ",
                ],
                brass_ingredients
            )
        })
        let brass_twelve_combos = [
            {
                E: "create:electron_tube",
                B: "create_dd:bronze_ingot",
                R: "create_dd:rubber"
            },
            {
                E: "create_dd:integrated_mechanism",
                B: "create_dd:bronze_ingot",
                R: "minecraft:dried_kelp"
            },
            {
                E: "create_dd:integrated_mechanism",
                B: "create:brass_ingot",
                R: "create_dd:rubber"
            },
        ]
        brass_twelve_combos.forEach(brass_ingredients =>{
            event.shaped(
                "12x create:brass_funnel",
                [
                    "E  ",
                    "B  ",
                    "R  ",
                ],
                brass_ingredients
            )
            event.shaped(
                "12x create:brass_tunnel",
                [
                    "E  ",
                    "BB ",
                    "RR ",
                ],
                brass_ingredients
            )
        })
        event.shaped(
            "20x create:brass_funnel",
            [
                "E  ",
                "B  ",
                "R  ",
            ],
            {
                E: "create_dd:integrated_mechanism",
                B: "create_dd:bronze_ingot",
                R: "create_dd:rubber"
            }
        )
        event.shaped(
            "20x create:brass_tunnel",
            [
                "E  ",
                "BB ",
                "RR ",
            ],
            {
                E: "create_dd:integrated_mechanism",
                B: "create_dd:bronze_ingot",
                R: "create_dd:rubber"
            }
        )
        // Smart Chute
        event.shaped(
            "6x create:smart_chute",
            [
                "B  ",
                "C  ",
                "E  ",
            ],
            {
                E: "create_dd:integrated_mechanism",
                B: "create_dd:bronze_sheet",
                C: "create:chute"
            }
        )
        let chute_mats = [
            {
                E: "create:electron_tube",
                B: "create_dd:bronze_sheet",
                C: "create:chute"
            },
            {
                E: "create_dd:integrated_mechanism",
                B: "create:brass_sheet",
                C: "create:chute"
            }
        ]
        chute_mats.forEach(chute_ingredients =>{
            event.shaped(
                "2x create:smart_chute",
                [
                    "B  ",
                    "C  ",
                    "E  ",
                ],
                chute_ingredients
            )
        })
        // Pipes
        let pipe_configurations = [
            [
                "S  ",
                "I  ",
                "S  ",
            ],
            [
                "   ",
                "SIS",
                "   ",
            ],
        ]
        pipe_configurations.forEach(pipe_rotation => {
            event.shaped(
                "10x create:fluid_pipe",
                pipe_rotation,
                {
                    S: "create_dd:bronze_sheet",
                    I: "create_dd:bronze_ingot"
                }
            )
        })
        /// SMART pipes
        let smartpipe_ingredients = [
            {
                S: "create:brass_sheet",
                P: "create:fluid_pipe",
                E: "create_dd:integrated_mechanism"
            },
            {
                S: "create_dd:bronze_sheet",
                P: "create:fluid_pipe",
                E: "create:electron_tube"
            }
        ]
        smartpipe_ingredients.forEach(smartpipe_ingredients =>{
            event.shaped(
                "2x create:smart_fluid_pipe",
                [
                    "S  ",
                    "P  ",
                    "E  ",
                ],
                smartpipe_ingredients
            )
        })
        event.shaped(
            "6x create:smart_fluid_pipe",
            [
                "S  ",
                "P  ",
                "E  ",
            ],
            {
                S: "create_dd:bronze_sheet",
                P: "create:fluid_pipe",
                E: "create_dd:integrated_mechanism"
            }
        )
        // Smart Observer
        event.shaped(
            "6x create:content_observer",
            [
                "C  ",
                "B  ",
                "O  ",
            ],
            {
                C: "create_dd:calculation_mechanism",
                B: "create:brass_casing",
                O: "minecraft:observer"
            }
        )
        // Threshold Switch
        event.shaped(
            "6x create:stockpile_switch",
            [
                "C  ",
                "B  ",
                "R  ",
            ],
            {
                C: "create_dd:calculation_mechanism",
                B: "create:brass_casing",
                R: "minecraft:comparator"
            }
        )
        // Redstone Link
        event.shaped(
            "12x create:redstone_link",
            [
                "C  ",
                "A  ",
                "   ",
            ],
            {
                C: "create_dd:calculation_mechanism",
                A: "create:andesite_casing"
            }
        )
        // Display Link
        event.shaped(
            "6x create:display_link",
            [
                "C  ",
                "A  ",
                "   ",
            ],
            {
                C: "create_dd:calculation_mechanism",
                A: "create:brass_casing"
            }
        )
        // Stocklink
        event.shaped(
            "6x create:stock_link",
            [
                "C  ",
                "V  ",
                "   ",
            ],
            {
                C: "create_dd:calculation_mechanism",
                V: "create:item_vault"
            }
        )
        // Vault
        event.shaped(
            "2x create:item_vault",
            [
                "S  ",
                "B  ",
                "S  ",
            ],
            {
                S: "create_dd:industrial_iron_sheet",
                B: "minecraft:barrel"
            }
        )
        event.shaped(
            "6x create:item_vault",
            [
                "S  ",
                "B  ",
                "S  ",
            ],
            {
                S: "create_dd:industrial_iron_sheet",
                B: "create_dd:overburden_casing"
            }
        )
        // Fluid Tank
        let tank_ingredients = [
            {
                S: "create:copper_sheet",
                B: "create_dd:hydraulic_casing"
            },
            {
                S: "create_dd:bronze_sheet",
                B: "minecraft:barrel"
            }
        ]
        tank_ingredients.forEach(fluid_tank_ingredients =>{
            event.shaped(
                "2x create:fluid_tank",
                [
                    "S  ",
                    "B  ",
                    "S  ",
                ],
                fluid_tank_ingredients
            )
        })
        event.shaped(
            "6x create:fluid_tank",
            [
                "S  ",
                "B  ",
                "S  ",
            ],
            {
                S: "create_dd:bronze_sheet",
                B: "create_dd:hydraulic_casing"
            }
        )
        // Item Drains (my beloved)
        let drain_combos = [
            {
                B: "minecraft:iron_bars",
                C: "create_dd:hydraulic_casing"
            },
            {
                B: "createdeco:industrial_iron_bars",
                C: "create:copper_casing"
            }
        ]
        drain_combos.forEach(drain_ingredients => {
            event.shaped(
                "2x create:item_drain",
                [
                    "B  ",
                    "C  ",
                    "   "
                ],
                drain_ingredients
            )})
        event.shaped(
            "6x create:item_drain",
            [
                "B  ",
                "C  ",
                "   ",
            ],
            {
                B: "createdeco:industrial_iron_bars",
                C: "create_dd:hydraulic_casing"
            })
        // Mechanical Pump
        event.shapeless("8x create:mechanical_pump", ["create:fluid_pipe", 'create_factory_logistics:fluid_mechanism'])
        // Antenna
        event.shaped(
            "4x simpleradio:antenna",
            [
                "B  ",
                "B  ",
                "I  "
            ],
            {
                B: "createdeco:industrial_iron_bars",
                I: "create_dd:industrial_iron_ingot"
            }
        )
        // Disenchanter
        event.shaped(
            "3x create_enchantment_industry:disenchanter",
            [
                "S  ",
                "C  ",
                "   "
            ],
            {
                S: "#create:sandpaper",
                C: "create_dd:hydraulic_casing"
            }
        )
        // BEES!
        event.shaped(
            "3x create_mobile_packages:bee_port",
            [
                "AAA",
                "AMA",
                "CCC"
            ],
            {
                A: "create:andesite_alloy",
                C: "create:andesite_casing",
                M: 'create_dd:inductive_mechanism'
            }
        )
        event.shaped(
            "3x create_mobile_packages:robo_bee",
            [
                "   ",
                "PMP",
                "HVH"
            ],
            {
                H: "minecraft:honeycomb",
                V: "create:item_vault",
                M: 'create_dd:inductive_mechanism',
                P: "create:propeller"
            }
        )
        // Propeller
        event.shaped(
            "2x create:propeller",
            [
                " S ",
                "SAS",
                " S "
            ],
            {
                S: "create_dd:industrial_iron_sheet",
                A: "create:andesite_alloy"
            }
        )
        event.shaped(
            "4x create:propeller",
            [
                " S ",
                "SAS",
                " S "
            ],
            {
                S: "create_dd:steel_sheet",
                A: "create:andesite_alloy"
            }
        )
})