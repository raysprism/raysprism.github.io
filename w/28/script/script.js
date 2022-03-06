/* ########################################################################### */
/* 헤더 검색 폼 포커스로 시작 */
$('.header_form_box').addClass('focus');
$('.header_form_input').focus();

/* ########################################################################### */
/* 배너 상단 닫기 */
$('.head_banner_btn_close').on('click',function(){
    $('.head_banner').remove();
});

/* ########################################################################### */
/* 헤더 스크롤 다운 */
$(window).on('scroll',function(){
    //스크롤하면 따라온다.
    if(window.pageYOffset>=300){
        $('body').addClass('scroll');
        $('body.scroll .header_form_input').attr('placeholder','검색어를 입력해 주세요.');
    }else{
        $('body').removeClass('scroll');
        $('body.scroll .header_form_input').attr('placeholder','');
    }
});

/* ########################################################################### */
/* 헤더 검색 한글입력기 */

/* 헤더 검색 한글입력기 - 열기 */
$('.header_form_btn_keyinput').on('click',function(){
    $('.header_keyinput').toggle();
    //한글입력기가 열리면 헤더 검색 자동완성창이 닫힌다.
    $('.header_form').removeClass('popup');
    $('.header_form_btn_autocomplete').removeClass('actived');
    $('.header_popup').removeClass('actived');
});

/* ************************************************** */
/* 헤더 검색 한글입력기 - 닫기 */
$('.header_keyinput_btn_close').on('click',function(){
    $(this).parent().parent().hide();
    //위치 초기화
    $(this).parent().parent().css({'top':'39px','left':'474px'});
});

/* ************************************************** */
/* 헤더 검색 한글입력기 - 키보드/마우스로 입력하기 */
$('.header_keyinput_btn_keyboard').on('click',function(){
    $('.header_keyinput_type').removeClass('actived');
    $('.header_keyinput_keyboard').addClass('actived');
    $('.header_keyinput_btn').removeClass('actived');
    $(this).addClass('actived');
});
$('.header_keyinput_btn_mouse').on('click',function(){
    $('.header_keyinput_type').removeClass('actived');
    $('.header_keyinput_mouse').addClass('actived');
    $('.header_keyinput_btn').removeClass('actived');
    $(this).addClass('actived');
});

/* ************************************************** */
/* 헤더 검색 한글입력기 - 마우스로 입력하기(한글/영문) */
$('.header_keyinput_mouse_btn_lang_kr').on('click',function(){
    $('.header_keyinput_mouse_type').removeClass('actived');
    $('.header_keyinput_mouse_lang_kr').addClass('actived');
    $('.header_keyinput_mouse_btn').removeClass('actived');
    $(this).addClass('actived');
});
$('.header_keyinput_mouse_btn_lang_eng').on('click',function(){
    $('.header_keyinput_mouse_type').removeClass('actived');
    $('.header_keyinput_mouse_lang_eng').addClass('actived');
    $('.header_keyinput_mouse_btn').removeClass('actived');
    $(this).addClass('actived');
});

/* ************************************************** */
/* 헤더 검색 한글입력기 - 마우스로 입력하기(문자입력(일부)) */
$('.header_keyinput_mouse_lang_btn').on('click',function(){
    var txt = $(this).text();
    var val = $('.header_form_input').val();
    $('.header_form_input').val(val+txt);
    $('.header_form_input').focus();
});

/* ************************************************** */
/* 헤더 검색 한글입력기 - 마우스로 입력하기(띄어쓰기) */
$('.header_keyinput_mouse_btn_space').on('click',function(){
    var val = $('.header_form_input').val();
    $('.header_form_input').val(val+' ');
    $('.header_form_input').focus();
});

/* ************************************************** */
/* 헤더 검색 한글입력기 - 마우스로 입력하기(지우기) */
$('.header_keyinput_mouse_btn_backspace').on('click',function(){
    var val = $('.header_form_input').val();
    $('.header_form_input').val(val.substr(0,val.length-1));
    $('.header_form_input').focus();
});

/* ************************************************** */
/* 헤더 검색 한글입력기 - 마우스로 입력하기(초기화) */
$('.header_keyinput_mouse_btn_reset').on('click',function(){
    $('.header_form_input').val('');
    $('.header_form_input').focus();
});

/* ########################################################################### */
/* 헤더 검색 폼 포커스 */
$('.header_form_input').focusin(function(){
    //헤더 검색 폼 포커스 추가
    $('.header_form_box').addClass('focus');
});
$('.header_form_input').focusout(function(){
    //헤더 검색 폼 포커스 제거
    $('.header_form_box').removeClass('focus');
});

/* ************************************************** */
/* 헤더 검색 팝업 검색창 토글 */
$('.header_form_input').on('click',function(e){
    if(!$('body').hasClass('scroll')){
        if($('.header_form_btn_autocomplete').hasClass('actived')){
            $('.header_form').removeClass('popup');
            $('.header_form_btn_autocomplete').removeClass('actived');
            $('.header_popup').removeClass('actived');
        }else{
            //헤더 검색 한글입력기 닫기
            $('.header_keyinput').hide();
            //헤더 검색 한글입력기 위치 초기화
            $('.header_keyinput').css({'top':'39px','left':'474px'});
            //헤더 검색 팝업창
            $('.header_form').addClass('popup');
            $('.header_form_btn_autocomplete').addClass('actived');
            $('.header_popup').addClass('actived');
            //헤더 검색 팝업창 아이템 호버효과 초기화
            $('.header_popup .over').removeClass('over');
        }
        //검색창 포커스가 풀리지 않도록 포커스한다.
        $('.header_form_input').focus();
    }
});

/* ************************************************** */
/* 헤더 검색 팝업 버튼 토글 */
$('.header_form_btn_autocomplete').on('mouseup',function(){
    if($(this).hasClass('actived')){
        $('.header_form').removeClass('popup');
        $(this).removeClass('actived');
        $('.header_popup').removeClass('actived');
    }else{
        //검색창 자동완성창이 열리면 한글입력기를 숨긴다.
        $('.header_keyinput').hide();
        $('.header_form').addClass('popup');
        $(this).addClass('actived');
        $('.header_popup').addClass('actived');
        //검색창 자동완성창 아이템 호버효과 초기화
        $('.header_popup .over').removeClass('over');
    }
    //검색창 포커스가 풀리지 않도록 포커스한다.
    $('.header_form_input').focus();
});

/* ************************************************** */
/* 헤더 검색 팝업 아이템 호버 효과 */
$('.header_popup_quick').hover(function(){
    $('.header_popup .over').removeClass('over');
    $(this).addClass('over');
});
$('.header_popup_item').hover(function(){
    $('.header_popup .over').removeClass('over');
    $(this).addClass('over');
});

/* ************************************************** */
/* 헤더 검색 팝업 자동완성 기능 버튼 토글 */
$('.header_popup_auto .btn-ac-toggle').on('click',()=>{
    $('.header_popup_auto .btn-ac-toggle').toggleClass('actived');
});

/* ************************************************** */
/* 헤더 검색 팝업 외 클릭시 팝업 닫기 */
$('html').on('click',(e)=>{
    if($('.header_popup').hasClass('actived')){
        if(!$(e.target).parents('.header_search').length&&!$(e.target).hasClass('header_form_input')){
            $('.header_form').removeClass('popup');
            $('.header_form_btn_autocomplete').removeClass('actived');
            $('.header_popup').removeClass('actived');
        }
    }    
});

