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

$(".accordionPanel").children("a").click(function (e) {
    e.preventDefault();
    let isTrue = false;
    if ($(this).hasClass("activeAccordion")) {
        isTrue = true;
    }
    console.log($(this).parent().parent());
    $(this).parent().parent().find(".activeAccordion").siblings(".accordionContents").slideUp("fast");
    $(this).parent().parent().find(".activeAccordion").removeClass("activeAccordion");
    if (!isTrue) {
        $(this).addClass("activeAccordion");
        $(this).siblings(".accordionContents").slideDown("fast");
    }
    
})