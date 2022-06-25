/*#################    天气  #####################*/
var dom = document.getElementById("tianqi");
var myChart = echarts.init(dom);
let timeData = [
  '学前教育',
  '材料成型及控制工程',
  '财务管理',
  '财务管理',
  '茶学',
  '电子商务',
  '电子商务',
  '电子信息工程',
  '法学',
  '法学',
  '翻译',
  '翻译',
  '工商管理',
  '工商管理',
  '公共事业管理',
  '公共事业管理',
  '光电信息科学与工程',
  '国际经济与贸易',
  '国际经济与贸易',
  '汉语国际教育',
  '汉语言文学',
  '机器人工程',
  '机械电子工程',
  '机械设计制造及其自动化',
  '计算机科学与技术',
  '金融工程',
  '金融工程',
  '酒店管理',
  '酒店管理',
  '旅游管理',
  '旅游管理',
  '人力资源管理',
  '人力资源管理',
  '软件工程',
  '商务英语',
  '商务英语',
  '食品科学与工程',
  '市场营销',
  '市场营销',
  '数据科学与大数据技术',
  '数学与应用数学',
  '数字媒体技术',
  '思想政治教育',
  '思想政治教育',
  '通信工程',
  '微电子科学与工程',
  '物联网工程',
  '物流管理',
  '物流管理',
  '小学教育',
  '小学教育',
  '新闻学',
  '新闻学',
  '行政管理',
  '行政管理',
  '学前教育',
  '学前教育',
  '英语',
  '英语',
  '哲学',
  '哲学',
  '制药工程',
  '资源循环科学与工程',
  '自动化',
  '旅游管理',
  '电子信息工程',
  '旅游管理',
  '财务管理',
  '电子商务',
  '财务管理',
  '电子信息工程',
  '机械设计制造及其自动化',
  '电子商务',
  '法学',
  '法学',
  '数据科学与大数据技术',
  '电子商务',
  '机械设计制造及其自动化',
  '电子信息工程',
  '电子商务',
  '视觉传达设计',
  '数字媒体艺术',
  '产品设计',
  '环境设计',
  '音乐学',
  '服装与服饰设计',
  '音乐学',
  '环境设计',
  '产品设计',
  '服装与服饰设计',
  '视觉传达设计',
  '数字媒体艺术',
  '舞蹈学',
  '电子商务',
  '学前教育',
  '大数据与财务管理',
  '大数据与财务管理',
  '学前教育',
  '电子商务',
  '英语',
  '机械电子工程',
  '软件工程',
  '光电信息科学与工程',
  '数学与应用数学',
  '数据科学与大数据技术',
  '小学教育',
  '公共事业管理',
  '制药工程',
  '电子商务',
  '人力资源管理',
  '国际经济与贸易',
  '通信工程',
  '法学',
  '食品科学与工程',
  '学前教育',
  '金融工程',
  '翻译',
  '电子商务',
  '财务管理',
  '人力资源管理',
  '市场营销',
  '物流管理',
  '思想政治教育',
  '商务英语',
  '机器人工程',
  '电子信息工程',
  '机械设计制造及其自动化',
  '酒店管理',
  '微电子科学与工程',
  '物联网工程',
  '资源循环科学与工程',
  '学前教育',
  '金融工程',
  '茶学',
  '市场营销',
  '自动化',
  '计算机科学与技术',
  '物流管理',
  '数字媒体技术',
  '旅游管理',
  '工商管理',
  '国际经济与贸易',
  '小学教育',
  '哲学',
  '商务英语',
  '公共事业管理',
  '汉语国际教育',
  '行政管理',
  '财务管理',
  '新闻学',
  '工商管理',
  '英语',
  '旅游管理',
  '汉语言文学',
  '法学',
  '翻译'
];
var option = {
  title: {
    text: '2021年梧州学院各专业在广西招生分数',
    left: 'center'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      animation: false
    }
  },
  legend: {
    data: ['分数'],
    left: 10
  },
  axisPointer: {
    link: [
      {
        xAxisIndex: 'all'
      }
    ]
  },
  dataZoom: [
    {
      show: true,
      realtime: true,
      start: 30,
      end: 70,
    },
  ],
  grid: [
    {
      left: 60,
      right: 50,
      height: '60%'
    },
  ],
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      axisLine: { onZero: true },
      data: timeData
    },
  ],
  yAxis: [
    {
      name: '分数',
      type: 'value',
      max: 550
    },
  ],
  series: [
    {
      name: '分数',
      type: 'line',
      symbolSize: 8,
      data: [250, 422.5, 494.5, 449, 416, 478, 435, 455, 489, 441.5, 484, 453, 478.5, 428, 475, 427.5, 429.5, 481.5, 435.5, 495, 499, 426, 437, 431, 453.5, 491.5, 431.5, 485, 424, 474.5, 423.5, 485, 438.5, 451.5, 486.5, 437.5, 424.5, 429.5, 485, 435.5, 444.5, 441, 492.5, 428.5, 438, 424.5, 442.5, 481, 432, 489, 449, 486, 431.5, 482.5, 429, 479.5, 440, 495.5, 456, 486, 424, 434, 420.5, 430.5, 453.5, 409, 404, 474, 461, 420.5, 406.5, 404, 400, 462.5, 405.5, 399.5, 462, 409, 411.5, 400, 507.5, 504.5, 506.5, 502.5, 495, 506, 523.5, 528.5, 533, 528.5, 539, 539, 467, 432.5, 427, 424.5, 366.5, 377.5, 371, 406, 386, 387.5, 399, 397.5, 386.5, 384.5, 391, 395, 410, 389, 389, 386, 397, 389.5, 414.5, 401, 391, 404.5, 395.5, 416, 386.5, 399, 417, 389, 389, 392, 390, 385, 397, 388.5, 389.5, 386.5, 382, 389, 382, 383.5, 390, 381, 388.5, 380, 384.5, 416.5, 415, 418, 401.5, 399, 410, 414.5, 401, 398, 407.5, 417.5, 406, 417, 416, 405]
      },
  ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

/*#################    雷达图  #####################*/

var dom = document.getElementById("gztj");
var myChart = echarts.init(dom);
var app = {};
option = null;
app.title = '雷达图';
option = {
  color: ['#67F9D8', '#FFE434', '#56A3F1', '#FF917C'],
  tooltip: {
    trigger: 'item'
  },
  textStyle: {
    color: '#4F4F4F',
  },
  radar: [
    {
      indicator: [
        { text: '毕业率',max:100 },
        { text: '学位授予率',max:100 },
        { text: '毕业就业率',max:100 },
        { text: '毕业去企业',max:100 },
        { text: '升学率',max:100 },
        { text: '出国率',max:100 }
      ],
      center: ['25%', '50%'],
      radius: 50,
      startAngle: 90,
      splitNumber: 4,
      shape: 'circle',
      axisName: {
        formatter: '【{value}】',
        color: '#0D0D0D'
      },
      
      splitArea: {
        areaStyle: {
          color: ['#77EADF', '#26C3BE', '#64AFE9', '#428BD4'],
          shadowColor: 'rgba(0, 0, 0, 0.2)',
          shadowBlur: 10
        }
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(211, 253, 250, 0.8)'
        }
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(211, 253, 250, 0.8)'
        }
      }
    },
    {
      indicator: [
        { text: '艺术学',max:20 },
        { text: '管理学',max:20 },
        { text: '农学',max:20 },
        { text: '工学',max:40 },
        { text: '理学',max:10 },
        { text: '文学',max:20 },
        { text: '教育学',max:5 },
        { text: '法学',max:5 },
        { text: '经济学',max:5 },
        { text: '哲学',max:5 },
      ],
      center: ['75%', '50%'],
      radius: 50,
      axisName: {
        color: '#0D0D0D',
        backgroundColor: '#0D0D0D',
        borderRadius: 3,
        padding: [3, 5]
      }
    }
  ],
  series: [
    {
      type: 'radar',
      emphasis: {
        lineStyle: {
          width: 4
        }
      },
      data: [{
          value: [84.48,95.06,74.45,71.58,4.56,0.07],
          name: '毕业生数据占比(%)',
          areaStyle: {color: 'rgba(255, 228, 52, 0.6)'}
        }]
    },
    {
      type: 'radar',
      radarIndex: 1,
      data: [{
          value: [14.55,18.18,1.82,36.36,5.45,10.91,3.64,3.64,3.64,1.82],
          name: '各学科占比(%)',
          areaStyle: {
            color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
              {
                color: 'rgba(255, 145, 124, 0.9)',
                offset: 0
              },
              {
                color: 'rgba(255, 145, 124, 0.9)',
                offset: 1
              }
            ])
          }
        }
      ]
    }
  ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}