/* ************************************************** */
/* 헤더 검색 팝업 자동완성 끄기/켜기 */
$('.header_popup_btn_autocomplete').on('click',function(){
    let txt = $(this).text();
    let tar = '.header_popup_quick, .header_popup_list, .header_popup_auto';
    if(txt=='자동완성 끄기'){
        if(confirm("자동완성 기능을 사용 중지하시겠습니까?")){
            $(this).text('자동완성 켜기');
            $(tar).hide()    
        }
    }else{
        if(confirm("자동완성 기능을 사용하시겠습니까?")){
            $(this).text('자동완성 끄기');
            $(tar).show()
        }
    }
    //검색창 포커스가 풀리지 않도록 포커스한다.
    $('.header_form_input').focus();
});

/* ########################################################################### */
/* 헤더 글로벌메뉴 날씨 자동 전환 */
let headerWeatherChangeSpd = 3000;
    headerWeatherRepeat = setInterval(function(){headerWeatherStart()},headerWeatherChangeSpd),
    headerWeatherParent = '.header_gnb_menu_weather',
    headerWeahterParentHeight = $(headerWeatherParent).height(),
    headerWeatherMoveSpd = $('.header_gnb_menu_weather_item').css('transition','top 0.5s');
    headerWeatherItem = '.header_gnb_menu_weather_item';

function headerWeatherStart(){
    $(headerWeatherItem).first().css('top',-headerWeahterParentHeight+'px');
    $(headerWeatherItem).last().css('top',0+'px');
    setTimeout(function(){
        $(headerWeatherItem).first().css('top',headerWeahterParentHeight+'px').appendTo(headerWeatherParent);
    },500);
}

$(headerWeatherItem).mouseover(function(){ //중지
    clearInterval(headerWeatherRepeat);
    $(this).css('cursor','pointer');
});
$(headerWeatherItem).mouseout(function(){ //재시작
    headerWeatherRepeat = setInterval(function(){headerWeatherStart()},headerWeatherChangeSpd);
    $(this).css('cursor','default');
});

/* ************************************************** */
/* 헤더 글로벌메뉴 더보기 */
$('.header_gnb_menu_item_more_btn').on('click',()=>{
    if($('.header_gnb_more').hasClass('actived')){
        $('.header_gnb_menu_etc').removeClass('actived');
        $('.header_gnb_menu_weather').addClass('actived');
        $('.header_gnb_more').removeClass('actived');
        $('.header_gnb_menu_item_more').removeClass('actived');
        $('.header_gnb_menu_item_more_btn .text').text('더보기');
    }else{
        $('.header_gnb_menu_etc').addClass('actived');
        $('.header_gnb_menu_weather').removeClass('actived');
        $('.header_gnb_more').addClass('actived');
        $('.header_gnb_menu_item_more').addClass('actived');
        $('.header_gnb_menu_item_more_btn .text').text('접기');
    }
});

/* ########################################################################### */
/* 컨테이너 우측 스크롤 고정 */
//★코드가 좀 지저분해서 정리 필요
let delta = 0;
$(window).on('scroll mousewheel',function(e){
    let scrollTop = window.pageYOffset; //현재 스크롤, 스크롤 윗부분
    let scrollBot = window.pageYOffset+window.innerHeight; //스크롤 아랫부분
    
    if(delta>scrollTop){ //휠업
        //스크롤을 내렸다가 올렸을경우
        if(!$('.container_right').hasClass('is_fixed_top')&&$('.container_right').hasClass('is_fixed_bot')&&!$('.container_right').hasClass('is_stop')&&!$('.container_right').hasClass('is_absolute')){
            $('.container_fixed').css({'top':($('.container_fixed').offset().top-240-20)+'px'});
            $('.container_right').addClass('is_absolute');
        }
        //스크롤을 대상 컨테이너의 절대좌표 Y축보다 높이 올렸을경우
        if(scrollTop<=$('.container_right').offset().top-95){
            $('.container_fixed').removeAttr('style');
            $('.container_right').removeClass('is_fixed_top');
            $('.container_right').removeClass('is_fixed_bot');
            $('.container_right').removeClass('is_stop');
            $('.container_right').removeClass('is_absolute');
        }else if(delta<=$('.container_fixed').offset().top-95){
            $('.container_fixed').removeAttr('style');
            $('.container_right').addClass('is_fixed_top');
            $('.container_right').removeClass('is_fixed_bot');
            $('.container_right').removeClass('is_stop');
            $('.container_right').removeClass('is_absolute');
        }
    }else if(delta<scrollTop){ //휠다운
        //우측 컨테이너가 시작되는 절대좌표 Y축과 높이를 구해서 더한다.
        if(scrollBot>=($('.container_right').offset().top+$('.container_right').height()+36)){
            //스크롤을 맨위에서 내렸을경우
            if(!$('.container_right').hasClass('is_fixed_top')&&!$('.container_right').hasClass('is_fixed_bot')&&!$('.container_right').hasClass('is_stop')){
                $('.container_right').addClass('is_fixed_bot');
            }
            //스크롤을 대상 컨테이너보다 높이 올렸다 내렸을경우
            if($('.container_right').hasClass('is_fixed_top')&&!$('.container_right').hasClass('is_fixed_bot')&&!$('.container_right').hasClass('is_stop')&&!$('.container_right').hasClass('is_absolute')){
                $('.container_fixed').css({'top':($('.container_fixed').offset().top-240-25)+'px'});
                $('.container_right').addClass('is_absolute');
            }
        }
        //스크롤을 대상 컨테이너보다 올렸다가 대상 컨테이너보다 내렸을경우
        if(scrollBot>=($('.container_fixed').offset().top+$('.container_fixed').height()+36)){
            if($('.container_right').hasClass('is_absolute')){
                $('.container_fixed').removeAttr('style');
                $('.container_right').removeClass('is_fixed_top');
                $('.container_right').addClass('is_fixed_bot');
                $('.container_right').removeClass('is_stop');
                $('.container_right').removeClass('is_absolute');
            }
        }
        //컨테이너가 시작되는 절대좌표 Y축과 높이를 구해서 더한다. 20은 컨테이너의 margin, 30은 컨테이너의 padding이다.
        if(scrollBot>=($('.container').offset().top+$('.container').height()+20+30)){
            if(!$('.container_right').hasClass('is_fixed_top')&&$('.container_right').hasClass('is_fixed_bot')&&!$('.container_right').hasClass('is_stop')){
                $('.container_right').removeClass('is_fixed_bot');
                $('.container_right').addClass('is_stop');
            }
        }
    }
    //최신값 대입
    delta = window.pageYOffset;
});

/* ########################################################################### */
/* 뉴스스탠드 헤드뉴스 */
let headNewsChangeSpd = 2000;
    headNewsRepeat = setInterval(function(){headNewsStart()},headNewsChangeSpd),
    headNewsParent = '.headnews_left_list',
    headNewsParentHeight = $(headNewsParent).height(),
    headNewsMoveSpd = $('.headnews_left_item').css('transition','top 0.5s');
    headNewsItem = '.headnews_left_item';

function headNewsStart(){
    $(headNewsItem).eq(0).css('top',-headNewsParentHeight+'px');
    $(headNewsItem).eq(1).css('top',0);
    setTimeout(function(){
        $(headNewsItem).eq(0).css('top',headNewsParentHeight+'px').appendTo(headNewsParent);
    },500);
}

$(headNewsItem).mouseover(function(){ //중지
    clearInterval(headNewsRepeat);
    $(this).css('cursor','pointer');
});
$(headNewsItem).mouseout(function(){ //재시작
    headNewsRepeat = setInterval(function(){headNewsStart()},headNewsChangeSpd);
    $(this).css('cursor','default');
});

