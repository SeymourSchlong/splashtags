const load = () => {
    const loadQueue = [];
    const banners = [
        {name: "vanilla",id: 'banner-vanilla'},
        {file:"./banners/Npl_Catalog_Season01_Lv01.png",colour:"001f65"},{file:"./banners/Npl_Catalog_Season01_Lv02.png",colour:"8e102c"},{file:"./banners/Npl_Catalog_Season01_Lv03.png",colour:"bb4d00"},{file:"./banners/Npl_Catalog_Season01_Lv04.png",colour:"3f92c5"},{file:"./banners/Npl_Catalog_Season01_Lv05.png",colour:"000000"},{file:"./banners/Npl_Catalog_Season01_Lv06.png",colour:"000000"},{file:"./banners/Npl_Catalog_Season01_Lv07.png",colour:"000000"},{file:"./banners/Npl_Catalog_Season01_Lv08.png",colour:"000000"},{file:"./banners/Npl_Catalog_Season01_Lv09.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv10.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv11.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv12.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv13.png",colour:"000705"},{file:"./banners/Npl_Catalog_Season01_Lv14.png",colour:"ebffbb"},{file:"./banners/Npl_Catalog_Season01_Lv15.png",colour:"070100"},{file:"./banners/Npl_Catalog_Season01_Lv16.png",colour:"f9e0ff"},{file:"./banners/Npl_Catalog_Season01_Lv17.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv18.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv19.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv20.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv21.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv22.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv23.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv24.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv25.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv26.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv27.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv28.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv29.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv30.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv31.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv32.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv33.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv34.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv35.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv36.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv37.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv38.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv39.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv40.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv41.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv42.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv43.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv44.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv45.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv46.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv47.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv48.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv49.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv50.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv51.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv52.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv53.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv54.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv55.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv56.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv57.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv58.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv59.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv60.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv61.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv62.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv63.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv64.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv65.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv66.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv67.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv68.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv69.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv70.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv71.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv72.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv73.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv74.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv75.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv76.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv77.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv78.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv79.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv80.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv81.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv82.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season02_Lv01.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season02_Lv02.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season03_Lv01.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season03_Lv02.png",colour:"ffffff"},{file:"./banners/Npl_Coop_Season01_Lv01.png",colour:"ffffff"},{file:"./banners/Npl_Coop_Season01_Lv02.png",colour:"ffffff"},{file:"./banners/Npl_Coop_Season01_Lv03.png",colour:"ffffff"},{file:"./banners/Npl_Coop_Season01_Lv04.png",colour:"ffffff"},{file:"./banners/Npl_Coop_Season01_Lv05.png",colour:"ffffff"},{file:"./banners/Npl_Coop_Season01_Lv06.png",colour:"ffffff"},{file:"./banners/Npl_Coop_Season01_Lv07.png",colour:"ffffff"},{file:"./banners/Npl_Coop_Season01_Lv08.png",colour:"ffffff"},{file:"./banners/Npl_Coop_Season01_Lv09.png",colour:"ffffff"},{file:"./banners/Npl_Coop_Season01_Lv10.png",colour:"ffffff"},{file:"./banners/Npl_Coop_Season03_Lv01.png",colour:"ffffff"},{file:"./banners/Npl_Coop_Season03_Lv02.png",colour:"ffffff"},{file:"./banners/Npl_Coop_Season03_Lv03.png",colour:"4e3000"},{file:"./banners/Npl_Coop_Season03_Lv04.png",colour:"ffffff"},{file:"./banners/Npl_Fsodr00.png",colour:"ffffff"},{file:"./banners/Npl_Lot_Season01_Lv01.png",colour:"4e3000"},{file:"./banners/Npl_Lot_Season02_Lv01.png",colour:"4e3000"},{file:"./banners/Npl_Lot_Season03_Lv01.png",colour:"4e3000"},{file:"./banners/Npl_Mng_Lv01.png",colour:"ffffff"},{file:"./banners/Npl_Mng_Lv02.png",colour:"ffffff"},{file:"./banners/Npl_Mng_Lv03.png",colour:"ffffff"},{file:"./banners/Npl_Trg_Season01_Lv01.png",colour:"ffffff"},{file:"./banners/Npl_Trg_Season01_Lv02.png",colour:"ffffff"},{file:"./banners/Npl_Trg_Season03_Lv01.png",colour:"ffffff"},{file:"./banners/Npl_Trg_Season03_Lv02.png",colour:"ffffff"},{file:"./banners/Npl_Tutorial00.png",colour:"ffffff"}
    ];
    
    const customBanners = [
        // @DeadLineSMB_art
        {
            name: 'bandCustom',id: 'banner-bands-custom'
        },
        {file: './custom/banners/deadline/Bottom_Feeders.png',colour: '54e170'},
        {file: './custom/banners/deadline/Chirpy_Chips.png',colour: '4afed7'},
        {file: './custom/banners/deadline/C-Side.png',colour: 'ffe421'},
        {file: './custom/banners/deadline/Ded-F1sh.png',colour: '0cffc3'},
        {file: './custom/banners/deadline/Diss-Pair.png',colour: 'bdfa57'},
        {file: './custom/banners/deadline/Front_Roe.png',colour: '37fe49'},
        {file: './custom/banners/deadline/High-Tide_Era.png',colour: 'ffffff'},
        {file: './custom/banners/deadline/Ink_Theory.png',colour: 'ffffff'},
        {file: './custom/banners/deadline/Off_the_Hook.png',colour: 'ffffff'},
        {file: './custom/banners/deadline/Omega-3.png',colour: 'ffffff'},
        {file: './custom/banners/deadline/SashiMori.png',colour: 'ffffff'},
        {file: './custom/banners/deadline/Wet_Floor.png',colour: 'ffffff'},

        // @ElectroDev
        {
            name: 'specCustom',id: 'banner-specials-custom'
        },
        {file: './custom/banners/electrodev/booyah.png',colour: 'ffffff'},
        {file: './custom/banners/electrodev/bubbler.png',colour: 'ffffff'},
        {file: './custom/banners/electrodev/crab.png',colour: 'ffffff'},
        {file: './custom/banners/electrodev/jet.png',colour: 'ffffff'},
        {file: './custom/banners/electrodev/missile.png',colour: 'ffffff'},
        {file: './custom/banners/electrodev/reef.png',colour: 'ffffff'},
        {file: './custom/banners/electrodev/stamp.png',colour: 'ffffff'},
        {file: './custom/banners/electrodev/storm.png',colour: 'ffffff'},
        {file: './custom/banners/electrodev/strike.png',colour: 'ffffff'},
        {file: './custom/banners/electrodev/tac.png',colour: 'ffffff'},
        {file: './custom/banners/electrodev/vac.png',colour: 'ffffff'},
        {file: './custom/banners/electrodev/wail.png',colour: 'ffffff'},
        {file: './custom/banners/electrodev/wave.png',colour: 'ffffff'},
        {file: './custom/banners/electrodev/zip.png',colour: 'ffffff'},
        {file: './custom/banners/electrodev/zooka.png',colour: 'ffffff'},
        //{file: './custom/banners/electrodev/chump.png',colour: 'ffffff'},
        //{file: './custom/banners/electrodev/kraken.png',colour: 'ffffff'},
        

        // @spaghettitron
        {
            name: 'mapsCustom',id: 'banner-stages-custom'
        },
        {file: './custom/banners/stages/brinewater.png',colour: 'ffffff'},
        {file: './custom/banners/stages/eeltail.png',colour: 'ffffff'},
        {file: './custom/banners/stages/flounder.png',colour: 'ffffff'},
        {file: './custom/banners/stages/hagglefish.png',colour: 'ffffff'},
        {file: './custom/banners/stages/hammerhead.png',colour: 'ffffff'},
        {file: './custom/banners/stages/inkblot.png',colour: 'ffffff'},
        {file: './custom/banners/stages/mahimahi.png',colour: 'ffffff'},
        {file: './custom/banners/stages/makomart.png',colour: 'ffffff'},
        {file: './custom/banners/stages/mincemeat.png',colour: 'ffffff'},
        {file: './custom/banners/stages/museum.png',colour: 'ffffff'},
        {file: './custom/banners/stages/scorchgorge.png',colour: 'ffffff'},
        {file: './custom/banners/stages/sturgeon.png',colour: 'ffffff'},
        {file: './custom/banners/stages/undertow.png',colour: 'ffffff'},
        {file: './custom/banners/stages/wahooworld.png',colour: 'ffffff'},
        // {file: './custom/banners/stages/manta.png',colour: 'ffffff'},
        // {file: './custom/banners/stages/umami.png',colour: 'ffffff'},
        {file: './custom/banners/stages/coop-gonefission.png',colour: 'ffffff'},
        {file: './custom/banners/stages/coop-maroonerbay.png',colour: 'ffffff'},
        {file: './custom/banners/stages/coop-sockeye.png',colour: 'ffffff'},
        {file: './custom/banners/stages/coop-spawninggrounds.png',colour: 'ffffff'},

        {
            name: 'miscCustom',id: 'banner-other-custom'
        },
        {file: './custom/banners/deepsea.png',colour: 'ffffff'},
        {file: './custom/banners/swapdoodle.png',colour: '222222'},
        {file: './custom/banners/octo_tutorial.png',colour: 'ffffff'},
        {file: './custom/banners/splatoon2.png',colour: 'ffffff'},
        {file: './custom/banners/squidjump.png',colour: 'ffffff'},
        {file: './custom/banners/camo-black.png',colour: 'ffffff'},
        {file: './custom/banners/catalog2.png',colour: 'ffffff'},

        {
            name: 'userCustom',id: 'banner-uploaded-custom'
        },
    ];
    
    const badges = [
        "NAME:coop#badge-salmon",
        "./badges/Badge_CoopBigRunTrophy_Lv00.png","./badges/Badge_CoopBigRunTrophy_Lv01.png","./badges/Badge_CoopBigRunTrophy_Lv02.png","./badges/Badge_CoopContestTrophy_Lv00.png","./badges/Badge_CoopContestTrophy_Lv01.png","./badges/Badge_CoopContestTrophy_Lv02.png","./badges/Badge_CoopBossKillNum_SakelienGiant_Lv00.png","./badges/Badge_CoopBossKillNum_SakelienGiant_Lv01.png","./badges/Badge_CoopBossKillNum_SakelienGiant_Lv02.png","./badges/Badge_CoopBossKillNum_SakeRope_Lv00.png","./badges/Badge_CoopBossKillNum_SakeRope_Lv01.png","./badges/Badge_CoopBossKillNum_SakeRope_Lv02.png","./badges/Badge_TotalKumaPoint_Lv00.png","./badges/Badge_TotalKumaPoint_Lv01.png","./badges/Badge_TotalKumaPoint_Lv02.png","./badges/Badge_CoopClearDangerRateMax.png",
        "./badges/Badge_CoopGrade_Normal_Shakedent_Lv00.png","./badges/Badge_CoopGrade_Normal_Shakedent_Lv01.png","./badges/Badge_CoopGrade_Normal_Shakedent_Lv02.png","./badges/Badge_CoopGrade_Normal_Shakedent_Lv03.png","./badges/Badge_CoopGrade_Normal_Shakeship_Lv00.png","./badges/Badge_CoopGrade_Normal_Shakeship_Lv01.png","./badges/Badge_CoopGrade_Normal_Shakeship_Lv02.png","./badges/Badge_CoopGrade_Normal_Shakeship_Lv03.png","./badges/Badge_CoopGrade_Normal_Shakespiral_Lv00.png","./badges/Badge_CoopGrade_Normal_Shakespiral_Lv01.png","./badges/Badge_CoopGrade_Normal_Shakespiral_Lv02.png","./badges/Badge_CoopGrade_Normal_Shakespiral_Lv03.png","./badges/Badge_CoopGrade_Normal_Shakeup_Lv00.png","./badges/Badge_CoopGrade_Normal_Shakeup_Lv01.png","./badges/Badge_CoopGrade_Normal_Shakeup_Lv02.png","./badges/Badge_CoopGrade_Normal_Shakeup_Lv03.png",
        "./badges/Badge_CoopRareEnemyKillNum_SakeArtillery_Lv00.png","./badges/Badge_CoopRareEnemyKillNum_SakeArtillery_Lv01.png","./badges/Badge_CoopRareEnemyKillNum_SakeArtillery_Lv02.png","./badges/Badge_CoopRareEnemyKillNum_SakeDolphin_Lv00.png","./badges/Badge_CoopRareEnemyKillNum_SakeDolphin_Lv01.png","./badges/Badge_CoopRareEnemyKillNum_SakeDolphin_Lv02.png","./badges/Badge_CoopRareEnemyKillNum_SakePillar_Lv00.png","./badges/Badge_CoopRareEnemyKillNum_SakePillar_Lv01.png","./badges/Badge_CoopRareEnemyKillNum_SakePillar_Lv02.png","./badges/Badge_CoopRareEnemyKillNum_SakeSaucer_Lv00.png","./badges/Badge_CoopRareEnemyKillNum_SakeSaucer_Lv01.png","./badges/Badge_CoopRareEnemyKillNum_SakeSaucer_Lv02.png","./badges/Badge_CoopRareEnemyKillNum_Sakediver_Lv00.png","./badges/Badge_CoopRareEnemyKillNum_Sakediver_Lv01.png","./badges/Badge_CoopRareEnemyKillNum_Sakediver_Lv02.png","./badges/Badge_CoopRareEnemyKillNum_SakelienBomber_Lv00.png","./badges/Badge_CoopRareEnemyKillNum_SakelienBomber_Lv01.png","./badges/Badge_CoopRareEnemyKillNum_SakelienBomber_Lv02.png","./badges/Badge_CoopRareEnemyKillNum_SakelienCupTwins_Lv00.png","./badges/Badge_CoopRareEnemyKillNum_SakelienCupTwins_Lv01.png","./badges/Badge_CoopRareEnemyKillNum_SakelienCupTwins_Lv02.png","./badges/Badge_CoopRareEnemyKillNum_SakelienShield_Lv00.png","./badges/Badge_CoopRareEnemyKillNum_SakelienShield_Lv01.png","./badges/Badge_CoopRareEnemyKillNum_SakelienShield_Lv02.png","./badges/Badge_CoopRareEnemyKillNum_SakelienSnake_Lv00.png","./badges/Badge_CoopRareEnemyKillNum_SakelienSnake_Lv01.png","./badges/Badge_CoopRareEnemyKillNum_SakelienSnake_Lv02.png","./badges/Badge_CoopRareEnemyKillNum_SakelienTower_Lv00.png","./badges/Badge_CoopRareEnemyKillNum_SakelienTower_Lv01.png","./badges/Badge_CoopRareEnemyKillNum_SakelienTower_Lv02.png","./badges/Badge_CoopRareEnemyKillNum_Sakerocket_Lv00.png","./badges/Badge_CoopRareEnemyKillNum_Sakerocket_Lv01.png","./badges/Badge_CoopRareEnemyKillNum_Sakerocket_Lv02.png",
        "NAME:mode#badge-gamemodes",
        "./badges/Badge_NawaBattlerCardNum_Lv00.png","./badges/Badge_NawaBattlerCardNum_Lv01.png","./badges/Badge_NawaBattlerCardNum_Lv02.png","./badges/Badge_NawaBattlerRank_Lv00.png","./badges/Badge_NawaBattlerRank_Lv01.png","./badges/Badge_NawaBattlerRank_Lv02.png","./badges/Badge_NawaBattlerWinAllNpcLevel3.png","./badges/Badge_WinCount_Pnt_Lv00.png","./badges/Badge_WinCount_Pnt_Lv01.png","./badges/Badge_WinCount_Pnt_Lv02.png","./badges/Badge_WinCount_Tcl_Atk_Lv00.png","./badges/Badge_WinCount_Tcl_Atk_Lv01.png","./badges/Badge_WinCount_Tcl_Def_Lv00.png","./badges/Badge_WinCount_Tcl_Def_Lv01.png","./badges/Badge_Udemae_Lv00.png","./badges/Badge_Udemae_Lv01.png","./badges/Badge_Udemae_Lv02.png","./badges/Badge_WinCount_Var_Lv00.png","./badges/Badge_WinCount_Var_Lv01.png","./badges/Badge_WinCount_Vcl_Lv00.png","./badges/Badge_WinCount_Vcl_Lv01.png","./badges/Badge_WinCount_Vgl_Lv00.png","./badges/Badge_WinCount_Vgl_Lv01.png","./badges/Badge_WinCount_Vlf_Lv00.png","./badges/Badge_WinCount_Vlf_Lv01.png","./badges/Badge_XRank_Lv00.png","./badges/Badge_XRank_Lv01.png","./badges/Badge_XRank_Lv02.png",
        "NAME:shop#badge-shops",
        "./badges/Badge_LimitedRewardLottery_Lv00.png","./badges/Badge_LimitedRewardLottery_Lv01.png","./badges/Badge_LimitedRewardLottery_Lv02.png","./badges/Badge_OrderFood_Lv00.png","./badges/Badge_OrderFood_Lv01.png","./badges/Badge_OrderFood_Lv02.png","./badges/Badge_OrderVendor_Lv00.png","./badges/Badge_OrderVendor_Lv01.png","./badges/Badge_SpendShop_Clothes_Lv00.png","./badges/Badge_SpendShop_Clothes_Lv01.png","./badges/Badge_SpendShop_Goods_Lv00.png","./badges/Badge_SpendShop_Goods_Lv01.png","./badges/Badge_SpendShop_Head_Lv00.png","./badges/Badge_SpendShop_Head_Lv01.png","./badges/Badge_SpendShop_Shoes_Lv00.png","./badges/Badge_SpendShop_Shoes_Lv01.png","./badges/Badge_SpendShop_Clothes_Fsodr_Lv00.png","./badges/Badge_SpendShop_Clothes_Fsodr_Lv01.png","./badges/Badge_SpendShop_Head_Fsodr_Lv00.png","./badges/Badge_SpendShop_Head_Fsodr_Lv01.png","./badges/Badge_SpendShop_Shoes_Fsodr_Lv00.png","./badges/Badge_SpendShop_Shoes_Fsodr_Lv01.png",
        "NAME:misc#badge-other",
        "./badges/Badge_PlayerRank_Lv00.png","./badges/Badge_PlayerRank_Lv01.png","./badges/Badge_PlayerRank_Lv02.png","./badges/Badge_PlayerRank_Lv03.png","./badges/Badge_PlayerRank_Lv04.png","./badges/Badge_PlayerRank_Lv05.png","./badges/Badge_PlayerRank_Lv06.png","./badges/Badge_PlayerRank_Lv07.png","./badges/Badge_PlayerRank_Lv08.png","./badges/Badge_PlayerRank_Lv09.png","./badges/Badge_PlayerRank_Lv10.png","./badges/Badge_PlayerRank_Lv11.png","./badges/Badge_SpendLottery_Lv00.png","./badges/Badge_SpendLottery_Lv01.png","./badges/Badge_SpendLottery_Lv02.png","./badges/Badge_CatalogueLevel_Lv00.png","./badges/Badge_CatalogueLevel_Lv01.png","./badges/Badge_FestRankMax.png","./badges/Badge_Mission_Lv00.png","./badges/Badge_Mission_Lv01.png","./badges/Badge_Mission_Lv02.png","./badges/Badge_Mission_Lv03.png","./badges/Badge_Mission_Lv04.png",
        "NAME:gear#badge-gear",
        "./badges/Badge_GearTotalRarity_B00_Lv00.png","./badges/Badge_GearTotalRarity_B00_Lv01.png","./badges/Badge_GearTotalRarity_B01_Lv00.png","./badges/Badge_GearTotalRarity_B01_Lv01.png","./badges/Badge_GearTotalRarity_B02_Lv00.png","./badges/Badge_GearTotalRarity_B02_Lv01.png","./badges/Badge_GearTotalRarity_B03_Lv00.png","./badges/Badge_GearTotalRarity_B03_Lv01.png","./badges/Badge_GearTotalRarity_B04_Lv00.png","./badges/Badge_GearTotalRarity_B04_Lv01.png","./badges/Badge_GearTotalRarity_B05_Lv00.png","./badges/Badge_GearTotalRarity_B05_Lv01.png","./badges/Badge_GearTotalRarity_B06_Lv00.png","./badges/Badge_GearTotalRarity_B06_Lv01.png","./badges/Badge_GearTotalRarity_B07_Lv00.png","./badges/Badge_GearTotalRarity_B07_Lv01.png","./badges/Badge_GearTotalRarity_B08_Lv00.png","./badges/Badge_GearTotalRarity_B08_Lv01.png","./badges/Badge_GearTotalRarity_B09_Lv00.png","./badges/Badge_GearTotalRarity_B09_Lv01.png","./badges/Badge_GearTotalRarity_B10_Lv00.png","./badges/Badge_GearTotalRarity_B10_Lv01.png","./badges/Badge_GearTotalRarity_B11_Lv00.png","./badges/Badge_GearTotalRarity_B11_Lv01.png","./badges/Badge_GearTotalRarity_B15_Lv00.png","./badges/Badge_GearTotalRarity_B15_Lv01.png","./badges/Badge_GearTotalRarity_B16_Lv00.png","./badges/Badge_GearTotalRarity_B16_Lv01.png","./badges/Badge_GearTotalRarity_B17_Lv00.png","./badges/Badge_GearTotalRarity_B17_Lv01.png","./badges/Badge_GearTotalRarity_B19_Lv00.png","./badges/Badge_GearTotalRarity_B19_Lv01.png","./badges/Badge_GearTotalRarity_B20_Lv00.png","./badges/Badge_GearTotalRarity_B20_Lv01.png","./badges/Badge_GearTotalRarity_B18_Lv00.png","./badges/Badge_GearTotalRarity_B18_Lv01.png",
        "NAME:spec#badge-specials",
        "./badges/Badge_WinCount_WeaponSp_SpBlower_Lv00.png","./badges/Badge_WinCount_WeaponSp_SpBlower_Lv01.png","./badges/Badge_WinCount_WeaponSp_SpBlower_Lv02.png","./badges/Badge_WinCount_WeaponSp_SpChariot_Lv00.png","./badges/Badge_WinCount_WeaponSp_SpChariot_Lv01.png","./badges/Badge_WinCount_WeaponSp_SpChariot_Lv02.png","./badges/Badge_WinCount_WeaponSp_SpEnergyStand_Lv00.png","./badges/Badge_WinCount_WeaponSp_SpEnergyStand_Lv01.png","./badges/Badge_WinCount_WeaponSp_SpEnergyStand_Lv02.png","./badges/Badge_WinCount_WeaponSp_SpGreatBarrier_Lv00.png","./badges/Badge_WinCount_WeaponSp_SpGreatBarrier_Lv01.png","./badges/Badge_WinCount_WeaponSp_SpGreatBarrier_Lv02.png","./badges/Badge_WinCount_WeaponSp_SpInkStorm_Lv00.png","./badges/Badge_WinCount_WeaponSp_SpInkStorm_Lv01.png","./badges/Badge_WinCount_WeaponSp_SpInkStorm_Lv02.png","./badges/Badge_WinCount_WeaponSp_SpJetpack_Lv00.png","./badges/Badge_WinCount_WeaponSp_SpJetpack_Lv01.png","./badges/Badge_WinCount_WeaponSp_SpJetpack_Lv02.png","./badges/Badge_WinCount_WeaponSp_SpMicroLaser_Lv00.png","./badges/Badge_WinCount_WeaponSp_SpMicroLaser_Lv01.png","./badges/Badge_WinCount_WeaponSp_SpMicroLaser_Lv02.png","./badges/Badge_WinCount_WeaponSp_SpMultiMissile_Lv00.png","./badges/Badge_WinCount_WeaponSp_SpMultiMissile_Lv01.png","./badges/Badge_WinCount_WeaponSp_SpMultiMissile_Lv02.png","./badges/Badge_WinCount_WeaponSp_SpNiceBall_Lv00.png","./badges/Badge_WinCount_WeaponSp_SpNiceBall_Lv01.png","./badges/Badge_WinCount_WeaponSp_SpNiceBall_Lv02.png","./badges/Badge_WinCount_WeaponSp_SpShockSonar_Lv00.png","./badges/Badge_WinCount_WeaponSp_SpShockSonar_Lv01.png","./badges/Badge_WinCount_WeaponSp_SpShockSonar_Lv02.png","./badges/Badge_WinCount_WeaponSp_SpSkewer_Lv00.png","./badges/Badge_WinCount_WeaponSp_SpSkewer_Lv01.png","./badges/Badge_WinCount_WeaponSp_SpSkewer_Lv02.png","./badges/Badge_WinCount_WeaponSp_SpSuperHook_Lv00.png","./badges/Badge_WinCount_WeaponSp_SpSuperHook_Lv01.png","./badges/Badge_WinCount_WeaponSp_SpSuperHook_Lv02.png","./badges/Badge_WinCount_WeaponSp_SpTripleTornado_Lv00.png","./badges/Badge_WinCount_WeaponSp_SpTripleTornado_Lv01.png","./badges/Badge_WinCount_WeaponSp_SpTripleTornado_Lv02.png","./badges/Badge_WinCount_WeaponSp_SpUltraShot_Lv00.png","./badges/Badge_WinCount_WeaponSp_SpUltraShot_Lv01.png","./badges/Badge_WinCount_WeaponSp_SpUltraShot_Lv02.png","./badges/Badge_WinCount_WeaponSp_SpUltraStamp_Lv00.png","./badges/Badge_WinCount_WeaponSp_SpUltraStamp_Lv01.png","./badges/Badge_WinCount_WeaponSp_SpUltraStamp_Lv02.png","./badges/Badge_WinCount_WeaponSp_SpCastle_Lv00.png","./badges/Badge_WinCount_WeaponSp_SpCastle_Lv01.png","./badges/Badge_WinCount_WeaponSp_SpCastle_Lv02.png","./badges/Badge_WinCount_WeaponSp_SpFirework_Lv00.png","./badges/Badge_WinCount_WeaponSp_SpFirework_Lv01.png","./badges/Badge_WinCount_WeaponSp_SpFirework_Lv02.png",
        "NAME:weps#badge-weapons",
"./badges/Badge_WeaponLevel_Blaster_LightShort_01_Lv00.png","./badges/Badge_WeaponLevel_Blaster_LightShort_01_Lv01.png",
        "./badges/Badge_WeaponLevel_Blaster_LightLong_00_Lv00.png","./badges/Badge_WeaponLevel_Blaster_LightLong_00_Lv01.png","./badges/Badge_WeaponLevel_Blaster_LightShort_00_Lv00.png","./badges/Badge_WeaponLevel_Blaster_LightShort_00_Lv01.png","./badges/Badge_WeaponLevel_Blaster_LightShort_01_Lv00.png","./badges/Badge_WeaponLevel_Blaster_LightShort_01_Lv01.png","./badges/Badge_WeaponLevel_Blaster_Light_00_Lv00.png","./badges/Badge_WeaponLevel_Blaster_Light_00_Lv01.png","./badges/Badge_WeaponLevel_Blaster_Light_01_Lv00.png","./badges/Badge_WeaponLevel_Blaster_Light_01_Lv01.png","./badges/Badge_WeaponLevel_Blaster_Long_00_Lv00.png","./badges/Badge_WeaponLevel_Blaster_Long_00_Lv01.png","./badges/Badge_WeaponLevel_Blaster_Middle_00_Lv00.png","./badges/Badge_WeaponLevel_Blaster_Middle_00_Lv01.png","./badges/Badge_WeaponLevel_Blaster_Short_00_Lv00.png","./badges/Badge_WeaponLevel_Blaster_Short_00_Lv01.png","./badges/Badge_WeaponLevel_Blaster_Short_01_Lv00.png","./badges/Badge_WeaponLevel_Blaster_Short_01_Lv01.png","./badges/Badge_WeaponLevel_Brush_Mini_00_Lv00.png","./badges/Badge_WeaponLevel_Brush_Mini_00_Lv01.png","./badges/Badge_WeaponLevel_Brush_Mini_01_Lv00.png","./badges/Badge_WeaponLevel_Brush_Mini_01_Lv01.png","./badges/Badge_WeaponLevel_Brush_Normal_00_Lv00.png","./badges/Badge_WeaponLevel_Brush_Normal_00_Lv01.png","./badges/Badge_WeaponLevel_Charger_Keeper_00_Lv00.png","./badges/Badge_WeaponLevel_Charger_Keeper_00_Lv01.png","./badges/Badge_WeaponLevel_Charger_Light_00_Lv00.png","./badges/Badge_WeaponLevel_Charger_Light_00_Lv01.png","./badges/Badge_WeaponLevel_Charger_LongScope_00_Lv00.png","./badges/Badge_WeaponLevel_Charger_LongScope_00_Lv01.png","./badges/Badge_WeaponLevel_Charger_Long_00_Lv00.png","./badges/Badge_WeaponLevel_Charger_Long_00_Lv01.png","./badges/Badge_WeaponLevel_Charger_NormalScope_00_Lv00.png","./badges/Badge_WeaponLevel_Charger_NormalScope_00_Lv01.png","./badges/Badge_WeaponLevel_Charger_NormalScope_01_Lv00.png","./badges/Badge_WeaponLevel_Charger_NormalScope_01_Lv01.png","./badges/Badge_WeaponLevel_Charger_Normal_00_Lv00.png","./badges/Badge_WeaponLevel_Charger_Normal_00_Lv01.png","./badges/Badge_WeaponLevel_Charger_Normal_01_Lv00.png","./badges/Badge_WeaponLevel_Charger_Normal_01_Lv01.png","./badges/Badge_WeaponLevel_Charger_Pencil_00_Lv00.png","./badges/Badge_WeaponLevel_Charger_Pencil_00_Lv01.png","./badges/Badge_WeaponLevel_Charger_Quick_00_Lv00.png","./badges/Badge_WeaponLevel_Charger_Quick_00_Lv01.png","./badges/Badge_WeaponLevel_Maneuver_Dual_00_Lv00.png","./badges/Badge_WeaponLevel_Maneuver_Dual_00_Lv01.png","./badges/Badge_WeaponLevel_Maneuver_Gallon_00_Lv00.png","./badges/Badge_WeaponLevel_Maneuver_Gallon_00_Lv01.png","./badges/Badge_WeaponLevel_Maneuver_Normal_00_Lv00.png","./badges/Badge_WeaponLevel_Maneuver_Normal_00_Lv01.png","./badges/Badge_WeaponLevel_Maneuver_Short_00_Lv00.png","./badges/Badge_WeaponLevel_Maneuver_Short_00_Lv01.png","./badges/Badge_WeaponLevel_Maneuver_Short_01_Lv00.png","./badges/Badge_WeaponLevel_Maneuver_Short_01_Lv01.png","./badges/Badge_WeaponLevel_Maneuver_Stepper_00_Lv00.png","./badges/Badge_WeaponLevel_Maneuver_Stepper_00_Lv01.png","./badges/Badge_WeaponLevel_Roller_Compact_00_Lv00.png","./badges/Badge_WeaponLevel_Roller_Compact_00_Lv01.png","./badges/Badge_WeaponLevel_Roller_Compact_01_Lv00.png","./badges/Badge_WeaponLevel_Roller_Compact_01_Lv01.png","./badges/Badge_WeaponLevel_Roller_Heavy_00_Lv00.png","./badges/Badge_WeaponLevel_Roller_Heavy_00_Lv01.png","./badges/Badge_WeaponLevel_Roller_Hunter_00_Lv00.png","./badges/Badge_WeaponLevel_Roller_Hunter_00_Lv01.png","./badges/Badge_WeaponLevel_Roller_Normal_00_Lv00.png","./badges/Badge_WeaponLevel_Roller_Normal_00_Lv01.png","./badges/Badge_WeaponLevel_Roller_Normal_01_Lv00.png","./badges/Badge_WeaponLevel_Roller_Normal_01_Lv01.png","./badges/Badge_WeaponLevel_Roller_Wide_00_Lv00.png","./badges/Badge_WeaponLevel_Roller_Wide_00_Lv01.png","./badges/Badge_WeaponLevel_Saber_Lite_00_Lv00.png","./badges/Badge_WeaponLevel_Saber_Lite_00_Lv01.png","./badges/Badge_WeaponLevel_Saber_Normal_00_Lv00.png","./badges/Badge_WeaponLevel_Saber_Normal_00_Lv01.png","./badges/Badge_WeaponLevel_Shelter_Compact_00_Lv00.png","./badges/Badge_WeaponLevel_Shelter_Compact_00_Lv01.png","./badges/Badge_WeaponLevel_Shelter_Normal_00_Lv00.png","./badges/Badge_WeaponLevel_Shelter_Normal_00_Lv01.png","./badges/Badge_WeaponLevel_Shelter_Wide_00_Lv00.png","./badges/Badge_WeaponLevel_Shelter_Wide_00_Lv01.png","./badges/Badge_WeaponLevel_Shooter_Blaze_00_Lv00.png","./badges/Badge_WeaponLevel_Shooter_Blaze_00_Lv01.png","./badges/Badge_WeaponLevel_Shooter_Blaze_01_Lv00.png","./badges/Badge_WeaponLevel_Shooter_Blaze_01_Lv01.png","./badges/Badge_WeaponLevel_Shooter_Expert_00_Lv00.png","./badges/Badge_WeaponLevel_Shooter_Expert_00_Lv01.png","./badges/Badge_WeaponLevel_Shooter_Expert_01_Lv00.png","./badges/Badge_WeaponLevel_Shooter_Expert_01_Lv01.png","./badges/Badge_WeaponLevel_Shooter_First_00_Lv00.png","./badges/Badge_WeaponLevel_Shooter_First_00_Lv01.png","./badges/Badge_WeaponLevel_Shooter_First_01_Lv00.png","./badges/Badge_WeaponLevel_Shooter_First_01_Lv01.png","./badges/Badge_WeaponLevel_Shooter_Flash_00_Lv00.png","./badges/Badge_WeaponLevel_Shooter_Flash_00_Lv01.png","./badges/Badge_WeaponLevel_Shooter_Gravity_00_Lv00.png","./badges/Badge_WeaponLevel_Shooter_Gravity_00_Lv01.png","./badges/Badge_WeaponLevel_Shooter_Heavy_00_Lv00.png","./badges/Badge_WeaponLevel_Shooter_Heavy_00_Lv01.png","./badges/Badge_WeaponLevel_Shooter_Heavy_01_Lv00.png","./badges/Badge_WeaponLevel_Shooter_Heavy_01_Lv01.png","./badges/Badge_WeaponLevel_Shooter_Long_00_Lv00.png","./badges/Badge_WeaponLevel_Shooter_Long_00_Lv01.png","./badges/Badge_WeaponLevel_Shooter_Long_01_Lv00.png","./badges/Badge_WeaponLevel_Shooter_Long_01_Lv01.png","./badges/Badge_WeaponLevel_Shooter_Normal_00_Lv00.png","./badges/Badge_WeaponLevel_Shooter_Normal_00_Lv01.png","./badges/Badge_WeaponLevel_Shooter_Normal_01_Lv00.png","./badges/Badge_WeaponLevel_Shooter_Normal_01_Lv01.png","./badges/Badge_WeaponLevel_Shooter_Normal_H_Lv00.png","./badges/Badge_WeaponLevel_Shooter_Normal_H_Lv01.png","./badges/Badge_WeaponLevel_Shooter_Precision_00_Lv00.png","./badges/Badge_WeaponLevel_Shooter_Precision_00_Lv01.png","./badges/Badge_WeaponLevel_Shooter_Precision_01_Lv00.png","./badges/Badge_WeaponLevel_Shooter_Precision_01_Lv01.png","./badges/Badge_WeaponLevel_Shooter_QuickLong_00_Lv00.png","./badges/Badge_WeaponLevel_Shooter_QuickLong_00_Lv01.png","./badges/Badge_WeaponLevel_Shooter_QuickMiddle_00_Lv00.png","./badges/Badge_WeaponLevel_Shooter_QuickMiddle_00_Lv01.png","./badges/Badge_WeaponLevel_Shooter_QuickMiddle_01_Lv00.png","./badges/Badge_WeaponLevel_Shooter_QuickMiddle_01_Lv01.png","./badges/Badge_WeaponLevel_Shooter_Short_00_Lv00.png","./badges/Badge_WeaponLevel_Shooter_Short_00_Lv01.png","./badges/Badge_WeaponLevel_Shooter_Short_01_Lv00.png","./badges/Badge_WeaponLevel_Shooter_Short_01_Lv01.png","./badges/Badge_WeaponLevel_Shooter_TripleMiddle_00_Lv00.png","./badges/Badge_WeaponLevel_Shooter_TripleMiddle_00_Lv01.png","./badges/Badge_WeaponLevel_Shooter_TripleQuick_00_Lv00.png","./badges/Badge_WeaponLevel_Shooter_TripleQuick_00_Lv01.png","./badges/Badge_WeaponLevel_Shooter_TripleQuick_01_Lv00.png","./badges/Badge_WeaponLevel_Shooter_TripleQuick_01_Lv01.png","./badges/Badge_WeaponLevel_Slosher_Bathtub_00_Lv00.png","./badges/Badge_WeaponLevel_Slosher_Bathtub_00_Lv01.png","./badges/Badge_WeaponLevel_Slosher_Diffusion_00_Lv00.png","./badges/Badge_WeaponLevel_Slosher_Diffusion_00_Lv01.png","./badges/Badge_WeaponLevel_Slosher_Diffusion_01_Lv00.png","./badges/Badge_WeaponLevel_Slosher_Diffusion_01_Lv01.png","./badges/Badge_WeaponLevel_Slosher_Launcher_00_Lv00.png","./badges/Badge_WeaponLevel_Slosher_Launcher_00_Lv01.png","./badges/Badge_WeaponLevel_Slosher_Strong_00_Lv00.png","./badges/Badge_WeaponLevel_Slosher_Strong_00_Lv01.png","./badges/Badge_WeaponLevel_Slosher_Strong_01_Lv00.png","./badges/Badge_WeaponLevel_Slosher_Strong_01_Lv01.png","./badges/Badge_WeaponLevel_Slosher_Washtub_00_Lv00.png","./badges/Badge_WeaponLevel_Slosher_Washtub_00_Lv01.png","./badges/Badge_WeaponLevel_Spinner_Downpour_00_Lv00.png","./badges/Badge_WeaponLevel_Spinner_Downpour_00_Lv01.png","./badges/Badge_WeaponLevel_Spinner_Hyper_00_Lv00.png","./badges/Badge_WeaponLevel_Spinner_Hyper_00_Lv01.png","./badges/Badge_WeaponLevel_Spinner_Quick_00_Lv00.png","./badges/Badge_WeaponLevel_Spinner_Quick_00_Lv01.png","./badges/Badge_WeaponLevel_Spinner_Quick_01_Lv00.png","./badges/Badge_WeaponLevel_Spinner_Quick_01_Lv01.png","./badges/Badge_WeaponLevel_Spinner_Serein_00_Lv00.png","./badges/Badge_WeaponLevel_Spinner_Serein_00_Lv01.png","./badges/Badge_WeaponLevel_Spinner_Standard_00_Lv00.png","./badges/Badge_WeaponLevel_Spinner_Standard_00_Lv01.png","./badges/Badge_WeaponLevel_Stringer_Normal_00_Lv00.png","./badges/Badge_WeaponLevel_Stringer_Normal_00_Lv01.png","./badges/Badge_WeaponLevel_Stringer_Short_00_Lv00.png","./badges/Badge_WeaponLevel_Stringer_Short_00_Lv01.png"
    ];
    
    const customBadges = [
        "NAME:wepsCustom#badge-weapons-custom",
        "./custom/badges/weapons/herogun1.png",
        "./custom/badges/weapons/herogun1_gold.png",
        "./custom/badges/weapons/herogun2.png",
        "./custom/badges/weapons/herogun2_gold.png",
        "./custom/badges/weapons/grizz_blaster.png",
        "./custom/badges/weapons/grizz_blaster_gold.png",
        "./custom/badges/weapons/grizz_brella.png",
        "./custom/badges/weapons/grizz_brella_gold.png",
        "./custom/badges/weapons/grizz_charger.png",
        "./custom/badges/weapons/grizz_charger_gold.png",
        "./custom/badges/weapons/grizz_slosher.png",
        "./custom/badges/weapons/grizz_slosher_gold.png",
        "./custom/badges/weapons/grizz_splatana.png",
        "./custom/badges/weapons/grizz_splatana_gold.png",
        "./custom/badges/weapons/grizz_stringer.png",
        "./custom/badges/weapons/grizz_stringer_gold.png",

        "NAME:subsCustom#badge-subs-custom",
        "./custom/badges/subs/buddy.png",
        "./custom/badges/subs/buddy_silver.png",
        "./custom/badges/subs/buddy_gold.png",
        "./custom/badges/subs/bomb.png",
        "./custom/badges/subs/bomb_silver.png",
        "./custom/badges/subs/bomb_gold.png",
        "./custom/badges/subs/suction.png",
        "./custom/badges/subs/suction_silver.png",
        "./custom/badges/subs/suction_gold.png",
        "./custom/badges/subs/burst.png",
        "./custom/badges/subs/burst_silver.png",
        "./custom/badges/subs/burst_gold.png",
        "./custom/badges/subs/sprinkler.png",
        "./custom/badges/subs/sprinkler_silver.png",
        "./custom/badges/subs/sprinkler_gold.png",
        "./custom/badges/subs/wall.png",
        "./custom/badges/subs/wall_silver.png",
        "./custom/badges/subs/wall_gold.png",
        "./custom/badges/subs/fizzy.png",
        "./custom/badges/subs/fizzy_silver.png",
        "./custom/badges/subs/fizzy_gold.png",
        "./custom/badges/subs/curling.png",
        "./custom/badges/subs/curling_silver.png",
        "./custom/badges/subs/curling_gold.png",
        "./custom/badges/subs/auto.png",
        "./custom/badges/subs/auto_silver.png",
        "./custom/badges/subs/auto_gold.png",
        "./custom/badges/subs/beacon.png",
        "./custom/badges/subs/beacon_silver.png",
        "./custom/badges/subs/beacon_gold.png",
        "./custom/badges/subs/point.png",
        "./custom/badges/subs/point_silver.png",
        "./custom/badges/subs/point_gold.png",
        "./custom/badges/subs/mine.png",
        "./custom/badges/subs/mine_silver.png",
        "./custom/badges/subs/mine_gold.png",
        "./custom/badges/subs/toxic.png",
        "./custom/badges/subs/toxic_silver.png",
        "./custom/badges/subs/toxic_gold.png",
        "./custom/badges/subs/linemarker.png",
        "./custom/badges/subs/linemarker_silver.png",
        "./custom/badges/subs/linemarker_gold.png",
        "./custom/badges/subs/torpedo.png",
        "./custom/badges/subs/torpedo_silver.png",
        "./custom/badges/subs/torpedo_gold.png",
        
        "./custom/badges/misc/splashdown.png",

        "NAME:modeCustom#badge-modes-custom",
        "./custom/badges/gamemodes/turfwar.png",
        "./custom/badges/gamemodes/private.png",
        "./custom/badges/gamemodes/league.png",
        "./custom/badges/gamemodes/tricolor.png",
        "./custom/badges/gamemodes/tableturf.png",

        "NAME:gearCustom#badge-weapons-custom",
        "./custom/badges/brands/amiibo.png",
        "./custom/badges/brands/cuttlegear.png",
        "./custom/badges/brands/grizzco.png",

        "NAME:coopCustom#badge-salmon-custom",
        "./custom/badges/salmonrun/smallfry.png",
        "./custom/badges/salmonrun/smallfry_silver.png",
        "./custom/badges/salmonrun/smallfry_gold.png",
        "./custom/badges/salmonrun/chum.png",
        "./custom/badges/salmonrun/chum_silver.png",
        "./custom/badges/salmonrun/chum_gold.png",
        "./custom/badges/salmonrun/cohock.png",
        "./custom/badges/salmonrun/cohock_silver.png",
        "./custom/badges/salmonrun/cohock_gold.png",
        "./custom/badges/salmonrun/goldie.png",
        "./custom/badges/salmonrun/goldie_silver.png",
        "./custom/badges/salmonrun/goldie_gold.png",
        "./custom/badges/salmonrun/mudmouth.png",
        "./custom/badges/salmonrun/mudmouth_silver.png",
        "./custom/badges/salmonrun/mudmouth_gold.png",
        "./custom/badges/salmonrun/griller.png",
        "./custom/badges/salmonrun/griller_silver.png",
        "./custom/badges/salmonrun/griller_gold.png",
        "./custom/badges/salmonrun/chinook.png",
        "./custom/badges/salmonrun/chinook_silver.png",
        "./custom/badges/salmonrun/chinook_gold.png",

        "NAME:charCustom#badge-chars-custom",
        "./custom/badges/npcs/sheldon.png",
        "./custom/badges/npcs/shelly_donny.png",
        "./custom/badges/npcs/liljudd.png",
        "./custom/badges/npcs/grizz.png",
        "./custom/badges/npcs/fuzz_octarian.png",
        "./custom/badges/npcs/shiver.png",
        "./custom/badges/npcs/frye.png",
        "./custom/badges/npcs/bigman.png",
        "./custom/badges/npcs/jelly_1.png",
        "./custom/badges/npcs/jelly_2.png",
        "./custom/badges/npcs/jelly_3.png",
        "./custom/badges/npcs/jelly_4.png",

        "NAME:iconCustom#badge-icons-custom",
        "./custom/badges/misc/deepcut.png",
        "./custom/badges/misc/shivericon.png",
        "./custom/badges/misc/fryeicon.png",
        "./custom/badges/misc/bigmanicon.png",
        "./custom/badges/misc/gacha.png",
        "./custom/badges/misc/seasnail.png",
        "./custom/badges/misc/shell.png",
        "./custom/badges/misc/record.png",
        "./custom/badges/misc/golden_brian.png",

        "NAME:spf2Custom#badge-fest2-custom",
        "./custom/badges/splatfests2/fest0_1.png",
        "./custom/badges/splatfests2/fest0_2.png",
        "./custom/badges/splatfests2/fest1_1.png",
        "./custom/badges/splatfests2/fest1_2.png",
        "./custom/badges/splatfests2/fest2_1.png",
        "./custom/badges/splatfests2/fest2_2.png",
        "./custom/badges/splatfests2/fest3_1.png",
        "./custom/badges/splatfests2/fest3_2.png",
        "./custom/badges/splatfests2/fest4_1.png",
        "./custom/badges/splatfests2/fest4_2.png",
        "./custom/badges/splatfests2/fest5_1.png",
        "./custom/badges/splatfests2/fest5_2.png",
        "./custom/badges/splatfests2/fest6_1.png",
        "./custom/badges/splatfests2/fest6_2.png",
        "./custom/badges/splatfests2/fest7_1.png",
        "./custom/badges/splatfests2/fest7_2.png",
        "./custom/badges/splatfests2/fest8_1.png",
        "./custom/badges/splatfests2/fest8_2.png",
        "./custom/badges/splatfests2/fest9_1.png",
        "./custom/badges/splatfests2/fest9_2.png",
        "./custom/badges/splatfests2/fest10_1.png",
        "./custom/badges/splatfests2/fest10_2.png",
        "./custom/badges/splatfests2/fest11_1.png",
        "./custom/badges/splatfests2/fest11_2.png",
        "./custom/badges/splatfests2/fest12_1.png",
        "./custom/badges/splatfests2/fest12_2.png",
        "./custom/badges/splatfests2/fest13_1.png",
        "./custom/badges/splatfests2/fest13_2.png",
        "./custom/badges/splatfests2/fest14_1.png",
        "./custom/badges/splatfests2/fest14_2.png",
        "./custom/badges/splatfests2/fest15_1.png",
        "./custom/badges/splatfests2/fest15_2.png",
        "./custom/badges/splatfests2/fest16_1.png",
        "./custom/badges/splatfests2/fest16_2.png",
        "./custom/badges/splatfests2/fest17_1.png",
        "./custom/badges/splatfests2/fest17_2.png",
        "./custom/badges/splatfests2/fest18_1.png",
        "./custom/badges/splatfests2/fest18_2.png",
        "./custom/badges/splatfests2/fest19_1.png",
        "./custom/badges/splatfests2/fest19_2.png",
        "./custom/badges/splatfests2/fest20_1.png",
        "./custom/badges/splatfests2/fest20_2.png",
        "./custom/badges/splatfests2/fest21_1.png",
        "./custom/badges/splatfests2/fest21_2.png",
        "./custom/badges/splatfests2/fest22_1.png",
        "./custom/badges/splatfests2/fest22_2.png",

        "NAME:spf3Custom#badge-fest3-custom",
        "./custom/badges/splatfests3/fest0_1.png",
        "./custom/badges/splatfests3/fest0_2.png",
        "./custom/badges/splatfests3/fest0_3.png",
        "./custom/badges/splatfests3/fest1_1.png",
        "./custom/badges/splatfests3/fest1_2.png",
        "./custom/badges/splatfests3/fest1_3.png",
        "./custom/badges/splatfests3/fest2_1.png",
        "./custom/badges/splatfests3/fest2_2.png",
        "./custom/badges/splatfests3/fest2_3.png",
        "./custom/badges/splatfests3/fest3_1.png",
        "./custom/badges/splatfests3/fest3_2.png",
        "./custom/badges/splatfests3/fest3_3.png",
        "./custom/badges/splatfests3/fest4_1.png",
        "./custom/badges/splatfests3/fest4_2.png",
        "./custom/badges/splatfests3/fest4_3.png",

        "NAME:cakeCustom#badge-memcake-custom",
        "./custom/badges/memcakes/memcake_1.png",
        "./custom/badges/memcakes/memcake_2.png",
        "./custom/badges/memcakes/memcake_3.png",
        "./custom/badges/memcakes/memcake_4.png",
        "./custom/badges/memcakes/memcake_5.png",
        "./custom/badges/memcakes/memcake_6.png",
        "./custom/badges/memcakes/memcake_7.png",
        "./custom/badges/memcakes/memcake_8.png",
        "./custom/badges/memcakes/memcake_9.png",
        "./custom/badges/memcakes/memcake_10.png",
        "./custom/badges/memcakes/memcake_11.png",
        "./custom/badges/memcakes/memcake_12.png",
        "./custom/badges/memcakes/memcake_13.png",
        "./custom/badges/memcakes/memcake_14.png",
        "./custom/badges/memcakes/memcake_15.png",
        "./custom/badges/memcakes/memcake_16.png",
        "./custom/badges/memcakes/memcake_17.png",
        "./custom/badges/memcakes/memcake_18.png",
        "./custom/badges/memcakes/memcake_19.png",
        "./custom/badges/memcakes/memcake_20.png",
        "./custom/badges/memcakes/memcake_21.png",
        "./custom/badges/memcakes/memcake_22.png",
        "./custom/badges/memcakes/memcake_23.png",
        "./custom/badges/memcakes/memcake_24.png",
        "./custom/badges/memcakes/memcake_25.png",
        "./custom/badges/memcakes/memcake_26.png",
        "./custom/badges/memcakes/memcake_27.png",
        "./custom/badges/memcakes/memcake_28.png",
        "./custom/badges/memcakes/memcake_29.png",
        "./custom/badges/memcakes/memcake_30.png",
        "./custom/badges/memcakes/memcake_31.png",
        "./custom/badges/memcakes/memcake_32.png",
        "./custom/badges/memcakes/memcake_33.png",
        "./custom/badges/memcakes/memcake_34.png",
        "./custom/badges/memcakes/memcake_35.png",
        "./custom/badges/memcakes/memcake_36.png",
        "./custom/badges/memcakes/memcake_37.png",
        "./custom/badges/memcakes/memcake_38.png",
        "./custom/badges/memcakes/memcake_39.png",
        "./custom/badges/memcakes/memcake_40.png",
        "./custom/badges/memcakes/memcake_41.png",
        "./custom/badges/memcakes/memcake_42.png",
        "./custom/badges/memcakes/memcake_43.png",
        "./custom/badges/memcakes/memcake_44.png",
        "./custom/badges/memcakes/memcake_45.png",
        "./custom/badges/memcakes/memcake_46.png",
        "./custom/badges/memcakes/memcake_47.png",
        "./custom/badges/memcakes/memcake_48.png",
        "./custom/badges/memcakes/memcake_49.png",
        "./custom/badges/memcakes/memcake_50.png",
        "./custom/badges/memcakes/memcake_51.png",
        "./custom/badges/memcakes/memcake_52.png",
        "./custom/badges/memcakes/memcake_53.png",
        "./custom/badges/memcakes/memcake_54.png",
        "./custom/badges/memcakes/memcake_55.png",
        "./custom/badges/memcakes/memcake_56.png",
        "./custom/badges/memcakes/memcake_57.png",
        "./custom/badges/memcakes/memcake_58.png",
        "./custom/badges/memcakes/memcake_59.png",
        "./custom/badges/memcakes/memcake_60.png",
        "./custom/badges/memcakes/memcake_61.png",
        "./custom/badges/memcakes/memcake_62.png",
        "./custom/badges/memcakes/memcake_63.png",
        "./custom/badges/memcakes/memcake_64.png",
        "./custom/badges/memcakes/memcake_65.png",
        "./custom/badges/memcakes/memcake_66.png",
        "./custom/badges/memcakes/memcake_67.png",
        "./custom/badges/memcakes/memcake_68.png",
        "./custom/badges/memcakes/memcake_69.png",
        "./custom/badges/memcakes/memcake_70.png",
        "./custom/badges/memcakes/memcake_71.png",
        "./custom/badges/memcakes/memcake_72.png",
        "./custom/badges/memcakes/memcake_73.png",
        "./custom/badges/memcakes/memcake_74.png",
        "./custom/badges/memcakes/memcake_75.png",
        "./custom/badges/memcakes/memcake_76.png",
        "./custom/badges/memcakes/memcake_77.png",
        "./custom/badges/memcakes/memcake_78.png",
        "./custom/badges/memcakes/memcake_79.png",
        "./custom/badges/memcakes/memcake_80.png",

        "NAME:userCustom#badge-upload-custom",
    ];

    const lang = {
        // English
        USen: {
            name: "English",
            titles: {
                first: ["No Title", "10-Tentacled","100%","24-Hour","5-Year-Planning","8-Tentacled","A Complex","A Real","A Simple","AKA","Absentminded","Actual","Aged","Alabaster","All-Natural","All-New","All-Purpose","Aloof","Alternan","Amateur","Ambidextrous","Ambiguous","Ammo Knights","Amped-Up","Anachronistic","Anarchy Battle","Ancient","Antarctic Ocean","Apprentice","Aquarium-Bound","Arcade-Hopping","Arctic Ocean","Artsy","Assertive","At-Work","Athletic","Attacking","Attention-Seeking","Auspicious","Avant-Garde","Avaricious","Awe-Inspiring","Awesome","Badlands","Barbed","Bargain-Binned","Basic","Beachy","Bearded","Beefy","Beloved","Better-Than-You","Big","Big Honkin'","Big-Money","Big-Sky","Big-Time","Birthday-Celebratin'","Blissed-Out","Bohemian","Bomb-tastic","Booming","Brand-New","Breakin'","Bright-Blue","Brinewater Springs","Brute","Buoyant","Bursting","Calamari","Camera-Facing","Captivating","Careless","Carnivorous","Cash-Stacking","Casual","Catch-of-the-Day","Celestial","Central","Champion","Chaotic","Chatty","Cheerful","Childish","Chilled-Out","Clever","Climactic","Clocked-Out","Clockwork","Cohock-Chargin'","Comfy-Cozy","Comic-Lovin'","Commanding","Competitive","Confident","Cool","Cooperative","Cosmic","Country-Born","Crab-N-Go","Crimson","Crush Station","Crusty","Cutting-Edge","DJ","Dandy","Dangerous","Dapper","Daring","Dark","Dawning","Day-Seizing","Daydreamin'","Daylit","Daytime","Dazzling","Dead-Tired","Deadeye","Decade-Experienced","Deep-Red","Deep-Sea","Defensive","Designer-Label","Destined","Die-Hard","Diving","Dodge-Rolling","Downtown","Drained","Drenched","Dry","Dynamite","Early-Bird","Early-Morning","Early-Summer","Easy-Peasy","Easygoing","Economical","Eeltail Alley","Elegant","Endangered","Enigmatic","Enlightened","Esoteric","Essential","Eternity's","Ever-Present","Everyday","Evil","Exhausted","Explosive","Faithful","Fall-Lovin'","Fall-Themed","Fame-Seeking","Fan-Favorite","Faraway","Fashionable","Fated","Fearful","Feral","Fierce","Fiery","Fightin'","First-Wave","Fish-Lovin'","Fishy","Flashy","Fleeing","Floaty","Flounder Heights","Fluffy","Fluid","Fluttering","Flying","Foggy","Forgetful","Fortunate","Fragrant","Freewheelin'","Fresh","Fresh-Catch","Front-Line","Frosty","Fruit-Lovin'","Full-Throttle","Fully","Fully Automatic","Fun","Fuzzy","Gaming","Gentle","Gigantified","Glam","Gleaming","Glimmering","Glistening","Go-Gettin'","Gone Fission Hydroplant","Gone-Fishin'","Goth","Gothic","Graceful","Greedy","Groundbreaking","Growing","Grown-Up","Grunge","Gullible","Hagglefish Market","Half","Half-Hearted","Hammerhead Bridge","Hard-Workin'","Headstrong","Heartfelt","Hearty","Hidden","High-End","High-Performing","High-Rolling","High-Tide","Hiking","Hip","Hip-Hop","Homebound","Homecoming","Honorary","Hotlantis","Howling","Hungry","Hungry, Hungry","Iced","Impish","Important","Incandescent","Incredible","Indian Ocean","Indoor","Infinite","Ink-Covered","Ink-Dripping","Ink-Sloshing","Inkblot Art Academy","Inkless","Inkopolis Square's","Inkopolis's Own","Inkopolitan","Inkslinging","Innocent","Instant","Instantaneous","Intuitive","Jet-Black","Job-Lovin'","Jumbo","Junior-Grade","Just Another","Last Year's","Late-Night","Late-Summer","Law-Breaking","Leaping","Legendary","Legit","Lethal","Lifelong","Light","Lightly Snacking","Lightning-Fast","Limited-Edition","Little","Lively","Livestreaming","Lobby-Bound","Local","Logical","Lonely","Long-Sleeved","Lost","Lost-and-Found","Lovable","Lovely","Low-Key","Low-Rolling","Low-Tide","Lucky","Made-to-Order","Mahi-Mahi Resort","MakoMart","Man-o'-Wardrobe","Marooner's Bay","Massive","Meaty","Meditative","Merciless","Microscopic","Mid-Rush","Midday","Midnight","Midsummer","Midwinter","Mild-Mannered","Mincemeat Metalworks","Mind-Blowing","Miraculous","Mischievous","Mod","Modern","Monochrome","Mostly","Mountain-Dwelling","Movie-Lovin'","Muddy","Multiplying","Museum d'Alfonsino","Mysterious","Nameless","National","Naut Couture","Neighborly","Next Year's","Next-Generation","Nice","Normcore","North Atlantic","North Pacific","Nostalgic","Nosy","Not-So-Fresh","Not-Streaming","Notable","Novice","Numb","Occasional","Oceanic","Official-Grizzco","Old-Fashioned","Optimistic","Orderly","Organized","Otherworldly","Out-of-Options","Outdoorsy","Overachieving","Overall","Overflowing","Overheated","Overpowering","Painted","Part-Time","Partying","Peppy","Perfect","Persistent","Phantasmagoric","Picture-Taking","Pitch-Black","Pointy","Pool-Ready","Poser","Praiseworthy","Precocious","Pretty Good","Private Battle","Pro","Processed","Procrastinating","Profreshional","Promising","Protective","Puffed-Up","Punk","Pure","Raw","Ready-to-Go","Realistic","Reckless","Regular Battle","Reincarnated","Reliable","Research-Conducting","Retro","Right-Handed","Rise-and-Shine","Rising","Roaming","Rockabilly","Rockin'","Royal","Running","SUPERFRESH","Sacred","Saddle-Straddlin'","Salmon Run","Salty","Sandy","Sappy","Savvy","Scientific","Scorch Gorge","Scorching","Seafaring","Seasick","Seaside","Seasoned","Second-Generation","Secret","Self-Identified","Self-Proclaimed","Self-Taught","Selfie-Snapping","Sensational","Sentimental","Serious","Shadowy","Sharp-Edged","Sharp-Eyed","Shining","Shortcut-Taking","Shy","Silent","Sizzlin'","Sketching","Slapdash","Sleepy","Slim","Slippery","Smooth","Sneaky","Snowy","So-Called","Sockeye Station","Soft","Soft-and-Fluffy","Solid","South Atlantic","South Pacific","Southpaw","Sparkling","Spawning Grounds","Spicy","Spineless","Splatlandian","Splatoon","Splatsville's","Splendid","Sporty","Spring-Fresh","Spring-Lovin'","Stale","Stand-Up","Stark-White","Steady","Stealthy","Steampunky","Stormy","Story Mode","Strict","Studious","Sturgeon Shipyard","Stylin'","Suave","Submersible","Subterranean","Summer-Breaking","Summer-Fun","Summer-Lovin'","Sun-Dried","Super-Duper Lucky","Super-Rare","Super-Scary","Superhuman","Supersonic","Swanky","Sweet","Sweet-Toothed","Swole","Swoon-Worthy","Tableturf Battling","Tagalong","Tasteless","Tear-Stained","Tech-Minded","Tenacious","Terrestrial","The","The Best","The City's Own","The Crater's","The Eternal","The Final","The First","The GOAT","The Great","The Lone","The One and Only","The Original","The Real Ultimate","The Shoal's Own","The Strongest","The True Ultimate","The Usual","The Very First","Third-Eye-Opened","Third-Gen","This Century's Best","This Year's","Thunderous","Tidy","Time-Traveling","Today's","Toon-Lovin'","Top-Ranked","Traditional","Traveling","Trending","Trendsetting","Trendy","Tricolor Battle","Turbo","Turn-of-the-Century","Twilight","Ultra","Unarmed","Unblemished","Underground","Undertow Spillway","Unflappable","Unnoticed","Unperceived","Unprecedented","Unrivaled","Unstoppable","Unyielding","Up-and-at-'Em","Vacationing","Veggie-Lovin'","Vindictive","Vintage","Virtual","Vulnerable","Wahoo World","Wandering","Wannabe","Warm-and-Cozy","Watchful","Water-Breathing","Watery","Wave-Riding","Whimsical","Wibbly-Wobbly","Wicked-Fresh","Wild","Windy","Winter-Breaking","Winter-Lovin'","Winter-Ready","Wiped-Out","Wizened","Won't-Lose","Woodsy","World's Best","X Battle","Yesterday's","Young","Zipped-Lips","amiibo-Collecting"],
                last: ["No Title", ".52 Gal User",".96 Gal User","AI","Actor","Adventurer","Adviser","Aerospray User","Afro","Agent","Agent 1","Agent 2","Agent 3","Agent 4","Agent 8","All-Arounder","Ammo Knights Regular","Android","Angel","Angle Shooter User","Angler","Annaki Model","Apprentice","Archdemon","Artisan","Artist","Assistant","Assistant Manager","Astronaut","Athlete","Atlantean","Aunt","Author","Autobomb User","Avocado Roll","B-Boy","B-Girl","Ballpoint Splatling User","Bamboozler 14 User","Barazushi Model","Barber","Bass Dropper","Bear","Beautician","Beginner","Berserker","Bifocal Wearer","Big Boss","Big Brother","Big Bubbler User","Big Curls","Big Deal","Big Man Fan","Big Mouth","Big Sister","Big Swig Roller User","Bird","Bivalve","Blade of Grass","Blaster User","Bloblobber User","Board Gamer","Board Member","Bodyguard","Bookworm","Boot Model","Booyah","Booyah Bomb User","Boss","Bottom Feeders Fan","Bowl Cut","Boy","Braid Bearer","Brainiac","Brand Loyalist","Bride","Bro","Brother","Bug","Burst Bomb User","Butler","Butterfingers","Buzz-Cut","C-Side Superfan","CEO","Cabinet Member","Caller","Callie Fan","Camper","Carbon Roller User","Card Collector","Card Gamer","Carpaccio","Cat","Catfish","Caveman","Celeb","Celebrity","Cephalopod","Challenger","Champ","Chef","Chirpy Chips Fan","Chow Hound","City Boy","City Girl","Clam Blitz Enthusiast","Clam Blitz Legend","Clash Blaster User","Classic","Clerk","Clock Puncher","Clubgoer","Coach","Cold Chill","Comedian","Comic Artist","Comic Relief","Comrade","Contender","Content Creator","Coordinator","Cornrows","Crab","Crab Tank User","Creator","Crush Station Regular","Cub","Cupid","Curling Bomb User","Curly Hair","Cuttlegear Model","Cyclist","DJ","Dad","Damp Socks Fan","Dance Master","Dancer","Dapple Dualies User","Daughter","Dedf1sh Fan","Deep Cut Fan","Deity of Destruction","Demon","Designer","Detective","Dinosaur","Director","Diss-Pair Fan","Dodge Roller","Dog","Dolphin","Double-Bun","Dragon","Dried Fish","Driver","Drummer","Dualie Squelchers User","Duchess","Duke","Dynamo","Dynamo Roller User","E-liter 4K Scope User","E-liter 4K User","Eel Tamer","Egg","Elegance","Emberz Model","Employee","Enperry Model","Entertainer","Enthusiast","Entity","Equation","Executive","Expert","Explosher User","Extrovert","Eye of the Storm","Fade","Fam","Fashionista","Father","Festivalgoer","Fighter","Fillet","Firecracker","Firefin Model","Fish","Fish Ball","Fish Finder","Fish Print","Fisherfolk","Fist","Fit","Fizzy Bomb User","Fledgling","Flingza Roller User","Flotsam","Flower","Follower","Forehead","Foreman","Forge Model","Form","Free Spirit","Freebie","Freelancer","Freshman","Freshwater Fish","Fried Chicken","Friend","Front Roe Fan","Frye Fan","Fuzzball","Gamer","Geek","Gelatin","Ghost","Giant","Girl","Glasses Model","Glooga Dualies User","Gofer","Goo Tuber User","Grand Master","Grandchild","Grandma","Grandpa","Grease","Greaser","Groom","Groove","Group Member","Guardian","Guitarist","H-3 Nozzlenose User","Hat Model","Head","Head Honcho","Headbanger","Headliner","Heat Hater","Heavy Splatling User","Heel","Hero","Higher-Up","Hightide Era Fan","Hippie","Hipster","Hot-Spring Enjoyer","Hothead","Hotlantis Regular","Human","Humanity","Hunter","Hydra Splatling User","Iconoclast","Illusion","Imp","Influencer","Ink","Ink Mine User","Ink Storm User","Ink Theory Fan","Ink Vac User","Inkantation","Inkbrush User","Inkjet User","Inkline Model","Inkling","Introvert","Island Dweller","Item Collector","Jacket Model","Jellyfish","Jet Squelcher User","Jokester","Jumper","Kid","Killer Wail 5.1 User","King","Kingpin","Knight","Knit Model","Krak-On Model","L-3 Nozzlenose User","Layabout","Lead","Leader","Legend","Legendary Warrior","Life","Life Itself","Life of the Party","Lifestyle","Little Brother","Little Sister","Locker Rock Star","Lone Wolf","Lucky Duck","Luna Blaster User","Maestro","Magician","Mammal","Man-o'-Wardrobe Regular","Manager","Maniac","Manta Ray","Marie Fan","Marina Fan","Marinade","Mask","Material","Member","Memory","Mentor","Mermaid","Merperson","Middle Manager","Mincemeat","Mini Splatling User","Mirage","Mirror","Model","Mom","Monarch","Mood","Moon","Moray Eel","Mother","Mountaineer","Mountaintop Guru","Muscle","Mystery","N-ZAP User","Naut Couture Regular","Nautilus User","Ninja","Novice","Object of Affection","Octarian","Octo Life","Octobrush User","Octoling","Octoling Soldier","Octopus","Octopus Ink","Oden Bowl","Off the Hook Fan","Office Drone","Ordinary Person","Otaku","Outfit","Outlaw","Pack Leader","Painter","Palette","Paradigm","Part-Timer","Party Animal","Party Lover","Pauper","Pearl Fan","Penny-Pincher","Pet","Photographer","Pigtail Pro","Pilot","Plankton","Planner","Plumber","Point Sensor User","Polyglot","Ponytail","Pop Star","Power Egg","Predator","President","Prime Cut","Prince","Princess","Pro","Prodigy","Producer","Professor","Programmer","Protected Species","Punk","Queen","REEF-LUX 450 User","Raider","Rainmaker Enthusiast","Rainmaker Legend","Range Blaster User","Rapid Blaster Pro User","Rapid Blaster User","Rapper","Rebel","Recollection","Reefslider User","Remote Worker","Representative","Researcher","Rice Bowl","Ringleader","Risk-Taker","Robot","Rockenberg Model","Ronin","Rookie","Rookie of the Year","Ruffian","Salmon","Salmon Life","Salmon Run Legend","Salmon Runner","Saltwater Fish","Samurai","SashiMori Fan","Sashimi","Scientist","Sea Creature","Seafood","Secretary","Security Guard","Senior","Sensei","Shark","Shark Tamer","Sharp Dresser","Shield","Shirt Model","Shiver Fan","Sidekick","Sidestepper","Sightseer","Singer","Sis","Sister","Skalop Model","Skater","Slosher User","Sloshing Machine User","Slow Starter","Snacks","Sneaker Model","Snipewriter 5H User","Snowperson","Snowstorm","Son","Spiked Hair","Splash Mob Model","Splash Wall User","Splash-o-matic User","Splat Bomb User","Splat Bomber","Splat Brella User","Splat Charger User","Splat Dualies User","Splat Roller User","Splat Zones Enthusiast","Splat Zones Legend","Splatana Stamper User","Splatana Wiper User","Splatterscope User","Splattershot Jr. User","Splattershot Nova User","Splattershot Pro User","Splattershot User","Sploosh-o-matic User","Sprinkler User","Spy","Squeezer User","Squid","Squid Beakon User","Squid Ink","Squid Jerky","Squid Life","Squid Ring","Squid Roller","Squid Sisters Fan","Squid Squad Fan","Squid Surger","Squid, Inc.","SquidForce Model","Squiffer User","Stan","Stand-Up Comic","Stir-Fry","Story Mode Hero","Story Mode Legend","Streamer","Striker","Student","Style","Style Icon","Stylist","Subordinate","Such and Such","Suction Bomb User","Sun","Superhero","Superstar","Supervisor","Supporter","Surfer","Survivalist","Sushi","Swimmer","Switch-Hitter","Synth Player","System","Tabletop Gamer","Tableturf Battler","Tacticooler User","Takoroka Model","Target","Taste Tester","Teacher","Teardrop","Tee Model","Tenta Brella User","Tenta Missiles User","Tentatek Model","Tetra Dualies User","Therapist","Title Holder","Tofu","Toni Kensa Model","Topknot Knight","Tornado","Torpedo User","Tournament Competitor","Tower Control Enthusiast","Tower Control Legend","Toxic Mist User","Trainee","Trainer","Traveler","Trendsetter","Tri-Slosher User","Tri-Stringer User","Triple Inkstrike User","Trizooka User","Truth Teller","Tuna Tataki","Turf War Legend","Turf Warrior","Turquoise October Fan","Turtle","Ultimate Weapon","Ultra Stamp User","Umibozu","Uncle","Undercover Brella User","Underling","VP","Vice President","Viewer","Viking","Village Leader","Villain","Vitamin","Vocalist","Wall","Wallflower","Wanderer","Warrior","Wave Breaker User","Wave Rider","Weapon","Wet Floor Fan","Wet Hair","Worker","Workhorse","World Champ","Writer","Youngster","Youth","Zekko Model","Zink Model","Zipcaster User","ω-3 Fan"]
            },
            ui: {
                tabText: "Text",
                tabBanners: "Banners",
                tabBadges: "Badges",
                textLanguage: "Language",
                textName: "Name",
                textTitles: "Title",
                textRandomize: "Randomize",
                textSlot1: "Slot 1",
                textSlot2: "Slot 2",
                textSlot3: "Slot 3",
                buttonBoth: "Both Titles",
                buttonFirst: "First",
                buttonLast: "Last",
                buttonBanner: "Banner",
                buttonBadges: "Badges",
                buttonAll: "All",
                buttonDownload: "Download!",
                textMessage: "If there's any text errors, please DM me on Twitter!",
                textCustom: "Custom",
                textUpload: "Upload",
                textToggle: "Toggle",
                textColour: "Colour"
            },
            sections: {
                banners: {
                    vanilla: "Default",
                    bandCustom: 'Bands',
                    specCustom: 'Special Weapons',
                    mapsCustom: 'Stages',
                    miscCustom: 'Other',
                    userCustom: 'Uploaded',
                },
                badges: {
                    coop: "Salmon Run",
                    mode: "Gamemodes",
                    shop: "Shops",
                    misc: "Other",
                    gear: "Gear Brands",
                    spec: "Special Weapons",
                    weps: "Weapons",
                    wepsCustom: "Weapons",
                    subsCustom: "Subs/Specials",
                    modeCustom: "Gamemodes",
                    gearCustom: "Gear Brands",
                    coopCustom: "Salmon Run",
                    charCustom: "Characters",
                    iconCustom: "Misc",
                    spf2Custom: "Splatoon 2 Splatfests",
                    spf3Custom: "Splatoon 3 Splatfests",
                    cakeCustom: "Mem Cakes",
                    userCustom: "Uploaded"
                }
            },
            default: ["Splatlandian", "Youth"]
        },
        // Spanish (Latin America)
        USes: {
            name: "Español",
            titles: {
                last: ["Sin título", "100 % natural","desde hace décadas","residual","a medias","a cinco años vista","coleccionista de amiibo","calamáric","pinchadiscos","entrañable","a transistores","vacilante","virtual","en combates X","madrugador","a todas horas","perpetu","en combates amistosos","en cuerpo y alma","ocasional","impresionante","octópod","decápod","en pugnas tricolor","de desembocadura","en primera línea","nostálgic","de potra","terrenal","enorme","comil","a ratos","oceánic","a gran escala","desmesurad","intrépid","en el vestíbulo","pequeñ","de la montaña","laborios","agraciad","decidid","imbatible","espléndid","ingenu","cumpleañer","contemporáne","del año","a cielo abierto","cándid","arcaic","en Alterna","caprichos","animos","muy motivad","desarmad","instruid","vespertin","en Complejo Medusa","mejor que tú","acuos","en una pecera","feroz","chispeante","iluminad","de medalla","narcisista","sin igual","de fin de siglo","del siglo","muy querid","invernal","de tonos invernales","de recreo invernal","en el Atlántico Norte","en el Pacífico Norte","en el océano Ártico","a media jornada","de medianoche","del tablero carterritorial","del año pasado","a la antigua usanza","en edición limitada","del montón","propici","fiable","diestr","ambidiestr","zurd","sobredimensionad","entre semana","letal","inmaculad","extravagante","atemporal","magistral","clandestin","subterráne","sólid","branquiad","diurn","desnatad","del mediodía","fugaz","siempre list","de vacaciones","incandescente","sin fisuras","automátic","sensacional","sostenible","en el océano Índico","peligros","honorable","sentimental","hablador","más que aceptable","metomentodo","de mal perder","cósmic","protect","puntiagud","joven","decrépit","en crecimiento","madur","adelantad","precoz","exquisit","escalofriante","detallista","sofisticad","ordenad","aventajad","avezad","barbud","lógic","cronométric","certer","en Cisterna Navajuela","petad","autodidacta","chupacámara","segur","al natural","autoproclamad","congelad","glacial","esforzad","sin concesiones","recocinad","sin fallo","de gatillo fácil","eufóric","autoconsciente","rencarnad","a la ofensiva","de sangre fría","silencios","sin batería","a toda prisa","en combates privados","megadefinitiv","hambrient","acorralad","estilos","forof","malvad","hedonista","divertid","venid del futuro","anacrónic","prístin","original","de verano incipiente","salpicatintas","punzante","ídolo de masas","acoplad","marcad por el destino","aullador","vengativ","licuad","prodigios","distante","sin nadie más","solitari","en Cromópolis","cromopolitan","en la plaza de Cromópolis","de playa","dichos","literalmente","retratista","procrastinad","para el año próximo","de la boutique","pese a todo","de la armería","grunge","entintad","multiusos","tempestuos","exultante","dicharacher","sos","a tope de marcha","combativ","en directo","en diferido","inmejorable","lustros","hortera","oloros","en Museo del Pargo","en manga larga","alternativ","vanguardista","efímer","en el Atlántico Sur","en el Pacífico Sur","en el océano Antártico","robust","infantil","bien educad","de salón","de interior","al aire libre","tétric","en su apogeo","maj","por vías secundarias","a lo loco","primaveral","vigoros","del ayer","delicad","vivaz","omnipresente","proactiv","a la última","locuaz","bombástic","callad","por intuición","fotogénic","otoñal","de verano tardío","marchit","carmesí","desenfadad","delicios","delgad","loable","en modo historia","a medida","trascendental","supersónic","ventos","de altos vuelos","frugal","cabalgaolas","en formación","en sus inicios","persuasiv","gótic","veranieg","de tonos estivales","tímid","en Ultramarinos Orca","etern","influyente","de moda","refinad","en Instituto Coralino","náutic","recién pescad","de litoral","list para nadar","negr como la noche","exhaust","sincer","en serio","apasionad","de pura cepa","en Puente Salmón","trocead","sin precedentes","al alba","memorable","inspirad por las musas","exótic","raud y veloz","divin","secret","esotéric","de pie","inquiet","sonriente","como lienzo en blanco","impolut","celestial","sin blanca","en Balneario Aguasal","en El Cráter","desértic","melenud","perdid","de pies ligeros","a la fuga","centelleante","relampagueante","reluciente","esplendoros","a toda mecha","en ascenso","de alto rendimiento","en Spa Cala Bacalao","de marea baja","fervoros","realista","folclóric","persistente","con oficio","soporífer","a la fuerza","afortunad","errante","mañaner","lloros","submarin","sospechos","caótic","inocente","fier","dulce","de otro mundo","estival","vigilante","de segunda ola","de 3.ª generación","extremista","avaricios","insaciable","(nombre en clave)","de ciudad","a lo bruto","asilvestrad","níve","hipermegadefinitiv","en Desguace Tataki","en Central Pilpil","insensible","amable","amnésic","de pesca","contundente","y punto","retro","delineante","de Splatoon","novat","de recreo estival","primigeni","de primera generación","definitiv","superpoderos","insuperable","innovad","optimista","de los bosques","innombrable","a su aire","notable","ilimitad","chabacan","imperturbable","despiadad","sin rival","caiga quien caiga","incisiv","refulgente","perseverante","esponjos","glamuros","sobrehuman","titánic","asombros","batallador","rompedor","megaguay","a la carrera","dominguer","de pueblo","rockabilly","refrit","gélid","crepuscular","monocrom","tenebros","tradicional","de leyenda","amasafortunas","ambicios","en pos de la fama","somnolient","carnívor","de buen comer","golos","piscícola","loc por el picante","aplicad","frutícola","de marca","trotamundos","de dibujos animados","andar","cinéfil","comiquer","vegetarian","derrochador","juguet","soñador","emotiv","palpitante","imparable","prometedor","de última generación","en Fuerte Espiral","júnior","elegante","refrescante","recién cazad","maread","aficionad","rarísim","en Desfiladero Fumarola","acogedor","empapad","en Mercado Lenguado","predestinad","industrial","condimentad","llamativ","racional","meditativ","acurrucad","atlétic","deportista","viejun","de primera","del barrio","atronador","meteóric","de recreativas","tenaz","malicios","estudios","de verdad","hipermodern","chorreando tinta","desbordante","cautivador","de marea alta","gigantesc","nómada","a flote","en Bahía Deriva","negr como la tinta","despistad","al servicio de Don Oso","dur de pelar","envejecid","innat","steampunk","seri y formal","por postureo","campechan","boyante","en la lontananza","mol","roños","inflexible","a ritmo de hip-hop","a borbotones","pintad","prolífic","sin tinta","peluchos","en la plaza","a bote limpio","en penumbras","modern","mod","blanc como la nieve","subacuátic","sumergid","poper","sobresaliente","sabros","trasnochador","calcinante","azul como el cielo","travies","inadvertid","hech polvo","de confianza","en Pirañalandia","de la zapatería","guay","de El Remolino","aguerrid","cooperativ","a cubierto","en las sombras","a la defensiva","como es debido","consumid","vehemente","despampanante","dens","en la niebla","únic e inigualable","sin complejos","por lo bajini","de los accesorios","espabilad","sublime","perezos","de buen vestir","sin límites","blandengue","ambigu","de pleamar","explosiv","y tal y tal","como de costumbre","chapucer","enigmátic","ocult","en Salmon Run","en Presa salmónida","roj como un tomate","de lujo","resbaladiz","enlodad","mand","aquí otra vez","sencill","evasiv","de las variedades","descuidad","en vías de extinción","artístic","punki","cultureta","saleros","clamoros","de break dance","en Callejones Crustáceo","enamorad","escurrid al sol","fantasmagóric","en Astillero Beluga","en combates caóticos","tintelian","de Tintelia"],
                first: ["Sin título", "«¡Genial!»","Abuela","Abuelo","Acróbata","Actor","Actriz","Adepta","Adepto","Adiestrador","Adiestradora","Administrador","Administradora","ADN","Afiliada","Afiliado","Agente","Agente 1","Agente 2","Agente 3","Agente 4","Agente 8","Alcalde","Alcaldesa","Alevín","Alguien del montón","Alma de la fiesta","Alpinista","Amiga","Amigo","Androide","Anfibia","Anfibio","Ángel","Animal marino","Aperitivo","Aprendiz","Arcoíris","Arma","Arma terminal","Aro de calamar","Arponera","Arponero","Artesana","Artesano","Artista","As de asalto almeja","As del estilo pez dorado","As del estilo pintazonas","As del estilo territorial","As del estilo torre","As del giruptor","Asesor","Asesora","Asistente","Aspirante","Astronauta","Atleta","Autónoma","Autónomo","Aventurera","Aventurero","Ayudante","Bailarín","Bailarín de break","Bailarina","Bailarina de break","Bailonga","Bailongo","Bajista","Bárbara","Bárbaro","Barco de sushi","Baterista","Bebé","Becaria","Becario","Bellaca","Bellaco","Bengala","Bicho","Bivalvo","Bocazas","Bola de pelo","Bombardera","Bombardero","Bonificación","Buenrollera","Buenrollero","Bufón","Bufona","Buscapeces","Cabecilla","Calamar","Calamar por omisión","Camarada","Campeón","Campeón mundial","Campeona","Campeona mundial","Campista","Candidata","Candidato","Cangrejo","Cantante","Cañonera","Cañonero","Capataz","Carpacho","Catador","Catadora","Catedrática","Catedrático","Cazador","Cazadora","Cefalópodo","Celebridad","Cerebrito","Chica","Chica acalorada","Chica con aerógrafo","Chica con Ametrallógrafo","Chica con AR-CR0 450","Chica con Arcromatizador triple","Chica con aspersor","Chica con aspiratinta","Chica con Atomizador dual","Chica con atormentador","Chica con Azotintador brisa","Chica con Azotintador pro","Chica con baliza transportadora","Chica con bambufusil","Chica con Barredora dual","Chica con bola genializante","Chica con bomba básica","Chica con bomba carbónica","Chica con bomba deslizante","Chica con bomba rápida","Chica con bomba trampa","Chica con bomba ventosa","Chica con Brocha","Chica con cabeza lisa","Chica con cangrejobot","Chica con Cargaminas 5H","Chica con Cargatintas","Chica con Cargatintas con mira","Chica con coleta","Chica con coleta alta","Chica con coletas","Chica con cresta","Chica con Derramatic","Chica con Derramatic baño","Chica con Derramatic centrífugo","Chica con Derramatic triple","Chica con Derramatic turbo","Chica con Devastador","Chica con Devastador exprés","Chica con Difusor dual","Chica con Dinamorrodillo","Chica con dispensabebidas","Chica con emiteondas","Chica con Entintador 4K","Chica con Extintador","Chica con flequillo","Chica con flotiburón","Chica con Fundidora 525 dual","Chica con gancho tentacular","Chica con kalarrapid","Chica con lanzamisiles","Chica con Lanzatintas","Chica con Lanzatintas espacial","Chica con Lanzatintas novato","Chica con Lanzatintas plus","Chica con Marcador","Chica con Marcador fino","Chica con mechas onduladas","Chica con media melena","Chica con Megabarredora","Chica con megaburbuja","Chica con melena","Chica con melena ondulada","Chica con moño","Chica con motatrónic dual","Chica con nebulizador","Chica con N-ZAP","Chica con Paratintas","Chica con Paratintas clásico","Chica con Paratintas maxi","Chica con peinado afro","Chica con peinado asimétrico","Chica con peinado copete","Chica con peinado degradado","Chica con peinado informal","Chica con peinado mohicano","Chica con peinado tazón","Chica con pelo corto","Chica con pelo húmedo","Chica con Pincel","Chica con propulsor","Chica con rastreador","Chica con robobomba","Chica con Rodillo básico","Chica con Rodillo de carbono","Chica con Rodillo mágnum","Chica con Rodillo versátil","Chica con Salpicadora 2000","Chica con Salpicadora 3000","Chica con subtralladora","Chica con Superdevastador","Chica con Teledevastador","Chica con Telentintador 4K","Chica con telón de tinta","Chica con Tintambor ligero","Chica con Tintambor pesado","Chica con tintazuca triple","Chica con tintófono 5.1","Chica con Tintopresor","Chica con Tintralladora","Chica con Tintralladora ligera","Chica con tirabuzones","Chica con tiralíneas","Chica con tornado triple","Chica con torpedo","Chica con trenza","Chica con trenzas pegadas","Chica con Tubofusil","Chica con tupé","Chica con Turbodevastador","Chica con Ultradevastador","Chica con ultraselladora","Chico","Chico acalorado","Chico con aerógrafo","Chico con Ametrallógrafo","Chico con AR-CR0 450","Chico con Arcromatizador triple","Chico con aspersor","Chico con aspiratinta","Chico con Atomizador dual","Chico con atormentador","Chico con Azotintador brisa","Chico con Azotintador pro","Chico con baliza transportadora","Chico con bambufusil","Chico con Barredora dual","Chico con bola genializante","Chico con bomba básica","Chico con bomba carbónica","Chico con bomba deslizante","Chico con bomba rápida","Chico con bomba trampa","Chico con bomba ventosa","Chico con Brocha","Chico con cabeza lisa","Chico con cangrejobot","Chico con Cargaminas 5H","Chico con Cargatintas","Chico con Cargatintas con mira","Chico con coleta","Chico con coleta alta","Chico con coletas","Chico con cresta","Chico con Derramatic","Chico con Derramatic baño","Chico con Derramatic centrífugo","Chico con Derramatic triple","Chico con Derramatic turbo","Chico con Devastador","Chico con Devastador exprés","Chico con Difusor dual","Chico con Dinamorrodillo","Chico con dispensabebidas","Chico con emiteondas","Chico con Entintador 4K","Chico con Extintador","Chico con flequillo","Chico con flotiburón","Chico con Fundidora 525 dual","Chico con gancho tentacular","Chico con kalarrapid","Chico con lanzamisiles","Chico con Lanzatintas","Chico con Lanzatintas espacial","Chico con Lanzatintas novato","Chico con Lanzatintas plus","Chico con Marcador","Chico con Marcador fino","Chico con mechas onduladas","Chico con media melena","Chico con Megabarredora","Chico con megaburbuja","Chico con melena","Chico con melena ondulada","Chico con moño","Chico con motatrónic dual","Chico con nebulizador","Chico con N-ZAP","Chico con Paratintas","Chico con Paratintas clásico","Chico con Paratintas maxi","Chico con peinado afro","Chico con peinado asimétrico","Chico con peinado copete","Chico con peinado degradado","Chico con peinado informal","Chico con peinado mohicano","Chico con peinado tazón","Chico con pelo corto","Chico con pelo húmedo","Chico con Pincel","Chico con propulsor","Chico con rastreador","Chico con robobomba","Chico con Rodillo básico","Chico con Rodillo de carbono","Chico con Rodillo mágnum","Chico con Rodillo versátil","Chico con Salpicadora 2000","Chico con Salpicadora 3000","Chico con subtralladora","Chico con Superdevastador","Chico con Teledevastador","Chico con Telentintador 4K","Chico con telón de tinta","Chico con Tintambor ligero","Chico con Tintambor pesado","Chico con tintazuca triple","Chico con tintófono 5.1","Chico con Tintopresor","Chico con Tintralladora","Chico con Tintralladora ligera","Chico con tirabuzones","Chico con tiralíneas","Chico con tornado triple","Chico con torpedo","Chico con trenza","Chico con trenzas pegadas","Chico con Tubofusil","Chico con tupé","Chico con Turbodevastador","Chico con Ultradevastador","Chico con ultraselladora","Ciclista","Científica","Científico","Cocinera","Cocinero","Coleccionista de cartas","Coleccionista de objetos","Colega","Comediante","Compinche","Conductor","Conductora","Consejera","Consejero","Convocador","Convocadora","Coordinador","Coordinadora","Creador","Creador de contenido","Creadora","Creadora de contenido","Cría","Criatura marina","Crío","Cuencoarrocista","Cupido","Curranta","Curranta por horas","Currante","Currante por horas","Decorataquillas","Delegada","Delegado","Delfín","Dependienta","Dependiente","Depredador","Depredadora","Detective","Dibujante","Dinosaurio","Dios de la destrucción","Diosa de la destrucción","Diputada","Diputado","Director","Directora","Dirigente","Discotequera","Discotequero","Diseñador","Diseñadora","DJ","Docente","Dragón","Dragón abisal","Dragona","Dragona abisal","Ecuación","Ejecutiva","Ejecutivo","Ejemplar selecto","Elegancia personificada","Eminencia","Empleada","Empleado","Encantamiento","Encanto","Engendro","Engominada","Engominado","Ente calamárico","Ente pulpero","Ente salmonero","Entidad","Entrenador","Entrenadora","Entusiasta","Ermitaña","Ermitaño","Esbirra","Esbirro","Escapista","Escritor","Escritora","Escudo","Espécimen humano","Espécimen protegido","Espectador","Espectadora","Espectro","Espejismo","Espejo","Espía","Espíritu libre","Esteticista","Estilista","Estrella del pop","Estudiante","Exaltada","Exaltado","Experta","Experto","Famosilla","Famosillo","Fan de Angie","Fan de Annak","Fan de Arome","Fan de asalto almeja","Fan de Ascuax","Fan de Barazushi","Fan de Bottom Feeders","Fan de Cefalopop","Fan de Chirpy Chips","Fan de Chokkor","Fan de C-Side","Fan de Damp Socks","Fan de Dedf1sh","Fan de Diss-Pair","Fan de Ezko","Fan de Forima","Fan de Front Roe","Fan de Hightide Era","Fan de Ink Theory","Fan de Jimmon","Fan de Kalamas","Fan de Krakien","Fan de las Calamarciñas","Fan de Mar","Fan de Marina","Fan de Meddux","Fan de Megan","Fan de Moluskia","Fan de Obvius","Fan de Perla","Fan de Rayan","Fan de Rockenberg","Fan de Salmon Run","Fan de SashiMori","Fan de Sepioca","Fan de Skalop","Fan de Squid Squad","Fan de Tina","Fan de Tintaz","Fan de Tonken","Fan de Turquoise October","Fan de Wet Floor","Fan de ω-3","Fan del Clan Surimi","Fan del estilo pez dorado","Fan del estilo pintazonas","Fan del estilo territorial","Fan del estilo torre","Fan del modo historia","Fan del spa","Fantasiosa","Fantasioso","Fantasma marina","Fantasma marino","Festivalera","Festivalera de verano","Festivalero","Festivalero de verano","Fiestera","Fiestero","Filete","Flor","Fontanera","Fontanero","Forajida","Forajido","Forma corpórea","Fotógrafa","Fotógrafo","Frente","Friolera","Friolero","Gafotas","Gatita","Gatito","Gelatina","Gerente","Gigante","Gimnasta","Gladiador","Gladiadora","Gobernante","Gran competidor","Gran competidora","Gran maestra","Gran maestro","Granuja","Guaperas","Guapetón","Guapetona","Guardaespaldas","Guardián","Guardiana","Guasón","Guasona","Guerrera","Guerrera carterritorial","Guerrera legendaria","Guerrera octoamazona","Guerrero","Guerrero carterritorial","Guerrero legendario","Guerrero octoamazona","Guitarrista","Gurú","Gurú del estilo","Hechicera","Hechicero","Hermana","Hermanita","Hermanito","Hermano","Héroe","Heroína","Hierba","Hija","Hijo","Holgazán","Holgazana","Huevo","Humana","Humano","Humorista","Iconoclasta","Ídolo de Salmon Run","Ídolo del modo historia","Inexperta","Inexperto","Inkling","Insociable","Insolvente","Instructor de morenas","Instructor de tiburones","Instructora de morenas","Instructora de tiburones","Insulana","Insulano","Inteligencia artificial","Introvertida","Introvertido","Invasor","Invasora","Inventor","Inventora","Investigador","Investigadora","Jefa","Jefa de equipo","Jefaza","Jefazo","Jefe","Jefe de equipo","Jerifalte","Jovenzuela","Jovenzuelo","Jugador clásico","Jugador de tablero","Jugadora clásica","Jugadora de tablero","Jugón","Jugona","Lacaya","Lacayo","Lágrima","Lector empedernido","Lectora empedernida","Líder","Loba solitaria","Lobo solitario","Loca por el calzado","Loca por la ropa","Loca por las armas","Loca por las marcas","Loca por las variedades","Loca por los accesorios","Loco por el calzado","Loco por la ropa","Loco por las armas","Loco por las marcas","Loco por las variedades","Loco por los accesorios","Lonchafinista","Luna","Macarrilla","Madre","Maestra","Maestro","Maligna","Maligno","Mami","Mamífera","Mamífero","Manazas","Mandamás","Maniaca","Maniaco","Marcatendencias","Marisco","Máscara","Mascota","Medusa","Memoriosa","Memorioso","Mentalista","Mentor","Mentora","Misterio","Modelo","Modelo de botas","Modelo de camisas","Modelo de camisetas","Modelo de chaquetas","Modelo de gafas","Modelo de gorros","Modelo de jerséis","Modelo de vida","Modelo de zapatillas","Mojama","Monarca","Monologuista","Morena","Muchacha","Muchacho","Mula de tiro","Mulo de tiro","Muñeco de nieve","Musculitos","Nadador","Nadadora","Neófita","Neófito","Nieta","Nieto","Ninja","Novata del año","Novato del año","Novia","Novio","Nueva alumna","Nuevo alumno","Objetivo","Octariana","Octariano","Octoling","Oficinista","Ogresa","Ogro","Ojo del huracán","Organizador","Organizadora","Osa","Oso","Otaku","Padre","Pajarilla","Pajarillo","Papi","Paradigma","Pared","Pariente","Pasta de pescado","Patinador","Patinadora","Percha","Perrita","Perrito","Personalidad","Pescador","Pescadora","Pez","Pez de agua dulce","Pez de mar","Pez fósil","Pilota","Piloto","Pintor","Pintora","Plancton","Pluriempleada","Pluriempleado","Políglota","Portador de la verdad","Portadora de la verdad","Presidenta","Presidente","Princesa","Príncipe","Principiante","Prodigio","Productor","Productora","Profesor","Profesora","Programador","Programadora","Pulpo","Punto débil","Puño","Rapera","Rapero","Raya marina","Rebelde","Rebozado","Recién llegada","Recién llegado","Recuerdo","Reina","Remolón","Remolona","Representante","Resto de naufragio","Rey","Robot","Ronin","Salmón","Saltador","Saltadora","Saltatintas","Salteado de verduras","Samurái","Sashimi","Secretaria","Secretario","Segurata","Sensiblera","Sensiblero","Señorita","Señorito","Ser vivo","Servidor","Servidora","Sesera","Siluro","Simpatizante","Sirena","Socia","Socio","Sol","Soldado","Streamer","Subalterna","Subalterno","Suertuda","Suertudo","Superestrella","Superhéroe","Superheroína","Superior","Superiora","Supervisor","Supervisora","Superviviente","Surfista","Sushi","Tahúr","Tataki","Tazón de sopa","Tecladista","Temeraria","Temerario","Tía","Tía con carisma","Tiburón","Tinta","Tinta de calamar","Tinta de pulpo","Tío","Tío con carisma","Tira de calamar","Todo en una","Todo en uno","Todoterreno","Tofu","Tornado","Tortuga","Trabajador","Trabajador ambulante","Trabajadora","Trabajadora ambulante","Troglodita","Turista","Tutor","Tutora","Una cualquiera","Uno cualquiera","Urbanita","Vendehúmos","Ventisca","Veterana","Veterano","Viajante","Vicedirector","Vicedirectora","Víctima de la moda","Vigente campeón","Vigente campeona","Vikinga","Vikingo","Villana","Villano","Vinagreta","Vitamina","Vocalista","Yaya","Yayo","Zampabollos"] 
            },
            ui: {
                tabText: "Texto",
                tabBanners: "Fondo",
                tabBadges: "Insignias",
                textLanguage: "Idioma",
                textName: "Nombre",
                textTitles: "Alias",
                textRandomize: "Aleatorio",
                textSlot1: "Lugar 1",
                textSlot2: "Lugar 2",
                textSlot3: "Lugar 3",
                buttonBoth: "Ambos Alias",
                buttonFirst: "Primero",
                buttonLast: "Último",
                buttonBanner: "Fondo",
                buttonBadges: "Insignias",
                buttonAll: "Todas",
                buttonDownload: "Descargar!",
                textMessage: "Si hay algún error de texto, ¡envíame un mensaje privado en Twitter!",
                textCustom: "Personalizar",
                textUpload: "Subir",
                textToggle: "Activado",
                textColour: "Color"
            },
            sections: {
                banners: {
                    vanilla: "En el Juego",
                    bandCustom: 'Bandas',
                    specCustom: 'Especiales',
                    mapsCustom: 'Mapas',
                    miscCustom: 'Otro',
                    userCustom: 'Subido',
                },
                badges: {
                    coop: "Salmon Run",
                    mode: "Modos",
                    shop: "Tiendas",
                    misc: "Otro",
                    gear: "Marcas",
                    spec: "Especiales",
                    weps: "Armas",
                    wepsCustom: "Armas",
                    subsCustom: "Armas Secundarias",
                    modeCustom: "Modos",
                    gearCustom: "Marcas",
                    coopCustom: "Salmon Run",
                    charCustom: "Caracteres",
                    iconCustom: "Iconos",
                    spf2Custom: "Festivales 2",
                    spf3Custom: "Festivales 3",
                    cakeCustom: "Pastirrecuerdo",
                    userCustom: "Subido",
                }
            },
            default: ["Jovenzuelo", "tintelian"]
        },
        // Spanish (Spain)
        EUes: {
            name: "Español (MX)",
            titles: {
                last: ["Sin título", "100 % natural","desde hace décadas","microscópic","a medias","en cinco años","coleccionista de amiibo","calamáric","pinchadiscos","entrañable","de la tecnología","vacilante","virtual","en combates X","madrugador","a todas horas","perpetu","en combates amistosos","en cuerpo y alma","ocasional","impresionante","octópod","decápod","en combates tricolor","de desembocadura","en primera línea","nostálgic","recontrasuertud","terrenal","enorme","glot","a ratos","oceánic","a gran escala","desmesurad","audaz","en el vestíbulo","pequeñ","de la montaña","laborios","agraciad","decidid","imbatible","espléndid","ingenu","cumpleañer","contemporáne","del año","a cielo abierto","cándid","arcaic","en Alterna","caprichos","alegre","muy motivad","desarmad","intelectual","del día","en Complejo Medusa","incomparable","acuos","en una pecera","intens","chispeante","iluminad","de ls mejores","egocéntric","sin igual","de fin de siglo","del siglo","muy querid","invernal","de tonos invernales","de recreo invernal","en el Atlántico Norte","en el Pacífico Norte","en el océano Ártico","de medio tiempo","de medianoche","del tablero carterritorial","del año pasado","a la antigua","en edición limitada","del montón","propici","confiable","diestr","ambidiestr","zurd","sobredimensionad","entre semana","letal","inmaculad","bohemi","inmortal","magistral","clandestin","subterráne","sólid","branquiad","diurn","baj en grasas","del mediodía","fugaz","siempre list","de vacaciones","incandescente","ters","automátic","sensacional","sostenible","en el océano Índico","peligros","honorable","sentimental","hablador","aceptable","metiche","competitiv","cósmic","cuidador","puntiagud","joven","decrépit","en crecimiento","madur","adelantad","precoz","abundante","escalofriante","detallista","sofisticad","organizad","prometed","protector","barbud","lógic","cronométric","certer","en Desagüe Navajuela","musculos","autodidacta","robacámara","segur","desenfadad","autoproclamad","congelad","glacial","esforzad","acérrim","sobrecocid","perfeccionista","dócil","eufóric","autoconsciente","reencarnad","a la ofensiva","de sangre fría","silencios","sin batería","a toda prisa","en combates privados","megadefinitiv","hambrient","acorralad","estilos","intransigente","malvad","hedonista","divertid","viajer en el tiempo","anacrónic","primigeni","original","solead","salpicatintas","afilad","ídolo de masas","acoplad","marcad por el destino","aullador","vengativ","fluid","prodigios","distante","independiente","solitari","en Cromópolis","cromopolitan","en la plaza de Cromópolis","de playa","dichos","literalmente","retratista","procrastinad","del año que viene","de Prêt-à-Ventouse","a pesar de todo","de Armería Todotinta","grunge","entintad","multiusos","tempestuos","fenomenal","verde","apestos","la onda","combativ","en vivo y directo","en retransmisión","inmejorable","fuerte","peludit","oloros","en Museo del Pargo","de manga larga","alternativ","vanguardista","efímer","en el Atlántico Sur","en el Pacífico Sur","en el océano Antártico","robust","infantil","bien educad","encerrad","de interior","de exterior","astut","en su apogeo","buena gente","por vías alternas","a lo loco","primaveral","esplendoros","del ayer","delicad","vivaz","omnipresente","proactiv","a la moda","parlanch","bombástic","callad","por intuición","fotogénic","otoñal","de verano tardío","marchit","carmesí","relajad","agradable","delgad","loable","en modo historia","a la medida","trascendental","supersónic","airos","en las alturas","frugal","montaolas","en formación","en sus inicios","persuasiv","gótic","god","veranieg","de tonos estivales","tímid","en Ultramarinos Orca","etern","influyente","de moda","refinad","en Instituto Coralino","náutic","recién pescad","de litoral","list para nadar","negr como la noche","exhaust","sincer","seri","apasionad","real","en Puente Salmón","en pedacitos","sin precedentes","al alba","memorable","inspirad por las musas","misterios","rayo veloz","divin","secret","esotéric","de pie","inquiet","sonriente","como lienzo en blanco","pulcr","celestial","en bancarrota","en Balneario Aguasal","en El Cráter","desértic","melenud","perdid","de pies ligeros","a la fuga","radiante","relampagueante","reluciente","brillante","a toda mecha","en ascenso","de alto rendimiento","en Spa Cala Bacalao","de marea baja","fervoros","realista","folclóric","persistente","excepcional","obsolet","a la fuerza","afortunad","errante","mañaner","llor","submarin","sospechos","caótic","inocente","feroz","dulce","de otro mundo","estival","cautelos","de segunda generación","de 3.ª generación","extremista","codicios","avaricios","(así me dicen)","de ciudad","salvaje","silvestre","níve","hipermegadefinitiv","en Desguace Mero","en Hidrocentral Rebosante","insensible","amable","amnésic","de pesca","contundente","inigualable","retro","delineante","de Splatoon","novat","de recreo estival","primer","de primera generación","definitiv","superpoderos","insuperable","innovad","optimista","de los bosques","innombrable","libre","notable","ilimitad","de mal gusto","imperturbable","despiadad","sin rival","pase lo que pase","incisiv","refulgente","perseverante","esponjos","glamoros","superhuman","titánic","asombros","defensor","revolucionari","superchévere","a las carreras","dominguer","de pueblo","rockabilly","refrit","gélid","crepuscular","monocrom","tenebros","tradicional","legendari","tacañ","ambicios","en busca de fama","somnolient","carnívor","gourmet","de buen diente","piscícola","especiad","aplicad","frutícola","de marca","trotamundos","de dibujos animados","caminante","cinéfil","cómic","vegetarian","derrochador","lúdic","soñador","emotiv","ruidos","imparable","sin experiencia","de última generación","en Fuerte Espiral","júnior","elegante","refrescante","recién cazad","maread","aficionad","rarísim","en Desfiladero Fumarola","acogedor","empapad","en Mercado Lenguado","predestinad","industrial","condimentad","llamativ","racional","meditativ","acurrucad","atlétic","deportista","pasad de moda","de primera","del barrio","estruendos","meteóric","de las maquinitas","tenaz","malicios","estudios","de verdad","supermodern","chorreando tinta","desbordante","cautivador","de marea alta","gigantesc","nómada","a flote","en Bahía Deriva","negr como la tinta","distraíd","al servicio de Don Oso","recién levantad","envejecid","innat","steampunk","formal","superficial","espontáne","flotante","lejan","chévere","hediond","inflexible","del hip-hop","detonante","pintad","proliferante","sin tinta","suave y sedos","en la plaza","rebotador","sombrí","modern","mod","blanc como la nieve","subacuátic","sumergid","enamorad del pop","sobresaliente","pura sabrosura","trasnochador","calcinante","azul como el cielo","ocurrente","inadvertid","cansadísim","de confianza","en Pirañalandia","de Calzando Fuerte","fresc","de El Remolino","aguerrid","cooperativ","furtiv","en las sombras","a la defensiva","ordenad","agotad","vehemente","despampanante","dens","en la niebla","únic e inigualable","sin complejos","discret","de Estilo Nautilo","espabilad","sublime","perezos","de buen vestir","sin límites","blandengue","ambigu","arenos","explosiv","en general","como de costumbre","trampos","enigmátic","ocult","en Salmon Run","en Presa salmónida","roj como un tomate","de lujo","resbaladiz","enlodad","imponente","de regreso","sencill","evasiv","de Miscelánea Abisal","descuidad","en vías de extinción","artístic","punk","cult","salad","clamoros","de break dance","en Callejones Crustáceo","enamorad","escurrid al sol","fantasmagóric","en Astillero Beluga","en combates caóticos","tintelian","de Tintelia"],
                first: ["Sin título", "\"¡Genial!\"","Abuelita","Abuelito","Acróbata","Actor","Actriz","Actual campeón","Actual campeona","Administrador","Administradora","Admirador","Admiradora","ADN","Afiliada","Afiliado","Agente","Agente 1","Agente 2","Agente 3","Agente 4","Agente 8","Alcalde","Alcaldesa","Alguien del montón","Alma de la fiesta","Alpinista","Amiga","Amigo","Androide","Anfibia","Anfibio","Ángel","Anguila","Anillo de calamar","Animal marino","Apática","Apático","Aperitivo","Aprendiz","Arcoíris","Arma","Arma terminal","Arponera","Arponero","Arruinada","Arruinado","Artesana","Artesano","Artista","As de asalto almeja","As del estilo pez dorado","As del estilo pintazonas","As del estilo territorial","As del estilo torreón","As del giruptor","Asesor","Asesora","Asistente","Asocial","Aspirante","Astronauta","Atacante","Atleta","Autónoma","Autónomo","Autoridad","Ave","Aventurera","Aventurero","Ayudante","Bagre","Bailador","Bailadora","Bailarín","Bailarín urbano","Bailarina","Bailarina urbana","Bajista","Bárbara","Bárbaro","Barco de sushi","Baterista","Bebé","Bivalvo","Bola de pelo","Bombardera","Bombardero","Bravucón","Bravucona","Bromista","Buena onda","Buendiente","Bufón","Bufona","Buscafiestas","Buscapeces","Cabecilla","Calamar","Calamar por omisión","Camarada","Campeón","Campeón mundial","Campeona","Campeona mundial","Campista","Candidata","Candidato","Cangrejo","Cantante","Capataz","Carpacho","Catador","Catadora","Cavernícola","Cazador","Cazadora","Cefalópodo","Celebridad","Cerebrito","Charlatán","Charlatana","Chica","Chica acalorada","Chica con aerógrafo","Chica con AR-CR0 450","Chica con arcromatizador triple","Chica con aspersor","Chica con aspiratinta","Chica con atomizador dual","Chica con atormentador","Chica con azotintador brisa","Chica con azotintador Pro","Chica con baliza","Chica con bamzuka 14","Chica con barricada","Chica con berreón 5.1","Chica con bola genializante","Chica con bomba carbónica","Chica con bomba deslizante","Chica con bomba pegajosa","Chica con bucles","Chica con cabeza lisa","Chica con cangrejobot","Chica con cañón triple","Chica con cargaminas 5H","Chica con cargatintas","Chica con cola de caballo","Chica con coletitas","Chica con crestas","Chica con dardo resaltador","Chica con delineador","Chica con derramatic","Chica con derramatic baño","Chica con derramatic centrífugo","Chica con derramatic triple","Chica con derramatic XP","Chica con difusor dual","Chica con dispensabebidas","Chica con emiteondas","Chica con entintador 4K","Chica con entintubo","Chica con flequillo","Chica con flotiburón","Chica con fundidora 525 dual","Chica con gancho tentacular","Chica con garabateador","Chica con garabateador HD","Chica con garabateador PLM","Chica con garabateador Pro","Chica con globo entintado","Chica con hiperlanzamotas","Chica con lanzamisiles","Chica con lanzamotas","Chica con lanzamotas Nova","Chica con manguera ligera","Chica con manguera pesada","Chica con marcador grueso","Chica con media melena","Chica con megaburbuja","Chica con megasoplador","Chica con melena","Chica con melena ondulada","Chica con mina de tinta","Chica con moños","Chica con nautilo","Chica con nebulizador","Chica con N-ZAP","Chica con paratintas","Chica con paratintas discreto","Chica con paratintas forestal","Chica con peinado afro","Chica con peinado asimétrico","Chica con peinado casual","Chica con peinado degradado","Chica con peinado engominado","Chica con peinado honguito","Chica con peinado ondulado","Chica con peinado picudo","Chica con pelo corto","Chica con pelo húmedo","Chica con pelo recogido","Chica con pincel","Chica con pincel caligrafía","Chica con plasbomba","Chica con plumón","Chica con propulsor","Chica con rastreador","Chica con rizos","Chica con robobomba","Chica con rociador","Chica con rociador básico","Chica con rociador espacial","Chica con rociador Pro","Chica con rodillo básico","Chica con rodillo de carbono","Chica con rodillo mágnum","Chica con rodillo Pro","Chica con rodillo versátil","Chica con salpicadora 2000","Chica con salpicadora 3000","Chica con soplador dual","Chica con telecargatintas","Chica con telelanzamotas","Chica con telentintador 4K","Chica con tetra dual","Chica con tintopresor","Chica con tornado triple","Chica con torpedo","Chica con trenza","Chica con trenzas pegadas","Chica con turbolanzamotas","Chica con turbolanzamotas Pro","Chica con ultraselladora","Chica enérgica","Chico","Chico acalorado","Chico con aerógrafo","Chico con AR-CR0 450","Chico con arcromatizador triple","Chico con aspersor","Chico con aspiratinta","Chico con atomizador dual","Chico con atormentador","Chico con azotintador brisa","Chico con azotintador Pro","Chico con baliza","Chico con bamzuka 14","Chico con barricada","Chico con berreón 5.1","Chico con bola genializante","Chico con bomba carbónica","Chico con bomba deslizante","Chico con bomba pegajosa","Chico con bucles","Chico con cabeza lisa","Chico con cangrejobot","Chico con cañón triple","Chico con cargaminas 5H","Chico con cargatintas","Chico con cola de caballo","Chico con coletitas","Chico con crestas","Chico con dardo resaltador","Chico con delineador","Chico con derramatic","Chico con derramatic baño","Chico con derramatic centrífugo","Chico con derramatic triple","Chico con derramatic XP","Chico con difusor dual","Chico con dispensabebidas","Chico con emiteondas","Chico con entintador 4K","Chico con entintubo","Chico con flequillo","Chico con flotiburón","Chico con fundidora 525 dual","Chico con gancho tentacular","Chico con garabateador","Chico con garabateador HD","Chico con garabateador PLM","Chico con garabateador Pro","Chico con globo entintado","Chico con hiperlanzamotas","Chico con lanzamisiles","Chico con lanzamotas","Chico con lanzamotas Nova","Chico con manguera ligera","Chico con manguera pesada","Chico con marcador grueso","Chico con media melena","Chico con megaburbuja","Chico con megasoplador","Chico con melena","Chico con melena ondulada","Chico con mina de tinta","Chico con moños","Chico con nautilo","Chico con nebulizador","Chico con N-ZAP","Chico con paratintas","Chico con paratintas discreto","Chico con paratintas forestal","Chico con peinado afro","Chico con peinado asimétrico","Chico con peinado casual","Chico con peinado degradado","Chico con peinado engominado","Chico con peinado honguito","Chico con peinado ondulado","Chico con peinado picudo","Chico con pelo corto","Chico con pelo húmedo","Chico con pelo recogido","Chico con pincel","Chico con pincel caligrafía","Chico con plasbomba","Chico con plumón","Chico con propulsor","Chico con rastreador","Chico con rizos","Chico con robobomba","Chico con rociador","Chico con rociador básico","Chico con rociador espacial","Chico con rociador Pro","Chico con rodillo básico","Chico con rodillo de carbono","Chico con rodillo mágnum","Chico con rodillo Pro","Chico con rodillo versátil","Chico con salpicadora 2000","Chico con salpicadora 3000","Chico con soplador dual","Chico con telecargatintas","Chico con telelanzamotas","Chico con telentintador 4K","Chico con tetra dual","Chico con tintopresor","Chico con tornado triple","Chico con torpedo","Chico con trenza","Chico con trenzas pegadas","Chico con turbolanzamotas","Chico con turbolanzamotas Pro","Chico con ultraselladora","Chico enérgico","Ciclista","Científica","Científico","Citadina","Citadino","Cocinera","Cocinero","Cohete","Coleccionista de cartas","Coleccionista de objetos","Comediante","Compinche","Conductor","Conductora","Consejera","Consejero","Convocador","Convocadora","Coordinador","Coordinadora","Corte selecto","Creador","Creador de contenido","Creadora","Creadora de contenido","Cría","Criatura marina","Crío","Cuatro ojos","Cuerpo","Cupido","Decoracasilleros","Delegada","Delegado","Delfín","Depredador","Depredadora","Detective","Devoralibros","Dibujante","Dinosaurio","Dios de la destrucción","Diosa de la destrucción","Diputada","Diputado","Director","Director ejecutivo","Directora","Directora ejecutiva","Dirigente","Discotequera","Discotequero","Diseñador","Diseñadora","DJ","Docente","Dragón","Dragón abisal","Dragona","Dragona abisal","Ecuación","Ejecutiva","Ejecutivo","Elegancia personificada","Eminencia","Empleada","Empleado","Encantamiento","Encanto","Engendro","Engominada","Engominado","Ente calamárico","Ente pulpero","Ente salmonero","Entidad","Entrenador","Entrenadora","Entusiasta","Ermitaña","Ermitaño","Esbirra","Esbirro","Escapista","Escritor","Escritora","Escudo","Espécimen humano","Espécimen protegido","Espectador","Espectadora","Espectro","Espejismo","Espejo","Espía","Espíritu libre","Estado de ánimo","Esteticista","Estilista","Estilo","Estrella de pop","Estudiante","Exaltada","Exaltado","Experta","Experto","Famosita","Famosito","Fan de Angie","Fan de Annak","Fan de asalto almeja","Fan de Ascuax","Fan de Barazushi","Fan de Bottom Feeders","Fan de Cefalopop","Fan de Chirpy Chips","Fan de Damp Socks","Fan de Dedf1sh","Fan de Diss-Pair","Fan de Emperi","Fan de Forima","Fan de Front Roe","Fan de Hightide Era","Fan de Ink Theory","Fan de Kalamas","Fan de las Calamarciñas","Fan de los videojuegos","Fan de Mar","Fan de Marina","Fan de Meddux","Fan de Megan","Fan de Moluskia","Fan de Perla","Fan de Pulpioka","Fan de Rayan","Fan de Rockenberg","Fan de Salmon Run","Fan de SashiMori","Fan de Sepichón","Fan de Shachi","Fan de Skalop","Fan de Squid Squad","Fan de Tentáctica","Fan de Tina","Fan de Tinta comunal","Fan de Tintaz","Fan de Tonken","Fan de Turquoise October","Fan de Wet Floor","Fan de Zekko","Fan de ω-3","Fan del Clan Surimi","Fan del estilo pez dorado","Fan del estilo pintazonas","Fan del estilo territorial","Fan del estilo torreón","Fan del modo historia","Fan del spa","Fantasiosa","Fantasioso","Fantasma marina","Fantasma marino","Festivalera de verano","Festivalero de verano","Filete","Flor","Fontanera","Fontanero","Forajida","Forajido","Fotógrafa","Fotógrafo","Frente","Friolenta","Friolento","Fulanita","Fulanito","Gatita","Gatito","Gelatina","Gerente","Gigante","Gimnasta","Gladiador","Gladiadora","Gobernante","Gran competidor","Gran competidora","Gran maestra","Gran maestro","Guapetón","Guapetona","Guardaespaldas","Guardián","Guardiana","Guerrera","Guerrera carterritorial","Guerrera legendaria","Guerrero","Guerrero carterritorial","Guerrero legendario","Guitarrista","Gurú","Gurú del estilo","Hechicera","Hechicero","Hermana","Hermana del alma","Hermana mayor","Hermanita","Hermanito","Hermano","Hermano del alma","Hermano mayor","Héroe","Heroína","Hierba","Hija","Hijo","Holgazán","Holgazana","Huevecillo de poder","Huevo","Humana","Humano","Humorista","Huracán","Iconoclasta","Ídolo de Salmon Run","Ídolo del modo historia","Inexperta","Inexperto","Influencer","Inkling","Insecto","Instructor","Instructor de anguilas","Instructor de tiburones","Instructora","Instructora de anguilas","Instructora de tiburones","Inteligencia artificial","Introvertida","Introvertido","Invasor","Invasora","Inventor","Inventora","Investigador","Investigadora","Isleña","Isleño","Jefa","Jefa de equipo","Jefe","Jefe de equipo","Jovencita","Jovencito","Jugador clásico","Jugador de cartas","Jugador de mesa","Jugadora clásica","Jugadora de cartas","Jugadora de mesa","Lacaya","Lacayo","Lágrima","Leyenda","Líder","Loba solitaria","Lobo solitario","Loca por el calzado","Loca por la ropa","Loca por las armas","Loca por las marcas","Loca por las variedades","Loca por los accesorios","Loco por el calzado","Loco por la ropa","Loco por las armas","Loco por las marcas","Loco por las variedades","Loco por los accesorios","Luna","Madre","Maestra","Maestro","Maligna","Maligno","Mami","Mamífera","Mamífero","Mandamás","Maniaca","Maniaco","Marcatendencias","Marisco","Máscara","Mascota","Medusa","Memoriosa","Memorioso","Mentor","Mentora","Mezquina","Mezquino","Misterio","Modelo","Modelo de abrigos","Modelo de botas","Modelo de camisas","Modelo de camisetas","Modelo de gorros","Modelo de lentes","Modelo de suéteres","Modelo de tenis","Modelo de vida","Modista","Monarca","Monologuista","Muchacha","Muchacho","Mula","Muñeco de nieve","Musculitos","Nadador","Nadadora","Neófita","Neófito","Nieta","Nieto","Ninja","Novata del año","Novato del año","Novia","Novio","Nueva alumna","Nuevo alumno","Objetivo","Octariana","Octariano","Octoling","Octosoldado","Oficinista","Ogresa","Ogro","Organizador","Organizadora","Osa","Oso","Otaku","Padre","Papi","Paradigma","Pared","Pariente","Parrandera","Parrandero","Pasta de pescado","Patinador","Patinadora","Perrita","Perrito","Personalidad","Pescado seco","Pescador","Pescadora","Pez","Pez de agua dulce","Pez de mar","Pez fósil","Pilota","Piloto","Pintor","Pintora","Plancton","Plato de arroz","Plato de sopa","Pluriempleada","Pluriempleado","Políglota","Pollo frito","Portador de la verdad","Portadora de la verdad","Practicante","Presidenta","Presidente","Princesa","Príncipe","Principiante","Prodigio","Productor","Productora","Profesor","Profesora","Programador","Programadora","Pulpo","Punto débil","Puño","Rapera","Rapero","Raya marina","Rebelde","Recién llegada","Recién llegado","Recuerdo","Regalo","Reina","Representante","Resto de naufragio","Rey","Robot","Ronin","Ropa","Rufián","Rufiana","Salmón","Saltador","Saltadora","Saltatintas","Salteado de verduras","Samurái","Sashimi","Secretaria","Secretario","Seguidor","Seguidora","Semiempleada","Semiempleado","Señorita","Señorito","Ser vivo","Servidor","Servidora","Simpatizante","Sinvergüenza","Sirena","Socia","Socio","Sol","Soldado","Streamer","Subalterna","Subalterno","Suertuda","Suertudo","Superestrella","Superfan de C-Side","Superhéroe","Superheroína","Superior","Superiora","Supervisor","Supervisora","Superviviente","Surfista","Sushi","Tataki","Tecladista","Temeraria","Temerario","Terapeuta","Tía","Tiburón","Tinta","Tinta de calamar","Tinta de pulpo","Tío","Tipa con carisma","Tipo con carisma","Tira de calamar","Todoterreno","Tofu","Tormenta de nieve","Tornado","Torpe","Tortuga","Totalidad","Trabajador","Trabajador ambulante","Trabajadora","Trabajadora ambulante","Turista","Tutor","Tutora","Vendedor","Vendedora","Veterana","Veterano","Viajera","Viajero","Vicedirector","Vicedirectora","Víctima de la moda","Vigilante","Vikinga","Vikingo","Villana","Villano","Vinagreta","Vitamina","Vocalista"]
            },
            ui: {
                tabText: "Texto",
                tabBanners: "Fondo",
                tabBadges: "Insignias",
                textLanguage: "Idioma",
                textName: "Nombre",
                textTitles: "Títulos",
                textRandomize: "Aleatorio",
                textSlot1: "Lugar 1",
                textSlot2: "Lugar 2",
                textSlot3: "Lugar 3",
                buttonBoth: "Ambos Títulos",
                buttonFirst: "Primero",
                buttonLast: "Último",
                buttonBanner: "Fondo",
                buttonBadges: "Insignias",
                buttonAll: "Todas",
                buttonDownload: "Descargar!",
                textMessage: "Si hay algún error de texto, ¡envíame un mensaje privado en Twitter!",
                textCustom: "Personalizar",
                textUpload: "Subir",
                textToggle: "Activado",
                textColour: "Color"
            },
            sections: {
                banners: {
                    vanilla: "En el Juego",
                    bandCustom: 'Bandas',
                    specCustom: 'Especiales',
                    mapsCustom: 'Mapas',
                    miscCustom: 'Otro',
                    userCustom: 'Subido',
                },
                badges: {
                    coop: "Salmon Run",
                    mode: "Modos",
                    shop: "Tiendas",
                    misc: "Otro",
                    gear: "Marcas",
                    spec: "Especiales",
                    weps: "Armas",
                    wepsCustom: "Armas",
                    subsCustom: "Armas Secundarias",
                    modeCustom: "Modos",
                    gearCustom: "Marcas",
                    coopCustom: "Salmon Run",
                    charCustom: "Caracteres",
                    iconCustom: "Iconos",
                    spf2Custom: "Festivales 2",
                    spf3Custom: "Festivales 3",
                    cakeCustom: "Pastirrecuerdo",
                    userCustom: "Subido",
                }
            },
            default: ["Jovencito", "tintelian"]
        },
        // French (France)
        EUfr: {
            name: "Français",
            titles: {
                last: ["Pas de titre", "sans édulcorant","affichant 10 ans d'expérience","microscopique","fragmenté","d'ici cinq ans","collectionn d'amiibo","calamaresque","pro de la table de mixage","adorable","technophile","chancelant","virtuel","de match X","lève-tôt","24h/24","à vie","de match classique","à tomber","du dimanche","incroyable","à huit tentacules","à dix tentacules","de match tricolore","du Rab de Crabe","de première ligne","nostalgique","mégachanceu","terrestre","maousse","vorace","avant tout","océanique","chargeant les Sumoches","massi","audacieu","toujours dans le hall","choupi","montagnard","travailleu","éminent","perdu","méprisant la défaite","splendide","crédule","fêtant son anniv","du jour","de l'année","du firmament","innocent","antique","d'Alterna","capricieu","joyeu","au taquet","désarmé","intello","diurne","du lotissement Filament","condescendant","aqueu","d'aquarium","enflammé","grésillant","qui ouvre ses chakras","au top","central","gagneu","de fin de siècle","du siècle","bien-aimé","amoureu de l'hiver","hivernal","en vacances de neige","du nord de l'Atlantique","du nord du Pacifique","de l'océan Arctique","stagiaire","de minuit","champion de C&T","de l'an dernier","vintage","valable aujourd'hui","comme un autre","de bon augure","fiable","droiti","ambidextre","pataud","démesuré","du quotidien","fatal","immaculé","bohémien","éternel","royal","sans foi ni loi","souterrain","stable","doté d'ouïes","de jour","lég","de midi","immédiat","fin prêt","en congés","incandescent","tranquille","sur pilote automatique","qui fait sensation","au budget optimisé","de l'océan Indien","dangereu","prestigieu","à l'eau de rose","bavard","doué","fouineu","pugnace","cosmique","protect","piquant","jeune","parcheminé","croissant","mûr","toujours en action","précoce","suave","carrément flippant","ordonné","distingué","organisé","prometteu","virtuose","barbu","logique","à retardement","qui tire dans le mille","du réservoir Rigadelle","baraqué","autodidacte","à fond dans le selfie","ultra-confiant","au naturel","auto-proclamé","givré","rafraîchissant","âpre à la tâche","sans concession","en surchauffe","parfait","à la gâchette facile","en plein kif","et pas qu'un peu","réincarné","d'attaque","relax","discr","aux batteries vides","en pleine ruée","de match privé","suprême","gourmand","au pied du mur","en vogue","jusqu'au-boutiste","malfaisant","hédoniste","divertissant","venu du futur","anachronique","fondat","innovant","du début de l'été","encreu","incisi","suivi de son fan-club","de compagnie","marqué par le destin","hurlant à la lune","vindicati","fluide","miraculeu","distant","loin de la foule","solitaire","de la ville de Chromapolis","de la région de Chromapolis","du square de Chromapolis","côti","chanceu","ou presque","photographe","procrastinat","de l'an prochain","du Vestarium","à 100 %","de la Marée Armée","grunge","couvert d'encre","polyvalent","tempétueu","super classe","assez classe","moyennement classe","trop classe","frondeu","streameu","entre deux streams","suprêmissime","prêt à hiberner","hirsute","fragrant","des galeries Guppy","à manches longues","underground","d'avant-garde","instantané","du sud de l'Atlantique","du sud du Pacifique","de l'océan Austral","charnu","infantile","affable","casani","d'intérieur","d'extérieur","de l'ombre","de top qualité","plutôt pas mal","à fond sur les raccourcis","agité","amoureu du printemps","classe comme le printemps","jusqu'à hier","dou","plein d'entrain","dans l'instant présent","plein d'énergie","populaire","virevoletant","grandiloquent","bouche cousue","intuiti","face caméra","amoureu de l'automne","de la fin de l'été","de style automnal","écarlate","occasionnel","coquet","mince","digne d'éloge","du mode Histoire","sur mesure","important","supersonique","venteu","volant","grignoteu","dansant sur les vagues","bûcheu","nouve","sûr","gothique","goth","amoureu de l'été","estival","timide","du supermarché Cétacé","pour l'éternité","lanceu de tendances","dans le vent","stylé","de l'institut Calam'arts","des sept mers","tout du jour","du bord de mer","prêt à plonger","noir de jais","crevé","sincère","homologué","fidèle","certifié conforme","du pont Esturgeon","perfectionniste","sans précédent","de l'aube","festi","touché par la grâce","mystérieu","rapide comme l'éclair","sacré","secr","ésotérique","debout","en danseuse","éblouissant","d'albâtre","pur","céleste","sans une thune","des sources Sauret","du Cratère","des zones sauvages","suffisant","paumé","déserteu","en cavale","scintillant","pétillant","chatoyant","reluisant","à fond la caisse","en pleine ascension","performant","du club Ca$halot","à marée basse","chaleureu","réaliste","national","persévérant","hors pair","éculé","brutal","verni","en balade","matinal","larmoyant","des fonds marins","suspect","chaotique","sans fioriture","féroce","aimable","mystique","des beaux jours","à l'œil de lynx","de 2e génération","de la 3e génération","à fond les ballons","avide","cupide","de son surnom","du centre-ville","indomptable","sauvage","enneigé","ultime","de la casse Rascasse","de la centrale Anguilla","insensible","gentil","distrait","halieutique","blindé de thunes","inégalable","rétro","le crayon sur l'oreille","de Splatoon","novice","en vacances d'été","comme on en a jamais vu","de la première vague","final","plus fort que tout","sans pareil","dernier cri","optimiste","de la forêt","anonyme","en roue libre","à ne pas sous-estimer","tendant vers l'infini","aux goûts douteux","imperturbable","sans pitié","sans égal","paroxystique","caustique","étincelant","constant","au poil soyeux","glamour","surhumain","mastoc","hallucinant","expert","sans limites","classe de chez classe","galopant","en week-end","de la campagne","rockabilly","qui a toujours la frite","du cœur de l'hiver","du crépuscule","monochrome","sombre","traditionaliste","légendaire","économe","aspirant","avide de gloire","aux paupières lourdes","carnivore","épicurien","féru de bonbons","féru de poissons","épicé","marié à son boulot","fructivore","en édition limitée","féru de voyage","féru de cartoons","branché randos","féru de cinoche","féru de bédés","légumivore","plein aux as","gameu","enclin à la rêverie","sentimental","qui envoie du lourd","inarrêtable","néophyte","nouvelle génération","du bastion Colimaçon","junior","à la pointe de la mode","tout","fra","sujet au mal de mer","amat","ultra rare","du canyon aux colonnes","revigorant","trempé","du marché Grefin","suivant son destin","industriel","chevronné","m'as-tu-vu","en guerre avec les données","méditati","douillet","athlétique","sporti","archaïque","prodige","du voisinage","houleu","ultra rapide","de la salle d'arcade","tenace","espiègle","apprenti","à la pointe de la technologie","dégoulinant d'encre","débordant","captivant","à marée haute","gigantesque","en vadrouille","à flot","de l'épave des braves","noir d'encre","étourdi","attitré de M. Ours","au saut du lit","qui vieillit bien","","steampunk","sérieuse","sérieux","de Panurge","tranquillou","insubmersible","venu de loin","cool","pas-super-classe","inflexible","dingue de rap","plein de vie","peinturluré","proliférant","sans encre","emblématique de la ville","bondissant","louche","moderne","sélect","blanc mat","féru de plongée","immergé","branché","pro","essentiel","nocturne","brûlant","bleu pétant","chafouin","qui passe inaperçu","dormant debout","hésitant","du parc Carapince","du Pied agile","classe","de Calamarcade","dans la mêlée","coopérati","en planque","furti","vigilant","méthodique","lessivé","tête brûlée","qui déchire","sophistiqué","dans le brouillard","unique en son genre","semi-pro","muet","des Eaux-de-forme","futé","impérial","flegmatique","élégant","en pleine expansion","crainti","ambigu","sablonneu","explosi","global","typique","approximati","énigmatique","en loucedé","de Salmon Run","du barrage salmonoïde","rouge sombre","flashy","insaisissable","vaseu","rêvant de galons","prodigue","simple","enchaînant les esquives","de Coolypso","négligé","en voie d'extinction","artistique","punk","illuminé","du genre salé","retentissant","branché breakdance","de la banlieue Balibot","trognon","séché au soleil","fantasmagorique","du chantier Narval","de match anarchie","de la Contrée Clabousse","de Cité-Clabousse"],
                first: ["Pas de titre", "« Joli »","Accro à la Défense de zone","Accro à la Mission Bazookarpe","Accro à la Pluie de palourdes","Accro à l'Expédition risquée","Accro à Salmon Run","Accro au mode Histoire","Acolyte","Acteur","Actrice","Adepte de la balise de saut","Adepte de la bentorpille","Adepte de la bombe ballon","Adepte de la bombe curling","Adepte de la bombe gluante","Adepte de la bombe robot","Adepte de la bombe soda","Adepte de la bombe splash","Adepte de la brume toxique","Adepte de la fontaine","Adepte de la mine","Adepte de la pluie d'encre","Adepte de l'Aérogun","Adepte de l'Arroseur léger","Adepte de l'Arroseur lourd","Adepte de l'aspirencre","Adepte de l'Éclablaster","Adepte de l'Éclablaster XL","Adepte de l'Éclatana d'estampe","Adepte de l'Éclatana Doto","Adepte de l'Encrifugeur","Adepte de l'Épinceau","Adepte de l'Épinceau brosse","Adepte de l'Exteinteur","Adepte de l'Extraceur +","Adepte de l'Extraceur + zoom","Adepte de l'ultra-tamponneur","Adepte du Badigeonneur","Adepte du Badigeonneur stylo","Adepte du Badigeonneur XS","Adepte du Bassineur","Adepte du Bimbamboum","Adepte du Calibre 2000","Adepte du Calibre 3000","Adepte du cavalsquale","Adepte du chromo-jet","Adepte du Compresseur","Adepte du Concentraceur","Adepte du Concentraceur zoom","Adepte du Coralux 450","Adepte du crabe d'assaut","Adepte du Crayon X - 5H","Adepte du Décap'express","Adepte du Dépoteur","Adepte du détecteur","Adepte du Détoneur","Adepte du Détubeur","Adepte du districool","Adepte du Double encreur","Adepte du Double Kelvin 525","Adepte du Double moucheteur","Adepte du Double nettoyeur","Adepte du Double voltigeur","Adepte du Dynamo-rouleau","Adepte du Flexi-rouleau","Adepte du haut-perceur 5.1","Adepte du jolizator","Adepte du lance-rafales","Adepte du Lanceur spatial","Adepte du Liquidateur","Adepte du Liquidateur Jr.","Adepte du Liquidateur pro","Adepte du Marqueur léger","Adepte du Marqueur lourd","Adepte du multi-missile","Adepte du mur d'encre","Adepte du Nautilus","Adepte du Nettoyeur XL","Adepte du N-ZAP","Adepte du Para-encre","Adepte du Para-encre espion","Adepte du Para-encre XL","Adepte du Proxiblaster","Adepte du Rafablaster","Adepte du ricocheur","Adepte du Rouleau","Adepte du Rouleau carbone","Adepte du Rouleau large","Adepte du Seauceur","Adepte du sonar paf","Adepte du super bouclier","Adepte du Super Mollusque","Adepte du trimissile tornade","Adepte du Trisperceur","Adepte du Turboblaster","Adepte du Turboblaster pro","Adjoint","Adjointe","Administrateur","Administratrice","ADN","Aficionada","Aficionado","Agent","Agente","Alpiniste","Amateur de spas","Amatrice de spas","Ami","Amie","Androïde","Ange","Animal de compagnie","Animal territorial","Animateur","Animatrice","Archidémon","Archidémone","Arme","Arme ultime","Arroseur d'interrupteur","Arroseuse d'interrupteur","Artificier","Artificière","Artisan","Artisane","Artiste","As de la natte","Assistant","Assistante","Astronaute","Athlète","Attaquant","Attaquante","Auteur","Autrice","Avare","Aventurier","Aventurière","Baron du crime","Baronne du crime","Batteur","Batteuse","Bébête","Bédéiste","Béguin","Beignet de calamar","Big Boss","Biker","Bikeuse","Binoclard","Binoclarde","Bivalve","Bleusaille","Bois flotté","Bol de riz","Bol de soupe","Bombeur splash","Bombeuse splash","Boss","Bouclier","Boule à zéro","Boule de poils","Bourreau de travail","Breakdanceur","Breakdanceuse","Brin d'herbe","Cabot","Cadeau bonus","Cadre","Caïd","Calamar","Calamar déferlant","Calamar en vrille","Calamar malabar","Calamar séché","Camarade","Camarade d'équipe","Cambouis","Campeur","Campeuse","Carpaccio","Casse-cou","Célébrité","Céphalopode","Chair de poulpe","Champion","Champion du monde","Championne","Championne du monde","Chanteur","Chanteuse","Charmeur","Charmeuse","Chasseur","Chasseuse","Chef de bande","Chef de village","Chef d'équipe","Cheffe de bande","Cheffe de village","Cheffe d'équipe","Chercheur","Chercheuse","Chevalier","Chevalier chignon","Cible","Citoyen lambda","Citoyenne lambda","Clubbeur","Clubbeuse","Coach","Col blanc","Collection","Collectionneur de cartes","Collectionneur d'objets","Collectionneuse de cartes","Collectionneuse d'objets","Combattant","Combattante","Comique de service","Commando","Compétiteur","Compétitrice","Conducteur","Conductrice","Conseiller","Conseillère","Contremaître","Contremaîtresse","Convoqueur","Convoqueuse","Coolypsien","Coolypsienne","Coordinateur","Coordinatrice","Cornrow","Coupe afro","Coupe au bol","Coupe choucroute","Coupe classique","Coupe courte","Coupe ondulée","Crabe","Créateur","Créateur de contenu","Créatrice","Créatrice de contenu","Créature marine","Cuisinier","Cuisinière","Cycliste","Cyclone","Danseur","Danseuse","Dauphin","Déesse du chaos","Délégué","Déléguée","Démon","Démone","Designeur","Designeuse","Détenteur de titre","Détentrice de titre","Diablotin","Diablotine","Dieu du chaos","Dinosaure","Directeur","Directrice","Dirigeant","Dirigeante","Disciple","DJ","Dompteur d'anguilles","Dompteur de requins","Dompteuse d'anguilles","Dompteuse de requins","Double chignon","Doyen","Doyenne","Dragon","Duc","Duchesse","Écrivain","Écrivaine","Écumeur de fêtes","Écumeuse de fêtes","Égérie d'Abysma","Égérie d'Alpaj","Égérie d'Apex","Égérie d'Aroz","Égérie de Cubic","Égérie de DUX","Égérie de Focus","Égérie de Friture","Égérie de Gédéon","Égérie de Jack","Égérie de Kalamarus Rex","Égérie de Krakers","Égérie de Leviathus","Égérie de Macalamar","Égérie de Thony K","Égérie d'Ezko","Égérie d'Iormungand","Égérie d'OculR","Élégance incarnée","Éminence","Employé","Employé à distance","Employée","Employée à distance","Empreinte de poisson","Encre","Encre de calamar","Encre de poulpe","Enseignant","Enseignante","Enthousiaste","Entité","Équation","Espèce protégée","Espion","Espionne","Esprit libre","Essence de l'existence","Esthéticien","Esthéticienne","Étudiant","Étudiante","Existence","Expert","Experte","Fan d'Angie","Fan d'Ayo","Fan de Bottom Feeders","Fan de Chirpy Chips","Fan de Coralie","Fan de C-Side","Fan de Damp Socks","Fan de Dedf1sh","Fan de Diss-Pair","Fan de Front Roe","Fan de Hightide Era","Fan de jeux de société","Fan de Pasquale","Fan de Perle","Fan de Raimi","Fan de SashiMori","Fan de Squid Squad","Fan de Turquoise October","Fan de Wet Floor","Fan des Calamazones","Fan des Tenta-Cool","Fan des Tridenfer","Fan d'Ink Theory","Fan d'Oly","Fan d'ω-3","Fanatique","Fantôme","Fashion victim","Félin","Femme de neige","Femme des cavernes","Fêtard","Fêtarde","Filet de poisson","Fille","Fille de la ville","Fils","Flemmard","Flemmarde","Fleur","Fofolle","Folle furieuse","Fou furieux","Foufou","Frangin","Frangine","Frère","Fripouille","Fruit de mer","Gameur","Gameuse","Gamin","Gamine","Garçon","Garde du corps","Gardien","Gardienne","Gars de la ville","Gâteau apéro","Géant","Géante","Geek","Gélatine","Goûteur","Goûteuse","Gouvernante","Grand frère","Grand maître","Grand méchant","Grand timide","Grande gueule","Grande maîtresse","Grande méchante","Grande sœur","Grande timide","Grand-mère","Grand-père","Groove","Groupie","Guerrier","Guerrier de Cartes & Territoire","Guerrier légendaire","Guerrière","Guerrière de Cartes & Territoire","Guerrière légendaire","Guitariste","Habitué de Coolypso","Habitué de la Marée Armée","Habitué des Eaux-de-forme","Habitué du Pied agile","Habitué du Vestarium","Habituée de Coolypso","Habituée de la Marée Armée","Habituée des Eaux-de-forme","Habituée du Pied agile","Habituée du Vestarium","Hérisson","Héroïne","Héros","Hippie","Hipster","Homme de neige","Homme des cavernes","Hors-la-loi","Humain","Humaine","Humanité","Humeur","Humoriste","I.A.","Icône","Iconoclaste","Îlien","Îlienne","Illusion","Incantation","Inconditionnel d'une marque","Inconditionnelle d'une marque","Indépendant","Indépendante","Influenceur","Influenceuse","Inkling","Inspecteur","Inspectrice","Instructeur","Instructrice","Intérimaire","Introverti","Introvertie","Jeune","Jeune fille","Jeune marié","Jeune mariée","Jeunette","Jeunot","Joueur de cartes","Joueur de jeu de plateau","Joueur de synthé","Joueuse de cartes","Joueuse de jeu de plateau","Joueuse de synthé","Joyeuse drille","Joyeux drille","Larme","Leader","Look","Loup solitaire","Louve solitaire","Lune","Maestro","Magicien","Magicienne","Majordome","Maladroit","Maladroite","Maman","Mammifère","Manager","Manager adjoint","Manageuse","Manageuse adjointe","Mannequin","Mannequin pour baskets","Mannequin pour bottes","Mannequin pour chemises","Mannequin pour couvre-chefs","Mannequin pour lunettes","Mannequin pour tricots","Mannequin pour t-shirts","Mannequin pour vestes","Marinade","Masque","Mèche folle","Méduse","Méga-bouclette","Meilleur pote","Meilleure pote","Membre","Membre du comité","Mentor","Mère","Ministre","Minois","Mirage","Miss Gomina","Mister Gomina","Modèle","Monstre marin","Morceau de choix","Multi-talents","Mur","Murène","Muscle","Mystère","Mythe","Mythe de la Défense de zone","Mythe de la guerre de territoire","Mythe de la Mission Bazookarpe","Mythe de la Pluie de palourdes","Mythe de l'Expédition risquée","Mythe de Salmon Run","Mythe du mode Histoire","Nageur","Nageuse","Navire de guerre","Néophyte","Ninja","Noctambule","Nouveau venu","Nouvelle recrue","Nouvelle venue","Numéro 1","Numéro 2","Numéro 3","Numéro 4","Numéro 8","Octaling","Octarien","Octarienne","Œuf","Œuf de poisson","Oiseau","Oncle","Otaku","Ours","Ourse","Ouvrier","Ouvrière","P.D.G.","Palette","Papa","Parangon","Pâtée","Patron","Patronne","Peau d'écailles","Pêcheur","Pêcheuse","Peintre","Père","Personnalité royale","Petiot","Petiote","Petit frère","Petite sœur","Petite-fille","Petit-fils","Photographe","Pile électrique","Pilote","Plancton","Planificateur","Planificatrice","Plat de poissons","Plombier","Plombière","Poêlée","Poing","Point faible","Pointeur","Pointeuse","Poisson","Poisson de mer","Poisson d'eau douce","Poisson séché","Poisson-chat","Polyglotte","Popstar","Porteur de vérité","Porteuse de vérité","Poulet frit","Poulpe","Prédateur","Prédatrice","Première année","Président","Présidente","Prince","Princesse","Pro de l'esquive","Prodige","Producteur","Productrice","Prof","Programmeur","Programmeuse","Psy","Punk","Queue de cheval","Quidam","Raie au milieu","Raie majeure","Raie manta","Rappeur","Rappeuse","Rat de bibliothèque","Rebelle","Reflet","Reine","Reine du dance floor","Reine du pas chassé","Releveur de défi","Releveuse de défi","Réminiscence","Requin","Rigolo","Rigolote","Risque-tout","Robot","Roi","Roi du dance floor","Roi du pas chassé","Ronin","Sage de la montagne","Samouraï","Sans-le-sou","Santé","Sashimi","Saumon","Sauteur","Sauteuse","Scientifique","Secrétaire","Sirène","Skateur","Skateuse","Sœur","Soldat octaling","Soldate octaling","Soleil","Sous-fifre","Souvenir","Spectateur","Spectatrice","Stagiaire","Stand-upper","Stand-uppeuse","Streameur","Streameuse","Style","Style de vie","Styliste","Subalterne","Subordonné","Subordonnée","Super bleusaille","Super-héroïne","Super-héros","Supérieur","Supérieure","Superstar","Superstar du vestiaire","Superviseur","Superviseuse","Supporter","Supportrice","Surdoué","Surdouée","Surfeur","Surfeuse","Survivaliste","Sushi","Tante","Taquineur de goujon","Taquineuse de goujon","Tataki de thon","Tempête de neige","Tenue","Terreur des tournois","Tête à frange","Tête d'affiche","Thermophobe","Tignasse trempée","Tofu","Tornade","Tortue","Touriste","Traînard","Traînarde","Trendsetter","Trendsetteuse","Tresse","Trouveur de poissons","Trouveuse de poissons","Vedette","Veinard","Veinarde","Vendeur","Vendeuse","Ventre à pattes","Vétéran","Vétérane","Vice-président","Vice-présidente","Vie de calamar","Vie de poulpe","Vie de Salmonoïde","Vigile","Viking","Vitamine","Vocaliste","Voyageur","Voyageuse"]
            },
            ui: {
                tabText: "Texte",
                tabBanners: "Bannières",
                tabBadges: "Insignes",
                textLanguage: "Langue",
                textName: "Nom",
                textTitles: "Titres",
                textRandomize: "Randomiser",
                textSlot1: "Point 1",
                textSlot2: "Point 2",
                textSlot3: "Point 3",
                buttonBoth: "Tous les Titres",
                buttonFirst: "Première",
                buttonLast: "Dernier",
                buttonBanner: "Bannière",
                buttonBadges: "Insignes",
                buttonAll: "Tout",
                buttonDownload: "Télécharger!",
                textMessage: "S'il y a des erreurs de texte, veuillez m'envoyer un DM sur Twitter!",
                textCustom: "Personnaliser",
                textUpload: "Insérez le vôtre",
                textToggle: "Activée",
                textColour: "Couleur"
            },
            sections: {
                banners: {
                    vanilla: "En Jeu",
                    bandCustom: 'Bandes',
                    specCustom: 'Spéciaux',
                    mapsCustom: 'Zones',
                    miscCustom: 'Autre',
                    userCustom: 'Téléchargé',
                },
                badges: {
                    coop: "Salmon Run",
                    mode: "Modes",
                    shop: "Magasins",
                    misc: "Autre",
                    gear: "Marques",
                    spec: "Spéciaux",
                    weps: "Armes",
                    wepsCustom: "Armes",
                    subsCustom: "Armes Secondaires",
                    modeCustom: "Modes",
                    gearCustom: "Marques",
                    coopCustom: "Salmon Run",
                    charCustom: "Personnages",
                    iconCustom: "Icônes",
                    spf2Custom: "Festivals 2",
                    spf3Custom: "Festivals 3",
                    cakeCustom: "Souvenir Patapoulpe",
                    userCustom: "Téléchargé",
                }
            },
            default: ["Jeune", "de la Contrée Clabousse"]
        },
        // French (Canadian)
        USfr: {
            name: "Français (CA)",
            titles: {
                last: ["Pas de titre", "sans édulcorant","affichant 10 ans d'expérience","microscopique","fragmenté","d'ici cinq ans","collectionn d'amiibo","calmaresque","pro de la table de mixage","adorable","technophile","chancelant","virtuel","de match X","lève-tôt","24h/24","à vie","de match classique","à tomber","du dimanche","incroyable","à huit tentacules","à dix tentacules","de match tricolore","de Crabe Express","de première ligne","nostalgique","mégachanceu","terrestre","énorme","vorace","avant tout","océanique","chargeant les sumoches","massi","audacieu","toujours dans le hall","cute","montagnard","travailleu","éminent","perdu","méprisant la défaite","splendide","crédule","fêtant sa fête","du jour","de l'année","du firmament","innocent","antique","d'Alterna","capricieu","joyeu","au plancher","désarmé","intello","diurne","des appartements Filament","condescendant","aqueu","d'aquarium","enflammé","grésillant","qui ouvre ses chakras","au top","central","gagneu","de fin de siècle","du siècle","bien-aimé","amoureu de l'hiver","hivernal","en vacances d'hiver","du nord de l'Atlantique","du nord du Pacifique","de l'océan Arctique","stagiaire","de minuit","champion de C et T","de l'an dernier","vintage","valable aujourd'hui","comme un autre","de bon augure","fiable","droiti","ambidextre","pataud","démesuré","du quotidien","fatal","immaculé","bohémien","éternel","royal","sans foi ni loi","souterrain","stable","doté d'ouïes","de jour","lég","de midi","immédiat","fin prêt","en congés","incandescent","tranquille","sur pilote automatique","qui fait sensation","au budget optimisé","de l'océan Indien","dangereu","prestigieu","à l'eau de rose","bavard","doué","fouineu","pugnace","cosmique","protect","piquant","jeune","parcheminé","croissant","mûr","toujours en action","précoce","suave","carrément épeurant","ordonné","distingué","organisé","prometteu","virtuose","barbu","logique","à retardement","qui tire dans le mille","du réservoir Rigadelle","baraqué","autodidacte","à fond dans l'égoportrait","ultra-confiant","au naturel","auto-proclamé","glacial","rafraîchissant","âpre à la tâche","sans concession","en surchauffe","parfait","à la gâchette facile","en plein amour","et pas qu'un peu","réincarné","d'attaque","relax","discr","aux batteries vides","en pleine ruée","de match privé","suprême","gourmand","au pied du mur","en vogue","jusqu'au-boutiste","malfaisant","hédoniste","divertissant","venu du futur","anachronique","fondat","innovant","du début de l'été","encreu","incisi","suivi de son fan-club","de compagnie","marqué par le destin","hurlant à la lune","vindicati","fluide","miraculeu","distant","loin de la foule","solitaire","de la ville de Chromapolis","de la région de Chromapolis","du carré Chromapolis","côti","chanceu","ou presque","photographe","procrastinat","de l'an prochain","du Vestarium","à 100 %","d'Alassaut","grunge","couvert d'encre","polyvalent","tempétueu","super cool","assez cool","moyennement cool","trop cool","frondeu","instavidéaste","entre deux diffusions","suprêmissime","prêt à hiberner","hirsute","fragrant","des galeries Guppy","à manches longues","marginal","d'avant-garde","instantané","du sud de l'Atlantique","du sud du Pacifique","de l'océan Austral","charnu","infantile","affable","casani","d'intérieur","d'extérieur","de l'ombre","de première qualité","plutôt pas mal","à fond sur les raccourcis","agité","amoureu du printemps","classe comme le printemps","jusqu'à hier","dou","plein d'entrain","dans l'instant présent","plein d'énergie","populaire","virevoletant","grandiloquent","bouche cousue","intuiti","face caméra","amoureu de l'automne","de la fin de l'été","de style automnal","écarlate","occasionnel","coquet","mince","digne d'éloges","du mode Histoire","sur mesure","important","supersonique","venteu","volant","grignoteu","dansant sur les vagues","bûcheu","nouve","sûr","gothique","goth","amoureu de l'été","estival","timide","du supermarché Cétacé","pour l'éternité","lanceu de tendances","dans le vent","stylé","de l'institut Calm'arts","des sept mers","tout du jour","du bord de mer","prêt à plonger","noir de jais","crevé","sincère","homologué","fidèle","certifié conforme","du pont Esturgeon","perfectionniste","sans précédent","de l'aube","festi","touché par la grâce","mystérieu","rapide comme l'éclair","sacré","secr","ésotérique","debout","en danseuse","éblouissant","d'albâtre","pur","céleste","sans un sou","des sources Sauret","du Cratère","des zones sauvages","suffisant","déserteu","en cavale","scintillant","pétillant","chatoyant","reluisant","à fond la caisse","en pleine ascension","performant","du spa C-ta-C","à marée basse","chaleureu","réaliste","national","persévérant","hors pair","banal","brutal","fortuné","en balade","matinal","larmoyant","des fonds marins","louche","chaotique","sans fioriture","féroce","aimable","mystique","des beaux jours","à l'œil de mante de mer","de 2e génération","de la 3e génération","à fond les ballons","avide","cupide","de son surnom","du centre-ville","indomptable","sauvage","enneigé","ultime","de la casse Rascasse","de la centrale Anguilla","insensible","gentil","distrait","halieutique","riche","inégalable","rétro","le crayon sur l'oreille","de Splatoon","novice","en vacances d'été","comme on en a jamais vu","de la première vague","final","plus fort que tout","sans pareil","dernier cri","optimiste","de la forêt","anonyme","en roue libre","à ne pas sous-estimer","tendant vers l'infini","aux goûts douteux","imperturbable","sans pitié","sans égal","paroxystique","caustique","étincelant","constant","au poil soyeux","glamour","surhumain","mastoc","hallucinant","expert","sans limites","pas plus fra que ça","galopant","de la fin de semaine","de la campagne","rockabilly","qui a toujours la frite","du cœur de l'hiver","du crépuscule","monochrome","sombre","traditionaliste","légendaire","économe","aspirant","avide de gloire","aux paupières lourdes","carnivore","épicurien","mordu de bonbons","mordu de poissons","épicé","marié à son boulot","fructivore","en édition limitée","mordu de voyage","mordu de dessins animés","branché randos","mordu de cinéma","mordu de bédés","légumivore","plein aux as","joueu","enclin à la rêverie","sentimental","qui fait du bruit","inarrêtable","néophyte","nouvelle génération","du bastion colimaçon","junior","à la pointe de la mode","tout","fra","sujet au mal de mer","amat","ultra rare","du canyon aux colonnes","revigorant","trempé","du marché Grefin","suivant son destin","industriel","chevronné","m'as-tu-vu","en guerre avec les données","méditati","douillet","athlétique","sporti","archaïque","prodige","du voisinage","houleu","ultra rapide","de la salle d'arcade","tenace","espiègle","apprenti","à la pointe de la technologie","dégoulinant d'encre","débordant","captivant","à marée haute","gigantesque","en flânage","à flot","de l'épave des braves","noir d'encre","étourdi","attitré de M. Ours","au saut du lit","qui vieillit bien","","steampunk","sérieuse","sérieux","poseu","tranquillou","insubmersible","venu de loin","cool","pas-super-fra","inflexible","dingue de rap","plein de vie","peinturluré","proliférant","sans encre","emblématique de la ville","bondissant","suspect","moderne","sélect","blanc mat","mordu de plongée","immergé","branché","pro","essentiel","nocturne","brûlant","bleu pétant","chafouin","qui passe inaperçu","dormant debout","hésitant","du parc Carapince","du Pied agile","de Calmarcade","dans la mêlée","coopérati","en planque","furti","vigilant","méthodique","lessivé","tête brûlée","qui déchire","sophistiqué","dans le brouillard","unique en son genre","semi-pro","muet","des Eaux-de-forme","futé","impérial","flegmatique","élégant","en pleine expansion","crainti","ambigu","sablonneu","explosi","global","typique","approximati","énigmatique","en douce","de Salmon Run","du barrage salmonoïde","rouge sombre","voyant","insaisissable","vaseu","rêvant de galons","prodigue","simple","enchaînant les esquives","de Coolypso","négligé","en voie d'extinction","artistique","punk","illuminé","du genre salé","retentissant","branché breakdance","de la banlieue Balibot","trognon","séché au soleil","fantasmagorique","du chantier Narval","de match anarchie","de la Contrée Clabousse","de Cité-Clabousse"],
                first: ["Pas de titre", "« Excellent »","Accro à la Défense de zone","Accro à la Mission Bazookarpe","Accro à la Pluie de palourdes","Accro à l'Expédition risquée","Accro à Salmon Run","Accro au mode Histoire","Acolyte","Acteur","Actrice","Adepte de la Balise de saut","Adepte de la Bentorpille","Adepte de la Bombe ballon","Adepte de la Bombe curling","Adepte de la Bombe gluante","Adepte de la Bombe robot","Adepte de la Bombe soda","Adepte de la Bombe splash","Adepte de la Brume toxique","Adepte de la Mine d'encre","Adepte de la Pluie d'encre","Adepte de l'Arroseur léger","Adepte de l'Arroseur lourd","Adepte de l'Aspirencre","Adepte de l'Éclablasteur","Adepte de l'Éclablasteur LP","Adepte de l'Éclatana d'estampe","Adepte de l'Éclatana Doto","Adepte de l'Encrifugeur","Adepte de l'Épinceau","Adepte de l'Épinceau brosse","Adepte de l'Excellinator","Adepte de l'Exteinteur","Adepte de l'Ultra-étampeur","Adepte du Badigeonneur","Adepte du Badigeonneur stylo","Adepte du Badigeonneur XP","Adepte du Bassineur","Adepte du Bimbamboum","Adepte du Calibre 2000","Adepte du Calibre 3000","Adepte du Cavalsquale","Adepte du Chromo-jet","Adepte du Compresseur","Adepte du Concentraceur","Adepte du Concentraceur zoom","Adepte du Coralux 450","Adepte du Crabe d'assaut","Adepte du Crayon X - 5H","Adepte du Détecteur","Adepte du Détoneur","Adepte du Détubeur","Adepte du Districool","Adepte du Double encreur","Adepte du Double Kelvin 525","Adepte du Double moucheteur","Adepte du Double nettoyeur","Adepte du Double voltigeur","Adepte du Dynamo-rouleau","Adepte du Flexi-rouleau","Adepte du Gicleur","Adepte du Lance-tornades","Adepte du Lanceur spatial","Adepte du Laser perçant 5.1","Adepte du Lignizateur alpha","Adepte du Liquéficateur","Adepte du Liquéficateur pro","Adepte du Liquéficateur ultra","Adepte du Marqueur léger","Adepte du Marqueur lourd","Adepte du Méga para-encre","Adepte du Méganettoyeur","Adepte du Multi-missile","Adepte du Mur d'encre","Adepte du Nautilus","Adepte du N-ZAP","Adepte du Para-encre","Adepte du Para-encre espion","Adepte du Pouche-pouche","Adepte du Proxiblasteur","Adepte du Rafalblasteur","Adepte du Ricocheur","Adepte du Rouleau","Adepte du Rouleau carbone","Adepte du Rouleau large","Adepte du Seauceur","Adepte du Seauceur trio","Adepte du Sonar paf","Adepte du Super bouclier","Adepte du Super Mollusque","Adepte du Trimissile tornade","Adepte du Trisperceur","Adepte du Turboblasteur","Adepte du Turboblasteur pro","Adepte du X-traceur +","Adepte du X-traceur + zoom","Adjoint","Adjointe","Administrateur","Administratrice","ADN","Aficionada","Aficionado","Agent","Agente","Alpiniste","Amateur de spas","Amatrice de spas","Ami","Amie","Androïde","Ange","Animal de compagnie","Animal territorial","Animateur","Animatrice","Apprenti","Apprentie","Archidémon","Archidémone","Arme","Arme ultime","Arroseur d'interrupteur","Arroseuse d'interrupteur","Artificier","Artificière","Artisan","Artisane","Artiste","As de la tresse","Assistant","Assistante","Astronaute","Athlète","Attaquant","Attaquante","Auteur","Autrice","Avare","Aventurier","Aventurière","Baron du crime","Baronne du crime","Batteur","Batteuse","Bébête","Bédéiste","Béguin","Big Boss","Binoclard","Binoclarde","Bivalve","Bois flotté","Bol de riz","Bol de soupe","Bombeur splash","Bombeuse splash","Boss","Bouclier","Boule à zéro","Boule de poils","Bourreau de travail","Breakdanceur","Breakdanceuse","Brin d'herbe","Cadeau bonus","Cadre","Caïd","Calmar","Calmar déferlant","Calmar en vrille","Calmar malabar","Calmar séché","Camarade","Camarade d'équipe","Campeur","Campeuse","Carpaccio","Casse-cou","Célébrité","Céphalopode","Chair de poulpe","Champion","Champion du monde","Championne","Championne du monde","Chanceuse","Chanceux","Chanteur","Chanteuse","Charmeur","Charmeuse","Chasseur","Chasseuse","Chef de bande","Chef de village","Chef d'équipe","Cheffe de bande","Cheffe de village","Cheffe d'équipe","Chercheur","Chercheuse","Chevalier","Chevalier chignon","Cible","Clubbeur","Clubbeuse","Coach","Col blanc","Collection","Collectionneur de cartes","Collectionneur d'objets","Collectionneuse de cartes","Collectionneuse d'objets","Combattant","Combattante","Comique de service","Comique solo","Commando","Compétiteur","Compétitrice","Conducteur","Conductrice","Conseiller","Conseillère","Contremaître","Contremaîtresse","Convoqueur","Convoqueuse","Coolypsien","Coolypsienne","Coordinateur","Coordinatrice","Coupe afro","Coupe au bol","Coupe choucroute","Coupe classique","Coupe courte","Coupe ondulée","Crabe","Créateur","Créateur de contenu","Créatrice","Créatrice de contenu","Créature marine","Cuisinier","Cuisinière","Cycliste","Cyclone","Danseur","Danseuse","Dauphin","Déesse du chaos","Délégué","Déléguée","Démon","Démone","Designeur","Designeuse","Détenteur de titre","Détentrice de titre","Diablotin","Diablotine","Dieu du chaos","Dinosaure","Directeur","Directrice","Dirigeant","Dirigeante","Disciple","DJ","Dompteur d'anguilles","Dompteur de requins","Dompteuse d'anguilles","Dompteuse de requins","Double chignon","Doyen","Doyenne","Dragon","Duc","Duchesse","Écrivain","Écrivaine","Écumeur de fêtes","Écumeuse de fêtes","Égérie d'Abysma","Égérie d'Alpaj","Égérie d'Aroz","Égérie de Arki","Égérie de DUX","Égérie de Fosia","Égérie de Fréma","Égérie de Kalmarus","Égérie de Krakeurs","Égérie de Leviathus","Égérie de P. Tonk","Égérie de Pionic","Égérie de Radmaré","Égérie de Tentatek","Égérie de Thony K","Égérie de Tizonius","Égérie d'Ezko","Égérie d'Iormungand","Élégance incarnée","Éminence","Employé","Employé à distance","Employée","Employée à distance","Empreinte de poisson","Encre","Encre de calmar","Encre de pieuvre","Enfant","Enseignant","Enseignante","Enthousiaste","Entité","Équation","Espèce protégée","Espion","Espionne","Esprit libre","Essence de l'existence","Esthéticien","Esthéticienne","Étudiant","Étudiante","Existence","Expert","Experte","Fan d'Angie","Fan d'Ayo","Fan de Bottom Feeders","Fan de Chirpy Chips","Fan de Coralie","Fan de C-Side","Fan de Damp Socks","Fan de Dedf1sh","Fan de Diss-Pair","Fan de Front Roe","Fan de Hightide Era","Fan de jeux de société","Fan de Pasquale","Fan de Perle","Fan de Raimi","Fan de SashiMori","Fan de Squid Squad","Fan de Turquoise October","Fan de Wet Floor","Fan des Sœurs Ventouse","Fan des Tentacool","Fan des Tridenfer","Fan d'Ink Theory","Fan d'Oly","Fan d'ω-3","Fanatique","Fantôme","Félin","Femme de neige","Femme des cavernes","Fêtard","Fêtarde","Filet de poisson","Fille","Fille de la ville","Fils","Flâneur","Flâneuse","Fleur","Fofolle","Folle furieuse","Fou furieux","Foufou","Frère","Frérot","Fripouille","Fruit de mer","Garçon","Garde du corps","Gardien","Gardienne","Gars de la ville","Gâteau apéro","Géant","Géante","Geek","Gélatine","Goûteur","Goûteuse","Gouvernante","Graisse","Grand frère","Grand maître","Grand méchant","Grand timide","Grande gueule","Grande maîtresse","Grande méchante","Grande sœur","Grande timide","Grand-mère","Grand-père","Groove","Groupie","Guerrier","Guerrier de Cartes et Territoire","Guerrier légendaire","Guerrière","Guerrière de Cartes et Territoire","Guerrière légendaire","Guitariste","Habitué d'Alassaut","Habitué de Coolypso","Habitué des Eaux-de-forme","Habitué du Pied agile","Habitué du Vestarium","Habituée d'Alassaut","Habituée de Coolypso","Habituée des Eaux-de-forme","Habituée du Pied agile","Habituée du Vestarium","Hérisson","Héroïne","Héros","Hippie","Hipster","Homme de neige","Homme des cavernes","Hors-la-loi","Humain","Humaine","Humanité","Humeur","Humoriste","I.A.","Icône","Iconoclaste","Îlien","Îlienne","Illusion","Incantation","Inconditionnel d'une marque","Inconditionnelle d'une marque","Indépendant","Indépendante","Influenceur","Influenceuse","Inkling","Inspecteur","Inspectrice","Instructeur","Instructrice","Intérimaire","Introverti","Introvertie","Jeune","Jeune fille","Jeune marié","Jeune mariée","Jeunette","Jeunot","Joueur de cartes","Joueur de jeu de plateau","Joueur de jeux vidéo","Joueur de synthé","Joueuse de cartes","Joueuse de jeu de plateau","Joueuse de jeux vidéo","Joueuse de synthé","Joyeuse drille","Joyeux drille","Larme","Leader","Look","Loup solitaire","Louve solitaire","Lune","Madame Tout-le-monde","Maestro","Magicien","Magicienne","Majordome","Maladroit","Maladroite","Maman","Mammifère","Mamzelle Pommade","Manageur","Manageur adjoint","Manageuse","Manageuse adjointe","Mannequin","Mannequin pour bottes","Mannequin pour chapeaux","Mannequin pour chemises","Mannequin pour espadrilles","Mannequin pour lunettes","Mannequin pour tricots","Mannequin pour t-shirts","Mannequin pour vestes","Marinade","Masque","Mèche folle","Méduse","Méga-bouclette","Meilleur ami","Meilleure amie","Membre","Membre du comité","Mentor","Mère","Ministre","Minois","Mirage","Modèle","Monsieur Tout-le-monde","Monstre marin","Morceau de choix","Motard","Motarde","Mousse","M'sieur Pommade","Multi-talents","Mur","Murène","Muscle","Mystère","Mythe","Mythe de la Défense de zone","Mythe de la Guerre de territoire","Mythe de la Mission Bazookarpe","Mythe de la Pluie de palourdes","Mythe de l'Expédition risquée","Mythe de Salmon Run","Mythe du mode Histoire","Nageur","Nageuse","Navire de guerre","Néophyte","Ninja","Noctambule","Nouveau venu","Nouvelle recrue","Nouvelle venue","Numéro 1","Numéro 2","Numéro 3","Numéro 4","Numéro 8","Octaling","Octarien","Octarienne","Œuf","Œuf de poisson","Oiseau","Oncle","Otaku","Ours","Ourse","Ouvrier","Ouvrière","P.D.G.","Palette","Papa","Parangon","Pâtée","Patron","Patronne","Peau d'écailles","Pêcheur","Pêcheuse","Peintre","Père","Personnalité royale","Petit frère","Petite sœur","Petite-fille","Petit-fils","Photographe","Pieuvre","Pile électrique","Pilote","Pitou","Plancton","Planificateur","Planificatrice","Plat de poissons","Plombier","Plombière","Poêlée","Poing","Point faible","Pointeur","Pointeuse","Poisson","Poisson de mer","Poisson d'eau douce","Poisson séché","Poisson-chat","Polyglotte","Popstar","Porteur de vérité","Porteuse de vérité","Poulet frit","Précurseur","Précurseure","Prédateur","Prédatrice","Première année","Président","Présidente","Prince","Princesse","Pro de l'esquive","Prodige","Producteur","Productrice","Prof","Programmeur","Programmeuse","Psy","Punk","Queue de cheval","Quidam","Raie au milieu","Raie majeure","Raie manta","Rappeur","Rappeuse","Rat de bibliothèque","Rebelle","Reflet","Reine","Reine de la danse","Reine du pas chassé","Releveur de défi","Releveuse de défi","Réminiscence","Requin","Rigolo","Rigolote","Risque-tout","Robot","Roi","Roi de la danse","Roi du pas chassé","Rondelle de calmar","Ronin","Sage de la montagne","Samouraï","Sans-le-sou","Santé","Sashimi","Saumon","Sauteur","Sauteuse","Scientifique","Secrétaire","Sirène","Skateur","Skateuse","Sœur","Sœurette","Soldat octaling","Soldate octaling","Soleil","Sous-fifre","Souvenir","Spectateur","Spectatrice","Stagiaire","Streameur","Streameuse","Style","Style de vie","Styliste","Subalterne","Subordonné","Subordonnée","Super recrue","Superhéroïne","Superhéros","Supérieur","Supérieure","Superstar","Superstar du vestiaire","Superviseur","Superviseuse","Supporteur","Supportrice","Surdoué","Surdouée","Surfeur","Surfeuse","Survivaliste","Sushi","Tante","Taquineur de poisson","Taquineuse de poisson","Tataki de thon","Tempête de neige","Tenue","Terreur des tournois","Tête à frange","Tête d'affiche","Thermophobe","Tignasse trempée","Tofu","Tornade","Tortue","Touriste","Traînard","Traînarde","Tresse","Tresse collée","Trouveur de poissons","Trouveuse de poissons","Vedette","Vendeur","Vendeuse","Ventre à pattes","Vétéran","Vétérane","Vice-président","Vice-présidente","Victime de la mode","Vie de calmar","Vie de pieuvre","Vie de salmonoïde","Vigile","Viking","Vitamine","Vocaliste","Voyageur","Voyageuse"]
            },
            ui: {
                tabText: "Texte",
                tabBanners: "Bannières",
                tabBadges: "Insignes",
                textLanguage: "Langue",
                textName: "Nom",
                textTitles: "Titres",
                textRandomize: "Randomiser",
                textSlot1: "Point 1",
                textSlot2: "Point 2",
                textSlot3: "Point 3",
                buttonBoth: "Tous les Titres",
                buttonFirst: "Première",
                buttonLast: "Dernier",
                buttonBanner: "Bannière",
                buttonBadges: "Insignes",
                buttonAll: "Tout",
                buttonDownload: "Télécharger!",
                textMessage: "S'il y a des erreurs de texte, veuillez m'envoyer un DM sur Twitter!",
                textCustom: "Personnaliser",
                textUpload: "Insérez le vôtre",
                textToggle: "Activée",
                textColour: "Couleur"
            },
            sections: {
                banners: {
                    vanilla: "En Jeu",
                    bandCustom: 'Bandes',
                    specCustom: 'Spéciaux',
                    mapsCustom: 'Zones',
                    miscCustom: 'Autre',
                    userCustom: 'Téléchargé',
                },
                badges: {
                    coop: "Salmon Run",
                    mode: "Modes",
                    shop: "Magasins",
                    misc: "Autre",
                    gear: "Marques",
                    spec: "Spéciaux",
                    weps: "Armes",
                    wepsCustom: "Armes",
                    subsCustom: "Armes Secondaires",
                    modeCustom: "Modes",
                    gearCustom: "Marques",
                    coopCustom: "Salmon Run",
                    charCustom: "Personnages",
                    iconCustom: "Icônes",
                    spf2Custom: "Festivals 2",
                    spf3Custom: "Festivals 3",
                    cakeCustom: "Souvenir Patapoulpe",
                    userCustom: "Téléchargé",
                }
            },
            default: ["Jeune", "de la Contrée Clabousse"]
        },
        // Dutch
        EUnl: {
            name: "Nederlands",
            titles: {
                first: ["Geen titel", "Onverdund","Tien-jaar-ervaring-","Microscopisch","Hal","Vijf-jaar-vooruitkijkend","amiibo-verzamelend","Calamari-","Dj","Beminnelijk","Technisch onderlegd","Wiebelig","Virtue","X-gevecht-spelend","Vroeg actie","24 uurs-","Levenslang","Standaardgevecht-spelend","Betoverend","Gelegenheids-","Ongelofelijk","Achttentakelig","Tiententakelig","Driekleurengevecht-spelend","Bikbalie-","Voorop strijdend","Nostalgisch","Superfortuinlijk","Aards","Gro","Hongerig","Voornamelijk een","Oceanisch","Sallog-stormend","Massie","Dapper","Lobbybezoekend","Klein","Bergbewonend","Werkend","Sierlijk","Opgeduikeld","Standvastig","Pracht-","Argelo","Jarig","Actue","Bijdetijds","Luchtig","Onschuldig","Antiek","Alterne","Wispelturig","Vrolijk","Hartstochtelijk","Ongewapend","Intelligent","Helder","Baleinbuurt-","Superieur","Waterig","Aquariumbewonend","Vurig","Gloeiend he","Verlicht","Vooraanstaand","Centra","'s Werelds beste","Eeuwwisselings-","Eersterangs","Geliefd","Winters","Winterkla","Overwinterend","Noord-Atlantisch","Noord-Pacifisch","Arctisch","Parttime","Middernachts-","Slijkslag-","Gedateerd","Vintage","Exclusie","Doodnorma","Welvarend","Betrouwba","Rechtshandig","Tweehandig","Linkshandig","Overmaats","Alledaags","Onvermurwba","Smettelo","Bohemien-","Onveranderlijk","Koninklijk","Crimine","Ondergronds","Solide","Amfibisch","Dagelijks","Licht","Middag-","Pankla","Slagvaardig","Vakantievierend","Gloeiend","Spiegelglad","Volautomatisch","Sensatione","Doelmatig","Indische Oceaan-","Gevaarlijk","Eervol","Zoetsappig","Praatgra","Acceptabel","Opdringerig","Competitie","Kosmisch","Beschermend","Puntig","Jong","Gerimpeld","Groeiend","Volwassen","Aanpakkend","Bruta","Soepel","Angstaanjagend","Ordelijk","Presentabel","Georganiseerd","Veelbelovend","Winnend","Bebaard","Logisch","Punctue","Scherpschietend","Baarsreservoir-","Gespierd","Zelfstudie-","Selfieverslaafd","Zelfverzekerd","Naturel","Zelfverklaard","Kil","IJzig","Bikkelend","Strikt","Oververhit","Perfect","Inkt slingerend","Genietend","Noemt zichzelf een","Gereïncarneerd","Aanvallend","Relax","Rustig","Afgemat","Stormlopend","Privégevecht-spelend","Ultiem ultiem","Heel erg hongerig","In het nauw gedreven","Modieu","Spijkerhard","Kwaadaardig","De dag plukkend","Leuk","Tijdreizend","Anachronistisch","Oorspronkelijk","Origine","Vroegzomers","Inkt klotsend","Stekelig","Alom geliefd","Treuzelend","Gedoodverfd","Jammerend","Wraakzuchtig","Vloeiba","Miraculeu","Afstandelijk","Vrijgevochten","Eenza","Inkopolis' eigen","Inkopoliaans","Inkopolispleins eigen","Strand-","Mazzelend","Quasi-","Kiekjesschietend","Uitstellend","Nieuwjaars-","Modusa-","100%","Armada-","Grunge-","Met inkt bedekt","Breed inzetba","Stormachtig","Neusje van de zalm-","Middenmoot-","Groen","SUPERVERS","Koppig","Livestreamend","Onderbroken","Door kenners geliefd","Stevig","Pluizig","Geurig","Galerie Le Guppy-","Lange-mouwen-","Alternatie","Avant-gardistisch","Onmiddellijk","Zuid-Atlantisch","Zuid-Pacifisch","Antarctisch","Stoer","Kinderachtig","Zachtaardig","Woonkamer-","Binnenzittend","Openlucht-","Stiekem","Eersteklas-","Beleefd","Kort-door-de-bocht-","Koopjesbak-","Lente-achtig","Lentefris","Ingehaald","Zacht","Geanimeerd","Alom aanwezig","Opgewekt","Populair","Fladderend","Bombastisch","Zwijgend","Intuïtie","Fotogeniek","Herfstig","Laatzomers","Herfstliefhebbend","Scharlakenro","Casual","Heerlijk","Slank","Prijzenswaardig","Verhaalspelend","Op maat gemaakt","Belangrijk","Supersonisch","Waaiend","Vliegend","Zuinig snackend","Golfsurfend","Studerend","Beginnend","Assertie","Gothic-","Goth-","Zomers","Zonnig","Verlegen","Bultrugbazaar-","Eeuwig","Voorlopend","Chi","Stijlvol","Koraalcampus-","Zeevarend","Dagvers","Kustbewonend","Zwemkleding dragend","Pikzwart","Uitgeput","Oprecht","Geloofwaardig","Trouw","Onvervalst","Brandingbrug-","Kwetsba","Onovertroffen","Dageraad-","Feestend","Ontzagwekkend","Mysterieu","Bliksemsnel","Heilig","Heimelijk","Esoterisch","Staand","Klauterend","Briljant","Rasecht","Pu","Bovenaards","Blut","Barbeelbaden-","Krater-","Woestenij-","Opgeblazen","Verdwaald","We","Vluchtend","Schitterend","Sprankelend","Fonkelend","Glanzend","Vol gas gevend","Stijgend","Prestatie-","El Dorade-resort-","Ebbend","Hartelijk","Realistisch","Nationa","Hardnekkig","Professione","Afgezaagd","Bru","Gelukkig","Dwalend","Vroeg ontwakend","Betraand","Onderzee-","Vinnig","Chaotisch","Eenvoudig","Fel","Snoezig","Buitenaards","Midzomer-","Waakza","Tweedegeneratie-","Derdegeneratie-","Extre","Hebberig","Gierig","Alter ego:","Stads","Ongetemd","Wild","Besneeuwd","Absoluut ultiem","Zilversmelt-hoogovens-","Kwikwi-krachtcentrale-","Versuft","Vriendelijk","Vergeetachtig","Hengelend","Kapitaalkrachtig","Uniek","Retro-","Schetsend","Splatoons eigen","Zoutelo","Zomervakantievierend","Allereerst","Eerstegeneratie-","Laatst","Sterkst","Best","Gloednieuw","Optimistisch","Bos-","Naamlo","Onbegrensd","Noemenswaardig","Oneindig","Smakelo","Onverstoorba","Genadelo","Ongeëvenaard","Piekend","Scherp","Vlammend","Stabiel","Donzig","Glamoureu","Bovenmenselijk","Immens","Wonderlijk","Verdedigend","Grensverleggend","Supervers","Rennend","Uitgeklokt","Plattelands","Rock-'n-roll-","Gefrituurd","Midwinters","Schemer-","Monochro","Duister","Traditione","Legendarisch","Geld sparend","Wannabe","Eerzuchtig","Slaperig","Vleesetend","Bourgondisch","Snoepend","Visetend","Pittig","Werkverslaafd","Fruitetend","Merk-","Reizend","Tekenfilm-","Wandelend","Filmliefhebbend","Stripliefhebbend","Groenteëtend","Fanatiek shoppend","Gamend","Dromerig","Sentimente","Rockend","Niet te stoppen","Uitgezonden","Next-gen-","Fort Ammoniet-","Beginners-","Modebewust","Splinternieuw","Vers gevangen","Zeeziek","Amateuristisch","Superzeldza","Roggentrog-","Warmbloedig","Drijfnat","Boter-bij-de-vismarkt-","Voorbestemd","Verwerkt","Gepeperd","Aandachtvragend","Wetenschappelijk","Mediterend","Gerieflijk","Sportie","Atletisch","Ouderwets","Bazig","Naburig","Donderend","Turbo-","Speelhal-","Volhardend","Schalks","Stagelopend","Echt","Vooruitstrevend","Inkt druipend","Exorbitant","Meeslepend","Vloedvechtend","Gigantisch","Dolend","Drijvend","Ms Grondel-","Inktzwart","Afgeleid","Beer & Co-","Fris","Gerijpt","Loka","Steampunk-","Serieu","Uitsloverig","Ongedwongen","Onzinkba","Afgezonderd","Cool","Muf","Doorbijtend","Hiphop-","Barstend","Beschilderd","Toenemend","Inktlo","Knuffelig","Pleinplatlopend","Springend","Schimmig","Modern","Mod-","Knalwit","Duikend","Onderwater-","Hip","Leidinggevend","Smaakvol","Nachtbrakend","Verzengend","Felblauw","Ondeugend","Onopgemerkt","Hondsmoe","Halfslachtig","Waterwonderland-","Krab voor Stap-","Vers","De Flippers hoogsteigen","Vechtlustig","Samenwerkend","Verstopt","Verborgen","Oplettend","Opgeruimd","Uitgeschakeld","Roekelo","Keiga","Complex","Mistig","Geweldig","Vast","Stil","Nauts Deals-","Uitgekookt","Exceptione","Zorgelo","Elegant","Overweldigend","Timide","Dubbelzinnig","Gestrand","Explosie","Al met al een","Middelmatig","Houtje-touwtje-","Raadselachtig","Ongezien","Salmon Run-spelend","Salmonietendam-","Diepro","Flitsend","Glibberig","Besmeurd","Autoritair","Thuisgekomen","Standaard","Ontwijkend","Aqua Morgana-","Onvoorzichtig","Bedreigd","Kunstzinnig","Punk-","Vrijdenkend","Zout","Klinkend","Breakdance-","Forelviaduct-","Liefelijk","Zongedroogd","Fantasmagorisch","Walruswerf-","Chaosgevecht-spelend","Splatlandisch","Splatsvilles"],
                last: ["Geen titel", ".52 Kaliter-fan",".96 Kaliter-fan","aandenken","aanvaller","aanvalster","aanvoerder","aanvoerster","aartsdemon","abonnee","achilleshiel","acteur","actrice","adviseur","adviseuse","afdelingshoofd","afro-drager","agent","agent 1","agent 2","agent 3","agent 4","agent 8","agente","alleskunner","allrounder","ambachtsman","ambachtsvrouw","amfibie","androïde","Annaki-model","Aqua-Morgana-klant","arbeider","Armada-klant","artiest","artieste","assistent","assistente","assistent-manager","astronaut","astronaute","Atlantiër","Atlantische","atleet","atlete","auteur","avocadosushi","avonturier","baas","Ballonbom-fan","Bamboem 14-fan","Barazushi-model","barbaar","bassist","bassiste","bazin","Bazookarper-fan","Bazookarper-legende","b-boy","beeldenstormer","beer","beestje","beginneling","beller","bendelid","bengel","bergbeklimmer","berin","beroemdheid","beschermde diersoort","bestuurslid","bewaakster","bewaker","b-girl","bloem","bloempotdrager","Bloplader-fan","Blusling-fan","bodyguard","boekenwurm","bolleboos","Bomblikjes-fan","bommenwerper","bordspelspeelster","bordspelspeler","Bottom Feeders-fan","bouillabaisse","Breedroller-fan","brillendrager","brillenmodel","broer","broerlief","broertje","brok energie","bruid","bruidegom","butler","cabaretier","cabaretière","Callie-fan","camper","Carbonroller-fan","carpaccio","carrièretijgerhaai","charmeur","chauffeur","chauffeuse","chef-kok","Chirpy Chips-fan","clubganger","coach","comediènne","contentmaker","cool!","Coole bom-fan","coördinator","coördinatrice","cornrows-drager","crewcut-drager","C-Side-superfan","Curlingbom-fan","Damp Socks-fan","danser","danseres","danskunstenaar","danskunstenares","decorateur","decoratrice","Dedf1sh-fan","Deep Cut-fan","detective","Detector-fan","dinosaurus","directeur","directrice","Diss-Pair-fan","dj","DNA","dochter","doelwit","dolfijn","dorpsoudste","draak","drummer","drumster","Dubbelknallers-fan","Dubbelplonzers-fan","Dubbelspatters-fan","duitendief","Dynamoroller-fan","eerstejaars","ei","eilandbewoner","einzelgänger","elegantie","E-liter 4K met vizier-fan","E-liter 4K-fan","Emberz-model","engel","Enperry-model","entertainer","enthousiasteling","existentie","expert","extraatje","extrovert","familielid","fanaat","fashionista","feestbeest","festivalganger","fietser","fijnproever","filet","Firefin-model","Flexroller-fan","Flitsblaster Pro-fan","Flitsblaster-fan","Floeper-fan","Forge-model","fotograaf","fotografe","freelancer","Front Roe-fan","fuifnummer","gamer","gangster","gedaante","geek","gehakt","gelatine","geluksvogel","gemaskerde","gezelligheidsdier","gezelschapsspelspeelster","gezelschapsspelspeler","gifkikker","Gifmist-fan","gitarist","gitariste","god der vernietiging","godin der vernietiging","Golfbeker-fan","grappenmaker","grashalm","groentje","groepsleider","groepsleidster","groepslid","Grondoorlog-legende","Grondoorlog-strijder","grootmeester","groupie","gup","gymnast","gymnaste","H-3 Langsnuit-fan","haai","haaientemmer","haarbal","hanenkamdrager","Haya-fan","heethoofd","held","heldin","hengelaar","herinnering","hertog","hertogin","Hightide Era-fan","hipster","hittehater","hoedenmodel","holbewoner","hond","hoofdattractie","hotemetoot","huisdier","hulpje","idool","illusie","influencer","Ink Theory-fan","Inkline-model","Inkling","inkt","Inktdief-fan","Inktgordijn-fan","Inktjet-fan","Inktkwast-fan","Inktmijn-fan","inktroller","Inktsprinkler-fan","inktvis","inktvisinkt","inktvisioen","inktvisleven","inktvisring","inktvissliert","introvert","jager","jassenmodel","Joekelschild-fan","jongen","jongere","kaartenverzamelaar","kaartspeelster","kaartspeler","kabouter","kameraad","Kampeerplenzer-fan","kampioen","kampioene","kandidaat","kandidate","kantoorkanjer","kaper","kapper","kapster","kat","Kelvin 525-fan","Ketskogel-fan","kijker","kipnugget","Kladderwerper-fan","Kleefbom-fan","kleinkind","kleurenpalet","Kliederkachel-fan","Klodderblaster-fan","Klodderbom-fan","Klodderroller-fan","Klotstrommel-fan","kluizenaar","kluns","Knalblaster-fan","knottendrager","komiek","koning","koningin","koppotige","korthaardrager","koter","koukleum","Kraakwaar-model","krab","Krabbentank-fan","Krab-voor-stap-klant","Krak-On-model","krijger","kronkelkrullendrager","krullenbol","kunstmatige intelligentie","kwal","kwelgeest","L-3 Stompsnuit-fan","laarzenmodel","langhaardrager","leerling","leerlinge","legendarische strijder","legende","leider","leidster","leraar","lerares","levenskunstenaar","levenskunstenares","loodgieter","Lorelei-fan","luchtspiegeling","Lunablaster-fan","ma","maan","machthebber","maestro","maker","manager","maniak","manusje-van-alles","Mariana-fan","Marie-fan","marinade","mattie","meerdere","meerval","meesterbrein","Megalofoon 5.1-fan","meisje","mens","mensheid","mentor","mentrix","merkartikel","middelmaat","middenscheidingdrager","Mini-Spetling-fan","minister","model","Modusa-klant","moeder","monarch","Morser-fan","murene","murenentemmer","Muriël-fan","muur","muurbloempje","muurbooster","mysterie","nachtegaal","nar","Nautilus-fan","Nauts-deals-klant","nerd","nietsnut","nieuwkomer van het jaar","ninja","N-ZAP-fan","Octariaan","Octariaanse","Octokwast-fan","octoleven","Octoling","Octoling-soldaat","Octoling-soldate","Octopoets-fan","octopus","octopusinkt","oma","ondergeschikte","onderzoeker","onderzoekster","ontwerper","ontwerpster","ontwijker","oog van de storm","oogappel","oom","opa","Opblaashaai-fan","opgeschorenhaardrager","opschepper","opzichter","outfit","overhemdmodel","overlever","pa","Paraplenzer-fan","parttimer","pauper","penningmeester","personeelslid","persoonlijkheid","piloot","plankton","planner","Plenzer-fan","ploegbaas","ploegbazin","pompadourdrager","ponydrager","popster","president","prins","prinses","producer","prof","professor","programmeur","Quadhoppers-fan","rageboldrager","rapper","Ray-fan","rebel","Reddingsbar-fan","regisseur","reiziger","reus","reuzin","ridder","RIF-LEX 450-fan","rijstschotel","Robobom-fan","robot","Rockenberg-model","roerbakschotel","rog","ronin","roofdier","Salmon Run-legende","Salmon Runner","samoerai","samoeraiknotjesdrager","sashimi","SashiMori-fan","saunafan","schattie","schelpdier","Schelpenstrijd-fan","Schelpenstrijd-legende","Schelpschutter-fan","schild","schilder","schilderes","schildpad","Schotlood 5H-fan","schrijfster","schrijver","sensei","Skalop-model","skater","slechterik","Slijkslagstrijder","smaaktester","smeermiddel","snack","sneakermodel","sneeuwpop","sneeuwstorm","snotneus","Spatkuip-fan","Spetbuizer-fan","Spetling-fan","Spetterbui-fan","Spetterraketten-fan","Spetterspuit-fan","Spettertuit-fan","Spetterzone-fan","Spetterzone-legende","spiegel","spierbundel","spion","spionne","Splash Mob-model","spook","spring-in-'t-veld","Springschotel-fan","Squid Sisters-fan","Squid Squad-fan","SquidForce-model","staartdrager","stagiair","stagiaire","stedeling","stekelhaardrager","stemming","Stempelzwieper-fan","stijl","stijlgoeroe","stijlicoon","stilist","stiliste","stokvis","Straalplonzer-fan","streamer","striptekenaar","striptekenares","student","studente","stylist","styliste","Stylospetling-fan","succesnummer","superheld","superheldin","Superspetter jr.-fan","Superspetter Nova-fan","Superspetter Pro-fan","Superspetter-fan","superster","superwapen","supporter","surfer","sushi","Takoroka-model","talenwonder","tante","tegenwindkapseldrager","Teleblaster-fan","Tentacool-fan","Tentakabel-fan","Tentatek-model","therapeut","therapeute","thuiswerker","titelhouder","titelhoudster","toerist","toeriste","toernooispeelster","toernooispeler","toetsenist","toetseniste","tofu","Toni Kensa-model","tonijn","topman","topvrouw","Torentwist-fan","Torentwist-legende","tornado","Torpedobom-fan","totaalpakket","tovenaar","tovenares","traan","trainer","trainster","traktatie","trendsetter","treuzelaar","Triomorser-fan","Triospanner-fan","Tri-tornado-fan","Trizooka-fan","T-shirtmodel","Turquoise October-fan","typje","uitdaagster","uitdager","Ultrastempel-fan","vader","vechter","veelvraat","vergelijking","Verhaalheld","Verhaalheldin","Verhaal-legende","vertegenwoordiger","vertegenwoordigster","veteraan","vicepresident","Viking","vis","visboer","visboerin","vissenei","vissenfossiel","vissenvinder","vissenvindster","vissenvoer","vitaminebom","vlechtdrager","vlechtjesdrager","vogel","volger","voorbeeld","voorhoofd","voorwerpenverzamelaar","voorzitster","voorzitter","vriend","vriendin","vrijbuiter","vrije geest","vuist","waaghals","waarheid","wachter","wapen","welp","wereldkampioen","wereldkampioene","werkpaard","Wet Floor-fan","wetenschapper","wetlook-drager","wezen","winkelbediende","Wisserbladzwieperfan","woesteling","woestelinge","wolmodel","wonderkind","wrakhout","zalm","zalmenleven","zanger","zangeres","zeemeerman","zeemeermin","zeemonster","zeevrucht","zeewezen","Zekko-model","zijstaartdrager","Zink-model","zoetwatervis","zon","zoogdier","zoon","zoutwatervis","zus","zusje","zuslief","zwemmer","zwemster","ω-3-fan"]
            },
            ui: {
                tabText: "Tekst",
                tabBanners: "Bor",
                tabBadges: "Insignes",
                textLanguage: "Taal",
                textName: "Naam",
                textTitles: "Titels",
                textRandomize: "Randomiseren",
                textSlot1: "Sleuf 1",
                textSlot2: "Sleuf 2",
                textSlot3: "Sleuf 3",
                buttonBoth: "Beide Titels",
                buttonFirst: "Eerst",
                buttonLast: "Laatste",
                buttonBanner: "Achtergrond",
                buttonBadges: "Insignes",
                buttonAll: "Allemaal",
                buttonDownload: "Downloaden!",
                textMessage: "Als er tekstfouten zijn, stuur me dan een DM op Twitter!",
                textCustom: "Aanpassen",
                textUpload: "Uploaden",
                textToggle: "Ingeschakeld",
                textColour: "Kleur"
            },
            sections: {
                banners: {
                    vanilla: "In het spel",
                    bandCustom: 'Banden',
                    specCustom: 'Speciale Wapens',
                    mapsCustom: 'Gebieden',
                    miscCustom: 'Gemengd',
                    userCustom: 'Geüpload',
                },
                badges: {
                    coop: "Salmon Run",
                    mode: "Spelmodi",
                    shop: "Winkels",
                    misc: "Gemengd",
                    gear: "Merken",
                    spec: "Speciale Wapens",
                    weps: "Wapens",
                    wepsCustom: "Wapens",
                    subsCustom: "Sub-wapens",
                    modeCustom: "Spelmodi",
                    gearCustom: "Merken",
                    coopCustom: "Salmon Run",
                    charCustom: "Karakters",
                    iconCustom: "Pictogrammen",
                    spf2Custom: "Splatfeest 2",
                    spf3Custom: "Splatfeest 3",
                    cakeCustom: "Komco-souvenir",
                    userCustom: "Geüpload",
                }
            },
            default: ["Splatlandisch", "jongere"]
        },
        // German
        EUde: {
            name: "Deutsch",
            titles: {
                first: ["Kein Titel", "Extra-","Vor zehn Jahren","Minimal","Halb","In fünf Jahren","amiibo sammelnd","Calamari-","DJ","Liebenswert","Technikaffin","Schwankend","VR-","X-Kampf-","Morgen-","24-Stunden-","Lebenslang","Standardkampf-","Hinreißend","Gelegentlich","Unglaublich","Achtarmig","Zehnarmig","Dreifarb-Match-","Kampfmampf-","Front-","Nostalgisch","Riesenglücks-","Terrestrisch","Groß","Verfressen","Hauptsache","Ozeanisch","Brockenjagd-","Massiv","Waghalsig","Lobby-","Klein","Gipfelstürmer-","Arbeitsam","Anmutig","Gesucht-gefunden","Siegeshungrig","Pracht-","Leichtgläubig","Geburtstagskind-","Heute frisch","Jahres-","Firmament-","Unschuldig","Uralt","Alterna-","Schrullig","Fröhlich","Hochmotiviert","Unbewaffnet","Clever","Taghell","Schollensiedlung-","D bessere","Wässrig","Aquariums-","Feurig","Brutzelnd","Esoterisch aufgeklärt","Ranglistenführend","Zentral","Weltbest","Jahrhundertwenden-","Jahrhundert-","Heißgeliebt","Winterliebend","Winterfest","Winterferien-","Nordatlantik-","Nordpazifik-","Nordpolarmeer-","Teilzeit-","Mitternachts-","Revierdecks-","Letztjährig","Vintage-","Limited-Edition-","Irgendei","Glücksbringend","Verlässlich","Rechtshändig","Beidhändig","Linkshändig","Gigantomanisch","Alltags-","Killer-","Makellos","Bohème-","D ewige","Ultimativ","Desperado-","Unterirdisch","Bretthart","Kiemenatmend","Tages-","Hell","Mittags-","Pfannenfertig","Allzeit bereit","Im Urlaub entspannend","Glühend","Aalglatt","Vollautomatisch","Sensationell","Preis/Leistungs-","Indischer-Ozean-","Gefährlich","Ehren-","Sentimental","Gesprächig","Passabl","Schrecklich neugierig","Kämpferisch","Kosmisch","Beschützend","Piksig","Jung","Eminent ergraut","Wachsend","Erwachsen","Frühaufsteher-","Besserwisser-","Souverän","Supergrusel-","Methodisch","Gediegen","Gut organisiert","Vielversprechend","Glorreich","Bärtig","Logisch denkend","Mechano-","Zielgenau","Schwertmuschel-Reservoir-","Mucki-","Autodidakten-","Selfie-lustig","Selbstbewusst","Natürlich","Selbsternannt","Frostig","Brrr, eiskalt","Schuftend","Streng","Überhitzt","Perfekt","Dauerfeuer-","Gut gelaunt","Selbstbestimmt","Reinkarniert","Angriffslustig","Chillig","Einsilbig","Ausgebrannt","Gehetzt","Privatkampf-","Endgültig","Heißhungrig","In die Ecke gedrängt","Modisch","Waschecht","Bös","Lebensfroh","Spaß-","Zeitreisend","Anachronistisch","Original-","D erste","Frühsommer-","Tintenschwappend","Stachelig","Allseits beliebt","Mit-","Schicksalshaft","Heulend","Rachsüchtig","Liquid","Wunder-","Etepetete-","Verlassen","Einsam","D","Original Inkopolis-","Inkopolis-Platz-","Küsten-","Glücks-","So genannt","Knipsfreudig","Prokrastinierend","Baldig","Médusalon-","Hundertpro-","Kalmarsenal-","Grunge-","Tintenbekleckst","Allzweck-","Stürmisch","Toller-Hecht-","Flotte-Sprotte-","Kleiner-Fisch-","Hammerhai-","Dickköpfig","Livestreamend","Sendepausen-","Von Experten empfohlen","Kräftig","Bepelzt","Duftig","Pinakoithek-","Langärmlig","Underground-","Avantgarde-","Vergänglich","Südatlantik-","Südpazifik-","Südpolarmeer-","Pfundig","Kindisch","Brav","Couch-","Indoor-","Outdoor-","Verstohlen","Erstklassig","Nett","Wegekenner-","Wühltisch-","Frühlingsliebend","Frühlingshaft","Gestrig","Weich","Quirlig","Omnipräsent","Peppig","Angesagt","Flatterhaft","Brachial-","Verschwiegen","Intuitiv","Fotogenst","Herbstliebend","Spätsommer-","Herbstlich","Scharlachrot","Casual","Piekfein","Schlank","Lobenswert","Story-Modus-","Maßgefertigt","Wichtig","Überschall-","Windig","Fliegend","Schonkost-","Wellenreitend","Fleißig","Nachwuchs-","Selbstsicher","Gothic-","Goth-","Sommerliebend","Sommerspaßig","Schüchtern","Cetacea-Markt-","Ewig","Einflussreich","Mondän","Stylish","Perlmutt-Akademie-","Umherschippernd","Fangfrisch","Strand-","Schwimmbereit","Tiefseeschwarz","Erschöpft","Aufrichtig","Anerkannt","Volle-Kanne-","Astrein","Makrelenbrücken-","Angreifbar","Nie dagewesen","Morgengrauen-","Fest-","Ehrfurcht gebietend","Mysteriös","Blitzschnell","Heilig","Geheim-","Esoterisch","Stehzocker-","Sattelfest","Fulminant","Schneeweiß","Pur","Überirdisch","Abgebrannt","Kusaya-Quellen-","Krater-","Ödland-","Megafrisur-","Verirrt","Wegrenn-","Fliehend","Glitzernd","Knisternd","Schillernd","Leuchtend","Vollgas-","Aufsteigend","Hochleistungs-","Mahi-Mahi-Resort-","Ebben-","Zünftig","Realistisch","Landesweit","Hartnäckig","Professionell","Abgehalftert","Raubeinig","Fortunas","Ziellos","Morgensonne-","Vollgeheult","Tiefsee-","Suspekt","Chaos-","Nur ","Gemeingefährlich","Knuffelig","Transzendent","Hochsommer-","Scharfäugig","In zweiter Generation","3.-Generation-","Giganto-","Gierig","Geizkragen-","Codename:","Downtown-","Wildwütig","Wild","Verschneit","Durchschlagend","Aalstahl-Metallwerk-","Wasserkraftwerk-Stromschnell-","Betäubt","Lieb","Vergesslich","Angelchamp-","Reich","Retro-","Schnellzeichner-","Splatoon-","Normal-","Sommerferien-","Allererst","Pionier-","Final","Stärkst","D absolut beste","Runderneuert","Optimistisch","Wald-","Namenlos","Frei","Bemerkenswert","Unendlich","Geschmacksneutral","Unerschütterlich","Gnadenlos","Unerreicht","Überknaller-","Messerscharf","Glänzend","Beständig","Wuschelig","Glam-","Übermenschlich","Ober-Giga-","Überwältigend","Super-","Revolutionär","Spitzenspritzig","Laufend","Wochenend-","Landei-","Rockabilly-","Ausgekocht","Tiefwinterlich","Dämmerungs-","Monochrom","Dunkl","Traditionell","Legendär","Knausrig","Möchtegern-","Ruhmsuchend","Müd","Karnivor","High-End-","Naschkätzchen-","Fischfan-","Gepfeffert","Arbeitsliebend","Früchtefan-","Designerkleider-","Reisend","Cartoonfan-","Wander-","Filmliebhaber-","Comicfan-","Gemüseversessen","Kaufkräftig","Gaming-","Tagträumend","Gefühlvoll","Rockig","Unaufhaltsam","Auszubildend","Next-Gen-","Fort-Nautilax-","Frisch gebacken","Trendig","Brandneu","Taufrisch","Seekrank","Amateur-","Superselten","Sengkluft-","Heimelig","Klitschnass","Schnapperchen-Basar-","Vom Schicksal erkoren","Raffiniert veredelt","Ausgemacht","Grell","Analytisch","Meditierend","Gemütlich","Athletisch","Sportlich","Oldschool-","Boss-","Nachbarschaftlich","Gewitternd","Turbotastisch","Arcade-","Zäh","Verschmitzt","Aushilfs-","D reinste","Der Zeit voraus als","Tintentropfend","Überströmend","Fesselnd","Flut-","Jumbo-","Auch unterwegs ","Schwimmreifen-","Schiffswrack-Insel-","Tintenschwarz","Träumer-","Bär-GmbH-Firmen-","Munter","Gealtert","E","Steampunk-","Ernst","Poser-","Locker-flockig","Unsinkbar","Weit entfernt","Kühl","Eher unspritzig","Unverrückbar","Hip-Hop-","Überschäumend","Bemalt","Sich vervielfältigend","Tintenlos","Kuschelig","Offiziell","Springend","Schattenhaft","Modern","Mod-","Knallweiß","Tauch-","Abgetaucht","Hipp","Führungskraft-","Kontrovers","Nachteulen-","Brennend","Hellblau","Ungezogen","Unbemerkt","Hundemüd","So-la-la-","Flunder-Funpark-","Pumpstation-","Spritzig","Inkcade-","Unbeugsam","Teamwork-","Heimlich","Versteckt","Wachsam","Ordentlich","Ausgepowert","Tollkühn","Sprengstoffhaltig","Komplex","Neblig","Einzig wahr","Fach-","Still","Naute-Couture-","Gerissen","D große","Unaufgeregt","Elegant","Durchstarter-","Angsthäschen-","Zwielichtig","Versandet","Explosiv","Alles in allem","08/15-","Wischiwaschi-","Rätselhaft","Unentdeckt","Salmon-Run-","Salmoniden-Damm-","Tiefrot","Poppig","Ungreifbar","Zugeschlammt","Autoritäts-","Heimkehrend","Schlicht","Ausweich-Ass-","Hotlantis-","Locker","Gefährdet","Kunstverliebt","Punk-","Erleuchtet","Gut gesalzen","Tosend","Breakdance-","Streifenaal-Straßen-","Lieblich","Sonnengetrocknet","Phantasmagorisch","Störwerft-","Anarchie-Kampf-","Splatsville-","Splatsvilles"],
                last: ["Kein Titel", ".52-Gallonator",".52-Gallonatorin",".96-Gallonator",".96-Gallonatorin","3R-Schwapper","3R-Schwapperin","Abenteurer","Abenteurerin","Abhänger","Abhängerin","Abteilungsleiter","Abteilungsleiterin","Aficionada","Aficionado","Afro-Träger","Afro-Trägerin","Agent","Agentin","Aioli-Fanboy","Aioli-Fangirl","Airbrusher","Airbrusherin","Allrounder","Allrounderin","Alpomar-Model","Android","Androidin","Anfänger","Anfängerin","Anführer","Anführerin","Angestellte","Angestellter","Angler","Anglerin","Annaki-Model","Arbeiter","Arbeiterin","Arbeitstier","Assistent","Assistentin","Astronaut","Astronautin","Athlet","Athletin","Atlantis-Bewohner","Atlantis-Bewohnerin","Aufseher","Aufseherin","Aufsicht","Ausweicher","Ausweicherin","Autor","Autorin","Baby","Bär","Barazushi-Model","Bärin","Bass-Ass","B-Boy","Beistand","Bengel","Berater","Beraterin","Bergsteiger","Bergsteigerin","Berserker","Berserkerin","B-Girl","Big Boss","Biker","Bikerin","Blaster","Blasterin","Blümchen","Bodyguard","Bomber","Bomberin","Bottom-Feeders-Fan","Bouillabaisse","Braut","Bräutigam","Breitroller","Breitrollerin","Brettspieler","Brettspielerin","Brillen-Boy","Brillen-Girl","Brillen-Model","Bro","Bruder","Brüderchen","Bruderherz","Bücherwurm","Bun-Träger","Bun-Trägerin","Büroleiter","Büroleiterin","Bürositzer","Bürositzerin","Butler","Butlerin","Camper","Camperin","Camp-Pluviator","Camp-Pluviatorin","Carpaccio","CEO","Champion","Charmeur","Charmeurin","Chef","Chefin","Chirpy-Chips-Fan","Clubber","Clubberin","Coach","Comedian","Comedienne","Content Creator","Cool!","Cool-Kugler","Cool-Kuglerin","Cornrows-Träger","Cornrows-Trägerin","Creator","C-Side-Superfan","Curling-Bomber","Curling-Bomberin","Dämon","Dämonin","Damp-Socks-Fan","Dedf1sh-Fan","Delfin","Designer","Designerin","Detektiv","Detektivin","Detektor","Detektorin","Dino","Direktor","Direktorin","Disperser","Disperserin","Diss-Pair-Fan","DJ","DJane","DNS","Dorfvorsteher","Dorfvorsteherin","Drache","Drummer","Drummerin","Dual-Platscher","Dual-Platscherin","Durchschnittsdame","Durchschnittstyp","Dynaroller","Dynarollerin","Ehrenfrau","Ehrenmann","Ei","Einzelgänger","Einzelgängerin","Eleganz","E-liter-4k-Experte","E-liter-4k-Expertin","Engel","Enkel","Enkelin","Enperry-Model","Entertainer","Entertainerin","Enthusiast","Enthusiastin","Erinnerung","Erzdämon","Erzdämonin","Experte","Expertin","Fade-Cut-Träger","Fade-Cut-Trägerin","Fahrer","Fahrerin","Farbenspiel","Fashionista","Faust","Fein-Disperser","Fein-Disperserin","Fern-Blaster","Fern-Blasterin","Festival-Freak","Filetstück","Fisch","Fischei","Fischer","Fischerin","Fisch-Faksimile","Fischfutter","Flauschknäuel","Flex-Roller","Flex-Rollerin","Flintenfisch","Focus-Model","Follower","Followerin","Form","Forscher","Forscherin","Fotograf","Fotografin","Frechdachs","Freelancer","Freelancerin","Freigeist","Freund","Freundin","Frischling","Friseur","Friseurin","Frohnatur","Frontalangreifer","Frontalangreiferin","Front-Roe-Fan","Frostbeule","Funktionär","Funktionärin","Gallertwesen","Gamer","Gamerin","Gangsterboss","Geek","Geist","Gian-Model","Gitarrist","Gitarristin","Gleichung","Glückspilz","Goldfischer","Goldfischerin","Goldfisch-Legende","Göre","Gott der Zerstörung","Göttin der Zerstörung","Grashalm","Gratisbeigabe","Groove","Großmeister","Großmeisterin","Groupie","Grünschnabel","Gruppenmitglied","Haarknotenträger","Haarknotenträgerin","Haftbomber","Haftbomberin","Haftspringer","Haftspringerin","Hai","Haifischbändiger","Haifischbändigerin","Haihämmerer","Haihämmerin","Häkel-Model","Handlanger","Handlangerin","Handwerker","Handwerkerin","Haustier","Headliner","Headlinerin","Held","Held der Welt","Heldin","Heldin der Welt","Helfer","Helferin","Hemd-Model","Herausforderer","Herausforderin","Herrschafts-Enthusiast","Herrschafts-Enthusiastin","Herrschafts-Legende","Heulboje 5.1-Heißblut","Hightide-Era-Fan","Hingucker","Hipster","Hitzehasser","Hitzehasserin","Höhlenmensch","Home-Office-Kollege","Home-Office-Kollegin","Hotlantis-Stammkunde","Hotlantis-Stammkundin","Hund","Hut-Model","Hydrant","Hydrantin","Illusion","Influencer","Influencerin","Inkantation","Inkling","Ink-Theory-Fan","Inselbewohner","Inselbewohnerin","Insta-Bomber","Insta-Bomberin","Irgendwer","Iro-Träger","Iro-Trägerin","Item-Einstreicher","Item-Einstreicherin","Jacken-Model","Jäger","Jägerin","Jakomu-Model","Jobber","Jobberin","Junge","Jungspund","Junior-Kleckser","Junior-Kleckserin","Kalamati-Model","Kalligraf","Kalligrafin","Kalmarsenal-Stammkunde","Kalmarsenal-Stammkundin","Kamerad","Kameradin","Kämpfer","Kämpferin","Karbonroller","Karbonrollerin","Kartenhai","Kartenklauber","Kartenklauberin","Kater","Katze","Kelvin-525-Könner","Kelvin-525-Könnerin","Keyboarder","Keyboarderin","KI","King","Klecks-Bomber","Klecks-Bomberin","Klecks-Doppler","Klecks-Dopplerin","Kleckser","Kleckserin","Klecks-Konzentrator","Klecks-Konzentratorin","Klecksroller","Klecksrollerin","Klecks-Splatling-Kanone","Klempner","Klempnerin","Klotzer-14-Könner","Klotzer-14-Könnerin","Knall-Schwapper","Knall-Schwapperin","Knalltüte","Knusperhuhn","Koch","Köchin","Komiker","Komikerin","Komplettpaket","Kontra-Blaster","Kontra-Blasterin","Koordinator","Koordinatorin","Kopffüßer","Kosmo-Kleckser","Kosmo-Kleckserin","Krabbe","Krabbeltier","Krabbenpanzerpilot","Krabbenpanzerpilotin","Krieger","Krieger der Legende","Kriegerin","Kriegerin der Legende","Kugelschild-Pro-fi","Kuli-Splatling-Künstler","Kuli-Splatling-Künstlerin","Kumpan","Kumpanin","Kunoichi","Künstler","Künstlerin","Kurzhaarträger","Kurzhaarträgerin","Kuttel-Korps-Model","L3-Tintenwerfer","L3-Tintenwerferin","Lachs","LACT-450-Liebhaber","LACT-450-Liebhaberin","Langhaarträger","Langhaarträgerin","Leben","Lebensstil","Leckerbissen","Legende","Lehrer","Lehrerin","Lehrling","Leiter","Leiterin","Leitwolf","Leitwölfin","Leseratte","Limone-Fanboy","Limone-Fangirl","Lockenkopf","Look","Luna-Blaster","Luna-Blasterin","Mädchen","Maestra","Maestro","Magier","Magierin","Mako-Fanboy","Mako-Fangirl","Maler","Malerin","Mama","Manager","Managerin","Manga-Zeichner","Manga-Zeichnerin","Maniac","Manta-Rochen (Ay!)","Mantaro-Fanboy","Mantaro-Fangirl","Marinade","Marina-Fanboy","Marina-Fangirl","Markenfan","Maske","Mauer","Mauerblümchen","Médusalon-Stammkunde","Médusalon-Stammkundin","Medusa-Model","Meeresfrüchtchen","Meereswesen","Meermann","Meermonster","Megawaffe","Meistertänzer","Meistertänzerin","Mensch","Menschlichkeit","Mentor","Mentorin","Minister","Ministerin","Mitglied","Mitte des Sturms","Mittelscheitel-Träger","Mittelscheitel-Trägerin","Model","Monarch","Monarchin","Mond","Muräne","Muränenbändiger","Muränenbändigerin","Muri-Fanboy","Muri-Fangirl","Muschel","Muschelchaos-Enthusiast","Muschelchaos-Enthusiastin","Muschelchaos-Legende","Muskelfrau","Muskelmann","Musterfrisurträger","Musterfrisurträgerin","Mutter","Mysterium","Naturdenkmal","Naturtalent","Naute-Couture-Stammkunde","Naute-Couture-Stammkundin","Nautilus-Nimmersatt","Neuankömmling","Neuling","Newcomer des Jahres","Newcomerin des Jahres","Ninja","Nixe","Nr. 1","Nr. 2","Nr. 3","Nr. 4","Nr. 8","N-Zapper","N-Zapperin","Obermotz","Oktarianer","Oktarianerin","Oktoleben","Oktoling","Oktoling-Soldat","Oktoling-Soldatin","Oktopus","Oktopustinte","Oma","Onkel","Opa","Otaku","Outfit","Outlaw","Papa","Paradebeispiel","Parapluviator","Parapluviatorin","Partykönig","Partykönigin","Partytier","Partyzentrale","Perla-Fanboy","Perla-Fangirl","Persönlichkeit","Pilot","Pilotin","Pilzkopf","Planer","Planerin","Plankton","Platscher","Platscherin","Pleitegeier","Pomadennutzer","Pomadennutzerin","Ponyträger","Ponyträgerin","Popstar","Powerfrau","Powertyp","Präsident","Präsidentin","Prinz","Prinzessin","Prinzesslein","Prinzlein","Produzent","Produzentin","Professor","Professorin","Profi","Profi-Kleckser","Profi-Kleckserin","Programmierer","Programmiererin","Promi","Pumpstation-Stammkunde","Pumpstation-Stammkundin","Quadhopper","Quadhopperin","Quälgeist","Qualle","Quastonator","Quastonatorin","Queen","Quetscher","Quetscherin","Radfahrer","Radfahrerin","Rapper","Rapperin","Rattenschwanz-Träger","Rattenschwanz-Trägerin","Raubein","Raubtier","R-BLR-NZR","R-BLR-NZRN","Rebell","Rebellin","Reisende","Reisender","Reisschale","Repräsentant","Repräsentantin","Revierdecks-Kämpfer","Revierdecks-Kämpferin","Revierkampf-Fan","Revierkampf-Legende","Riese","Riesin","Rilax-Model","Rittersfrau","Rittersmann","Rivale","Rivalin","Robo-Bomber","Robo-Bomberin","Roboter","Rockberg-Model","Ronin","Rowdyboss","Rückblick","Rufer","Ruferin","Ruhepol","S3-Tintenwerfer","S3-Tintenwerferin","Sagitron-Model","Salmonidenleben","Salmon-Run-Legende","Salmon-Runner","Salzwasserfisch","Samurai","Sänger","Sängerin","Sashimi","SashiMori-Fan","Säugetier","Schaltermeister","Schaltermeisterin","Schatzi","Schauerwellensurfer","Schauerwellensurferin","Schauspieler","Schauspielerin","Scherzkeks","Schichtleiter","Schichtleiterin","Schild","Schildkröte","Schmiere","Schneefrau","Schneemann","Schneesturm","Schreiber","Schreiberin","Schurke","Schurkin","Schutzgott","Schutzgöttin","Schwachpunkt","Schwapper","Schwapperin","Schwarmraketen-Schleuder","Schwester","Schwesterchen","Schwesterherz","Schwimmer","Schwimmerin","Sea-Sirens-Fan","Seebär","Seebärin","Seitenponyträger","Seitenponyträgerin","Seitschritt-König","Seitschritt-Königin","Seitzopfträger","Seitzopfträgerin","Sekretär","Sekretärin","Sensei","Sepiator","Sepiatorin","Sepitox-Nebler","Sepitox-Neblerin","Shichiryn-Model","Sis","Skater","Skaterin","Snack","Sneaker-Model","Sohn","Sonne","Sparfuchs","Sparfüchsin","Spezi","Spiegel","Spind-Spezialist","Spind-Spezialistin","Spion","Spionin","Spirallockenträger","Spirallockenträgerin","Splatling-Spezialist","Splatling-Spezialistin","Sprachtalent","Sprenkler-Sportler","Sprenkler-Sportlerin","Springer","Springerin","Sprinkler","Sprinklerin","Sprücheklopfer","Sprücheklopferin","Sprudel-Bomber","Sprudel-Bomberin","Sprungbojer","Sprungbojerin","Squid-Squad-Fan","Stachelhaarträger","Stachelhaarträgerin","Stadtjunge","Stadtmädel","Starttrödler","Starttrödlerin","Stempel-Splatana-Meister","Stempel-Splatana-Meisterin","Stiefel-Model","Stilikone","Stimmung","Stirn","Story-Legende","Story-Star","Streamer","Streamerin","Student","Studentin","Sturmspieler","Sturmspielerin","Style","Stylist","Stylistin","Subkultur-Kenner","Subkultur-Kennerin","Superheld","Superheldin","Superhirn","Superstar","Surfer","Surferin","Surimi","Surimi-Syndicate-Fan","Sushi","Sushi-Schiffchen","Süßwasserfisch","Tabletop-Gamer","Tabletop-Gamerin","Tante","Tänzer","Tänzerin","Tataki","TentaCool-Fan","Tentatek-Model","Therapeut","Therapeutin","Thermalquellen-Fan","TintactiX-Model","Tinte","Tintegrator","Tintegratorin","Tintendüser","Tintendüserin","Tintenfisch","Tintenfischleben","Tintenfischring","Tintenfischroller","Tintenfischrollerin","Tintenfischtinte","Tintenminenleger","Tintenminenlegerin","Tintenschauerer","Tintenschauerin","Tintenwaller","Tintenwallerin","Titelträger","Titelträgerin","Tochter","Tofublock","Tollpatsch","Tonangeber","Tonangeberin","Toni-Kensa-Model","Tornado","Torpedierer","Torpediererin","Tourist","Touristin","Trainee","Trainer","Trainerin","Tränchen","Tranktankschenk","Tranktankschenkin","Treibgut","Trendsetter","Trendsetterin","Tri-Stringer","Tri-Stringerin","Tri-Tintfernator","Tri-Tintfernatorin","Trizooka-Trickser","Trizooka-Trickserin","Trockenfisch","Trockentintenfisch","Trommel-Schwapper","Trommel-Schwapperin","Trugbild","T-Shirt-Model","T-Tuber","T-Tuberin","Turbo-Blaster","Turbo-Blaster Plus","Turbo-Blasterin","Turbo-Blasterin Plus","Turmkontrolle-Legende","Turmkontrolleur","Turmkontrolleurin","Turquoise-October-Fan","Überlebenskünstler","Überlebenskünstlerin","Ultra-Stempler","Ultra-Stemplerin","UnderCover-Agent","UnderCover-Agentin","Untergebene","Untergebener","Vater","Verkäufer","Verkäuferin","Verkoster","Verkosterin","Veteran","Veteranin","Vielfraß","Vitaminbombe","Vizepräsident","Vizepräsidentin","Vogel","Vokalist","Vokalistin","Vorarbeiter","Vorarbeiterin","Vorsitzende","Vorsitzender","Vorstandsmitglied","Wächter","Wächterin","Waffe","Wagehals","Wandspringer","Wandspringerin","Wannen-Schwapper","Wannen-Schwapperin","Wassergeist","Weise des Berges","Weiser des Berges","Wels","Wesenheit","Wet-Floor-Fan","Wetlook-Träger","Wetlook-Trägerin","Wettkämpfer","Wettkämpferin","Wikinger","Wikingerin","Winkelmarker","Winkelmarkerin","Wischer-Splatana-Schwinger","Wischer-Splatana-Schwingerin","Wissenschaftler","Wissenschaftlerin","Witzgestalt","Wokgemüse","Wuschelkopf","Wüterich","Wüterin","Zekko-Model","Ziel-E-liter-4K-Zauberer","Ziel-E-liter-4K-Zauberin","Ziel-Konzentrator","Ziel-Konzentratorin","Zielscheibe","Zopfträger","Zopfträgerin","Zuschauer","Zuschauerin","ω-3-Fan"]
            },
            ui: {
                tabText: "Text",
                tabBanners: "Banner",
                tabBadges: "Abzeichen",
                textLanguage: "Sprache",
                textName: "Name",
                textTitles: "Titel",
                textRandomize: "Randomisieren",
                textSlot1: "Schlitz 1",
                textSlot2: "Schlitz 2",
                textSlot3: "Schlitz 3",
                buttonBoth: "Beide Titel",
                buttonFirst: "Erste",
                buttonLast: "Zuletzt",
                buttonBanner: "Banner",
                buttonBadges: "Abzeichen",
                buttonAll: "Alle",
                buttonDownload: "Herunterladen!",
                textMessage: "Wenn es irgendwelche Textfehler gibt, schicke mir bitte eine DM auf Twitter!",
                textCustom: "Anpassen",
                textUpload: "Ermöglicht",
                textToggle: "Aktiviert",
                textColour: "Farbe"
            },
            sections: {
                banners: {
                    vanilla: "Im Spiel",
                    bandCustom: 'Musikgruppe',
                    specCustom: 'Spezielle Waffen',
                    mapsCustom: 'Bereiche',
                    miscCustom: 'Sonstig',
                    userCustom: 'Hochgeladen',
                },
                badges: {
                    coop: "Salmon Run",
                    mode: "Spielmodi",
                    shop: "Geschäfte",
                    misc: "Sonstig",
                    gear: "Marken",
                    spec: "Spezielle Waffen",
                    weps: "Waffen",
                    wepsCustom: "Waffen",
                    subsCustom: "Sekundärwaffen",
                    modeCustom: "Spielmodi",
                    gearCustom: "Marken",
                    coopCustom: "Salmon Run",
                    charCustom: "Figuren",
                    iconCustom: "Symbole",
                    spf2Custom: "Splatfest 2",
                    spf3Custom: "Splatfest ",
                    cakeCustom: "Kamabo-Souvenir",
                    userCustom: "Hochgeladen",
                }
            },
            default: ["Splatsville-", "Jungspund"]
        },
        // Italian
        EUit: {
            name: "Italiano",
            titles: {
                last: ["Senza titolo", "complet","con 10 anni di esperienza","microscopic","al 50%","da qui a 5 anni","collezionista di amiibo","calamaresc","funambol della console","adorabile","tecnologic","vacillante","virtuale","delle partite X","di primo mattino","24 ore su 24","etern","delle partite amichevoli","incantevole","occasionale","incredibile","a otto tentacoli","a dieci tentacoli","degli scontri tricolore","del PigliaPesci","in prima linea","nostalgic","nat con la camicia","terrestre","grande","affamat","prima di tutto","oceanic","in un'orda di Pinne Pingui","gigantesc","audace","della lobby","piccol","montanar","laborios","leggiadr","ritrovat","vincente","superb","credulon","che fa gli anni","odiern","di quest'anno","del firmamento","innocente","antic","di Alterna","bizzarr","allegr","caric","disarmat","intellettuale","illuminat a giorno","delle Cime Sogliolose","superiore","acquos","in un acquario","impetuos","rovente","illuminat","tra  migliori","centrale","migliore del mondo","di fine secolo","del secolo","amorevole","invernale","pront per l'inverno","in vacanza d'inverno","dell'Atlantico settentrionale","del Pacifico settentrionale","dell'Oceano Artico","tirocinante","di mezzanotte","che gioca a Splattanza","dell'anno scorso","vintage","a edizione limitata","qualunque","di buon auspicio","affidabile","destrors","ambidestr","mancin","ingrandit","giornalier","letale","incontaminat","stile bohémien","imperitur","élite","criminale","sotterrane","valid","anfibi","diurn","luminos","di mezzogiorno","immediat","sempre pront","vacanzier","incandescente","lisci","automatizzat","sensazionale","frugale","dell'Oceano Indiano","pericolos","onorari","sdolcinat","chiacchieron","davvero brav","ficcanaso","competitiv","cosmic","protettiv","appuntit","giovane","appassit","in crescita","adult","pront all'azione","precoce","sofisticat","spaventos","metodic","azzimat","organizzat","promettente","carismatic","barbut","logic","a orologeria","occhio di falco","del Canale Cannolicchio","muscolos","autodidatta","che scatta selfie","sicur di sé","naturale","autoproclamat","gelid","ghiacciat","alacre","accanit","stracott","perfett","dall'inchiostro facile","al settimo cielo","in carne e ossa","reincarnat","attaccante","rilassat","pacat","prosciugat","nel mezzo di un'orda","delle partite private","definitiv","famelic","alle corde","chic","irriducibile","malvagi","edonista","divertente","che viaggia nel tempo","anacronistic","originale","originari","da inizio estate","a tutto inchiostro","spinos","adorat dai fan","di compagnia","prescelt","ululante","vendicativ","fluid","miracolos","scostante","solitari","isolat","nativ di Coloropoli","coloropolitan","della piazza di Coloropoli","da spiaggia","baciat dalla fortuna","(alias)","fotograf","procrastinat","dell'anno prossimo","intendit di abiti","al 100%","intendit di armi","grunge","copert di inchiostro","multiuso","tempestos","notevole","accettabile","migliorabile","inarrestabile","caparbi","in diretta","non in linea","migliore di sempre","in carne","annebbiat","fragrante","del Museo di Cefalò","a maniche lunghe","clandestin","innovativ","istantane","dell'Atlantico meridionale","del Pacifico meridionale","dell'Oceano Antartico","nerborut","immatur","beneducat","sedentari","da interni","da aria aperta","ombros","affermat","mitic","dei vicoli","impaziente","primaverile","fresc di primavera","di ieri","tener","esuberante","attuale","vivace","rinomat","svolazzante","ampollos","reticente","perspicace","fotogenic","autunnale","di fine estate","dai colori autunnali","cremisi","casual","delizios","snell","encomiabile","della modalità storia","su misura","importante","supersonic","ventos","volante","che mangia poco","che cavalca le onde","diligente","novellin","determinat","gotic","goth","estiv","che si gode l'estate","timid","del Mercatotano","per l'eternità","all'avanguardia","di tendenza","stilos","del Campus Hippocampus","marinar","pescat di fresco","costier","pront per la piscina","nero pece","esaust","sincer","legittim","in gambero","autentic","del Ponte Sgombro","vulnerabile","inedit","mattutin","festos","maestos","misterios","fulmine","sacr","segret","esoteric","in piedi","in sella","abbacinante","color alabastro","pur","celestiale","al verde","delle Fermenterme","del Cratere","delle terre desolate","pien di sé","smarrit","smidollat","fuggitiv","luccicante","fulgid","lucente","brillante","a tutto gas","in carriera","performante","di Villanguilla","di bassa marea","vigoros","genuin","nazionale","perseverante","competente","banale","feroce","fortunat","vagante","mattinier","segnat dalle lacrime","dei mari profondi","losc","caotic","disadorn","brutale","dolce","dell'altro mondo","di mezza estate","dalla vista aguzza","di seconda generazione","di 3ª generazione","ultra","avid","tirchi","(nome d'arte)","cittadin","selvaggi","selvatic","nevos","della Discarica Tritatutto","della Centrale Anguilla Elettrica","intorpidit","gentile","smemorat","a pesca","ricc","inimitabile","rétro","disegna","di Splatoon","comune","in vacanza d'estate","iniziale","della prima ondata","finale","più forte di tutti","migliore di tutti","nuovissim","ottimista","boschiv","anonim","senza pensieri","illustre","infinit","insipid","imperturbabile","spietat","impareggiabile","culminante","spigolos","scintillante","sald","soffice","glam","sovruman","massicci","strabiliante","super","rivoluzionari","pregevolissim","sempre di corsa","in vacanza","campagnol","rockabilly","sfrigolante","da pieno inverno","crepuscolare","monocromatic","oscur","tradizionale","leggendari","assetat di denaro","ambizios","in cerca di fama","sonnolent","carnivor","buongustai","golos","patit della pesca","sarcastic","stacanovista","fruttivor","firmat","in viaggio","cartonista","escursionista","cinefil","patit di fumetti","verdurivor","spendaccion","gioca","sognante","sentimentale","rockeggiante","irrefrenabile","apprendista","di ultima generazione","della Fortezza Spiralsalmone","ultim","alla moda","tutt","appena pescat","col mal di mare","amat","introvabile","del Grank Canyon","accogliente","fradici","del Mercato Fruttato","predestinat","confezionat","espert","in cerca di attenzioni","scientific","meditativ","comod","sportiv","atletic","antiquat","professionista","amichevole","fragoros","turbo","da sala giochi","tenace","malizios","principiante","ver","sperimentale","grondante inchiostro","straripante","affascinante","d'alta marea","titanic","girovag","fluttuante","dell'Isoletta del relitto","nerissim","distratt","della Ursus & Co","pimpante","invecchiat","innat","steampunk","seri","sbruffon","come se niente fosse","galleggiante","lontan","spigliat","poco fresc","inamovibile","hip-hop","traboccante","dipint","che si moltiplica","senza inchiostro","morbid","della piazza","saltellante","indistint","modern","mod","bianco puro","tuffat","immergibile","pop","promessa","essenziale","nottambul","scottante","blu brillante","birichin","indesiderat","spossat","esitante","di Soglioland","intendit di calzature","pregevole","del Branco","nella mischia","cooperativ","furtiv","nascost","difensiv","sistematic","annientat","spericolat","prorompente","sfarzos","nebbios","unic","carrierista","silenzios","intendit di copricapi","sagace","eccezionale","alla mano","elegante","soverchiante","timoros","ambigu","sabbios","dirompente","generic","usuale","approssimativ","enigmatic","occult","della Salmon Run","della Diga salmonoide","rosso profondo","appariscente","sfuggente","infangat","aspirante capitan","di ritorno a casa","semplice","schiv","intendit di oggetti vari","superficiale","in via di estinzione","artistic","con la cresta","ispirat","salat","rimbombante","da breakdance","del Sobborgo Siluriano","squisit","essiccat","fantasmagoric","del Cantiere Pinnenere","delle partite anarchiche","splattonian","di Splatville"],
                first: ["Senza titolo", "Addestratore","Addestratrice","Adolescente","Agente","Aiutante","Allenatore","Allenatrice","Allieva","Allievo","Alpinista","Amante della Bazookarp","Amante della modalità storia","Amante della Salmon Run","Amante della Torre mobile","Amante della Vongol gol","Amante delle terme","Amante delle zone splat","Amica","Amico","Ammaliatore","Ammaliatrice","Amministratore delegato","Amministratrice delegata","Androide","Anello debole","Anello di totano","Angelo","Anima della festa","Animale da festa","Animale domestico","Antagonista","Appassionata","Appassionato","Arcidemone","Arcidemonessa","Arma","Arma definitiva","Artigiana","Artigiano","Artista","Assaggiatore","Assaggiatrice","Assaltatore","Assaltatrice","Assistente","Astronauta","Atleta","Attore","Attrice","Autista","Autore","Autrice","Avventuriera","Avventuriere","Avvitotanatore","Avvitotanatrice","Ballerina","Ballerino","Barone all'indietro","Baronessa all'indietro","Batterista","B-boy","Bersaglio","Berserker","B-girl","Bivalve","Boccolona","Boccolone","Bombardiera splash","Bombardiere splash","Boss","Boss abissale","Braccio destro","Brillantinatore","Brillantinatrice","Bufera di neve","Cacciatore","Cacciatrice","Campeggiatore","Campeggiatrice","Campione","Campione in carica","Campione mondiale","Campionessa","Campionessa in carica","Campionessa mondiale","Cane","Cannoniera","Cannoniere","Cantante","Capello bagnato","Capello pareggiato","Capetta","Capetto","Capo","Capo di stato","Capo rasato","Capobanda","Capomastro","Caporeparto","Capovillaggio","Carne trita","Carpaccio","Caschetta","Caschetto","Cavaliera","Cavaliere","Cavernicola","Cavernicolo","Cefalopode","Celebrità","Cervellona","Cervellone","Chiamante","Chitarrista","Ciclista","Ciotola di zuppa","Codina","Codino","Colletto bianco","Collezionista di carte","Collezionista di oggetti","Colpitore di interruttori","Colpitrice di interruttori","Comica","Comica di stand-up","Comico","Comico di stand-up","Commessa","Commesso","Compagna d'armi","Compagno d'armi","Compare","Concorrente","Condottiera","Condottiero","Consigliera","Consigliere","Consulente","Conte del corto","Contendente","Contessa del corto","Coordinatore","Coordinatrice","Corpo","Creatore","Creatore di contenuti","Creatrice","Creatrice di contenuti","Creatura marina","Cucciola","Cucciolo","Cuoca","Cuoco","Dea della distruzione","Delfino","Detrito galleggiante","Dinosauro","Dio della distruzione","Dipendente","Direttore","Direttore generale","Direttrice","Direttrice generale","Dirigente","Discepola","Discepolo","Discotecara","Discotecaro","Diva","Divo","DJ","DNA","Domatore di anguille","Domatore di squali","Domatrice di anguille","Domatrice di squali","Drago","Duca","Duchessa","Eleganza personificata","Entità","Entusiasta","Equazione","Eroe","Eroina","Esordiente","Esordiente dell'anno","Esperta","Esperto","Estetista","Familiare","Fan degli Hightide Era","Fan degli Ink Theory","Fan degli Squid Squad","Fan degli ω-3","Fan dei Bottom Feeders","Fan dei Chirpy Chips","Fan dei Damp Socks","Fan dei Diss-Pair","Fan dei festival","Fan dei Front Roe","Fan dei SashiMori","Fan dei Turquoise October","Fan dei Wet Floor","Fan del Trio Triglio","Fan delle grandi firme","Fan delle Sea Sirens","Fan delle Tenta Cool","Fan delle treccine afro","Fan di Alga","Fan di Dedf1sh","Fan di Mantaleo","Fan di Marina","Fan di Morena","Fan di Nori","Fan di Pinnuccia","Fan di Stella","Fan sfegatata","Fan sfegatato","Fanatica","Fanatico","Fanciulla","Fanciullo","Fantasma","Festaiola","Festaiolo","Figlia","Figlio","Filetto","Filo d'erba","Fiore","Fortunella","Fortunello","Fotografa","Fotografo","Frangettista","Fratello","Fratello maggiore","Fratello minore","Freddolosa","Freddoloso","Frittura al salto","Fronte","Frutto di mare","Fumettista","Fuoriclasse","Fuorilegge","Furfante","Gatta","Gatto","Gaudente","Gelatina","Ghiottona","Ghiottone","Gigante","Gigantessa","Giocatore da tavolo","Giocatore di carte","Giocatore di società","Giocatrice da tavolo","Giocatrice di carte","Giocatrice di società","Giullare","Governante","Gran lavoratore","Gran lavoratrice","Gran maestra","Gran maestro","Granchio","Grosso calibro","Guardia del corpo","Guardia giurata","Guardiana","Guardiano","Guerriera","Guerriera leggendaria","Guerriera mollusca","Guerriero","Guerriero leggendario","Guerriero mollusco","Habitué de La Modusa","Habitué del Chelescarpe","Habitué del Guscintesta","Habitué del Misto mare","Habitué dell'Antica armeria","Habituée de La Modusa","Habituée del Chelescarpe","Habituée del Guscintesta","Habituée del Misto mare","Habituée dell'Antica armeria","Hippy","Hipster","I.A.","Icona di stile","Iconoclasta","Idraulica","Idraulico","Illusione","Impiegata","Impiegato","Impinnatore","Impinnatrice","Impronta di pesce","Inchiostro","Inchiostro di mollusco","Inchiostro di polpo","Influencer","Inkantation","Inkling","Insegnante","Insetto","Intrattenitore","Intrattenitrice","Investigatore","Investigatrice","Isolana","Isolano","Ittiologa","Ittiologo","La vita stessa","Lacrima","Lady codino alto","Lavoratore da remoto","Lavoratore part-time","Lavoratrice da remoto","Lavoratrice part-time","Leggenda","Leggenda della Bazookarp","Leggenda della modalità storia","Leggenda della Salmon Run","Leggenda della Torre mobile","Leggenda della Vongol gol","Leggenda delle mischie mollusche","Leggenda delle zone splat","Libera professionista","Libero professionista","Look","Lottatore","Lottatrice","Lubrificante","Luminare","Luna","Lupo solitario","Madre","Maestra","Maestra delle treccine","Maestra di vita","Maestro","Maestro delle treccine","Maestro di vita","Maga","Maga delle onde","Maggiordomo","Mago","Mago delle onde","Maki all'avocado","Mamma","Mammifero","Manta","Maschera","Matricola","Medusa","Membro","Membro del gruppo","Memoria","Mentore","Ministra","Ministro","Miraggio","Miss classica","Mister classico","Mistero","Misto marittimo","Modaiola","Modaiolo","Modella","Modella di Annak","Modella di Arome","Modella di BaraS","Modella di CalamaX","Modella di camicie","Modella di Capasaint","Modella di cappelli","Modella di Chimmon","Modella di Cnidarya","Modella di Ezko","Modella di Fortia","Modella di giacche","Modella di Imperial","Modella di Krakensen","Modella di maglieria","Modella di Maremont","Modella di Nero Marlin","Modella di occhiali","Modella di Pe-Chic","Modella di Rockenburg","Modella di Sepia","Modella di sneaker","Modella di stivali","Modella di Torryd","Modella di Totanic","Modella di T-shirt","Modello","Modello di Annak","Modello di Arome","Modello di BaraS","Modello di CalamaX","Modello di camicie","Modello di Capasaint","Modello di cappelli","Modello di Chimmon","Modello di Cnidarya","Modello di Ezko","Modello di Fortia","Modello di giacche","Modello di Imperial","Modello di Krakensen","Modello di maglieria","Modello di Maremont","Modello di Nero Marlin","Modello di occhiali","Modello di Pe-Chic","Modello di Rockenburg","Modello di Sepia","Modello di sneaker","Modello di stivali","Modello di Torryd","Modello di Totanic","Modello di T-shirt","Mollusco","Mollusco da Splattanza","Mollusco mancato","Mollusco secco","Monarca","Monella","Monello","Mostro marino","Murena","Muro","Muscolo","Musona","Musone","Nemica del caldo","Nemico del caldo","Neofita","Nerd","Ninja","Nipote","Nonna","Nonno","Novizia","Novizio","Nullatenente","Numero 1","Numero 2","Numero 3","Numero 4","Numero 8","Nuotatore","Nuotatrice","Occhio del ciclone","Octariana","Octariano","Octoling","Oggetto di affetto","Omaggio","Operaia","Operaio","Organizzatore","Organizzatrice","Orsa","Orso","Padre","Palla di pelo","Papà","Paradigma","Parrucchiera afro","Parrucchiere afro","Pasticciona","Pasticcione","Perdigiorno","Personaggio famoso","Pescatore","Pescatrice","Pesce","Pesce d'acqua dolce","Pesce d'acqua salata","Pesce essiccato","Pesce gatto","Petardo","Pettegola","Pettegolo","Pezzo grosso","Piatto di pesce","Pilota","Pittore","Pittrice","Pivella","Pivello","Plancton","Poliglotta","Pollo fritto","Polpo","Predatore","Predatrice","Presidente","Presidentessa","Prima ballerina","Primo ballerino","Principe","Principessa","Prodigio","Produttore","Produttrice","Professore","Professoressa","Programmatore","Programmatrice","Pugno","Punk","Pupazzo di neve","Quattrocchi","Ragazza","Ragazza di città","Ragazzina","Ragazzino","Ragazzo","Ragazzo di città","Rapper","Rappresentante","Re","Re dello chignon","Regina","Regina dello chignon","Responsabile","Ribelle","Ricercatore","Ricercatrice","Ricordo","Robot","Ronin","Saggia della montagna","Saggio della montagna","Salamoia","Salmone","Saltatore","Saltatore laterale","Saltatrice","Saltatrice laterale","Samurai","Sashimi","Scagnozza","Scagnozzo","Scavezzacollo","Scienziata","Scienziato","Scodella di riso","Scrittore","Scrittrice","Scudo","Secchiona","Secchione","Segretaria","Segretario","Seguace","Ser codino alto","Sfidante","Sfumatina","Sfumatino","Simbolo di eleganza","Sirena","Sistema","Skater","Soldatessa Octoling","Soldato Octoling","Sole","Sorella","Sorella maggiore","Sorella minore","Sovrintendente","Spalla comica","Spazzolatore","Spazzolatrice","Specchio","Specie protetta","Spettatore","Spettatrice","Spia","Spilorcia","Spilorcio","Spirito acquatico","Spirito libero","Spirito maligno","Sposa","Sposo","Spuntino","Squalo","Star dell'armadietto","Stella del pop","Stile di vita","Stilista","Streamer","Studente","Studentessa","Subordinata","Subordinato","Superboss","Supereroe","Supereroina","Superfan dei C-Side","Superstar","Surfista","Survivalista","Sushi","Taglio pregiato","Tartaruga","Tastierista","Tavolozza","Tenuta","Terapista","Testa calda","Tifosa","Tifoso","Timidona","Timidone","Tipa a modo","Tipa da partenza lenta","Tipa da schivata","Tipa di classe","Tipa energica","Tipa estroversa","Tipa mitilica","Tipa molluscosa","Tipa polpesca","Tipa qualunque","Tipa salmonesca","Tipa versatile","Tipo a modo","Tipo da partenza lenta","Tipo da schivata","Tipo di classe","Tipo energico","Tipo estroverso","Tipo mitilico","Tipo molluscoso","Tipo polpesco","Tipo qualunque","Tipo salmonesco","Tipo versatile","Tizia","Tizio","Tofu","Tonno scottato","Topo di biblioteca","Tornado","Trecciofora","Treccioforo","Trendsetter","Trovapesci","Turista","Umana","Umanità","Umano","Umore","Uovo","Uovo di pesce","Utente di aerografo","Utente di ampiorullo","Utente di appiccibombe","Utente di ARCO-RAL 450","Utente di bimbamboom","Utente di blaster","Utente di blaster a distanza","Utente di blaster da mischia","Utente di blaster élite","Utente di blaster lunar","Utente di blaster rapido","Utente di bombe a gassosa","Utente di bombe curling","Utente di bombe splash","Utente di bombrello","Utente di calamaravaggio","Utente di calibro 2000","Utente di calibro 3000","Utente di cimici","Utente di flexi-rullo","Utente di gran bolla scudo","Utente di granate","Utente di granbotto","Utente di granchio armato","Utente di idrante","Utente di jet splat","Utente di kalamarapid","Utente di kelvin duplo 525","Utente di lanciarazzi","Utente di lapis cecchino 5H","Utente di marker","Utente di marker d'assalto","Utente di mega timbro","Utente di mine","Utente di mini splatling","Utente di molluscatto","Utente di moscarpino duplo","Utente di motosqualo","Utente di muro di colore","Utente di Nautilus","Utente di nebbia tossica","Utente di N-ZAP","Utente di pioggia di colore","Utente di repolper duplo","Utente di rinfrigorente","Utente di ripolpella duplo","Utente di robo-bombe","Utente di rullo di carbonio","Utente di rullo dinamo","Utente di rullo splat","Utente di secchiostro","Utente di secchiostro centrifuga","Utente di secchiostro triplo","Utente di secchiostro vasca","Utente di sonar esplosivo","Utente di sparacolore recluta","Utente di sparalinee","Utente di sparasole","Utente di sparatenda","Utente di splasher","Utente di splasher élite","Utente di splasher Nova","Utente di splatling a tanica","Utente di splattalama","Utente di splatter a carica","Utente di splatter con mirino","Utente di spruzzatore","Utente di strizzer","Utente di sweeper","Utente di sweeper duplo","Utente di tergilama","Utente di termosecchiostro","Utente di tetrapenna","Utente di tinter a carica 4K","Utente di tinter con mirino 4K","Utente di tintofono 5.1","Utente di tintubator","Utente di tinturicchio","Utente di torpedinatore","Utente di trasferitore","Utente di tri-calamarco","Utente di triplete","Utente di triplete compatto","Utente di triplo tornado","Utente di ultraturbinator","Utente di vampinchiostro","Vagabonda","Vagabondo","Veterana","Veterano","Viaggiatore","Viaggiatrice","Vicedirettore","Vicedirettrice","Vicepresidente","Vicepresidentessa","Vichinga","Vichingo","Videogiocatore","Videogiocatrice","VIP","Vitamina","Vocalista","Volatile","Zietta","Zietto"]
            },
            ui: {
                tabText: "Testo",
                tabBanners: "Bandiera",
                tabBadges: "Distintivi",
                textLanguage: "Lingua",
                textName: "Nome",
                textTitles: "Titoli",
                textRandomize: "Rendi casuale",
                textSlot1: "Slot 1",
                textSlot2: "Slot 2",
                textSlot3: "Slot 3",
                buttonBoth: "Tutti i Titoli",
                buttonFirst: "Primo",
                buttonLast: "Scorso",
                buttonBanner: "Bandiera",
                buttonBadges: "Distintivi",
                buttonAll: "Tutti",
                buttonDownload: "Scarica!",
                textMessage: "Se ci sono errori di testo, per favore DM me su Twitter!",
                textCustom: "Personalizzare",
                textUpload: "Caricare",
                textToggle: "Attivato",
                textColour: "Colore"
            },
            sections: {
                banners: {
                    vanilla: "In gioco",
                    bandCustom: 'Gruppo musicale',
                    specCustom: 'Armi speciali',
                    mapsCustom: 'Le zone',
                    miscCustom: 'Varie',
                    userCustom: 'Caricato',
                },
                badges: {
                    coop: "Salmon Run",
                    mode: "Modalità di gioco",
                    shop: "Negozi",
                    misc: "Varie",
                    gear: "Marche",
                    spec: "Armi speciali",
                    weps: "Armi",
                    wepsCustom: "Armi",
                    subsCustom: "Armi secondarie",
                    modeCustom: "Modalità di gioco",
                    gearCustom: "Marche",
                    coopCustom: "Salmon Run",
                    charCustom: "Caratteri",
                    iconCustom: "Icone",
                    spf2Custom: "Splatfest 2",
                    spf3Custom: "Splatfest 3",
                    cakeCustom: "Souvenir Impastec",
                    userCustom: "Caricato",
                }
            },
            default: ["Fanciullo", "splattonian"]
        },
        // Russian
        EUru: {
            name: "Pусский",
            titles: {
                first: ["Без заголовка", "совершенн","наученн опытом","микроскопическ","половинчат","планирующ наперед","коллекционирующ amiibo","кальмарн","диджейн","симпатичн","техничн","шатающ","виртуальн","активн в бою X","ранн","круглосуточн","пожизненн","активн в бою салаг","сногсшибательн","случайн","невероятн","восьмищуп","десятищуп","активн в трехцветной стычке","активн в «Кусь да Красе»","передов","ностальгичн","сверхудачлив","сухопутн","больш","голодн","преимущественн","океанск","охотящ на сковорейдеров","крупн","дерзк","активн в Холле","маленьк","горн","работающ","грациозн","отысканн","непобедим","отменн","наивн","празднующ день рождения","сегодняшн","нынешн","поднебесн","невиновн","древн","альтернск","причудлив","радостн","усиленн","безоружн","смышлен","обеденн","активн в «Камбалово»","конкурентн","водн","аквариумн","огненн","палящ","озаренн","топов","центральн","лучш в мире","многолетн","веков","обожаем","зимн","утепленн","отдыхающ зимой","североатлантическ","северо-тихоокеанск","ледовитоокеанск","бригадирствующ","полуночн","активн в «Картах и районе»","прошлогодн","устаревш","лимитированн","очередн","успешн","надежн","праворук","обоерук","леворук","укрупненн","ежедневн","смертоносн","незапятнанн","богемн","постоянн","королевск","нарушающ закон","подземн","тверд","жабродышащ","дневн","легк","полуденн","незамедлительн","готов","находящ в отпуске","раскаленн","гладк","автоматизированн","сенсационн","экономн","индоокеанск","опасн","почетн","полн сил","разговорчив","годн","шумн","соперничающ","космическ","заботлив","колк","молод","морщинист","растущ","взросл","готов к бою","скороспел","изысканн","ужасающ","методичн","опрятн","организованн","многообещающ","чемпионск","бородат","логичн","точн","метк","активн в Приливосливе","накачанн","состоявш","снимающ селфи","уверенн","натуральн","самопровозглашенн","морозн","охлажденн","трудолюбив","строг","передержанн","безупречн","непрерывно закрашивающ","умиротворенн","самоопределивш","перевоплотивш","нападающ","расслабленн","молчалив","выжат","спешащ","активн в частном бою","неоспорим","оголодавш","безвыходн","фешенебельн","несгибаем","злобн","ловящ момент","смешн","путешествующ во времени","стародавн","первичн","первейш","раннелетн","разбрызгивающ краску","колюч","любим","приставуч","роков","воющ","мстительн","жидк","чудотворн","отчужденн","уединенн","одинок","инкопольск","пригородно-инкопольск","активн на площади","пляжн","удачлив","так называем","фотографирующ","прокрастинирующ","новогодн","активн в «Каравелле»","стопроцентн","активн в «Мече и Хвосте»","гранжев","залит краской","универсальн","штормов","нормальков","ни рыбн","тухлячков","СВЕЖАЧКОВ","упрям","прямоэфирн","закончивш стрим","величайш","мясист","пушист","ароматн","активн в «Де Берикс»","длиннорукавн","андеграундн","авангардн","мгновенн","южноатлантическ","южно-тихоокеанск","южноокеанск","крепк","ребячлив","кротк","диванн","домашн","уличн","хитр","крут","славн","срезающ путь","опрометчив","весенн","свеженьк","вчерашн","мягк","оживленн","вездесущ","бодр","популярн","порхающ","помпезн","проглотивш язык","естественн","смотрящ в камеру","осенн","позднелетн","коричнев","ал","повседневн","отличн","тонк","похвальн","активн в сюжете","заказн","важн","сверхзвуков","ветрен","летящ","перекусывающ","танцующ на волнах","учащ","нов","напорист","готическ","готически-увлеченн","летн","знойн","стеснительн","активн в «Горбуша-Маркет»","вечн","задающ тренды","модняв","стильн","активн в «Лепоте»","морск","речн","приморск","готов к плаванию","смоляно-черн","истощенн","искренн","качественн","верн","истинн","активн на Акульем мосту","уязвим","беспрецедентн","рассветн","празднующ","благоговейн","мистическ","молниеносн","свят","секретн","эзотерическ","стояч","ездящ без рук","ослепительн","белоснежн","чистейш","божественн","неимущ","активн в Тухловодске","кратерн","пустошн","надут","потерянн","бесхребетн","пролетающ","светящ","искрящ","пестрящ","лучезарн","полностью выкладывающ","восходящ","плодотворн","активн в «Золотой рыбке»","пойманн в отливе","закаленн","реалистичн","национальн","настойчив","профессиональн","тухл","подавляющ","благоприятн","плутающ","рано встающ","заплаканн","глубоководн","сомнительн","хаотичн","незатейлив","неистов","сладк","внеземн","серединнолетн","зорк","вторичн","ретро","радикальн","жадн","скуп","известн как","городск","дик","бурн","заснеженн","бесподобн","активн в цеху «Тартар»","активн в «Ломе»","онемел","нежн","забывчив","рыбачащ","имущ","од","винтажн","рисующ","активн в Splatoon","прост","отдыхающ","сам","дебютн","финальн","сильнейш","лучш","новейш","оптимистичн","лесн","безымянн","вольн","видн","бесконечн","безвкусн","невозмутим","безжалостн","непревзойденн","кульминационн","остр","мерцающ","стойк","пухов","шикарн","сверхчеловеческ","оглушительн","крышесносн","оборонн","прорывн","сверхсвеж","бегущ","отработавш","провинциальн","любящ рокабилли","зажигающ","январск","сумеречн","монохромн","темн","традиционн","легендарн","набит деньгами","псевдогероическ","жаждущ славы","сонн","плотоядн","первосортн","падк на сладкое","любящ рыбу","прян","вкалывающ","фруктов","дизайнерск","путешествующ","любящ мультфильмы","прогуливающ","кинематографичн","любящ комиксы","любящ овощи","богатеньк","играющ","витающ в облаках","сентиментальн","рок-н-ролльн","неукротим","сотрудничающ","ультрасовременн","активн в Наутиплексе","юн","модн","новехоньк","свежепойманн","укачавш","начинающ","раритетн","активн в Опаленном ущелье","приятн","промокш","активн на «Свисторыбе»","избранн судьбой","обработанн","приправленн","эффектн","научн","медитирующ","удобно устроивш","атлетическ","спортивн","старомодн","начальствующ","дружелюбн","громов","шустр","аркадн","упорн","проказлив","исследующ","настоящ","измазанн краской","переполненн","очаровательн","пойманн в приливе","гигантск","бродяч","парящ","активн на «Дон Браке»","чернеющ","рассеянн","трудящ в Потапыч Inc.","проснувш","состаривш","местн","стимпанковск","серьезн","выпендрежн","плев","неунывающ","далек","клев","залежал","непреклонн","активн в хип-хопе","разрывающ","красочн","размножающ","бескрасочн","мягоньк","площадн","прыгающ","тенист","современн","любящ модов","бледн","ныряющ","погружающ","понтов","замещающ начальника","ключев","ночн","обжигающ","ярко-син","озорн","незамеченн","вымотанн","безответственн","активн в луна-парке «Язь»","активн в «Водокаче»","свеж","активн в «Стайке»","сражающ","сговорчив","незаметн","спрятанн","наблюдательн","чист","стерт","безрассудн","шокирующ","затейлив","туманн","единственн","старш по бригаде","беззвучн","активн в «Шмот-кутюре»","сообразительн","велик","бездеятельн","нарядн","непреодолим","боязлив","неясн","песчан","взрывн","общ","привычн","небрежн","покрыт тайной","скрыт","активн в Salmon Run","активн на самонидской ГЭС","кроваво-красн","гламурн","скользк","запачканн","честолюбив","возвращающ домой","обычн","уклоняющ","активн в «Хитлантиде»","беззаботн","вымирающ","артистичн","панковск","просветленн","солен","оглушающ","любящ брейк-данс","активн в Угрево-Скатово","привлекательн","вялен","фантасмагорическ","активн на Осетровых верфях","активн в стихийном бою","плюхтонск","плюхтоногородск"],
                last: ["Без заголовка", "абонент","абонентка","абсолютное оружие","авантюрист","авантюристка","автор","авторитет","агент","агент 001","агент 002","агент 003","агент 004","агент 008","актер","актриса","акула","альпинист","альпинистка","ангел","андроид","артист","артистка","архидемон","ас кальмарных роллов","ас кальмарных рывков","ас уклонения","ассистент","ассистентка","астронавт","атлет","бабушка","барабанщик","барабанщица","басист","басистка","бедняк","беднячка","берсерк","би-бой","би-герл","боец","боец в «Картах и районе»","боец с «Горынычем»","боец с «Трезубцем»","боец с N-ZAP","боец с арт-кистью","боец с аэроспреем","боец с бамбухом 14","боец с бластерматом","боец с бластерматом ПРО","боец с бластером","боец с бомбой на присоске","боец с брызгающей бомбой","боец с брызгометом-XL","боец с брызгометом-М","боец с бутылятором","боец с валиком ЛАЙТ","боец с ваннаганом","боец с ведроганом","боец с ведроганом 3 в 1","боец с волноплюхером","боец с дальнобластером","боец с едким туманом","боец с зонтентом","боец с импрессиометами","боец с йо-хо-плюхером","боец с каплестрелом","боец с каплестрелом НОВА","боец с каплестрелом ПРО","боец с каплестрелом-У","боец с каплетроном-компактом","боец с каракатницей","боец с керлинг-бомбой","боец с кистью","боец с контрабластером","боец с КО-РАЛЛ 450","боец с кработанком","боец с красколетом","боец с краскососом","боец с краскотросом","боец с кугельшрайбером","боец с лунобластером","боец с макси-валиком","боец с маркером движения","боец с мегалофоном 5.1","боец с миной","боец с мотоваликом","боец с мотокулой","боец с наутилусом","боец с омниваликом","боец с патрондашом 5Т","боец с плескарем","боец с плюхометом","боец с плюхотроном","боец с припечатью","боец с прыжковым маячком","боец с разрывной бомбой","боец с распылятором","боец с робобомбой","боец с содовой бомбой","боец с термоплюхами 525","боец с тоникулером","боец с торпедной бомбой","боец с тритиватором","боец с тройным торнадо","боец с трубастером","боец с тучей краски","боец с тяжелым каплетроном","боец с углострелом","боец с центрифугером","боец с чернильным занавесом","боец с шарощитом","боец с э-литром 95","боец со снайпокрасом","боец со снайп-э-литром 95","боец со сплат-валиком","боец со сплатганом","боец со сплат-дворником","боец со сплат-зонтом","боец со сплат-печателем","боец со спуртокроссами","боец со спуртометами","боец со спурт-плескарями","боец со стирателем","боец со струевиком .52","боец со струевиком .96","боец со шпарганом","боец со шпионским зонтом","болтун","болтунья","бомбардировщик","бомбардировщица","босс","братишка","братуха","бригадир","бриолин","бунтарка","бунтарь","великан","великанша","велосипедист","велосипедистка","викинг","витамин","витаминка","вице-президент","внук","внучка","водитель","водительница","водяной","возлюбленная","возлюбленный","воитель","воительница","вокалист","вокалистка","волк-одиночка","волшебник","волшебница","воспоминание","выжившая","выживший","выпускник","выпускница","вяленая рыба","гвоздь программы","геймер","геймерша","гений","героиня","герой","герцог","герцогиня","гик","гитарист","гитаристка","глава","главная руководительница","главный руководитель","горничная","городская девчуля","городской парень","гроссмейстер","двигатель","дворецкий","девочка","девушка","дегустатор","дедушка","декоратор шкафчика","дельфин","демиург разрушения","детеныш","диджей","дизайнер","дикарка","дикарь","динозавр","директор","директриса","дочь","дракон","душа компании","дядя","еж","ежиха","жадина","желатин","жених","жизнь","жизнь кальмара","жизнь лосося","жизнь осьминога","житель Атлантиды","жительница Атлантиды","жук","забастовщик","забастовщица","забияка","заводила","завсегдатай в «Водокаче»","завсегдатай в «Каравелле»","завсегдатай в «Мече и Хвосте»","завсегдатай в «Хитлантиде»","завсегдатай в «Шмот-кутюре»","заклинание","законодатель моды","законодательница моды","заместитель","заместительница","заправила","защитник","защитница","звезда","зеркало","злодей","злодейка","знаменитость","зритель","зрительница","И.И.","игрок","игрок в настолки","изгой","икона стиля","икринка","иллюзия","инклинг","инструктор","интроверт","инфлюэнсер","исследователь","исследовательница","йо-хо","кальмар","кальмарное кольцо","карааге","карпаччо","картежник","картежница","клавишник","клавишница","книжный червь","коллекционер карт","коллекционерка карт","комик","комплект","контент-мейкер","координатор","копуша","королева","королева горы","король","король горы","косметолог","кот","коуч","кошка","краб","краска","кулак","купидон","кутила","лакомый кусочек","легенда","легенда Salmon Run","легенда боев за башню","легенда боев за зоны","легенда боев за район","легенда мегакарпа","легенда сюжета","легенда устробола","легендарная воительница","легендарный воин","леди босс","лентяй","лентяйка","лидер","лохматик","луна","любитель боев за башню","любитель боев за зоны","любитель клубов","любитель мегакарпа","любитель настолок","любитель прохлады","любитель устробола","любительница боев за башню","любительница боев за зоны","любительница клубов","любительница мегакарпа","любительница настолок","любительница прохлады","любительница устробола","мальчик","мама","манта","маринад","маска","мастер сюжета","материя","мать","маэстро","мегафанат","мегафанатка","медведица","медведь","медуза","менеджер","ментор","мерзляк","мерзлячка","метель","мираж","мишень","младшая сестра","младший брат","млекопитающее","модель","модель «Блиц»","модель «Волногор»","модель «Гребершко»","модель «Грильяни»","модель «Йожко»","модель «Кальмар Кляр»","модель «Кальмари»","модель «Каракат»","модель «Кра-Кен»","модель «Морлюкс»","модель «Рыбок»","модель «Суси-Весла»","модель «Угрок»","модель «Фритюр»","модель «Шпротус»","модель «Щуччи»","модель головных уборов","модель кроссовок","модель курток","модель очков","модель Панкасиуса","модель рубашек","модель сапог","модель свитеров","модель Сушаки Кусаки","модель футболок","модник","модница","моллюск","монарх","монархиня","морепродукт","морская рыба","морское существо","мурена","мускул","мышца","мятежник","мятежница","налетчик","налетчица","наряд","наставник","наставница","настрой","начальство","невеста","некто","непоседа","неумеха","ниндзя","новенькая","новенький","новичок","новичок года","новобранец","носитель «бобрика»","носитель «под горшок»","носитель «помпадур»","носитель «фэйд»","носитель афро","носитель больших локонов","носитель ирокеза","носитель конского хвоста","носитель корнроу","носитель косички","носитель косы","носитель кудрей","носитель мокрой укладки","носитель пробора","носитель пучка","носитель пучков","носитель челки","носитель челки набок","носительница «бобрика»","носительница «под горшок»","носительница «помпадур»","носительница «фэйд»","носительница афро","носительница больших локонов","носительница ирокеза","носительница конского хвоста","носительница корнроу","носительница косички","носительница косы","носительница кудрей","носительница мокрой укладки","носительница пробора","носительница пучка","носительница пучков","носительница челки","носительница челки набок","ностальгия","обжора","обитатель острова","обитательница острова","обладатель ранга","обладательница ранга","образ жизни","обычный человек","одэн","они","оружие","осьминог","осьмолинг","осьмолинг-солдат","осьморянин","осьморянка","отаку","отец","отпечаток рыбы","офисный планктон","охотник","охотница","охранник","охранница","охраняемый вид","очкарик","палитра","папа","парень","парикмахер","парикмахерша","певец","певица","первокурсник","первокурсница","первопроходец","пес","пилот","пилотесса","писатель","писательница","питомец","планктон","пловец","пловчиха","повествователь","повествовательница","подросток","подчиненная","подчиненный","поклонник","поклонница","полиглот","помощник","помощник менеджера","помощница","помощница менеджера","поп-звезда","поплавок","последователь","последовательница","предводитель","предводительница","представитель","представительница","президент","преподаватель","преподавательница","пресноводная","пресноводный","претендент","претендентка","приверженец","привидение","пример","принц","принцесса","прислужник","прислужница","приятель","приятельница","программист","программистка","продавец","продавщица","продюсер","проектировщик","проектировщица","профи","прыгун","прыгунья","птенец","птица","путешественник","путешественница","пушар","работник","работник на удаленке","работница","работница на удаленке","работяга","районная вояка","районный вояка","ребенок","ремесленник","ремесленница","рис","ритм","робот","родственник","родственница","ролл с авокадо","ронин","руководитель","руководительница","русалка","рыба","рыбак","рыбачка","рыбная фрикаделька","рыболов","рыцарь","рэпер","рэперша","сама жизнь","самонид","самурай","сашими","свободная душа","секретарша","секретарь","серфингист","серфингистка","сестренка","сеструха","система","скейтбордист","скейтбордистка","слезинка","смотритель","смотрительница","снеговик","снек","собака","собиратель предметов","собирательница предметов","советник","советница","создатель","создатель комиксов","создательница","создательница комиксов","солнце","сом","сотрудник","сотрудник корпорации","сотрудница","сотрудница корпорации","спутник","спутница","стажер","стажерка","староста","старшая сестра","старший брат","старшина","стена","стендап-комик","стесняшка","стилист","стилистка","стильная девушка","стильный парень","стиляга","стир-фрай","стример","стримерша","студент","студентка","супергероиня","супергерой","суперзвезда","сурими","сушеный кальмар","суши","сущность","счастливица","счастливчик","сын","сыщик","тайна","тамада","танцовщица","танцор","татаки из тунца","телохранитель","телохранительница","терапевт","тетя","товарищ","товарка","тофу","трава","трудоголик","трудяга","турист","туристка","тусовщик","тусовщица","тушь","тушь осьминога","удильщик","удильщица","укротитель акул","укротитель мурен","укротительница акул","укротительница мурен","умибодзу","универсал","управляющая","управляющий","ураган","участник","участник в Salmon Run","участник турнира","участница","участница в Salmon Run","участница турнира","ученая","ученик","ученица","ученый","учитель","учительница","фанат Bottom Feeders","фанат Chirpy Chips","фанат C-Side","фанат Damp Socks","фанат Dedf1sh","фанат Deep Cut","фанат Diss-Pair","фанат Front Roe","фанат Hightide Era","фанат Ink Theory","фанат Off the Hook","фанат SashiMori","фанат Squid Sisters","фанат Squid Squad","фанат Turquoise October","фанат Wet Floor","фанат ω-3","фанат Биг Мана","фанат горячих источников","фанат Жемчик","фанат Куллы","фанат Кэлли","фанат Мари","фанат Мариши","фанат Мурии","фанатка Bottom Feeders","фанатка Chirpy Chips","фанатка C-Side","фанатка Damp Socks","фанатка Dedf1sh","фанатка Deep Cut","фанатка Diss-Pair","фанатка Front Roe","фанатка Hightide Era","фанатка Ink Theory","фанатка Off the Hook","фанатка SashiMori","фанатка Squid Sisters","фанатка Squid Squad","фанатка Turquoise October","фанатка Wet Floor","фанатка ω-3","фанатка Биг Мана","фанатка горячих источников","фанатка Жемчик","фанатка Куллы","фанатка Кэлли","фанатка Мари","фанатка Мариши","фанатка Мурии","фейерверк","фестивальщик","фестивальщица","филе","форма","формула","фотограф","фрилансер","халява","хиппи","хипстер","хищник","хищница","хореограф","храбрец","художник","художница","хулиган","хулиганка","цветочек","ценитель брендов","ценительница брендов","центр урагана","цефалопод","чело","человек","человечество","чемпион","чемпион мира","чемпионка","чемпионка мира","черепаха","чертенок","член группы","член правительства","член правления","шеф","шефиня","шеф-повар","шишка","шпилька","шпион","шпионка","шут","шутиха","щит","экскурсант","экскурсантка","эксперт","эксперт по переключателям","экстраверт","элегантность","энтузиаст","энтузиастка","юморист","юмористка","юное дарование","яйцо"]
            },
            ui: {
                tabText: "Текст",
                tabBanners: "Баннеры",
                tabBadges: "Значки",
                textLanguage: "Язык",
                textName: "Имя",
                textTitles: "Титулы",
                textRandomize: "Рандомизировать",
                textSlot1: "Слот 1",
                textSlot2: "Слот 2",
                textSlot3: "Слот 3",
                buttonBoth: "Оба титула",
                buttonFirst: "Первый",
                buttonLast: "Последний",
                buttonBanner: "Баннер",
                buttonBadges: "Значки",
                buttonAll: "Все",
                buttonDownload: "Скачать!",
                textMessage: "Если есть какие-либо текстовые ошибки, пожалуйста, напишите мне в Твиттере!",
                textCustom: "Настроить",
                textUpload: "Закачать",
                textToggle: "Активировано",
                textColour: "Цвет"
            },
            sections: {
                banners: {
                    vanilla: "В игре",
                    bandCustom: 'Группа',
                    specCustom: 'Специальное оружие',
                    mapsCustom: 'Области',
                    miscCustom: 'Pазнообразный',
                    userCustom: 'Загружено',
                },
                badges: {
                    coop: "Salmon Run",
                    mode: "Режимы игры",
                    shop: "магазины",
                    misc: "Pазнообразный",
                    gear: "бренды",
                    spec: "Специальное Оружие",
                    weps: "Оружие",
                    wepsCustom: "Оружие",
                    subsCustom: "Дополнительное Оружие",
                    modeCustom: "Режимы игры",
                    gearCustom: "бренды",
                    coopCustom: "Salmon Run",
                    charCustom: "Персонажи",
                    iconCustom: "Иконки",
                    spf2Custom: "Сплатфест 2",
                    spf3Custom: "Сплатфест 3",
                    cakeCustom: "Памятка от Паштетико",
                    userCustom: "Загружено",
                }
            },
            default: ["плюхтонск", "парень"]
        },
        // Japanese
        JPja: {
            name: "日本語",
            titles: {
                first: ["空の", "１００％","１０年前は","１０本足の","３％","５０％","５年後には","８本足の","amiiboの","B系","DJ","I LOVE ","IT界の","VR","Xマッチの","愛にあふれた","あいまいな","アウトドアな","アガる","秋色の","秋の","アゲアゲの","朝型の","明日が楽しみな","明日から本気出す","味のある","アタマ屋の","アツアツの","アッサリ系の","あったか～い","圧倒的","あっぱれ","アニメ好きの","アバンギャルド","アブラの乗った","あふれ出る","甘い","アマチュア","甘党の","海女美術大学の","アメカジ","新手の","荒波の","アラマキ砦の","ありふれた","アルティメット","アングラの","いい波乗ってる","イカした","イカす","イカッチャの","イキのいい","石の上にも","異世界の","いちおう","一日","いちにんまえの","いつだって","一本釣りの","いつもの","いなかの","井の中の","今を生きる","今を楽しむ","いわゆる","インク切れの","インクしたたる","インクまみれの","インスタント","インドアな","インド洋の","ヴィジュアル系","ウキワの","宇宙の","うっかりものの","生まれながらの","海の","海辺の","裏通りの","ウルトラ","売れ残った","運まかせの","運命の","えいえんの","映画好きの","笑顔がまぶしい","エスニック系","エターナル","エッジの効いた","エラ呼吸の","エレガントな","エンジョイ","おいしい","老いた","お絵描きする","大きな","大食いの","大空の","オーダーメイドの","おカネが全ての","お魚好きの","おしゃべりな","おしゃれな","推せる","おちゃのこさいさい","お茶の間の","おつかれの","お肉好きの","鬼のような","おませな","オルタナの","音速の","海鮮","海パン","買い物好きの","帰ってきた","かがやく","隠れ上手の","隠れた","かぐわしい","かけだしの","影の","加工された","過去から来た","風の","かたい","ガチ","カチカチの","カバー好きな","神がかった","雷の","カメラ目線の","辛党の","カリスマ","感情的な","完全燃焼した","干潮の","がんばる","カンペキな","記憶のない","キケンな","北大西洋の","北太平洋の","昨日は","気まぐれな","気持ちのこもった","究極の","休日の","強運の","今日が誕生日の","今日だけ特別","今日は","協力好きな","巨大化した","去年の","キラキラな","ギラギラな","霧の中の","きれいめの","金欠の","キンメダイ美術館の","空前絶後の","クールな","くさっても","クサヤ温泉の","グッド","クツ屋の","クマサン商会の","グランジ","グルメな","クレーターの","グレート","紅の","芸術的な","ゲーセンの","ゲーミング","激レアの","けなげな","ケバい","ケバ立つ","限界を超えた","健康的な","研修中の","恋する","好奇心旺盛な","高性能の","硬派な","荒野の","護衛好きな","ゴキゲンな","国民的","孤高の","ゴシック","ゴス","コスパのいい","こってり系の","こどくな","今年の","子どもっぽい","ゴリ押しの","ゴワゴワの","ゴンズイ地区の","混沌の","ザ・","サーモンランの","最強の","最高の","最後の","才色兼備な","最初の","最新型","最前線の","さすらいの","撮影する","ザッカ屋の","ザトウマーケットの","悟った","サバよんだ","さまよえる","サンカクスの","三国一の","残暑の","斬新な","三代目","さんぽ好きの","シェケナダムの","塩味の","シオカラ","仕事好きな","自己流の","自称","自信満々の","時代おくれの","漆黒の","実は","自撮りする","しびれる","渋い","邪悪なる","シャイな","自由自在な","執念深い","週末の","修行の身の","祝・","熟成した","じゅくれんの","純粋な","純白の","瞬発力のある","生涯","小食の","招待された","初夏の","諸行無常の","初代","司令にあこがれる","深海の","新感覚","新世紀","神速の","シンプルな","水そうの中の","スーパー","筋金入りの","スチームパンクな","頭脳明晰な","スプラトゥーンの","スポーティー","すみっこの","スミにおけない","スメーシーワールドの","スライドする","スリムな","世紀の","世紀末","正座中の","成長中の","聖なる","世界三大","世界の中心の","せっかちな","雪原の","刹那の","絶滅危惧種の","攻める","閃光の","全自動","先端を行く","センチメンタルな","センプクする","増殖する","想像以上に","早朝の","組織の","染まらない","空飛ぶ","そんなこんなで","体育会系","大海の","太古の","大事な","大大吉の","だいたんな","大地の","ダイナマイトな","ダイビング","大漁の","大量の","大量発生中の","ダシがとれる","戦う","ただの","立ちこぎの","たつじんの","たったひとりの","立ってプレイする","頼もしい","小さな","地下生まれの","秩序の","チョウザメ造船の","超人的","チョーシあげたい","チョーシいい","チョーシサイコーの","チョーシぼちぼちの","直撃する","直感を信じる","ちょっぴり","通称","付け焼き刃の","つっぱしる","つめた～い","強気な","つるつるの","データで戦う","デカい","テキトーな","電光石火の","転生した","でんせつの","電池切れの","天日干しの","動じない","都会の","トガった","時の","トゲトゲの","ととのった","とどろく","となりの","トラディショナルな","トリカラマッチの","とれたての","トレンディーな","トレンドの","ドロドロの","どん欲な","ナイスな","長そでの","渚の","泣く子もだまる","ナゾの","ナチュラルな","夏色の","夏の","夏休みの","涙の","波乗り","ナメロウ金属の","名もなき","ナワバトラー道場の","南極海の","なんてったって","難破船ドン・ブラコの","肉厚な","逃げ足の速い","逃げる","二代目","日中の","人気が出てきた","塗りたくる","塗りの","ヌルヌルの","寝起きの","寝転ぶ","ねばり強い","眠れる","のびしろのある","のんびりやの","ハードな","ハートを撃ちぬく","ハイカラシティの","ハイカラスクエアの","ハイカラな","配信終わりの","配信中の","ハイブランド好きの","白昼の","はじける","はじめての","走り回る","バズりたい","はたらく","発光する","ハッピーな","ハデな","破天荒な","はねる","早撃ち","早起きな","流行りの","腹ペコの","春色の","遥か彼方の","春の","バンカラ街の","バンカラな","バンカラマッチの","パンク","犯人は","はんにんまえの","ハンパない","汎用型","ヒーローになりたい","ヒーローモードの","ヒエヒエの","ひかえめな","比較的","干潟の","光の","ヒゲの","久しぶりの","びしょぬれの","左利きの","ピチピチの","ビッグな","引っこみ思案な","必殺の","ヒップホップ","秘伝の","秘密の","百発百中の","ヒラメが丘団地の","昼型の","広場の","ファッショナブル","ブキ屋の","フク屋の","不思議の国の","ふつうの","ふとんの中の","船酔いした","冬色の","冬の","冬休みの","プライベートマッチの","ブラックな","フルーツ好きの","古着","フルスロットル","プルプルの","フレッシュな","プロ級","ふわふわの","文化系","平日の","ペラペラの","変幻自在の","吠える","北極海の","ホットな","ポップな","炎の","ボムの","ホワイトな","舞い降りた","迷子の","負けずぎらいな","まことの","マサバ海峡大橋の","まじめな","真っ赤な","真っ黒な","真っ青な","真っ白な","マテガイ放水路の","まな板の上の","真夏の","マヒマヒリゾート＆スパの","真冬の","守る","真夜中の","丸腰の","マンガ好きの","満潮の","ミーハーな","右利きの","水の","南大西洋の","南太平洋の","ミュート中の","未来から来た","ミラクル","ムキムキの","無口な","無限の","無慈悲な","無邪気な","無敵の","ムニ・エール海洋発電所の","無味無臭の","名誉","目立ちたがりな","目力の強い","めでたい","もう負けられない","もう迷わない","モードな","モーレツな","モダンな","モッズ","モノクロの","もふもふの","森の","ヤガラ市場の","野菜好きの","優しい","野生の","やっぱり","山の","闇の","やわらかい","ヤンチャな","唯一無二の","夕暮れ時の","ユノハナ大渓谷の","夢見がちな","ゆるふわ","夜明けの","よく漬かった","よくばりな","よごれた","夜ふかしの","夜型の","弱気な","来年の","ラッキーな","ラッシュ中の","リアリストな","リアルな","リッチな","両利きの","旅行好きの","ルーズな","冷静沈着な","レギュラーマッチの","レトロな","ロカビリー","ロックな","ロビーの","論理的な","ワイプアウトの","ワイルドな","若い","わかばマークの","私は"],
                last: ["空の", ".52ガロン使い",".96ガロン使い","14式竹筒銃使い","１号","２号","３号","4Kスコープ使い","４号","８号","ABXYファン","AI","Bガール","Bボーイ","CEO","C-Sideファン","Dedf1shファン","DJ","DNA","From Bottomファン","Front Roeファン","H3リールガン使い","Hightide Eraファン","L3リールガン使い","LACT-450使い","LOVE","N-ZAP使い","OCTOTOOLファン","R-PEN使い","Rブラスターエリート使い","SashiMoriファン","Squid Squadファン","Tシャツ好き","Wet Floorファン","ω-3ファン","アーティスト","愛好家","アイツ","アイドル","アイロニック好き","アウトロー","アオリファン","赤ちゃん","アキレス腱","アシスタント","アシメ","アスリート","アタマ屋常連","アタリメイド好き","暑がり","アナアキ好き","アナログゲーマー","アフロ","アメフラシ使い","荒くれ者","アルバイター","アロメ好き","アンドロイド","イイダファン","委員長","イカ","イカ省略","イカスミ","イカノボラー","イカライフ","イカリング","イカローラー","イクラ","一文無し","逸材","一般人","一匹狼","イヌ","命","いもうと","イルカ","インク","インクリング","インフルエンサー","ヴァリアブルローラー使い","ヴィラン","ウェービー","ウェット","打ち上げ花火","宇宙飛行士","ウツボ","ウツボ使い","ウツホファン","海の幸","海坊主","海人","ウルトラショット使い","ウルトラハンコ使い","エイ","エージェント","エクスプロッシャー使い","エゾッコ好き","エナジースタンド使い","エレガンス","エンペリー好き","王者","オーバーフロッシャー使い","オオモノ","オールバック","オールラウンダー","おかあさん","オカシラ","オクタリアン","オクトリング","お子様","おじいさん","おじさん","おじょうさま","お寿司","オタク","おだんご","追っかけ","おつまみ","おでん","おとうさん","おとうと","踊り子","鬼","おにいさん","おねえさん","おばあさん","オバケ","おばさん","おぼっちゃま","オマケ","お祭り好き","思い出","親分","温泉好き","カードゲーマー","カードコレクター","カーボンローラー使い","カーリーヘア","カーリングボム使い","ガール","会社員","海水魚","会長","鏡","係長","ガキ大将","学生","歌手","家族","ガチアサリ好き","ガチアサリマスター","ガチエリア好き","ガチエリアマスター","ガチホコバトル好き","ガチホコマスター","ガチヤグラ好き","ガチヤグラマスター","合食禁ファン","カニタンク使い","カベ","カメ","カメラマン","カモン","カラー","からあげ","カラダ","カリスマ","カルパッチョ","カレントリップファン","観光客","監督","管理人","キーボーディスト","記憶","着こなし","騎士","希少部位","ギタリスト","気分","キャンパー","キャンピングシェルター使い","ギャンブラー","キューインキ使い","キューバンボム使い","キューピッド","兄弟","恐竜","魚介類","巨人","魚拓","切りこみ隊長","切り身","極めし者","キング","筋肉","クアッドホッパー使い","クイーン","食いしんぼう","クイックボム使い","クーゲルシュライバー使い","草","クツ屋常連","クマ","クラーゲス好き","クラゲ","クラッシュブラスター使い","クラブ","クリエイター","グルーヴ","グレートバリア使い","玄人","軍艦巻き","警備員","ゲーマー","毛玉","ケルビン525使い","研究員","原始人","小悪魔","工場長","後輩","コーチ","コーデ","コーディネーター","コーンロウ","コブシ","子分","コメディアン","サーファー","サーモンラン好き","サーモンランマスター","サイエンティスト","最終兵器","刺身","作家","ザッカコレクター","ザッカ屋常連","サバイバー","サブカル好き","サポーター","寒がり","サムライ","サメ","サメ使い","サメライド使い","残像","参謀","三枚目","シーフード","ジェットスイーパー使い","ジェットパック使い","シオカラーズファン","シグレニ好き","仕事人","師匠","シスターズ","したっぱ","視聴者","シチリン好き","執事","シティガール","シティボーイ","自転車乗り","四天王","姉妹","ジムワイパー使い","ジモン好き","シャープマーカー使い","若輩者","シャケ","ジャケット好き","シャケライフ","社長","シャツ好き","舎弟","ジャンパー","ジャンプビーコン使い","従業員","自由人","守護神","潤滑油","上司","ショートカット","職人","ショクワンダー使い","助手","初心者","ショップ店員","真実","新人王","新人バイト","人生","新入生","新婦","人類","新郎","スイッチヒッター","スイマー","スクイックリン使い","スクリュースロッシャー使い","スケーター","スタイリスト","スタイル","ストライカー","ストリーマー","スニーカー好き","頭脳","スパイ","スパイガジェット使い","スパッタリー使い","スプラシューター使い","スプラスコープ使い","スプラスピナー使い","スプラチャージャー使い","スプラッシュシールド使い","スプラッシュボム使い","スプラマニューバー使い","スプラローラー使い","スプリンクラー使い","スペースシューター使い","スライダー","すりみ","すりみ連合ファン","スルメ","スロースターター","責任者","節約家","ゼラチン","セレブ","全一","戦士","先生","仙人","センパイ","ソイチューバー使い","ソムリエ","存在","村長","大会出場者","大臣","大統領","タイトルホルダー","ダイナモローラー使い","代表","台風の目","太陽","タコ","タコスミ","タコゾネス","タコライフ","タタキ","タタキケンサキ好き","盾","タテロール","旅人","タマゴ","団員","ダンサー","タンサンボム使い","淡水魚","探偵","チャレンジャー","チャンピオン","チャンプルー","挑戦者","ちょんまげ","ツインテ","月","漬け","ツッコミ","釣り人","ツンツン","デザイナー","弟子","デュアルスイーパー使い","天才","天使","テンタクルズファン","天然記念物","頭足類","頭皮","豆腐","島民","トーピード使い","読書家","登山家","ドジっ子","トライストリンガー使い","ドライバー","ドライブワイパー使い","ドラゴン","トラップ使い","ドラマー","鳥","取締役","トリプルトルネード使い","トルネード","トレーナー","丼","ナイス","ナイスダマ使い","仲間","夏祭り","ナマケモノ","ナマズ","涙","ナワバトラー","ナワバリバトル好き","ナワバリマスター","ニット好き","二枚貝","二枚目","人気者","ニンゲン","ニンジャ","ネコ","熱血漢","ノヴァブラスター使い","ノーチラス使い","バーサーカー","パーティー好き","配管工","バイキング","配信者","ハイドラント使い","バイトリーダー","バイリンガル","パイロット","破壊神","博士","はぐれ者","バケットスロッシャー使い","覇者","馬車馬","働き者","ぱっつん","バトロイカ好き","花","はにかみやさん","パパ","パブロ使い","パラシェルター使い","バラズシ好き","パリピ","バレルスピナー使い","半魚人","ハンター","番長","反復横とび","ヒーロー","ヒーローモード好き","ヒーローモードマスター","ビジー・バケーションファン","秘書","ビタミン","ビッグマウス","ヒッセン使い","人見知り","ヒメファン","干物","美容師","漂流物","ひれおくん","ピン芸人","ファイター","ファッショニスタ","ファッションリーダー","ファンタジー","フウカファン","ブーツ好き","フェード","フォーリマ好き","部下","ブキ屋常連","副社長","フク屋常連","節","部長","プライムシューター使い","ブラザーズ","プランクトン","ブランド好き","プランナー","フリーク","フリーランス","ブリザード","プリンス","プリンセス","フレンド","プログラマー","プロデューサー","プロモデラー使い","ベイビー","ペインター","ベーシスト","ヘッズ","ペット","ヘッドライナー","ベテラン","ポイズンミスト使い","ポイントセンサー使い","冒険家","ぼうし好き","ボウズ","方程式","ボーイ","ボーカル","ボードゲーマー","ボールドマーカー使い","ホクサイ使い","ボケ","ホコ","捕食者","ボス","ホタックス好き","ホタルファン","ホッコリー好き","ホットブラスター使い","ホップソナー使い","ボディガード","ボトルガイザー使い","ポニテ","哺乳類","ボマー","マーメイド","魔王","孫","マスク","マスター","マッシュ","的","マドンナ","マニア","マネージャー","魔法使い","ママ","マルチミサイル使い","マンガ家","マンタローファン","ミステリー","ミツアミ","虫","息子","娘","むぞうさ","名人","メガネ好き","めがねっ子","メガホンレーザー5.1ch使い","メンタル","メンバー","申し子","モデル","モヒカン","役者","ヤコ好き","勇者","雪だるま","ライター","ライフスタイル","ラインマーカー使い","ラッキーマン","ラッパー","ラピッドブラスター使い","リーゼント","リーダー","リッター4K使い","リモートワーカー","竜宮城","漁師","料理人","ルーキー","ルック","浪人","ロッカーマニア","ロッケンベルグ好き","ロボット","ロボットボム使い","ロングブラスター使い","ロングヘア","ロンゲ","ワイドローラー使い","わかばシューター使い","若者"]
            },
            ui: {
                tabText: "文章",
                tabBanners: "プレート",
                tabBadges: "バッジ",
                textLanguage: "言語",
                textName: "名前",
                textTitles: "ニっ名",
                textRandomize: "ランダム",
                textSlot1: "バッジ 1",
                textSlot2: "バッジ 2",
                textSlot3: "バッジ 3",
                buttonBoth: "ニっ名",
                buttonFirst: "前面のニっ名",
                buttonLast: "後ろ面のニっ名",
                buttonBanner: "プレート",
                buttonBadges: "バッジ",
                buttonAll: "全て",
                buttonDownload: "ダウンロード!",
                textMessage: "誤字脱字等ありましたらツイッターのDMまで！",
                textCustom: "カスタマイズ",
                textUpload: "アップロード",
                textToggle: "有効化",
                textColour: "色"
            },
            sections: {
                banners: {
                    vanilla: "ゲームで",
                    bandCustom: 'バンド',
                    specCustom: '特別',
                    mapsCustom: 'マップ',
                    miscCustom: 'その他',
                    userCustom: 'アップロード済み',
                },
                badges: {
                    coop: "サーモンラン",
                    mode: "ゲームモード",
                    shop: "お店",
                    misc: "その他",
                    gear: "ブランド",
                    spec: "特別",
                    weps: "兵器",
                    wepsCustom: "兵器",
                    subsCustom: "サブウェポン",
                    modeCustom: "ゲームモード",
                    gearCustom: "ブランド",
                    coopCustom: "サーモンラン",
                    charCustom: "キャラクター",
                    iconCustom: "アイコン",
                    spf2Custom: "フェス 2",
                    spf3Custom: "フェス 3",
                    cakeCustom: "ネリメモリー",
                    userCustom: "アップロード済み",
                }
            },
            default: ["バンカラな", "若者"]
        },
        // Chinese (Simplified)
        CNzh: {
            name: "中文（简体）",
            titles: {
                first: ["空称号", "100%的","10年前是","3%的","50%的","5年后是","Calamari","DJ","I love","IT界的","Q弹的","VR","X比赛的","amiibo的","一大早的","一日","一点点的","一生的","一箭穿心的","一般比赛的","万众瞩目的","三色夺宝比赛的","三角洲的","上前线的","不再迷惘的","不得了","不能再输的","与生俱来的","专业级的","世事无常的","世界三大的","世界中心的","世界第一的","世纪末的","世纪的","业余的","丧失记忆的","临阵磨枪的","久违的","乌黑的","乘风破浪的","乡村摇滚的","乡村的","了不起的","井底的","享乐的","享受当下的","今天是","今天生日的","今年的","任何时候都是","休假的","优秀的","优雅的","传统的","传说的","修行中的","倾家荡产的","健康的","像鬼的","僵硬的","充满爱的","光明的","光滑的","全新感受的","全自动的","八只脚的","冬天的","冬日风情的","冬眠的","冷冷的","冷淡的","划算的","刚强的","刚起步的","初代","初夏的","初次的","到处乱涂的","刹那的","刺刺的","前卫的","前卫艺术的","务实的","努力的","北大西洋的","北太平洋的","北极海的","十只脚的","半吊子的","半夜的","单钩钓鱼的","卖剩下的","南大西洋的","南太平洋的","南极海的","占地斗士道场的","印度洋的","危险的","压倒性的","厚实的","去年的","发光的","受推崇的","受邀的","变幻无常的","古着风的","只是","只有今天最特别的","可喜可贺的","可靠的","右撇子的","名誉","后巷的","向往成为司令的","周末的","命运的","咆哮的","咸的","哥德式的","哥德摇滚的","善良的","喷发的","喷涂的","嘻哈的","困难的","固执的","国民的","坚持不懈的","增生的","墨汁用光的","复古的","夏天的","夏日风情的","多愁善感的","多话的","夜行性的","大厅的","大地的","大大吉的","大海的","大的","大胃王的","大胆的","大致上是","大量出现的","大量的","天真无邪的","天空的","太古的","头脑清晰的","头部装备店的","奇迹","好","好奇心旺盛的","好胜的","娇柔的","孤单一人的","孤独的","孤芳自赏的","孩子气的","宇宙的","守护的","完全燃烧的","完美的","实习中的","实际是","客厅的","客气的","室内的","室外的","害羞的","富有的","小的","尖锐的","尚兴市的","尚兴广场的","尚兴的","就是","山的","岸边的","崭新的","工作的","左右开弓的","左撇子的","巨大化的","常有的","干潮的","平日的","年轻的","年迈的","幸运的","幻界的","幽暗的","广场的","座头购物中心的","异世界的","弹跳的","强硬的","强运的","归来的","影子的","很大的","很好的","徘徊不定的","心情好的","心血来潮的","心跳加速的","必杀的","快乐的","快速射击的","急性子的","总之就是","总是的","恋爱中的","悠游自在的","想成为英雄的","想睡的","想红的","感情用事的","懒散的","懦弱的","成熟的","成长中的","我是","战斗的","所谓的","手无寸铁的","才貌双全的","投胎转世的","拍摄的","描绘的","搭上好浪潮的","摇滚的","摩德派的","摩登的","擅长合作的","擅长护卫的","擅长掩护的","擅长隐身的","攻击的","整齐的","文青系的","斯普拉遁的","新世纪的","新卷堡的","新叶标志的","新手的","新潮的","新颖的","新鲜的","无动于衷的","无名氏的","无慈悲的","无拘无束的","无敌的","无法待在墨汁里的","无臭无味的","无论如何都是","无限的","日行性的","早熟的","早起的","时代的","时尚的","时尚风潮的","时髦的","明天再努力的","明年的","春天的","春色的","昨天是","昼行性的","晒干的","晕船的","普通的","暑假的","暧昧的","最初的","最前线的","最后的","最强的","最新型的","最棒的","有品味的","有威严的","有深度的","有潜力的","有秩序的","有组织力的","有胡须的","有逻辑性的","有魅力的","朋克的","服装店的","期待明天的","未被沾染的","杂货店的","来自未来的","来自过去的","极稀有的","果然是","柔软的","森林的","横冲直撞的","横扫千军的","武器店的","死板的","比目鱼住宅区的","比较的","民族风的","水槽中的","水的","永恒的","永远的","沉着冷静的","沉默寡言的","没电的","油渍摇滚的","沾满墨汁的","泛用型的","波涛汹涌的","泪水的","洁白的","活力十足的","活在当下的","活蹦乱跳的","流利的","流行的","浓郁的","浓雾笼罩下的","海女美术大学的","海洋的","海滩裤","海边的","海鲜","深海的","混水摸鱼的","混沌的","清爽型的","渔获丰收的","温暖的","温泉花大峡谷的","湿地的","湿透的","满出来的","满潮的","滴出墨汁的","漂泊的","漂浮的","漂浮落难船的","漆黑的","漫不经心的","潜伏的","潜水的","潮流的","激烈的","濒临绝种的","火热的","火焰的","炸弹的","烟管鱼市场的","热情的","熊先生商会的","熟练的","熬出汤汁的","熬夜的","爱做梦的","爱吃甜食的","爱吃的","爱吃肉的","爱吃辣的","爱吃鱼的","爱好动画的","爱好名牌的","爱好工作的","爱好散步的","爱好旅行的","爱好水果的","爱好漫画的","爱好电影的","爱好蔬菜的","爱好购物的","爱玩游戏的","犀利的","犯人是","状态值不错的","状态值中等的","状态值低的","状态值超棒的","狂潮中的","独一无二的","独当一面的","猛烈的","甜甜的","生硬的","生长在地底下的","用鳃呼吸的","电光石火的","电玩中心的","畏缩的","疲累的","白天的","白昼的","白色的","百发百中的","盛夏的","直接命中的","直播中的","直播结束的","相信直觉的","相机视角的","真实的","真心诚意的","真格的","真诚的","真鲭跨海大桥的","眼力好的","睡醒的","瞬间爆发力强的","砧板上的","破天荒的","破晓的","硬派的","碰运气的","祝贺的","神乎其技的","神圣的","神秘国度的","神速的","私人比赛的","秋天的","秋老虎的","秋色的","秘传的","秘密的","究极的","空前绝后的","立即的","站着玩的","站着踩的","竹蛏疏洪道的","笑容灿烂的","第三代","第二代","简约的","红色的","纯白的","纯粹的","纷飞的","终极的","经过加工的","经验老到的","缺钱的","美味的","美式休闲风的","翻滚的","肌肉结实的","肚子饿的","肥美的","肮脏的","腐烂也没关系的","自信满满的","自成一派的","自拍的","自然的","自称为","臭鱼干温泉的","艺术性的","花枝招展的","芳香的","苗条的","英勇的","英雄模式的","荒界的","荒野的","萌萌的","蒸气朋克的","蔚蓝的","蛮好看的","蛮颓比赛的","蛮颓的","蛮颓镇的","视觉系的","觉悟的","角落的","订制的","认真的","调皮的","谜样的","贪婪的","贪得无厌的","资讯战的","走在流行尖端的","赶流行的","起毛的","超人的","超出想象的","超大的","超级","超越极限的","超鱿型的","跑来跑去的","跪坐中的","身心强壮的","躲在被子里的","躺平的","轰隆隆的","轻而易举的","轻飘飘的","达人的","过时的","运动系的","运动风的","远方的","迷路的","适当的","逃得很快的","逃跑的","通称为","邪恶的","都会的","酥脆的","酷炫的","醋饭海洋世界的","重要的","野生的","野蛮的","金眼鲷美术馆的","长袖的","闪亮的","闪光的","闪耀的","闪闪发光的","隆冬的","隐藏的","隔壁的","雪地的","雷霆的","霹雳舞派的","静音中的","鞋店的","音速的","顶级","顽强的","风的","飞翔的","食量小的","马力全开的","高人气的","高性能的","鬼头刀SPA度假区的","鱼肉碎金属的","鱿乐天地的","鱿型的","鲑坝的","鲑鱼跑的","鲜红的","鲜艳的","鲟鱼造船厂的","鳗鲶区的","麦年海洋发电所的","麻木的","黄昏时分的","黏滑的","黏糊糊的","黑白的","黑色的"],
                last: ["空称号", ".52加仑操作者",".96加仑操作者","14式竹筒枪操作者","1号","2号","3号","4K准星枪操作者","4号","8号","ABXY粉丝","AI","B-boy","B-girl","Boss","C-Side粉丝","CEO","DJ","DNA","Damp Socks粉丝","Dedf1sh粉丝","From Bottom粉丝","Front Roe粉丝","H3卷管枪操作者","Hightide Era粉丝","Inkantation","L3卷管枪操作者","LACT-450操作者","LOVE","N-ZAP操作者","OCTOTOOL粉丝","R-PEN操作者","SashiMori粉丝","Squid Squad粉丝","T恤爱好者","Wet Floor粉丝","ω-3粉丝","一匹狼","一般人","七轮爱好者","三发猎鱼弓操作者","三重龙卷风操作者","上司","上班族","下属","丑角","专业人士","专业模型枪操作者","专员","丘比特","丸子头","主唱","主子","乌龟","乖宝宝","书虫","人们","人才","人气王","人生","人类","仙人","代表","仿生人","企划人员","会长","作家","作者","侍酒师","侦探","保镖","偶像","儿子","兄弟","全能者","全都包","公主","公升4K操作者","关东煮","冒失鬼","冒险家","军舰寿司","冠军","冰壶炸弹操作者","冲浪者","冲涂爆破枪操作者","冲锋队长","创作家","初学者","到此鱿止","制作人","刺刺头","前辈","前锋","剑尖鱿爱好者","副社长","助手","助理","劳碌命","勇者","北斋操作者","半鱼人","单挑者","单车骑士","博士","占地对战大师","占地对战爱好者","占地斗士","卡片收藏者","卡牌玩家","卷发","厂长","压轴","原始人","厨师","参谋","参赛者","双壳贝","双语者","双重清洁枪操作者","双马尾","反派角色","发布者","发髻","叔叔","可变式滚筒操作者","台风眼","吉他手","吉利丁","同伴","名人","名流","名牌爱好者","后梳油头","吐槽担当","吸墨机操作者","吸盘炸弹操作者","员工","哥哥","哺乳类","商店店员","啦啦队","喇叭镭射5.1ch操作者","喜剧演员","喷射清洁枪操作者","喷射背包操作者","四大护法","四重弹跳手枪操作者","回忆","回旋泼桶操作者","团员","国王","圆珠笔操作者","城市女孩","城市男孩","培训师","墙壁","墨汁","墨汁陷阱操作者","墨雨云操作者","夏日祭典","外套爱好者","多重导弹操作者","大嘴巴","大小姐","大少爷","大师","大臣","天使","天才","天然纪念物","太空人","太空射击枪操作者","太阳","头号粉丝","头皮","头目","头脑","头足纲","头部装备店常客","女儿","女孩","女神","奶奶","好友","好哥儿们","好姐妹","妈妈","妹妹","姐妹","姐姐","委员长","婴儿","存在","孙子","学妹","学弟","学生","孩子","孩子王","守护神","定点侦测器操作者","宝宝","实况主","宠物","家伙","家族","宽滚筒操作者","寺门爱好者","寿司","小姬粉丝","小弟","小恶魔","小拟粉丝","小菜","小萤粉丝","岛民","工作刮水刀操作者","工匠","左右横跳者","巨人","巨大防护罩操作者","巴勃罗操作者","帆立爱好者","师傅","帽子爱好者","干货","平头","年轻一辈","年轻人","幸运儿","幻想","幽灵","广域标记枪操作者","庞然大物","开尔文525操作者","开瓶喷泉枪操作者","弟子","弟弟","弹跳声呐操作者","影响者","心灵专家","忍者","快炒","快速炸弹操作者","快速爆破枪 精英操作者","快速爆破枪操作者","怕冷者","怕热者","怕生者","性格内向者","怪胎","总监","总统","恐龙","慢起步者","懒人","成员","战士","战斗狂","战斗者","战斗鱿鱼爱好者","手下","打击者","打工仔","拳头","挑战者","搞笑艺人","摄影师","摇摆乐","支持者","教练","散寿司爱好者","文人雅士","斜刘海","斯普拉准星枪操作者","斯普拉射击枪操作者","斯普拉旋转枪操作者","斯普拉机动枪操作者","斯普拉滚筒操作者","斯普拉炸弹操作者","斯普拉蓄力狙击枪操作者","斯普拉防护墙操作者","新人打工仔","新人王","新叶射击枪操作者","新娘","新星爆破枪操作者","新生","新郎","方程式","旅行者","无法无天爱好者","无特定职业者","日式炸鸡","时尚教主","时尚界人士","时雨爱好者","暇古爱好者","暖流爱好者","暴风雪","曼曼粉丝","最终兵器","月亮","服装店常客","机器人","机器人炸弹操作者","杂货店常客","杂货收藏者","村长","标线器操作者","样子","桌游玩家","桶装旋转枪操作者","模特儿","次文化爱好者","歌手","武器店常客","武士","歹徒","残像","母亲","毒雾操作者","毛球","气氛","水母","水电工","波浪卷","泰斗","泽酷爱好者","洒墨器操作者","洗笔桶操作者","派对爱好者","派对王","流裂粉丝","浪人","浮游生物","海产","海和尚","海月爱好者","海水鱼","海洋生物","海豚","海鳗","海鳗操作者","消防栓旋转枪操作者","润滑油","淡水鱼","混混","渐层寸头","渔夫","温泉爱好者","游泳者","湿发","溅镀枪操作者","溜冰者","满溢泡澡泼桶操作者","漂流物","演员","漫画家","火热爆破枪操作者","烟火","热血男子","熊","爆炸头","爆炸泼桶操作者","爱吃鬼","爱好者","父亲","爷爷","爸爸","特工配件操作者","狂热者","狗","独行侠","猎人","猎食者","猫","王子","王者","玛利亚","玩家","生命","生存者","生活模式","生肉片","生鱼片","电动马达滚筒操作者","男孩","男性长发","男神","画家","登山家","皇后","盖饭","目标","盾","省钱专家","真实","真格区域大师","真格区域爱好者","真格塔楼大师","真格塔楼爱好者","真格蛤蜊大师","真格蛤蜊爱好者","真格鱼虎大师","真格鱼虎对战爱好者","眼泪","眼镜仔","眼镜爱好者","短发","研究员","破坏神","碎末","碳纤维滚筒操作者","碳酸炸弹操作者","社长","神之子","神秘人","祭典爱好者","禁同食粉丝","科学家","秘书","稀有部位","程序员","穷人","穿搭","穿着打扮","窄域标记枪操作者","章鱼","章鱼圈","章鱼墨汁","章鱼女战士","章鱼族","章鱼生活","管家","管理者","类型","纪录保持人","纵卷发","组长","终极印章操作者","终极发射操作者","经理","经纪人","维京人","维他命","罗肯贝格爱好者","置物柜狂","美人鱼","美容师","翻滚者","老大","老师","老手","耕田牛","肌肉","能量站操作者","脏辫","腌渍","腕儿姐妹粉丝","自然发型","自由工作者","舞者","舞蹈家","艺术家","艾洛眼爱好者","花","英雄","英雄模式大师","英雄模式爱好者","草","莎莎粉丝","莫西干头","菜鸟","董事","蘑菇头","虫子","蛋","螃蟹","螃蟹坦克操作者","行家","衬衫爱好者","装傻担当","观众","观光客","触手喷射操作者","警卫","讨海人","记忆","设计师","豆腐","贝斯手","负责人","赌徒","赞气弹操作者","跳跃信标操作者","跳跃者","身体","轰炸者","运动员","运动鞋爱好者","远程工作者","远距爆破枪操作者","追星族","造型师","遮阳防空伞操作者","部下","部长","配角","针织衫爱好者","钓客","钢铁先锋爱好者","键盘手","锻品爱好者","镜子","长发","间谍","阿基里斯腱","阿姨","阿宅","附赠品","雨刷刮水刀操作者","雪人","露营者","露营防空伞操作者","霸者","非电玩玩家","面罩","靴子爱好者","鞋店常客","顶尖射击枪操作者","领班","领袖","颜色","飞机头","飞溅泼桶操作者","飞行员","饭田粉丝","饶舌歌手","马尾","驾驶员","骑士","高压油管枪操作者","鬼","鬼福粉丝","鬼蝠鲼","魔法师","魔王","鱼奇奇","鱼干制造爱好者","鱼拓","鱼浆","鱼浆帮粉丝","鱼片","鱼虎","鱼贝类","鱼雷操作者","鱿快洁操作者","鱿皇爱好者","鱿鱼","鱿鱼圈","鱿鱼墨汁","鱿鱼干","鱿鱼族","鱿鱼滚行者","鱿鱼生活","鱿鱼登顶者","鲑鱼","鲑鱼卵","鲑鱼生活","鲑鱼跑大师","鲑鱼跑爱好者","鲨鱼","鲨鱼坐骑操作者","鲨鱼操作者","鲶鱼","鸟","鹦鹉螺号操作者","麻花辫","麻辣鱿物粉丝","鼓手","齐刘海","龙","龙卷风","龙宫城"]
            },
            ui: {
                tabText: "文本",
                tabBanners: "背景",
                tabBadges: "徽章",
                textLanguage: "语言",
                textName: "名称",
                textTitles: "称号",
                textRandomize: "随机生成",
                textSlot1: "第 1 项",
                textSlot2: "第 2 项",
                textSlot3: "第 3 项",
                buttonBoth: "两个称号",
                buttonFirst: "前称号",
                buttonLast: "后称号",
                buttonBanner: "背景",
                buttonBadges: "徽章",
                buttonAll: "全部",
                buttonDownload: "下载!",
                textMessage: "如果有任何文本错误，请在 Twitter 上私信我！",
                textCustom: "自定义",
                textUpload: "上传",
                textToggle: "启用",
                textColour: "颜色"
            },
            sections: {
                banners: {
                    vanilla: "在游戏中",
                    bandCustom: '音乐团体',
                    specCustom: '特殊武器',
                    mapsCustom: '领域',
                    miscCustom: '各种各样的',
                    userCustom: '已上传',
                },
                badges: {
                    coop: "鲑鱼跑",
                    mode: "游戏模式",
                    shop: "商店",
                    misc: "各种各样的",
                    gear: "品牌",
                    spec: "特殊武器",
                    weps: "武器",
                    wepsCustom: "武器",
                    subsCustom: "副武器",
                    modeCustom: "游戏模式",
                    gearCustom: "品牌",
                    coopCustom: "鲑鱼跑",
                    charCustom: "人物",
                    iconCustom: "图标",
                    spf2Custom: "节日 2",
                    spf3Custom: "节日 3",
                    cakeCustom: "记忆蛋糕",
                    userCustom: "已上传",
                }
            },
            default: ["蛮颓的", "年轻人"]
        },
        // Korean
        KRko: {
            name: "한국어",
            titles: {
                first: ["빈 별명", "100%","10년 전에는","24시간","2대째","3%","3대째","50%","5년 뒤에는","Calamari","DJ","I LOVE","IT계의","Mr. 베어 상회의","The","VR","X 매치의","amiibo","가공된","가난한","가성비 좋은","가시 돋친","가을빛","가을의","간조의","감각이 없는","감정적인","감칠맛 나는","갓 잡은","강경한","갯벌의","거대한","거대화한","거물급","건강한","건망증이 심한","걸쭉한","게이밍","게임 센터의","겨울 방학의","겨울빛의","겨울의","격랑의","견습","견실한","경사스러운","고고한","고기를 좋아하는","고독한","고등어 해협 대교의","고딕","고성능","고스","고양된","고집불통","공격수","과거에서 온","과메기 온천의","과묵한","과일을 좋아하는","광장의","구르는","구석진 곳의","국민","궁극의","그냥","그런지","그레이트","그림 그리는","그림자","기름이 오른","기분 좋은","기억 상실","기특한","긴소매의","길 잃은","깔끔한","깨달음을 얻은","꽁꽁 언","꿈꾸는","끈기 있는","나는","나메로우 금속의","나이스","난파선 돈 브라코의","남극해의","남대서양의","남태평양의","내년의","내일부터 열심히 하기로 결심한","내일이 기대되는","넙치 언덕 단지의","노력하는","노쇠한","녹초가 된","논리적인","농후한","눈도 깜짝 안 하는","눈물의","눈에 띄고 싶은","눈이 부리부리한","느긋한","늦여름의","다목적","다이빙","단것을 좋아하는","단단한","달리는","달인","달콤한","대담한","대량 발생 중인","대량의","대식가","대지의","대치 시장의","댄디한","더 이상 망설이지 않는","더 이상 질 수 없는","데이터로 싸우는","도깨비 같은","도마 위의","도망치는","도망칠 때는 빠른","도미 미술관의","도시의","돈이 전부인","돌아온","돌진하는","두툼한","둥실둥실","뒷골목의","뒹굴뒹굴","따끈따끈한","따뜻～한","때때로","떠돌이","떠오르는","뛰어오르는","레귤러 매치의","레트로","로비의","로커빌리","로큰롤","리얼한","마음을 훔치는","마이 웨이","만새기 리조트＆스파의","만조의","만화를 좋아하는","맛조개 방수로의","망망대해의","매끈매끈한","매운 것을 좋아하는","맹렬한","멋들어진","멋쟁이","메기 지구의","멸종 위기종","명석한 두뇌의","명예","명품을 좋아하는","모노크롬의","모던한","모즈","못 말리는","뫼니 엘 해양 발전소의","무기력한","무기점의","무모한","무미 무취의","무자비한","무적의","무한의","문화계","물가의","물들지 않는","물의","뭐니 뭐니 해도","미끈미끈한","미라클","미래에서 온","미소가 눈부신","믿음직스러운","바다의","바람의","반짝반짝한","발이 10개인","발이 8개인","밤을 새운","밤의","방전된","방황하는","배고픈","백발백중의","백주의","뱃멀미하는","번쩍번쩍한","범인은","벼락치기","변덕쟁이","보풀이 일어난","보헤미안","봄빛","봄의","부드러운","부유한","북극해의","북대서양의","북태평양의","불꽃의","불량한","붉은","브레이크 댄서 스타일","비교적","비무장","비밀의","비전의","비주얼계","빈티지","빛나는","빛을 발하는","빛의","뻣뻣한","뾰족한","사랑에 빠진","사랑이 넘치는","사령관을 꿈꾸는","사실은","사악한","산뜻한","산의","산책을 좋아하는","삼각주의","상냥한","상상 이상으로","상큼한","새까만","새로 들어온","새먼 런의","새벽의","새빨간","새싹","새파란","새하얀","색칠하는","생기 넘치는","생선을 좋아하는","서서 타는","서서 플레이하는","석순 대협곡의","설원의","섬광의","성실한","성장 가능성이 있는","성장 중인","세계 3대","세계 제일의","세계 중심의","세기말","세기의","센티멘털한","셀카 찍는","셰케나 댐의","소극적인","소식하는","소중한","속사의","손쉬운","쇼핑을 좋아하는","수다쟁이","수비수","수상한","수수께끼의","수염 난","수영 팬츠","수줍은","수행 중인","숙성된","순발력 있는","순백의","순수한","숨는 게 특기인","숨은","숫기 없는","숲의","슈퍼","스퀴디움의","스팀 펑크","스포티","스플래툰","슬림한","승부욕이 넘치는","시간의","시골 출신","시대착오적인","신들린","신발 가게의","신성한","신세기","신속의","신출귀몰한","심플한","심해의","싸우는","쌀쌀맞은","썩어도","아가미로 호흡하는","아득히 먼 저편의","아마추어","아메리칸 캐주얼","아방가르드","아웃도어파","아침형","악덕","안개 속의","안절부절못하는","압도적","애니메이션을 좋아하는","애매한","액세서리 숍의","앳된","야생의","야채를 좋아하는","야행성","양반다리","양손잡이","어둠의","어메이징한","어제는","어항 속","언더그라운드의","언제나","얼터너의","얼티밋","엄청나게 희귀한","엄청난","엄호를 좋아하는","에지 있는","여름 방학의","여름빛의","여름의","여행을 좋아하는","역시","연수 중인","연어말이 요새의","영역 배틀러 도장의","영원한","영화를 좋아하는","예쁘장한","예술적인","오늘만 특별","오늘은","오늘이 생일인","오더 메이드","오더폴리스 스퀘어의","오더폴리스 시티의","오더폴리스의","오랜만에 만난","오른손잡이","오염된","오프 에어","온 에어","올해의","옷 가게의","와일드한","완벽한","완전 연소한","왼손잡이","요즘 대세인","욕심쟁이","우는 아이도 울음을 그치는","우물 안의","우아한","우주의","운명의","운에 기대는","운이 따르는","운이 엄청 좋은","운치 있는","울려 퍼지는","울트라","위험한","유려한","유례없는","유서 깊은","유일무이한","유일한","유행을 좇는","유행하는","육수용","으르렁거리는","음 소거","음속의","응원하고 싶은","이러저러해서","이른 아침의","이른바","이름 없는","이불 속의","이상한 나라의","이세계의","이웃집","이터널","인도양의","인도어파","인스턴트","일단","일반","일을 좋아하는","일찍 일어나는","일하는","입맛 까다로운","있는 그대로의","잉크가 뚝뚝 떨어지는","잉크가 바닥난","잉크를 마구 칠하는","잉크투성이","자다 일어난","자신만만한","자유자재한","자칭","작년의","작은","잘 익은","잠복하는","잠자는","잡화점의","재색을 겸비한","적극적인","적당주의","전광석화의","전대미문의","전력 질주","전무후무한","전문","전설의","전자동","젊은","점심형","제행무상의","조급한","조숙한","조직의","종신","주말의","즐거운","증식하는","지금을 사는","지금을 즐기는","지하 출신","직감을 믿는","직격하는","진심이 담긴","진짜","질서의","집념 강한","짭짤한","차가～운","차분한","착한","찰나의","참고 견디면","참된","참신한","천공의","천둥의","천생","천진난만한","철갑상어 조선소의","첫","청렴결백한","체육계","초대","초대받은","초밥 월드의","초보","초여름의","초인적인","촬영하는","최강의","최고의","최신 유행","최신형","최전선의","최첨단을 걷는","최초의","최후의","축","칠흑의","카리스마","카메라 시점의","카오폴리스 매치의","카오폴리스 타운의","카오폴리스의","커다란","컨디션 이상 무인","컨디션 좋은","컨디션 최고인","컨디션을 끌어올리고 싶은","쿨한","크레이터의","탐욕스러운","태고의","탱글탱글한","털이 난","톡톡 튀는","통칭","튜브를 탄","트렌디한","트리컬러 매치의","튼튼한","티타임의","파도타기","파마머리","팔고 남은","패셔너블","펄떡이는","펑크","평범한","평소의","평일의","폭발적인","푹신푹신한","풍어의","프라이빗 매치의","프로급","피곤한","필살의","하나만 노리는","하늘에서 내려온","하늘을 나는","하드코어","한겨울의","한계를 뛰어넘은","한낮의","한밤중의","한여름의","핫한","해 질 녘의","해녀 미술 대학의","해물","해변의","햇볕에 말린","행복한","행운의","향기로운","허술한","허투루 볼 수 없는","현실주의자인","협력을 좋아하는","호기심이 왕성한","호위를 좋아하는","혹등 마켓의","혼돈의","홀딱 젖은","화려한","화제가 되고 싶은","환생한","황야의","훌륭한","휴일의","흔한","흘러 넘치는","히어로 모드의","히어로가 되고 싶은","힙한","힙합"],
                last: ["빈 별명", ".52 갤런 유저",".96 갤런 유저","14식 대나무 총 유저","1호","2호","3호","4K 스코프 유저","4호","8호","ABXY 팬","AI","C-Side 팬","CEO","DJ","DNA","Damp Socks 팬","Dedf1sh 팬","Diss-Pair 팬","From Bottom 팬","Front Roe 팬","H3 릴 건 유저","Hightide Era 팬","Inkantation","L3 릴 건 유저","LACT-450 유저","LOVE","N-ZAP 유저","OCTOTOOL 팬","R 블래스터 엘리트 유저","R-PEN 유저","SashiMori 팬","Squid Squad 팬","T셔츠 애호가","Wet Floor 팬","ω-3 팬","가수","가오리","가족","감독","개","개그맨","거물","거북이","거울","거인","건어물","게으름뱅이","게이머","경비원","계장님","고양이","곤충","골목대장","곰","곰치","곰치 조련사","공룡","공장장","과녁","과학자","관광객","관리인","군함말이","그 녀석","그레이트 배리어 유저","그루브","근육","기분","기사","기억","기타리스트","기품","긴 머리","꽃","나그네","나이스","나이스옥 유저","낚시꾼","남동생","낭인","노동자","노바 블래스터 유저","노틸러스 유저","눈물","눈사람","니들워크 애호가","니트 애호가","닌자","다이너모 롤러 유저","다진 고기","단발머리","단원","달","대신","대통령","대표","대회 참가자","댄서","덜렁이","덮밥","도깨비","도련님","도전자","독서가","돌격 대장","돌고래","동료","두뇌","두목","두부","두족류","두피","듀얼 스위퍼 유저","드라이버","드라이브 와이퍼 유저","드래곤","드러머","등산가","디자이너","딸","땋은 머리","라이즈 애호가","라이터","라이프 스타일","라인 마커 유저","래피드 블래스터 유저","랩퍼","랭크 바지락 마스터","랭크 바지락 애호가","랭크 에어리어 마스터","랭크 에어리어 애호가","랭크 타워 마스터","랭크 타워 애호가","랭크 피시 마스터","랭크 피시 배틀 애호가","럭키 맨","로봇","로봇 밤 유저","로커 마니아","록켄베르그 애호가","롤빵 머리","롱 블래스터 유저","루키","룩","리더","리젠트","리터 4K 유저","마니아","마돈나","마르징오 메이드 애호가","마른오징어","마법사","마스크","마스터","마왕","만타로 팬","만화가","말괄량이","매니저","머메이드","먹구름 유저","먹보","멀티 미사일 유저","메가폰 레이저 5.1ch 유저","메기","멤버","명인","명품 애호가","모델","모자 애호가","모험가","모히칸","목숨","몸","무기점 단골","무뢰한","무법자","무용수","문어","문어 라이프","문어 먹물","문어조네스","물통 유저","미스터리","미용사","민물고기","바닷물고기","바이링구얼","바이킹","박사","반려동물","반복 옆 뛰기","반인반어","반장","방정식","방패","배관공","배럴 스피너 유저","배우","배트로징어 애호가","버섯 머리","버킷 슬로셔 유저","베리어블 롤러 유저","베이비","베이시스트","베테랑","벽","병아리","보너스","보드게이머","보디가드","보머","보스","보컬","보틀 가이저 유저","볶음 요리","볼드 마커 유저","부끄럼쟁이","부사장님","부장님","부츠 애호가","부하","불꽃놀이","브라더스","블리자드","비 걸","비 보이","비대칭 머리","비서","비타민","빈털터리","빌런","빨판 밤 유저","삐죽 머리","사무 와이퍼 유저","사이클리스트","사장님","사제","사천왕","삭발","삼합","삼합파 팬","상사","상어","상어 조련사","상투머리","새","새먼 런 마스터","새먼 런 애호가","새싹 슈터 유저","생선 토막","샤크 라이드 유저","샤프 마커 유저","서바이버","서브컬처 애호가","서퍼","서포터","선배","선생님","선인","섬사람","셀러브리티","셔츠 애호가","소녀","소년","소믈리에","소이 튜버 유저","손주","쇼크 원더 유저","숍 점원","수재","수족 냉증","수하","수호신","숙녀","스니커즈 애호가","스승님","스위머","스위치히터","스케이터","스퀵 클린 유저","스크루 슬로셔 유저","스타일","스타일리스트","스트라이커","스트리머","스파이","스파이 가젯 유저","스퍼터리 유저","스페이스 슈터 유저","스프링클러 유저","스플래시 밤 유저","스플래시 실드 유저","스플랫 롤러 유저","스플랫 머누버 유저","스플랫 슈터 유저","스플랫 스코프 유저","스플랫 스피너 유저","스플랫 차저 유저","슬라이더","슬로 스타터","시스터즈","시스템","시청자","시티 걸","시티 보이","시푸드","신랑","신발 가게 단골","신부","신사","신인왕","신입 아르바이트생","신입생","심부름꾼","쌍각류","쑥스러움쟁이","씨 컬","아가씨","아기","아나키 애호가","아날로그 게이머","아들","아로메 애호가","아르바이트 리더","아르바이트생","아버지","아빠","아오리 팬","아웃사이더","아이돌","아이로닉 애호가","아저씨","아주머니","아킬레스건","아티스트","아프로","안경 애호가","안경 캐릭터","안드로이드","안주","알","애슬리트","애호가","액세서리 숍 단골","어린이","어머니","어묵","어부","어시스턴트","어탁","어패류","엄마","에너지 스탠드 유저","에이전트","엔터테이너","엔페리 애호가","여동생","여름 축제","연구원","연어","연어 라이프","연어알","열광 팬","열혈한","영역 배틀 마스터","영역 배틀 애호가","영역 배틀러","오버플로셔 유저","오징어","오징어 라이프","오징어 먹물","오징어 시스터즈 팬","오징어넷","옥타리안","옥토링","온천 애호가","올라운더","올림머리","올백","옷 가게 단골","옷차림","와이드 롤러 유저","요리사","용궁성","용사","우두머리","우미보즈","우주 비행사","우츠호 팬","울트라 샷 유저","울트라 스탬프 유저","원시인","웨이브","위원장","유령","윤활유","이사님","이이다 팬","이쪽이야","이하 생략","익살꾼","익스플로셔 유저","인간","인간 난로","인기쟁이","인류","인생","인플루언서","일꾼","일반인","일벌레","일본 무사","일인자","일자 머리","임금","잉크","잉크라인 애호가","잉클링","자매","자유로운 영혼","작가","잔상","잡화 컬렉터","잡화점 단골","장난꾸러기","장발","장인","재킷 애호가","재택근무자","전문가","전사","전투광","절약가","절임","젊은이","점퍼","점프 비컨 유저","정신","젖은 머리","제자","제코 애호가","제트 스위퍼 유저","제트 팩 유저","젤라틴","젤리피스 애호가","조각 미남","조수","존재","종업원","주먹","지몬 애호가","진실","집사","징어롤러","징어클라이머","참모","책임자","챌린저","챔피언","천사","천연기념물","천재","초밥","촌장","최종 병기","추억","축제 애호가","카드 게이머","카드 컬렉터","카르파초","카리스마","카메라맨","카본 롤러 유저","캐주얼","캠퍼","캠핑 셸터 유저","커런트립 팬","컬러","컬링 밤 유저","켈빈 525 유저","코디","코디네이터","코미디언","코치","콘로우","콘텐츠 크리에이터","쿠겔 슈라이버 유저","쿼드 호퍼 유저","퀵 밤 유저","퀸","큐피드","크래시 블래스터 유저","크랩","크랩 탱크 유저","크리에이터","키보디스트","킹","타이틀 홀더","타타키 켄사키 애호가","탄산 밤 유저","탐정","태양","태풍의 눈","털 뭉치","텐타클즈 팬","토네이도","토피도 유저","투자가","트라이 스트링거 유저","트랩 유저","트레이너","트리플 토네이도 유저","트윈 테일","특수 부위","파괴신","파라 셸터 유저","파블로 유저","파이어핀 애호가","파이터","파일럿","파티 애호가","파티 피플","판타지","패셔니스타","패션 리더","패자","팬","페이드 커트","페인터","포니테일","포리마 애호가","포식자","포유류","포이즌 미스트 유저","포인트 센서 유저","표류물","풀","풋내기","풍운아","프라이드치킨","프라임 슈터 유저","프렌드","프로그래머","프로듀서","프로모델러 유저","프리랜서","프릭","프린세스","프린스","플랑크톤","플래너","피시","하이드런트 유저","학생","한 마리 늑대","할머니","할아버지","핫 블래스터 유저","해녀","해산물","해파리","허풍선이","헌터","헤드","헤드라이너","형제","호리비 애호가","호쿠사이 유저","호타루 팬","홉 소나 유저","화이트아웃 애호가","회","회사원","회장님","후배","후우카 팬","흡입기 유저","히레오","히메 팬","히어로","히어로 모드 마스터","히어로 모드 애호가"]
            },
            ui: {
                tabText: "텍스트",
                tabBanners: "판",
                tabBadges: "배지",
                textLanguage: "언어",
                textName: "이름",
                textTitles: "별명",
                textRandomize: "무작위의",
                textSlot1: "점 1",
                textSlot2: "점 2",
                textSlot3: "점 3",
                buttonBoth: "두 별명 모두",
                buttonFirst: "첫 번째 별명",
                buttonLast: "마지막 별명",
                buttonBanner: "판",
                buttonBadges: "배지",
                buttonAll: "모두",
                buttonDownload: "다운로드!",
                textMessage: "오타가 있을 시 트위터 DM 부탁드립니다!",
                textCustom: "사용자 지정",
                textUpload: "업로드",
                textToggle: "활성화됨",
                textColour: "색깔"
            },
            sections: {
                banners: {
                    vanilla: "인게임",
                    bandCustom: '밴드',
                    specCustom: '특수 무기',
                    mapsCustom: '지역',
                    miscCustom: '여러 가지 잡다한',
                    userCustom: '업로드',
                },
                badges: {
                    coop: "새먼 런",
                    mode: "게임 모드",
                    shop: "상점",
                    misc: "여러 가지 잡다한",
                    gear: "브랜드",
                    spec: "특수 무기",
                    weps: "무기",
                    wepsCustom: "무기",
                    subsCustom: "보조무기",
                    modeCustom: "게임 모드",
                    gearCustom: "브랜드",
                    coopCustom: "새먼 런",
                    charCustom: "문자",
                    iconCustom: "아이콘",
                    spf2Custom: "페스티벌 2",
                    spf3Custom: "페스티벌 3",
                    cakeCustom: "메모리 케이크",
                    userCustom: "업로드",
                }
            },
            default: ["카오폴리스의", "젊은이"]
        },
        // Chinese (Traditional)
        TWzh: {
            name: "中文（繁體）",
            titles: {
                first: ["空別名", "100%的","10年前是","3％的","50％的","5年後是","Calamari","DJ","I love","IT界的","Q彈的","VR","X比賽的","amiibo的","一大早的","一日","一生的","一箭穿心的","一般比賽的","一點點的","三色奪寶比賽的","三角洲的","上前線的","不再迷惘的","不得了","不能再輸的","世事無常的","世界三大的","世界中心的","世界第一的","世紀末的","世紀的","久違的","乘風破浪的","乾潮的","了不起的","井底的","享受當下的","享樂的","今天是","今天生日的","今年的","任何時候都是","休假的","來自未來的","來自過去的","修行中的","健康的","傳統的","傳說的","傾家蕩產的","像鬼的","僵硬的","優游自在的","優秀的","優雅的","充滿愛的","光明的","光滑的","全新感受的","全自動的","八隻腳的","冬天的","冬日風情的","冬眠的","冷冷的","冷淡的","划算的","初代","初夏的","初次的","到處亂塗的","刺刺的","前衛的","前衛藝術的","剎那的","剛強的","剛起步的","努力的","務實的","北大西洋的","北太平洋的","北極海的","十隻腳的","半吊子的","半夜的","南大西洋的","南太平洋的","南極海的","占地鬥士道場的","印度洋的","危險的","厚實的","去年的","受推崇的","受邀的","古著風的","只是","只有今天最特別的","可喜可賀的","可靠的","右撇子的","名譽","命運的","咆哮的","哥德式的","哥德搖滾的","善良的","喪失記憶的","單鉤釣魚的","嘻哈的","噴塗的","噴發的","嚮往成為司令的","困難的","固執的","國民的","堅持不懈的","增生的","墨汁用光的","壓倒性的","夏天的","夏日風情的","多愁善感的","多話的","夜行性的","大地的","大大吉的","大廳的","大海的","大的","大胃王的","大膽的","大致上是","大量出現的","大量的","天真無邪的","天空的","太古的","奇蹟","好","好勝的","好奇心旺盛的","嬌柔的","孤單一人的","孤獨的","孤芳自賞的","孩子氣的","宇宙的","守護的","完全燃燒的","完美的","客廳的","客氣的","室內的","室外的","害羞的","富有的","實習中的","實際是","專業級的","小的","尖銳的","尚興市的","尚興廣場的","尚興的","就是","山的","岸邊的","嶄新的","工作的","左右開弓的","左撇子的","巨大化的","常有的","平日的","年輕的","年邁的","幸運的","幻界的","幽暗的","座頭購物中心的","廣場的","強硬的","強運的","彈跳的","影子的","很大的","很好的","後巷的","徘徊不定的","復古的","心情好的","心血來潮的","心跳加速的","必殺的","快樂的","快速射擊的","急性子的","想成為英雄的","想睡的","想紅的","愛做夢的","愛吃甜食的","愛吃的","愛吃肉的","愛吃辣的","愛吃魚的","愛好動畫的","愛好名牌的","愛好工作的","愛好散步的","愛好旅行的","愛好水果的","愛好漫畫的","愛好蔬菜的","愛好購物的","愛好電影的","愛玩遊戲的","感情用事的","懦弱的","懶散的","戀愛中的","成熟的","成長中的","我是","戰鬥的","所謂的","手無寸鐵的","才貌雙全的","投胎轉世的","拍攝的","描繪的","搖滾的","搭上好浪潮的","摩德派的","摩登的","擅長合作的","擅長掩護的","擅長護衛的","擅長隱身的","攻擊的","整齊的","文青系的","斯普拉遁的","新世紀的","新卷堡的","新手的","新潮的","新穎的","新葉標誌的","新鮮的","日行性的","早熟的","早起的","明天再努力的","明年的","春天的","春色的","昨天是","時代的","時尚的","時尚風潮的","時髦的","晝行性的","普通的","暈船的","暑假的","曖昧的","曬乾的","最初的","最前線的","最強的","最後的","最新型的","最棒的","有品味的","有威嚴的","有深度的","有潛力的","有秩序的","有組織力的","有邏輯性的","有鬍鬚的","有魅力的","服裝店的","期待明天的","未被沾染的","果然是","柔軟的","森林的","業餘的","極稀有的","橫掃千軍的","橫衝直撞的","武器店的","歸來的","死板的","比目魚住宅區的","比較的","民族風的","水槽中的","水的","永恆的","永遠的","沉著冷靜的","沉默寡言的","沒電的","油漬搖滾的","沾滿墨汁的","泛用型的","波濤洶湧的","活力十足的","活在當下的","活蹦亂跳的","流利的","流行的","海女美術大學的","海洋的","海灘褲","海邊的","海鮮","淚水的","深海的","混水摸魚的","混沌的","清爽型的","溫暖的","溫泉花大峽谷的","溼透的","滴出墨汁的","滿出來的","滿好看的","滿潮的","漁獲豐收的","漂泊的","漂浮的","漂浮落難船的","漆黑的","漫不經心的","潔白的","潛伏的","潛水的","潮流的","激烈的","濃郁的","濃霧籠罩下的","濕地的","瀕臨絕種的","火焰的","火熱的","炸彈的","烏黑的","無動於衷的","無名氏的","無慈悲的","無拘無束的","無敵的","無法待在墨汁裡的","無臭無味的","無論如何都是","無限的","煙管魚市場的","熊先生商會的","熟練的","熬出湯汁的","熬夜的","熱情的","犀利的","犯人是","狀態值不錯的","狀態值中等的","狀態值低的","狀態值超棒的","狂潮中的","猛烈的","獨一無二的","獨當一面的","甜甜的","生硬的","生長在地底下的","用鰓呼吸的","畏縮的","異世界的","疲累的","發光的","白天的","白晝的","白色的","百發百中的","盛夏的","直接命中的","直播中的","直播結束的","相信直覺的","相機視角的","真實的","真心誠意的","真格的","真誠的","真鯖跨海大橋的","眼力好的","睡醒的","瞬間爆發力強的","砧板上的","破天荒的","破曉的","硬派的","碰運氣的","祝賀的","神乎其技的","神秘國度的","神聖的","神速的","私人比賽的","秋天的","秋老虎的","秋色的","秘傳的","秘密的","究極的","空前絕後的","立即的","站著玩的","站著踩的","竹蟶疏洪道的","笑容燦爛的","第三代","第二代","簡約的","紅色的","純白的","純粹的","紛飛的","終極的","經過加工的","經驗老到的","總之就是","總是的","缺錢的","美味的","美式休閒風的","翻滾的","肌肉結實的","肚子餓的","肥美的","腐爛也沒關係的","臨陣磨槍的","自信滿滿的","自成一派的","自拍的","自然的","自稱為","臭魚乾溫泉的","與生俱來的","花枝招展的","芳香的","苗條的","英勇的","英雄模式的","荒界的","荒野的","萌萌的","萬眾矚目的","蒸氣龐克的","蔚藍的","藝術性的","蠻頹比賽的","蠻頹的","蠻頹鎮的","視覺系的","覺悟的","角落的","訂製的","認真的","調皮的","謎樣的","變幻無常的","貪婪的","貪得無厭的","資訊戰的","賣剩下的","走在流行尖端的","起毛的","超人的","超出想像的","超大的","超級","超越極限的","超魷型的","趕流行的","跑來跑去的","跪坐中的","身心強壯的","躲在被子裡的","躺平的","輕而易舉的","輕飄飄的","轟隆隆的","迷路的","逃得很快的","逃跑的","通稱為","週末的","運動系的","運動風的","過時的","達人的","遠方的","適當的","邪惡的","都會的","鄉村搖滾的","鄉村的","酥脆的","酷炫的","醋飯海洋世界的","重要的","野生的","野蠻的","金眼鯛美術館的","長袖的","閃亮的","閃光的","閃耀的","閃閃發光的","隆冬的","隔壁的","隱藏的","雜貨店的","雪地的","雷霆的","電光石火的","電玩中心的","霹靂舞派的","靜音中的","鞋店的","音速的","頂級","頑強的","頭腦清晰的","頭部裝備店的","風的","飛翔的","食量小的","馬力全開的","骯髒的","高人氣的","高性能的","鬼頭刀SPA度假區的","魚肉碎金屬的","魷型的","魷樂天地的","鮭壩的","鮭魚跑的","鮮紅的","鮮豔的","鰻鯰區的","鱘魚造船廠的","鹹的","麥年海洋發電所的","麻木的","黃昏時分的","黏滑的","黏糊糊的","黑白的","黑色的","龐克的"],
                last: ["空別名", ".52加侖操作者",".96加侖操作者","14式竹筒槍操作者","1號","2號","3號","4K準星槍操作者","4號","8號","ABXY粉絲","AI","B-boy","B-girl","Boss","C-Side粉絲","CEO","DJ","DNA","Damp Socks粉絲","Dedf1sh粉絲","From Bottom粉絲","Front Roe粉絲","H3捲管槍操作者","Hightide Era粉絲","Inkantation","L3捲管槍操作者","LACT-450操作者","LOVE","N-ZAP操作者","OCTOTOOL粉絲","R-PEN操作者","SashiMori粉絲","Squid Squad粉絲","T恤愛好者","Wet Floor粉絲","ω-3粉絲","一匹狼","一般人","七輪愛好者","三發獵魚弓操作者","三重龍捲風操作者","上司","上班族","下屬","丑角","丘比特","丸子頭","主唱","主子","乖寶寶","乾貨","人們","人才","人氣王","人生","人類","仙人","代表","仿生人","企劃人員","作家","作者","侍酒師","保鏢","偵探","偶像","傢伙","兄弟","兒子","全能者","全都包","公主","公升4K操作者","冒失鬼","冒險家","冠軍","冰壺炸彈操作者","初學者","到此魷止","刺刺頭","前輩","前鋒","副社長","創作家","劍尖魷愛好者","助手","助理","勇者","勞碌命","北齋操作者","半魚人","博士","占地對戰大師","占地對戰愛好者","占地鬥士","卡片收藏者","卡牌玩家","原始人","參謀","參賽者","反派角色","叔叔","可變式滾筒操作者","吉他手","吉利丁","同伴","名人","名流","名牌愛好者","吐槽擔當","吸墨機操作者","吸盤炸彈操作者","員工","哥哥","哺乳類","商店店員","啦啦隊","喇叭雷射5.1ch操作者","喜劇演員","單挑者","單車騎士","噴射清潔槍操作者","噴射背包操作者","四大護法","四重彈跳手槍操作者","回憶","國王","圓珠筆操作者","團員","城市女孩","城市男孩","培訓師","墨汁","墨汁陷阱操作者","墨雨雲操作者","壓軸","壽司","夏日祭典","外套愛好者","多重導彈操作者","大嘴巴","大小姐","大少爺","大師","大臣","天使","天才","天然紀念物","太空人","太空射擊槍操作者","太陽","女兒","女孩","女神","奶奶","好哥兒們","好姐妹","妹妹","姐妹","姐姐","委員長","媽媽","嬰兒","存在","孩子","孩子王","孫子","學妹","學弟","學生","守護神","定點偵測器操作者","家族","實況主","寬滾筒操作者","寵物","寶寶","寺門愛好者","專員","專業人士","專業模型槍操作者","小姬粉絲","小弟","小惡魔","小擬粉絲","小菜","小螢粉絲","島民","工作刮水刀操作者","工匠","左右橫跳者","巨人","巨大防護罩操作者","巴勃羅操作者","帆立愛好者","師傅","帽子愛好者","平頭","年輕一輩","年輕人","幸運兒","幻想","幽靈","廚師","廠長","廣域標記槍操作者","弟子","弟弟","彈跳聲納操作者","影響者","後梳油頭","心靈專家","忍者","快炒","快速炸彈操作者","快速爆破槍 精英操作者","快速爆破槍操作者","怕冷者","怕熱者","怕生者","性格內向者","怪胎","恐龍","愛吃鬼","愛好者","慢起步者","懶人","成員","戰士","戰鬥狂","戰鬥者","戰鬥魷魚愛好者","手下","打工仔","打擊者","拳頭","挑戰者","捲髮","搖擺樂","搞笑藝人","攝影師","支持者","教練","散壽司愛好者","文人雅士","斜瀏海","斯普拉射擊槍操作者","斯普拉旋轉槍操作者","斯普拉機動槍操作者","斯普拉準星槍操作者","斯普拉滾筒操作者","斯普拉炸彈操作者","斯普拉蓄力狙擊槍操作者","斯普拉防護牆操作者","新人打工仔","新人王","新娘","新星爆破槍操作者","新生","新葉射擊槍操作者","新郎","方程式","旅行者","日式炸雞","時尚教主","時尚界人士","時雨愛好者","暇古愛好者","暖流愛好者","暴風雪","書蟲","曼曼粉絲","最終兵器","會長","月亮","朋友","服裝店常客","村長","桌遊玩家","桶裝旋轉槍操作者","標線器操作者","模特兒","樣子","機器人","機器人炸彈操作者","次文化愛好者","歌手","武器店常客","武士","歹徒","殘像","母親","毒霧操作者","毛球","氣氛","水母","水電工","波浪捲","泰斗","洗筆桶操作者","派對愛好者","派對王","流裂粉絲","浪人","浮游生物","海和尚","海月愛好者","海水魚","海洋生物","海產","海豚","海鰻","海鰻操作者","消防栓旋轉槍操作者","淡水魚","混混","游泳者","溜冰者","溫泉愛好者","滿溢泡澡潑桶操作者","漁夫","漂流物","演員","漫畫家","漸層寸頭","潤滑油","澤酷愛好者","濕髮","濺鍍槍操作者","灑墨器操作者","火熱爆破槍操作者","烏龜","無法無天愛好者","無特定職業者","煙火","熊","熱血男子","爆炸潑桶操作者","爆炸頭","父親","爸爸","爺爺","牆壁","特務配件操作者","狂熱者","狗","獨行俠","獵人","獵食者","王子","王者","玩家","瑪利亞","生命","生存者","生活模式","生肉片","生魚片","男孩","男性長髮","男神","畫家","登山家","發布者","皇后","目標","盾","省錢專家","真實","真格區域大師","真格區域愛好者","真格塔樓大師","真格塔樓愛好者","真格蛤蜊大師","真格蛤蜊愛好者","真格魚虎大師","真格魚虎對戰愛好者","眼淚","眼鏡仔","眼鏡愛好者","短髮","研究員","破壞神","碎末","碳纖維滾筒操作者","碳酸炸彈操作者","社長","神之子","神秘人","祭典愛好者","禁同食粉絲","科學家","秘書","稀有部位","程式設計師","穿搭","穿著打扮","窄域標記槍操作者","窮人","章魚","章魚圈","章魚墨汁","章魚女戰士","章魚族","章魚生活","管家","管理者","紀錄保持人","終極印章操作者","終極發射操作者","組長","經理","經紀人","維京人","維他命","縱捲髮","總監","總統","置物櫃狂","羅肯貝格愛好者","美人魚","美容師","翻滾者","老大","老師","老手","耕田牛","肌肉","能量站操作者","腕兒姐妹粉絲","自然髮型","自由工作者","舞者","舞蹈家","艾洛眼愛好者","花","英雄","英雄模式大師","英雄模式愛好者","草","莎莎粉絲","莫西干頭","菜鳥","董事","蓋飯","藝術家","蘑菇頭","蛋","螃蟹","螃蟹坦克操作者","蟲子","行家","衝塗爆破槍操作者","衝浪者","衝鋒隊長","裝傻擔當","製作人","襯衫愛好者","觀光客","觀眾","觸手噴射操作者","討海人","記憶","設計師","警衛","讚氣彈操作者","豆腐","貓","貝斯手","負責人","賭徒","跳躍信標操作者","跳躍者","身體","軍艦壽司","轟炸者","迴旋潑桶操作者","追星族","造型師","運動員","運動鞋愛好者","遠端工作者","遠距爆破槍操作者","遮陽防空傘操作者","部下","部長","配角","醃漬","針織衫愛好者","釣客","鋼鐵先鋒愛好者","鍛品愛好者","鍵盤手","鏡子","長髮","開爾文525操作者","開瓶噴泉槍操作者","間諜","關東煮","阿基里斯腱","阿姨","阿宅","附贈品","雙殼貝","雙語者","雙重清潔槍操作者","雙馬尾","雜貨店常客","雜貨收藏者","雨刷刮水刀操作者","雪人","電動馬達滾筒操作者","露營者","露營防空傘操作者","霸者","非電玩玩家","面罩","靴子愛好者","鞋店常客","頂尖射擊槍操作者","領班","領袖","頭皮","頭目","頭腦","頭號粉絲","頭足綱","頭部裝備店常客","顏色","類型","颱風眼","飛機頭","飛濺潑桶操作者","飛行員","飯田粉絲","饒舌歌手","馬尾","駕駛員","騎士","髒辮","高壓油管槍操作者","髮髻","鬼","鬼福粉絲","鬼蝠魟","魔法師","魔王","魚乾製造愛好者","魚奇奇","魚拓","魚漿","魚漿幫粉絲","魚片","魚虎","魚貝類","魚雷操作者","魷快潔操作者","魷皇愛好者","魷魚","魷魚乾","魷魚圈","魷魚墨汁","魷魚族","魷魚滾行者","魷魚生活","魷魚登頂者","鮭魚","鮭魚卵","鮭魚生活","鮭魚跑大師","鮭魚跑愛好者","鯊魚","鯊魚坐騎操作者","鯊魚操作者","鯰魚","鳥","鸚鵡螺號操作者","麻花辮","麻辣魷物粉絲","鼓手","齊瀏海","龍","龍宮城","龍捲風","龐然大物"]
            },
            ui: {
                tabText: "文本",
                tabBanners: "背景",
                tabBadges: "徽章",
                textLanguage: "語言",
                textName: "名稱",
                textTitles: "別名",
                textRandomize: "隨機",
                textSlot1: "第 1 項",
                textSlot2: "第 2 項",
                textSlot3: "第 3 項",
                buttonBoth: "兩個別名",
                buttonFirst: "前別名",
                buttonLast: "後別名",
                buttonBanner: "背景",
                buttonBadges: "徽章",
                buttonAll: "全部",
                buttonDownload: "下載!",
                textMessage: "如果有任何文本錯誤，請在 Twitter 上私信我！",
                textCustom: "自定義",
                textUpload: "上傳",
                textToggle: "啟用",
                textColour: "顏色"
            },
            sections: {
                banners: {
                    vanilla: "在遊戲中",
                    bandCustom: '音樂組',
                    specCustom: '特殊武器',
                    mapsCustom: '地區',
                    miscCustom: '各種各樣的',
                    userCustom: '已上傳',
                },
                badges: {
                    coop: "鮭魚跑",
                    mode: "遊戲模式",
                    shop: "商店",
                    misc: "各種各樣的",
                    gear: "品牌",
                    spec: "特殊武器",
                    weps: "武器",
                    wepsCustom: "武器",
                    subsCustom: "副武器",
                    modeCustom: "遊戲模式",
                    gearCustom: "品牌",
                    coopCustom: "鮭魚跑",
                    charCustom: "人物",
                    iconCustom: "圖標",
                    spf2Custom: "祭典 2",
                    spf3Custom: "祭典 3",
                    cakeCustom: "記憶蛋糕",
                    userCustom: "已上傳",
                }
            },
            default: ["蠻頹的", "年輕人"]
        }
    }

    const isSpaceLang = () => {
        return ['USen','EUnl','USfr','EUfr','EUde','EUit','EUru','USes','EUes', 'KRko'].indexOf(language) !== -1;
    }

    const langFonts = {
        JPja: ["Kurokane", "Rowdy"],
        CNzh: ["HanyiZongyi", "HuakangZongyi"],
        KRko: ["KERINm", "KCUBEr"],
        TWzh: ["DFPT_AZ5", "DFPT_ZY9"]
    }
    
    const images = {
        banners: [],
        badges: [],
        watermarks: [],
    }

    let rawParams;
    if (location.href.indexOf("#") != -1) {
        rawParams = location.href.slice(0, location.href.indexOf("#"));
    } else {
        rawParams = location.href;
    }
    if (rawParams.indexOf("?") != -1) {
        rawParams = rawParams.slice(rawParams.indexOf("?") + 1).split("&");
    } else {
        rawParams = [];
    }
    const params = {};
    for (let i = 0; i < rawParams.length; i++) {
        try {
            const p = rawParams[i].split("=");
            params[p[0]] = decodeURIComponent(p[1]);
        } catch (err) {}
    }

    params.lang = params.lang || 'USen';
    if (Object.keys(lang).indexOf(params.lang) === -1) {
        params.lang = 'USen';
    }
    const language = params.lang;
    document.body.setAttribute('lang', language);

    Object.keys(lang[language].ui).forEach(element => {
        document.querySelectorAll(`[name="${element}"]`).forEach(e => {
            if (element.startsWith('tab') || element.startsWith('button')) {
                e.value = lang[language].ui[element];
            } else if (element.startsWith('text')) {
                e.textContent = lang[language].ui[element];
            }
        });
    });

    const languageSelector = document.querySelector('#lang');
    Object.keys(lang).forEach(l => {
        if (languageSelector) {
            const option = document.createElement('option');
            option.textContent = lang[l].name;
            option.value = l;
            if (language === l) {
                option.defaultSelected = true;
            }
            languageSelector.appendChild(option);
        }
    });
    languageSelector.addEventListener('change', () => {
        location = location.origin + location.pathname + `?lang=${languageSelector.value}`;
    });

    if (navigator.userAgent.toLowerCase().includes('chrome')) {
        document.body.classList.add('chrome');
    }
    
    const tag = {
        name: 'Player',
        title: {
            first: 0,
            last: 0
        },
        banner: 0,
        id: '0001',
        badges: [ -1, -1, -1 ],
        custom: {
            isCustom: false,
            title: lang[language].default.join(isSpaceLang(language) ? ((!lang[language].default[0].endsWith('-')) ? ' ' : '') : ''),
            colour: '#ffffff'
        }
    }
    
    const waitUntil = (fn, length) => {
        const interval = setInterval(() => {
            if (fn()) clearInterval(interval);
        }, length ? length*1000 : 500);
    }


    const canvas = document.querySelector('#splashtag');
    const ctx = canvas.getContext('2d');
    const downloadlink = document.querySelector('#downloadlink');
    const downloadbutton = document.querySelector('#downloadbutton');

    const textScale = 2;
    const textCanvas = document.createElement('canvas');
    textCanvas.width = 700*textScale;
    textCanvas.height = 200*textScale;
    const textCtx = textCanvas.getContext('2d');
    textCtx.scale(textScale, textScale);

    const getFont = (textType) => {
        const fonts = [];
        if (textType === 0) {
            fonts.push('Splat-text');
            if (langFonts[language]) {
                fonts.push(langFonts[language][0]);
            }
        } else {
            fonts.push('Splat-title');
            if (langFonts[language]) {
                fonts.push(langFonts[language][1]);
            }
        }

        return fonts.join(', ');
    }
    
    const renderSplashtag = () => {
        textCtx.clearRect(0, 0, 700, 200);
        ctx.clearRect(0, 0, 700, 200);

        ctx.drawImage(images.banners[tag.banner], 0, 0, 700, 200);
        
        // Draw each badge on the banner
        for (let i = 0; i < 3; i++) {
            if (tag.badges[i] !== -1) {
                const x = 480 + 74*i;
                if (badges[tag.badges[i]].includes('custom') || badges[tag.badges[i]].includes('data')) {
                    const cw = images.badges[tag.badges[i]].naturalWidth;
                    const ch = images.badges[tag.badges[i]].naturalHeight;
                    const landscape = cw > ch;
                    const ratio = !landscape ? (cw / ch) : (ch / cw);
                    const width = landscape ? 70 : 70*ratio;
                    const height = !landscape ? 70 : 70*ratio;
                    // calculate the size ratio
                    ctx.drawImage(images.badges[tag.badges[i]], x + (70 / 2 - width / 2), 128 + (70 / 2 - height / 2), width, height);
                } else {
                    ctx.drawImage(images.badges[tag.badges[i]], x, 128, 70, 70);
                }
            }
        }

        // Set canvas colour
        textCtx.fillStyle = (tag.custom.isCustom ? tag.custom.colour : '#' + banners[tag.banner].colour);

        // Write titles
        textCtx.textAlign = 'left';
        
        const chosentitles = [];
        if (tag.custom.isCustom) {
            chosentitles.push(tag.custom.title);
        } else {
            if (tag.title.first) {
                chosentitles.push(lang[language].titles.first[tag.title.first]);
            }
            if (tag.title.last) {
                chosentitles.push(lang[language].titles.last[tag.title.last]);
            }
        }
        if (chosentitles.length) {
            const size = 36;
            textCtx.font = size + 'px ' + getFont(0);
            const spaceOrBlank = isSpaceLang(language) ? ((!chosentitles[0].endsWith('-')) ? ' ' : '') : '';
            let reduction = 0;
            while (textCtx.measureText(chosentitles.join(spaceOrBlank)).width > 700 - 32) {
                reduction += 0.2;
                textCtx.font = (size - reduction) + 'px ' + getFont(0);
            }

            // in game italic value is 0.12
            textCtx.save();
            textCtx.transform(1, 0, -7.5/100, 1, 0, 0);
            textCtx.fillText(chosentitles.join(spaceOrBlank), 16, 42 - Math.floor(reduction/2));
            textCtx.restore();
        }

        // Write tag text (if not negative)
        if (!tag.id.includes('-')) {
            textCtx.font = '24px ' + getFont(0);
            textCtx.fillText('#' + tag.id, 24, 186);
        }

        // Write player name
        if (tag.name.length) {
            const size = 66;
            textCtx.font = `${size}px ${getFont(1)}`;
            let reduction = 0;
            while (textCtx.measureText(tag.name).width > 700 - (40 - Math.floor(reduction / 2))) {
                ++reduction;
                textCtx.font = (size - reduction) + 'px ' + getFont(1);
            }

            textCtx.textAlign = 'center';
            textCtx.fillText(tag.name, 700/2, 120 - Math.floor(reduction / 3));
        }

        let customBadge = false;
        let customBanner = false;
        tag.badges.forEach(b => {
            if (b !== -1) customBadge = customBadge || badges[b].includes('data') || badges[b].includes('custom');
        });

        ['custom', 'data'].forEach(word => {
            customBanner = customBanner || banners[tag.banner].file.includes(word);
        })

        // draw small watermark if using custom assets
        if (customBanner || tag.custom.isCustom || customBadge) {
            textCtx.globalAlpha = 0.2;

            const wm = {
                offset: {
                    x: 10,
                    y: 5
                },
                textoffset: 10,
                width: 40,
                height: 40,
            }

            textCtx.font = '14px Splat-text';
            textCtx.textAlign = 'center';
            textCtx.fillStyle = '#ffffff';
            const wmX = 700 - wm.width - wm.offset.x;
            const textPos = {
                x: 700 - wm.offset.x - wm.width/2,
                y: wm.offset.y + wm.height + wm.textoffset
            }

            const artists = [
                {
                    dir: '/deadline/',
                    name: 'DeadLine',
                    offset: 0
                },
                {
                    dir: '/electrodev/',
                    name: 'ElectroDev',
                    offset: 4
                }
            ];

            let customArtist = -1;
            artists.forEach(a => {
                if (banners[tag.banner].file.includes(a.dir)) {
                    customArtist = artists.indexOf(a);
                }
            });

            if (customArtist+1) {
                const a = artists[customArtist];
                textCtx.drawImage(images.watermarks[customArtist+1], wmX - a.offset, wm.offset.y, wm.width, wm.height);
                textCtx.fillText(a.name, textPos.x - a.offset, textPos.y);
                if (tag.custom.isCustom || customBadge) {
                    textCtx.fillText('custom', textPos.x - a.offset, textPos.y + 14);
                }
            } else {
                textCtx.drawImage(images.watermarks[0], wmX, wm.offset.y, wm.width, wm.height);
                textCtx.fillText('custom', textPos.x, textPos.y);
            }

            textCtx.globalAlpha = 1;
        }

        ctx.drawImage(textCanvas, 0, 0, 700, 200);

        // Disables download button if testing locally
        if (!location.href.startsWith('file')) {
            downloadlink.href = canvas.toDataURL();
            downloadbutton.removeAttribute('disabled');
        }
    }

    /* Credit to @DeadLineSMB_Art on Twitter for the special band banners */
    /* Credit to @ElectroDev on Twitter for the special weapon banners */
    customBanners.forEach(item => {
        banners.push(item);
    });
    customBadges.forEach(item => {
        badges.push(item);
    });

    // Loading queue for each item (so they do not need to load when selecting banners or badges)
    {
        loadQueue.push(1);
        let img = new Image();
        img.src = './images/watermark.png';
        img.onload = loadQueue.pop();
        images.watermarks.push(img);
    }
    {
        loadQueue.push(1);
        let img = new Image();
        img.src = './images/deadline.png';
        img.onload = loadQueue.pop();
        images.watermarks.push(img);
    }
    {
        loadQueue.push(1);
        let img = new Image();
        img.src = './images/electrodev.png';
        img.onload = loadQueue.pop();
        images.watermarks.push(img);
    }

    // Inputs =)
    const nameinput = document.querySelector('#nameinput');
    const taginput = document.querySelector('#taginput');
    const titleinput1 = document.querySelector('#titleinput1');
    const titleinput2 = document.querySelector('#titleinput2');

    // randoms
    const randomtitles = document.querySelector('#randomtitle');
    const randomtitle1 = document.querySelector('#randomtitle1');
    const randomtitle2 = document.querySelector('#randomtitle2');
    const randombanner = document.querySelector('#randombanner');
    const randombadge = document.querySelector('#randombadge');
    const randomall = document.querySelector('#randomall');

    // customs
    const customcheck = document.querySelector('#customcheck');
    const customtitle = document.querySelector('#customtitle');
    const custombanner = document.querySelector('#custombanner');
    const custombadges = document.querySelector('#custombadge');
    const customcolour = document.querySelector('#customcolour');

    // section select menus
    const bannersection = document.querySelector('#bannersection');
    const badgesection = document.querySelector('#badgesection');

    customtitle.value = lang[language].default.join(isSpaceLang(language) ? ((!lang[language].default[0].endsWith('-')) ? ' ' : '') : '');
    customtitle.placeholder = customtitle.value;

    const tabContainer = document.querySelector('.tabcontainer');
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tabcontent');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', () => {
            tabs.forEach(t => {
                t.classList.remove('selected');
            });
            tabContents.forEach(t => {
                t.classList.add('hidden');
            });
            tabs[i].classList.add('selected');
            tabContents[i].classList.remove('hidden');
        });
    }

    // Set defaults for inputs
    const defaultBannerIndex = banners.findIndex(a => !a.name && a.file.includes('Tutorial'));
    tag.banner = defaultBannerIndex;
    tag.title.first = lang[language].titles.first.indexOf(lang[language].default[0]);
    tag.title.last = lang[language].titles.last.indexOf(lang[language].default[1]);

    const bannerContainer = document.querySelector('#bannercontainer');
    
    bannersection.addEventListener('change', () => {
        bannerContainer.querySelector('#' + bannersection.value).scrollIntoView();
    });

    const bannerClickEvent = (item, img) => {
        const newBanner = banners.findIndex(b => b.file === item.file);
        // clear and move selected
        document.querySelectorAll('#bannercontainer img.selected').forEach(s => {
            s.classList.remove('selected');
        });
        if (tag.banner !== newBanner) {
            tag.banner = newBanner;
            img.classList.add('selected');
        } else {
            tag.banner = defaultBannerIndex;
            bannerContainer.childNodes[defaultBannerIndex].classList.add('selected');
        }
        customcolour.value = '#' + banners[tag.banner].colour;
        tag.custom.colour = customcolour.value;
        tag.custom.banner = null;
        renderSplashtag();
    }

    // Add options for select menus
    banners.forEach(item => {
        if (item.name) {
            for (let i = 0; i < bannerContainer.childNodes.length % 4; i++) {
                bannerContainer.appendChild(document.createElement('div'));
            }
            const isCustom = item.name.endsWith('Custom');
            const sectionTitle = document.createElement('div');
            sectionTitle.textContent = lang[language].sections.banners[item.name] + (isCustom ? ' (' + lang[language].ui.textCustom + ')' : '');
            sectionTitle.id = item.id;
            sectionTitle.className = 'imagelistsection';
            bannerContainer.appendChild(sectionTitle);
            images.banners.push(null);

            // add to banner select dropdown
            const option = document.createElement('option');
            option.textContent = lang[language].sections.banners[item.name] + (isCustom ? '*' : '');
            option.value = item.id;
            bannersection.appendChild(option);
            return;
        }
        loadQueue.push(1);
        const img = document.createElement('img');
        img.src = item.file;
        images.banners.push(img);
        img.onload = loadQueue.pop();

        img.setAttribute('draggable', 'false');
        img.addEventListener('click', () => {
            bannerClickEvent(item, img);
        });

        if (item.file.includes('Tutorial')) {
            img.classList.add('selected');
        }

        bannerContainer.appendChild(img);
    });

    for (let i = 0; i < 4; i++) {
        let filler = document.createElement('div');
        filler.className = 'bannerFiller';
        bannerContainer.appendChild(filler);
    }

    const badgeContainer = document.querySelector('#badgecontainer');
    const badgeRadios = document.querySelectorAll('input[name="badgenum"]');

    badgeRadios.forEach(r => {
        r.addEventListener('change', () => {
            let slot = [...badgeRadios].findIndex(ra => ra.checked);
            document.querySelectorAll('#badgecontainer img.selected, #badgecontainer img.other').forEach(s => {
                s.className = '';
            });
            for (let i = 0; i < 3; i++) {
                if (tag.badges[i] < 0) continue;
                badgeContainer.querySelectorAll('img, .imagelistsection')[tag.badges[i]].className = i === slot ? 'selected' : 'other';
                // badgeContainer.childNodes[tag.badges[i]].className = i === slot ? 'selected' : 'other';
            }
        });
    });

    const badgeClickEvent = (item, img) => {
        let slot = [...badgeRadios].findIndex(r => r.checked);
        let currentBadge = tag.badges[slot];
        let newBadge = badges.findIndex(b => b === item);
        
        // if badge is in other slot, remove the old one
        if (tag.badges.indexOf(newBadge) !== -1) {
            tag.badges[tag.badges.indexOf(newBadge)] = -1;
            badgeContainer.querySelectorAll('img, .imagelistsection')[newBadge].className = '';
        }

        if (newBadge == currentBadge) {
            tag.badges[slot] = -1;
        } else {
            tag.badges[slot] = newBadge;
        }

        document.querySelectorAll('#badgecontainer img.selected, #badgecontainer img.other').forEach(s => {
            s.classList.remove('selected');
        });
        if (tag.badges[slot] !== -1) {
            img.className = 'selected';
        }

        renderSplashtag();
    }

    badges.forEach(item => {
        if (item.startsWith('NAME')) {
            for (let i = 0; i < badgeContainer.childNodes.length % 10; i++) {
                badgeContainer.appendChild(document.createElement('div'));
            }
            const sectionTitle = document.createElement('div');
            const name = item.split('#')[0].replace('NAME:', '');
            const id = item.split('#')[1];
            const isCustom = name.endsWith('Custom')
            sectionTitle.textContent = lang[language].sections.badges[name] + (isCustom ? ' (' + lang[language].ui.textCustom + ')' : '');
            sectionTitle.id = id;
            sectionTitle.className = 'imagelistsection';
            badgeContainer.appendChild(sectionTitle);
            images.badges.push(null);

            // add to badge select dropdown
            const option = document.createElement('option');
            option.textContent = lang[language].sections.badges[name] + (isCustom ? '*' : '');
            option.value = id;
            badgesection.appendChild(option);
            return;
        }
        loadQueue.push(1);
        const img = document.createElement('img');
        img.src = item;
        img.onload = loadQueue.pop();
        images.badges.push(img);

        img.setAttribute('draggable', 'false');
        img.addEventListener('click', () => {
            badgeClickEvent(item, img);
        });

        badgeContainer.appendChild(img);
    });
    
    for (let i = 0; i < 10; i++) {
        let filler = document.createElement('div');
        filler.className = 'badgeFiller';
        badgeContainer.appendChild(filler);
    }

    lang[language].titles.first.forEach(item => {
        const option = document.createElement('option');
        option.textContent = item;
        if (item === lang[language].default[0]) {
            option.defaultSelected = true;
        }
        titleinput1.appendChild(option);
    });

    lang[language].titles.last.forEach(item => {
        const option = document.createElement('option');
        option.textContent = item;
        if (item === lang[language].default[1]) {
            option.defaultSelected = true;
        }
        titleinput2.appendChild(option);
    });
    
    const inputheight = nameinput.getBoundingClientRect().height;
    titleinput1.style.height = `${inputheight}px`;
    titleinput2.style.height = `${inputheight}px`;

    const textTableWidth = tabContents[0].querySelector('table').getBoundingClientRect().width;
    tabContents[0].querySelector('table').style.width = `${textTableWidth}px`;

    
    // Once all of the images are loaded...
    waitUntil(() => {
        if (!loadQueue.length) {
            renderSplashtag();

            const randIndex = (array) => {
                return Math.floor(Math.random() * array.length);
            }

            const clickEvents = [
                {
                    elm: randomtitles,
                    run: () => {
                        clickEvents[1].run();
                        clickEvents[2].run();
                    }
                },
                {
                    elm: randomtitle1,
                    run: () => {
                        const title1 = randIndex(lang[language].titles.first);
                        titleinput1.selectedIndex = title1;
                        tag.title.first = title1;

                        const chosentitles = [];
                        if (tag.title.first) {
                            chosentitles.push(lang[language].titles.first[tag.title.first]);
                        }
                        if (tag.title.last) {
                            chosentitles.push(lang[language].titles.last[tag.title.last]);
                        }
                        const spaceOrBlank = isSpaceLang(language) ? ((!chosentitles[0].endsWith('-')) ? ' ' : '') : '';

                        tag.custom.title = chosentitles.join(spaceOrBlank);
                        customtitle.value = tag.custom.title;
                        setTimeout(() => {
                            renderSplashtag();
                        },1)
                    }
                },
                {
                    elm: randomtitle2,
                    run: () => {
                        const title2 = randIndex(lang[language].titles.last);
                        titleinput2.selectedIndex = title2;
                        tag.title.last = title2;

                        const chosentitles = [];
                        if (tag.title.first) {
                            chosentitles.push(lang[language].titles.first[tag.title.first]);
                        }
                        if (tag.title.last) {
                            chosentitles.push(lang[language].titles.last[tag.title.last]);
                        }
                        const spaceOrBlank = isSpaceLang(language) ? ((!chosentitles[0].endsWith('-')) ? ' ' : '') : '';

                        tag.custom.title = chosentitles.join(spaceOrBlank);
                        customtitle.value = tag.custom.title;
                        renderSplashtag();
                    }
                },
                {
                    elm: randombanner,
                    run: () => {
                        const banner = randIndex(banners.filter(b => b.file));
                        bannerContainer.querySelectorAll('img')[banner].click();
                    }
                },
                {
                    elm: randombadge,
                    run: () => {
                        const badgeImgs = badgeContainer.querySelectorAll('img');

                        for (let i = 0; i < 3; i++) {
                            badgeRadios[i].click();

                            const badge = randIndex([0, ...badgeImgs]);

                            if (badge && badgeImgs[badge]) {
                                badgeImgs[badge].click();
                            } else {
                                tag.badges[i] = -1;
                            }
                        }
                        badgeRadios[0].click();
                        /*
                        const randBadges = ["", ...badges];
                        for (let i = 0; i < 3; i++) {
                            // allow for no badge
                            const badge = randIndex(randBadges);
                            if (badge) {
                                const selected = randBadges.splice(badge, 1);
                                tag.badges[i] = badges.indexOf(selected[0]);
                            } else {
                                tag.badges[i] = -1;
                            }
                        }
                        badgeRadios[0].click();
                        document.querySelectorAll('#badgecontainer img.selected, #badgecontainer img.other').forEach(s => {
                            s.className = '';
                        });
                        for (let i = 0; i < 3; i++) {
                            if (tag.badges[i] < 0) continue;
                            badgeContainer.childNodes[tag.badges[i]].className = i === 0 ? 'selected' : 'other';
                        }*/
                    }
                },
                {
                    elm: randomall,
                    run: () => {
                        clickEvents[0].run();
                        clickEvents[3].run();
                        clickEvents[4].run();
                    }
                }
            ];

            document.querySelectorAll('.scale').forEach(e => {
                clickEvents.push({
                    elm: e,
                    run: () => {
                        let container = e.parentNode.parentNode;
                        let scale = Number(container.dataset.scale);
                        scale += Number(e.dataset.do);
                        if (scale < Number(container.dataset.min)) scale = container.dataset.min;
                        if (scale > Number(container.dataset.max)) scale = container.dataset.max;
                        container.dataset.scale = scale;
                        container.style = `--items: ${scale}`;
                    }
                })
            });

            clickEvents.forEach(event => {
                event.elm.addEventListener('click', () => {
                    event.run();
                    renderSplashtag();
                });
            });

            const changeEvents = [
                {
                    elm: titleinput1,
                    run: () => {
                        tag.title.first = titleinput1.selectedIndex;
                    }
                },
                {
                    elm: titleinput2,
                    run: () => {
                        tag.title.last = titleinput2.selectedIndex;
                    }
                },
                {
                    elm: nameinput,
                    run: () => {
                        tag.name = nameinput.value;
                    }
                },
                {
                    elm: taginput,
                    run: () => {
                        if (taginput.value.length > 5) {
                            taginput.value = taginput.value.slice(0, 5);
                        }
                        let tagstr = taginput.value;
                        while (tagstr.length < 4) {
                            tagstr = '0' + tagstr;
                        }
                        tag.id = tagstr;
                    }
                },
                {
                    elm: customcheck,
                    run: () => {
                        tag.custom.isCustom = customcheck.checked;
                        
                        tabContainer.classList.remove(`${tag.custom.isCustom ? 'hide' : 'show'}custom`);
                        tabContainer.classList.add(`${tag.custom.isCustom ? 'show' : 'hide'}custom`);

                        nameinput.setAttribute('maxlength', tag.custom.isCustom ? 100 : 10);
                        if (!tag.custom.isCustom) {
                            nameinput.value = nameinput.value.slice(0, 10);
                            tag.name = nameinput.value;
                        }
                    }
                },
                {
                    elm: customtitle,
                    run: () => {
                        tag.custom.title = customtitle.value;
                    }
                },
                {
                    elm: customcolour,
                    run: () => {
                        tag.custom.colour = customcolour.value;
                    }
                },
                {
                    elm: custombanner,
                    run: () => {
                        const reader = new FileReader();
                        reader.onload = (e) => {
                            const image = document.createElement("img");
                            image.src = e.target.result;
                            const index = banners.findIndex(b => b.file === image.src);
                            if (index === -1) {
                                image.draggable = false;
                                const item = { file: image.src, colour: 'ffffff' };
                                banners.push(item);
                                images.banners.push(image);
                                bannerContainer.insertBefore(image, bannerContainer.querySelector('.bannerFiller'));
                                image.addEventListener('click', () => {
                                    bannerClickEvent(item, image);
                                });
                                //custombanner.value = '';
                                setTimeout(() => {
                                    image.click();
                                    image.scrollIntoView();
                                    renderSplashtag();
                                }, 1);
                            } else {
                                bannerContainer.childNodes[index].click();
                            }
                        }
                        reader.readAsDataURL(custombanner.files[0]);
                    }
                },
                {
                    elm: custombadges,
                    run: () => {
                        const reader = new FileReader();
                        reader.onload = (e) => {
                            const image = document.createElement("img");
                            image.src = e.target.result;
                            const index = badges.findIndex(b => b === image.src);
                            if (index === -1) {
                                image.draggable = false;
                                const item = image.src;
                                badges.push(item);
                                images.badges.push(image);
                                badgeContainer.insertBefore(image, badgeContainer.querySelector('.badgeFiller'));
                                image.addEventListener('click', () => {
                                    badgeClickEvent(item, image);
                                });
                                setTimeout(() => {
                                    image.click();
                                    image.scrollIntoView();
                                    renderSplashtag();
                                }, 1);
                            } else {
                                badgeContainer.childNodes[index].click();
                            }
                        }
                        reader.readAsDataURL(custombadges.files[0]);
                    }
                },
                {
                    elm: bannersection,
                    run: () => {
                        bannerContainer.querySelector('#' + bannersection.value).scrollIntoView();
                    }
                },
                {
                    elm: badgesection,
                    run: () => {
                        badgeContainer.querySelector('#' + badgesection.value).scrollIntoView();
                    }
                }
            ];

            changeEvents.forEach(event => {
                event.elm.addEventListener('change', () => {
                    event.run();
                    renderSplashtag();
                });
            });

            const keyEvents = [
                {
                    elm: nameinput,
                    run: changeEvents[2].run
                },
                {
                    elm: taginput,
                    run: changeEvents[3].run
                },
                {
                    elm: customtitle,
                    run: changeEvents[5].run
                }
            ]

            keyEvents.forEach(event => {
                event.elm.addEventListener('keydown', () => {
                    setTimeout(() => {
                        event.run();
                        renderSplashtag();
                    }, 1);
                    event.run();
                    renderSplashtag();
                });
            });

            console.log(`Loaded: ${banners.length} banners, ${badges.length} badges, and ${lang[language].titles.first.length + lang[language].titles.last.length} titles.`);
            
            return true;
        }
    });
}
