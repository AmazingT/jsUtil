/**
 * @desc 判断两个数组是否相等
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Boolean}
 */
 function arrayEqual(arr1, arr2){
 	if (arr1 === arr2) return true;
 	if (arr1.length != arr2.length) return false;
 	for (var i = 0; i < arr1.length; ++i) {
 		if (arr1[i] !== arr2[i]) return false;
 	}
 	return true;
 }

 /**
 * @desc 根据name读取cookie
 * @param {String} name
 * @return {String}
 */
 function getCookie(name) {
 	var arr = document.cookie.replace(/\s/g, "").split(';');
 	for (var i = 0; i < arr.length; i++) {
 		var tempArr = arr[i].split('=');
 		if (tempArr[0] == name) {
 			return decodeURIComponent(tempArr[1]);
 		}
 	}
 	return '';
 }

 /**
 * @desc 根据name删除cookie
 * @param {String} name
 */
 function removeCookie(name) {
 	// 设置已过期，系统会立刻删除cookie
 	setCookie(name, '1', -1);
 }

 /**
 * @desc 设置cookie
 * @param {String} name
 * @param {String} value
 * @param {Number} days
 */
 function setCookie(name, value, days) {
 	var date = new Date();
 	date.setDate(date.getDate() + days);
 	document.cookie = name + '=' + value + ';expires=' + date;
 }

 /**
 * @desc 获取浏览器类型和版本
 * @return {String}
 */
