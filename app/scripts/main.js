/* jshint devel:true */

(function ($) {
  'use strict';
  $(document).ready(function () {
    $.slidebars({
      scrollLock: true
    });

    $('.b-sub-menu').on('click', function () {
      var $this = $(this);
      //$this.toggleClass('expanded');
      $this.parent().toggleClass('expanded');
    });

    $('.b-sub-menu').on('click', '.b-sub-menu__link', function (event) {
      event.stopPropagation();
    });

  });
})(jQuery);
