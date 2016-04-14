new function() {

    var data = [
        { name: '重庆', value: 28846 },
        { name: '四川', value: 80418 },
        { name: '江苏', value: 78660 },
        { name: '辽宁', value: 43746 },
        { name: '安徽', value: 59501 },
        { name: '上海', value: 23019 },
        { name: '山东', value: 95793 },
        { name: '湖南', value: 65684 },
        { name: '浙江', value: 54427 },
        { name: '广西', value: 46027 },
        { name: '湖北', value: 57238 },
        { name: '北京', value: 19612 },
        { name: '贵州', value: 34746 },
        { name: '陕西', value: 37327 },
        { name: '天津', value: 12938 },
        { name: '吉林', value: 27462 },
        { name: '河南', value: 94024 },
        { name: '黑龙江', value: 38312 },
        { name: '河北', value: 71854 },
        { name: '甘肃', value: 25575 },
        { name: '福建', value: 36894 },
        { name: '海南', value: 8672 },
        { name: '云南', value: 45966 },
        { name: '江西', value: 44567 },
        { name: '山西', value: 35712 },
        { name: '内蒙古', value: 24706 },
        { name: '广东', value: 104303 },
        { name: '宁夏', value: 6301 },
        { name: '青海', value: 5627 },
        { name: '新疆', value: 21813 },
        { name: '西藏', value: 3002 }
    ]

    // 由data中的最大值，推算一个合适的值，作为map绘图的max值
    function generateMaxValue(data) {

        var array = data.map(function(item) {
            return item.value
        })

        var max = Math.max.apply(Math, array)
            // 本来max应该要再加工，算个合适的值，暂时不处理了，先直接用吧

        return max
    }

    function getMap() {
        var xmlhttp;
        var url = 'script/echarts/3.1.6/map/json/china.json'

        function loadXMLDoc(url) {
            if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp = new XMLHttpRequest();
            } else { // code for IE6, IE5
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    echarts.registerMap('china', xmlhttp.responseText);
                }
            };
            // xmlhttp.open("GET", url, true);
            xmlhttp.open("GET", url, false); // sync
            xmlhttp.send();
        }

        loadXMLDoc(url);
    }


    function renderMap() {

        // echarts.registerMap('china', chinaJson);

        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('canvas-stage'));

        // 指定图表的配置项和数据
        function randomData() {
            return Math.round(Math.random() * 1000);
        }

        var option = {
            // title: {
            //     text: 'iphone销量',
            //     subtext: '纯属虚构',
            //     left: 'center'
            // },
            tooltip: {
                trigger: 'item',
                formatter: function(params) {
                    // console.log(params)
                    // params.seriesName
                    var value = (params.value + '').split('.');
                    var left = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')
                    var right = value[1] ? '.' + value[1] : '';
                    var result = params.name + '：' + left + right + '万人'
                    return result
                }
            },
            // 左上角小图
            // legend: {
            //     orient: 'vertical',
            //     left: 'left',
            //     data: ['iphone3', 'iphone4', 'iphone5']
            // },
            // 左下角小图
            visualMap: {
                show: false,
                // 定义为连续型 viusalMap
                type: 'continuous',
                min: 0,
                max: generateMaxValue(data),
                // text:['High','Low'],
                realtime: false,
                calculable: true,
                color: ['orangered', 'yellow', 'lightskyblue']
            },
            // 右侧-保存为图片、数据视图等按钮
            // toolbox: {
            //     show: true,
            //     orient: 'vertical',
            //     left: 'right',
            //     top: 'center',
            //     feature: {
            //         dataView: { readOnly: false },
            //         restore: {},
            //         saveAsImage: {}
            //     }
            // },
            series: [{
                name: '总人口',
                type: 'map',
                mapType: 'china',
                roam: false,
                label: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                data: data
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }


    // run
    new function main() {
        getMap()
        renderMap()
    }

}
