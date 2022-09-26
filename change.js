// var bigpic=document.querySelector("#big");
// var smallpics=document.querySelectorAll(".small");

// for(var i=0; i<smallpics.length;i++){
//     smallpics[i].addEventListener("click",chenaepic)
// }

// function chenaepic(){
//     var smallpicAttribure=this.getAttribute("src");
//     bigpic.setAttribute("src",smallpicAttribure);
// }

$(function(){
    $('.gnb a').click(function(){
        e.preventDefault(); //a링크 방지
    });


    $('.small').click(function(){
        $('#bigimages a').removeClass('on');
        $('#bigimages a').eq($(this).index()).addClass('on');
    });

    $('.motion_menu li').click(function(){
      
        $('.motion_menu li').removeClass('on');
        
        $(this).addClass('on');

        $('.swiper').removeClass('on');
        $('.swiper').eq($(this).index()).addClass('on');

    });//tab_menu li click()
    $(function(){
        $('.gnb').click(function(){
            e.preventDefault(); //a링크 방지
        });
        //이벤트가를 실행시켜 주겠다 괄호안에 펑션 넣어주기, 소괄호에 e를 넣으면 방지할 수 있다
       
        }); //jquery end

});//query end

