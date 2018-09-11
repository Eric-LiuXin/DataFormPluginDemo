// 全局 footer固定底部
$(function () {
    function footerPosition() {
        $("footer").removeClass("fixed-bottom");
        var contentHeight = document.body.scrollHeight, //网页正文全文高度
            winHeight = window.innerHeight; //可视窗口高度，不包括浏览器顶部工具栏
        if (!(contentHeight > winHeight)) {
            //当网页正文高度小于可视窗口高度时，为footer添加类fixed-bottom
            $("footer").addClass("fixed-bottom");
        }
    }
    footerPosition();
    $(window).resize(footerPosition);
});
// 登录页显示隐藏密码
$(function () {
    $('.show_pass').click(function () {
        let pass_type = $('input.password').attr('type');

        if (pass_type === 'password') {
            $('input.password').attr('type', 'text');
            $('.show_pass i').removeClass('fa-eye').addClass('fa-eye-slash');
        } else {
            $('input.password').attr('type', 'password');
            $('.show_pass i').removeClass('fa-eye-slash').addClass('fa-eye');
        }
    })
})