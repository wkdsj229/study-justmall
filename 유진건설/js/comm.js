$(function(){

    // 슬라이드 
    // 선언
    // 첫번째꺼 페이드인
    // 반복 - if else

    let now=1

    $('.slide li').first().fadeIn(0)

    setInterval(function(){
        if(now <3){
            $('.slide li').fadeOut('slow')
            $('.slide li').eq(now -1).fadeIn('slow')

            now = now+1
        }else{
            $('.slide li').fadeOut('slow')
            $('.slide li').first().fadeIn('slow')

            now = 0
        }

    },3000)

    // 모달
    
    $('.sec-bbs .cont li:first').click(function(){
        $('.modal').css('display','flex')
    })

    $('.modal-inn input').click(function(){
        $('.modal').hide()
    })
    
})