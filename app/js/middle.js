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
        // getHistoryByDate(time);
        getCount(time);
    });

});

var bin_option = {
    backgroundColor: '#2c343c',

    title: {
        text: '饼图',
        left: 'center',
        top: 20,
        textStyle: {
            color: '#ccc'
        }
    },

    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series : [
        {
            name:'访问来源',
            type:'pie',
            radius : '55%',
            center: ['50%', '50%'],
            data:[],
            roseType: 'angle',
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {
                normal: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};






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
            console.log(data.data);

            var temp=data.data.slice(0,5);
            temp.forEach(function (e) {
                var obj={
                    value:e.num,
                    name:e.title
                };
                bin_option.series[0].data.push(obj);
            });
            bin_option.series[0].data.sort(function (a, b) { return a.value - b.value});
            var myChart = echarts.init(document.getElementById('main'));
            myChart.setOption(bin_option);
        },
        error:function (XMLHttpRequest, textStatus) {
            alert(XMLHttpRequest.status);
            alert(XMLHttpRequest.readyState);
            alert(textStatus);
        }
    });
};