/* ************************************************** */
/* 뉴스스탠드 유틸 */
$('.newsutil_btn_follow').on('click',function(){
    //초기화
    $('.newsutil_right').removeClass('actived');
    $('.newsutil_left_btn').removeClass('actived');
    $(this).addClass('actived');
    $('.bodynews_con').removeClass('actived');
    $('.bodynews_follow').addClass('actived');
});
$('.newsutil_btn_whole').on('click',function(){
    //뉴스스탠드 뉴스 리스트 처음으로 초기화
    $('.bodynews_whole_list_item.actived .num .min').text(1);
    $('.bodynews_whole_list_item').removeClass('actived');
    $('.bodynews_whole_list_item').first().addClass('actived');
    $('.bodynews_whole_list_item.actived .num .min').text(1);
    $('.bodynews_whole_list_group').removeClass('actived');
    $('.bodynews_whole_list_group:first-child').addClass('actived');
    clearInterval(bodynews_auto_change);
    bodynews_auto_change = setInterval(bodynews_auto_change_start, bodynews_auto_change_wait);

    $('.newsutil_right').addClass('actived');
    $('.newsutil_left_btn').removeClass('actived');
    $(this).addClass('actived');
    $('.bodynews_con').removeClass('actived');
    $('.bodynews_whole').addClass('actived');
});

/* ************************************************** */
/* 뉴스스탠드 뉴스 타입 */
$('.newsutil_btn_list').on('click',function(){
    //뉴스스탠드 뉴스 리스트 처음으로 초기화
    $('.bodynews_whole_list_item.actived .num .min').text(1); //기존것 초기화
    $('.bodynews_whole_list_item').removeClass('actived');
    $('.bodynews_whole_list_item').first().addClass('actived'); //첫번째 선택
    $('.bodynews_whole_list_item.actived .num .min').text(1);
    $('.bodynews_whole_list_group').removeClass('actived');
    $('.bodynews_whole_list_group:first-child').addClass('actived');
    clearInterval(bodynews_auto_change);
    bodynews_auto_change = setInterval(bodynews_auto_change_start, bodynews_auto_change_wait);

    $('.newsutil_right_btn').removeClass('actived');
    $(this).addClass('actived');
    $('.bodynews_whole_type').removeClass('actived');
    $('.bodynews_whole_list').addClass('actived');
});
$('.newsutil_btn_gallery').on('click',function(){
    $('.newsutil_right_btn').removeClass('actived');
    $(this).addClass('actived');
    $('.bodynews_whole_type').removeClass('actived');
    $('.bodynews_whole_gal').addClass('actived');
});

/* ************************************************** */
/* 뉴스스탠드 뉴스 리스트 */
for(var i=1;i<=7;i++){
    $('.bodynews_whole_list_item:nth-of-type('+i+') .num .max').text($('.bodynews_whole_list_group'+i).length);    
}

/* ************************************************** */
var bodynews_auto_change_wait = 1500;
var bodynews_auto_change = setInterval(bodynews_auto_change_start, bodynews_auto_change_wait);
function bodynews_auto_change_start(){
    if($('.newsutil_btn_list').hasClass('actived')){
        listtype_change();
    }else{
        clearInterval(bodynews_auto_change);
    }
}

$('.bodynews_whole_list_item .btn').on('click',function(){
    if(!$(this).parent().hasClass('actived')){
        //사이드 선택
        var tar = '.bodynews_whole_list_item';
        //사이드 기존 .actived클래스 삭제
        $(tar+'.actived').removeClass('actived');
        //사이드 .item 클래스 선택해서, .actived클래스 추가
        $(this).parent().addClass('actived');
        //사이드 숫자 초기화
        $(this).find('.min').text(1);
        //.group 클래스 뒤에 숫자를 추가하기 위함
        var tar_index = $(tar+'.actived').index(tar)+1;
        //그룹 선택
        var group_tar = '.bodynews_whole_list_group';
        //그룹 기존 .actived클래스 삭제
        $(group_tar+'.actived').removeClass('actived');
        //그룹 .group+숫자 클래스 선택해서. 해당 클래스 .first() 요소에 .actived클래스를 추가
        $(group_tar+tar_index).first().addClass('actived');
        //자동재생 초기화
        clearInterval(bodynews_auto_change);
        bodynews_auto_change = setInterval(bodynews_auto_change_start, bodynews_auto_change_wait);
    }
});

$('.bodynews_whole_list_btn_left').on('click',function(){
    //자동재생 초기화
    clearInterval(bodynews_auto_change);
    bodynews_auto_change = setInterval(bodynews_auto_change_start, bodynews_auto_change_wait);
    //사이드 선택
    var side_tar = '.bodynews_whole_list_item';
    //현재 .actived된 사이드의 순서
    var side_tar_index = $(side_tar+'.actived').index();
    //현재 .actived된 사이드의 다음 순서
    var side_tar_prev = $(side_tar+'.actived').prev().index();
    //그룹 선택
    var group_tar = '.bodynews_whole_list_group';
    //현재 .actived된 .group의 순서
    var group_tar_index = $(group_tar+'.actived').index()+1;
    //현재 .actived된 .group의 다음 순서
    var group_tar_prev = $(group_tar+'.actived').prev().index()+1;
    console.log('side_tar_index')
    console.log(side_tar_index)
    console.log('side_tar_prev')
    console.log(side_tar_prev)
    console.log('group_tar_prev')
    console.log(group_tar_prev)
    //현재 .actived된 사이드에 해당하는 .group+숫자의 max보다 작을경우
    if(Number($(side_tar+'.actived .num .min').text()) > 1){
        //현재 .actived된 사이드의 .min의 값을 -1
        $(side_tar+'.actived .num .min').text(Number($(side_tar+'.actived .num .min').text())-1);
        //현재 .actived된 .group의 기존 .actived클래스를 삭제
        $(group_tar+'.actived').removeClass('actived');
        //현재 .actived된 .group의 다음 .group에 .actived클래스를 추가
        $(group_tar+':nth-of-type('+group_tar_prev+')').addClass('actived');
    }else if(Number($(side_tar+'.actived .num .min').text())-1 < 1){
        //.min이 .max와 같음으로 다음 사이드의 .item으로 넘어간다.
        //마지막 사이드 .item이 아닐경우
        if(side_tar_index != 0){
            //현재 사이드의 .actived클래스를 삭제
            $(side_tar+'.actived').removeClass('actived');
            //현재 사이드이었던 요소의 다음 요소에 .actived클래스를 추가
            $(side_tar+':nth-of-type('+(side_tar_prev+1)+')').addClass('actived');
            //사이드가 바뀌면 초기화
            $(side_tar+'.actived .num .min').text($(side_tar+'.actived .num .max').text());
            //현재 그룹의 .actived클래스를 삭제
            $(group_tar+'.actived').removeClass('actived');
            //현재 그룹이었던 요소의 다음 요소에 .actived클래스를 추가
            $(group_tar+':nth-of-type('+group_tar_prev+')').last().addClass('actived');
        }else{
            $(side_tar+'.actived').removeClass('actived');
            $(side_tar+':nth-last-of-type(1)').addClass('actived');
            $(side_tar+'.actived .num .min').text($(side_tar+'.actived .num .max').text());
            $(group_tar+'.actived').removeClass('actived');
            $(group_tar+':nth-last-of-type(1)').addClass('actived');
        }   
    }
});

