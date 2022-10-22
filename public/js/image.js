/*	gallery */
$(document).ready(function () {

    $(".filter-button").click(function () {
        var value = $(this).attr('data-filter');

        if (value == "all") {
            $('.filter').show('1000');
        }
        else {
            $(".filter").not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');

        }

        if ($(".filter-button").removeClass("active")) {
            $(this).removeClass("active");
        }
        $(this).addClass("active");
    });
});


$(document).ready(function(){
    var url = $("#1").attr('src');
    $("#myModalVideo1").on('hide.bs.modal', function(){
        $("#1").attr('src', '');
    });
    $("#myModalVideo1").on('show.bs.modal', function(){
        $("#1").attr('src', url);
    });
});