
// INDEX PAGES
function Open_mapei_popup (){let popup = document.getElementById("mapeiPopup");popup.classList.toggle("show");}                                        
function Open_sadolin_popup (){let popup = document.getElementById("myPopup");popup.classList.toggle("show");}
                                        

// AGENCY PAGES
function Load_home_page () {window.location="index.html"}
function Load_agency_entries () {window.location="AgencyEntriesGui.html"}
function Load_agency_view() {window.location="AgencyViewGui.html"}


// MAPAI PAGES
function Load_mapei_entries () {window.location="MapeiEntriesGui.html"};
function Load_mapei_view () {window.location="MapeiViewGui.html"};
function Load_mapei_record () {window.location="MapeiRecordGui.html"}
function Load_mapei_view_adesilexp7 () {window.location="MapeiViewAdesilexp7.html"}
function Load_mapei_view_planiseal_grey () {window.location="MapeiViewPlanisealGrey.html"}
function Load_mapei_view_planiseal_liquid () {window.location="MapeiViewPlanisealLiquid.html"}
function Load_mapei_view_plastimul_dpm () {window.location="MapeiViewPlastimulDpm.html"}
function Load_mapei_view_keracolor () {window.location="MapeiViewKeracolor.html"}


// SADOLIN PAGES
function Load_sadolin_entries () {window.location="SadolinEntriesGui.html"}
function Load_sadolin_view() {window.location="SadolinViewGui.html"}
function Load_sadolin_view_emulsion () {window.location="SadolinViewEmulsion.html"}
function Load_sadolin_view_bg_stock() {window.location="SadolinViewBudgetGloss.html"}
function Load_sadolin_view_matt () {window.location="SadolinViewMatt.html"}
function Load_sadolin_view_silk () {window.location="SadolinViewSilk.html"}
function Load_sadolin_view_silk_base () {window.location="SadolinViewBaseSilk.html"}
function Load_sadolin_view_super () {window.location="SadolinViewSuper.html"}
function Load_sadolin_view_super_base () {window.location="SadolinViewBaseSuper.html"}
function Load_sadolin_view_undercoat () {window.location="SadolinViewUndercoat.html"}
function Load_sadolin_view_weather_guard () {window.location="SadolinViewWeather.html"}
function Load_sadolin_view_weather_base () {window.location="SadolinViewBaseWeather.html"}
function Load_sadolin_record() {window.location="SadolinRecordGui.html"}

// ---------------
function Load_sadolin_view_thinner() {window.location="SadolinViewThinner.html"}
function Load_sadolin_view_rood_marking(){window.location="SadolinViewRoadmarking.html"}
function Load_sadolin_view_wallguard ()	{window.location="SadolinViewWallguard.html"}
function Load_sadolin_view_roofguard ()	{window.location="SadolinViewRoofguard.html"}
function Load_sadolin_view_rainshild () {window.location="SadolinViewRainshild.html"}
function Load_sadolin_view_dampshild ()	{window.location="SadolinViewDampshild.html"}
function Load_sadolin_view_clear_varnish ()	{window.location="SadolinViewClearVarnish.html"}
function Load_sadolin_view_colour_varnish () {window.location="ViewColourVarnish.html"}
function Load_sadolin_view_ceilling ()	{window.location="SadolinViewCeilling.html"}


/*
////////////////////////////////////////////////////////////////////////////////////////////////////////
                                            ==============
                                            | SADOLIN GUI |
                                            ==============
//////////////////////////////////////////////////////////////////////////////////////////////////////

/*
+++++++++++++++++++++++++ ++
+                          +
+   SADOLIN ENTRIES PAGE   +
+                          + 
++++++++++++++++++++++++++++
*/


