const $ = require('zepto');
function getLocation(){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(f_lux_js.showPosition);
    }else{
        console.log("Geolocation is not supported by this browser.");
    }
}
let f_lux_js = {
    lat:-1,
    lng:-1,
    getLng(){
        getLocation()
    },
    setColorK(str){
        if(typeof str !== 'number'){
            throw new Error('传入色温必须为数字,例如4000,4300,6000等')
            return;
        }
        str = str/100;
        str = str*100;
        if(str<1000) str=1000;
        if(str>40000) str=40000;
        $('body').css('filter',`url(http://home.gao111.top/color/${str}K.svg#main)`)
    },
    showPosition(position){
        f_lux_js.lat=position.coords.latitude ;
        f_lux_js.lng=position.coords.longitude;
    }
}
window.f_lux_js = f_lux_js;