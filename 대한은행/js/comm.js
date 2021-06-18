$(function(){


    let now=1
    width = 100

    setInterval( function(){
        if(now <3){ 
            $('.slide li').animate({
                left : (width * now * (-1))+'%'
            })
            now=now+1
        }else{
            $('.slide li').animate({
                left : 0
            })
            now = 1
        }


    },3000);

// 탭
// tab-tit 클릭시 이벤트 - preventDefault
// 섹션테그 클래스 지워줘
// tab-tit 클릭시 부모한테 on 클래스 붙여줘

$('.tab-tit').click(function(event){
    event.preventDefault()
    $('.tab >section').removeClass('on')
    $(this).parent().addClass('on')
})

// 모달
// 공지사항 첫번째 차일드 클릭하면 
// 모달 css flex
// 닫기 누르면 css hide

$('.sec-bbs .tab-cont >ul li:first').click(function(){
    $('.modal').css('display','flex')
})
$('.modal-inn input').click(function(){
    $('.modal').hide()
})
    

})