function Clear_Weather_Guard_Form_Data (){setTimeout(document.getElementById("weather-guard-form").reset(), 1000);}
function hide_all_divs ()
    {
        
        document.getElementById("budget-emulsion-id").style.display = "none";
        document.getElementById("budget_gloss_id").style.display="none";
        document.getElementById("matt-vinyl-id").style.display="none";
        document.getElementById("silk_vinyl_id").style.display="none";
        document.getElementById("silk-vinyl-base-id").style.display="none";
        document.getElementById("super_gloss_id").style.display="none";
        document.getElementById("super-base-id").style.display="none";
        document.getElementById("undercoat_id").style.display="none";
        document.getElementById("thinner_id").style.display="none";
        document.getElementById("road_marking_id").style.display="none";
        document.getElementById("roof_guard_id").style.display="none";
        document.getElementById("wall_guard_id").style.display="none";
        document.getElementById("rain_shild_id").style.display="none";
        document.getElementById("dampshild_id").style.display="none";
        document.getElementById("clear_varnish_id").style.display="none";
        document.getElementById("colour_varnish_id").style.display="none";
        document.getElementById("ceilling_id").style.display="none";
        document.getElementById("weather_gaurd_id").style.display="none";
        document.getElementById("weather-base-id").style.display="none";
    }
    function show_undercoat_div ()
    {
        document.getElementById("thinner_id").style.display="none";
        document.getElementById("road_marking_id").style.display="none";
        document.getElementById("roof_guard_id").style.display="none";
        document.getElementById("wall_guard_id").style.display="none";
        document.getElementById("rain_shild_id").style.display="none";
        document.getElementById("dampshild_id").style.display="none";
        document.getElementById("clear_varnish_id").style.display="none";
        document.getElementById("colour_varnish_id").style.display="none";
        document.getElementById("ceilling_id").style.display="none";
        document.getElementById("budget-emulsion-id").style.display = "none";
        document.getElementById("silk-vinyl-base-id").style.display="none";
        document.getElementById("budget_gloss_id").style.display="none";
        document.getElementById("silk_vinyl_id").style.display="none";
        document.getElementById("matt-vinyl-id").style.display="none";
        document.getElementById("super_gloss_id").style.display="none";
        document.getElementById("super-base-id").style.display="none";
        document.getElementById("weather_gaurd_id").style.display="none";
        document.getElementById("weather-base-id").style.display="none";
        document.getElementById("undercoat_id").style.display="block";
    }
function close_undercoat_div ()
    {document.getElementById("undercoat_id").style.display="none";}

function show_emulsion_div ()
    {
        document.getElementById("thinner_id").style.display="none";
        document.getElementById("road_marking_id").style.display="none";
        document.getElementById("roof_guard_id").style.display="none";
        document.getElementById("wall_guard_id").style.display="none";
        document.getElementById("rain_shild_id").style.display="none";
        document.getElementById("dampshild_id").style.display="none";
        document.getElementById("clear_varnish_id").style.display="none";
        document.getElementById("colour_varnish_id").style.display="none";
        document.getElementById("ceilling_id").style.display="none";
        document.getElementById("silk-vinyl-base-id").style.display="none";
        document.getElementById("budget_gloss_id").style.display="none";
        document.getElementById("silk_vinyl_id").style.display="none";
        document.getElementById("matt-vinyl-id").style.display="none";
        document.getElementById("super_gloss_id").style.display="none";
        document.getElementById("super-base-id").style.display="none";
        document.getElementById("weather_gaurd_id").style.display="none";
        document.getElementById("weather-base-id").style.display="none";
        document.getElementById("undercoat_id").style.display="none";
        document.getElementById("budget-emulsion-id").style.display = "block";

    }
