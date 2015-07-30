$(document).ready(function() {
	$('.s2-tab li:nth-child(2)').find('span').addClass('s2-show');
	$('.s2-tab li').click(function() {
		$(this).find('span').addClass('s2-show');
		$(this).siblings().find('span').removeClass('s2-show');
		var tab1 = $(this).attr('data-title');
		$('#'+tab1).show().siblings().hide();


	}); //s2
$('.s3-tab li:nth-child(2)').find('span').addClass('s2-show');
	$('.s3-tab li').click(function() {
		$(this).find('span').addClass('s2-show');
		$(this).siblings().find('span').removeClass('s2-show');
		var tab1 = $(this).attr('data-title');
		$('#'+tab1).show().siblings().hide();


	}); //s3
$('.s4-tab li:nth-child(2)').find('span').addClass('s2-show');
	$('.s4-tab li').click(function() {
		$(this).find('span').addClass('s2-show');
		$(this).siblings().find('span').removeClass('s2-show');
		var tab1 = $(this).attr('data-title');
		$('#'+tab1).show().siblings().hide();


	}); //s3
	$('.s4-tab li:nth-child(2)').find('span').addClass('s2-show');
	$('.s6-tab li a').click(function() {
		$(this).find('img').attr('src','img/section6/btn2.png');
		$(this).parent().siblings().find('a img').attr('src','img/section6/btn1.png');
		var tab1 = $(this).attr('data-title');
		$('#'+tab1).show().siblings().hide();


	}); //s3
	// $('#s3-1').show()
	$('.nav li a').click(function() {

		$(this).addClass('nav-active');
		$(this).parent().siblings().find('a').removeClass('nav-active');
		var tab2 = $(this).attr('data-title');
		$('#'+tab2).show().siblings().hide();
	}); //s3

	$('.s4 li').click(function() {
		$(this).addClass('s4-t').siblings().removeClass('s4-t');
		var tab3 = $(this).attr('data-title');
		$('#'+tab3).show().siblings().hide();
	}); //s4

	// $('.slick-dots li:first-child').append('<img src="img/section1/car1.png" class="car car1">');
	// $('.slick-dots li:nth-child(2)').append('<img src="img/section1/car2.png" class="car car2" style="display:none">');
	// $('.slick-dots li:nth-child(3)').append('<img src="img/section1/car3.png" class="car car3" style="display:none">');
	// $('.slick-dots li:nth-child(4)').append('<img src="img/section1/car4.png" class="car car4" style="display:none">');
	// $('.slick-dots li:nth-child(5)').append('<img src="img/section1/car5.png" class="car car5" style="display:none">');
	// $('.slick-dots li').click(function() {
	// 	// $(this).parent().addClass('slick-active').siblings().removeClass('slick-active');
	// 	// $('.slick-slide').addClass('slick-active');
	// 	var num = $(this).find('button').text();
	// 	$(this).find('img').show();
	// 	$(this).siblings().find('img').hide();
	// 	// $('#a'+ car).show().siblings().hide();	
	// });
	
});

// function tab(obj,class,attr) {
// 	obj.click(function() {
// 		$(this).addClass(class).siblings().removeClass(class);
// 		var tab = $(this).attr(attr);
// 		$('#'+tab).show().siblings().hide();
// 	})
// }