function listtype_change(){
    //자동재생 초기화
    clearInterval(bodynews_auto_change);
    bodynews_auto_change = setInterval(bodynews_auto_change_start, bodynews_auto_change_wait);
    //사이드 선택
    var side_tar = '.bodynews_whole_list_item';
    //현재 .actived된 사이드의 순서
    var side_tar_index = $(side_tar+'.actived').index();
    //현재 .actived된 사이드의 다음 순서
    var side_tar_next = $(side_tar+'.actived').next().index();
    //그룹 선택
    var group_tar = '.bodynews_whole_list_group';
    //현재 .actived된 .group의 순서
    var group_tar_index = $(group_tar+'.actived').index()+1;
    //현재 .actived된 .group의 다음 순서
    var group_tar_next = $(group_tar+'.actived').next().index()+1;
    //현재 .actived된 사이드에 해당하는 .group+숫자의 max보다 작을경우
    if(Number($(side_tar+'.actived .num .min').text()) < Number($(side_tar+'.actived .num .max').text())){
        //현재 .actived된 사이드의 .min의 값을 +1
        $(side_tar+'.actived .num .min').text(Number($(side_tar+'.actived .num .min').text())+1);
        //현재 .actived된 .group의 기존 .actived클래스를 삭제
        $(group_tar+'.actived').removeClass('actived');
        //현재 .actived된 .group의 다음 .group에 .actived클래스를 추가
        $(group_tar+':nth-of-type('+group_tar_next+')').addClass('actived');
    }else if(Number($(side_tar+'.actived .num .min').text())+1 > Number($(side_tar+'.actived .num .max').text())){
        //.min이 .max와 같음으로 다음 사이드의 .item으로 넘어간다.
        //마지막 사이드 .item이 아닐경우
        if(side_tar_index+1 != $(side_tar).length){
            //현재 사이드의 .actived클래스를 삭제
            $(side_tar+'.actived').removeClass('actived');
            //현재 사이드이었던 요소의 다음 요소에 .actived클래스를 추가
            $(side_tar+':nth-of-type('+(side_tar_next+1)+')').addClass('actived');
            //사이드가 바뀌면 초기화
            $(side_tar+'.actived .num .min').text(1);
            //현재 그룹의 .actived클래스를 삭제
            $(group_tar+'.actived').removeClass('actived');
            //현재 그룹이었던 요소의 다음 요소에 .actived클래스를 추가
            $(group_tar+':nth-of-type('+group_tar_next+')').addClass('actived');
        }else{
            $(side_tar+'.actived').removeClass('actived');
            $(side_tar+':nth-of-type(1)').addClass('actived');
            $(side_tar+'.actived .num .min').text(1);
            $(group_tar+'.actived').removeClass('actived');
            $(group_tar+':nth-of-type(1)').addClass('actived');
        }   
    }
}

//다음 버튼
$('.bodynews_whole_list_btn_right').on('click',function(){
    listtype_change(); //다음으로 자동 전환되기에 함수로 호출한다.
});

/* ************************************************** */
/* 뉴스스탠드 뉴스 갤러리 이동 */
//이전 버튼
$('.bodynews_whole_gal_btn_left').on('click',function(){
    var tar = '.bodynews_whole_gal_box';
    var x = $(tar+'.actived').index();
    var y = $(tar+'.actived').prev().index();
    if(x > 0){
        $(tar).removeClass('actived');
        $(tar).eq(y).addClass('actived');
        $(this).css('display','block'); //이전 버튼 보이기
        $(this).next().css('display','block'); //다음 버튼 보이기
    }
    if(x-1 == 0){
        $(this).css('display','none'); //이전 버튼 감추기
    }
});
//다음 버튼
$('.bodynews_whole_gal_btn_right').on('click',function(){
    var tar = '.bodynews_whole_gal_box';
    var x = $(tar+'.actived').index();
    var y = $(tar+'.actived').next().index();
    if(x < $(tar).length){
        $(tar).removeClass('actived');
        $(tar).eq(y).addClass('actived');
        $(this).css('display','block'); //다음 버튼 보이기
        $(this).prev().css('display','block'); //이전 버튼 보이기
    }
    if(y == $(tar).length-1){
        $(this).css('display','none'); //다음 버튼 감추기
    }
});

/* ########################################################################### */
/* 테마캐스트 네비게이션 */
$('.themecast_nav_item .btn').on('click',function(){
    $('.themecast_nav_item .btn').parent().removeClass('actived');
    $(this).parent().addClass('actived');

    container_post_btn_refresh();
});

//네비게이션이 작동중인 확인하는 변수 선언
var is_container_post_move = false;

$('.themecast_nav_btn_prev').on('click',function(){
    if(!is_container_post_move){
        var tar_item = '.themecast_nav_item';
        var now_item = $(tar_item).index('.themecast_nav_item.actived');
        var prev_item_index = $(tar_item+'.actived').prev().index(tar_item);
        
        var now_list_index = $(tar_item+'.actived').parent().index('.themecast_nav_list'); //보류 수정해야함. 자식 개수 파악하기 위한 것.
        var prev_list_index = $(tar_item+'.actived').parent().prev().index('.themecast_nav_list');
        
        //중복 안되게 기존 .actived 삭제
        $(tar_item).removeClass('actived');
        
        //list의 마지막 item인가?
        if(prev_item_index!=-1){
            //아닐경우 다음 item에 .active를 추가.
            $(tar_item).eq(prev_item_index).addClass('actived');
        }else{
            is_container_post_move = true;
            //맞을경우 다음 list의 첫번째 item에 .active를 추가.
            var pos = $('.themecast_nav_box').css('transform').split(',');
            pos = Number(pos[4]); //x축
            pos = $('.themecast_nav_box').css('transform','translate3d('+(pos+750)+'px,0px,0px)');
            $('.themecast_nav_list').eq(prev_list_index).children().last().addClass('actived');
            //이동이 완료되었을경우
            setTimeout(function(){
                is_container_post_move = false;
            }, 500);
        }

        container_post_btn_refresh();
    }
});

$('.themecast_nav_btn_next').on('click',function(){
    if(!is_container_post_move){
        var tar_item = '.themecast_nav_item';
        var now_item = $(tar_item).index('.themecast_nav_item.actived');
        var next_item_index = $(tar_item+'.actived').next().index(tar_item);
        
        var now_list_index = $(tar_item+'.actived').parent().index('.themecast_nav_list'); //보류 수정해야함. 자식 개수 파악하기 위한 것.
        var next_list_index = $(tar_item+'.actived').parent().next().index('.themecast_nav_list');
        
        //중복 안되게 기존 .actived 삭제
        $(tar_item).removeClass('actived');
        
        //list의 마지막 item인가?
        if(next_item_index!=-1){
            //아닐경우 다음 item에 .active를 추가.
            $(tar_item).eq(next_item_index).addClass('actived');
        }else{
            is_container_post_move = true;
            //맞을경우 다음 list의 첫번째 item에 .active를 추가.
            var pos = $('.themecast_nav_box').css('transform').split(',');
            pos = Number(pos[4]); //x축
            pos = $('.themecast_nav_box').css('transform','translate3d('+(pos-750)+'px,0px,0px)');
            $('.themecast_nav_list').eq(next_list_index).children().first().addClass('actived');
            //이동이 완료되었을경우
            setTimeout(function(){
                is_container_post_move = false;
            }, 500);
        }

        container_post_btn_refresh();
    }
});

function container_post_btn_refresh(){
    //첫번째 리스트의 첫번째 아이템일 경우 화살표를 숨긴다.
    if($('.themecast_nav_item').first().hasClass('actived')){
        $('.themecast_nav_btn_prev').removeClass('actived');
    }else{
        $('.themecast_nav_btn_prev').addClass('actived');
    }

    //첫번째 리스트의 첫번째 아이템일 경우 화살표를 숨긴다.
    if($('.themecast_nav_item').last().hasClass('actived')){
        $('.themecast_nav_btn_next').removeClass('actived');
    }else{
        $('.themecast_nav_btn_next').addClass('actived');
    }
}

/* ************************************************** */
/* 테마캐스트 바이브 */

