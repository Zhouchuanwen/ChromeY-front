$(function () {

    $('#pay').mouseenter(function () {
        $('#zhifubao').css("display","block");
    });

    $('#pay').mouseout(function () {
        $('#zhifubao').css("display","none");
    });

    $('.drop').change(function () {
        var time=$("#time  option:selected").attr("value");
        var type=$("#type  option:selected").attr("value");
        getHistoryByDate(time);
    });

});

var getToday=function () {
    $.ajax({
        type:"GET",
        url:"/history/today",
        dataType:"json",
        success:function (data) {
            console.log(data);
        },
        error:function (XMLHttpRequest, textStatus) {
            alert(XMLHttpRequest.status);
            alert(XMLHttpRequest.readyState);
            alert(textStatus);
        }
    });
};

var getHistoryByDate=function (state) {
    $.ajax({
        type:"GET",
        url:"/history/query",
        data:{state:state},
        dataType:"json",
        success:function (data) {
            console.log(data);
        },
        error:function (XMLHttpRequest, textStatus) {
            alert(XMLHttpRequest.status);
            alert(XMLHttpRequest.readyState);
            alert(textStatus);
        }
    });
};

var getRange=function () {
    $.ajax({
        type:"GET",
        url:"/history/range",
        dataType:"json",
        success:function (data) {
            console.log(data);
        },
        error:function (XMLHttpRequest, textStatus) {
            alert(XMLHttpRequest.status);
            alert(XMLHttpRequest.readyState);
            alert(textStatus);
        }
    });
};

var getCount=function (state) {
    $.ajax({
        type:"GET",
        url:"/history/count",
        data:{state:state},
        dataType:"json",
        success:function (data) {
            console.log(data);
        },
        error:function (XMLHttpRequest, textStatus) {
            alert(XMLHttpRequest.status);
            alert(XMLHttpRequest.readyState);
            alert(textStatus);
        }
    });
};