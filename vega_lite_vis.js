var vg_1 = "malaysia_map_crime_rates.vg.json";

// Embed the Vega-Lite JSON visualization into the div with id="map_idiom"
vegaEmbed('#map_idiom', vg_1).then(function(result) {
// Access the Vega view instance
// (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = 'stacked_bar_chart_vg.json'


// Embed stacked bar chart
vegaEmbed('#stacked_bar_chart', vg_2).then(function(result) {
// Access the Vega view instance
// (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);



