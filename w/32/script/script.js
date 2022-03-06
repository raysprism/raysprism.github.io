$(function(){

    /* 검색창 */
    $('.header_right-img_search').click(function(){
        $('.search').addClass('actived');
        $('.search-input').focus();
    });
    $('.search-btn_close').click(function(){
        $('.search').removeClass('actived');
    });

    /* 슬라이더 */

    //슬라이더 배경색
    $('.slider-item').each(function(){
        $(this).css({'background-color':$(this).attr('data-bgcolor')});
    });
    

    let slider_item = '.slider-item',
        slider_nav_item = '.slider_nav-item',
        slider_cnt = $(slider_item).length,
        slider_wait = 2000,
        slider_spd = 500,
        slider_repeat_cnt = 0,
        slider_repeat = setInterval(function(){
            slider_repeat_func();
        },slider_wait),
        slider_repeat_func = function(){
            if(slider_repeat_cnt!=slider_cnt-1){
                //슬라이드 교체
                slider_repeat_cnt++;
                $(slider_item+'.actived').removeClass('actived').next().addClass('actived');
                //네비게이션 교체
                let num = $(slider_nav_item+'.actived').children().attr('data-order');
                $(slider_nav_item+'.actived').children().text(num);
                $(slider_nav_item+'.actived').removeClass('actived').next().addClass('actived');
                $(slider_nav_item+'.actived').children().text('ㅡ');
            }else{
                //네비게이션 교체
                let num = $(slider_nav_item+'.actived').children().attr('data-order');
                $(slider_nav_item+'.actived').children().text(num);
                //슬라이드 교체
                slider_repeat_cnt = 0;
                $(slider_item).removeClass('actived');
                $(slider_item).eq(0).addClass('actived');
                //네비게이션 교체
                num = $(slider_nav_item).eq(0).children().attr('data-order');
                $(slider_nav_item).eq(0).children().text('ㅡ');
                $(slider_nav_item).removeClass('actived')
                $(slider_nav_item).eq(0).addClass('actived');
            }
        }

    setTimeout(function(){
        $('.slider-item').addClass('transition'); //배경색 지정후 트랜지션 적용
    },100);

    //슬라이더 네비게이션 생성
    for(let i=1;i<=slider_cnt;i++){
        if(i==1){
            $('.slider_nav-list').append(`<li class="slider_nav-item actived"><button type="button" class="slider_nav-btn" data-order="${i}">ㅡ</button></li>`);
        }else{
            $('.slider_nav-list').append(`<li class="slider_nav-item"><button type="button" class="slider_nav-btn" data-order="${i}">${i}</button></li>`);
        }    
    }

    //슬라이더 네비게이션 클릭
    $('.slider_nav-btn').click(function(){
        //자동반복 일시정지
        clearInterval(slider_repeat);
        //슬라이더 교체
        let click_num = $(this).attr('data-order')-1;
        slider_repeat_cnt = click_num;
        $(slider_item).removeClass('actived')
        $(slider_item).eq(click_num).addClass('actived');
        //네비게이션 교체
        let num = $(slider_nav_item+'.actived').children().attr('data-order');
        $(slider_nav_item+'.actived').children().text(num);
        $(slider_nav_item+'.actived').removeClass('actived');
        $(this).parent().addClass('actived');
        $('.slider_nav-list').removeClass('actived');
        num = $(this).attr('data-order');
        $(this).text('ㅡ');
        //자동반복 재개
        slider_repeat = setInterval(function(){
            slider_repeat_func();
        },slider_wait);
    });
    
    /* 배너 슬라이더 */
    let banner_slider_item = '.banner_slider-item',
        banner_slider_nav_item = '.banner_slider_nav-item',
        banner_slider_cnt = $(banner_slider_item).length,
        banner_slider_wait = 2000,
        banner_slider_spd = 500,
        banner_slider_repeat_cnt = 0,
        banner_slider_repeat = setInterval(function(){
            banner_slider_repeat_func();
        },banner_slider_wait),
        banner_slider_repeat_func = function(){
            if(banner_slider_repeat_cnt!=banner_slider_cnt-1){
                //슬라이드 교체
                banner_slider_repeat_cnt++;
                $(banner_slider_item+'.actived').removeClass('actived').next().addClass('actived');
                //네비게이션 교체
                let num = $(banner_slider_nav_item+'.actived').children().attr('data-order');
                $(banner_slider_nav_item+'.actived').children().text(num);
                $(banner_slider_nav_item+'.actived').removeClass('actived').next().addClass('actived');
                $(banner_slider_nav_item+'.actived').children().text('ㅡ');
            }else{
                //네비게이션 교체
                let num = $(banner_slider_nav_item+'.actived').children().attr('data-order');
                $(banner_slider_nav_item+'.actived').children().text(num);
                //슬라이드 교체
                banner_slider_repeat_cnt = 0;
                $(banner_slider_item).removeClass('actived');
                $(banner_slider_item).eq(0).addClass('actived');
                //네비게이션 교체
                num = $(banner_slider_nav_item).eq(0).children().attr('data-order');
                $(banner_slider_nav_item).eq(0).children().text('ㅡ');
                $(banner_slider_nav_item).removeClass('actived')
                $(banner_slider_nav_item).eq(0).addClass('actived');
            }
        }

    function banner_slider_left_func(){
        if(banner_slider_repeat_cnt==banner_slider_cnt){
            console.log('1');
            //네비게이션 교체
            let num = $(banner_slider_nav_item+'.actived').children().attr('data-order');
            $(banner_slider_nav_item+'.actived').children().prev(num);
            //슬라이드 교체
            banner_slider_repeat_cnt = banner_slider_cnt;
            $(banner_slider_item).removeClass('actived');
            $(banner_slider_item).eq(banner_slider_cnt-1).addClass('actived');
            //네비게이션 교체
            num = $(banner_slider_nav_item).eq(banner_slider_cnt-1).children().attr('data-order');
            $(banner_slider_nav_item).eq(banner_slider_cnt-1).children().prev('ㅡ');
            $(banner_slider_nav_item).removeClass('actived')
            $(banner_slider_nav_item).eq(banner_slider_cnt-1).addClass('actived');
        }else{
            console.log('2');
            //슬라이드 교체
            banner_slider_repeat_cnt--;
            $(banner_slider_item+'.actived').removeClass('actived').prev().addClass('actived');
            //네비게이션 교체
            let num = $(banner_slider_nav_item+'.actived').children().attr('data-order');
            $(banner_slider_nav_item+'.actived').children().text(num);
            $(banner_slider_nav_item+'.actived').removeClass('actived').prev().addClass('actived');
            $(banner_slider_nav_item+'.actived').children().text('ㅡ');
        }
    }

    //슬라이더 네비게이션 이전
    $('.slider_nav-btn_left').click(function(){
        //자동반복 일시정지
        clearInterval(slider_repeat);
        //교체
        banner_slider_left_func();
        //자동반복 재개
        slider_repeat = setInterval(function(){
            slider_repeat_func();
        },slider_wait);
    });
    
    //슬라이더 네비게이션 다음
    $('.slider_nav-btn_right').click(function(){
        //자동반복 일시정지
        clearInterval(slider_repeat);
        //교체
        slider_repeat_func();
        //자동반복 재개
        slider_repeat = setInterval(function(){
            slider_repeat_func();
        },slider_wait);
    });

    //배너 슬라이더 네비게이션 생성
    for(let i=1;i<=banner_slider_cnt;i++){
        if(i==1){
            $('.banner_slider_nav-list').append(`<li class="banner_slider_nav-item actived"><button type="button" class="banner_slider_nav-btn" data-order="${i}">ㅡ</button></li>`);
        }else{
            $('.banner_slider_nav-list').append(`<li class="banner_slider_nav-item"><button type="button" class="banner_slider_nav-btn" data-order="${i}">${i}</button></li>`);
        }
    }

    //배너 슬라이더 네비게이션 클릭
    $('.banner_slider_nav-btn').click(function(){
        //자동반복 일시정지
        clearInterval(banner_slider_repeat);
        //슬라이더 교체
        let click_num = $(this).attr('data-order')-1;
        banner_slider_repeat_cnt = click_num;
        $(banner_slider_item).removeClass('actived')
        $(banner_slider_item).eq(click_num).addClass('actived');
        //네비게이션 교체
        let num = $(banner_slider_nav_item+'.actived').children().attr('data-order');
        $(banner_slider_nav_item+'.actived').children().text(num);
        $(banner_slider_nav_item+'.actived').removeClass('actived');
        $(this).parent().addClass('actived');
        $('.slider_nav-list').removeClass('actived');
        num = $(this).attr('data-order');
        $(this).text('ㅡ');
        //자동반복 재개
        banner_slider_repeat = setInterval(function(){
            banner_slider_repeat_func();
        },banner_slider_wait);
    });

    //네비게이션 메뉴
    $('.nav-btn').click(function(){
        $('.nav_all').addClass('actived');
    });
    $('.nav_all_inner').mouseleave(function(){
        $('.nav_all').removeClass('actived');
    });

    //네비게이션 게시판 리스트
    $('.nav-img_arrow').click(function(){
        if(!$(this).parent().hasClass('actived')){
            $('.nav_right-item').addClass('actived');
        }else{
            $('.nav_right-item').removeClass('actived');
        }
    });
    $('.nav_right-list').mouseleave(function(){
        $('.nav_right-item').removeClass('actived');
    });
    /*
    //다른 곳 클릭하면 닫침
    $(document).click(function(e){
        if(!$(e.target).hasClass('nav_right-item')){
            if(!$(e.target).parents().hasClass('nav_right-item')){
                $('.nav_right-item').removeClass('actived');
            }
        }
    });*/

    /* 제품 */
    $('.product_nav-item .product_nav-btn').click(function(){
        console.log($(this).parents('.product_head'));
        let num = $(this).attr('data-order');
        $(this).parent().siblings().children('.product_nav-btn').removeClass('actived');
        $(this).addClass('actived');
        $(this).parents('.product_head').next('.product_body').children('.product-list').removeClass('actived');
        $(this).parents('.product_head').next('.product_body').children(`.product-list[data-order=${num}]`).addClass('actived');
    });

    //좋아요
    $('.product-btn_favorite').click(function(){
        if($(this).hasClass('actived')){
            $(this).removeClass('actived');
        }else{
            $(this).addClass('actived');
        }
        return false;
    });

});