function close_emulsion_div ()
    {document.getElementById("budget-emulsion-id").style.display = "none";}


    function show_budget_gloss_div ()
    {
        document.getElementById("thinner_id").style.display="none";
        document.getElementById("road_marking_id").style.display="none";
        document.getElementById("roof_guard_id").style.display="none";
        document.getElementById("wall_guard_id").style.display="none";
        document.getElementById("rain_shild_id").style.display="none";
        document.getElementById("dampshild_id").style.display="none";
        document.getElementById("clear_varnish_id").style.display="none";
        document.getElementById("colour_varnish_id").style.display="none";
        document.getElementById("ceilling_id").style.display="none";
        document.getElementById("budget-emulsion-id").style.display = "none";
        document.getElementById("silk-vinyl-base-id").style.display="none";
        document.getElementById("matt-vinyl-id").style.display="none";
        document.getElementById("silk_vinyl_id").style.display="none";
        document.getElementById("super_gloss_id").style.display="none";
        document.getElementById("super-base-id").style.display="none";
        document.getElementById("weather_gaurd_id").style.display="none";
        document.getElementById("weather-base-id").style.display="none";
        document.getElementById("undercoat_id").style.display="none";
        document.getElementById("budget_gloss_id").style.display="block";
    }function close_budget_gloss_div (){document.getElementById("budget_gloss_id").style.display="none";}

function show_matt_vinyl_div ()
    {
        document.getElementById("thinner_id").style.display="none";
        document.getElementById("road_marking_id").style.display="none";
        document.getElementById("roof_guard_id").style.display="none";
        document.getElementById("wall_guard_id").style.display="none";
        document.getElementById("rain_shild_id").style.display="none";
        document.getElementById("dampshild_id").style.display="none";
        document.getElementById("clear_varnish_id").style.display="none";
        document.getElementById("colour_varnish_id").style.display="none";
        document.getElementById("ceilling_id").style.display="none";
        document.getElementById("budget-emulsion-id").style.display = "none";
        document.getElementById("silk-vinyl-base-id").style.display="none";
        document.getElementById("silk_vinyl_id").style.display="none";
        document.getElementById("budget_gloss_id").style.display="none";
        document.getElementById("super_gloss_id").style.display="none";
        document.getElementById("super-base-id").style.display="none";
        document.getElementById("undercoat_id").style.display="none";
        document.getElementById("weather_gaurd_id").style.display="none";
        document.getElementById("weather-base-id").style.display="none";
        document.getElementById("matt-vinyl-id").style.display="block";
    }function close_matt_vinyl_div (){document.getElementById("matt-vinyl-id").style.display="none";}

function show_silk_vinyl_div ()
{
    document.getElementById("thinner_id").style.display="none";
    document.getElementById("road_marking_id").style.display="none";
    document.getElementById("roof_guard_id").style.display="none";
    document.getElementById("wall_guard_id").style.display="none";
    document.getElementById("rain_shild_id").style.display="none";
    document.getElementById("dampshild_id").style.display="none";
    document.getElementById("clear_varnish_id").style.display="none";
    document.getElementById("colour_varnish_id").style.display="none";
    document.getElementById("ceilling_id").style.display="none";
    document.getElementById("budget-emulsion-id").style.display = "none";
    document.getElementById("silk-vinyl-base-id").style.display="none";
    document.getElementById("matt-vinyl-id").style.display="none";
    document.getElementById("budget_gloss_id").style.display="none";
    document.getElementById("super_gloss_id").style.display="none";
    document.getElementById("super-base-id").style.display="none";
    document.getElementById("undercoat_id").style.display="none";
    document.getElementById("weather_gaurd_id").style.display="none";
    document.getElementById("weather-base-id").style.display="none";
    document.getElementById("silk_vinyl_id").style.display="block";
}function close_silk_vinyl_div (){document.getElementById("silk_vinyl_id").style.display="none";}

function show_silk_vinyl_base_div ()
{
    document.getElementById("thinner_id").style.display="none";
    document.getElementById("road_marking_id").style.display="none";
    document.getElementById("roof_guard_id").style.display="none";
    document.getElementById("wall_guard_id").style.display="none";
    document.getElementById("rain_shild_id").style.display="none";
    document.getElementById("dampshild_id").style.display="none";
    document.getElementById("clear_varnish_id").style.display="none";
    document.getElementById("colour_varnish_id").style.display="none";
    document.getElementById("ceilling_id").style.display="none";
    document.getElementById("budget-emulsion-id").style.display = "none";
    document.getElementById("budget_gloss_id").style.display="none";
    document.getElementById("matt-vinyl-id").style.display="none";
    document.getElementById("super_gloss_id").style.display="none";
    document.getElementById("super-base-id").style.display="none";
    document.getElementById("undercoat_id").style.display="none";
    document.getElementById("weather_gaurd_id").style.display="none";
    document.getElementById("weather-base-id").style.display="none";
    document.getElementById("silk_vinyl_id").style.display="none";
    document.getElementById("silk-vinyl-base-id").style.display="block";
}function close_silk_vinyl_base_div (){document.getElementById("silk-vinyl-base-id").style.display="none";}