var dom = document.getElementById("xcrytj");
var myChart = echarts.init(dom);
var app = {};
var dataName=['宝石与艺术设计学院', '外国语学院', '商学院', '管理学院', '机械与资源工程学院', '食品与制药工程学院', '教师教育学院', '大数据与软件工程学院', '电子与信息工程学院', '文学与传媒学院', '法学院', '马克思主义学院'];
var dataValue=[289, 229, 568, 1047, 638, 239, 445, 713, 358, 271, 91, 53];
option = {
    tooltip: {},
    legend: {
        data:['各学院毕业生数量','毕业生去处'],
        selectedMode: 'single',
        orient: "vertical",
        x: '5px',
    },
    
    xAxis: [
       { 
           gridIndex:0,
           data: dataName,
           axisLabel: {
              fontSize: 12,
              rotate:40, 
          },
       }
    ],
    yAxis: [
        {
            gridIndex:0
        }    
    ],
    series: [
        {
            name: '各学院毕业生数量',
            type: 'bar',
            data: dataValue
        },
        {
          name:'毕业生去处',
            type: 'pie',
            data: [
                {value:71.58,name:'去企业'},
                {value:4.56,name:'升学'},
                {value:0.07,name:'留学'},
            ],
        }
    ]
};

if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
/*##################  柱状和折线图     ##################*/
var option = {
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		data:[{name:'专任教师'},{name:'外聘教师'}],
		rotate:60,
    textStyle: {
      color: '#0D0D0D',fontSize: 12,
    }
	},
	xAxis: [
		{
			type: 'category',
			data: ['正高级', '其中教授', '副高级', '其中副教授', '中级', '其中讲师', '初级', '其中助教', '未评级'],
			axisLabel: {
        show: true,
        rotate:60,
				textStyle: {
					color: '#0D0D0D'
				}
			}
		}
	],
	yAxis: [
		{
			type: 'value',
			name: '教师数量',
			nameTextStyle : {
			color: "#0D0D0D",
			},
			min: 0,
			interval: 50,
			axisLabel: {
				
				textStyle: {
					color: '#0D0D0D'
				}
			}
		}
	],
	series: [
		 
		{
			name:'专任教师',
			type:'bar',
			itemStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1,[
                            {offset: 0, color: '#83bff6'},
                            {offset: 0.5, color: '#0ff'},
                            {offset: 1, color: '#188df0'}
                        ]),
					label: {
						show:false,
						position: 'top',
						formatter: '{b}\n{c}'
					}
				}
			},
			data:[60, 57, 208, 153, 351, 270, 23, 6, 123]
		},
		{
			name:'外聘教师',
			type:'line',
			itemStyle : {  
				normal : {
				   //color:'#0ff'
				}
			},
			data:[16, 8, 72, 3, 66, 9, 8, 1, 29]
		}
	]
};
var myChart = echarts.init(document.getElementById('xjfxzt'));
myChart.setOption(option); 


