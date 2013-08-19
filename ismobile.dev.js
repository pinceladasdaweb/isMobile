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

;var isMobile = (function () {
  'use strict';

  var userAgent = navigator.userAgent.toLowerCase(),
      mobileUserAgents = ['android',
                          'webos',
                          'iphone',
                          'ipad',
                          'ipod',
                          'opera mini',
                          'opera mobi',
                          'opera tablet',
                          'iemobile',
                          'windows phone',
                          'blackberry',
                          'bb10; touch'];
  for (var index = 0, length = mobileUserAgents.length; index < length; index++) {
    if (userAgent.indexOf(mobileUserAgents[index]) !== -1) {
      return true;
    }
  }

  return false;
}());
