var supportsPositionFixed = (function() {
	var w   = window,
	    ua  = navigator.userAgent,
	    ret = true;
	
	// Black list the following User Agents
	if (
	  // IE less than 7.0
	  (/MSIE (\d+\.\d+);/i.test(ua) && RegExp.$1 < 7)          ||
	  // iOS less than 5
	  (/OS [2-4]_\d(_\d)? like Mac OS X/i.test(ua))            ||
	  // Android less than 3
	  (/Android ([0-9]+)/i.test(ua) && RegExp.$1 < 3)          ||
	  // Windows Phone less than 8
	  (/Windows Phone OS ([0-9])+/i.test(ua) && RegExp.$1 < 8) ||
	  // Opera Mini
	  (w.operamini && ({}).toString.call( w.operamini ) === "[object OperaMini]") ||
	  // Kindle Fire
	  (/Kindle Fire/i.test(ua) || /Silk\//i.test(ua)) ||
	  // Nokia Symbian, Opera Mobile, wOS
	  (/Symbian/i.test(ua)) || (/Opera Mobi/i.test(ua)) || (/wOSBrowser/i.test(ua)) ||
	  // Firefox Mobile
	  (/Fennec\/([0-9]+)/i.test(ua) && RegExp.$1 < 6)
	){
    ret = false;
	}
	return ret;
})();
