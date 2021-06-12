$(function(){

// 1.슬라이드
// 1,2슬라이드는 - 다음페이지로
// 3슬라이드는 - 처음으로 돌려줘
// 계속 

let now = 1,
width = 100

setInterval(function(){

    if(now<3){
        $('.slide>ul').animate({
            left:(width * now *(-1))+'%'
        })
        now=now+1

    }else{
        $('.slide>ul').animate({
            left:0
        })
    now=1
    }

},3000)

// 2.tab
// tab-tit 클릭했을 때
// 엄마(tab-bbs)에 on클래스 붙여줘

$('.tab .tab-tit').click(function(event){
   event.preventDefault();
   $('.tab>section').removeClass('on')
   $(this).parent().addClass('on')
})

// 3.모달 
// 배너 클릭했을 때
// 모달창 나오기
// 닫기 누르면 사라지기

$('.bnr').click(function(event){
    $('#modal').css('display','flex')
})
$('input').click(function(event){
    $('#modal').hide()
})


})