/*##############  每个专业学分占比表    #####################*/

var dom = document.getElementById("wzxy1");
var myChart1 = echarts.init(dom);
var option1;
setTimeout(function () {
  option1 = {
    legend: {
      rotate:60,
      textStyle: {
        color: '#0D0D0D'
      }
    },
    tooltip: {
      trigger: 'axis',
      showContent: false
    },
    
    dataset: {
      source: [
        ['学科', '哲学', '经济学', '法学', '教育学', '文学', '理学', '工学', '农学', '管理学', '艺术学'],
        ['必修课学分比例（%）', 55.63, 69.04, 63.44, 81.82, 62.6, 61.65, 64.78, 51.88, 58.37, 67.79],
        ['选修课学分比例（%）', 14.38, 19.2, 16.25, 15.76, 20.21, 18.6, 13.88, 12.5, 22.17, 21.64],
        ['实践教学学分比例（%）', 50, 28.95, 31.25, 39.7, 31.57, 27.71, 38.99, 45.31, 34.2, 48.65],
      ]
    },
    xAxis: { type: 'category',
    name: '专业',
      axisLabel: {
        show: true,
        rotate:60,
        textStyle: {
          color: '#0D0D0D'
        }
      } },
    yAxis: { gridIndex: 0,
      name: '所占百分比',
      axisLabel: {
        show: true,
        rotate:60,
				textStyle: {
					color: '#0D0D0D'
				}
			} },
    grid: { top: '55%' },
    series: [
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'pie',
        id: 'pie',
        radius: '30%',
        center: ['50%', '25%'],
        emphasis: {
          focus: 'self'
        },
        label: {
          formatter: '{b}: {@哲学}'
        },
        encode: {
          itemName: '学科',
          value: '哲学',
          tooltip: '哲学'
        }
      }
    ]
  };
  myChart1.on('updateAxisPointer', function (event) {
    const xAxisInfo = event.axesInfo[0];
    if (xAxisInfo) {
      const dimension = xAxisInfo.value + 1;
      myChart1.setOption({
        series: {
          id: 'pie',
          label: {
            formatter: '{b}:{@[' + dimension + ']}'
          },
          encode: {
            value: dimension,
            tooltip: dimension
          }
        }
      });
    }
  });
  myChart1.setOption(option1);
});

