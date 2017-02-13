// This is a JavaScript file
$(function() {
    $(".input").val("入力してください").css("color", "#CCC")
    .one("focus",function () {
        $(this).val("").css("color", "#000");
    });
});
$(function(){
    $(".modo").click(function(){
        window.location.href="/www/index0.html";
    });
});
$(function(){
    $("#tou").click(function(){
        window.location.href="/www/index2.html";
    });
});
$(function(){
    $("#ou").click(function(){
        window.location.href="/www/index0.html";
    });
});
$(function(){
    $("#susu").click(function(){
        window.location.href="/www/index3.html";
    });
});
jQuery(function($) {
$.fn.extend({
    randomdisplay : function(num) {
		return this.each(function() {
			var chn = $(this).children().hide().length;
			for(var i = 0; i < num && i < chn; i++) {
				var r = parseInt(Math.random() * (chn - i)) + i;
			$(this).children().eq(r).show().prependTo($(this));
			}
		});
	}
});
$(function(){
	$("[randomdisplay]").each(function() {
	$(this).randomdisplay($(this).attr("randomdisplay"));
	});
});
});
function getRumClr(){
    var clrArr = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
	var clr = '#';
	for(i=0; i < 6; i++){
		clr = clr + clrArr[Math.floor( Math.random()*16)];
	}
	return clr;
}
$(function(){
    jQuery('h1').css({'color':getRumClr()});
});