function show_super_gloss_div ()
    {
        document.getElementById("thinner_id").style.display="none";
        document.getElementById("road_marking_id").style.display="none";
        document.getElementById("roof_guard_id").style.display="none";
        document.getElementById("wall_guard_id").style.display="none";
        document.getElementById("rain_shild_id").style.display="none";
        document.getElementById("dampshild_id").style.display="none";
        document.getElementById("clear_varnish_id").style.display="none";
        document.getElementById("colour_varnish_id").style.display="none";
        document.getElementById("ceilling_id").style.display="none";
        document.getElementById("budget-emulsion-id").style.display = "none";
        document.getElementById("silk-vinyl-base-id").style.display="none";
        document.getElementById("matt-vinyl-id").style.display="none";
        document.getElementById("budget_gloss_id").style.display="none";
        document.getElementById("weather_gaurd_id").style.display="none";
        document.getElementById("weather-base-id").style.display="none";
        document.getElementById("silk_vinyl_id").style.display="none";
        document.getElementById("undercoat_id").style.display="none";
        document.getElementById("super-base-id").style.display="none";
        document.getElementById("super_gloss_id").style.display="block";
    }
function close_super_gloss_div (){document.getElementById("super_gloss_id").style.display="none";}

function show_super_base_div ()
    {
        document.getElementById("thinner_id").style.display="none";
        document.getElementById("road_marking_id").style.display="none";
        document.getElementById("roof_guard_id").style.display="none";
        document.getElementById("wall_guard_id").style.display="none";
        document.getElementById("rain_shild_id").style.display="none";
        document.getElementById("dampshild_id").style.display="none";
        document.getElementById("clear_varnish_id").style.display="none";
        document.getElementById("colour_varnish_id").style.display="none";
        document.getElementById("ceilling_id").style.display="none";
        document.getElementById("budget-emulsion-id").style.display = "none";
        document.getElementById("budget_gloss_id").style.display="none";
        document.getElementById("matt-vinyl-id").style.display="none";
        document.getElementById("super_gloss_id").style.display="none";
        document.getElementById("silk-vinyl-base-id").style.display="none";
        document.getElementById("undercoat_id").style.display="none";
        document.getElementById("weather_gaurd_id").style.display="none";
        document.getElementById("weather-base-id").style.display="none";
        document.getElementById("silk_vinyl_id").style.display="none";
        document.getElementById("super-base-id").style.display="block";
    }
function close_super_base_div (){document.getElementById("super-base-id").style.display="none";}


function show_weather_gaurd_div ()
    {
        document.getElementById("thinner_id").style.display="none";
        document.getElementById("road_marking_id").style.display="none";
        document.getElementById("roof_guard_id").style.display="none";
        document.getElementById("wall_guard_id").style.display="none";
        document.getElementById("rain_shild_id").style.display="none";
        document.getElementById("dampshild_id").style.display="none";
        document.getElementById("clear_varnish_id").style.display="none";
        document.getElementById("colour_varnish_id").style.display="none";
        document.getElementById("ceilling_id").style.display="none";
        document.getElementById("budget-emulsion-id").style.display = "none";
        document.getElementById("silk-vinyl-base-id").style.display="none";
        document.getElementById("matt-vinyl-id").style.display="none";
        document.getElementById("undercoat_id").style.display="none";
        document.getElementById("budget_gloss_id").style.display="none";
        document.getElementById("silk_vinyl_id").style.display="none";
        document.getElementById("super_gloss_id").style.display="none";
        document.getElementById("super-base-id").style.display="none";
        document.getElementById("weather-base-id").style.display="none";
        document.getElementById("weather_gaurd_id").style.display="block";
    }
