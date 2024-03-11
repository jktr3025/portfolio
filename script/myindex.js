$(function(){
            //타이핑 효과
            var typingBool = false;
            var typingIdx = 0; //타이핑 될 글자의 인덱스
            var liIdx = 0; // li의 인덱스 
            var liLength = $(".motto >ul >li").length;  // li 갯수
            var typingTxt = ""
            $(".typing ul li").removeClass("on");
            $(".typing ul li").text("")
            
            //타이핑 될 텍스트 가져오기
            var typingTxt = $(".motto > ul >li").eq(liIdx).text();
            console.log(typingTxt);
            typingTxt = typingTxt.split(""); // 한글자씩 글자 자르기
            console.log(typingTxt);

            if(typingBool == false){
                typingBool = true;
                var time = setInterval( typing, 100) //반복 동작
            } else{
                typingBool = false;
                typingIdx = 0;
                liIdx = 0 ;
                liLength = $(".motto >ul >li").length;
                typingTxt = $(".motto > ul >li").eq(liIdx).text();
                typingTxt = typingTxt.split("");
                typingTxt = ""
                $(".typing ul li").removeClass("on");
                $(".typing ul li").text(""); 
            }//if

            function typing(){
                $(".typing ul li").removeClass("on");
                $(".typing ul li").eq(liIdx).addClass("on");
                if(typingIdx < typingTxt.length){
                    $(".typing ul li").eq(liIdx).append(typingTxt[typingIdx]);
                typingIdx++;
                }else{
                    if(liIdx < liLength -1){
                        liIdx++;   //다음 줄로 이동하기 위한 인덱스 번호 증가
                        //다음 문장을 타이핑 하기 위한 셋팅
                        typingBool = false;
                        typingIdx = 0;
                        typingTxt = $(".motto > ul >li").eq(liIdx).text();
                    
                        //다음문장 타이핑 전 1초 쉬기
                        clearInterval(time);
                        setTimeout(function(){
                            time = setInterval( typing, 100)
                        }, 1000);
                    } else if(liIdx ==liLength-1){
                        clearInterval(time);
                    }//liIdx < liLength -1
                }//typingIdx < typingTxt.length
            }//typing


            
    if($(window).width() > 390){
        $('#fullpage').fullpage({
                autoScrolling: true,
                scrollHorizontally: true,
                keyboardScrolling:true,
                ScrollingSpeed:5000,
                // navigationTooltips:["","", "","","","",""] ,
                menu: ".menu",
                slidesNavigation:true  , //슬라이드의 버튼 여부
                // slidesNavPosition:"bottom", //슬라이드 버튼의 위치
                anchors: ["section1", "section2", "section3", "section4", "section5", "section6"],
                afterLoad: function (index) {
                    var current = index.index;
                    console.log("current :", current)
                    if (current == 1 || current == 2) {
            //타이핑 효과

            $(".typing ul li").removeClass("on");
            $(".typing ul li").text("")
            
            typingBool = false;
            typingIdx = 0; //타이핑 될 글자의 인덱스
             liIdx = 0; // li의 인덱스 
             typingTxt = ""
             liLength = $(".motto >ul >li").length;  // li 갯수
            
            //타이핑 될 텍스트 가져오기
             typingTxt = $(".motto > ul >li").eq(liIdx).text();
            console.log(typingTxt);
            typingTxt = typingTxt.split(""); // 한글자씩 글자 자르기
            console.log(typingTxt);

            if(typingBool == false){
                typingBool = true;
                var time = setInterval( typing, 100) //반복 동작
            } else{
                typingBool = false;
                typingIdx = 0;
                liIdx = 0 ;
                liLength = $(".motto >ul >li").length;
                typingTxt = $(".motto > ul >li").eq(liIdx).text();
                typingTxt = typingTxt.split("");
                typingTxt = ""
                $(".typing ul li").removeClass("on");
                $(".typing ul li").text("");
            }//if

            function typing(){
                $(".typing ul li").removeClass("on");
                $(".typing ul li").eq(liIdx).addClass("on");
                if(typingIdx < typingTxt.length){
                    $(".typing ul li").eq(liIdx).append(typingTxt[typingIdx]);
                typingIdx++;
                }else{
                    if(liIdx < liLength - 1){
                        liIdx++;   //다음 줄로 이동하기 위한 인덱스 번호 증가
                        //다음 문장을 타이핑 하기 위한 셋팅
                        typingBool = false;
                        typingIdx = 0;
                        typingTxt = $(".motto > ul >li").eq(liIdx).text();
                    
                        //다음문장 타이핑 전 1초 쉬기
                        clearInterval(time);
                        setTimeout(function(){
                            time = setInterval( typing, 100)
                        }, 1000);
                    } else if(liIdx ==liLength-1){
                        clearInterval(time);
                    }//liIdx < liLength -1
                }//typingIdx < typingTxt.length
            } //typing


            //메뉴 클릭 시 바 이동
            $(".menu li a").click(function(){
                var n= $(".menu li a").index(this);
                console.log("n:",n)
                switch(n){
                    case 0 : $("#indicator").css({left: "5.2%", opacity:1})
                    break;
                    case 1 : $("#indicator").css({left: "38.7%", opacity:1})
                    break;
                    case 2 : $("#indicator").css({left: "73.3%", opacity:1})
                }
            }),//$(".menu li a").click




            //로고 클릭 시 바 리셋
            $(".logo").click(function(){
                $("#indicator").css({opacity:0})
            }),//logo").click



                        //coding hover
                        $(".c_finish a").hover(function(){
                            $(".c_finish1 img").stop().animate({top:"-486.5%"},4000)
                            $(".c_finish2 img").stop().animate({top:"-214%"},2000)
                            $(".c_finish3 img").stop().animate({top:"-17%"},500)
                            $(".c_finish4 img").stop().animate({top:"-478%"},4000)
                            $(".c_finish5 img").stop().animate({top:"-105%"},1000)
                            $(".c_finish6 img").stop().animate({top:"-86%"},1000)
                            $(".c_finish7 img").stop().animate({top:"-374%"},4000)
                        }, function(){
                            $(".c_finish1 img").stop().animate({top:"0"},2000)
                            $(".c_finish2 img").stop().animate({top:"0"},2000)
                            $(".c_finish3 img").stop().animate({top:"0"},500)
                            $(".c_finish4 img").stop().animate({top:"0"},4000)
                            $(".c_finish5 img").stop().animate({top:"0"},1000)
                            $(".c_finish6 img").stop().animate({top:"0"},1000)
                            $(".c_finish7 img").stop().animate({top:"0"},4000)
                        })
                    }}

                })//fullpage
        }//if390보다 클 때

})//jquery
