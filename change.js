// var bigpic=document.querySelector("#big");
// var smallpics=document.querySelectorAll(".small");

// for(var i=0; i<smallpics.length;i++){
//     smallpics[i].addEventListener("click",chenaepic)
// }

// function chenaepic(){
//     var smallpicAttribure=this.getAttribute("src");
//     bigpic.setAttribute("src",smallpicAttribure);
// }


// function은 하나만 있어도 된다. 여러개 있으면 오류 걸립니다

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

        $('.gnb').click(function(){
            e.preventDefault(); //a링크 방지
        });
        //이벤트가를 실행시켜 주겠다 괄호안에 펑션 넣어주기, 소괄호에 e를 넣으면 방지할 수 있다
       
        
       
            //영상편집 슬라이드
            var swiper = new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
            })
        }); //jquery end
