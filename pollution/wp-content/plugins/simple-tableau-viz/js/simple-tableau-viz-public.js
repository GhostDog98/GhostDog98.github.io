(function( $ ) {
	'use strict';
	// The initViz function. Refer Tableau JS API for details on how this works (https://onlinehelp.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api.htm)
	function initViz() {
			var containerDiv = document.getElementById("vizContainer"),
					url = $('#vizContainer').attr("data-url"),
					options = {
							hideTabs: true,
							onFirstInteractive: function () {
									console.log("The viz has finished loading.");
							}
					};

			// Create a viz object and embed it in the container div.
			var viz = new tableau.Viz(containerDiv, url, options);

	}
	//Document ready fuction
	$(document).ready(function() {
  //if the data attribute is populated, initialize the Tableau Viz.
	   if ($('#vizContainer').attr("data-url") != ''){
	     initViz();
	   }
  });
})( jQuery );
