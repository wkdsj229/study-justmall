$(function(){
    
    // 모달
    // 공지사항 첫번째 아이 클릭
    // css display flex
    // input 누르면 
    // css display hide

    $('.sec-bbs .cont ul li:first').click(function(){
        $('.modal').css('display', 'flex')
    })

    $('.modal-inn input').click(function(){
        $('.modal').hide()
    })

    //슬라이드 
    // 선언
    // 반복해줘 기능
    
    let now=1,
    height=100

    setInterval(function(){
        if(now<3){
            $('.slide ul').animate({
                top:(height * now *(-1))+'%'
            }) 
            now=now+1
        }else{
            $('.slide ul').animate({
                top:0
            })
            now=1
        }
    }, 3000);

  
    

})