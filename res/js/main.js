// 通用行业
const typeNew = [
    {type: 'ALL', url:'http://172.31.75.154:18180'}, //全模块
    {type: 'E10', url:'http://172.31.75.154:18180'}, // E10 Lite
    {type: 'T100', url:'https://chaoyue8.vip'} // T100 Lite
]
// 其它
const types = [
    {type: 'EM', url:'http://172.31.75.154:18180'}, // 装备制造行业
    {type: 'IC', url:'http://172.31.75.154:18180'}, // IC行业
    {type: 'IOT', url:''} // IOT行业
]

const handler = function(type, isCommon = false) {
    const t = isCommon ? typeNew : types;
    const url = t.find(i => i.type === type)?.url
    if (url) {
        window.open(url);
    } else {
        layui.layer.msg('入口暂未开放，敬请期待');
    }
}
const accessUrl = function(type) {
    handler(type);
}
const accessCommonUrl = function(type) {
    handler(type, true);
}

const banner = `关于智互联 | 联系我们 | 著作权与商标声明 | 法律声明 | 服务条款 | 隐私政策 | 网站导航  &nbsp;© Copyright 2019 智互联(深圳)科技有限公司版权所有`

$(() => {
    $('body').append(`<div class="footer"><img class="logo" alt="logo"><span>${banner}</span></div>`);
});