$('.themecast_body_enter_vibe_btn_prev').on('click',function(){
    var tar_item = '.themecast_body_enter_vibe_item';
    var now_item = $(tar_item).index('.themecast_body_enter_vibe_item.actived');
    var prev_item_index = $(tar_item+'.actived').prev().index(tar_item);
    
    var now_list_index = $(tar_item+'.actived').parent().index('.themecast_body_enter_vibe_list'); //보류 수정해야함. 자식 개수 파악하기 위한 것.
    var prev_list_index = $(tar_item+'.actived').parent().prev().index('.themecast_body_enter_vibe_list');
    
    //중복 안되게 기존 .actived 삭제
    $(tar_item).removeClass('actived');
    
    //list의 마지막 item인가?
    if(prev_item_index!=-1){
        //아닐경우 다음 item에 .active를 추가.
        $(tar_item).eq(prev_item_index).addClass('actived');
    }else{
        //맞을경우 다음 list의 첫번째 item에 .active를 추가.
        var pos = $('.themecast_body_enter_vibe_box').css('transform').split(',');
        pos = Number(pos[4]); //x축
        pos = $('.themecast_body_enter_vibe_box').css('transform','translate3d('+(pos+750)+'px,0px,0px)');
        $('.themecast_body_enter_vibe_list').eq(prev_list_index).children().last().addClass('actived');
    }

    $('.themecast_body_enter_vibe_btn_prev').removeClass('actived');
    $('.themecast_body_enter_vibe_btn_next').addClass('actived');
});

$('.themecast_body_enter_vibe_btn_next').on('click',function(){
    var tar_item = '.themecast_body_enter_vibe_item';
    var now_item = $(tar_item).index('.themecast_body_enter_vibe_item.actived');
    var next_item_index = $(tar_item+'.actived').next().index(tar_item);
    
    var now_list_index = $(tar_item+'.actived').parent().index('.themecast_body_enter_vibe_list'); //보류 수정해야함. 자식 개수 파악하기 위한 것.
    var next_list_index = $(tar_item+'.actived').parent().next().index('.themecast_body_enter_vibe_list');
    
    //중복 안되게 기존 .actived 삭제
    $(tar_item).removeClass('actived');
    
    //list의 마지막 item인가?
    if(next_item_index!=-1){
        //아닐경우 다음 item에 .active를 추가.
        $(tar_item).eq(next_item_index).addClass('actived');
    }else{
        //맞을경우 다음 list의 첫번째 item에 .active를 추가.
        var pos = $('.themecast_body_enter_vibe_box').css('transform').split(',');
        pos = Number(pos[4]); //x축
        pos = $('.themecast_body_enter_vibe_box').css('transform','translate3d('+(pos-750)+'px,0px,0px)');
        $('.themecast_body_enter_vibe_list').eq(next_list_index).children().first().addClass('actived');
    }

    $('.themecast_body_enter_vibe_btn_prev').addClass('actived');
    $('.themecast_body_enter_vibe_btn_next').removeClass('actived');
});

/* ************************************************** */
/* 새로운 글 더보기 */
$('.themecast_body_enter_more_btn').on('click',function(){
    var clone = $('.themecast_body_enter_mid').clone().eq(0);
    $('.themecast_body_enter_more').before(clone);
});

/* ########################################################################### */
/* 계정 로그인/로그아웃 */

//로그인하기
$('.account_login_btn').on('click',function(){
    $('.account_login').removeClass('actived');
    $('.account_logout').addClass('actived');
});
//로그아웃하기
$('.account_logout_btn').on('click',function(){
    $('.account_logout').removeClass('actived');
    $('.account_login').addClass('actived');
});

/* ########################################################################### */
/* 타임스퀘어 */
var timesquare_auto_delay = 3000;
var timesquare_change_auto = setInterval(timesquare_right, timesquare_auto_delay);

var is_timesquare_left_wait = false;
$('.timesquare_util_btn_left').on('click',() => {
    clearInterval(timesquare_change_auto);
    timesquare_change_auto = setInterval(timesquare_right, timesquare_auto_delay*1.5);
    timesquare_left();
});

function timesquare_left(){
    if(!is_timesquare_left_wait){
        is_timesquare_left_wait = true;
        var item = '.timesquare_item';
        var item_index = $(item+'.actived').index(item)+1; //0부터 시작함으로 +1한다.
        var item_prev_index = $(item+'.actived').prev().index(item)+1; //0부터 시작함으로 +1한다.
        if(item_prev_index == 0){
            $(item+':last-child').css('left','-100%');
            $(item+':last-child').prependTo('.timesquare_list');
            item_index = $(item+'.actived').index(item)+1; //0부터 시작함으로 +1한다.
            item_prev_index = $(item+'.actived').prev().index(item)+1; //0부터 시작함으로 +1한다.
            $(item+'.actived').css('left','100%');
            //바로 실행되지 않도록 setTimout으로 작동한다.
            setTimeout(() => {
                $(item+'.actived').removeClass('actived');
                $(item+':first-child').css('left','');
                $(item+':first-child').addClass('actived');
            }, 0);
            setTimeout(() => {
                item_index = $(item+'.actived').index(item)+1; //0부터 시작함으로 +1한다.
                item_prev_index = $(item+'.actived').prev().index(item)+1; //0부터 시작함으로 +1한다.
                if(item_index == 1){
                    $(item+':last-child').css('left','-100%'); //스타일에서 정의되어 있기기에 이 스타일을 제거한다.
                    $(item+':last-child').prependTo('.timesquare_list');
                }
                is_timesquare_left_wait = false;
            }, 500);
        }else{
            if(item_index == 1){
                $(item+':last-child').css('left','-100%');
                $(item+':last-child').prependTo('.timesquare_list');
            }
            item_index = $(item+'.actived').index(item)+1; //0부터 시작함으로 +1한다.
            item_prev_index = $(item+'.actived').prev().index(item)+1; //0부터 시작함으로 +1한다.
            //왼쪽으로 이동
            $(item+'.actived').css('left','100%');
            $(item+':nth-child('+item_prev_index+')').css('left','');
            //.actived 교체
            $(item+'.actived').removeClass('actived');
            $(item+':nth-child('+item_prev_index+')').addClass('actived');
            setTimeout(() => {
                item_index = $(item+'.actived').index(item)+1; //0부터 시작함으로 +1한다.
                item_prev_index = $(item+'.actived').prev().index(item)+1; //0부터 시작함으로 +1한다.
                if(item_index == 1){
                    $(item+':last-child').css('left','-100%'); //스타일에서 정의되어 있기기에 이 스타일을 제거한다.
                    $(item+':last-child').prependTo('.timesquare_list');
                }
                is_timesquare_left_wait = false;
            }, 500);
        }
    }
}

var is_timesquare_right_wait = false;
$('.timesquare_util_btn_right').on('click',() => {
    clearInterval(timesquare_change_auto);
    timesquare_change_auto = setInterval(timesquare_right, timesquare_auto_delay*1.5);
    timesquare_right();
});

