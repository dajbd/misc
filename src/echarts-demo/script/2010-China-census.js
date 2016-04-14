new function() {

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
                trigger: 'item'
            },
            // 左上角小图
            // legend: {
            //     orient: 'vertical',
            //     left: 'left',
            //     data: ['iphone3', 'iphone4', 'iphone5']
            // },
            // 左下角小图
            // visualMap: {
            //     min: 0,
            //     max: 2500,
            //     left: 'left',
            //     top: 'bottom',
            //     text: ['高', '低'], // 文本，默认为数值文本
            //     calculable: true
            // },
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
                name: 'iphone3',
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
                data: [
                    { name: '北京', value: randomData() },
                    { name: '天津', value: randomData() },
                    { name: '上海', value: randomData() },
                    { name: '重庆', value: randomData() },
                    { name: '河北', value: randomData() },
                    { name: '河南', value: randomData() },
                    { name: '云南', value: randomData() },
                    { name: '辽宁', value: randomData() },
                    { name: '黑龙江', value: randomData() },
                    { name: '湖南', value: randomData() },
                    { name: '安徽', value: randomData() },
                    { name: '山东', value: randomData() },
                    { name: '新疆', value: randomData() },
                    { name: '江苏', value: randomData() },
                    { name: '浙江', value: randomData() },
                    { name: '江西', value: randomData() },
                    { name: '湖北', value: randomData() },
                    { name: '广西', value: randomData() },
                    { name: '甘肃', value: randomData() },
                    { name: '山西', value: randomData() },
                    { name: '内蒙古', value: randomData() },
                    { name: '陕西', value: randomData() },
                    { name: '吉林', value: randomData() },
                    { name: '福建', value: randomData() },
                    { name: '贵州', value: randomData() },
                    { name: '广东', value: randomData() },
                    { name: '青海', value: randomData() },
                    { name: '西藏', value: randomData() },
                    { name: '四川', value: randomData() },
                    { name: '宁夏', value: randomData() },
                    { name: '海南', value: randomData() },
                    { name: '台湾', value: randomData() },
                    { name: '香港', value: randomData() },
                    { name: '澳门', value: randomData() }
                ]
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