function getExplore() {
    var sys = {},
        ua = navigator.userAgent.toLowerCase(),
        s;
    (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? sys.ie = s[1]:
        (s = ua.match(/msie ([\d\.]+)/)) ? sys.ie = s[1] :
        (s = ua.match(/edge\/([\d\.]+)/)) ? sys.edge = s[1] :
        (s = ua.match(/firefox\/([\d\.]+)/)) ? sys.firefox = s[1] :
        (s = ua.match(/(?:opera|opr).([\d\.]+)/)) ? sys.opera = s[1] :
        (s = ua.match(/chrome\/([\d\.]+)/)) ? sys.chrome = s[1] :
        (s = ua.match(/version\/([\d\.]+).*safari/)) ? sys.safari = s[1] : 0;
    // 根据关系进行判断
    if (sys.ie) return ('IE: ' + sys.ie)
    if (sys.edge) return ('EDGE: ' + sys.edge)
    if (sys.firefox) return ('Firefox: ' + sys.firefox)
    if (sys.chrome) return ('Chrome: ' + sys.chrome)
    if (sys.opera) return ('Opera: ' + sys.opera)
    if (sys.safari) return ('Safari: ' + sys.safari)
    return 'Unkonwn'
}

/**
 * @desc 获取操作系统类型
 * @return {String}
 */
 function getOS() {
    var userAgent = 'navigator' in window && 'userAgent' in navigator && navigator.userAgent.toLowerCase() || '';
    var vendor = 'navigator' in window && 'vendor' in navigator && navigator.vendor.toLowerCase() || '';
    var appVersion = 'navigator' in window && 'appVersion' in navigator && navigator.appVersion.toLowerCase() || '';
 
    if (/mac/i.test(appVersion)) return 'MacOSX'
    if (/win/i.test(appVersion)) return 'windows'
    if (/linux/i.test(appVersion)) return 'linux'
    if (/iphone/i.test(userAgent) || /ipad/i.test(userAgent) || /ipod/i.test(userAgent)) 'ios'
    if (/android/i.test(userAgent)) return 'android'
    if (/win/i.test(appVersion) && /phone/i.test(userAgent)) return 'windowsPhone'
}

/**
 * @desc 获取滚动条距离顶部的距离
 */
 function getScrollTop() {
 	return (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
 }

/**
 * @desc 获取元素距离文档的位置,类似jQ的offset()
 * @param {HTMLElement} ele
 * @return {{left: number, top: number}}
 */
 function offset(e) {
 	var pos = {
 		left: 0,
 		top: 0
 	};
 	while(e) {
 		pos.left += e.offsetLeft;
 		pos.top += e.offsetTop;
 		e = e.offsetParent;
 	};
 	return pos;
 }

/**
 * @desc 判断`obj`是否为空
 * @param {Object} obj
 * @return {Boolean}
 */
 function isEmptyObject(obj) {
 	if (!obj || typeof obj !== 'object' || Array.isArray(obj)) return false;
 	return !Object.keys(obj).length;
 }

/**
 * @desc 随机生成颜色
 * @return {String}
 */
 function randomColor() {
 	return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
 }

/**
 * @desc 生成指定范围内的数字
 * @param {Number} min
 * @param {Number} max
 * @return {Number}
 */
 function randomNum(min, max) {
 	return Math.floor(min + Math.random() * (max - min));
 }

 /**
 * @desc 判断是否为邮箱地址
 * @param {String} str
 * @return {Boolean}
 */
 function isEmail(str) {
 	return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
 }

/**
 * @desc 判断是否为手机号
 * @param {String|Number} str
 * @return {Boolean}
 */
 function isPhoneNum(str) {
 	return /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(str);
 }

 /**
 * @desc 现金额转大写
 * @param {Number} n
 * @return {String}
 */
 function digitUppercase(n) {
    var fraction = ['角', '分'];
    var digit = [
        '零', '壹', '贰', '叁', '肆',
        '伍', '陆', '柒', '捌', '玖'
    ];
    var unit = [
        ['元', '万', '亿'],
        ['', '拾', '佰', '仟']
    ];
    var head = n < 0 ? '欠' : '';
    n = Math.abs(n);
    var s = '';
    for (var i = 0; i < fraction.length; i++) {
        s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
    }
    s = s || '整';
    n = Math.floor(n);
    for (var i = 0; i < unit[0].length && n > 0; i++) {
        var p = '';
        for (var j = 0; j < unit[1].length && n > 0; j++) {
            p = digit[n % 10] + unit[1][j] + p;
            n = Math.floor(n / 10);
        }
        s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
    }
    return head + s.replace(/(零.)*零元/, '元')
        .replace(/(零.)+/g, '零')
        .replace(/^整$/, '零元整');
};

/**
 * @desc 判断浏览器是否支持webP格式图片
 * @return {Boolean}
 */
 function isSupportWebP() {
 	return !![].map && document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0;
 }

/**
 * @desc 格式化${startTime}距现在的已过时间
 * @param {Date} startTime
 * @return {String}
 */
function formatPassTime(startTime) {
	var currentTime = Date.parse(new Date()),
		time = currentTime - startTime,
		day = parseInt(time / (1000 * 60 * 60 * 24)),
		hour = parseInt(time / (1000 * 60 * 60)),
		min = parseInt(time /(1000 * 60)),
		month = parseInt(day / 30),
		year = parseInt(month / 12);

	if (year) return year + "年前";
	if (month) return month + "个月前";
	if (day) return day + "天前";
	if (hour) return hour + "小时前";
	if (min) {
		return min + "分钟前";
	} else {
		return "刚刚";
	}
}

/**
 * @desc 格式化现在距${endTime}的剩余时间
 * @param {Date} endTime
 * @return {String}
 */
 function formatRemainTime(endTime) {
 	var startDate = new Date(); // start time
 	var endDate = new Date(endTime); // end time
 	var t = endDate.getTime() - startDate.getTime(); // time diff
 	var d = 0,
 		h = 0,
 		m = 0,
 		s = 0;

 	if (t >= 0) {
 		d = Math.floor(t / 1000 / 3600 / 24);
 		h = Math.floor(t / 1000 / 60 / 60 % 24);
 		m = Math.floor(t / 1000 / 60 % 60);
 		s = Math.floor(t / 1000 % 60);
 	}
 	return d + "天" + h + "小时" + m + "分钟" + s + "秒";
 }

/**
 * @desc URL参数转对象(一)
 * @param {String} url default: window.location.href
 * @return {Object}
 */
 function parseQueryString(url) {
 	url = url == null ? window.location.href : url;
 	var search = url.substring(url.lastIndexOf('?') + 1);
 	if (!search) {
 		return {}
 	}
 	return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
 }

/**
 * @desc URL参数转对象(二)
 * @param {String} url
 * @return {Object}
 */
function parseQueryString(url) {
	var reg = RegExp("([^\?\&\=]+)\=([^\?\&\=]*)");
	//var reg = /([^\?\&\=]+)\=([^\?\&\=]*)/g;
	var obj = {};
	while(reg.test(url)){
		obj[RegExp.$1] = RegExp.$2;
	}
	return obj;
};

/**
 * @desc URL参数转对象(三),获取指定name的参数
 * @param {String} url
 * @return {Object}
 */
function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	//www.baidu.com?a=1&b=2  ==>
	//a=1&b=2
	var r = window.location.search.substr(1).match(reg);
	return r[2];
};

// JSONP 客户端(发送查询的code和回调函数名callback)
<script type="text/javascript">
    // 得到航班信息查询结果后的回调函数
    var flightHandler = function(data){
        alert('你查询的航班结果是：票价 ' + data.price + ' 元，' + '余票 ' + data.tickets + ' 张。');
    };
    // 提供jsonp服务的url地址（不管是什么类型的地址，最终生成的返回值都是一段javascript代码）
    var url = "http://flightQuery.com/jsonp/flightResult.aspx?code=CA1998&callback=flightHandler";
    // 创建script标签，设置其属性
    var script = document.createElement('script');
    script.setAttribute('src', url);
    // 把script标签加入head，此时调用开始
    document.getElementsByTagName('head')[0].appendChild(script); 
</script>

// 服务器端 拼接字符串返回
flightHandler({
	"code": "CA1998",
	"price": 1780,
	"tickets": 5
});


// jQuery封装
<script type="text/javascript">
	jQuery(document).ready(function(){ 
	    $.ajax({
	        type: "get",
	        async: false,
	        url: "http://flightQuery.com/jsonp/flightResult.aspx?code=CA1998",
	        dataType: "jsonp",
	        jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
	        jsonpCallback:"flightHandler",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名，也可以写"?"，jQuery会自动为你处理数据
	        success: function(json){
	            alert('您查询到航班信息：票价： ' + json.price + ' 元，余票： ' + json.tickets + ' 张。');
	        },
	         error: function(){
	            alert('fail');
	        }
	    });
	});
</script>


// jQuery的hasClass,addClass,removeClass方法封装
var util = {
    // 是否有类名
    hasClass: function(ele, cls) {
        //  字符串的方法match()
        //  return !!ele.className.match(new RegExp("(^||\\s)" + cls + "(\\s|$)"));

        //  RegExp对象的方法test(),exec()
        //  var reg = new RegExp("(^|\\s)" + cls + "(\\s|$)");
        //  return reg.test(cls.className);

        //  空格分割,数组方法indexOf()
        var arr = ele.className.split(/\s+/);
        return (arr.indexOf(cls) == -1) ? false : true;
    },
    // 添加类名
    addClass: function(ele, cls) {
        if (!this.hasClass(ele, cls)) {
            ele.className += " " + cls;
        }
    },
    // 删除类名
    removeClass: function(ele, cls) {
        if (this.hasClass(ele, cls)) {
            var reg = RegExp("(^|\\s)" + cls + "(\\s|$)");
            ele.className = ele.className.replace(reg, " ");
        }
        /*
        if (this.hasClass(ele , cls)) {
            var classArray = ele.className.split(" ");//空格分割
            var _leftArray = [];
            classArray.forEach(function(val) {
                if (val != "" && val != cls) {
                    _leftArray.push(val);
                }
            });
            ele.className = _leftArray.join(" ");//空格分隔
        }
        */
    },
    // 设置样式
    setStyle: function(ele, json) {
        for (var attr in json) {
            ele.style[attr] = json[attr];
        }
    },
    // 显示
    show: function(ele) {
        ele.style.display = "";
    },
    // 隐藏
    hide: function(ele) {
        ele.style.display = "none";
    }
};










