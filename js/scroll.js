$(document).ready(function() {
	
	var winHeight = $(document).scrollTop();
 
    $(window).scroll(function() {
        var scrollY = $(document).scrollTop();// 获取垂直滚动的距离，即滚动了多少
 
        if (scrollY > 900){ //如果滚动距离大于550px则隐藏，否则删除隐藏类
            $('.nav').show();
        } 
        else {
            $('.nav').hide();
        }


        var scrollTop = $(document).scrollTop();
        var documentHeight = $(document).height();
        var windowHeight = $(window).height();
        var contentItems = $(".wrap").find(".w");
        var currentItem = "";

        if (scrollTop+windowHeight==documentHeight) {
            currentItem= "#" + contentItems.last().attr("id");
        }else{
            contentItems.each(function () {
                var contentItem = $(this);
                var offsetTop = contentItem.offset().top;
                if (scrollTop > offsetTop - 100) {//此处的200视具体情况自行设定，因为如果不减去一个数值，在刚好滚动到一个div的边缘时，菜单的选中状态会出错，比如，页面刚好滚动到第一个div的底部的时候，页面已经显示出第二个div，而菜单中还是第一个选项处于选中状态
                    currentItem = "#" + contentItem.attr("id");
                }
            });
        }
        if (currentItem != $(".nav").find(".nav-active").attr("href")) {
            $(".nav").find(".nav-active").removeClass("nav-active");
            $(".nav").find("[href=" + currentItem + "]").addClass("nav-active");
        }
 
     });
	
});