function close_weather_gaurd_div ()
    {document.getElementById("weather_gaurd_id").style.display="none";}

function show_weather_base_div ()
    {
        document.getElementById("thinner_id").style.display="none";
        document.getElementById("road_marking_id").style.display="none";
        document.getElementById("roof_guard_id").style.display="none";
        document.getElementById("wall_guard_id").style.display="none";
        document.getElementById("rain_shild_id").style.display="none";
        document.getElementById("dampshild_id").style.display="none";
        document.getElementById("clear_varnish_id").style.display="none";
        document.getElementById("colour_varnish_id").style.display="none";
        document.getElementById("ceilling_id").style.display="none";
        document.getElementById("budget-emulsion-id").style.display = "none";
        document.getElementById("budget_gloss_id").style.display="none";
        document.getElementById("matt-vinyl-id").style.display="none";
        document.getElementById("super_gloss_id").style.display="none";
        document.getElementById("silk-vinyl-base-id").style.display="none";
        document.getElementById("undercoat_id").style.display="none";
        document.getElementById("weather_gaurd_id").style.display="none";
        document.getElementById("super-base-id").style.display="none";
        document.getElementById("silk_vinyl_id").style.display="none";
        document.getElementById("weather-base-id").style.display="block";
    }
function close_weather_base_div ()
    {document.getElementById("weather-base-id").style.display="none";}


function show_thinner_div ()
    {
        document.getElementById("weather_gaurd_id").style.display="none";
        document.getElementById("road_marking_id").style.display="none";
        document.getElementById("roof_guard_id").style.display="none";
        document.getElementById("wall_guard_id").style.display="none";
        document.getElementById("rain_shild_id").style.display="none";
        document.getElementById("dampshild_id").style.display="none";
        document.getElementById("clear_varnish_id").style.display="none";
        document.getElementById("colour_varnish_id").style.display="none";
        document.getElementById("ceilling_id").style.display="none";
        document.getElementById("budget-emulsion-id").style.display = "none";
        document.getElementById("silk-vinyl-base-id").style.display="none";
        document.getElementById("matt-vinyl-id").style.display="none";
        document.getElementById("undercoat_id").style.display="none";
        document.getElementById("budget_gloss_id").style.display="none";
        document.getElementById("silk_vinyl_id").style.display="none";
        document.getElementById("super_gloss_id").style.display="none";
        document.getElementById("super-base-id").style.display="none";
        document.getElementById("weather-base-id").style.display="none";
        document.getElementById("thinner_id").style.display="block";
    }
function close_thinner_div ()
    {document.getElementById("thinner_id").style.display="none";}

function show_road_marking_div ()
    {
        document.getElementById("thinner_id").style.display="none";
        document.getElementById("weather_gaurd_id").style.display="none";
        document.getElementById("roof_guard_id").style.display="none";
        document.getElementById("wall_guard_id").style.display="none";
        document.getElementById("rain_shild_id").style.display="none";
        document.getElementById("dampshild_id").style.display="none";
        document.getElementById("clear_varnish_id").style.display="none";
        document.getElementById("colour_varnish_id").style.display="none";
        document.getElementById("ceilling_id").style.display="none";
        document.getElementById("budget-emulsion-id").style.display = "none";
        document.getElementById("silk-vinyl-base-id").style.display="none";
        document.getElementById("matt-vinyl-id").style.display="none";
        document.getElementById("undercoat_id").style.display="none";
        document.getElementById("budget_gloss_id").style.display="none";
        document.getElementById("silk_vinyl_id").style.display="none";
        document.getElementById("super_gloss_id").style.display="none";
        document.getElementById("super-base-id").style.display="none";
        document.getElementById("weather-base-id").style.display="none";
        document.getElementById("road_marking_id").style.display="block";
    }
function close_road_marking_div ()
    {document.getElementById("road_marking_id").style.display="none";}

