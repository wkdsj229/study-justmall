$(function(){

    // 슬라이드
    // 계속 반복해서 3초씩
    // 1,2 슬라이드 - 다음 슬라이드로
    // 3 슬라이드 - 마지막으로
    
    let now = 1,
    width = 100

     setInterval(function(){
         if(now<3){
        $('.slide>ul').animate({
            left:(width * now * (-1))+'%'
        })
        now= now+1
     }else{
        $('.slide>ul').animate({
            left:0
        })
        now=1
     }

     },3000)


})

// 모달
// 공지사항 첫번째 누르면 
// 모달창 display- flex
// 닫기 누르면 hide

$('.sec-bbs>.cont>ul>li:first').click(function(){
    $("#modal").css('display','flex')
    
})

$('input').click(function(){
    $('#modal').hide()
})