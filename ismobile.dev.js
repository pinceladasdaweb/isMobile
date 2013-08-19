/*
--------------------------------
isMobile
--------------------------------
+ https://github.com/pinceladasdaweb/isMobile
+ Detect Mobile Browsers with pure JavaScript
+ version 1.0
+ Copyright 2013 Pedro Rogerio
+ Licensed under the MIT license
*/

var isMobile = (function () {
    var ua = navigator.userAgent.toLowerCase(),
        agents = ['android', 'webos', 'iphone', 'ipad', 'ipod', 'opera mini', 'opera mobi', 'opera tablet', 'iemobile', 'windows phone', 'blackberry', 'bb10; touch'],
        device;

    for (device in agents) {
        if (ua.indexOf(agents[device]) > -1) {
            return true;
        }
    }
}());