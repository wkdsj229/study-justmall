$(function(){
    

    // 슬라이드

    // 슬라이드 - 좌우

    // let now=1,
    // width=100

    // setInterval(function(){
    //     if(now<3){
    //         $('.slide >ul li').animate({
    //             left:(width * now * (-1))+"%"
    //         })
    //         now=now+1
    //     }else{
    //         $('.slide >ul li').animate({
    //             left : 0
    //         })
    //         now = 1
    //     }
    // }, 3000);

    // 슬라이드 fade-in

   let now=1

   $('.main .slide ul li').first().fadeIn(0);

   setInterval(function(){
    if(now<3){
        $('.main .slide ul li').fadeOut('slow')
        $('.main .slide ul li').eq(now-1).fadeIn('slow')

        now=now+1
    }else{
        $('.main .slide ul li').fadeOut('slow')
        $('.main .slide ul li').first().fadeIn('slow')
        now=0
    }
   
   }, 3000);

    // 모달

    $('.sec-bbs .cont ul li:first').click(function(){
        $('.modal').css('display','flex')
    })

    $('.modal-inn input').click(function(){
        $('.modal').hide()
    })


})