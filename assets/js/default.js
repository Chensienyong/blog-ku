$( document ).ready(function() {
	$(window).scroll(function() {
		var scrollValue = $(window).scrollTop();
		$("#cover-image").css("background-position", "50% "+ parseInt(-scrollValue/5) + "px");
		if ($(this).scrollTop() > $(this).height()) {
			$('#gtt').fadeIn();
		} else {
			$('#gtt').fadeOut();
		}
	});
	var sourceSwap = function () {
	    var $this = $(this);
	    var newSource = $this.data('alt-src');
	    $this.data('alt-src', $this.attr('src'));
	    $this.attr('src', newSource);
	}
	$('img[data-alt-src]').each(function() {
		new Image().src = $(this).data('alt-src'); 
    }).hover(sourceSwap, sourceSwap);
    $("a[href='#top']").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});
	$("a[href='#content']").click(function() {
		$("html, body").animate({ scrollTop: $("#content").offset().top }, "slow");
		return false;
	});
	$(".change-page-1").click(function() {
		$(".pt-wrapper").css('overflow','hidden');
		$(".change-page-1").css('display', 'none');
		$(".change-page-2").css('display', 'inline');
	});
	$(".change-page-2").click(function() {
		$(".pt-wrapper").css('overflow', 'visible');
		$(".change-page-1").css('display', 'inline');
		$(".change-page-2").css('display', 'none');
	});
});