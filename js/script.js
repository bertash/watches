$(document).ready(function(){
    $('.carousel_inner').slick({
        autoplay: true,
        autoplaySpeed: 2200,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/logo/chevrons/left.jpg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/logo/chevrons/right.png"></button>',
    });

    $('ul.catalogue_tabs').on('click', 'li:not(.catalogue_tab_active)', function() {
        $(this)
          .addClass('catalogue_tab_active').siblings().removeClass('catalogue_tab_active')
          .closest('div.container').find('div.catalogue_content').removeClass('catalogue_content_active').eq($(this).index()).addClass('catalogue_content_active');
    });
     function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalogue_item_content').eq(i).toggleClass('catalogue_item_content_active');
                $('.catalogue_item_list').eq(i).toggleClass('catalogue_item_list_active');
            })
        });
     };

     toggleSlide('.catalogue_item_link');
     toggleSlide('.catalogue_item_back');
});