function show_roof_guard_div ()
    {
        document.getElementById("thinner_id").style.display="none";
        document.getElementById("road_marking_id").style.display="none";
        document.getElementById("weather_gaurd_id").style.display="none";
        document.getElementById("wall_guard_id").style.display="none";
        document.getElementById("rain_shild_id").style.display="none";
        document.getElementById("dampshild_id").style.display="none";
        document.getElementById("clear_varnish_id").style.display="none";
        document.getElementById("colour_varnish_id").style.display="none";
        document.getElementById("ceilling_id").style.display="none";
        document.getElementById("budget-emulsion-id").style.display = "none";
        document.getElementById("silk-vinyl-base-id").style.display="none";
        document.getElementById("matt-vinyl-id").style.display="none";
        document.getElementById("undercoat_id").style.display="none";
        document.getElementById("budget_gloss_id").style.display="none";
        document.getElementById("silk_vinyl_id").style.display="none";
        document.getElementById("super_gloss_id").style.display="none";
        document.getElementById("super-base-id").style.display="none";
        document.getElementById("weather-base-id").style.display="none";
        document.getElementById("roof_guard_id").style.display="block";
    }
function close_roof_guard_div ()
    {document.getElementById("roof_guard_id").style.display="none";}

function show_wall_guard_div ()
    {
        document.getElementById("thinner_id").style.display="none";
        document.getElementById("road_marking_id").style.display="none";
        document.getElementById("weather_gaurd_id").style.display="none";
        document.getElementById("roof_guard_id").style.display="none";
        document.getElementById("rain_shild_id").style.display="none";
        document.getElementById("dampshild_id").style.display="none";
        document.getElementById("clear_varnish_id").style.display="none";
        document.getElementById("colour_varnish_id").style.display="none";
        document.getElementById("ceilling_id").style.display="none";
        document.getElementById("budget-emulsion-id").style.display = "none";
        document.getElementById("silk-vinyl-base-id").style.display="none";
        document.getElementById("matt-vinyl-id").style.display="none";
        document.getElementById("undercoat_id").style.display="none";
        document.getElementById("budget_gloss_id").style.display="none";
        document.getElementById("silk_vinyl_id").style.display="none";
        document.getElementById("super_gloss_id").style.display="none";
        document.getElementById("super-base-id").style.display="none";
        document.getElementById("weather-base-id").style.display="none";
        document.getElementById("wall_guard_id").style.display="block";
    }
function close_wall_guard_div ()
    {document.getElementById("wall_guard_id").style.display="none";}

function show_clear_varnish_div ()
    {
        document.getElementById("thinner_id").style.display="none";
        document.getElementById("road_marking_id").style.display="none";
        document.getElementById("weather_gaurd_id").style.display="none";
        document.getElementById("wall_guard_id").style.display="none";
        document.getElementById("rain_shild_id").style.display="none";
        document.getElementById("dampshild_id").style.display="none";
        document.getElementById("roof_guard_id").style.display="none";
        document.getElementById("colour_varnish_id").style.display="none";
        document.getElementById("ceilling_id").style.display="none";
        document.getElementById("budget-emulsion-id").style.display = "none";
        document.getElementById("silk-vinyl-base-id").style.display="none";
        document.getElementById("matt-vinyl-id").style.display="none";
        document.getElementById("undercoat_id").style.display="none";
        document.getElementById("budget_gloss_id").style.display="none";
        document.getElementById("silk_vinyl_id").style.display="none";
        document.getElementById("super_gloss_id").style.display="none";
        document.getElementById("super-base-id").style.display="none";
        document.getElementById("weather-base-id").style.display="none";
        document.getElementById("clear_varnish_id").style.display="block";
    }
function close_clear_varnish_div ()
    {document.getElementById("clear_varnish_id").style.display="none";}

