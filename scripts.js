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

jQuery.fn.scrollTo = function (elem, speed) {
    $(this).animate({
        scrollTop: $(this).scrollTop() - $(this).offset().top + $(elem).offset().top
    }, speed == undefined ? 1000 : speed);
    return this;
};

$(".mainNav a").click(function (e) {
    var attr = $(this).attr("href");
    $(".contentBox").scrollTo(attr);
});
$(document).ready(function () {
    var path = window.location.hash;
    if (path) {
        $(".contentBox").scrollTo(path);
    }
});