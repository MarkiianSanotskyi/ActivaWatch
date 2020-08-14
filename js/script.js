$(function () {
    var catalog_tabsContainers = $('.catalog_tabs > div');
    catalog_tabsContainers.hide().filter(':first').show();
    $('.catalog_tabs ul.tab_nav a').click(function () {
        catalog_tabsContainers.hide();
        catalog_tabsContainers.filter(this.hash).show();
        $('.catalog_tabs ul.tab_nav li').removeClass('selected');
        $(this).parent('li').addClass('selected');
        return false;
    }).filter(':first').click();
/*FAQ*/    
	$('.faq-trigger').on('click', function(event){
		event.preventDefault();
		$(this).next('.faq-content').slideToggle(200).end().parent('div').toggleClass('content-visible');
	});
/*<FAQ*/  

	$('#category_list .display_mode a').click(function(){
		if(!$(this).hasClass('active')){
			$('#category_list .display_mode a').toggleClass('active');
			$('#category_list .cat_list').removeClass('in-grid').removeClass('in-line').addClass($(this).attr('rel'));
		}
	});
	
	$('#brands_box .display_mode a').click(function(){
		if(!$(this).hasClass('active')){
			$('#brands_box .display_mode a').toggleClass('active');
			$('#brands_box .brand_grid').removeClass('in-grid').removeClass('in-line').addClass($(this).attr('rel'));
		}
		$('.display_mode .abc').toggle();
		//if($('.display_mode .in-grid.active')){
		//$('.display_mode .in-grid.active').prev('.abc').hide();
		//}
		//if($('.display_mode .in-line').hasClass('active'))
		//{
		//$('.display_mode .in-line.active').prev('.abc').show();
		//alert('124124');
		//}
	});
	
	$('.review_slider .slider ul').jcarousel({
		wrap: 'circular',
		scroll: 1,
		auto: 5
    });	
	$('.map_box .slider').jcarousel({
		wrap: 'circular',
		vertical: 1,
		scroll: 1,
		auto: 5
    });	
    
	$('.team_slider ul').jcarousel({
		wrap: 'circular',
		scroll: 1
    });	
    
	$('#modal_callme .operators ul').jcarousel({
		wrap: 'circular',
		scroll: 1
    });	
    
    setTimeout(function timer() {
        $('.count_down').each(function(){
			var exp = $(this).data('exp').split("/");
			exp_y = exp[2];
			exp_m = exp[1];
			exp_d = exp[0];
			exp_time = exp[3].split(":");
			exp_h = exp_time[0];
			exp_i = exp_time[1];		
	
			timeend= new Date(exp_y, exp_m-1, exp_d, exp_h-1, exp_i);
			
		    today = new Date();
		    today = Math.floor((timeend-today)/1000);
		    tsec=today%60; today=Math.floor(today/60); if(tsec<10)tsec='0'+tsec;
		    tmin=today%60; today=Math.floor(today/60); if(tmin<10)tmin='0'+tmin;
		    thour=today%24; today=Math.floor(today/24);
		    $(this).find('.hour .digits').text(thour);
		    $(this).find('.min .digits').text(tmin);
		    $(this).find('.sec .digits').text(tsec);
		    
	    });
	    setTimeout(timer, 1000);
        
    }, 1000);
    
    
		$('a.callme, a.place_order,  a.login-form').click(function () {
			$("#modal_callme").fadeIn().css('top',($('body').scrollTop() || $('html').scrollTop()) +50);
			$("#modal_overlay").show();
		});	 
		
		
		$('.modal a.close, #modal_overlay ').click(function () {
			$(".modal").hide();
			$("#modal_overlay ").fadeOut();
		});
	$("#choose-city").click(function(){
		if($(this).hasClass('open')){
			$(this).removeClass('open');
			$("#choose-city-container").removeClass('open');
		} else {
			$(this).addClass('open');
			$("#choose-city-container").addClass('open');
			$("#sub-nav").removeClass('open');
		}
	});
	$("#choose-city-container li a").click(function(){
		$("#choose-city-container li").removeClass('active');
		$(this).parent('li').addClass('active');
		$("#choose-city").click().text($(this).text());
		return false;
	});
	
	$(".how_paine li a").click(function(){
		$(".how_paine li").removeClass('active');
		$(this).parent('li').addClass('active');		
		return false;
	});
	$(".how_deliver li a").click(function(){
		$(".how_deliver li").removeClass('active');
		$(this).parent('li').addClass('active');		
		return false;
	});
	
	$("header .nav_top .cart a").click(function(){
		if($(this).hasClass('open')){
			$("header .nav_top .cart a").removeClass('open');
			$("#cart-panel").removeClass('open');
		} else {
			$(this).addClass('open');
			$("#cart-panel").addClass('open');
			$("#search-panel").removeClass('open');
			$("#choose-city").removeClass('open');
			$("header .nav_bottom .parent a").removeClass('open');
			$("#nav-brand").removeClass('open');
			$("#choose-city-container").removeClass('open');
			$("#sub-nav").removeClass('open');
			$("#sub-nav .wrapper").html('');
			$("#info-nav").removeClass('open');
		}
		return false;
	});
	$("header .nav_top .search a").click(function(){
		if($(this).hasClass('open')){
			$("header .nav_top .search a").removeClass('open');
			$("#search-panel").removeClass('open');
		} else {
			$(this).addClass('open');
			$("#search-panel").addClass('open');
			$("#choose-city").removeClass('open');
			$("header .nav_bottom .parent a").removeClass('open');
			$("#nav-brand").removeClass('open');
			$("#choose-city-container").removeClass('open');
			$("#sub-nav").removeClass('open');
			$("#sub-nav .wrapper").html('');
			$("#info-nav").removeClass('open');
			$("header .nav_top .cart a").removeClass('open');
			$("#cart-panel").removeClass('open');
		}
		return false;
	});
	$("header .nav_bottom .parent a").click(function(){
		if($(this).hasClass('open')){
			$("header .nav_bottom .parent a").removeClass('open');
			$("#sub-nav").removeClass('open');
			$("#sub-nav .wrapper").html('');
		} else {
			$("#info-nav").removeClass('open');
			$("header .nav_top .search a").removeClass('open');
			$("#search-panel").removeClass('open');
			$("header .nav_bottom .parent a").removeClass('open');
			$("#choose-city").removeClass('open');
			$("#info-nav-opener").removeClass('open');
			$("#choose-city-container").removeClass('open');
			$("#info-nav").removeClass('open');
			$(this).addClass('open');
			$("#sub-nav .wrapper").html($(this).siblings('div').html());
			$("#sub-nav").addClass('open');
			$("header .nav_top .cart a").removeClass('open');
			$("#cart-panel").removeClass('open');
		}
		return false;
	});
	$("#info-nav-opener").click(function(){
		if($(this).hasClass('open')){
			$(this).removeClass('open');
			$("#info-nav").removeClass('open');
		} else {
			$("header .nav_top .search a").removeClass('open');
			$("#search-panel").removeClass('open');
			$("#choose-city").removeClass('open');
			$("header .nav_bottom .parent a").removeClass('open');
			$("#nav-brand").removeClass('open');
			$("#choose-city-container").removeClass('open');
			$("#sub-nav").removeClass('open');
			$("#sub-nav .wrapper").html('');
			$(this).addClass('open');
			$("#info-nav").addClass('open');
			$("header .nav_top .cart a").removeClass('open');
			$("#cart-panel").removeClass('open');
		}
		return false;
	});
	
	$("#sub-nav-opener").click(function(){
		if($(this).hasClass('open')){
			$(this).removeClass('open');
			$("header .nav_bottom").removeClass('next_line');
		} else {
			$(this).addClass('open');
			$("#sub-nav").removeClass('open');
			$("header .nav_bottom .parent a").removeClass('open');
			$("#sub-nav .wrapper").html('');
			$("header .nav_bottom").addClass('next_line');
		}
		return false;
	});
	
	/*$("section.contact_box li").click(function(){
		if(!$(this).hasClass('open')){
			$("section.contact_box li").removeClass('open');
			$(this).addClass('open');
		}
	});*/
	if($('#vmap').length){
		$('#vmap').vectorMap({
			map: 'russia_en',
			backgroundColor: 'transparent',
			borderColor: '#ffffff',
			borderOpacity: 1,
			borderWidth: 1.2,
			color: '#b8b8b8',
			enableZoom: false,
			hoverColor: '#48c5f3',
			hoverOpacity: null,
			normalizeFunction: 'polynomial',
			//scaleColors: ['#b6d6ff', '#005ace'],
			selectedColor: '',
			selectedRegion: null,
			showTooltip: true,
		});	
	}
$('.filter').click(function () {  
     if($('#filter_content').hasClass('open')){
			$('#filter_content').removeClass('open');			
		}
		else
		{
        $('#filter_content').addClass('open');}
        return false;
    })
	
	$('#show_promo').click(function () {  
	$('#zakaz_offer').removeClass('open');
     if($('#promo').hasClass('open')){
			$('#promo').removeClass('open');			
		}
		else
		{
        $('#promo').addClass('open');}
        return false;
    })
	
	$('#buscket_add_zak').click(function () {  
	$('#promo').removeClass('open');
     if($('#zakaz_offer').hasClass('open')){
			$('#zakaz_offer').removeClass('open');			
		}
		else
		{
        $('#zakaz_offer').addClass('open');}
        return false;
    })
	
	$('.close_filter').click(function () {      
			$('#filter_content').removeClass('open');			
		
        return false;
    })
	

	$(".invicta_arrow_right").click(function(){ // при клике на правую кнопку запускаем следующую функцию:
		$(".h-carousel-items").animate({left: "-112px"}, 200); // производим анимацию: блок с набором картинок уедет влево на 222 пикселя (это ширина одного прокручиваемого элемента) за 200 милисекунд.
		setTimeout(function () { // устанавливаем задержку времени перед выполнением следующих функций. Задержка нужна, т.к. эти ффункции должны запуститься только после завершения анимации.
			$(".invicta_slider_content .h-carousel-items .b-carousel-block").eq(0).clone().appendTo(".h-carousel-items"); // выбираем первый элемент, создаём его копию и помещаем в конец карусели
			$(".h-carousel-items .b-carousel-block").eq(0).remove(); // удаляем первый элемент карусели		
			$(".h-carousel-items").css({"left":"0px"}); // возвращаем исходное смещение набора набора элементов карусели
		}, 300);
	});
	
	$(".invicta_arrow_left").click(function(){ // при клике на левую кнопку выполняем следующую функцию:		
		$(".h-carousel-items .b-carousel-block").eq(-1).clone().prependTo(".h-carousel-items"); // выбираем последний элемент набора, создаём его копию и помещаем в начало набора	
		$(".h-carousel-items").css({"left":"-112px"}); // устанавливаем смещение набора -222px		
		$(".h-carousel-items").animate({left: "0px"}, 200); // за 200 милисекунд набор элементов плавно переместится в исходную нулевую точку
		$(".h-carousel-items .b-carousel-block").eq(-1).remove(); // выбираем последний элемент карусели и удаляем его
	});
	

	
	
	

	
	



jQuery(document).ready(function(){

jQuery(".niceCheck").mousedown(
/* при клике на чекбоксе меняем его вид и значение */
function() {

     changeCheck(jQuery(this));
     
});



jQuery(".niceCheck").each(
/* при загрузке страницы нужно проверить какое значение имеет чекбокс и в соответствии с ним выставить вид */
function() {
     
     changeCheckStart(jQuery(this));
     
});

                                        });

function changeCheck(el)
/* 
	функция смены вида и значения чекбокса
	el - span контейнер дял обычного чекбокса
	input - чекбокс
*/
{
     var el = el,
          input = el.find("input").eq(0);
   	 if(!input.attr("checked")) {
		el.css("background-position","left bottom");	
		input.attr("checked", true)
	} else {
		el.css("background-position","left top");	
		input.attr("checked", false)
	}
     return true;
}

function changeCheckStart(el)
/* 
	если установлен атрибут checked, меняем вид чекбокса
*/
{
var el = el,
		input = el.find("input").eq(0);
      if(input.attr("checked")) {
		el.css("background-position","left bottom");	
		}
     return true;
}


		
		
	
	$('.filter_content_main_part').click(function(){
	$('.select #drop').slideUp('fast');
	});
	$('.color').click(function(){
	$('.select #drop').slideUp('fast');
	});
	
	$('.slct').click(function(){
		/* Заносим выпадающий список в переменную */
		var dropBlock = $(this).parent().find('#drop');
		$('.select #drop').slideUp('fast');
		/* Делаем проверку: Если выпадающий блок скрыт то делаем его видимым*/
		if( dropBlock.is(':hidden') ) {
			dropBlock.slideDown('fast');
			
			/* Выделяем ссылку открывающую select */
			$(this).addClass('active');
			
			/* Работаем с событием клика по элементам выпадающего списка */
			//$('#brands_box nav ul#drop').find('li').click(function(){
				$(".select > ul li").live("click",function(){
				/* Заносим в переменную HTML код элемента 
				списка по которому кликнули */
				//var selectResult = $(this).html();
				
				/* Находим наш скрытый инпут и передаем в него 
				значение из переменной selectResult */
				
				//$(this).parent().parent().find('input').val(selectResult);
				$(this).parents('.select').find('a').text($(this).text());
				/* Передаем значение переменной selectResult в ссылку которая 
				открывает наш выпадающий список и удаляем активность */
				//$('.slct').removeClass('active').html(selectResult);
				$(this).removeClass('active');
				/* Скрываем выпадающий блок */
				dropBlock.slideUp('fast');
			});
			
		/* Продолжаем проверку: Если выпадающий блок не скрыт то скрываем его */
		} else {
			$(this).removeClass('active');
			dropBlock.slideUp();
		}
		
		/* Предотвращаем обычное поведение ссылки при клике */
		return false;
	});
	
	
	
	
	
	$('.add_review_btn_inner').click(function () {  
     if($('#form_otziv').hasClass('open')){
			$('#form_otziv').removeClass('open');			
		}
		else
		{
        $('#form_otziv').addClass('open');}
        return false;
    })
	
	
	
	$('#all_xara').click(function(){	
		
		
		/* Делаем проверку: Если выпадающий блок скрыт то делаем его видимым*/
		if( $('.list_construction').is(':hidden') ) {
			$('.list_construction').slideDown();
		} else {			
			$('.list_construction').slideUp();
		}
		
		/* Предотвращаем обычное поведение ссылки при клике */
		return false;
	});
	$('.close_list').click(function(){
					
			$('.list_construction').slideUp();		
		return false;
	});
	$('#ans2').click(function(){	
		
		
		/* Делаем проверку: Если выпадающий блок скрыт то делаем его видимым*/
		if( $('#form_otziv2').is(':hidden') ) {
			$('#form_otziv2').slideDown();
		} else {			
			$('#form_otziv2').slideUp();
		}
		
		/* Предотвращаем обычное поведение ссылки при клике */
		return false;
	});
	
	$('#ans1').click(function(){	
		
		
		/* Делаем проверку: Если выпадающий блок скрыт то делаем его видимым*/
		if( $('#form_otziv1').is(':hidden') ) {
			$('#form_otziv1').slideDown();
		} else {			
			$('#form_otziv1').slideUp();
		}
		
		/* Предотвращаем обычное поведение ссылки при клике */
		return false;
	});
	$('#ans3').click(function(){	
		
		
		/* Делаем проверку: Если выпадающий блок скрыт то делаем его видимым*/
		if( $('#form_otziv3').is(':hidden') ) {
			$('#form_otziv3').slideDown();
		} else {			
			$('#form_otziv3').slideUp();
		}
		
		/* Предотвращаем обычное поведение ссылки при клике */
		return false;
	});
	
	
	
	$('#create_ticket').click(function () {  
     if($('#form_otziv').hasClass('open')){
			$('#form_otziv').removeClass('open');			
		}
		else
		{
        $('#form_otziv').addClass('open');}
        return false;
    })
	
	
	
	
	$('.add_review_btn').click(function(){	
		
		
		/* Делаем проверку: Если выпадающий блок скрыт то делаем его видимым*/
		if( $('.add_review_box').is(':hidden') ) {
			$('.add_review_box').slideDown();
		} else {			
			$('.add_review_box').slideUp();
		}
		
		/* Предотвращаем обычное поведение ссылки при клике */
		return false;
	});
	
	
	
	$('.color').click(function () { 	
        $('.color').removeClass('color_active');
		 $('.color').addClass('color');
		$(this).addClass('color_active');
        return false;
    })
	
	
	
	$('.color1').click(function () { 	
        $('.color1').removeClass('color_active');
		 $('.color1').addClass('color1');
		$(this).addClass('color_active');
        return false;
    })
	
	$('#add_review_btn_top').click(function(){	
		
		
		/* Делаем проверку: Если выпадающий блок скрыт то делаем его видимым*/
		if( $('#form_otziv').is(':hidden') ) {
			$('#form_otziv').slideDown();
		} else {			
			$('#form_otziv').slideUp();
		}
		
		/* Предотвращаем обычное поведение ссылки при клике */
		return false;
	});
	
	
	
	$('.nav_brand_inner ul li').click(function () { 	
        $('.nav_brand_inner ul li').removeClass('active_nav_brand_inner');		
		$(this).addClass('active_nav_brand_inner');
		$('.group_this_content').hide();
		var id = $(this).attr('rel');
		$('#nav_brand_inner_banner div[rel='+id+']').show();
        return false;
    })
	
	
	$('#delete_backet').click(function () {  
     $('.backet_group').css('display','none');
	 $(".mini_title_mini span").html("0");
    })
	
	
	$('.counter .counter1').click(function(){
	var vv = Number($(this).parents('.counter').find('.digit_counter').text());
	//alert(vv);
	$(this).parents('.counter').find('.digit_counter').text(vv+1);
	});
	
	$('.counter .counter2').click(function(){
	var vv = Number($(this).parents('.counter').find('.digit_counter').text());
	//alert(vv);
	if(vv!=1)
	$(this).parents('.counter').find('.digit_counter').text(vv-1);
	});
	
});


(function($) {
  var cache = [];
  $.preLoadImages = function() {
    var args_len = arguments.length;
    for (var i = args_len; i--;) {
      var cacheImage = document.createElement('img');
      cacheImage.src = arguments[i];
      cache.push(cacheImage);
    }
  }
})(jQuery)
 
jQuery.preLoadImages("images/header_nav_top_consult-active.png", "images/header_nav_top_deliv-active.png", "images/header_nav_top_info-active.png",
 "images/header_nav_top_search-active.png", "images/header_nav_bottom_menu-active.png",
"images/header_nav_bottom_parent.png","images/header_nav_bottom_parent-2.png", "images/sub_nav_cart.png", "images/ico-login-area-white.png");
 





