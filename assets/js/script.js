$( "#slider" ).slider({
		value: 1,
		min: 1,
		max: 3,
		step: 1
    }).each(function() {
		var opt = $(this).data().uiSlider.options;
		var values = ['LESS RELEVANT','RELEVENT','VERY RELEVANT'];
		var vals = opt.max - opt.min;
		for (var i = 0; i <= values.length-1; i++) {		
			var el = $('<label>'+values[i]+'</label>').css('left',(i/vals*80)+'%');		  
		$( "#slider" ).append(el);
		  
		} 
	});

	var imgUrls = [
		"'./assets/images/never.png'",
		"'./assets/images/occasionally.png'",
		"'./assets/images/4hours.png'",
		"'./assets/images/yearly.png'" ,
		"'./assets/images/never.png'"
	];

	for(var i=0;i<imgUrls.length;i++) {
		var str = "";
		str += "<div class='col'><img class='circle' src="+imgUrls[i]+"/></div>";
		$("#images_container").append(str);
	}

	$(document).ready(function(){
		$(".ui-widget-content").css("background-image", "url('./assets/images/bar.png')");
		$('#btn').click(function(){
			$( "#slider" ).slider({
				value: 1	   
			});

		});

		$(".circle").each(function(i){
			$(this).click(function(){
				$(this).effect( 'bounce');
			});
		});

	});