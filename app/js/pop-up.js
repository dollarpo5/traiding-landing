var win_top = 0;
$(document).ready(function(){
	
	$('#list').click(function(){
		popup_open('#myPopup');
	})
	
	popup_open('#myPopup');
	
	
	$(document).on('click', '.popup .close, .overflow', function(){
		popup_close()
		return false;
	})
	
})
function popup_open(selector){
	if (selector.length){
		win_top = $(window).scrollTop();
		$('#list').css({
			'position'	: 'fixed',
			'left'		: '0',
			'right'		: '0',
			'top'		: '0',
			'margin-top': '-'+win_top+'px' 
		})
		$('.overflow,'+selector).fadeIn();
	}
}
function popup_close(){
	$('.overflow, .popup').hide();
	$('#list').css({
		'position'	: 'static',
		'margin-top': '0px'
	})
	$(window).scrollTop(win_top);
}