/* SCROLL-FANCY (jQuery) */
var $animation_element = $(".scroll-fancy");
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = window_height + window_top_position;

  $.each($animation_element, function () {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = element_height + element_top_position;

    if (
      element_bottom_position >= window_top_position &&
      element_top_position <= window_bottom_position
    ) {
      $element.addClass("scrolled");
    } else {
      $element.removeClass("scrolled");
    }
  });
}

$window.on("scroll resize", check_if_in_view);
$window.trigger("scroll");
