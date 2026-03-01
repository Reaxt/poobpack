ServerEvents.recipes(event => {
    //Generator
    event.remove({id: "create_bnz:upgrades/generator"})
    event.custom({
        type: 'create_bnz:zapper_recipe',
        component: 'GENERATOR',
        tier: 'SPECIAL',
        key: {
            B: { item: 'dungeonsdelight:wardenzola' },
            O: { item: 'alexsmobs:transmutation_table' },
            N: { item: 'plushie_buddies:plushie_peter' },
            E: { item: 'bloodmagic:etherealslate' },
            R: { item: 'create_bnz:handheld_block_zapper' },
            F: { item: 'malum:complete_design' },
            U: { item: 'alexsmobs:devils_hole_pupfish_bucket' },
            M: { item: 'create_dd:stargaze_singularity_block' },
            Y: { item: 'estrogen:gender_fluid_bucket' },
        },
        pattern: [
            'BON',
            'ERF',
            'UMY'
        ],
        result: {
            item: 'create_bnz:handheld_block_zapper'
        }
    }).id('kubejs:upgrades/generator');
    //Applicator
    event.remove({id: "create_bnz:upgrades/applicator"})
    event.custom({
        type: 'create_bnz:zapper_recipe',
        component: 'APPLICATOR',
        tier: 'SPECIAL',
        key: {
            A: { item: 'enlightened_end:adamantite_ingot' },
            V: { item: 'alexsmobs:void_worm_eye' },
            R: { item: 'create_dd:refined_radiance'},
            Z: { item: 'create_bnz:handheld_block_zapper'},
            S: { item: 'create_dd:shadow_steel'},
            N: { item: 'minecraft:netherite_block'},
        },
        pattern: [
            'AVA',
            'RZS',
            'ANA'
        ],
        result: {
            item: 'create_bnz:handheld_block_zapper'
        }
    }).id('kubejs:upgrades/applicator');
    //Scope lvl 1
    event.remove({id: "create_bnz:modifiers/scope/brass"})
    event.custom({
        type: 'create_bnz:zapper_recipe',
        component: 'SCOPE',
        tier: 'BRASS',
        key: {
            B: { item: 'create_dd:bronze_ingot' },
            S: { item: 'minecraft:spyglass' },
            Z: { item: 'create_bnz:handheld_block_zapper'},
        },
        pattern: [
            'SBB',
            ' Z ',
        ],
        result: {
            item: 'create_bnz:handheld_block_zapper'
        }
    }).id('kubejs:modifiers/scope/bronze');
    //Scope lvl 2
    event.remove({id: "create_bnz:modifiers/scope/rose"})
    event.custom({
        type: 'create_bnz:zapper_recipe',
        component: 'SCOPE',
        tier: 'ROSE_QUARTZ',
        key: {
            C: { item: 'create_dd:chromatic_compound'},
            E: { item: 'create:extendo_grip' },
            I: { item: 'create_dd:integrated_mechanism' },
            Z: { item: 'create_bnz:handheld_block_zapper'},
        },
        pattern: [
            'ECI',
            ' Z ',
        ],
        result: {
            item: 'create_bnz:handheld_block_zapper'
        }
    }).id('kubejs:modifiers/scope/chromatic');
    //Scope lvl 3
    event.remove({id: "create_bnz:modifiers/scope/obsidian"})
    event.custom({
        type: 'create_bnz:zapper_recipe',
        component: 'SCOPE',
        tier: 'OBSIDIAN',
        key: {
            M: { item: 'create_dd:mithril_ingot' },
            S: { item: 'create_dd:shadow_steel' },
            B: { item: 'minecraft:beacon' },
            Z: { item: 'create_bnz:handheld_block_zapper'},
        },
        pattern: [
            'MSB',
            ' Z ',
        ],
        result: {
            item: 'create_bnz:handheld_block_zapper'
        }
    }).id('kubejs:modifiers/scope/shadow');
    //Scope lvl 4
    event.remove({id: "create_bnz:modifiers/scope/echo"})
    event.custom({
        type: 'create_bnz:zapper_recipe',
        component: 'SCOPE',
        tier: 'ECHO',
        key: {
            M: { item: 'malum:prismatic_focus_lens' },
            S: { item: 'create_dd:stargaze_singularity' },
            B: { item: 'bloodmagic:reagentsight' },
            Z: { item: 'create_bnz:handheld_block_zapper'},
        },
        pattern: [
            'MSB',
            ' Z ',
        ],
        result: {
            item: 'create_bnz:handheld_block_zapper'
        }
    }).id('kubejs:modifiers/scope/singularity');
    //Amplifier lvl 1
    event.remove({id: "create_bnz:modifiers/amplifier/brass"})
    event.custom({
        type: 'create_bnz:zapper_recipe',
        component: 'AMPLIFIER',
        tier: 'BRASS',
        key: {
            B: { item: 'create_dd:bronze_ingot' },
            N: { item: 'minecraft:note_block' },
            Z: { item: 'create_bnz:handheld_block_zapper'},
        },
        pattern: [
            ' Z ',
            'BBN',
        ],
        result: {
            item: 'create_bnz:handheld_block_zapper'
        }
    }).id('kubejs:modifiers/amplifier/bronze');
    //Amplifier lvl 2
    event.remove({id: "create_bnz:modifiers/amplifier/rose"})
    event.custom({
        type: 'create_bnz:zapper_recipe',
        component: 'AMPLIFIER',
        tier: 'ROSE_QUARTZ',
        key: {
            L: { item: 'create_dd:inductive_mechanism'},
            C: { item: 'create_dd:chromatic_compound' },
            H: { item: 'create:haunted_bell' },
            Z: { item: 'create_bnz:handheld_block_zapper'},
        },
        pattern: [
            ' Z ',
            'LCH',
        ],
        result: {
            item: 'create_bnz:handheld_block_zapper'
        }
    }).id('kubejs:modifiers/amplifier/chromatic');
    //Amplifier lvl 3
    event.remove({id: "create_bnz:modifiers/amplifier/obsidian"})
    event.custom({
        type: 'create_bnz:zapper_recipe',
        component: 'AMPLIFIER',
        tier: 'OBSIDIAN',
        key: {
            M: { item: 'create_dd:mithril_ingot' },
            S: {item: 'create_dd:shadow_steel'},
            H: { item: 'minecraft:sculk_shrieker' },
            Z: { item: 'create_bnz:handheld_block_zapper'},
        },
        pattern: [
            ' Z ',
            'MSH',
        ],
        result: {
            item: 'create_bnz:handheld_block_zapper'
        }
    }).id('kubejs:modifiers/amplifier/shadow');
    //Amplifier lvl 4
    event.remove({id: "create_bnz:modifiers/amplifier/echo"})
    event.custom({
        type: 'create_bnz:zapper_recipe',
        component: 'AMPLIFIER',
        tier: 'ECHO',
        key: {
            S: { item: 'create_dd:stargaze_singularity' },
            W: { item: 'malum:warping_engine' },
            B: { item: 'bloodmagic:reagentgrowth' },
            Z: { item: 'create_bnz:handheld_block_zapper'},
        },
        pattern: [
            ' Z ',
            'WSB',
        ],
        result: {
            item: 'create_bnz:handheld_block_zapper'
        }
    }).id('kubejs:modifiers/amplifier/singularity');
    //Accelerator lvl 1
    event.remove({id: "create_bnz:modifiers/accelerator/brass"})
    event.custom({
        type: 'create_bnz:zapper_recipe',
        component: 'ACCELERATOR',
        tier: 'BRASS',
        key: {
            E: { item: 'createaddition:electrum_ingot' },
            B: {item: 'create_dd:bronze_ingot'},
            Z: { item: 'create_bnz:handheld_block_zapper'},
        },
        pattern: [
            'EE',
            'ZB',
        ],
        result: {
            item: 'create_bnz:handheld_block_zapper'
        }
    }).id('kubejs:modifiers/accelerator/bronze');
    //Accelerator lvl 2
    event.remove({id: "create_bnz:modifiers/accelerator/rose"})
    event.custom({
        type: 'create_bnz:zapper_recipe',
        component: 'ACCELERATOR',
        tier: 'ROSE_QUARTZ',
        key: {
            B: { item: 'create:builders_tea' },
            C: {item: 'create_dd:chromatic_compound'},
            Z: { item: 'create_bnz:handheld_block_zapper'},
        },
        pattern: [
            'CB',
            'ZC',
        ],
        result: {
            item: 'create_bnz:handheld_block_zapper'
        }
    }).id('kubejs:modifiers/accelerator/chromatic');
    //Accelerator lvl 3
    event.remove({id: "create_bnz:modifiers/accelerator/obsidian"})
    event.custom({
        type: 'create_bnz:zapper_recipe',
        component: 'ACCELERATOR',
        tier: 'OBSIDIAN',
        key: {
            O: { item: 'create_dd:overcharge_alloy' },
            R: {item: 'create_dd:refined_radiance'},
            B: {item: 'create_dd:infernal_mechanism'},
            Z: { item: 'create_bnz:handheld_block_zapper'},
        },
        pattern: [
            'OB',
            'ZR',
        ],
        result: {
            item: 'create_bnz:handheld_block_zapper'
        }
    }).id('kubejs:modifiers/accelerator/radiance');
    //Accelerator lvl 4
    event.remove({id: "create_bnz:modifiers/accelerator/echo"})
    event.custom({
        type: 'create_bnz:zapper_recipe',
        component: 'ACCELERATOR',
        tier: 'ECHO',
        key: {
            M: { item: 'malum:rune_of_haste' },
            S: {item: 'create_dd:stargaze_singularity'},
            B: {item: 'bloodmagic:reagentfastminer'},
            Z: { item: 'create_bnz:handheld_block_zapper'},
        },
        pattern: [
            'MS',
            'ZB',
        ],
        result: {
            item: 'create_bnz:handheld_block_zapper'
        }
    }).id('kubejs:modifiers/reinforcer/brass');
    //Reinforcer lvl 1
    event.remove({id: "create_bnz:modifiers/reinforcer/brass"})
    event.custom({
        type: 'create_bnz:zapper_recipe',
        component: 'REINFORCER',
        tier: 'BRASS',
        key: {
            S: {item: 'create_dd:steel_sheet'},
            B: {item: 'create_dd:bronze_block'},
            Z: { item: 'create_bnz:handheld_block_zapper'},
        },
        pattern: [
            'SSS',
            'BZB',
            'SSS',
        ],
        result: {
            item: 'create_bnz:handheld_block_zapper'
        }
    }).id('kubejs:modifiers/reinforcer/bronze');
    //Reinforcer lvl 2
    event.remove({id: "create_bnz:modifiers/reinforcer/rose"})
    event.custom({
        type: 'create_bnz:zapper_recipe',
        component: 'REINFORCER',
        tier: 'ROSE_QUARTZ',
        key: {
            S: {item: 'create:sturdy_sheet'},
            C: {item: 'create_dd:chromatic_block'},
            Z: { item: 'create_bnz:handheld_block_zapper'},
        },
        pattern: [
            'SSS',
            'CZC',
            'SSS'
        ],
        result: {
            item: 'create_bnz:handheld_block_zapper'
        }
    }).id('kubejs:modifiers/reinforcer/chromatic');
    //Reinforcer lvl 3
    event.remove({id: "create_bnz:modifiers/reinforcer/obsidian"})
    event.custom({
        type: 'create_bnz:zapper_recipe',
        component: 'REINFORCER',
        tier: 'OBSIDIAN',
        key: {
            M: {item: 'create_dd:mithril_sheet'},
            O: {item: 'create_dd:overcharge_alloy_sheet'},
            S: {item: 'create_dd:shadow_steel_block'},
            R: {item: 'create_dd:refined_radiance_block'},
            Z: { item: 'create_bnz:handheld_block_zapper'},
        },
        pattern: [
            'MMM',
            'RZS',
            'OOO'
        ],
        result: {
            item: 'create_bnz:handheld_block_zapper'
        }
    }).id('kubejs:modifiers/reinforcer/refinedshadow');
    //Reinforcer lvl 4
    event.remove({id: "create_bnz:modifiers/reinforcer/echo"})
    event.custom({
        type: 'create_bnz:zapper_recipe',
        component: 'REINFORCER',
        tier: 'ECHO',
        key: {
            N: {item: 'createbigcannons:nethersteel_block'},
            S: {item: 'create_dd:shadow_steel_sheet'},
            G: {item: 'create_dd:stargaze_singularity_sheet'},
            R: {item: 'create_dd:refined_radiance_sheet'},
            Z: { item: 'create_bnz:handheld_block_zapper'},
        },
        pattern: [
            'SGR',
            'NZN',
            'RGS'
        ],
        result: {
            item: 'create_bnz:handheld_block_zapper'
        }
    }).id('kubejs:modifiers/reinforcer/singularity');
    //Body lvl 1
    event.remove({id: "create_bnz:modifiers/body/brass"})
    event.custom({
        type: 'create_bnz:zapper_recipe',
        component: 'BODY',
        tier: 'BRASS',
        key: {
            O: { item: 'minecraft:obsidian'},
            B: { item: 'create_dd:bronze_block'},
            Z: { item: 'create_bnz:handheld_block_zapper'},
        },
        pattern: [
            ' O ',
            'BZB',
            ' O '
        ],
        result: {
            item: 'create_bnz:handheld_block_zapper'
        }
    }).id('kubejs:modifiers/body/bronze');
    //Body lvl 2
    event.remove({id: "create_bnz:modifiers/body/rose"})
    event.custom({
        type: 'create_bnz:zapper_recipe',
        component: 'BODY',
        tier: 'ROSE_QUARTZ',
        key: {
            S: { item: 'create:sturdy_sheet'},
            C: { item: 'create_dd:chromatic_compound'},
            Z: { item: 'create_bnz:handheld_block_zapper'},
        },
        pattern: [
            ' S ',
            'CZC',
            ' S '
        ],
        result: {
            item: 'create_bnz:handheld_block_zapper'
        }
    }).id('kubejs:modifiers/body/chromatic');
    //Body lvl 3
    event.remove({id: "create_bnz:modifiers/body/obsidian"})
    event.custom({
        type: 'create_bnz:zapper_recipe',
        component: 'BODY',
        tier: 'OBSIDIAN',
        key: {
            N: { item: 'minecraft:netherite_ingot'},
            S: { item: 'create_dd:shadow_steel'},
            R: { item: 'create_dd:refined_radiance'},
            Z: { item: 'create_bnz:handheld_block_zapper'},
        },
        pattern: [
            ' N ',
            'SZR',
            ' N '
        ],
        result: {
            item: 'create_bnz:handheld_block_zapper'
        }
    }).id('kubejs:modifiers/body/refinedshadow');
    //Body lvl 4
    event.remove({id: "create_bnz:modifiers/body/echo"})
    event.custom({
        type: 'create_bnz:zapper_recipe',
        component: 'BODY',
        tier: 'ECHO',
        key: {
            N: { item: 'createbigcannons:nethersteel_ingot'},
            B: { item: 'bloodmagic:reagentbinding'},
            M: { item: 'malum:soul_stained_steel_ingot'},
            S: { item: 'create_dd:stargaze_singularity'},
            Z: { item: 'create_bnz:handheld_block_zapper'},
        },
        pattern: [
            ' N ',
            'MZB',
            ' S '
        ],
        result: {
            item: 'create_bnz:handheld_block_zapper'
        }
    }).id('kubejs:modifiers/body/singularity');
    //Retriever lvl 1
    event.remove({id: "create_bnz:modifiers/retriever/brass"})
    event.custom({
        type: 'create_bnz:zapper_recipe',
        component: 'RETRIEVER',
        tier: 'BRASS',
        key: {
            B: { item: 'create_dd:bronze_ingot'},
            H: {item: 'minecraft:hopper'},
            Z: { item: 'create_bnz:handheld_block_zapper'},
        },
        pattern: [
            'BZB',
            ' HB',
        ],
        result: {
            item: 'create_bnz:handheld_block_zapper'
        }
    }).id('kubejs:modifiers/retriever/bronze');
    //Retriever lvl 2
    event.remove({id: "create_bnz:modifiers/retriever/rose"})
    event.custom({
        type: 'create_bnz:zapper_recipe',
        component: 'RETRIEVER',
        tier: 'ROSE_QUARTZ',
        key: {
            C: { item: 'create_dd:chromatic_compound'},
            S: {item: 'create:smart_chute'},
            Z: { item: 'create_bnz:handheld_block_zapper'},
        },
        pattern: [
            'CZC',
            ' SC',
        ],
        result: {
            item: 'create_bnz:handheld_block_zapper'
        }
    }).id('kubejs:modifiers/retriever/chromatic');
    //Retriever lvl 3
    event.remove({id: "create_bnz:modifiers/retriever/obsidian"})
    event.custom({
        type: 'create_bnz:zapper_recipe',
        component: 'RETRIEVER',
        tier: 'OBSIDIAN',
        key: {
            O: { item: 'create_dd:overcharge_alloy'},
            R: {item: 'create_dd:refined_radiance'},
            C: {item: 'create_dd:calculation_mechanism'},
            Z: { item: 'create_bnz:handheld_block_zapper'},
        },
        pattern: [
            'OZR',
            ' CO',
        ],
        result: {
            item: 'create_bnz:handheld_block_zapper'
        }
    }).id('kubejs:modifiers/retriever/refined');
    //Retriever lvl 4
    event.remove({id: "create_bnz:modifiers/retriever/echo"})
    event.custom({
        type: 'create_bnz:zapper_recipe',
        component: 'RETRIEVER',
        tier: 'ECHO',
        key: {
            N: { item: 'alexscaves:scarlet_neodymium_ingot'},
            A: { item: 'alexscaves:azure_neodymium_ingot'},
            S: {item: 'create_dd:stargaze_singularity'},
            M: {item: 'bloodmagic:reagentmagnetism'},
            Z: { item: 'create_bnz:handheld_block_zapper'},
        },
        pattern: [
            'NZS',
            ' MA',
        ],
        result: {
            item: 'create_bnz:handheld_block_zapper'
        }
    }).id('kubejs:modifiers/retriever/singularity');
    //Stasis
    event.remove({id: "create_bnz:upgrades/stasis"})
    event.custom({
        type: 'create_bnz:zapper_recipe',
        component: 'STASIS',
        tier: 'SPECIAL',
        key: {
            V: { item: 'alexscaves:vanilla_ice_cream_scoop'},
            C: { item: 'alexscaves:chocolate_ice_cream_scoop'},
            S: { item: 'alexscaves:sweetberry_ice_cream_scoop'},
            I: { item: 'caves_delight:ice_cream_sandwich'},
            F: { item: 'create_dd:frozen_nugget'},
            G: { item: 'enlightened_end:glacium'},
            Z: { item: 'create_bnz:handheld_block_zapper'},
        },
        pattern: [
            'GVF',
            'CZS',
            'FIG',
        ],
        result: {
            item: 'create_bnz:handheld_block_zapper'
        }
    }).id('kubejs:upgrades/stasis');
})
