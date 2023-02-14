function MenuToggle()
{
	jQuery('.navigation').slideToggle('slow',false);
	
}
jQuery(window).resize(function()
{
    1056<jQuery(window).width()&&$(".navigation").removeAttr("style")
});
function show_popup(o)
{
	jQuery(o).fadeIn("slow"),jQuery(".under_popup").fadeIn("slow")
}
function close_popup(o)
{
	jQuery(o).fadeOut("slow"),jQuery(".under_popup").fadeOut("slow")
}