function timesquare_right(){
    if(!is_timesquare_right_wait){
        is_timesquare_right_wait = true;
        var item = '.timesquare_item';
        var item_index = $(item+'.actived').index(item)+1; //0부터 시작함으로 +1한다.
        var item_next_index = $(item+'.actived').next().index(item)+1; //0부터 시작함으로 +1한다.
        if(item_index == $(item).length){
            $(item+':first-child').css('left',''); //스타일에서 정의되어 있기기에 이 스타일을 제거한다.
            $(item+':first-child').appendTo('.timesquare_list');
            item_index = $(item+'.actived').index(item)+1; //0부터 시작함으로 +1한다.
            item_next_index = $(item+'.actived').next().index(item)+1; //0부터 시작함으로 +1한다.
            $(item+'.actived').css('left','-100%');
            //바로 실행되지 않도록 setTimout으로 작동한다.
            setTimeout(() => {
                $(item+'.actived').removeClass('actived');
                $(item+':nth-child('+item_next_index+')').css('left','');
                $(item+':nth-child('+item_next_index+')').addClass('actived');
            }, 0);
            setTimeout(() => {
                item_index = $(item+'.actived').index(item)+1; //0부터 시작함으로 +1한다.
                item_next_index = $(item+'.actived').next().index(item)+1; //0부터 시작함으로 +1한다.
                if(item_index == $(item).length){
                    $(item+':first-child').css('left',''); //스타일에서 정의되어 있기기에 이 스타일을 제거한다.
                    $(item+':first-child').appendTo('.timesquare_list');
                }
                is_timesquare_right_wait = false;
            }, 500);
        }else{
            if(item_index == $(item).length){
                $(item+':first-child').css('left',''); //스타일에서 정의되어 있기기에 이 스타일을 제거한다.
                $(item+':first-child').appendTo('.timesquare_list');
            }
            item_index = $(item+'.actived').index(item)+1; //0부터 시작함으로 +1한다.
            item_next_index = $(item+'.actived').next().index(item)+1; //0부터 시작함으로 +1한다.
            //왼쪽으로 이동
            $(item+'.actived').css('left','-100%');
            $(item+':nth-child('+item_next_index+')').css('left','');
            //.actived 교체
            $(item+'.actived').removeClass('actived');
            $(item+':nth-child('+item_next_index+')').addClass('actived');
            setTimeout(() => {
                item_index = $(item+'.actived').index(item)+1; //0부터 시작함으로 +1한다.
                item_next_index = $(item+'.actived').next().index(item)+1; //0부터 시작함으로 +1한다.
                if(item_index == $(item).length){
                    $(item+':first-child').css('left',''); //스타일에서 정의되어 있기기에 이 스타일을 제거한다.
                    $(item+':first-child').appendTo('.timesquare_list');
                }
                is_timesquare_right_wait = false;
            }, 500);
        }
    }
}

/* ########################################################################### */
/* 컨테이너 트렌드쇼핑 */

/* ************************************************** */
/* 컨테이너 트렌드쇼핑 메뉴 */
$('.trendshopping_head_util_btn_product').on('click',function(){
    ts_random_bold();
    $('.trendshopping_head_menu').show();
    $('.trendshopping_head_util_btn').removeClass('actived');
    $(this).addClass('actived');
    $('.trendshopping_con').removeClass('actived');
    $('.trendshopping_product').addClass('actived');
});
$('.trendshopping_head_util_btn_shoppingmall').on('click',function(){
    $('.trendshopping_head_menu').hide();
    $('.trendshopping_head_util_btn').removeClass('actived');
    $(this).addClass('actived');
    $('.trendshopping_con').removeClass('actived');
    $('.trendshopping_shoppingmall').addClass('actived');
});
$('.trendshopping_head_util_btn_men').on('click',function(){
    ts_random_bold();
    $('.trendshopping_head_menu').show();
    $('.trendshopping_head_util_btn').removeClass('actived');
    $(this).addClass('actived');
    $('.trendshopping_con').removeClass('actived');
    $('.trendshopping_men').addClass('actived');
});

/* ************************************************** */
/* 컨테이너 트렌드쇼핑 헤드 랜덤 자동 강조 */
function ts_random_bold(){
    let tar = '.trendshopping_head_list';
    var ts_random_bold1 = Math.floor(Math.random()*$(tar+':first-child a').length+1),
    ts_random_bold2 = Math.floor(Math.random()*$(tar+':first-child a').length+1),
    ts_random_bold3 = Math.floor(Math.random()*$(tar+':last-child a').length+1),
    ts_random_bold4 = Math.floor(Math.random()*$(tar+':last-child a').length+1);
    while(ts_random_bold1 == ts_random_bold2){
        ts_random_bold2 = Math.floor(Math.random()*$(tar+':last-child a').length+1);
    }
    while(ts_random_bold3 == ts_random_bold4){
        ts_random_bold4 = Math.floor(Math.random()*$(tar+':last-child a').length+1);
    }
    $(tar+' a').css('font-weight','normal');
    $(tar+':first-child a').eq(ts_random_bold1).css('font-weight','bold');
    $(tar+':first-child a').eq(ts_random_bold2).css('font-weight','bold');
    $(tar+':last-child a').eq(ts_random_bold3).css('font-weight','bold');
    $(tar+':last-child a').eq(ts_random_bold4).css('font-weight','bold');
}
ts_random_bold();

/* ************************************************** */
/* 컨테이너 트렌드쇼핑 상품 톱 */

//HTML에 있는 수만큼 업데이트
$('.trendshopping_product_top_util_cnt .max .num').text($('.trendshopping_product_top_list').length);

//이전
$('.trendshopping_product_top_util_btn_prev').on('click',function(){
    let tar_item = '.trendshopping_product_top_list',
    prev_item = $(tar_item+'.actived').prev().index()-1;
    //리스트 현재 페이지가 최대 페이지와 같지 않을 경우
    if(Number($('.trendshopping_product_top_util_cnt.top .now .num').text())!=1){
        $(tar_item).removeClass('actived');
        $(tar_item).eq(prev_item).addClass('actived');
        //현재 페이지 증가
        $('.trendshopping_product_top_util_cnt .now .num').text(Number($('.trendshopping_product_top_util_cnt.top .now .num').text())-1);
    }else{
        $(tar_item).removeClass('actived');
        $(tar_item).last().addClass('actived');
        //현재 페이지를 처음으로
        $('.trendshopping_product_top_util_cnt .now .num').text(Number($('.trendshopping_product_top_util_cnt.top .max .num').text()));
    }
});

//다음
$('.trendshopping_product_top_util_btn_next').on('click',function(){
    let tar_item = '.trendshopping_product_top_list',
    next_item = $(tar_item+'.actived').next().index()-1;
    //리스트 현재 페이지가 최대 페이지와 같지 않을 경우
    if(Number($('.trendshopping_product_top_util_cnt.top .now .num').text())!=Number($('.trendshopping_product_top_util_cnt.top .max .num').text())){
        $(tar_item).removeClass('actived');
        $(tar_item).eq(next_item).addClass('actived');
        //현재 페이지 증가
        $('.trendshopping_product_top_util_cnt .now .num').text(Number($('.trendshopping_product_top_util_cnt.top .now .num').text())+1);
    }else{
        $(tar_item).removeClass('actived');
        $(tar_item).first().addClass('actived');
        //현재 페이지를 처음으로
        $('.trendshopping_product_top_util_cnt .now .num').text(1);
    }
});

/* ************************************************** */
/* 컨테이너 트렌드쇼핑 상품 미드 */

//전체 페이지
$('.trendshopping_product_mid_util_cnt .max .num').text($('.trendshopping_product_mid_list').length);

//이전
$('.trendshopping_product_mid_util_btn_prev').on('click',function(){
    var tar_item = '.trendshopping_product_mid_list',
    prev_item = $(tar_item+'.actived').prev().index(tar_item);
    //리스트 현재 페이지가 최대 페이지와 같지 않을 경우
    if(Number($('.trendshopping_product_mid_util_cnt .now .num').text())!=1){
        $(tar_item).removeClass('actived');
        $(tar_item).eq(prev_item).addClass('actived');
        //현재 페이지 증가
        $('.trendshopping_product_mid_util_cnt .now .num').text(Number($('.trendshopping_product_mid_util_cnt .now .num').text())-1);
    }else{
        $(tar_item).removeClass('actived');
        $(tar_item).last().addClass('actived');
        //현재 페이지를 처음으로
        $('.trendshopping_product_mid_util_cnt .now .num').text(Number($('.trendshopping_product_mid_util_cnt .max .num').text()));
    }
});

//다음
$('.trendshopping_product_mid_util_btn_next').on('click',function(){
    var tar_item = '.trendshopping_product_mid_list',
    next_item = $(tar_item+'.actived').next().index(tar_item);
    //리스트 현재 페이지가 최대 페이지와 같지 않을 경우
    if(Number($('.trendshopping_product_mid_util_cnt .now .num').text())!=Number($('.trendshopping_product_mid_util_cnt .max .num').text())){
        $(tar_item).removeClass('actived');
        $(tar_item).eq(next_item).addClass('actived');
        //현재 페이지 증가
        $('.trendshopping_product_mid_util_cnt .now .num').text(Number($('.trendshopping_product_mid_util_cnt .now .num').text())+1);
    }else{
        $(tar_item).removeClass('actived');
        $(tar_item).first().addClass('actived');
        //현재 페이지를 처음으로
        $('.trendshopping_product_mid_util_cnt .now .num').text(1);
    }
});