function show_colour_varnish_div ()
    {
        document.getElementById("thinner_id").style.display="none";
        document.getElementById("road_marking_id").style.display="none";
        document.getElementById("weather_gaurd_id").style.display="none";
        document.getElementById("wall_guard_id").style.display="none";
        document.getElementById("rain_shild_id").style.display="none";
        document.getElementById("dampshild_id").style.display="none";
        document.getElementById("clear_varnish_id").style.display="none";
        document.getElementById("roof_guard_id").style.display="none";
        document.getElementById("ceilling_id").style.display="none";
        document.getElementById("budget-emulsion-id").style.display = "none";
        document.getElementById("silk-vinyl-base-id").style.display="none";
        document.getElementById("matt-vinyl-id").style.display="none";
        document.getElementById("undercoat_id").style.display="none";
        document.getElementById("budget_gloss_id").style.display="none";
        document.getElementById("silk_vinyl_id").style.display="none";
        document.getElementById("super_gloss_id").style.display="none";
        document.getElementById("super-base-id").style.display="none";
        document.getElementById("weather-base-id").style.display="none";
        document.getElementById("colour_varnish_id").style.display="block";
    }
function close_colour_varnish_div ()
    {document.getElementById("colour_varnish_id").style.display="none";}

function show_ceilling_div ()
    {
        document.getElementById("thinner_id").style.display="none";
        document.getElementById("road_marking_id").style.display="none";
        document.getElementById("weather_gaurd_id").style.display="none";
        document.getElementById("wall_guard_id").style.display="none";
        document.getElementById("rain_shild_id").style.display="none";
        document.getElementById("dampshild_id").style.display="none";
        document.getElementById("clear_varnish_id").style.display="none";
        document.getElementById("colour_varnish_id").style.display="none";
        document.getElementById("roof_guard_id").style.display="none";
        document.getElementById("budget-emulsion-id").style.display = "none";
        document.getElementById("silk-vinyl-base-id").style.display="none";
        document.getElementById("matt-vinyl-id").style.display="none";
        document.getElementById("undercoat_id").style.display="none";
        document.getElementById("budget_gloss_id").style.display="none";
        document.getElementById("silk_vinyl_id").style.display="none";
        document.getElementById("super_gloss_id").style.display="none";
        document.getElementById("super-base-id").style.display="none";
        document.getElementById("weather-base-id").style.display="none";
        document.getElementById("ceilling_id").style.display="block";
    }
function close_ceilling_div (){document.getElementById("ceilling_id").style.display="none";}

function show_rain_shild_div ()
    {
        document.getElementById("thinner_id").style.display="none";
        document.getElementById("road_marking_id").style.display="none";
        document.getElementById("weather_gaurd_id").style.display="none";
        document.getElementById("wall_guard_id").style.display="none";
        document.getElementById("roof_guard_id").style.display="none";
        document.getElementById("dampshild_id").style.display="none";
        document.getElementById("clear_varnish_id").style.display="none";
        document.getElementById("colour_varnish_id").style.display="none";
        document.getElementById("ceilling_id").style.display="none";
        document.getElementById("budget-emulsion-id").style.display = "none";
        document.getElementById("silk-vinyl-base-id").style.display="none";
        document.getElementById("matt-vinyl-id").style.display="none";
        document.getElementById("undercoat_id").style.display="none";
        document.getElementById("budget_gloss_id").style.display="none";
        document.getElementById("silk_vinyl_id").style.display="none";
        document.getElementById("super_gloss_id").style.display="none";
        document.getElementById("super-base-id").style.display="none";
        document.getElementById("weather-base-id").style.display="none";
        document.getElementById("rain_shild_id").style.display="block";
    }
function close_rain_shild_div ()
    {document.getElementById("rain_shild_id").style.display="none";}

