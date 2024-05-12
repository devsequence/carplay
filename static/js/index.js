creatium.getWindowWidth = function () {
    var windowWidth = window.innerWidth;


    if (window.innerWidth === 980 && !window.MSStream && /iPhone|iPod/.test(navigator.userAgent)) {
        windowWidth = window.outerWidth;
    }

    return windowWidth;
}

creatium.getScreen = function () {
    var _windowWidth = creatium.getWindowWidth();

    var lgWidth = 1200 + cr.layout._left_current;
    var mdWidth = 992 + cr.layout._left_current;
    var smWidth = 768 + cr.layout._left_current;

    if (creatium.screens === 'screens-xs') return 'xs';
    else if (creatium.screens === 'screens-sm') return 'sm';
    else if (creatium.screens === 'screens-md') return 'md';
    else if (creatium.screens === 'screens-lg') return 'lg';
    else if (creatium.screens === 'screens-xs-sm') {
        if (_windowWidth >= smWidth) return 'sm';
        else return 'xs';
    } else if (creatium.screens === 'screens-xs-md') {
        if (_windowWidth >= mdWidth) return 'md';
        else return 'xs';
    } else if (creatium.screens === 'screens-xs-lg') {
        if (_windowWidth >= lgWidth) return 'lg';
        else return 'xs';
    } else if (creatium.screens === 'screens-sm-md') {
        if (_windowWidth >= mdWidth) return 'md';
        else return 'sm';
    } else if (creatium.screens === 'screens-sm-lg') {
        if (_windowWidth >= lgWidth) return 'lg';
        else return 'sm';
    } else if (creatium.screens === 'screens-md-lg') {
        if (_windowWidth >= lgWidth) return 'lg';
        else return 'md';
    } else if (creatium.screens === 'screens-xs-sm-md') {
        if (_windowWidth >= mdWidth) return 'md';
        else if (_windowWidth >= smWidth && _windowWidth < mdWidth) return 'sm';
        else return 'xs';
    } else if (creatium.screens === 'screens-xs-sm-lg') {
        if (_windowWidth >= lgWidth) return 'lg';
        else if (_windowWidth >= smWidth && _windowWidth < lgWidth) return 'sm';
        else return 'xs';
    } else if (creatium.screens === 'screens-xs-md-lg') {
        if (_windowWidth >= lgWidth) return 'lg';
        else if (_windowWidth >= mdWidth && _windowWidth < lgWidth) return 'md';
        else return 'xs';
    } else if (creatium.screens === 'screens-sm-md-lg') {
        if (_windowWidth >= lgWidth) return 'lg';
        else if (_windowWidth >= mdWidth && _windowWidth < lgWidth) return 'md';
        else return 'sm';
    } else if (creatium.screens === 'screens-xs-sm-md-lg') {
        if (_windowWidth >= lgWidth) return 'lg';
        else if (_windowWidth >= mdWidth && _windowWidth < lgWidth) return 'md';
        else if (_windowWidth >= smWidth && _windowWidth < mdWidth) return 'sm';
        else return 'xs';
    }
}

creatium.isLayoutMobile = function () {
    if (creatium.getScreen() !== 'xs') return false;
    return creatium.getWindowWidth() < 420 + cr.layout.left;
}

cr.layout._left_current = cr.layout.left;
if (cr.layout._left_current) {
    document.body.classList.add('layout-left-active');
}

creatium.layout.mobile = creatium.isLayoutMobile();
if (creatium.layout.mobile) {
    document.body.classList.add('layout-mobile');
}

creatium.screen = creatium.getScreen();
document.body.classList.add('screen-' + creatium.screen);

if (creatium.device) {
    creatium.device_fix = false;
    if (creatium.screen === 'xs' && creatium.device !== 'mobile') creatium.device_fix = true;
    if (creatium.screen === 'sm' && creatium.device !== 'tablet') creatium.device_fix = true;
    if (creatium.screen === 'md' && creatium.device !== 'other') creatium.device_fix = true;
    if (creatium.screen === 'lg' && creatium.device !== 'other') creatium.device_fix = true;
    if (creatium.device_fix) document.write('<script src="' + creatium.async.js_adaptive_sections + '"></scr' + 'ipt>');
}