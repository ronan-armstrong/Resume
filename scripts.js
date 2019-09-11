$(".navDrop").children("a").click(function(){
	
	if($(this).hasClass("activeDrop")){
		$(".activeDrop").siblings(".navDropBox").slideUp();
		$(".activeDrop").removeClass("activeDrop");
	}else{
		$(".activeDrop").siblings(".navDropBox").slideUp();
		$(".activeDrop").removeClass("activeDrop");
		$(this).siblings(".navDropBox").slideDown();
		$(this).addClass("activeDrop");
	}
	
});
$(".pullOutIcon").click(function(){
	$(".leftMenu").toggleClass("hiddenMenu");
	$(".contentBox").toggleClass("fullContent");
});