function show_dampshild_div ()
    {
        document.getElementById("thinner_id").style.display="none";
        document.getElementById("road_marking_id").style.display="none";
        document.getElementById("weather_gaurd_id").style.display="none";
        document.getElementById("wall_guard_id").style.display="none";
        document.getElementById("rain_shild_id").style.display="none";
        document.getElementById("roof_guard_id").style.display="none";
        document.getElementById("clear_varnish_id").style.display="none";
        document.getElementById("colour_varnish_id").style.display="none";
        document.getElementById("ceilling_id").style.display="none";
        document.getElementById("budget-emulsion-id").style.display = "none";
        document.getElementById("silk-vinyl-base-id").style.display="none";
        document.getElementById("matt-vinyl-id").style.display="none";
        document.getElementById("undercoat_id").style.display="none";
        document.getElementById("budget_gloss_id").style.display="none";
        document.getElementById("silk_vinyl_id").style.display="none";
        document.getElementById("super_gloss_id").style.display="none";
        document.getElementById("super-base-id").style.display="none";
        document.getElementById("weather-base-id").style.display="none";
        document.getElementById("dampshild_id").style.display="block";
    }
function close_dampshild_div ()
    {document.getElementById("dampshild_id").style.display="none";}


    /*=======================================================================================================*/
                                            /*
                                               +++++++++++++++++++++++++ ++
                                               +                          +
                                               +   mapei_entries_page   +
                                               +                          + 
                                               ++++++++++++++++++++++++++++
                                            */
function Hide_All_Mapei_Divs ()
{
    document.getElementById("Planiseal-288-A-Grey-Id").style.display="none";
    document.getElementById("Planiseal-288-B-Id").style.display="none";
    document.getElementById("Plastimul-DPM-Id").style.display="none";
    document.getElementById("Keracolor-Id").style.display="none";
    document.getElementById("Adesilex-P7-Id").style.display="none";
}


function Show_Adesilex_P7_Id ()
{
    document.getElementById("Planiseal-288-A-Grey-Id").style.display="none";
    document.getElementById("Planiseal-288-B-Id").style.display="none";
    document.getElementById("Plastimul-DPM-Id").style.display="none";
    document.getElementById("Keracolor-Id").style.display="none";
    document.getElementById("Adesilex-P7-Id").style.display="block";

}function Close_Adesilex_P7_Id (){document.getElementById("Adesilex-P7-Id").style.display="none";}

function Show_Planiseal_288_A_Grey_Id ()
{
    document.getElementById("Adesilex-P7-Id").style.display="none";
    document.getElementById("Planiseal-288-B-Id").style.display="none";
    document.getElementById("Plastimul-DPM-Id").style.display="none";
    document.getElementById("Keracolor-Id").style.display="none";
    document.getElementById("Planiseal-288-A-Grey-Id").style.display="block";
}function Close_Planiseal_288_A_Grey_Id (){document.getElementById("Planiseal-288-A-Grey-Id").style.display="none";}

function Show_Planiseal_288_B_Id ()
{
    document.getElementById("Adesilex-P7-Id").style.display="none";
    document.getElementById("Planiseal-288-A-Grey-Id").style.display="none";
    document.getElementById("Plastimul-DPM-Id").style.display="none";
    document.getElementById("Keracolor-Id").style.display="none";
    document.getElementById("Planiseal-288-B-Id").style.display="block";
}function Close_Planiseal_288_B_Id (){document.getElementById("Planiseal-288-B-Id").style.display="none";}

function Show_Plastimul_DPM_Id ()
{
    document.getElementById("Adesilex-P7-Id").style.display="none";
    document.getElementById("Planiseal-288-A-Grey-Id").style.display="none";
    document.getElementById("Planiseal-288-B-Id").style.display="none";
    document.getElementById("Keracolor-Id").style.display="none";
    document.getElementById("Plastimul-DPM-Id").style.display="block";
}function Close_Plastimul_DPM_Id (){document.getElementById("Plastimul-DPM-Id").style.display="none";}

function Show_Keracolor_Id ()
{
    document.getElementById("Adesilex-P7-Id").style.display="none";
    document.getElementById("Planiseal-288-A-Grey-Id").style.display="none";
    document.getElementById("Planiseal-288-B-Id").style.display="none";
    document.getElementById("Plastimul-DPM-Id").style.display="none";
    document.getElementById("Keracolor-Id").style.display="block";
}function Close_Keracolor_Id (){document.getElementById("Keracolor-Id").style.display="none";}
