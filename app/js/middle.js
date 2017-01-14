var fetch=function(e) {
    console.log(e);
};


$(function () {
    $('#pay').mouseenter(function () {
        $('#zhifubao').css("display","block");
    });

    $('#pay').mouseout(function () {
        $('#zhifubao').css("display","none");
    });


    $('.dropdown-menu li').click(function () {
        $.ajax({
            type: "GET",
            url: "/history/range",
            data: {},
            dataType: "json",
            success: function(data){
                console.log(data);
            }
        });
    });
});
