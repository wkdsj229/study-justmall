// $(function(조건문){실행문})
// 준비이벤트
$(function(){

    // tab

    //1. .tab .tit-tab을 클릭했을 때 
    //2. 방금 클릭한 .tit-tab의 엄마(sec-bbs/sec-gallery)에게
    //3. on 클래스 추가해줘

    $('.tab .tit-tab').click(function(event){
    // a태그 링크값 없애기
    event.preventDefault();
    // .tab>section에 붙어 있는 on 클래서 삭제
    $('.tab>section').removeClass('on')
    $(this).parent().addClass('on')
    })

    // model 창

    // 1.배너(sec-bnr) 클릭했을 때
    // 2.모달창 #modal(모달 id값)을 보이게
    
    $('.sec-bnr').click(function(){
    $('#modal').css('display','flex')
    })

    // 3.#modal button을 클릭했을 때
    // 4. #modal을 안보이게
    $('#modal button').click(function(){
    $('#modal').hide()
    })

    // 슬라이드

    // 2.변수값 만들기(첫번째 슬라이드 값 만든거-1=첫번째 슬라이드/width=가로값 넣은거)
    let now = 1,
        width=100
    // 1.슬라이드>ul을 애니메이션 (left값 -1200px->-100%이런식으로 값줌)
    
    // 1-2.3초마다 애니메이션 실행시키는거 - setInterval사용
    setInterval(function(){

        // 3.조건문 if(조건){참일경우 실행문}else{거짓일 경우 실행문}
        // 3-1첫번째,두번째 이미지-다음 이미지로 넘기는 애니메이션
        // 3-2마지막 이미지-첫번째 이미지로 돌아오게 하는 애니메이션
        if(now<3){
            $('.slide>ul').animate({
                left:(width*now *(-1))+'%'
            })
            now=now+1
        }else{
            $('.slide>ul').animate({
                left:0
            })
            now=1
        }
        
    },3000)

})