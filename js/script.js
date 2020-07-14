// JavaScript Document

/****************************************************
// スムーススクロール
****************************************************/
   $('a[href^="#"]').click(function() {
      var speed = 400;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });

// トップへ戻る
$(function() {
  var pagetop = $('.pagetop');
  // ボタン非表示
  pagetop.hide();
    

/*************************************************
  // 500px スクロールしたらボタン表示
****************************************************/
    $(window).scroll(function () {
       if ($(this).scrollTop() > 500) {
            pagetop.fadeIn();
       } else {
            pagetop.fadeOut();
            }
       });
       pagetop.click(function () {
           $('body, html').animate({ scrollTop: 0 }, 500);
              return false;
   });
});


/****************************************************
 // スクロールにあわせてフェードイン
****************************************************/
    $('head').append('<style type="text/css">.ch {opacity:0;}</style>');
    (function($){
        $.fn.scrollFade = function(config){
            var def = {
                speed    : 1000,
                easing   : 'easeInOutQuart',
                position : 100
            }
            var options = $.extend(def, config);
            return this.each(function(i){
                var box     = $(this);
                var obj     = box.find('.ch');
                var length  = obj.length;
                var pos     = [];

                var k = {
                    init : function(){
                        obj.css({'opacity':0});

                        for(var i=0; i<length; i++){
                            var posY = obj.eq(i).offset().top;
                            pos.push(posY);
                        }
                        k.scroll();
                    },

                    scroll: function(){
                        var scrollTop  = $(window).scrollTop();
                        var windowBottom = $(window).height() + $(window).scrollTop() - def.position;

                        for(var i=0; i<obj.length; i++){
                            if(pos[i] <= windowBottom){
                                k.fadeIn(i);
                            }
                        }
                    },

                    fadeIn : function(i){
                        obj.eq(i).animate({'opacity':1}, def.speed, def.easing);
                    }
                }

                k.init();

                $(window).scroll(function(){
                    k.scroll();
                });
            });
        };
    })
