$(function(){
    var winWidth=$(window).width();
    if(winWidth >=1000){
        //fullpage
        $('#fullpage').fullpage({
            menu:'#menu',
            anchors:['HOME','PROFILE','WEB','EDITORIAL', 'CONTACT'],
            navigation:true,
            navigationPosition:'left',
            navigationTooltips:['HOME','PROFILE','WEB','EDITORIAL', 'CONTACT'],
            showActiveTooltip:true,
            afterLoad:function(anchorLink, index, direction){                
                //매 페이지마다 색을 다르게
                if(index==1){
                    $('header nav ul li a').css("color","black");
                    $('header nav ul li .a1').css("color","#c90000");
                    $('#fp-nav ul li:first-child').addClass('active');
                    setTimeout(barAnimation,1000); 
                }else if(index==2){
                    $('header nav ul li a').css("color","black");
                    $('header nav ul li .a2').css("color","#FD9B00");
                    $('#fp-nav ul li').removeClass('active');
                    $('#fp-nav ul li:nth-child(2)').addClass('active');
                }else if(index==3){
                    $('header nav ul li a').css("color","black");
                    $('header nav ul li .a3').css("color","#2C7D18");
                    $('#fp-nav ul li').removeClass('active');
                    $('#fp-nav ul li:nth-child(3)').addClass('active');
                }else if(index==4){
                    $('header nav ul li a').css("color","black");
                    $('header nav ul li .a4').css("color","#234F97");
                    $('#fp-nav ul li').removeClass('active');
                    $('#fp-nav ul li:nth-child(4)').addClass('active');
                }else{
                    $('header nav ul li a').css("color","black");
                    $('header nav ul li .a5').css("color","#7D3CB7");
                    $('#fp-nav ul li').removeClass('active');
                    $('#fp-nav ul li:nth-child(5)').addClass('active');
                }
                if(index==1){
                    $('.s2 .box > div').removeClass('active');
                    setTimeout(barStop,100);
                    $('.s3 .box .swiper').removeClass('active');
                    $('.s4 .box .edit ul li').removeClass('active');

                }
                //2번째 section에서 자식 콘텐츠에 active설정
                if(index==2){
                    $('.s2 .box > div').addClass('active');
                    //1초 기다렸다가 barAnimation함수 호출(1번 실행)
                    setTimeout(barAnimation, 1000);
                    $('.s3 .box .swiper').removeClass('active');
                    $('.s4 .box .edit ul li').removeClass('active');
                }
                if(index==3){
                    $('.s2 .box > div').removeClass('active');
                    setTimeout(barStop, 100);
                    $('.s3 .box .swiper').addClass('active');
                    $('.s4 .box .edit ul li').removeClass('active');
                }
                if(index==4){
                    $('.s2 .box > div').removeClass('active');
                    setTimeout(barStop, 100);
                    $('.s3 .box .swiper').removeClass('active');
                    $('.s4 .box .edit ul li').addClass('active');
                    $('.s4 .box .edit ul li').each(function(){
                        //var second=Math.random(); //0~1사이의 실수
                        var second=$(this).index()*0.1;
                        $(this).css('transition-delay',second+'s');
                    });
                }
                if(index==5){
                    $('.s2 .box > div').removeClass('active');
                    setTimeout(barStop, 100);
                    $('.s3 .box .swiper').removeClass('active');
                    $('.s4 .box .edit ul li').removeClass('active');
                }
                
            }
        });
    }
    //skill bar
    function barAnimation(){
        $(".bar").each(function(){
            $(this).find(".bar-inner").animate({
              width: $(this).attr("data-width")
            },2000)
        });
    }  
    function barStop(){
        $(".bar").each(function(){
            $(this).find(".bar-inner").animate({
              width: 0
            },2000)
        });
    }  
    //swiper
    var swiper = new Swiper(".mySwiper", {
        loop:true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    //popup gallery
    var imgBtn=$('.s4 .box .edit ul li .edit-des');
    var gallTotal=$('.s4 .box .edit ul li').length;
    var popup=$('.popup');
    var container=$('.popup .container');
    var gallNum=0;
    imgBtn.click(function(e){
        e.preventDefault();
        //마우스로 클릭한 a태그의 href속성 값을 가져와서 attr변수에 저장
        var attr=$(this).attr('href');
        console.log(attr);
        //<img src="img/gallery1.jpg"> 문장을 완성해서 container영역에 자식객체로 추가시킴 
        container.append('<img src="'+attr+'">');
        popup.css('display','block');
        //클릭한 a태그의 조상객체 중 li의 인덱스 번호를 가져와서 변수에 저장
        gallNum=$(this).parents('li').index()+1;
        console.log(gallNum);
    });
    
    //popup gallery next btn
    $('.popup .next').click(function(){
        gallNum++;
        if(gallNum > gallTotal) { gallNum=1;}
        container.empty();
        container.append('<img src="img/gallery'+gallNum+'.png">');        
    });
    
    //popup gallery prev btn
    $('.popup .prev').click(function(){
        gallNum--;
        if(gallNum < 1 ) { gallNum=gallTotal;}
        container.empty();
        container.append('<img src="img/gallery'+gallNum+'.png">');        
    });

    //popup gallery close btn
    $('.close').click(function(){
        popup.css('display','none');
        //container안의 내용 비움
        container.empty();
    });


});