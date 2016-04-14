new function() {

    var data = [
        { name: '重庆', value: 2884 },
        { name: '四川', value: 8041 },
        { name: '江苏', value: 7866 },
        { name: '辽宁', value: 4374 },
        { name: '安徽', value: 5950 },
        { name: '上海', value: 2301 },
        { name: '山东', value: 9579 },
        { name: '湖南', value: 6568 },
        { name: '浙江', value: 5442 },
        { name: '广西', value: 4602 },
        { name: '湖北', value: 5723 },
        { name: '北京', value: 1961 },
        { name: '贵州', value: 3474 },
        { name: '陕西', value: 3732 },
        { name: '天津', value: 1293 },
        { name: '吉林', value: 2746 },
        { name: '河南', value: 9402 },
        { name: '黑龙江', value: 3831 },
        { name: '河北', value: 7185 },
        { name: '甘肃', value: 2557 },
        { name: '福建', value: 3689 },
        { name: '海南', value: 867 },
        { name: '云南', value: 4596 },
        { name: '江西', value: 4456 },
        { name: '山西', value: 3571 },
        { name: '内蒙古', value: 2470 },
        { name: '广东', value: 10430 },
        { name: '宁夏', value: 630 },
        { name: '青海', value: 562 },
        { name: '新疆', value: 2181 },
        { name: '西藏', value: 300 },
        { name: '香港', value: 709 },
        { name: '澳门', value: 55 },
        { name: '台湾', value: 2316 }
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
            title: {
                show: false,
                text: '中国各省市区人口统计(2010)',
                subtext: '',
                left: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: function(params) {
                    if (!params.name) return
                        // console.log(params)
                        // params.seriesName
                    var unit = '万'
                    if (params.value > 10000) {
                        unit = '亿'
                        params.value = params.value / 10000
                    }

                    var value = (params.value + '').split('.');
                    //var left = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')
                    var left = value[0]
                    var right = value[1] ? '.' + value[1] : '';
                    var result = params.name + '：' + left + right + unit
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
            toolbox: {
                show: false,
                // orient: 'vertical',
                // left: 'right',
                // top: 'center',
                // feature: {
                //     dataView: { readOnly: false },
                //     restore: {},
                //     saveAsImage: {}
                // }
            },
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
