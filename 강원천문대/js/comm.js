$(function(){
// 탭
// 초기화 시키고
// on클라스 때주고
// 타이틀 클릭시 on클라스 엄마한테 붙여줘

$('.tab .sec-tit').click(function(even){
    even.preventDefault()
    $('.tab section').removeClass('on')
    $(this).parent().addClass('on')

})


// 슬라이드

let = now =1
$('.slide li').first().fadeIn(0)

setInterval(function(){
    if(now<3){
       $('.slide li').fadeOut('slow')
       $('.slide li').eq(now-1).fadeIn('slow')

       now=now+1

}else{
    $('.slide li').fadeOut('slow')
    $('.slide li').first().fadeIn('slow')
    now=1
}
},3000)

// gnb

// nav-depth1 마우스 오버시 펑션 펑션
// navpdepth2 

$('.nav-depth1>li').hover(function(){
    $(this).find('.nav-depth2').stop().slideDown('fast')
},function(){
    $(this).find('.nav-depth2').stop().slideUp('fast')
})

// 모달

$('.tab-bbs .sec-cont ul li').first().click(function(){
    $('.modal').css('display','flex')
    
})

$('.modal-inn input').click(function(){
$('.modal').hide()
})

})