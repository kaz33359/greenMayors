/*
 *
 *		STYLE-SWITCHER.JS
 *
 */

$(document).ready(function() {
    
	var style_switch_content = ' \
		<h4>Change Theme Options</h4> \
		<a href="#"></a> \
		<br> \
		<h5>Change Color</h5> \
		<div class="colors clearfix"> \
			<a id="default" href="#" data-style="default"></a> \
			<a id="yellow" href="#" data-style="yellow"></a> \
			<a id="green" href="#" data-style="green"></a> \
			<a id="blue" href="#" data-style="blue"></a> \
		</div><!-- colors --> \
		<h5>Change Layout</h5> \
		<div class="layout clearfix"> \
			<a class="wide" href="#" data-style="wide"><img src="images/backgrounds/wide.png" alt="">Wide</a> \
			<a class="boxed" href="#" data-style="boxed"><img src="images/backgrounds/boxed.png" alt="">Boxed</a> \
		</div><!-- layout --> \
		<h5>Change Menu Style</h5> \
		<div class="menus clearfix"> \
			<a class="light btn btn-default" href="#" data-style="light">Light menu</a> \
			<a class="dark btn btn-default" href="#" data-style="dark">Dark menu</a> \
		</div><!-- menus --> \
		<h5>Change Pattern</h5> \
		<div class="patterns clearfix"> \
			<a class="pattern-1" href="#" data-style="pattern-1"></a> \
			<a class="pattern-2" href="#" data-style="pattern-2"></a> \
			<a class="pattern-3" href="#" data-style="pattern-3"></a> \
			<a class="pattern-4" href="#" data-style="pattern-4"></a> \
			<a class="pattern-5" href="#" data-style="pattern-5"></a> \
			<a class="pattern-6" href="#" data-style="pattern-6"></a> \
			<a class="pattern-7" href="#" data-style="pattern-7"></a> \
			<a class="pattern-8" href="#" data-style="pattern-8"></a> \
			<a class="pattern-9" href="#" data-style="pattern-9"></a> \
			<a class="pattern-10" href="#" data-style="pattern-10"></a> \
		</div><!-- pattern --> \
	\ ';
	
	$("#style-switcher").prepend(style_switch_content);
	
	$("#style-switcher > a").on("click", function(e) {
        
		e.preventDefault();
		$("#style-switcher").toggleClass("open");
		
    });
	
	
	var link = $('link[data-style="styles"]');
	var colors = $.cookie('colors'),
		layout = $.cookie('layout'),
		menus = $.cookie('menus'),		
		pattern = $.cookie('pattern');
		
	if (!($.cookie('colors'))) {
		
		$.cookie('colors', 'default', 365);
		colors = $.cookie('colors');
		$('#style-switcher .colors a[data-style="'+colors+'"]');
		
	} else {
		
		link.attr('href','assets/css/alternative-styles/' + colors + '.css');
		$('#style-switcher .colors a[data-style="'+colors+'"]');
		
	};

	if (!($.cookie('layout'))) {
		
		$.cookie('layout', 'wide', 365);
		layout = $.cookie('layout');
		$("body").addClass(layout);
		$('#style-switcher .layout a[data-style="wide"]');
		
	} else {
		
		if (layout=="boxed") {
			
			$("body").addClass(layout);
			$("body").removeClass("wide");
			
		} else { 
		
			$("body").addClass(layout);
			$("body").removeClass("boxed pattern-1 pattern-2 pattern-3 pattern-4 pattern-5 pattern-6 pattern-7 pattern-8 pattern-9 pattern-10");
			
		};
		
	};

	if ((layout =="boxed") && $.cookie('pattern')) {
		
		$("body").removeClass("pattern-1 pattern-2 pattern-3 pattern-4 pattern-5 pattern-6 pattern-7 pattern-8 pattern-9 pattern-10 wide");
		$("body").addClass(pattern); 
		
	} else { 
	
		if (layout =="boxed") {
			
			$("body").removeClass("pattern-1 pattern-2 pattern-3 pattern-4 pattern-5 pattern-6 pattern-7 pattern-8 pattern-9 pattern-10");
			
		} else {
			
			$("body").removeClass("pattern-1 pattern-2 pattern-3 pattern-4 pattern-5 pattern-6 pattern-7 pattern-8 pattern-9 pattern-10 boxed");
			
		}
		
	};

	if (!($.cookie('menus'))) {
		
		$.cookie('menus', 'light', 365);
		menus = $.cookie('menus');
		$(".menu").addClass(menus);
		$('#style-switcher .menus a[data-style="light"]');
		
	} else {
		
		if (menus=="dark") {
			
			$(".menu").addClass(menus);
			$(".menu").removeClass("light");
			
		} else { 
		
			$(".menu").addClass(menus);
			$(".menu").removeClass("dark");
			
		};
		
	};


	// CHANGE COLOR //
	$('#style-switcher .colors a').on('click',function(e) {
		
		var $this = $(this),
			colors = $this.data('style');
			
		e.preventDefault();
		
		link.attr('href', 'assets/css/alternative-styles/' + colors + '.css');
		$.cookie('colors', colors, 365);
				
	});

	// BOXED LAYOUT //
	$('#style-switcher .layout a.boxed').on('click',function(e) {
		
		e.preventDefault(); 
		
		$("body").addClass("boxed");
		$("body").removeClass("wide");
		$.cookie('layout', 'boxed', 365);
		
		if ($.cookie('pattern')) {
			
			var pattern = $.cookie('pattern');
			
			$("body").removeClass("pattern-1 pattern-2 pattern-3 pattern-4 pattern-5 pattern-6 pattern-7 pattern-8 pattern-9 pattern-10");
			$("body").addClass(pattern);
			
		}
		
		document.location.reload();
		
	});

	// WIDE LAYOUT
	$('#style-switcher .layout a.wide').on('click',function(e) {
		
		e.preventDefault(); 
		
		$("body").addClass("wide");
		$("body").removeClass("boxed pattern-1 pattern-2 pattern-3 pattern-4 pattern-5 pattern-6 pattern-7 pattern-8 pattern-9 pattern-10");
		$.cookie('layout', 'wide', 365);
		
		document.location.reload();
		
	});
	
	// CHANGE PATTERNS //
	$('#style-switcher .patterns a').on('click',function(e) {
		
		var $this = $(this),
			pattern = $this.data('style');
			
		e.preventDefault();
			 
		$("body").removeClass("pattern-1 pattern-2 pattern-3 pattern-4 pattern-5 pattern-6 pattern-7 pattern-8 pattern-9 pattern-10 wide");
		$("body").addClass(pattern);
		$("#style-switcher select").val("boxed");
		$.cookie('pattern', pattern, 365);
		
	});
	
	// DARK MENU //
	$('#style-switcher .menus a.dark').on('click',function(e) {
		
		e.preventDefault(); 
		
		$(".menu").addClass("dark");
		$(".menu").removeClass("light");
		$.cookie('menus', 'dark', 365);			
		
	});

	// LIGHT MENU
	$('#style-switcher .menus a.light').on('click',function(e) {
		
		e.preventDefault(); 
		
		$(".menu").addClass("light");
		$(".menu").removeClass("dark");
		$.cookie('menus', 'light', 365);
		
	});

});    	