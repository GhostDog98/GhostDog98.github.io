/* 
Main javascript for Dyslexiefont Plugin
JS version 0.0.2.2
(C)2019 - Dyslexiefont.com
*/

if (!window.$) {  
	// remove when no jQuery is found
	if (!window.jQuery) {  
		var myobj = document.getElementById("dyslexiefontContainer");
		myobj.remove();
	}	
}

(function($) {

	/* add cookies to javascript */
	(function (factory) {
		if (typeof define === 'function' && define.amd) {
			// AMD
			define(['$'], factory);
		} else if (typeof exports === 'object') {
			// CommonJS
			factory(require('$'));
		} else {
			// Browser globals
			factory($);
		}
	}(function ($) {

		var pluses = /\+/g;

		function encode(s) {
			return config.raw ? s : encodeURIComponent(s);
		}

		function decode(s) {
			return config.raw ? s : decodeURIComponent(s);
		}

		function stringifyCookieValue(value) {
			return encode(config.json ? JSON.stringify(value) : String(value));
		}

		function parseCookieValue(s) {
			if (s.indexOf('"') === 0) {
				// This is a quoted cookie as according to RFC2068, unescape...
				s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
			}

			try {
				// Replace server-side written pluses with spaces.
				// If we can't decode the cookie, ignore it, it's unusable.
				// If we can't parse the cookie, ignore it, it's unusable.
				s = decodeURIComponent(s.replace(pluses, ' '));
				return config.json ? JSON.parse(s) : s;
			} catch(e) {}
		}

		function read(s, converter) {
			var value = config.raw ? s : parseCookieValue(s);
			return $.isFunction(converter) ? converter(value) : value;
		}

		var config = $.cookie = function (key, value, options) {

			// Write

			if (value !== undefined && !$.isFunction(value)) {
				options = $.extend({}, config.defaults, options);

				if (typeof options.expires === 'number') {
					var days = options.expires, t = options.expires = new Date();
					t.setTime(+t + days * 864e+5);
				}

				return (document.cookie = [
					encode(key), '=', stringifyCookieValue(value),
					options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
					options.path    ? '; path=' + options.path : '',
					options.domain  ? '; domain=' + options.domain : '',
					options.secure  ? '; secure' : ''
				].join(''));
			}

			// Read

			var result = key ? undefined : {};

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling $.cookie().
			var cookies = document.cookie ? document.cookie.split('; ') : [];

			for (var i = 0, l = cookies.length; i < l; i++) {
				var parts = cookies[i].split('=');
				var name = decode(parts.shift());
				var cookie = parts.join('=');

				if (key && key === name) {
					// If second argument (value) is a function it's a converter...
					result = read(cookie, value);
					break;
				}

				// Prevent storing a cookie that we couldn't decode.
				if (!key && (cookie = read(cookie)) !== undefined) {
					result[name] = cookie;
				}
			}

			return result;
		};

		config.defaults = {};

		$.removeCookie = function (key, options) {
			if ($.cookie(key) === undefined) {
				return false;
			}

			// Must not alter options, thus extending a fresh object...
			$.cookie(key, '', $.extend({}, options, { expires: -1 }));
			return !$.cookie(key);
		};

	}));

	$(document).ready(function() {
		// backup styles
		df_backupStyle();

		// add panel location styling
		window.df_panellocation = dyslexiefont_free_settings.df_panellocation;
		if (typeof window.df_panellocation == 'undefined' || window.df_panellocation == "") { window.df_panellocation = "tr"; }
		if (typeof dyslexiefont_free_settings.df_fonttype == 'undefined' || dyslexiefont_free_settings.df_fonttype == "dyslexiefont") { window.df_fonttype = "dyslexiefont"; } else { window.df_fonttype = "dyslexiefontkids"; }
		$("#dyslexiefontContainer").addClass("dfpanel-"+window.df_panellocation);
		// On close panel click
		$(document).on("click","#dyslexiefontSwitch,[data-type='closePanel']", function() {
			if ($("#dyslexiefontPanel").hasClass("panelClosed")) { $("#dyslexiefontPanel").removeClass("panelClosed"); } else { $("#dyslexiefontPanel").addClass("panelClosed"); }
		});

		// check cookies and setup accordingly
		if(typeof $.cookie('dyslexiefont') != 'undefined') {
			setupDyslexiefont(true);
			window.dyslexiefont = true;
			window.dyslexiefont_free_type = $.cookie('dyslexiefont_free_type');
		} else {
			setupDyslexiefont(false);
			window.dyslexiefont = false;
		}

		/* MAIN SETTINGS (taken from plugin settings) */
		if (typeof $.cookie('dyslexiefont_free_type') == 'undefined') { 
			$("[data-dftype='off']").addClass("dfActive");
			$("#df_fontsize").addClass("df_disabled");
			$("#df_colorselect").addClass("df_disabled");
			$("#df_linkcolorselect").addClass("df_disabled");
		} else {
			if ($.cookie('dyslexiefont_free_type') == "normal") { 
				$("[data-dftype='on']").addClass("dfActive"); 
			} else {
				$("[data-dftype='off']").addClass("dfActive"); 
			}
		}

		if (typeof $.cookie('dyslexiefont_free_fontsize') != 'undefined') { 
			window.fontsizeAdd = $.cookie('dyslexiefont_free_fontsize');
		} else {
			if (typeof window.df_default_fontSize != 'undefined' && window.df_default_fontSize != "") {
				window.fontsizeAdd = window.df_default_fontSize;
			} else {
				window.fontsizeAdd = 0;
			}
		}

		// panel : click enlarge font size
		$(document).on("click","#dyslexiefontPanel .settingsButton[data-type='fontSizeIncrease']", function() { 
			if (window.dyslexiefont == true) {
				if (window.fontsizeAdd < 5) {
					$(".dyslexiefont").each(function() {
						var oldfontSize = parseInt($(this).css("font-size"));
						var newfontSize = oldfontSize + 1 + "px";
						$(this).css({'font-size':newfontSize});
					});
					window.fontsizeAdd++;
					$.cookie('dyslexiefont_free_fontsize', window.fontsizeAdd, { expires: 7, path: '/; SameSite=Lax; Secure' });
				}
			}
		});

		// panel : click decrease font size
		$(document).on("click","#dyslexiefontPanel .settingsButton[data-type='fontSizeDecrease']", function() {
			if (window.fontsizeAdd > -3) { 
				if (window.dyslexiefont == true) {
					$(".dyslexiefont").each(function() {
						var oldfontSize = parseInt($(this).css("font-size"));
						var newfontSize = oldfontSize - 1 + "px";
						$(this).css({'font-size':newfontSize});
					});
					window.fontsizeAdd--;
					$.cookie('dyslexiefont_free_fontsize', window.fontsizeAdd, { expires: 7, path: '/; SameSite=Lax; Secure' });
				}
			}
		});

		// panel : turn on and off using on and off text instead of slider
		$(document).on("click","#df_turnOn", function() { if (window.dyslexiefont == false) { DyslexiefontTurnOn(); $("#DFtypeSlider").val("1"); } } );
		$(document).on("click","#df_turnOff", function() { if (window.dyslexiefont == true) { DyslexiefontTurnOff(); $("#DFtypeSlider").val("0"); } } );

		/* RANGE SLIDERS */
		var TypeSlider = document.getElementById("DFtypeSlider");
		var ColorSlider = document.getElementById("DFcolorSlider");
		var LinkColorSlider = document.getElementById("DFlinkcolorSlider");

		if (df_detectIE()) {
			// sliders in IE
			TypeSlider.onchange = function() {
				if (this.value == 1) {
					DyslexiefontTurnOn();
				} else {
					DyslexiefontTurnOff();
				}
			} 

			ColorSlider.onchange = function() {
				$(".dyslexiefont:not(a)").css("color","");
				var contentColor = getFontColorHex(this.value);
				$(".dyslexiefont:not(a)").css("color",contentColor);

				// make font color important
				df_makeFontImportant();
				// -- make font color important

				$.cookie('dyslexiefont_free_color', this.value, { expires: 7, path: '/; SameSite=Lax; Secure' })
			} 

			LinkColorSlider.onchange = function() {
				$(".dyslexiefont a").css("color","");
				var linkcolor = getFontColorHex(this.value);
				$(".dyslexiefont a").css("color",linkcolor);

				// make font color important
				df_makeFontImportant();
				// -- make font color important

				$.cookie('dyslexiefont_free_linkcolor', this.value, { expires: 7, path: '/; SameSite=Lax; Secure' })
			} 
		} else {
			// sliders in anything but IE
			TypeSlider.oninput = function() {
				if (this.value == 1) {
					DyslexiefontTurnOn();
				} else {
					DyslexiefontTurnOff();
				}
			} 

			ColorSlider.oninput = function() {
				/* hex zoek */
				var contentColor = getFontColorHex(this.value);
				/* -- hex zoek */

				$(".dyslexiefont:not(a)").css("color",contentColor);

				// make font color important
				df_makeFontImportant();
				// -- make font color important

				$.cookie('dyslexiefont_free_color', this.value, { expires: 7, path: '/; SameSite=Lax; Secure' })
			} 

			LinkColorSlider.oninput = function() {
				/* hex zoek */
				var linkcolor = getFontColorHex(this.value);
				/* -- hex zoek */

				$(".dyslexiefont a").css("color",linkcolor);

				// make font color important
				df_makeFontImportant();
				// -- make font color important

				$.cookie('dyslexiefont_free_linkcolor', this.value, { expires: 7, path: '/; SameSite=Lax; Secure' })
			} 
		}
		
		// panel : revert to original colors
		$(document).on("click","[data-type='revertColor']",function() {
			if (window.dyslexiefont == true) {
				$(".dyslexiefont:not(a)").css("color",dyslexiefont_free_settings.df_fontcolor);
				$("#DFcolorSlider").val("180");
				$.cookie('dyslexiefont_free_color', dyslexiefont_free_settings.df_fontcolor, { expires: -1, path: '/; SameSite=Lax; Secure' });
			}
		});

		$(document).on("click","[data-type='revertLinkColor']",function() {
			if (window.dyslexiefont == true) {
				$(".dyslexiefont a").css("color",dyslexiefont_free_settings.df_linkcolor);
				$("#DFlinkcolorSlider").val("180");
				$.cookie('dyslexiefont_free_linkcolor', dyslexiefont_free_settings.df_linkcolor, { expires: -1, path: '/; SameSite=Lax; Secure' });
			}
		});

		// panel : revert to original font size
		$(document).on("click","[data-type='revertFontsize']",function() {
			if (window.dyslexiefont == true) {
				window.fontsizeAdd = 0;
				$.cookie('dyslexiefont_free_fontsize', '0', { expires: 7, path: '/; SameSite=Lax; Secure' })
				$(".dyslexiefont").css("font-size","");
			}
		});
	});

	function DyslexiefontTurnOn() {
		// globalized script for turning ON plugin functionality
		$("[data-dftype]").removeClass("dfActive");
		$(".slidecontainer.toggleSwitch #DFOff").removeClass("dfActive");

		window.dyslexiefont_free_type = "normal";
		$.cookie('dyslexiefont_free_type', 'normal', { expires: 7, path: '/; SameSite=Lax; Secure' }); 
		$("[data-dftype='on']").addClass("dfActive"); 
		$.cookie('dyslexiefont', 'switchedon', { expires: 7, path: '/; SameSite=Lax; Secure' });
		window.dyslexiefont = true;
		setupDyslexiefont(true);
		$(".df_disabled").removeClass("df_disabled");
		$("#DFcolorSlider").removeAttr("disabled");
		$("#DFlinkcolorSlider").removeAttr("disabled");
	}

	function DyslexiefontTurnOff() {
		// globalized script for turning OFF plugin functionality
		$("[data-dftype]").removeClass("dfActive");
		$(".slidecontainer.toggleSwitch #DFOff").removeClass("dfActive");

		$.cookie('dyslexiefont_free_type', '', { expires: -1, path: '/; SameSite=Lax; Secure' });
		$.cookie('dyslexiefont', '', { expires: -1, path: '/; SameSite=Lax; Secure' });
		window.dyslexiefont = false;
		$("[data-dftype='off']").addClass("dfActive"); 
		setupDyslexiefont(false);
		$("#df_fontsize").addClass("df_disabled");
		$("#df_colorselect").addClass("df_disabled");
		$("#df_linkcolorselect").addClass("df_disabled");
		$("#DFcolorSlider").attr("disabled","disabled");
		$("#DFlinkcolorSlider").attr("disabled","disabled");
	}

	function setupDyslexiefont(state) {
		// main script for setting up the loaded URL with the font settings

		$("div,article,h1,h2,h3,h4,h5,p,span,b,i,a,em").each(function() {
			$(this).css("font-size",$(this).css("font-size"));
		});
		if (state == true) {
			// add all styling when font is turned ON

			// get options	
			window.df_default_fontSize = dyslexiefont_free_settings.df_fontsize;
			window.df_default_fontColor = dyslexiefont_free_settings.df_fontcolor;
			window.df_default_linkColor = dyslexiefont_free_settings.df_linkcolor;
			window.df_default_includeElements = dyslexiefont_free_settings.df_include_elements;
			window.df_default_excludeElements = dyslexiefont_free_settings.df_exclude_elements;
			window.df_default_dfLink = dyslexiefont_free_settings.df_dflink;
			window.cookielocation = dyslexiefont_free_settings.df_cookielocation;

			// standard element : div,article,h1,h2,h3,h4,h5,p,span,b,i,a,em
			var standardElements = ["div","article","h1","h2","h3","h4","h5","p","span","b","i","a","em"];

			// exclude elements and classes
			var exclude_elements = window.df_default_excludeElements.split(",");
			$(exclude_elements).each(function(i,e) {
				standardElements = $.grep(standardElements, function(value) {
				  return value != e;
				});
			});
			window.elemstring = "";
			$(standardElements).each(function(i,e) {
				window.elemstring = elemstring+","+e;
			});
			window.elemstring = window.elemstring.replace(/^,[ ]?|,$/g,'');

			// include elements and classes
			var include_elements = window.df_default_includeElements.split(",");
			
			$(include_elements).each(function(i,e) {
				if (e[0] == ".") { 
					standardElements.push(e); 
				} else {
					standardElements.push(e); 
				}
			});
			
			window.elemstring = "";
			$(standardElements).each(function(i,e) {
				window.elemstring = elemstring+","+e;
			});
			window.elemstring = window.elemstring.replace(/^,[ ]?|,$/g,'');
			// -- get options

			$("#dyslexiefontPanel .fontSwitch").addClass("SwitchedOn");
			window.dyslexiefont = true;

			$(window.elemstring).each(function() {
				if (!$(this).hasClass("fa") && !$(this).hasClass("fas") && !$(this).hasClass("far") && !$(this).hasClass("fal") && !$(this).hasClass("fad") && !$(this).hasClass("fab")) {
					$(this).addClass("dyslexiefont");
				}
			});

			if (window.df_fonttype == "dyslexiefontkids") {
				// if font is kids version
				if (!df_detectIE()) {
					$(".dyslexiefont").addClass("dyslexiefontkids");
				}
			} 

			$(exclude_elements).each(function(i,e) {
				$(e).removeClass("dyslexiefont");
				$(e).removeClass("dyslexiefontkids");
				$(e).find("div,article,h1,h2,h3,h4,h5,p,span,b,i,a,em").removeClass("dyslexiefont");
				$(e).find("div,article,h1,h2,h3,h4,h5,p,span,b,i,a,em").removeClass("dyslexiefontkids");
			});

			/* revslider fix */
			$(".rev_slider").removeClass("dyslexiefont");
			$(".rev_slider").removeClass("dyslexiefontkids");
			$(".rev_slider").find("div,article,h1,h2,h3,h4,h5,p,span,b,i,a,em").removeClass("dyslexiefont");
			$(".rev_slider").find("div,article,h1,h2,h3,h4,h5,p,span,b,i,a,em").removeClass("dyslexiefontkids");
			$(".rev_slider").find("div,article,h1,h2,h3,h4,h5,p,span,b,i,a,em").css("font-family","Dyslexie Regular");		
			/* -- revslider fix */

			$("#wpadminbar, #dyslexiefontContainer, #dyslexiefontPanel").removeClass("dyslexiefont");
			$("#wpadminbar, #dyslexiefontContainer, #dyslexiefontPanel").removeClass("dyslexiefontkids");
			$("#wpadminbar, #dyslexiefontContainer, #dyslexiefontPanel").find(window.elemstring).removeClass("dyslexiefont");
			$("#wpadminbar, #dyslexiefontContainer, #dyslexiefontPanel").find(window.elemstring).removeClass("dyslexiefontkids");
			$("#wpadminbar, #dyslexiefontContainer, #dyslexiefontPanel").find(window.elemstring).removeAttr("data-stylebackup")

			if (typeof $.cookie('dyslexiefont_free_color') != 'undefined') { 
				/* hex zoek */
				var displaycolor = getFontColorHex($.cookie('dyslexiefont_free_color'));
				/* -- hex zoek */

				$(".dyslexiefont").css("color",displaycolor);
			} else {
				if ($.trim(dyslexiefont_free_settings.df_fontcolor) != "") {
					$(".dyslexiefont").css("color",dyslexiefont_free_settings.df_fontcolor);
				}
			}

			if (typeof $.cookie('dyslexiefont_free_linkcolor') != 'undefined') { 
				/* hex zoek */
				var linkcolor = getFontColorHex($.cookie('dyslexiefont_free_linkcolor'));
				/* -- hex zoek */

				$(".dyslexiefont a").css("color",linkcolor);
			} else {
				if ($.trim(dyslexiefont_free_settings.df_linkcolor) != "") {
					$(".dyslexiefont a").css("color",dyslexiefont_free_settings.df_linkcolor);
				}
			}

			// dynamically scale font sizes
			df_setSizeFont();

			// make font color important
			df_makeFontImportant();
		} else {
			// remove all styling when font is turned OFF
			$("#dyslexiefontPanel .fontSwitch").removeClass("SwitchedOn");
			window.dyslexiefont = false;
			$(".dyslexiefont").css("font-size","");
			$(".dyslexiefont").css("line-height","");
			$(".dyslexiefont").css("letter-spacing","");
			$(".dyslexiefont").css("color","");

			// restore original style attribute saved by the function "df_backupStyle"
			if (!$(this).hasClass("rev_slider_wrapper") && !$(this).hasClass("rev_slider") && !$(this).parents().hasClass("rev_slider_wrapper")) {
				df_restoreStyle();
			}
			$(".rev_slider").find("div,article,h1,h2,h3,h4,h5,p,span,b,i,a,em").css("font-family","");	
			// -- restore original style attribute

			$("div,article,h1,h2,h3,h4,h5,p,span,b,i,a,em").removeClass("dyslexiefontkids");
			$("div,article,h1,h2,h3,h4,h5,p,span,b,i,a,em").removeClass("dyslexiefont");
		}
	}

	function df_backupStyle() {
		// backup original style attribute
		$("window.elemstring").each(function() {
			if ($(this).attr("style") != "" && !$(this).hasClass("rev_slider_wrapper") && !$(this).hasClass("rev_slider") && !$(this).parents().hasClass("rev_slider")) {
				$(this).data("stylebackup",$(this).attr("style"));
			} 
		});
		$(".rev_slider_wrapper,.rev_slider").find("div,article,h1,h2,h3,h4,h5,p,span,b,i,a,em").removeAttr("stylebackup");	
	}

	function df_restoreStyle() {
		// restore all original style saved by function "df_backupStyle"
		$(".dyslexiefont").each(function() {
			if ($(this).data("stylebackup") && $(this).data("stylebackup") != "") {
				$(this).attr("style",$(this).data("stylebackup"));
				$(this).removeAttr("data-stylebackup");
			}
			if ($(this).attr("class") == "") { $(this).removeAttr("class"); }
			if ($(this).attr("style") == "") { $(this).removeAttr("style"); }
		});
	}

	function df_setSizeFont() {
		// dynamically scale all elements font sizes
		if (parseInt($.cookie('dyslexiefont_free_fontsize')) > 0) {
			$(".dyslexiefont").each(function() {
				var oldfontSize = parseInt($(this).css("font-size"));
				var newfontSize = (oldfontSize + parseInt($.cookie('dyslexiefont_free_fontsize'))) + "px";
				$(this).css({'font-size':newfontSize});
			});
		} 

		if (parseInt($.cookie('dyslexiefont_free_fontsize')) < 0) {
			$(".dyslexiefont").each(function() {
				var oldfontSize = parseInt($(this).css("font-size"));
				var newfontSize = (oldfontSize + parseInt($.cookie('dyslexiefont_free_fontsize'))) + "px";
				$(this).css({'font-size':newfontSize});
			});
		}
	}

	// --- GLOBAL FUNCTIONS --- //

	function df_makeFontImportant() {
		// fix for adding !important to inline styling since adding it to $'s .css function does not exist
		$(document).find(".dyslexiefont").each(function() {
			if (typeof $(this).attr("style") == 'undefined') {
				stylestringarray = new Array();
			} else {
				var stylestringarray = $(this).attr("style").split(";");
			}
			var newstylestring = "";
			$(stylestringarray).each(function(i,e) {
				if (e != "") {
					var styleattrarray = $.trim(e).split(":");
					if ($.trim(styleattrarray[0]) == "color") { 
						if (e.indexOf("!important") === -1) {
							e = e+" !important"; 
						}
						
					}
					newstylestring = newstylestring+e+";";
				}
			});
			$(this).attr("style",newstylestring);
		});
	}


	/* detect internet explorer */
	function df_detectIE() {
	    var ua = window.navigator.userAgent;

	    var msie = ua.indexOf('MSIE ');
	    if (msie > 0) {
	        // IE 10 or older => return version number
	        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
	    }

	    var trident = ua.indexOf('Trident/');
	    if (trident > 0) {
	        // IE 11 => return version number
	        var rv = ua.indexOf('rv:');
	        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
	    }

	    // other browser
	    return false;
	}

	function df_pickHex(color1, color2, weight) {
	    var p = weight;
	    var w = p * 2 - 1;
	    var w1 = (w/1+1) / 2;
	    var w2 = 1 - w1;
	    var rgb = [Math.round(color1[0] * w1 + color2[0] * w2),
	        Math.round(color1[1] * w1 + color2[1] * w2),
	        Math.round(color1[2] * w1 + color2[2] * w2)];
	    return rgb;
	}

	/* slider HEX vinden */
	function getFontColorHex(elemval) {
		window.sliderWidth = 150;
		window.gradient = [
		    [
		        20,
		        [255,255,255]
		    ],
		    [
		        40,
		        [133,207,242]
		    ],
		    [
		        130,
		        [26,159,223]
		    ],
		    [
		        220,
		        [10,81,156]
		    ],
		    [
		        250,
		        [25,67,145]
		    ],
		    [
		        280,
		        [14,118,62]
		    ],
		    [
		        350,
		        [223,19,33]
		    ],
		    [
		        360,
		        [29,29,26]
		    ]
		];

		var colorRange = [];
	    $.each(window.gradient, function( gindex, gvalue ) {
	        if(elemval<=gvalue[0]) {
	            colorRange = [gindex-1,gindex]
	            return false;
	        }
	    });
	    
	    //Get the two closest colors
	    if(typeof window.gradient[colorRange[0]] !== "undefined") { 
	    	var firstcolor = window.gradient[colorRange[0]][1];
		    var secondcolor = window.gradient[colorRange[1]][1];
		    
		    //Calculate ratio between the two closest colors
		    var firstcolor_x = sliderWidth*(window.gradient[colorRange[0]][0]/100);
		    var secondcolor_x = sliderWidth*(window.gradient[colorRange[1]][0]/100)-firstcolor_x;
		    var slider_x = sliderWidth*(elemval/100)-firstcolor_x;
		    var ratio = slider_x/secondcolor_x
		    
		    //Get the color with df_pickHex(thx, less.js's mix function!)
		    var result = df_pickHex( secondcolor,firstcolor, ratio );
		    var displaycolor = 'rgb('+result.join()+')';
		    return(displaycolor);
		}
	}
})(jQuery);