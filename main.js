const load = () => {
    const loadQueue = [];
    const banners = [
        {file:"./banners/Npl_Catalog_Season01_Lv01.png",colour:"001f65"},{file:"./banners/Npl_Catalog_Season01_Lv02.png",colour:"8e102c"},{file:"./banners/Npl_Catalog_Season01_Lv03.png",colour:"bb4d00"},{file:"./banners/Npl_Catalog_Season01_Lv04.png",colour:"3f92c5"},{file:"./banners/Npl_Catalog_Season01_Lv05.png",colour:"000000"},{file:"./banners/Npl_Catalog_Season01_Lv06.png",colour:"000000"},{file:"./banners/Npl_Catalog_Season01_Lv07.png",colour:"000000"},{file:"./banners/Npl_Catalog_Season01_Lv08.png",colour:"000000"},{file:"./banners/Npl_Catalog_Season01_Lv09.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv10.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv11.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv12.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv13.png",colour:"000705"},{file:"./banners/Npl_Catalog_Season01_Lv14.png",colour:"ebffbb"},{file:"./banners/Npl_Catalog_Season01_Lv15.png",colour:"070100"},{file:"./banners/Npl_Catalog_Season01_Lv16.png",colour:"f9e0ff"},{file:"./banners/Npl_Catalog_Season01_Lv17.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv18.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv19.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv20.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv21.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv22.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv23.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv24.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv25.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv26.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv27.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv28.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv29.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv30.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv31.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv32.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv33.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv34.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv35.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv36.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv37.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv38.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv39.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv40.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv41.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv42.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv43.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv44.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv45.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv46.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv47.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv48.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv49.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv50.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv51.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv52.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv53.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv54.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv55.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv56.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv57.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv58.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv59.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv60.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv61.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv62.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv63.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv64.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv65.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv66.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv67.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv68.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv69.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv70.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv71.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv72.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv73.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv74.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv75.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv76.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv77.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv78.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv79.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv80.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv81.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season01_Lv82.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season02_Lv01.png",colour:"ffffff"},{file:"./banners/Npl_Catalog_Season02_Lv02.png",colour:"ffffff"},{file:"./banners/Npl_Coop_Season01_Lv01.png",colour:"ffffff"},{file:"./banners/Npl_Coop_Season01_Lv02.png",colour:"ffffff"},{file:"./banners/Npl_Coop_Season01_Lv03.png",colour:"ffffff"},{file:"./banners/Npl_Coop_Season01_Lv04.png",colour:"ffffff"},{file:"./banners/Npl_Coop_Season01_Lv05.png",colour:"ffffff"},{file:"./banners/Npl_Coop_Season01_Lv06.png",colour:"ffffff"},{file:"./banners/Npl_Coop_Season01_Lv07.png",colour:"ffffff"},{file:"./banners/Npl_Coop_Season01_Lv08.png",colour:"ffffff"},{file:"./banners/Npl_Coop_Season01_Lv09.png",colour:"ffffff"},{file:"./banners/Npl_Coop_Season01_Lv10.png",colour:"ffffff"},{file:"./banners/Npl_Lot_Season01_Lv01.png",colour:"4e3000"},{file:"./banners/Npl_Lot_Season02_Lv01.png",colour:"4e3000"},{file:"./banners/Npl_Mng_Lv01.png",colour:"ffffff"},{file:"./banners/Npl_Mng_Lv02.png",colour:"ffffff"},{file:"./banners/Npl_Mng_Lv03.png",colour:"ffffff"},{file:"./banners/Npl_Trg_Season01_Lv01.png",colour:"ffffff"},{file:"./banners/Npl_Trg_Season01_Lv02.png",colour:"ffffff"},{file:"./banners/Npl_Tutorial00.png",colour:"ffffff"}
    ];
    
    const deadlineBanners = [
        {
            file: './deadlinebanners/Bottom_Feeders.png',
            colour: '54e170'
        },
        {
            file: './deadlinebanners/Chirpy_Chips.png',
            colour: '4afed7'
        },
        {
            file: './deadlinebanners/C-Side.png',
            colour: 'ffe421'
        },
        {
            file: './deadlinebanners/Ded-F1sh.png',
            colour: '0cffc3'
        },
        {
            file: './deadlinebanners/Diss-Pair.png',
            colour: 'bdfa57'
        },
        {
            file: './deadlinebanners/Front_Roe.png',
            colour: '37fe49'
        },
        {
            file: './deadlinebanners/High-Tide_Era.png',
            colour: 'ffffff'
        },
        {
            file: './deadlinebanners/Ink_Theory.png',
            colour: 'ffffff'
        },
        {
            file: './deadlinebanners/Omega-3.png',
            colour: 'ffffff'
        },
        {
            file: './deadlinebanners/Wet_Floor.png',
            colour: 'ffffff'
        }
    ]
    
    const badges = ["./badges/Badge_CatalogueLevel_Lv00.png","./badges/Badge_CatalogueLevel_Lv01.png","./badges/Badge_CoopBigRunTrophy_Lv00.png","./badges/Badge_CoopBigRunTrophy_Lv01.png","./badges/Badge_CoopBigRunTrophy_Lv02.png","./badges/Badge_CoopBossKillNum_SakelienGiant_Lv00.png","./badges/Badge_CoopBossKillNum_SakelienGiant_Lv01.png","./badges/Badge_CoopBossKillNum_SakelienGiant_Lv02.png","./badges/Badge_CoopClearDangerRateMax.png","./badges/Badge_CoopGrade_Normal_Shakedent_Lv00.png","./badges/Badge_CoopGrade_Normal_Shakedent_Lv01.png","./badges/Badge_CoopGrade_Normal_Shakedent_Lv02.png","./badges/Badge_CoopGrade_Normal_Shakedent_Lv03.png","./badges/Badge_CoopGrade_Normal_Shakeship_Lv00.png","./badges/Badge_CoopGrade_Normal_Shakeship_Lv01.png","./badges/Badge_CoopGrade_Normal_Shakeship_Lv02.png","./badges/Badge_CoopGrade_Normal_Shakeship_Lv03.png","./badges/Badge_CoopGrade_Normal_Shakespiral_Lv00.png","./badges/Badge_CoopGrade_Normal_Shakespiral_Lv01.png","./badges/Badge_CoopGrade_Normal_Shakespiral_Lv02.png","./badges/Badge_CoopGrade_Normal_Shakespiral_Lv03.png","./badges/Badge_CoopGrade_Normal_Shakeup_Lv00.png","./badges/Badge_CoopGrade_Normal_Shakeup_Lv01.png","./badges/Badge_CoopGrade_Normal_Shakeup_Lv02.png","./badges/Badge_CoopGrade_Normal_Shakeup_Lv03.png","./badges/Badge_CoopRareEnemyKillNum_SakeArtillery_Lv00.png","./badges/Badge_CoopRareEnemyKillNum_SakeArtillery_Lv01.png","./badges/Badge_CoopRareEnemyKillNum_SakeArtillery_Lv02.png","./badges/Badge_CoopRareEnemyKillNum_SakeDolphin_Lv00.png","./badges/Badge_CoopRareEnemyKillNum_SakeDolphin_Lv01.png","./badges/Badge_CoopRareEnemyKillNum_SakeDolphin_Lv02.png","./badges/Badge_CoopRareEnemyKillNum_SakePillar_Lv00.png","./badges/Badge_CoopRareEnemyKillNum_SakePillar_Lv01.png","./badges/Badge_CoopRareEnemyKillNum_SakePillar_Lv02.png","./badges/Badge_CoopRareEnemyKillNum_SakeSaucer_Lv00.png","./badges/Badge_CoopRareEnemyKillNum_SakeSaucer_Lv01.png","./badges/Badge_CoopRareEnemyKillNum_SakeSaucer_Lv02.png","./badges/Badge_CoopRareEnemyKillNum_Sakediver_Lv00.png","./badges/Badge_CoopRareEnemyKillNum_Sakediver_Lv01.png","./badges/Badge_CoopRareEnemyKillNum_Sakediver_Lv02.png","./badges/Badge_CoopRareEnemyKillNum_SakelienBomber_Lv00.png","./badges/Badge_CoopRareEnemyKillNum_SakelienBomber_Lv01.png","./badges/Badge_CoopRareEnemyKillNum_SakelienBomber_Lv02.png","./badges/Badge_CoopRareEnemyKillNum_SakelienCupTwins_Lv00.png","./badges/Badge_CoopRareEnemyKillNum_SakelienCupTwins_Lv01.png","./badges/Badge_CoopRareEnemyKillNum_SakelienCupTwins_Lv02.png","./badges/Badge_CoopRareEnemyKillNum_SakelienShield_Lv00.png","./badges/Badge_CoopRareEnemyKillNum_SakelienShield_Lv01.png","./badges/Badge_CoopRareEnemyKillNum_SakelienShield_Lv02.png","./badges/Badge_CoopRareEnemyKillNum_SakelienSnake_Lv00.png","./badges/Badge_CoopRareEnemyKillNum_SakelienSnake_Lv01.png","./badges/Badge_CoopRareEnemyKillNum_SakelienSnake_Lv02.png","./badges/Badge_CoopRareEnemyKillNum_SakelienTower_Lv00.png","./badges/Badge_CoopRareEnemyKillNum_SakelienTower_Lv01.png","./badges/Badge_CoopRareEnemyKillNum_SakelienTower_Lv02.png","./badges/Badge_CoopRareEnemyKillNum_Sakerocket_Lv00.png","./badges/Badge_CoopRareEnemyKillNum_Sakerocket_Lv01.png","./badges/Badge_CoopRareEnemyKillNum_Sakerocket_Lv02.png","./badges/Badge_FestRankMax.png","./badges/Badge_GearTotalRarity_B00_Lv00.png","./badges/Badge_GearTotalRarity_B00_Lv01.png","./badges/Badge_GearTotalRarity_B01_Lv00.png","./badges/Badge_GearTotalRarity_B01_Lv01.png","./badges/Badge_GearTotalRarity_B02_Lv00.png","./badges/Badge_GearTotalRarity_B02_Lv01.png","./badges/Badge_GearTotalRarity_B03_Lv00.png","./badges/Badge_GearTotalRarity_B03_Lv01.png","./badges/Badge_GearTotalRarity_B04_Lv00.png","./badges/Badge_GearTotalRarity_B04_Lv01.png","./badges/Badge_GearTotalRarity_B05_Lv00.png","./badges/Badge_GearTotalRarity_B05_Lv01.png","./badges/Badge_GearTotalRarity_B06_Lv00.png","./badges/Badge_GearTotalRarity_B06_Lv01.png","./badges/Badge_GearTotalRarity_B07_Lv00.png","./badges/Badge_GearTotalRarity_B07_Lv01.png","./badges/Badge_GearTotalRarity_B08_Lv00.png","./badges/Badge_GearTotalRarity_B08_Lv01.png","./badges/Badge_GearTotalRarity_B09_Lv00.png","./badges/Badge_GearTotalRarity_B09_Lv01.png","./badges/Badge_GearTotalRarity_B10_Lv00.png","./badges/Badge_GearTotalRarity_B10_Lv01.png","./badges/Badge_GearTotalRarity_B11_Lv00.png","./badges/Badge_GearTotalRarity_B11_Lv01.png","./badges/Badge_GearTotalRarity_B15_Lv00.png","./badges/Badge_GearTotalRarity_B15_Lv01.png","./badges/Badge_GearTotalRarity_B16_Lv00.png","./badges/Badge_GearTotalRarity_B16_Lv01.png","./badges/Badge_GearTotalRarity_B17_Lv00.png","./badges/Badge_GearTotalRarity_B17_Lv01.png","./badges/Badge_GearTotalRarity_B19_Lv00.png","./badges/Badge_GearTotalRarity_B19_Lv01.png","./badges/Badge_GearTotalRarity_B20_Lv00.png","./badges/Badge_GearTotalRarity_B20_Lv01.png","./badges/Badge_LimitedRewardLottery_Lv00.png","./badges/Badge_LimitedRewardLottery_Lv01.png","./badges/Badge_LimitedRewardLottery_Lv02.png","./badges/Badge_Mission_Lv00.png","./badges/Badge_Mission_Lv01.png","./badges/Badge_Mission_Lv02.png","./badges/Badge_Mission_Lv03.png","./badges/Badge_Mission_Lv04.png","./badges/Badge_NawaBattlerCardNum_Lv00.png","./badges/Badge_NawaBattlerCardNum_Lv01.png","./badges/Badge_NawaBattlerCardNum_Lv02.png","./badges/Badge_NawaBattlerRank_Lv00.png","./badges/Badge_NawaBattlerRank_Lv01.png","./badges/Badge_NawaBattlerRank_Lv02.png","./badges/Badge_NawaBattlerWinAllNpcLevel3.png","./badges/Badge_OrderFood_Lv00.png","./badges/Badge_OrderFood_Lv01.png","./badges/Badge_OrderFood_Lv02.png","./badges/Badge_OrderVendor_Lv00.png","./badges/Badge_OrderVendor_Lv01.png","./badges/Badge_SpendLottery_Lv00.png","./badges/Badge_SpendLottery_Lv01.png","./badges/Badge_SpendLottery_Lv02.png","./badges/Badge_SpendShop_Clothes_Lv00.png","./badges/Badge_SpendShop_Clothes_Lv01.png","./badges/Badge_SpendShop_Goods_Lv00.png","./badges/Badge_SpendShop_Goods_Lv01.png","./badges/Badge_SpendShop_Head_Lv00.png","./badges/Badge_SpendShop_Head_Lv01.png","./badges/Badge_SpendShop_Shoes_Lv00.png","./badges/Badge_SpendShop_Shoes_Lv01.png","./badges/Badge_TotalKumaPoint_Lv00.png","./badges/Badge_TotalKumaPoint_Lv01.png","./badges/Badge_TotalKumaPoint_Lv02.png","./badges/Badge_Udemae_Lv00.png","./badges/Badge_Udemae_Lv01.png","./badges/Badge_Udemae_Lv02.png","./badges/Badge_WeaponLevel_Blaster_LightLong_00_Lv00.png","./badges/Badge_WeaponLevel_Blaster_LightLong_00_Lv01.png","./badges/Badge_WeaponLevel_Blaster_LightShort_00_Lv00.png","./badges/Badge_WinCount_Pnt_Lv00.png","./badges/Badge_WinCount_Pnt_Lv01.png","./badges/Badge_WinCount_Pnt_Lv02.png","./badges/Badge_WinCount_Tcl_Atk_Lv00.png","./badges/Badge_WinCount_Tcl_Atk_Lv01.png","./badges/Badge_WinCount_Tcl_Def_Lv00.png","./badges/Badge_WinCount_Tcl_Def_Lv01.png","./badges/Badge_WinCount_Var_Lv00.png","./badges/Badge_WinCount_Var_Lv01.png","./badges/Badge_WinCount_Vcl_Lv00.png","./badges/Badge_WinCount_Vcl_Lv01.png","./badges/Badge_WinCount_Vgl_Lv00.png","./badges/Badge_WinCount_Vgl_Lv01.png","./badges/Badge_WinCount_Vlf_Lv00.png","./badges/Badge_WinCount_Vlf_Lv01.png","./badges/Badge_WinCount_WeaponSp_SpBlower_Lv00.png","./badges/Badge_WinCount_WeaponSp_SpBlower_Lv01.png","./badges/Badge_WinCount_WeaponSp_SpBlower_Lv02.png","./badges/Badge_WinCount_WeaponSp_SpChariot_Lv00.png","./badges/Badge_WinCount_WeaponSp_SpChariot_Lv01.png","./badges/Badge_WinCount_WeaponSp_SpChariot_Lv02.png","./badges/Badge_WinCount_WeaponSp_SpEnergyStand_Lv00.png","./badges/Badge_WinCount_WeaponSp_SpEnergyStand_Lv01.png","./badges/Badge_WinCount_WeaponSp_SpEnergyStand_Lv02.png","./badges/Badge_WinCount_WeaponSp_SpGreatBarrier_Lv00.png","./badges/Badge_WinCount_WeaponSp_SpGreatBarrier_Lv01.png","./badges/Badge_WinCount_WeaponSp_SpGreatBarrier_Lv02.png","./badges/Badge_WinCount_WeaponSp_SpInkStorm_Lv00.png","./badges/Badge_WinCount_WeaponSp_SpInkStorm_Lv01.png","./badges/Badge_WinCount_WeaponSp_SpInkStorm_Lv02.png","./badges/Badge_WinCount_WeaponSp_SpJetpack_Lv00.png","./badges/Badge_WinCount_WeaponSp_SpJetpack_Lv01.png","./badges/Badge_WinCount_WeaponSp_SpJetpack_Lv02.png","./badges/Badge_WinCount_WeaponSp_SpMicroLaser_Lv00.png","./badges/Badge_WinCount_WeaponSp_SpMicroLaser_Lv01.png","./badges/Badge_WinCount_WeaponSp_SpMicroLaser_Lv02.png","./badges/Badge_WinCount_WeaponSp_SpMultiMissile_Lv00.png","./badges/Badge_WinCount_WeaponSp_SpMultiMissile_Lv01.png","./badges/Badge_WinCount_WeaponSp_SpMultiMissile_Lv02.png","./badges/Badge_WinCount_WeaponSp_SpNiceBall_Lv00.png","./badges/Badge_WinCount_WeaponSp_SpNiceBall_Lv01.png","./badges/Badge_WinCount_WeaponSp_SpNiceBall_Lv02.png","./badges/Badge_WinCount_WeaponSp_SpShockSonar_Lv00.png","./badges/Badge_WinCount_WeaponSp_SpShockSonar_Lv01.png","./badges/Badge_WinCount_WeaponSp_SpShockSonar_Lv02.png","./badges/Badge_WinCount_WeaponSp_SpSkewer_Lv00.png","./badges/Badge_WinCount_WeaponSp_SpSkewer_Lv01.png","./badges/Badge_WinCount_WeaponSp_SpSkewer_Lv02.png","./badges/Badge_WinCount_WeaponSp_SpSuperHook_Lv00.png","./badges/Badge_WinCount_WeaponSp_SpSuperHook_Lv01.png","./badges/Badge_WinCount_WeaponSp_SpSuperHook_Lv02.png","./badges/Badge_WinCount_WeaponSp_SpTripleTornado_Lv00.png","./badges/Badge_WinCount_WeaponSp_SpTripleTornado_Lv01.png","./badges/Badge_WinCount_WeaponSp_SpTripleTornado_Lv02.png","./badges/Badge_WinCount_WeaponSp_SpUltraShot_Lv00.png","./badges/Badge_WinCount_WeaponSp_SpUltraShot_Lv01.png","./badges/Badge_WinCount_WeaponSp_SpUltraShot_Lv02.png","./badges/Badge_WinCount_WeaponSp_SpUltraStamp_Lv00.png","./badges/Badge_WinCount_WeaponSp_SpUltraStamp_Lv01.png","./badges/Badge_WinCount_WeaponSp_SpUltraStamp_Lv02.png","./badges/Badge_WeaponLevel_Blaster_LightShort_00_Lv01.png","./badges/Badge_WeaponLevel_Blaster_Light_00_Lv00.png","./badges/Badge_WeaponLevel_Blaster_Light_00_Lv01.png","./badges/Badge_WeaponLevel_Blaster_Long_00_Lv00.png","./badges/Badge_WeaponLevel_Blaster_Long_00_Lv01.png","./badges/Badge_WeaponLevel_Blaster_Middle_00_Lv00.png","./badges/Badge_WeaponLevel_Blaster_Middle_00_Lv01.png","./badges/Badge_WeaponLevel_Blaster_Short_00_Lv00.png","./badges/Badge_WeaponLevel_Blaster_Short_00_Lv01.png","./badges/Badge_WeaponLevel_Blaster_Short_01_Lv00.png","./badges/Badge_WeaponLevel_Blaster_Short_01_Lv01.png","./badges/Badge_WeaponLevel_Brush_Mini_00_Lv00.png","./badges/Badge_WeaponLevel_Brush_Mini_00_Lv01.png","./badges/Badge_WeaponLevel_Brush_Mini_01_Lv00.png","./badges/Badge_WeaponLevel_Brush_Mini_01_Lv01.png","./badges/Badge_WeaponLevel_Brush_Normal_00_Lv00.png","./badges/Badge_WeaponLevel_Brush_Normal_00_Lv01.png","./badges/Badge_WeaponLevel_Charger_Keeper_00_Lv00.png","./badges/Badge_WeaponLevel_Charger_Keeper_00_Lv01.png","./badges/Badge_WeaponLevel_Charger_Light_00_Lv00.png","./badges/Badge_WeaponLevel_Charger_Light_00_Lv01.png","./badges/Badge_WeaponLevel_Charger_LongScope_00_Lv00.png","./badges/Badge_WeaponLevel_Charger_LongScope_00_Lv01.png","./badges/Badge_WeaponLevel_Charger_Long_00_Lv00.png","./badges/Badge_WeaponLevel_Charger_Long_00_Lv01.png","./badges/Badge_WeaponLevel_Charger_NormalScope_00_Lv00.png","./badges/Badge_WeaponLevel_Charger_NormalScope_00_Lv01.png","./badges/Badge_WeaponLevel_Charger_Normal_00_Lv00.png","./badges/Badge_WeaponLevel_Charger_Normal_00_Lv01.png","./badges/Badge_WeaponLevel_Charger_Pencil_00_Lv00.png","./badges/Badge_WeaponLevel_Charger_Pencil_00_Lv01.png","./badges/Badge_WeaponLevel_Charger_Quick_00_Lv00.png","./badges/Badge_WeaponLevel_Charger_Quick_00_Lv01.png","./badges/Badge_WeaponLevel_Maneuver_Dual_00_Lv00.png","./badges/Badge_WeaponLevel_Maneuver_Dual_00_Lv01.png","./badges/Badge_WeaponLevel_Maneuver_Gallon_00_Lv00.png","./badges/Badge_WeaponLevel_Maneuver_Gallon_00_Lv01.png","./badges/Badge_WeaponLevel_Maneuver_Normal_00_Lv00.png","./badges/Badge_WeaponLevel_Maneuver_Normal_00_Lv01.png","./badges/Badge_WeaponLevel_Maneuver_Short_00_Lv00.png","./badges/Badge_WeaponLevel_Maneuver_Short_00_Lv01.png","./badges/Badge_WeaponLevel_Maneuver_Short_01_Lv00.png","./badges/Badge_WeaponLevel_Maneuver_Short_01_Lv01.png","./badges/Badge_WeaponLevel_Maneuver_Stepper_00_Lv00.png","./badges/Badge_WeaponLevel_Maneuver_Stepper_00_Lv01.png","./badges/Badge_WeaponLevel_Roller_Compact_00_Lv00.png","./badges/Badge_WeaponLevel_Roller_Compact_00_Lv01.png","./badges/Badge_WeaponLevel_Roller_Compact_01_Lv00.png","./badges/Badge_WeaponLevel_Roller_Compact_01_Lv01.png","./badges/Badge_WeaponLevel_Roller_Heavy_00_Lv00.png","./badges/Badge_WeaponLevel_Roller_Heavy_00_Lv01.png","./badges/Badge_WeaponLevel_Roller_Hunter_00_Lv00.png","./badges/Badge_WeaponLevel_Roller_Hunter_00_Lv01.png","./badges/Badge_WeaponLevel_Roller_Normal_00_Lv00.png","./badges/Badge_WeaponLevel_Roller_Normal_00_Lv01.png","./badges/Badge_WeaponLevel_Roller_Wide_00_Lv00.png","./badges/Badge_WeaponLevel_Roller_Wide_00_Lv01.png","./badges/Badge_WeaponLevel_Saber_Lite_00_Lv00.png","./badges/Badge_WeaponLevel_Saber_Lite_00_Lv01.png","./badges/Badge_WeaponLevel_Saber_Normal_00_Lv00.png","./badges/Badge_WeaponLevel_Saber_Normal_00_Lv01.png","./badges/Badge_WeaponLevel_Shelter_Compact_00_Lv00.png","./badges/Badge_WeaponLevel_Shelter_Compact_00_Lv01.png","./badges/Badge_WeaponLevel_Shelter_Normal_00_Lv00.png","./badges/Badge_WeaponLevel_Shelter_Normal_00_Lv01.png","./badges/Badge_WeaponLevel_Shelter_Wide_00_Lv00.png","./badges/Badge_WeaponLevel_Shelter_Wide_00_Lv01.png","./badges/Badge_WeaponLevel_Shooter_Blaze_00_Lv00.png","./badges/Badge_WeaponLevel_Shooter_Blaze_00_Lv01.png","./badges/Badge_WeaponLevel_Shooter_Blaze_01_Lv00.png","./badges/Badge_WeaponLevel_Shooter_Blaze_01_Lv01.png","./badges/Badge_WeaponLevel_Shooter_Expert_00_Lv00.png","./badges/Badge_WeaponLevel_Shooter_Expert_00_Lv01.png","./badges/Badge_WeaponLevel_Shooter_Expert_01_Lv00.png","./badges/Badge_WeaponLevel_Shooter_Expert_01_Lv01.png","./badges/Badge_WeaponLevel_Shooter_First_00_Lv00.png","./badges/Badge_WeaponLevel_Shooter_First_00_Lv01.png","./badges/Badge_WeaponLevel_Shooter_First_01_Lv00.png","./badges/Badge_WeaponLevel_Shooter_First_01_Lv01.png","./badges/Badge_WeaponLevel_Shooter_Flash_00_Lv00.png","./badges/Badge_WeaponLevel_Shooter_Flash_00_Lv01.png","./badges/Badge_WeaponLevel_Shooter_Gravity_00_Lv00.png","./badges/Badge_WeaponLevel_Shooter_Gravity_00_Lv01.png","./badges/Badge_WeaponLevel_Shooter_Heavy_00_Lv00.png","./badges/Badge_WeaponLevel_Shooter_Heavy_00_Lv01.png","./badges/Badge_WeaponLevel_Shooter_Long_00_Lv00.png","./badges/Badge_WeaponLevel_Shooter_Long_00_Lv01.png","./badges/Badge_WeaponLevel_Shooter_Normal_00_Lv00.png","./badges/Badge_WeaponLevel_Shooter_Normal_00_Lv01.png","./badges/Badge_WeaponLevel_Shooter_Normal_01_Lv00.png","./badges/Badge_WeaponLevel_Shooter_Normal_01_Lv01.png","./badges/Badge_WeaponLevel_Shooter_Normal_H_Lv00.png","./badges/Badge_WeaponLevel_Shooter_Normal_H_Lv01.png","./badges/Badge_WeaponLevel_Shooter_Precision_00_Lv00.png","./badges/Badge_WeaponLevel_Shooter_Precision_00_Lv01.png","./badges/Badge_WeaponLevel_Shooter_QuickLong_00_Lv00.png","./badges/Badge_WeaponLevel_Shooter_QuickLong_00_Lv01.png","./badges/Badge_WeaponLevel_Shooter_QuickMiddle_00_Lv00.png","./badges/Badge_WeaponLevel_Shooter_QuickMiddle_00_Lv01.png","./badges/Badge_WeaponLevel_Shooter_Short_00_Lv00.png","./badges/Badge_WeaponLevel_Shooter_Short_00_Lv01.png","./badges/Badge_WeaponLevel_Shooter_TripleMiddle_00_Lv00.png","./badges/Badge_WeaponLevel_Shooter_TripleMiddle_00_Lv01.png","./badges/Badge_WeaponLevel_Shooter_TripleQuick_00_Lv00.png","./badges/Badge_WeaponLevel_Shooter_TripleQuick_00_Lv01.png","./badges/Badge_WeaponLevel_Slosher_Bathtub_00_Lv00.png","./badges/Badge_WeaponLevel_Slosher_Bathtub_00_Lv01.png","./badges/Badge_WeaponLevel_Slosher_Diffusion_00_Lv00.png","./badges/Badge_WeaponLevel_Slosher_Diffusion_00_Lv01.png","./badges/Badge_WeaponLevel_Slosher_Launcher_00_Lv00.png","./badges/Badge_WeaponLevel_Slosher_Launcher_00_Lv01.png","./badges/Badge_WeaponLevel_Slosher_Strong_00_Lv00.png","./badges/Badge_WeaponLevel_Slosher_Strong_00_Lv01.png","./badges/Badge_WeaponLevel_Slosher_Strong_01_Lv00.png","./badges/Badge_WeaponLevel_Slosher_Strong_01_Lv01.png","./badges/Badge_WeaponLevel_Slosher_Washtub_00_Lv00.png","./badges/Badge_WeaponLevel_Slosher_Washtub_00_Lv01.png","./badges/Badge_WeaponLevel_Spinner_Downpour_00_Lv00.png","./badges/Badge_WeaponLevel_Spinner_Downpour_00_Lv01.png","./badges/Badge_WeaponLevel_Spinner_Hyper_00_Lv00.png","./badges/Badge_WeaponLevel_Spinner_Hyper_00_Lv01.png","./badges/Badge_WeaponLevel_Spinner_Quick_00_Lv00.png","./badges/Badge_WeaponLevel_Spinner_Quick_00_Lv01.png","./badges/Badge_WeaponLevel_Spinner_Quick_01_Lv00.png","./badges/Badge_WeaponLevel_Spinner_Quick_01_Lv01.png","./badges/Badge_WeaponLevel_Spinner_Serein_00_Lv00.png","./badges/Badge_WeaponLevel_Spinner_Serein_00_Lv01.png","./badges/Badge_WeaponLevel_Spinner_Standard_00_Lv00.png","./badges/Badge_WeaponLevel_Spinner_Standard_00_Lv01.png","./badges/Badge_WeaponLevel_Stringer_Normal_00_Lv00.png","./badges/Badge_WeaponLevel_Stringer_Normal_00_Lv01.png","./badges/Badge_WeaponLevel_Stringer_Short_00_Lv00.png","./badges/Badge_WeaponLevel_Stringer_Short_00_Lv01.png"];
    
    // Will add an actual UI for it soon, but not until we have the proper font for the Japanese characters
    // Hopefully should make it real easy to add other languages!
    // https://seymourschlong.github.io/splashtags/?lang=en   <--- change that to desired language (defaults to english if invalid)

    const lang = {
        // English
        en: {
            titles: {
                first: ["No Title", "10-Tentacled","100%","24-Hour","5-Year-Planning","8-Tentacled","A Complex","A Real","A Simple","AKA","Absentminded","Actual","Aged","Alabaster","All-Natural","All-New","All-Purpose","Aloof","Alternan","Amateur","Ambidextrous","Ambiguous","Ammo Knights","Amped-Up","Anachronistic","Anarchy Battle","Ancient","Antarctic Ocean","Apprentice","Aquarium-Bound","Arcade-Hopping","Arctic Ocean","Artsy","Assertive","At-Work","Athletic","Attacking","Attention-Seeking","Auspicious","Avant-Garde","Avaricious","Awe-Inspiring","Awesome","Badlands","Barbed","Bargain-Binned","Basic","Beachy","Bearded","Beefy","Beloved","Better-Than-You","Big","Big Honkin'","Big-Money","Big-Sky","Big-Time","Birthday-Celebratin'","Blissed-Out","Bohemian","Bomb-tastic","Booming","Brand-New","Breakin'","Bright-Blue","Brinewater Springs","Brute","Buoyant","Bursting","Calamari","Camera-Facing","Captivating","Careless","Carnivorous","Cash-Stacking","Casual","Catch-of-the-Day","Celestial","Central","Champion","Chaotic","Chatty","Cheerful","Childish","Chilled-Out","Clever","Climactic","Clocked-Out","Clockwork","Cohock-Chargin'","Comfy-Cozy","Comic-Lovin'","Commanding","Competitive","Confident","Cool","Cooperative","Cosmic","Country-Born","Crab-N-Go","Crimson","Crush Station","Crusty","Cutting-Edge","DJ","Dandy","Dangerous","Dapper","Daring","Dark","Dawning","Day-Seizing","Daydreamin'","Daylit","Daytime","Dazzling","Dead-Tired","Deadeye","Decade-Experienced","Deep-Red","Deep-Sea","Defensive","Designer-Label","Destined","Die-Hard","Diving","Dodge-Rolling","Downtown","Drained","Drenched","Dry","Dynamite","Early-Bird","Early-Morning","Early-Summer","Easy-Peasy","Easygoing","Economical","Eeltail Alley","Elegant","Endangered","Enigmatic","Enlightened","Esoteric","Essential","Eternity's","Ever-Present","Everyday","Evil","Exhausted","Explosive","Faithful","Fall-Lovin'","Fall-Themed","Fame-Seeking","Fan-Favorite","Faraway","Fashionable","Fated","Fearful","Feral","Fierce","Fiery","Fightin'","First-Wave","Fish-Lovin'","Fishy","Flashy","Fleeing","Floaty","Flounder Heights","Fluffy","Fluid","Fluttering","Flying","Foggy","Forgetful","Fortunate","Fragrant","Freewheelin'","Fresh","Fresh-Catch","Front-Line","Frosty","Fruit-Lovin'","Full-Throttle","Fully","Fully Automatic","Fun","Fuzzy","Gaming","Gentle","Gigantified","Glam","Gleaming","Glimmering","Glistening","Go-Gettin'","Gone Fission Hydroplant","Gone-Fishin'","Goth","Gothic","Graceful","Greedy","Groundbreaking","Growing","Grown-Up","Grunge","Gullible","Hagglefish Market","Half","Half-Hearted","Hammerhead Bridge","Hard-Workin'","Headstrong","Heartfelt","Hearty","Hidden","High-End","High-Performing","High-Rolling","High-Tide","Hiking","Hip","Hip-Hop","Homebound","Homecoming","Honorary","Hotlantis","Howling","Hungry","Hungry, Hungry","Iced","Impish","Important","Incandescent","Incredible","Indian Ocean","Indoor","Infinite","Ink-Covered","Ink-Dripping","Ink-Sloshing","Inkblot Art Academy","Inkless","Inkopolis Square's","Inkopolis's Own","Inkopolitan","Inkslinging","Innocent","Instant","Instantaneous","Intuitive","Jet-Black","Job-Lovin'","Jumbo","Junior-Grade","Just Another","Last Year's","Late-Night","Late-Summer","Law-Breaking","Leaping","Legendary","Legit","Lethal","Lifelong","Light","Lightly Snacking","Lightning-Fast","Limited-Edition","Little","Lively","Livestreaming","Lobby-Bound","Local","Logical","Lonely","Long-Sleeved","Lost","Lost-and-Found","Lovable","Lovely","Low-Key","Low-Rolling","Low-Tide","Lucky","Made-to-Order","Mahi-Mahi Resort","MakoMart","Man-o'-Wardrobe","Marooner's Bay","Massive","Meaty","Meditative","Merciless","Microscopic","Mid-Rush","Midday","Midnight","Midsummer","Midwinter","Mild-Mannered","Mincemeat Metalworks","Mind-Blowing","Miraculous","Mischievous","Mod","Modern","Monochrome","Mostly","Mountain-Dwelling","Movie-Lovin'","Muddy","Multiplying","Museum d'Alfonsino","Mysterious","Nameless","National","Naut Couture","Neighborly","Next Year's","Next-Generation","Nice","Normcore","North Atlantic","North Pacific","Nostalgic","Nosy","Not-So-Fresh","Not-Streaming","Notable","Novice","Numb","Occasional","Oceanic","Official-Grizzco","Old-Fashioned","Optimistic","Orderly","Organized","Otherworldly","Out-of-Options","Outdoorsy","Overachieving","Overall","Overflowing","Overheated","Overpowering","Painted","Part-Time","Partying","Peppy","Perfect","Persistent","Phantasmagoric","Picture-Taking","Pitch-Black","Pointy","Pool-Ready","Poser","Praiseworthy","Precocious","Pretty Good","Private Battle","Pro","Processed","Procrastinating","Profreshional","Promising","Protective","Puffed-Up","Punk","Pure","Raw","Ready-to-Go","Realistic","Reckless","Regular Battle","Reincarnated","Reliable","Research-Conducting","Retro","Right-Handed","Rise-and-Shine","Rising","Roaming","Rockabilly","Rockin'","Royal","Running","SUPERFRESH","Sacred","Saddle-Straddlin'","Salmon Run","Salty","Sandy","Sappy","Savvy","Scientific","Scorch Gorge","Scorching","Seafaring","Seasick","Seaside","Seasoned","Second-Generation","Secret","Self-Identified","Self-Proclaimed","Self-Taught","Selfie-Snapping","Sensational","Sentimental","Serious","Shadowy","Sharp-Edged","Sharp-Eyed","Shining","Shortcut-Taking","Shy","Silent","Sizzlin'","Sketching","Slapdash","Sleepy","Slim","Slippery","Smooth","Sneaky","Snowy","So-Called","Sockeye Station","Soft","Soft-and-Fluffy","Solid","South Atlantic","South Pacific","Southpaw","Sparkling","Spawning Grounds","Spicy","Spineless","Splatlandian","Splatoon","Splatsville's","Splendid","Sporty","Spring-Fresh","Spring-Lovin'","Stale","Stand-Up","Stark-White","Steady","Stealthy","Steampunky","Stormy","Story Mode","Strict","Studious","Sturgeon Shipyard","Stylin'","Suave","Submersible","Subterranean","Summer-Breaking","Summer-Fun","Summer-Lovin'","Sun-Dried","Super-Duper Lucky","Super-Rare","Super-Scary","Superhuman","Supersonic","Swanky","Sweet","Sweet-Toothed","Swole","Swoon-Worthy","Tableturf Battling","Tagalong","Tasteless","Tear-Stained","Tech-Minded","Tenacious","Terrestrial","The","The Best","The City's Own","The Crater's","The Eternal","The Final","The First","The GOAT","The Great","The Lone","The One and Only","The Original","The Real Ultimate","The Shoal's Own","The Strongest","The True Ultimate","The Usual","The Very First","Third-Eye-Opened","Third-Gen","This Century's Best","This Year's","Thunderous","Tidy","Time-Traveling","Today's","Toon-Lovin'","Top-Ranked","Traditional","Traveling","Trending","Trendsetting","Trendy","Tricolor Battle","Turbo","Turn-of-the-Century","Twilight","Ultra","Unarmed","Unblemished","Underground","Undertow Spillway","Unflappable","Unnoticed","Unperceived","Unprecedented","Unrivaled","Unstoppable","Unyielding","Up-and-at-'Em","Vacationing","Veggie-Lovin'","Vindictive","Vintage","Virtual","Vulnerable","Wahoo World","Wandering","Wannabe","Warm-and-Cozy","Watchful","Water-Breathing","Watery","Wave-Riding","Whimsical","Wibbly-Wobbly","Wicked-Fresh","Wild","Windy","Winter-Breaking","Winter-Lovin'","Winter-Ready","Wiped-Out","Wizened","Won't-Lose","Woodsy","World's Best","X Battle","Yesterday's","Young","Zipped-Lips","amiibo-Collecting"],
                last: ["No Title", ".52 Gal User",".96 Gal User","AI","Actor","Adventurer","Adviser","Aerospray User","Afro","Agent","Agent 1","Agent 2","Agent 3","Agent 4","Agent 8","All-Arounder","Ammo Knights Regular","Android","Angel","Angle Shooter User","Angler","Annaki Model","Apprentice","Archdemon","Artisan","Artist","Assistant","Assistant Manager","Astronaut","Athlete","Atlantean","Aunt","Author","Autobomb User","Avocado Roll","B-Boy","B-Girl","Ballpoint Splatling User","Bamboozler 14 User","Barazushi Model","Barber","Bass Dropper","Bear","Beautician","Beginner","Berserker","Bifocal Wearer","Big Boss","Big Brother","Big Bubbler User","Big Curls","Big Deal","Big Man Fan","Big Mouth","Big Sister","Big Swig Roller User","Bird","Bivalve","Blade of Grass","Blaster User","Bloblobber User","Board Gamer","Board Member","Bodyguard","Bookworm","Boot Model","Booyah","Booyah Bomb User","Boss","Bottom Feeders Fan","Bowl Cut","Boy","Braid Bearer","Brainiac","Brand Loyalist","Bride","Bro","Brother","Bug","Burst Bomb User","Butler","Butterfingers","Buzz-Cut","C-Side Superfan","CEO","Cabinet Member","Caller","Callie Fan","Camper","Carbon Roller User","Card Collector","Card Gamer","Carpaccio","Cat","Catfish","Caveman","Celeb","Celebrity","Cephalopod","Challenger","Champ","Chef","Chirpy Chips Fan","Chow Hound","City Boy","City Girl","Clam Blitz Enthusiast","Clam Blitz Legend","Clash Blaster User","Classic","Clerk","Clock Puncher","Clubgoer","Coach","Cold Chill","Comedian","Comic Artist","Comic Relief","Comrade","Contender","Content Creator","Coordinator","Cornrows","Crab","Crab Tank User","Creator","Crush Station Regular","Cub","Cupid","Curling Bomb User","Curly Hair","Cuttlegear Model","Cyclist","DJ","Dad","Damp Socks Fan","Dance Master","Dancer","Dapple Dualies User","Daughter","Dedf1sh Fan","Deep Cut Fan","Deity of Destruction","Demon","Designer","Detective","Dinosaur","Director","Diss-Pair Fan","Dodge Roller","Dog","Dolphin","Double-Bun","Dragon","Dried Fish","Driver","Drummer","Dualie Squelchers User","Duchess","Duke","Dynamo","Dynamo Roller User","E-liter 4K Scope User","E-liter 4K User","Eel Tamer","Egg","Elegance","Emberz Model","Employee","Enperry Model","Entertainer","Enthusiast","Entity","Equation","Executive","Expert","Explosher User","Extrovert","Eye of the Storm","Fade","Fam","Fashionista","Father","Festivalgoer","Fighter","Fillet","Firecracker","Firefin Model","Fish","Fish Ball","Fish Finder","Fish Print","Fisherfolk","Fist","Fit","Fizzy Bomb User","Fledgling","Flingza Roller User","Flotsam","Flower","Follower","Forehead","Foreman","Forge Model","Form","Free Spirit","Freebie","Freelancer","Freshman","Freshwater Fish","Fried Chicken","Friend","Front Roe Fan","Frye Fan","Fuzzball","Gamer","Geek","Gelatin","Ghost","Giant","Girl","Glasses Model","Glooga Dualies User","Gofer","Goo Tuber User","Grand Master","Grandchild","Grandma","Grandpa","Grease","Greaser","Groom","Groove","Group Member","Guardian","Guitarist","H-3 Nozzlenose User","Hat Model","Head","Head Honcho","Headbanger","Headliner","Heat Hater","Heavy Splatling User","Heel","Hero","Higher-Up","Hightide Era Fan","Hippie","Hipster","Hot-Spring Enjoyer","Hothead","Hotlantis Regular","Human","Humanity","Hunter","Hydra Splatling User","Iconoclast","Illusion","Imp","Influencer","Ink","Ink Mine User","Ink Storm User","Ink Theory Fan","Ink Vac User","Inkantation","Inkbrush User","Inkjet User","Inkline Model","Inkling","Introvert","Island Dweller","Item Collector","Jacket Model","Jellyfish","Jet Squelcher User","Jokester","Jumper","Kid","Killer Wail 5.1 User","King","Kingpin","Knight","Knit Model","Krak-On Model","L-3 Nozzlenose User","Layabout","Lead","Leader","Legend","Legendary Warrior","Life","Life Itself","Life of the Party","Lifestyle","Little Brother","Little Sister","Locker Rock Star","Lone Wolf","Lucky Duck","Luna Blaster User","Maestro","Magician","Mammal","Man-o'-Wardrobe Regular","Manager","Maniac","Manta Ray","Marie Fan","Marina Fan","Marinade","Mask","Material","Member","Memory","Mentor","Mermaid","Merperson","Middle Manager","Mincemeat","Mini Splatling User","Mirage","Mirror","Model","Mom","Monarch","Mood","Moon","Moray Eel","Mother","Mountaineer","Mountaintop Guru","Muscle","Mystery","N-ZAP User","Naut Couture Regular","Nautilus User","Ninja","Novice","Object of Affection","Octarian","Octo Life","Octobrush User","Octoling","Octoling Soldier","Octopus","Octopus Ink","Oden Bowl","Off the Hook Fan","Office Drone","Ordinary Person","Otaku","Outfit","Outlaw","Pack Leader","Painter","Palette","Paradigm","Part-Timer","Party Animal","Party Lover","Pauper","Pearl Fan","Penny-Pincher","Pet","Photographer","Pigtail Pro","Pilot","Plankton","Planner","Plumber","Point Sensor User","Polyglot","Ponytail","Pop Star","Power Egg","Predator","President","Prime Cut","Prince","Princess","Pro","Prodigy","Producer","Professor","Programmer","Protected Species","Punk","Queen","REEF-LUX 450 User","Raider","Rainmaker Enthusiast","Rainmaker Legend","Range Blaster User","Rapid Blaster Pro User","Rapid Blaster User","Rapper","Rebel","Recollection","Reefslider User","Remote Worker","Representative","Researcher","Rice Bowl","Ringleader","Risk-Taker","Robot","Rockenberg Model","Ronin","Rookie","Rookie of the Year","Ruffian","Salmon","Salmon Life","Salmon Run Legend","Salmon Runner","Saltwater Fish","Samurai","SashiMori Fan","Sashimi","Scientist","Sea Creature","Seafood","Secretary","Security Guard","Senior","Sensei","Shark","Shark Tamer","Sharp Dresser","Shield","Shirt Model","Shiver Fan","Sidekick","Sidestepper","Sightseer","Singer","Sis","Sister","Skalop Model","Skater","Slosher User","Sloshing Machine User","Slow Starter","Snacks","Sneaker Model","Snipewriter 5H User","Snowperson","Snowstorm","Son","Spiked Hair","Splash Mob Model","Splash Wall User","Splash-o-matic User","Splat Bomb User","Splat Bomber","Splat Brella User","Splat Charger User","Splat Dualies User","Splat Roller User","Splat Zones Enthusiast","Splat Zones Legend","Splatana Stamper User","Splatana Wiper User","Splatterscope User","Splattershot Jr. User","Splattershot Nova User","Splattershot Pro User","Splattershot User","Sploosh-o-matic User","Sprinkler User","Spy","Squeezer User","Squid","Squid Beakon User","Squid Ink","Squid Jerky","Squid Life","Squid Ring","Squid Roller","Squid Sisters Fan","Squid Squad Fan","Squid Surger","Squid, Inc.","SquidForce Model","Squiffer User","Stan","Stand-Up Comic","Stir-Fry","Story Mode Hero","Story Mode Legend","Streamer","Striker","Student","Style","Style Icon","Stylist","Subordinate","Such and Such","Suction Bomb User","Sun","Superhero","Superstar","Supervisor","Supporter","Surfer","Survivalist","Sushi","Swimmer","Switch-Hitter","Synth Player","System","Tabletop Gamer","Tableturf Battler","Tacticooler User","Takoroka Model","Target","Taste Tester","Teacher","Teardrop","Tee Model","Tenta Brella User","Tenta Missiles User","Tentatek Model","Tetra Dualies User","Therapist","Title Holder","Tofu","Toni Kensa Model","Topknot Knight","Tornado","Torpedo User","Tournament Competitor","Tower Control Enthusiast","Tower Control Legend","Toxic Mist User","Trainee","Trainer","Traveler","Trendsetter","Tri-Slosher User","Tri-Stringer User","Triple Inkstrike User","Trizooka User","Truth Teller","Tuna Tataki","Turf War Legend","Turf Warrior","Turquoise October Fan","Turtle","Ultimate Weapon","Ultra Stamp User","Umibozu","Uncle","Undercover Brella User","Underling","VP","Vice President","Viewer","Viking","Village Leader","Villain","Vitamin","Vocalist","Wall","Wallflower","Wanderer","Warrior","Wave Breaker User","Wave Rider","Weapon","Wet Floor Fan","Wet Hair","Worker","Workhorse","World Champ","Writer","Youngster","Youth","Zekko Model","Zink Model","Zipcaster User","ω-3 Fan"]
            },
            ui: {
                tabText: "Text",
                tabBanners: "Banners",
                tabBadges: "Badges",
                textName: "Name",
                textTitles: "Titles",
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
                buttonDownload: "Download!"
            },
            default: ["Splatlandian", "Youth"]
        },
        // 日本語
        jp: {
            titles: {
                first: ["空の", "１００％","１０年前は","１０本足の","３％","５０％","５年後には","８本足の","amiiboの","B系","DJ","I LOVE ","IT界の","VR","Xマッチの","愛にあふれた","あいまいな","アウトドアな","アガる","秋色の","秋の","アゲアゲの","朝型の","明日が楽しみな","明日から本気出す","味のある","アタマ屋の","アツアツの","アッサリ系の","あったか～い","圧倒的","あっぱれ","アニメ好きの","アバンギャルド","アブラの乗った","あふれ出る","甘い","アマチュア","甘党の","海女美術大学の","アメカジ","新手の","荒波の","アラマキ砦の","ありふれた","アルティメット","アングラの","いい波乗ってる","イカした","イカす","イカッチャの","イキのいい","石の上にも","異世界の","いちおう","一日","いちにんまえの","いつだって","一本釣りの","いつもの","いなかの","井の中の","今を生きる","今を楽しむ","いわゆる","インク切れの","インクしたたる","インクまみれの","インスタント","インドアな","インド洋の","ヴィジュアル系","ウキワの","宇宙の","うっかりものの","生まれながらの","海の","海辺の","裏通りの","ウルトラ","売れ残った","運まかせの","運命の","えいえんの","映画好きの","笑顔がまぶしい","エスニック系","エターナル","エッジの効いた","エラ呼吸の","エレガントな","エンジョイ","おいしい","老いた","お絵描きする","大きな","大食いの","大空の","オーダーメイドの","おカネが全ての","お魚好きの","おしゃべりな","おしゃれな","推せる","おちゃのこさいさい","お茶の間の","おつかれの","お肉好きの","鬼のような","おませな","オルタナの","音速の","海鮮","海パン","買い物好きの","帰ってきた","かがやく","隠れ上手の","隠れた","かぐわしい","かけだしの","影の","加工された","過去から来た","風の","かたい","ガチ","カチカチの","カバー好きな","神がかった","雷の","カメラ目線の","辛党の","カリスマ","感情的な","完全燃焼した","干潮の","がんばる","カンペキな","記憶のない","キケンな","北大西洋の","北太平洋の","昨日は","気まぐれな","気持ちのこもった","究極の","休日の","強運の","今日が誕生日の","今日だけ特別","今日は","協力好きな","巨大化した","去年の","キラキラな","ギラギラな","霧の中の","きれいめの","金欠の","キンメダイ美術館の","空前絶後の","クールな","くさっても","クサヤ温泉の","グッド","クツ屋の","クマサン商会の","グランジ","グルメな","クレーターの","グレート","紅の","芸術的な","ゲーセンの","ゲーミング","激レアの","けなげな","ケバい","ケバ立つ","限界を超えた","健康的な","研修中の","恋する","好奇心旺盛な","高性能の","硬派な","荒野の","護衛好きな","ゴキゲンな","国民的","孤高の","ゴシック","ゴス","コスパのいい","こってり系の","こどくな","今年の","子どもっぽい","ゴリ押しの","ゴワゴワの","ゴンズイ地区の","混沌の","ザ・","サーモンランの","最強の","最高の","最後の","才色兼備な","最初の","最新型","最前線の","さすらいの","撮影する","ザッカ屋の","ザトウマーケットの","悟った","サバよんだ","さまよえる","サンカクスの","三国一の","残暑の","斬新な","三代目","さんぽ好きの","シェケナダムの","塩味の","シオカラ","仕事好きな","自己流の","自称","自信満々の","時代おくれの","漆黒の","実は","自撮りする","しびれる","渋い","邪悪なる","シャイな","自由自在な","執念深い","週末の","修行の身の","祝・","熟成した","じゅくれんの","純粋な","純白の","瞬発力のある","生涯","小食の","招待された","初夏の","諸行無常の","初代","司令にあこがれる","深海の","新感覚","新世紀","神速の","シンプルな","水そうの中の","スーパー","筋金入りの","スチームパンクな","頭脳明晰な","スプラトゥーンの","スポーティー","すみっこの","スミにおけない","スメーシーワールドの","スライドする","スリムな","世紀の","世紀末","正座中の","成長中の","聖なる","世界三大","世界の中心の","せっかちな","雪原の","刹那の","絶滅危惧種の","攻める","閃光の","全自動","先端を行く","センチメンタルな","センプクする","増殖する","想像以上に","早朝の","組織の","染まらない","空飛ぶ","そんなこんなで","体育会系","大海の","太古の","大事な","大大吉の","だいたんな","大地の","ダイナマイトな","ダイビング","大漁の","大量の","大量発生中の","ダシがとれる","戦う","ただの","立ちこぎの","たつじんの","たったひとりの","立ってプレイする","頼もしい","小さな","地下生まれの","秩序の","チョウザメ造船の","超人的","チョーシあげたい","チョーシいい","チョーシサイコーの","チョーシぼちぼちの","直撃する","直感を信じる","ちょっぴり","通称","付け焼き刃の","つっぱしる","つめた～い","強気な","つるつるの","データで戦う","デカい","テキトーな","電光石火の","転生した","でんせつの","電池切れの","天日干しの","動じない","都会の","トガった","時の","トゲトゲの","ととのった","とどろく","となりの","トラディショナルな","トリカラマッチの","とれたての","トレンディーな","トレンドの","ドロドロの","どん欲な","ナイスな","長そでの","渚の","泣く子もだまる","ナゾの","ナチュラルな","夏色の","夏の","夏休みの","涙の","波乗り","ナメロウ金属の","名もなき","ナワバトラー道場の","南極海の","なんてったって","難破船ドン・ブラコの","肉厚な","逃げ足の速い","逃げる","二代目","日中の","人気が出てきた","塗りたくる","塗りの","ヌルヌルの","寝起きの","寝転ぶ","ねばり強い","眠れる","のびしろのある","のんびりやの","ハードな","ハートを撃ちぬく","ハイカラシティの","ハイカラスクエアの","ハイカラな","配信終わりの","配信中の","ハイブランド好きの","白昼の","はじける","はじめての","走り回る","バズりたい","はたらく","発光する","ハッピーな","ハデな","破天荒な","はねる","早撃ち","早起きな","流行りの","腹ペコの","春色の","遥か彼方の","春の","バンカラ街の","バンカラな","バンカラマッチの","パンク","犯人は","はんにんまえの","ハンパない","汎用型","ヒーローになりたい","ヒーローモードの","ヒエヒエの","ひかえめな","比較的","干潟の","光の","ヒゲの","久しぶりの","びしょぬれの","左利きの","ピチピチの","ビッグな","引っこみ思案な","必殺の","ヒップホップ","秘伝の","秘密の","百発百中の","ヒラメが丘団地の","昼型の","広場の","ファッショナブル","ブキ屋の","フク屋の","不思議の国の","ふつうの","ふとんの中の","船酔いした","冬色の","冬の","冬休みの","プライベートマッチの","ブラックな","フルーツ好きの","古着","フルスロットル","プルプルの","フレッシュな","プロ級","ふわふわの","文化系","平日の","ペラペラの","変幻自在の","吠える","北極海の","ホットな","ポップな","炎の","ボムの","ホワイトな","舞い降りた","迷子の","負けずぎらいな","まことの","マサバ海峡大橋の","まじめな","真っ赤な","真っ黒な","真っ青な","真っ白な","マテガイ放水路の","まな板の上の","真夏の","マヒマヒリゾート＆スパの","真冬の","守る","真夜中の","丸腰の","マンガ好きの","満潮の","ミーハーな","右利きの","水の","南大西洋の","南太平洋の","ミュート中の","未来から来た","ミラクル","ムキムキの","無口な","無限の","無慈悲な","無邪気な","無敵の","ムニ・エール海洋発電所の","無味無臭の","名誉","目立ちたがりな","目力の強い","めでたい","もう負けられない","もう迷わない","モードな","モーレツな","モダンな","モッズ","モノクロの","もふもふの","森の","ヤガラ市場の","野菜好きの","優しい","野生の","やっぱり","山の","闇の","やわらかい","ヤンチャな","唯一無二の","夕暮れ時の","ユノハナ大渓谷の","夢見がちな","ゆるふわ","夜明けの","よく漬かった","よくばりな","よごれた","夜ふかしの","夜型の","弱気な","来年の","ラッキーな","ラッシュ中の","リアリストな","リアルな","リッチな","両利きの","旅行好きの","ルーズな","冷静沈着な","レギュラーマッチの","レトロな","ロカビリー","ロックな","ロビーの","論理的な","ワイプアウトの","ワイルドな","若い","わかばマークの","私は"],
                last: ["空の", ".52ガロン使い",".96ガロン使い","14式竹筒銃使い","１号","２号","３号","4Kスコープ使い","４号","８号","ABXYファン","AI","Bガール","Bボーイ","CEO","C-Sideファン","Dedf1shファン","DJ","DNA","From Bottomファン","Front Roeファン","H3リールガン使い","Hightide Eraファン","L3リールガン使い","LACT-450使い","LOVE","N-ZAP使い","OCTOTOOLファン","R-PEN使い","Rブラスターエリート使い","SashiMoriファン","Squid Squadファン","Tシャツ好き","Wet Floorファン","ω-3ファン","アーティスト","愛好家","アイツ","アイドル","アイロニック好き","アウトロー","アオリファン","赤ちゃん","アキレス腱","アシスタント","アシメ","アスリート","アタマ屋常連","アタリメイド好き","暑がり","アナアキ好き","アナログゲーマー","アフロ","アメフラシ使い","荒くれ者","アルバイター","アロメ好き","アンドロイド","イイダファン","委員長","イカ","イカ省略","イカスミ","イカノボラー","イカライフ","イカリング","イカローラー","イクラ","一文無し","逸材","一般人","一匹狼","イヌ","命","いもうと","イルカ","インク","インクリング","インフルエンサー","ヴァリアブルローラー使い","ヴィラン","ウェービー","ウェット","打ち上げ花火","宇宙飛行士","ウツボ","ウツボ使い","ウツホファン","海の幸","海坊主","海人","ウルトラショット使い","ウルトラハンコ使い","エイ","エージェント","エクスプロッシャー使い","エゾッコ好き","エナジースタンド使い","エレガンス","エンペリー好き","王者","オーバーフロッシャー使い","オオモノ","オールバック","オールラウンダー","おかあさん","オカシラ","オクタリアン","オクトリング","お子様","おじいさん","おじさん","おじょうさま","お寿司","オタク","おだんご","追っかけ","おつまみ","おでん","おとうさん","おとうと","踊り子","鬼","おにいさん","おねえさん","おばあさん","オバケ","おばさん","おぼっちゃま","オマケ","お祭り好き","思い出","親分","温泉好き","カードゲーマー","カードコレクター","カーボンローラー使い","カーリーヘア","カーリングボム使い","ガール","会社員","海水魚","会長","鏡","係長","ガキ大将","学生","歌手","家族","ガチアサリ好き","ガチアサリマスター","ガチエリア好き","ガチエリアマスター","ガチホコバトル好き","ガチホコマスター","ガチヤグラ好き","ガチヤグラマスター","合食禁ファン","カニタンク使い","カベ","カメ","カメラマン","カモン","カラー","からあげ","カラダ","カリスマ","カルパッチョ","カレントリップファン","観光客","監督","管理人","キーボーディスト","記憶","着こなし","騎士","希少部位","ギタリスト","気分","キャンパー","キャンピングシェルター使い","ギャンブラー","キューインキ使い","キューバンボム使い","キューピッド","兄弟","恐竜","魚介類","巨人","魚拓","切りこみ隊長","切り身","極めし者","キング","筋肉","クアッドホッパー使い","クイーン","食いしんぼう","クイックボム使い","クーゲルシュライバー使い","草","クツ屋常連","クマ","クラーゲス好き","クラゲ","クラッシュブラスター使い","クラブ","クリエイター","グルーヴ","グレートバリア使い","玄人","軍艦巻き","警備員","ゲーマー","毛玉","ケルビン525使い","研究員","原始人","小悪魔","工場長","後輩","コーチ","コーデ","コーディネーター","コーンロウ","コブシ","子分","コメディアン","サーファー","サーモンラン好き","サーモンランマスター","サイエンティスト","最終兵器","刺身","作家","ザッカコレクター","ザッカ屋常連","サバイバー","サブカル好き","サポーター","寒がり","サムライ","サメ","サメ使い","サメライド使い","残像","参謀","三枚目","シーフード","ジェットスイーパー使い","ジェットパック使い","シオカラーズファン","シグレニ好き","仕事人","師匠","シスターズ","したっぱ","視聴者","シチリン好き","執事","シティガール","シティボーイ","自転車乗り","四天王","姉妹","ジムワイパー使い","ジモン好き","シャープマーカー使い","若輩者","シャケ","ジャケット好き","シャケライフ","社長","シャツ好き","舎弟","ジャンパー","ジャンプビーコン使い","従業員","自由人","守護神","潤滑油","上司","ショートカット","職人","ショクワンダー使い","助手","初心者","ショップ店員","真実","新人王","新人バイト","人生","新入生","新婦","人類","新郎","スイッチヒッター","スイマー","スクイックリン使い","スクリュースロッシャー使い","スケーター","スタイリスト","スタイル","ストライカー","ストリーマー","スニーカー好き","頭脳","スパイ","スパイガジェット使い","スパッタリー使い","スプラシューター使い","スプラスコープ使い","スプラスピナー使い","スプラチャージャー使い","スプラッシュシールド使い","スプラッシュボム使い","スプラマニューバー使い","スプラローラー使い","スプリンクラー使い","スペースシューター使い","スライダー","すりみ","すりみ連合ファン","スルメ","スロースターター","責任者","節約家","ゼラチン","セレブ","全一","戦士","先生","仙人","センパイ","ソイチューバー使い","ソムリエ","存在","村長","大会出場者","大臣","大統領","タイトルホルダー","ダイナモローラー使い","代表","台風の目","太陽","タコ","タコスミ","タコゾネス","タコライフ","タタキ","タタキケンサキ好き","盾","タテロール","旅人","タマゴ","団員","ダンサー","タンサンボム使い","淡水魚","探偵","チャレンジャー","チャンピオン","チャンプルー","挑戦者","ちょんまげ","ツインテ","月","漬け","ツッコミ","釣り人","ツンツン","デザイナー","弟子","デュアルスイーパー使い","天才","天使","テンタクルズファン","天然記念物","頭足類","頭皮","豆腐","島民","トーピード使い","読書家","登山家","ドジっ子","トライストリンガー使い","ドライバー","ドライブワイパー使い","ドラゴン","トラップ使い","ドラマー","鳥","取締役","トリプルトルネード使い","トルネード","トレーナー","丼","ナイス","ナイスダマ使い","仲間","夏祭り","ナマケモノ","ナマズ","涙","ナワバトラー","ナワバリバトル好き","ナワバリマスター","ニット好き","二枚貝","二枚目","人気者","ニンゲン","ニンジャ","ネコ","熱血漢","ノヴァブラスター使い","ノーチラス使い","バーサーカー","パーティー好き","配管工","バイキング","配信者","ハイドラント使い","バイトリーダー","バイリンガル","パイロット","破壊神","博士","はぐれ者","バケットスロッシャー使い","覇者","馬車馬","働き者","ぱっつん","バトロイカ好き","花","はにかみやさん","パパ","パブロ使い","パラシェルター使い","バラズシ好き","パリピ","バレルスピナー使い","半魚人","ハンター","番長","反復横とび","ヒーロー","ヒーローモード好き","ヒーローモードマスター","ビジー・バケーションファン","秘書","ビタミン","ビッグマウス","ヒッセン使い","人見知り","ヒメファン","干物","美容師","漂流物","ひれおくん","ピン芸人","ファイター","ファッショニスタ","ファッションリーダー","ファンタジー","フウカファン","ブーツ好き","フェード","フォーリマ好き","部下","ブキ屋常連","副社長","フク屋常連","節","部長","プライムシューター使い","ブラザーズ","プランクトン","ブランド好き","プランナー","フリーク","フリーランス","ブリザード","プリンス","プリンセス","フレンド","プログラマー","プロデューサー","プロモデラー使い","ベイビー","ペインター","ベーシスト","ヘッズ","ペット","ヘッドライナー","ベテラン","ポイズンミスト使い","ポイントセンサー使い","冒険家","ぼうし好き","ボウズ","方程式","ボーイ","ボーカル","ボードゲーマー","ボールドマーカー使い","ホクサイ使い","ボケ","ホコ","捕食者","ボス","ホタックス好き","ホタルファン","ホッコリー好き","ホットブラスター使い","ホップソナー使い","ボディガード","ボトルガイザー使い","ポニテ","哺乳類","ボマー","マーメイド","魔王","孫","マスク","マスター","マッシュ","的","マドンナ","マニア","マネージャー","魔法使い","ママ","マルチミサイル使い","マンガ家","マンタローファン","ミステリー","ミツアミ","虫","息子","娘","むぞうさ","名人","メガネ好き","めがねっ子","メガホンレーザー5.1ch使い","メンタル","メンバー","申し子","モデル","モヒカン","役者","ヤコ好き","勇者","雪だるま","ライター","ライフスタイル","ラインマーカー使い","ラッキーマン","ラッパー","ラピッドブラスター使い","リーゼント","リーダー","リッター4K使い","リモートワーカー","竜宮城","漁師","料理人","ルーキー","ルック","浪人","ロッカーマニア","ロッケンベルグ好き","ロボット","ロボットボム使い","ロングブラスター使い","ロングヘア","ロンゲ","ワイドローラー使い","わかばシューター使い","若者"]
            },
            ui: {
                tabText: "文章",
                tabBanners: "プレート",
                tabBadges: "バッジ",
                textName: "名前",
                textTitles: "ニっ名",
                textRandomize: "ランダム",
                textSlot1: "バッジ 1",
                textSlot2: "バッジ 2",
                textSlot3: "バッジ 3",
                buttonBoth: "ニっ名",
                buttonFirst: "最初",
                buttonLast: "過去",
                buttonBanner: "プレート",
                buttonBadges: "バッジ",
                buttonAll: "全て",
                buttonDownload: "ダウンロード!"
            },
            default: ["バンカラな", "若者"]
        }
    }
    
    const images = {
        banners: [],
        badges: []
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

    params.lang = params.lang || 'en';
    if (Object.keys(lang).indexOf(params.lang.toLowerCase()) === -1) {
        params.lang = 'en';
    }
    const language = params.lang;

    Object.keys(lang[language].ui).forEach(element => {
        const e = document.querySelector(`[name="${element}"]`);
        if (element.startsWith('tab') || element.startsWith('button')) {
            e.value = lang[language].ui[element];
        } else if (element.startsWith('text')) {
            e.textContent = lang[language].ui[element]
        }
    });
    
    const tag = {
        name: 'Player',
        title: {
            first: 0,
            last: 0
        },
        banner: 98,
        id: '0001',
        badges: [ -1, -1, -1 ]
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
    
    const renderSplashtag = () => {
        // Draw each badge on the banner
        ctx.drawImage(images.banners[tag.banner], 0, 0);
        for (let i = 0; i < 3; i++) {
            if (tag.badges[i] !== -1) {
                const x = 480 + 74*i;
                ctx.drawImage(images.badges[tag.badges[i]], x, 128, 70, 70);
            }
        }

        // Set canvas colour
        ctx.fillStyle = '#' + banners[tag.banner].colour;

        // Write titles
        ctx.textAlign = 'left';
        
        const chosentitles = [];
        if (tag.title.first) {
            chosentitles.push(lang[language].titles.first[tag.title.first]);
        }
        if (tag.title.last) {
            chosentitles.push(lang[language].titles.last[tag.title.last]);
        }
        let size = 34;
        ctx.font = size + 'px Splat-text';
        while (ctx.measureText(chosentitles.join(['en'].indexOf(language) !== -1 ? ' ' : '')).width > 700 - 30) {
            ctx.font = --size + 'px Splat-text';
        }

        ctx.save();
        ctx.transform(1, 0, -7/100, 1, 0, 0);
        ctx.fillText(chosentitles.join(['en'].indexOf(language) !== -1 ? ' ' : ''), 16, 42);
        ctx.restore();

        // Write tag text (if not negative)
        if (!tag.id.includes('-')) {
            ctx.font = '24px Splat-text';
            ctx.fillText('#' + tag.id, 24, 186);
        }

        // Write player name
        ctx.font = '64px Splat-title';
        ctx.textAlign = 'center';
        ctx.fillText(tag.name, 700/2, 118);

        // Disables download button if testing locally
        if (!location.href.startsWith('file')) {
            downloadlink.href = canvas.toDataURL();
            downloadbutton.removeAttribute('disabled');
        }
    }

    /* Credit to @DeadLineSMB_Art on Twitter for the special band banners */
    deadlineBanners.forEach(item => {
        banners.push(item);
    });

    // Loading queue for each item (so they do not need to load when selecting banners or badges)
    banners.forEach(item => {
        loadQueue.push(1);
        let img = new Image();
        img.src = item.file;
        images.banners.push(img);
        img.onload = loadQueue.pop();
    });
    badges.forEach(item => {
        loadQueue.push(1);
        let img = new Image();
        img.src = item;
        img.onload = loadQueue.pop();
        images.badges.push(img);
    });

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
    const defaultBannerIndex = banners.findIndex(a => a.file.includes('Tutorial'));
    tag.banner = defaultBannerIndex;
    tag.title.first = lang[language].titles.first.indexOf(lang[language].default[0]);
    tag.title.last = lang[language].titles.last.indexOf(lang[language].default[1]);

    const bannerContainer = document.querySelector('#bannercontainer');

    // Add options for select menus
    banners.forEach(item => {
        const img = document.createElement('img');
        img.src = item.file;
        img.setAttribute('draggable', 'false');
        img.addEventListener('click', () => {
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
            renderSplashtag();
        });

        if (item.file.includes('Tutorial')) {
            img.classList.add('selected');
        }

        bannerContainer.appendChild(img);
    });

    for (let i = 0; i < 4; i++) {
        bannerContainer.appendChild(document.createElement('div'));
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
                badgeContainer.childNodes[tag.badges[i]].className = i === slot ? 'selected' : 'other';
            }
        });
    })

    badges.forEach(item => {
        const img = document.createElement('img');
        img.src = item;
        img.setAttribute('draggable', 'false');
        img.addEventListener('click', () => {
            let slot = [...badgeRadios].findIndex(r => r.checked);
            let currentBadge = tag.badges[slot];
            let newBadge = badges.findIndex(b => b === item);
            
            // if badge is in other slot, remove the old one
            if (tag.badges.indexOf(newBadge) !== -1) {
                tag.badges[tag.badges.indexOf(newBadge)] = -1;
                badgeContainer.childNodes[newBadge].className = '';
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
        });

        badgeContainer.appendChild(img);
    });
    
    for (let i = 0; i < 10; i++) {
        badgeContainer.appendChild(document.createElement('div'));
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
                    }
                },
                {
                    elm: randomtitle2,
                    run: () => {
                        const title2 = randIndex(lang[language].titles.last);
                        titleinput2.selectedIndex = title2;
                        tag.title.last = title2;
                    }
                },
                {
                    elm: randombanner,
                    run: () => {
                        const banner = randIndex(banners);
                        bannerContainer.childNodes[banner].click();
                    }
                },
                {
                    elm: randombadge,
                    run: () => {
                        const randBadges = ["", ...badges];
                        for (let i = 0; i < 3; i++) {
                            // allow for no badge
                            const badge = randIndex(randBadges);
                            if (badge) {
                                randBadges.splice(badge, 1);
                            }
                            tag.badges[i] = badge - 1;
                        }
                        badgeRadios[0].click();
                        document.querySelectorAll('#badgecontainer img.selected, #badgecontainer img.other').forEach(s => {
                            s.className = '';
                        });
                        for (let i = 0; i < 3; i++) {
                            if (tag.badges[i] < 0) continue;
                            badgeContainer.childNodes[tag.badges[i]].className = i === 0 ? 'selected' : 'other';
                        }
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
            ]

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
                }
            ];

            changeEvents.forEach(event => {
                event.elm.addEventListener('change', () => {
                    event.run();
                    renderSplashtag();
                });
            });

            nameinput.addEventListener('keydown', () => {
                setTimeout(() => {
                    changeEvents[2].run();
                    renderSplashtag();
                },1);
            });

            taginput.addEventListener('keydown', () => {
                setTimeout(() => {
                    changeEvents[3].run();
                    renderSplashtag();
                },1);
            });

            //console.log(`Loaded: ${banners.length} banners, ${badges.length} badges, and ${lang[language].titles.first.length + lang[language].titles.last.length} titles.`);
            
            return true;
        }
    });
}