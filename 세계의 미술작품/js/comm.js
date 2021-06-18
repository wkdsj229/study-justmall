$(function(){

    // nav

    $('.hearder-wrap nav .nav-depth1 >li').hover(function(){
        $(this).find('.nav-depth2').stop().slideDown('fast')
    },function(){
        $(this).find('.nav-depth2').stop().slideUp('fast')
    })
   
    // slide

    let now=1,
    height = 100

    setInterval(function(){
        if(now<3){
            $('.slide ul').animate({
                top:(height * now * (-1))+'%'
            })
            now=now+1
        }else{
            $('.slide ul').animate({
                top:0
            })
            now=1
        }

    },3000)
})

// modal

$('.sec-bbs .cont ul li:first').click(function(){
    $('.modal').css('display','flex')
})

$('.modal-inn input').click(function(){
    $('.modal').hide()
})