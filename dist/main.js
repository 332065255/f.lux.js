!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e){Date.prototype.sunrise=function(t,e,n){return this.sunriseSet(t,e,!0,n)},Date.prototype.sunset=function(t,e,n){return this.sunriseSet(t,e,!1,n)},Date.prototype.sunriseSet=function(t,e,n,o){o||(o=90.8333);var r,a,s,u,i,l,g,c,h,M=e/Date.DEGREES_PER_HOUR,f=this.getDayOfYear();s=(a=.9856*(r=n?f+(6-M)/24:f+(18-M)/24)-3.289)+1.916*Math.sinDeg(a)+.02*Math.sinDeg(2*a)+282.634,s=Math.mod(s,360),u=.91764*Math.tanDeg(s),i=360/(2*Math.PI)*Math.atan(u),i=Math.mod(i,360),i+=90*Math.floor(s/90)-90*Math.floor(i/90),i/=Date.DEGREES_PER_HOUR,l=.39782*Math.sinDeg(s),g=Math.cosDeg(Math.asinDeg(l)),cosLocalHourAngle=(Math.cosDeg(o)-l*Math.sinDeg(t))/(g*Math.cosDeg(t)),c=Math.acosDeg(cosLocalHourAngle),n&&(c=360-c),h=c/Date.DEGREES_PER_HOUR+i-.06571*r-6.622-e/Date.DEGREES_PER_HOUR,h=Math.mod(h,24);var D=new Date(0);D.setUTCFullYear(this.getUTCFullYear()),D.setUTCMonth(this.getUTCMonth()),D.setUTCDate(this.getUTCDate());var d=D.getTime()+60*h*60*1e3;return new Date(d)},Date.DEGREES_PER_HOUR=15,Date.prototype.getDayOfYear=function(){var t=new Date(this.getFullYear(),0,1);return Math.ceil((this-t)/864e5)},Math.degToRad=function(t){return t*Math.PI/180},Math.radToDeg=function(t){return 180*t/Math.PI},Math.sinDeg=function(t){return Math.sin(2*t*Math.PI/360)},Math.acosDeg=function(t){return 360*Math.acos(t)/(2*Math.PI)},Math.asinDeg=function(t){return 360*Math.asin(t)/(2*Math.PI)},Math.tanDeg=function(t){return Math.tan(2*t*Math.PI/360)},Math.cosDeg=function(t){return Math.cos(2*t*Math.PI/360)},Math.mod=function(t,e){var n=t%e;return n<0&&(n+=e),n};let n={lat:-1,lng:-1,sunset:null,sunrise:null,time:-1,getTime(){navigator.geolocation?navigator.geolocation.getCurrentPosition(n.showPosition,n.showPositionError):console.log("Geolocation is not supported by this browser.")},setColorK(t,e=!0){if(e&&clearInterval(n.time),"number"!=typeof t)throw new Error("传入色温必须为数字,例如4000,4300,6000等");t/=100,(t*=100)<1e3&&(t=1e3),t>4e4&&(t=4e4),document.querySelector("body").style.filter=`url(./color/${t}K.svg#main)`},showPosition(t){n.lat=t.coords.latitude,n.lng=t.coords.longitude,n.sunset=(new Date).sunset(n.lat,n.lng),n.sunrise=(new Date).sunrise(n.lat,n.lng),n.time=setInterval(n.changFilter,3e4)},showPositionError(t){n.lat=39.9139496702,n.lng=116.3987731934,n.sunset=(new Date).sunset(n.lat,n.lng),n.sunrise=(new Date).sunrise(n.lat,n.lng),n.time=setInterval(n.changFilter,3e4)},changFilter(){let t=new Date,e=n.sunset,o=n.sunrise;console.log("日出时间:",o,"日落时间:",e,"当前时间",t),t.getDate()===e.getDate()&&(t.getHours()>e.getHours()?n.setColorK(4100,!1):t.getHours()===e.getHours()&&t.getMinutes()>=e.getMinutes()?n.setColorK(4100,!1):n.setColorK(6500,!1)),t.getDate()===o.getDate()&&(t.getHours()<o.getHours()?n.setColorK(4100,!1):t.getHours()===e.getHours()&&t.getMinutes()<=e.getMinutes()?n.setColorK(4100,!1):n.setColorK(6500,!1))}};n.getTime(),window.f_lux_js=n}]);