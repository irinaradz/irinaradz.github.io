

$(document).ready(function() {

	

$('.menu , .linee').on('click', function() {

  $('.menu').toggleClass('over')

  $('.linea1').toggleClass('overL1')

  $('.linea2').toggleClass('overL2')

  $('.linea3').toggleClass('overL3')

  $('.main-menu').toggleClass('overmain')

  

});

$("html").niceScroll({cursorwidth: '8px',cursorcolor:"#222222" , cursorborder:"1px solid #FFF" , autohidemode: false, zindex: 9999 });

});
$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});

