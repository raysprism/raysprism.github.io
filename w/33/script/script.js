$(function(){

    /* 글로벌네비게이션 */
    let gnb_spd = 250;
    //마우스
    $('.gnb-item').mouseover(function(){
        $('.gnb_sub',this).stop().slideDown(gnb_spd);
    });
    $('.gnb-item').mouseout(function(){
        $('.gnb_sub',this).stop().slideUp(gnb_spd);
    });
    //키보드
    $('.gnb-item').focusin(function(){
        $('.gnb_sub',this).stop().slideDown(gnb_spd);
    });
    $('.gnb-item').focusout(function(){
        $('.gnb_sub',this).stop().slideUp(gnb_spd);
    });

    /* 사이트맵 */
    //클릭하면 열림
    $('.btn-sitemap').click(function(){
        if(!$(this).hasClass('actived')){
            $(this).addClass('actived');
            $('.sitemap').addClass('actived');
        }else{
            $(this).removeClass('actived');
            $('.sitemap').removeClass('actived');
        }
    });

    //사이드바 닫기
    $('.sitemap_util-btn_close').click(function(){
        $('.btn-sitemap').removeClass('actived');
        $('.sitemap').removeClass('actived');
    });

    $('.sitemap-btn_more').click(function(){
        if(!$(this).hasClass('actived')){
            $(this).addClass('actived');
        }else{
            $(this).removeClass('actived');
        }
        
    });

    /* 비주얼 */
    //왼쪽으로 슬라이드되면서 나타남
    $('.visual-text .top').delay(250).css({'transform':'translateX(0%)','opacity':'1'});
    $('.visual-text .middle').delay(500).css({'transform':'translateX(0%)','opacity':'1'});
    $('.visual-text .bottom').delay(750).css({'transform':'translateX(0%)','opacity':'1'});

    /* 인트로 */
    $('.con_intro-item').mouseover(function(){
        if(!$('body').hasClass('media-1100')){
            $('.con_intro-item').css({'width':'25%'}).addClass('actived');
            $(this).css({'width':'50%'}).removeClass('actived');
        }else{
            $('.con_intro-item').removeAttr('style');
        }
    });
    $('.con_intro-item').mouseout(function(){
        if(!$('body').hasClass('media-1100')){
            $('.con_intro-item').removeAttr('style').removeClass('actived');
        }else{
            $('.con_intro-item').removeAttr('style');
        }
    });

    /* 제품 */
    $('.con_pro-item').mouseover(function(){
        if(!$('body').hasClass('media-1100')){
            $('.con_pro-item').css({'width':'16.6666%'}).addClass('actived');
            $(this).css({'width':'50%'}).removeClass('actived');
        }else{
            $('.con_pro-item').removeAttr('style');
        }
    });
    $('.con_pro-item').mouseout(function(){
        if(!$('body').hasClass('media-1100')){
            $('.con_pro-item').removeAttr('style').removeClass('actived');
        }else{
            $('.con_pro-item').removeAttr('style');
        }
    });

    $(window).on('load', function(){
        if($('body').hasClass('media-1100')){
            $('.con_intro-item').removeAttr('style');
            $('.con_pro-item').removeAttr('style');
        }
    });
    $(window).on('resize', function(){
        if($('body').hasClass('media-1100')){
            $('.con_intro-item').removeAttr('style');
            $('.con_pro-item').removeAttr('style');
        }
    });

    /* 패밀리사이트(select) */
    //변경되면 초기화
    $('.familysite').change(function(){
        window.open(this.value); //새창이동
        $(this).find('option').prop('selected',false); //초기화
    });

    /* 미디어쿼리 */
    function responsive_func(){
        if($('#media-1100').css('display')=='block'){
            $('body').addClass('media-1100');
        }else{
            $('body').removeClass('media-1100');
        }
    }
    $(window).on('load', function(){
        responsive_func();
    });
    $(window).on('resize', function(){
        responsive_func();
    });

    /* 맨위로 */
    $(document).scroll(function(){
        if($(document).scrollTop() > 100){
            $('.gototop').addClass('actived');
        }else{
            $('.gototop').removeClass('actived');
        }
    });
    $('.gototop').click(function(){
        $(document).scrollTop(0);
    });

});