/* ************************************************** */
/* 컨테이너 트렌드쇼핑 상품 바텀 */

//첫 카테고리 페이지 수 갱신
$('.trendshopping_product_bot_util_cnt .max .num').text($('.trendshopping_product_bot_list[data-category="'+$('.trendshopping_product_bot_util_txtbtn.actived').data('category')+'"]').length); //마지막페이지

//버튼별 카테고리 선택
$('.trendshopping_product_bot_util_txtbtn').on('click',function(){
    //버튼에서 선택
    var category = $(this).data('category');
    //parent(li), siblings(li), add(li), children(.btn)
    $(this).parent().siblings().add($(this).parent()).children().removeClass('actived');
    $(this).addClass('actived');
    //페이지 수 갱신
    var tar_page = '.trendshopping_product_bot_list';
    $('.trendshopping_product_bot_util_cnt .now .num').text(1); //첫페이지
    $('.trendshopping_product_bot_util_cnt .max .num').text($(tar_page+'[data-category="'+category+'"]').length); //마지막페이지
    //리스트에서 선택
    $(tar_page).removeClass('actived');
    $(tar_page+'[data-category="'+category+'"]').first().addClass('actived');
});

//이전
$('.trendshopping_product_bot_util_btn_prev').on('click',function(){
    var btn = '.trendshopping_product_bot_util_txtbtn',
    tar_page = '.trendshopping_product_bot_list',
    now_page = '.trendshopping_product_bot_util_cnt .now .num',
    last_page = '.trendshopping_product_bot_util_cnt .max .num',
    prev_page = $(tar_page+'.actived').prev().index(tar_page);
    //리스트 현재 페이지가 최대 페이지와 같지 않을 경우
    if(Number($(now_page).text())!=1){
        console.log(1);
        //다음 페이지 선택
        $(tar_page).removeClass('actived');
        $(tar_page).eq(prev_page).addClass('actived');
        //현재 페이지 증가
        $(now_page).text(Number($(now_page).text())-1);
    }else{
        //마지막 페이지가 아닐경우
        if(!$(tar_page).first().hasClass('actived')){
            //다음 페이지 선택
            $(tar_page).removeClass('actived');
            $(tar_page).eq(prev_page).addClass('actived');
        }else{
            //다음 페이지 선택
            $(tar_page).removeClass('actived');
            $(tar_page).last().addClass('actived');
        }
        //버튼 갱신
        var category = $(tar_page+'.actived').data('category');
        $(btn).removeClass('actived');
        $(btn+'[data-category="'+category+'"]').addClass('actived');
        //페이지수 갱신
        $(now_page).text($(tar_page+'[data-category="'+category+'"]').length); //현재페이지
        $(last_page).text($(tar_page+'[data-category="'+category+'"]').length); //마지막페이지
    }
});

//다음
$('.trendshopping_product_bot_util_btn_next').on('click',function(){
    var btn = '.trendshopping_product_bot_util_txtbtn',
    tar_page = '.trendshopping_product_bot_list',
    now_page = '.trendshopping_product_bot_util_cnt .now .num',
    last_page = '.trendshopping_product_bot_util_cnt .max .num',
    next_page = $(tar_page+'.actived').next().index(tar_page);
    //리스트 현재 페이지가 최대 페이지와 같지 않을 경우
    if(Number($(now_page).text())!=Number($(last_page).text())){
        console.log(1);
        //다음 페이지 선택
        $(tar_page).removeClass('actived');
        $(tar_page).eq(next_page).addClass('actived');
        //현재 페이지 증가
        $(now_page).text(Number($(now_page).text())+1);
    }else{
        //마지막 페이지가 아닐경우
        if(!$(tar_page).last().hasClass('actived')){
            //다음 페이지 선택
            $(tar_page).removeClass('actived');
            $(tar_page).eq(next_page).addClass('actived');
        }else{
            //다음 페이지 선택
            $(tar_page).removeClass('actived');
            $(tar_page).first().addClass('actived');
        }
        //버튼 갱신
        var category = $(tar_page+'.actived').data('category');
        $(btn).removeClass('actived');
        $(btn+'[data-category="'+category+'"]').addClass('actived');
        //페이지수 갱신
        $(now_page).text(1); //첫페이지
        $(last_page).text($(tar_page+'[data-category="'+category+'"]').length); //마지막페이지
    }
});

/* ************************************************** */
/* 컨테이너 트렌드쇼핑 쇼핑몰 톱 */

//HTML에 있는 수만큼 업데이트
$('.trendshopping_shoppingmall_top_util_cnt .max .num').text($('.trendshopping_shoppingmall_top_list').length);

//이전
$('.trendshopping_shoppingmall_top_util_btn_prev').on('click',function(){
    let tar_item = '.trendshopping_shoppingmall_top_list',
    prev_item = $(tar_item+'.actived').prev().index()-1;
    //리스트 현재 페이지가 최대 페이지와 같지 않을 경우
    if(Number($('.trendshopping_shoppingmall_top_util_cnt.top .now .num').text())!=1){
        $(tar_item).removeClass('actived');
        $(tar_item).eq(prev_item).addClass('actived');
        //현재 페이지 증가
        $('.trendshopping_shoppingmall_top_util_cnt .now .num').text(Number($('.trendshopping_shoppingmall_top_util_cnt.top .now .num').text())-1);
    }else{
        $(tar_item).removeClass('actived');
        $(tar_item).last().addClass('actived');
        //현재 페이지를 처음으로
        $('.trendshopping_shoppingmall_top_util_cnt .now .num').text(Number($('.trendshopping_shoppingmall_top_util_cnt.top .max .num').text()));
    }
});

//다음
$('.trendshopping_shoppingmall_top_util_btn_next').on('click',function(){
    let tar_item = '.trendshopping_shoppingmall_top_list',
    next_item = $(tar_item+'.actived').next().index()-1;
    //리스트 현재 페이지가 최대 페이지와 같지 않을 경우
    if(Number($('.trendshopping_shoppingmall_top_util_cnt.top .now .num').text())!=Number($('.trendshopping_shoppingmall_top_util_cnt.top .max .num').text())){
        $(tar_item).removeClass('actived');
        $(tar_item).eq(next_item).addClass('actived');
        //현재 페이지 증가
        $('.trendshopping_shoppingmall_top_util_cnt .now .num').text(Number($('.trendshopping_shoppingmall_top_util_cnt.top .now .num').text())+1);
    }else{
        $(tar_item).removeClass('actived');
        $(tar_item).first().addClass('actived');
        //현재 페이지를 처음으로
        $('.trendshopping_shoppingmall_top_util_cnt .now .num').text(1);
    }
});

/* ************************************************** */
/* 컨테이너 트렌드쇼핑 쇼핑몰 미드 */

//전체 페이지
$('.trendshopping_shoppingmall_mid_util_cnt .max .num').text($('.trendshopping_shoppingmall_mid_list').length);

//이전
$('.trendshopping_shoppingmall_mid_util_btn_prev').on('click',function(){
    var tar_item = '.trendshopping_shoppingmall_mid_list',
    prev_item = $(tar_item+'.actived').prev().index(tar_item);
    //리스트 현재 페이지가 최대 페이지와 같지 않을 경우
    if(Number($('.trendshopping_shoppingmall_mid_util_cnt .now .num').text())!=1){
        $(tar_item).removeClass('actived');
        $(tar_item).eq(prev_item).addClass('actived');
        //현재 페이지 증가
        $('.trendshopping_shoppingmall_mid_util_cnt .now .num').text(Number($('.trendshopping_shoppingmall_mid_util_cnt .now .num').text())-1);
    }else{
        $(tar_item).removeClass('actived');
        $(tar_item).last().addClass('actived');
        //현재 페이지를 처음으로
        $('.trendshopping_shoppingmall_mid_util_cnt .now .num').text(Number($('.trendshopping_shoppingmall_mid_util_cnt .max .num').text()));
    }
});

