const types = [
    {type: '通用行业', url:'https://www.baidu.com/'},
    {type: '装备制造行业', url:''},
    {type: 'IC行业', url:'https://www.baidu.com/'},
    {type: 'IOT行业', url:''}
]
const body = `<div class="title"></div><div class="decoration_box"></div><div class="entrance_box">entrance_box_html</div>`;
let content = '';
for (let i = 0; i < types.length; i++) {
    const item = types[i];
    content += `<div class='entrance_item'>
                    <div class="item_title">${item.type}</div>
                    <div class="item_icon item_icon_${i+1}"></div>
                    <a class="item_op">立即访问</a>
                </div>`;
}
const banner = `关于智互联 | 联系我们 | 著作权与商标声明 | 法律声明 | 服务条款 | 隐私政策 | 网站导航  &nbsp;© Copyright 2019 智互联(深圳)科技有限公司版权所有`
$(() => {
    $('body').html(body.replace('entrance_box_html', content))
        .append(`<div class="footer"><img class="logo" alt="logo"><span>${banner}</span></div>`);
    $('.entrance_item').click(function() {
        const index = $(this).index();
        if (types[index].url) {
            window.open(types[index].url);
        } else  {
            layui.layer.msg('入口暂未开放，敬请期待');
        }
    })
});