option1 && myChart1.setOption(option1);

/*#################    2022各学院毕业生  #####################*/
/*#################    南丁格尔玫瑰图  #####################*/
var dom = document.getElementById("fxbhqs");
var myChart = echarts.init(dom);
var app = {};
option = null;
app.title = '玫瑰图';
function fetchData(cb) {
  setTimeout(function () {
    cb({
      data: [
        { name: '工学',value:36.36},
        { name: '管理学',value:18.18 },
        { name: '艺术学',value:14.55 },
        { name: '文学',value:10.91 },
        { name: '理学',value:5.45 },
        { name: '教育学',value:3.64 },
        { name: '法学',mvalueax:3.64 },
        { name: '经济学',value:3.64 },
        { name: '哲学',value:1.82 },
        { name: '农学',value:1.82 },
      ]
    });
  }, 2000);
}
option = {
  title: {
    text: '各学科专业占比',
    textStyle: {
      color: '#0D0D0D'
    },
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  tooltip: {trigger: 'item' },
  grid: {
      top: 20,
      right: 0,
      left: 50,
      height: 300
    },
  series: [
    {
      name: '各学科专业占比(%)',
      type: 'pie',
      radius: [20, 100],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
      },
      
    }
  ]
};
myChart.showLoading();
fetchData(function (data) {
  myChart.hideLoading();
  myChart.setOption({
    series: [
      {
        data: data.data
      }
    ]
  });
});

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);