//다음
$('.trendshopping_shoppingmall_mid_util_btn_next').on('click',function(){
    var tar_item = '.trendshopping_shoppingmall_mid_list',
    next_item = $(tar_item+'.actived').next().index(tar_item);
    //리스트 현재 페이지가 최대 페이지와 같지 않을 경우
    if(Number($('.trendshopping_shoppingmall_mid_util_cnt .now .num').text())!=Number($('.trendshopping_shoppingmall_mid_util_cnt .max .num').text())){
        $(tar_item).removeClass('actived');
        $(tar_item).eq(next_item).addClass('actived');
        //현재 페이지 증가
        $('.trendshopping_shoppingmall_mid_util_cnt .now .num').text(Number($('.trendshopping_shoppingmall_mid_util_cnt .now .num').text())+1);
    }else{
        $(tar_item).removeClass('actived');
        $(tar_item).first().addClass('actived');
        //현재 페이지를 처음으로
        $('.trendshopping_shoppingmall_mid_util_cnt .now .num').text(1);
    }
});

/* ************************************************** */
/* 컨테이너 트렌드쇼핑 맨 톱 */

//전체 페이지
$('.trendshopping_men_top_util_cnt .max .num').text($('.trendshopping_men_top_list').length);

//이전
$('.trendshopping_men_top_util_btn_prev').on('click',function(){
    var tar_item = '.trendshopping_men_top_list',
    prev_item = $(tar_item+'.actived').prev().index(tar_item);
    //리스트 현재 페이지가 최대 페이지와 같지 않을 경우
    if(Number($('.trendshopping_men_top_util_cnt.top .now .num').text())!=1){
        $(tar_item).removeClass('actived');
        $(tar_item).eq(prev_item).addClass('actived');
        //현재 페이지 증가
        $('.trendshopping_men_top_util_cnt .now .num').text(Number($('.trendshopping_men_top_util_cnt.top .now .num').text())-1);
    }else{
        $(tar_item).removeClass('actived');
        $(tar_item).last().addClass('actived');
        //현재 페이지를 처음으로
        $('.trendshopping_men_top_util_cnt .now .num').text(Number($('.trendshopping_men_top_util_cnt.top .max .num').text()));
    }
});

//다음
$('.trendshopping_men_top_util_btn_next').on('click',function(){
    var tar_item = '.trendshopping_men_top_list',
    next_item = $(tar_item+'.actived').next().index(tar_item);
    //리스트 현재 페이지가 최대 페이지와 같지 않을 경우
    if(Number($('.trendshopping_men_top_util_cnt.top .now .num').text())!=Number($('.trendshopping_men_top_util_cnt.top .max .num').text())){
        $(tar_item).removeClass('actived');
        $(tar_item).eq(next_item).addClass('actived');
        //현재 페이지 증가
        $('.trendshopping_men_top_util_cnt .now .num').text(Number($('.trendshopping_men_top_util_cnt.top .now .num').text())+1);
    }else{
        $(tar_item).removeClass('actived');
        $(tar_item).first().addClass('actived');
        //현재 페이지를 처음으로
        $('.trendshopping_men_top_util_cnt .now .num').text(1);
    }
});

/* ************************************************** */
/* 컨테이너 트렌드쇼핑 쇼핑몰 미드 */

//전체 페이지
$('.trendshopping_men_mid_util_cnt .max .num').text($('.trendshopping_men_mid_list').length);

//이전
$('.trendshopping_men_mid_util_btn_prev').on('click',function(){
    var tar_item = '.trendshopping_men_mid_list',
    prev_item = $(tar_item+'.actived').prev().index(tar_item);
    //리스트 현재 페이지가 최대 페이지와 같지 않을 경우
    if(Number($('.trendshopping_men_mid_util_cnt .now .num').text())!=1){
        $(tar_item).removeClass('actived');
        $(tar_item).eq(prev_item).addClass('actived');
        //현재 페이지 증가
        $('.trendshopping_men_mid_util_cnt .now .num').text(Number($('.trendshopping_men_mid_util_cnt .now .num').text())-1);
    }else{
        $(tar_item).removeClass('actived');
        $(tar_item).last().addClass('actived');
        //현재 페이지를 처음으로
        $('.trendshopping_men_mid_util_cnt .now .num').text(Number($('.trendshopping_men_mid_util_cnt .max .num').text()));
    }
});

//다음
$('.trendshopping_men_mid_util_btn_next').on('click',function(){
    var tar_item = '.trendshopping_men_mid_list',
    next_item = $(tar_item+'.actived').next().index(tar_item);
    //리스트 현재 페이지가 최대 페이지와 같지 않을 경우
    if(Number($('.trendshopping_men_mid_util_cnt .now .num').text())!=Number($('.trendshopping_men_mid_util_cnt .max .num').text())){
        $(tar_item).removeClass('actived');
        $(tar_item).eq(next_item).addClass('actived');
        //현재 페이지 증가
        $('.trendshopping_men_mid_util_cnt .now .num').text(Number($('.trendshopping_men_mid_util_cnt .now .num').text())+1);
    }else{
        $(tar_item).removeClass('actived');
        $(tar_item).first().addClass('actived');
        //현재 페이지를 처음으로
        $('.trendshopping_men_mid_util_cnt .now .num').text(1);
    }
});

/* ************************************************** */
/* 컨테이너 트렌드쇼핑 쇼핑몰 바텀 */

//전체 페이지
$('.trendshopping_men_bot_util_cnt .max .num').text($('.trendshopping_men_bot_list').length);

//이전
$('.trendshopping_men_bot_util_btn_prev').on('click',function(){
    var tar_item = '.trendshopping_men_bot_list',
    prev_item = $(tar_item+'.actived').prev().index(tar_item);
    //리스트 현재 페이지가 최대 페이지와 같지 않을 경우
    if(Number($('.trendshopping_men_bot_util_cnt .now .num').text())!=1){
        $(tar_item).removeClass('actived');
        $(tar_item).eq(prev_item).addClass('actived');
        //현재 페이지 증가
        $('.trendshopping_men_bot_util_cnt .now .num').text(Number($('.trendshopping_men_bot_util_cnt .now .num').text())-1);
    }else{
        $(tar_item).removeClass('actived');
        $(tar_item).last().addClass('actived');
        //현재 페이지를 처음으로
        $('.trendshopping_men_bot_util_cnt .now .num').text(Number($('.trendshopping_men_bot_util_cnt .max .num').text()));
    }
});

//다음
$('.trendshopping_men_bot_util_btn_next').on('click',function(){
    var tar_item = '.trendshopping_men_bot_list',
    next_item = $(tar_item+'.actived').next().index(tar_item);
    //리스트 현재 페이지가 최대 페이지와 같지 않을 경우
    if(Number($('.trendshopping_men_bot_util_cnt .now .num').text())!=Number($('.trendshopping_men_bot_util_cnt .max .num').text())){
        $(tar_item).removeClass('actived');
        $(tar_item).eq(next_item).addClass('actived');
        //현재 페이지 증가
        $('.trendshopping_men_bot_util_cnt .now .num').text(Number($('.trendshopping_men_bot_util_cnt .now .num').text())+1);
    }else{
        $(tar_item).removeClass('actived');
        $(tar_item).first().addClass('actived');
        //현재 페이지를 처음으로
        $('.trendshopping_men_bot_util_cnt .now .num').text(1);
    }
});