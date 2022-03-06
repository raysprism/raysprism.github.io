/* *************************************************************************** */

$(function(){

    /* *************************************************************************** */
    /* *************************************************************************** */
    /* *************************************************************************** */
    /* *************************************************************************** */
    /* *************************************************************************** */
    /* 공통 */
    let goto_spd = 1000;
    $('.bar_goto-btn_top, .modal_article-btn_gototop, .modal_article_bar_goto-btn_top').click(function(){
        $('html, body').stop().animate({scrollTop:0},goto_spd,'easeOutCubic');
    });
    $('.bar_goto-btn_bot, .modal_article_bar_goto-btn_bot').click(function(){
        $('html, body').stop().animate({scrollTop:$(document).height()-$(window).height()},goto_spd,'easeOutCubic');
    });

    /* *************************************************************************** */
    /* *************************************************************************** */
    /* *************************************************************************** */
    /* *************************************************************************** */
    /* *************************************************************************** */
    /* 홈(body#home) */

    /* *************************************************************************** */
    /* 스크롤 애니메이션 */

    let scroll_top = $(document).scrollTop(),
        scroll_bot = $(document).scrollTop()+$(window).height();

    $(document).ready(function(){
        func_scroll_anim();
    });
    $(document).on('scroll resize',function(){
        func_scroll_anim();
    });

    function func_scroll_anim(){
        //디바이스가 최소 너비보다 작을경우 initial-scale의 영향을 고려하지 않음
        $('.scroll .look').text($(document).scrollTop()+$(window).height());
        //디바이스가 최소 너비보다 작을경우 initial-scale의 영향을 고려함
        $('.scroll .cal').text(($(document).scrollTop()+$(window).height())+($(window).outerHeight()-$(window).innerHeight()));

        $('.anim').each(function(idx){
            let tar = this; //each안에 있는 setTimeout의 this와 충돌하기 때문에 변수에 담아 전달한다.
            scroll_top = $(document).scrollTop();
            scroll_bot = ($(document).scrollTop()+$(window).height())+($(window).outerHeight()-$(window).innerHeight()); //디바이스가 최소 너비보다 작을경우 initial-scale의 영향을 고려함
            let pos_top = $(tar).offset().top,
                pos_height = $(tar).offset().top-60;//+($(tar).height()/2);
            if(scroll_bot>pos_height){
                if(!$(tar).hasClass('anim_active')){
                    $(tar).addClass('anim_wait');
                }
                //동시에 여러개가 보여진다면 시간차 적용한다.
                /*setTimeout(function(){
                    $(tar).addClass('anim_active');
                },idx*100)*/
                if($('.anim_wait').length>0){
                    for(let i=0;i<$('.anim_wait').length;i++){
                        setTimeout(function(){
                            $('.anim_wait').eq(i).removeClass('anim_wait').addClass('anim_active');
                        },i*100)
                    }
                }
            }else{
                //시간차를 적용하지 않는다.
                //$(tar).removeClass('anim_active');
            }
        });
    }

    /* *************************************************************************** */
    /* *************************************************************************** */
    /* *************************************************************************** */
    /* *************************************************************************** */
    /* *************************************************************************** */
    /* 작업물(body#works) */

    /* *************************************************************************** */
    /* 작업물 - 검색 옵션 */
    $('.search_option-btn').on('ready click',function(){
        if(!$(this).hasClass('active')){
            let val = $(this).text();
            $('.search_option-btn').removeClass('active');
            $(this).addClass('active');
            $('.search_option_title-txt').text(val);
            if(val!='전체'){
                $('.search_list-item').removeClass('show anim_active');
                func_scroll_anim();
                $('.search_list-item').each(function(){
                    let type = $(this).attr('data-type');
                    if(type.match(val)){
                        $(this).addClass('show');
                    }
                });
            }else{
                $('.search_list-item').removeClass('show anim_active');
                func_scroll_anim();
                $('.search_list-item').addClass('show');
            }
        }
    });

    /* *************************************************************************** */
    /* 작업물 - 검색 결과 - 비포에프터 */

    //비포에프터 드래그 여부, 비포에프터 드래그 시작점
    let ba_drag = false,
        ba_drag_now = 0;

    //비포에프터 업데이트
    let ba_update = function(){
        $('.search_list-item_beforeafter').each(function(){
            //bar_pos_fix1은 왼쪽 넓이를 구한다.
            //bar_pos_fix2는 오른쪽 넓이를 구한다.
            let ba_width = $(this).width(),
                ba_left = $(this).offset().left,
                ba_pos = ba_left+ba_width,
                bar_width = $(this).children('.search_list-item_bar').width(),
                bar_left = $(this).children('.search_list-item_bar').offset().left,
                bar_pos = bar_left+bar_width,
                bar_pos_fix1 = bar_left-ba_left+(bar_width/2)+1,
                bar_pos_fix2 = ba_width-bar_pos_fix1;
            //Math.round() 해주어야 소수점이 생기면서 가운데 공간이 비어보이는 현상이 사라진다.
            $(this).children('.search_list-item_before').css({'width':Math.round((bar_pos_fix1/ba_width)*100)+'%'});
            $(this).children('.search_list-item_after').css({'width':Math.round((bar_pos_fix2/ba_width)*100)+'%'});
        });
    }

    //창크기 변경시 업데이트
    $(window).resize(function(){
        ba_update(); 
    });

    //비포에프터 드래그 시작
    $('.search_list-item_bar').on('mousedown touchstart',function(e){
        if(!ba_drag){
            $(this).addClass('actived');
            //마우스와 터치 좌표 구분
            if(e.pageX!=undefined){
                ba_drag_now = e.pageX;
            }else{
                ba_drag_now = e.originalEvent.touches[0].pageX;
            }
            ba_drag = true;
        }
        //html 요소가 클릭되어 발생되는 이벤트 중지
        return false;
    });

    //슬라이더 드래그 이동
    $(document).on('mousemove touchmove',function(e){ //드래그 상태에서 마우스 움직임
        if(ba_drag){
            //마우스인지 터치인지 구분, 부모요소 왼쪽 좌표, 부모요소 넓이, 부모요소 오른쪽 좌표
            let ba_drag_refresh,
                ba_left = $('.search_list-item_bar.actived').parent().offset().left,
                ba_width = $('.search_list-item_bar.actived').parent().width(),
                ba_pos = ba_left+ba_width;
            if(e.pageX!=undefined){
                ba_drag_refresh = e.pageX;
            }else{
                ba_drag_refresh = e.originalEvent.touches[0].pageX;
            }
            if(ba_drag_refresh<ba_left||ba_drag_refresh>ba_pos){
                ba_drag_stop_func();
            }else{
                $('.search_list-item_bar.actived').css({'left':(((ba_drag_refresh-ba_left)/ba_width)*100)+'%'});
                ba_update();
            }
        }
    });

    //비포에프터 드래그 중단
    $('.search_list-item_bar').on('mouseup touchend',function(e){
        ba_drag_stop_func();
    });

    function ba_drag_stop_func(){
        if(ba_drag){
            $('.search_list-item_bar').removeClass('actived');
            ba_drag = false;
        }
    }

    //이전 보기
    $('.search_list-item_btn_before').click(function(){
        $(this).parent().parent().parent().children('.search_list-item_bar').css({'left':'100%'});
        ba_update();
    });

    //양쪽 보기
    $('.search_list-item_btn_both').click(function(){
        $(this).parent().parent().parent().children('.search_list-item_bar').css({'left':'50%'});
        ba_update();
    });

    //이후 보기
    $('.search_list-item_btn_after').click(function(){
        $(this).parent().parent().parent().children('.search_list-item_bar').css({'left':'0'});
        ba_update();
    });

    /* *************************************************************************** */
    /* 작업물 - 모달 글 */

    //스크롤 위치 기억
    let modal_scroll,
        modal_ready = true,
        modal_spd = 200,
        modal_close_btn = '.modal_article_overlay, .modal_article_bar_close-btn, .modal_article-btn_close';

    //모달 열기
    $('.search_list-item_link').click(function(){
        let src = $(this).attr('data-src');
        modal_scroll = $(document).scrollTop(); //덮어쓰우기
        if(src==""){
            //해당 링크로 이동
        }else{
            //해당 data-src를 모달로 불러옴
            if(modal_ready){
                //중복 작동 방지 실행
                modal_ready = false;
                $('.main').css({'position':'fixed','top':'-'+modal_scroll+'px','right':'0','bottom':'0','left':'0'});
                //$('.modal_article_content').load('./'+src+'/index.html');
                $('.modal_article_content').load(''+src+'m/index.html');
                $('.modal_article_blur, .modal_article').addClass('active');
                //모달을 띄울때만 transition 길이를 늘려주기 위해 animate 이전에 클래스를 추가해준다.
                //$('.modal_article_inner, .modal_article_bar').addClass('transition');
                //css가 아닌 animate로 한 이유는 animate가 완료된 후에 이벤트 작동시키기 위해서다.
                $('.modal_article').stop().animate({'opacity':1},modal_spd,function(){
                    //나타나는 css 애니메이션 작동하기 위해 클래스 추가
                    $('.modal_article_inner, .modal_article_bar').addClass('anim_m');
                    //닫기 기능있는 버튼에 페이드인, 페이드아웃 되는 동안 다시 클릭되서 animate가 다시 작동하는걸 방지하기 위해 animate가 끝나면 acitve를 붙혀 이벤트 활성화
                    $(modal_close_btn).addClass('active');
                });
                $(document).scrollTop(0);
                return false;
            }
        }
    });

    //모달 닫기
    $(modal_close_btn).click(function(){
        if($(this).hasClass('active')){
            //한번 클릭하면, 다시 클릭되지 않도록
            $(modal_close_btn).css('pointer-events','none');
            //active가 추가된 것을 동적으로 읽기 어려우니 if문으로 클래스를 포함한지 확인하여 작동 가능한 여부 확인
            $(modal_close_btn).removeClass('active');
            //모달을 띄울때만 tranistion 길이를 늘려주기 위해 필요했음으로 클래스를 anim_m보다 미리 제거한다.
            //$('.modal_article_inner, .modal_article_bar').removeClass('transtion');
            //없어지는 css 애니메이션 작동하기 위해 클래스 제거
            $('.modal_article_inner, .modal_article_bar').removeClass('anim_m');
            //닫기 기능있는 버튼에 페이드인, 페이드아웃 되는 동안 다시 클릭되서 animate가 다시 작동하는걸 방지하기 위해 animate가 끝나면 acitve를 붙혀 이벤트 활성화하던 것을 제거
            $('.modal_article_overlay').removeClass('active');
            //처음 작동하는 animate는 아무 역할을 하지 않음. setTimeout 대신 대기 시간으로 사용.
            $('.modal_article').stop().animate({'opacity':1},modal_spd,function(){
                //css가 아닌 animate로 한 이유는 animate가 완료된 후에 이벤트 작동시키기 위해서다.
                $('.modal_article').stop().animate({'opacity':0},modal_spd,function(){
                    //.modal_article에 추가된 inline style을 제거
                    $(this).removeAttr('style');
                    //버튼에 추가된 inline style을 제거
                    $(modal_close_btn).removeAttr('style');
                    $('.modal_article_blur, .modal_article').removeClass('active');
                    $('.main').removeAttr('style').css({'position':'relative'});
                    $(document).scrollTop(modal_scroll);
                    $('.modal_article_content').html('');
                    //중복 작동 방지 해제
                    modal_ready = true;
                });
            });
        }
    });

    //소개 페이지에서 작업물을 클릭해서 넘어오면 모달 자동 열기
    $(document).ready(function(){
        if(location.href.match(/(?<=\/w#).*/gm)[0]!=undefined){
            $('#'+location.href.match(/(?<=\/w#).*/gm)[0]+' .search_list-item_link').click();
            //IE10 이상 가능, HTML5 이상 가능(#숫자를 없애주려 했는데, 뒤로가기시 내역이 남기에 보류)
            //history.pushState(null, null, 'w');
        }
    });

});