$("#Phone").click(function(){
	$("#info-phone").toggleClass("on");
});
$("#info-phone .phone-close").click(function(){
    $("#info-phone").removeClass("on");
});