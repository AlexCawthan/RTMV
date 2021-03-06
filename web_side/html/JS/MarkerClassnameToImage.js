var markerImages = null;

function initMarkers()
{

	markerImages = {
		Faction_USMC:"flag_usmc_co.png",
		Faction_CDF:"flag_chernarus_co.png",
		Faction_RU:"flag_rus_co.png",
		Faction_INS:"flag_chdkz_co.png",
		Faction_GUE:"flag_napa_co.png",
		Faction_CzechRepublic_EP1:"flag_cz_co.png",
		Faction_Germany_EP1:"flag_ger_co.png",
		Faction_TKA_EP1:"flag_tka_co.png",
		Faction_TKG_EP1:"flag_tkg_co.png",
		Faction_TKM_EP1:"flag_tkm_co.png",
		Faction_NATO_EP1:"flag_nato_co.png",
		Faction_UNO_EP1:"flag_uno_co.png",
		Faction_BLUFOR_EP1:"flag_blufor_co.png",
		Faction_OPFOR_EP1:"flag_opfor_co.png",
		Faction_INDFOR_EP1:"flag_indfor_co.png",
		mil_objective:"objective_CA.png",
		mil_marker:"marker_CA.png",
		mil_marker_noShadow:"flag_CA.png",
		mil_flag_noShadow:"arrow_CA.png",
		mil_arrow_noShadow:"arrow2_CA.png",
		mil_arrow2_noShadow:"ambush_CA.png",
		mil_ambush_noShadow:"destroy_CA.png",
		mil_destroy_noShadow:"start_CA.png",
		mil_start_noShadow:"end_CA.png",
		mil_end_noShadow:"pickup_CA.png",
		mil_pickup_noShadow:"join_CA.png",
		mil_join_noShadow:"warning_CA.png",
		mil_warning_noShadow:"unknown_CA.png",
		mil_unknown_noShadow:"circle_CA.png",
		mil_circle_noShadow:"dot_CA.png",
		mil_dot_noShadow:"box_CA.png",
		mil_box_noShadow:"triangle_CA.png",
		mil_triangle_noShadow:"dot_CA.png",
		hd_flag:"flag_CA.png",
		hd_flag_noShadow:"arrow_CA.png",
		hd_arrow_noShadow:"ambush_CA.png",
		hd_ambush_noShadow:"destroy_CA.png",
		hd_destroy_noShadow:"start_CA.png",
		hd_start_noShadow:"end_CA.png",
		hd_end_noShadow:"pickup_CA.png",
		hd_pickup_noShadow:"join_CA.png",
		hd_join_noShadow:"warning_CA.png",
		hd_warning_noShadow:"unknown_CA.png",
		hd_unknown_noShadow:"objective_CA.png",
		hd_dot_noShadow:"b_unknown.png",
		o_unknown:"o_unknown.png",
		n_unknown:"n_unknown.png",
		b_inf:"b_inf.png",
		o_inf:"o_inf.png",
		n_inf:"n_inf.png",
		b_motor_inf:"b_motor_inf.png",
		o_motor_inf:"o_motor_inf.png",
		n_motor_inf:"n_motor_inf.png",
		b_mech_inf:"b_mech_inf.png",
		o_mech_inf:"o_mech_inf.png",
		n_mech_inf:"n_mech_inf.png",
		b_armor:"b_armor.png",
		o_armor:"o_armor.png",
		n_armor:"n_armor.png",
		b_recon:"b_recon.png",
		o_recon:"o_recon.png",
		n_recon:"n_recon.png",
		b_air:"b_air.png",
		o_air:"o_air.png",
		n_air:"n_air.png",
		b_plane:"b_plane.png",
		o_plane:"o_plane.png",
		n_plane:"n_plane.png",
		b_uav:"b_uav.png",
		o_uav:"o_uav.png",
		n_uav:"n_uav.png",
		b_naval:"b_naval.png",
		o_naval:"o_naval.png",
		n_naval:"n_naval.png",
		b_med:"b_med.png",
		o_med:"o_med.png",
		n_med:"n_med.png",
		b_art:"b_art.png",
		o_art:"o_art.png",
		n_art:"n_art.png",
		b_mortar:"b_mortar.png",
		o_mortar:"o_mortar.png",
		n_mortar:"n_mortar.png",
		b_hq:"b_hq.png",
		o_hq:"o_hq.png",
		n_hq:"n_hq.png",
		b_support:"b_support.png",
		o_support:"o_support.png",
		n_support:"n_support.png",
		b_maint:"b_maint.png",
		o_maint:"o_maint.png",
		n_maint:"n_maint.png",
		b_service:"b_service.png",
		o_service:"o_service.png",
		n_service:"n_service.png",
		b_installation:"b_installation.png",
		o_installation:"o_installation.png",
		n_installation:"n_installation.png",
		u_installation:"u_installation.png",
		c_unknown:"c_unknown.png",
		c_car:"c_car.png",
		c_ship:"c_ship.png",
		c_air:"c_air.png",
		c_plane:"c_plane.png",
		group_0:"group_0.png",
		group_1:"group_1.png",
		group_2:"group_2.png",
		group_3:"group_3.png",
		group_4:"group_4.png",
		group_5:"group_5.png",
		group_6:"group_6.png",
		group_7:"group_7.png",
		group_8:"group_8.png",
		group_9:"group_9.png",
		group_10:"group_10.png",
		group_11:"group_11.png",
		respawn_unknown:"respawn_unknown_ca.png",
		respawn_inf:"respawn_inf_ca.png",
		respawn_motor:"respawn_motor_ca.png",
		respawn_armor:"respawn_armor_ca.png",
		respawn_air:"respawn_air_ca.png",
		respawn_plane:"respawn_plane_ca.png",
		respawn_naval:"respawn_naval_ca.png",
		respawn_para:"respawn_para_ca.png",
		loc_Tree:"tree_CA.png",
		loc_SmallTree:"SmallTree_CA.png",
		loc_Bush:"Bush_CA.png",
		loc_Church:"Church_CA.png",
		loc_Chapel:"Chapel_CA.png",
		loc_Cross:"Cross_CA.png",
		loc_Rock:"Rock_CA.png",
		loc_Bunker:"Bunker_CA.png",
		loc_Fountain:"Fountain_CA.png",
		loc_ViewTower:"ViewTower_CA.png",
		loc_Lighthouse:"Lighthouse_CA.png",
		loc_Quay:"Quay_CA.png",
		loc_Fuelstation:"Fuelstation_CA.png",
		loc_Hospital:"Hospital_CA.png",
		loc_BusStop:"BusStop_CA.png",
		loc_Transmitter:"Transmitter_CA.png",
		loc_Stack:"Stack_CA.png",
		loc_Ruin:"Ruin_CA.png",
		loc_Tourism:"Tourism_CA.png",
		loc_WaterTower:"WaterTower_CA.png",
		loc_Power:"Power_CA.png",
		loc_PowerSolar:"PowerSolar_CA.png",
		loc_PowerWave:"PowerWave_CA.png",
		loc_PowerWind:"PowerWind_CA.png",
		loc_Fortress:"nato_ca.png",
		flag_CSAT:"CSAT_ca.png",
		flag_AAF:"AAF_ca.png",
		flag_Altis:"Altis_ca.png",
		flag_AltisColonial:"AltisColonial_ca.png",
		flag_FIA:"FIA_ca.png",
		flag_EU:"EU_ca.png",
		flag_UN:"UN_ca.png",
		flag_Belgium:"Belgium_ca.png",
		flag_Canada:"Canada_ca.png",
		flag_Catalonia:"Catalonia_ca.png",
		flag_Croatia:"Croatia_ca.png",
		flag_CzechRepublic:"CzechRepublic_ca.png",
		flag_Denmark:"Denmark_ca.png",
		flag_France:"France_ca.png",
		flag_Georgia:"Georgia_ca.png",
		flag_Germany:"Germany_ca.png",
		flag_Greece:"Greece_ca.png",
		flag_Hungary:"Hungary_ca.png",
		flag_Iceland:"Iceland_ca.png",
		flag_Italy:"Italy_ca.png",
		flag_Luxembourg:"Luxembourg_ca.png",
		flag_Netherlands:"Netherlands_ca.png",
		flag_Norway:"Norway_ca.png",
		flag_Poland:"Poland_ca.png",
		flag_Portugal:"Portugal_ca.png",
		flag_Slovakia:"Slovakia_ca.png",
		flag_Slovenia:"Slovenia_ca.png",
		flag_Spain:"Spain_ca.png",
		flag_UK:"UK_ca.png",
		flag_USA:"USA_ca.png",
		Select:"iconplayer_ca.png",
		selector_selectable:"selector_selectable_ca.png",
		selector_selectedEnemy:"selector_selectedEnemy_ca.png",
		selector_selectedFriendly:"selector_selectedFriendly_ca.png",
		selector_selectedMission:"selector_selectedMission_ca.png",
		MinefieldAP:"minefieldAP_ca.png",
		CfgMarkers:"empty_ca.png",
		Faction_US:"flag_usa_co.png",
		Faction_USA_EP1:"flag_us_co.png",
		Flag:"objective_CA.png",
		hd_objective:"objective_CA.png",
		hd_dot:"dot_CA.png",
		waypoint:"waypoint.png",
		KIA:"kia_ca.png",
		Minefield:"minefield_ca.png",
		mil_flag:"objective_CA.png",
		mil_arrow:"objective_CA.png",
		mil_arrow2:"objective_CA.png",
		mil_ambush:"objective_CA.png",
		mil_destroy:"objective_CA.png",
		mil_start:"objective_CA.png",
		mil_end:"objective_CA.png",
		mil_pickup:"objective_CA.png",
		mil_join:"objective_CA.png",
		mil_warning:"warning_ca.png",
		mil_unknown:"objective_CA.png",
		mil_circle:"objective_CA.png",
		mil_dot:"objective_CA.png",
		mil_box:"objective_CA.png",
		mil_triangle:"objective_CA.png",
		hd_arrow:"arrow_ca.png",
		hd_ambush:"ambush_ca.png",
		hd_destroy:"destroy_ca.png",
		hd_start:"start_ca.png",
		hd_end:"end_ca.png",
		hd_pickup:"pickup_ca.png",
		hd_join:"join_ca.png",
		hd_warning:"warning_ca.png",
		hd_unknown:"unknown_ca.png",
		b_unknown:"objective_CA.png",
		flag_NATO:"objective_CA.png"
	};
}