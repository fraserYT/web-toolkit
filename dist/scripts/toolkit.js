"undefined"==typeof toolkit&&(toolkit={}),toolkit.skycons=function(){function t(){var t,e=document,n=(e.documentElement,e.body),i=!1,o=e.createElement("p"),a=e.createElement("style"),s='#testbefore:before { content: "before"; }';return a.type="text/css",o.id="testbefore",a.styleSheet?a.styleSheet.cssText=s:a.appendChild(e.createTextNode(s)),n.appendChild(a),n.appendChild(o),t=e.getElementById("testbefore").offsetHeight,t>=1&&(i=!0),n.removeChild(a),n.removeChild(o),i}function e(t,e){var n=t.innerHTML,o=i[e];t.innerHTML='<span style="font-family: \'skycons\'" class="ie7-skycon">'+o+"</span>"+n}function n(){if(!t()){var n,i,o,a=document.getElementsByTagName("*");for(n=0;o=a[n],o;n+=1)i=o.className,i=i.match(/skycon-[^\s'"]+/),i&&e(o,i[0])}}var i={"skycon-sky":"&#xf100;","skycon-twitter-reply":"&#xf101;","skycon-chevron":"&#xf102;","skycon-facebook":"&#xf103;","skycon-remote-record":"&#xf104;","skycon-warning":"&#xf105;","skycon-carousel-play":"&#xf106;","skycon-user-profile":"&#xf107;","skycon-search":"&#xf108;","skycon-twitter-retweet":"&#xf109;","skycon-volume":"&#xf10a;","skycon-twitter-favourite":"&#xf10b;","skycon-expand":"&#xf10c;","skycon-carousel-pause":"&#xf10d;","skycon-share":"&#xf10e;","skycon-never-miss":"&#xf10f;","skycon-mail":"&#xf110;","skycon-sky-go":"&#xf111;","skycon-twitter-follow":"&#xf112;","skycon-minify":"&#xf113;","skycon-twitter":"&#xf114;","skycon-close":"&#xf115;","skycon-menu":"&#xf116;","skycon-google-plus":"&#xf117;"};return{add:e,init:n}}(),"function"==typeof window.define&&window.define.amd&&define("utils/skycons",[],function(){return toolkit.skycons}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.hashmanager=function(){function t(){$(window).on("hashchange",e);var t=document.documentMode,n="onhashchange"in window&&(void 0===t||t>7);n||(s.hash=document.location.hash,setInterval(function(){document.location.hash!==s.hash&&$(window).trigger("hashchange")},200)),s.windowLoaded=!0}function e(t){var e,n;t=a("string"==typeof t?t:location.hash),t?(e=s.globalHashList[t],n="callback",s.lastExecutor=t):s.lastExecutor&&(e=s.globalHashList[s.lastExecutor],n="undo"),e&&"function"==typeof e[n]&&e[n](t)}function n(){var t=window.location;"pushState"in history?(location.hash="!",history.pushState("",document.title,t.pathname+t.search)):location.hash="!"}function i(t){location.hash="!"+t}function o(t,n,i){var o=s.globalHashList;$(t).each(function(t,r){if(r=a(r),o[r]){var d="hashManager: hash ("+r+") already exists";throw new Error(d)}o[r]={callback:n,undo:i},s.windowLoaded&&r===a(location.hash)&&e(r)})}function a(t){return t.replace(/[#!]/g,"")}var s={globalHashList:{},hasLoaded:!1,windowLoaded:!1,lastExecutor:null,hash:null};return t(),{register:o,change:i,remove:n,onHashChange:e,cleanHash:a}}(),"function"==typeof window.define&&window.define.amd&&define("utils/hashmanager",[],function(){return toolkit.hashmanager}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.popup=function(){function t(t){var e=t.url,n=t.width||400,i=t.height||n,o=t.top||screen.height/2-i/2,a=t.left||screen.width/2-n/2,s=t.title||"Sky";return window.open(e,s,"top="+o+",left="+a+",width="+n+",height="+i)}function e(){$("body").on("click","[data-popup]",function(e){e.preventDefault();var n=$.extend($(this).data("popup"),{url:$(this).attr("href")});t(n)})}return{init:e,open:t}}(),"function"==typeof window.define&&window.define.amd&&define("utils/popup",[],function(){return toolkit.popup}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.tabs=function(t){function e(){h.rememberState?(t.register(n(),o),u.showMore.on("click",function(t){t.preventDefault(),a($(this))}),$("body").on("click",function(t){$(t.target).closest(u.showMore).length||($(u.showMore).parent("div").children("ul").removeClass("dropdown-tab-selected"),$(u.showMore).removeClass("dropdown-tab-selected"))}),u.tabs.on("click",function(t){$(t.target).parents(".dropdown-tab-info").length&&console.log(t.target)}),$(document).ready(function(){c(),s()}),$(window).bind("skycom.resizeend",function(){c(),s()})):(u.tabs.on("click",function(t){t.preventDefault(),o($(this).find("a").attr("href"))}),u.showMore.on("click",function(t){t.preventDefault()}))}function n(){var t=[];return u.tabs.each(function(){t.push($(this).attr("aria-controls"))}),t}function o(t){u.tabTargets.add(u.tabs).removeClass("selected"),$("#"+t+"-tab").add($("#"+t)).addClass("selected"),$this=$("#"+t+"-tab"),$this.parents().is("ul.dropdown-tab-info")?($($("ul.tabs").children("li").last()).prependTo(".dropdown-tab-info"),$this.insertAfter($("ul.tabs").children("li").last()),l(),h.hasSwitchedOut=!0):h.hasSwitchedOut&&($($("ul.tabs").children("li").last()).appendTo(".dropdown-tab-info"),$(".dropdown-tab-info").children("li").first().insertAfter($("ul.tabs").children("li").last()),l(),h.hasSwitchedOut=!1)}function a(t){$(t).parent("div").children("ul").hasClass("dropdown-tab-selected")?($(u.showMore).removeClass("dropdown-tab-selected"),$(t).parent("div").children("ul").removeClass("dropdown-tab-selected")):($(u.showMore).addClass("dropdown-tab-selected"),$(t).parent("div").children("ul").addClass("dropdown-tab-selected"))}function s(){$(".dropdown-tab-info").each(function(){$(this).children("li").length||$(this).parent("div").hide()})}function r(){return $containerWidth=u.tabContainer.width(),totalWidth=0,numberOfTabs=0,$(".tabs [id$=-tab]").each(function(){if(totalWidth+=$(this).find("a span").innerWidth()+30,$containerWidth>totalWidth)numberOfTabs++;else if(totalWidth>$containerWidth)return numberOfTabs}),numberOfTabs}function d(t){i=0,$(".tabs").children("li").each(function(){i>=t?($(this).appendTo(".dropdown-tab-info"),l(),$(".dropdown-tab-select").show()):i++})}function c(){return numberOfTabs=r(),d(numberOfTabs),numberOfTabs>=$(".tabs").children("li").length+1?($(".dropdown-tab-info li").first().insertBefore(".tabs div.dropdown-tab-select"),!1):void 0}function l(){h.sortDropdown=[],$(".dropdown-tab-info li").each(function(){h.sortDropdown.push($(this).attr("data-value"))}),h.sortDropdown.sort(),$.each(h.sortDropdown,function(){$('.dropdown-tab-info li[data-value="'+this+'"').appendTo(".dropdown-tab-info")})}var u={tabContainer:$("section[data-function=tabs]"),tabs:$("section[data-function=tabs] li[role=tab]"),tabTargets:$("section[data-function=tabs] div[role=tabpanel]"),showMore:$("section[data-function=tabs] ul[role=tablist] .dropdown-tab-select a"),dropdownTab:$("section[data-function=tabs] ul[role=tablist] .dropdown-tab-select ul.dropdown-tab-info")},h={rememberState:"true"===u.tabContainer.attr("data-remember-state"),hasSwitchedOut:!1,sortDropdown:[],sortTabs:[]};return e(),{getHashList:n,changeTab:o}}(toolkit.hashmanager),"function"==typeof window.define&&window.define.amd&&define("modules/tabs",["utils/hashmanager"],function(){return toolkit.tabs}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.share=function(){function t(){i.shareCount.on("click keypress",e)}function e(t){t.preventDefault();var e=$(this).parent(),n="keypress "+("ontouchend"in document.documentElement?"touchend":"click");("click"===t.type||"touchend"===t.type||"keypress"===t.type&&13===t.which)&&(e.toggleClass("active"),i.document.on(n,function o(t){$.contains(e[0],t.target)||(e.removeClass("active"),i.document.off(n,o))}))}function n(){t()}var i={document:$(document),shareCount:$(".share-popup .summary")};return{init:n,toggleSharePopover:e}}(),"function"==typeof window.define&&window.define.amd&&define("modules/share",[],function(){return toolkit.share}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.carousel=function(t,e){function n(t,e){this.options=e,this.$viewport=t,this.$slideContainer=t.find(".skycom-carousel-container"),this.$slides=this.$slideContainer.find(">"),this.currentIndex=0,this.slideCount=this.$slides.length,this.timerId=!1,this.touchReset(),this.bindEvents()}function i(t,e){this.carousel=t,this.wrapper=t.$viewport.find(".video-wrapper"),this.wrapper.attr("id","video-"+e.videoId),this.videocontrolcontainer=t.$viewport.find(".videocontrolcontainer"),this.player=t.$viewport.find("video"),this.videocontrolcontainer.find("img").on("error",function(){this.src=e.placeHolderImage}),this.options=e,this.bindEvents()}var o=function(){return"WebKitCSSMatrix"in t&&"m11"in new t.WebKitCSSMatrix}(),a=function(){var t=document.body.style;return void 0!==t.transform||void 0!==t.WebkitTransform||void 0!==t.MozTransform||void 0!==t.OTransform}();n.prototype={unbindTouchEvents:function(){this.$slideContainer.off("touchstart touchmove touchend touchcancel")},bindTouchEvents:function(){this.$slideContainer.on("touchstart",this.touchstart.bind(this)).on("touchmove",this.touchmove.bind(this)).on("touchend",this.touchend.bind(this)).on("touchcancel",this.touchReset.bind(this))},bindEvents:function(){this.bindTouchEvents(),this.$slideContainer.find("a").on("click",this.pause.bind(this))},unbindEvents:function(){this.unbindTouchEvents(),this.$slideContainer.find("a").off("click")},setOffset:function(t,e){var n=this.$slideContainer.removeClass("animate");return e&&n.addClass("animate"),o?n.css("transform","translate3d("+t+"%,0,0) scale3d(1,1,1)"):a?n.css("transform","translate("+t+"%,0)"):e?n.animate({left:2*t+"%"},600):n.css({left:2*t+"%"}),this},moveSlide:function(t){var e,n,i=this,o=this.$slides;return n=t.index>=this.slideCount?0:t.index<0?this.slideCount-1:t.index,e=t.index>this.currentIndex&&!t.reverse?"left":"right",o.filter(":not(:eq("+this.currentIndex+"))").hide(),o.eq(this.currentIndex).css("float",e),o.eq(n).show().css("float","left"==e?"right":"left"),this.setOffset(t.start,!1),"undefined"!=typeof t.end&&(setTimeout(function(){i.setOffset(t.end,!0),i.$viewport.trigger("change",n)},20),this.currentIndex=n,"function"==typeof t.callback&&t.callback(n)),n},"goto":function(t,e,n){return e!==!1&&this.pause(),t!==this.currentIndex?(t>this.currentIndex?this.moveSlide({index:t,start:0,end:-50,callback:n}):this.moveSlide({index:t,start:-50,end:0,callback:n}),this):void 0},next:function(t,e){return this.goto(this.currentIndex+1,t,e),this.$viewport.find(".indicators, .actions").css("display","block"),this},previous:function(){return this.goto(this.currentIndex-1),this.$viewport.find(".indicators, .actions").css("display","block"),this},play:function(t,e){var n=this,i=this.options.interval;return n.timerId=setTimeout(function(){n.next(!1),n.timerId=setTimeout(function t(){n.next(!1,function(){n.timerId=setTimeout(t,i)})},i)},e||this.options.onPlayDelay),this.$viewport.trigger("playing"),"function"==typeof t&&t(),this},pause:function(t){return clearTimeout(this.timerId),this.$viewport.trigger("paused"),"function"==typeof t&&t(),this},touchstart:function(t){var e=t.originalEvent.touches[0];this.pause(),this.swipe.start={x:e.pageX,y:e.pageY}},touchmove:function(t){var e,n=this.swipe,i=t.originalEvent.touches[0],o=i.pageX-n.start.x,a=i.pageY-n.start.y,s=Math.abs(o)>Math.abs(a),r=0>o?this.currentIndex+1:this.currentIndex-1;n.start&&s!==!1&&(t.preventDefault(),e=100*(o/this.$slideContainer.outerWidth(!0)),o>0&&(e-=50),this.swipe.positionAsPercentage=e,this.moveSlide({index:r,start:e}))},touchend:function(t){if(this.swipe.start){var e=this.swipe,n=e.positionAsPercentage,i=t.originalEvent.changedTouches[0],o=i.pageX-e.start.x,a=null,s=75;if(Math.abs(o)>s&&(a=0>o?"left":"right"),"left"===a)this.moveSlide({index:this.currentIndex+1,start:n,end:-50}),this.$viewport.find(".next").trigger("toolkit.track");else if("right"===a)this.moveSlide({index:this.currentIndex-1,start:n,end:0}),this.$viewport.find(".previous").trigger("toolkit.track");else if(0!==n){var r,d=o>0?n+50:n,c=this.currentIndex,l=0;0>d?this.currentIndex=c+1>=this.slideCount?0:c+1:(this.currentIndex-=1,l=-50,d-=50),r=0===this.currentIndex&&c===this.slideCount-1,this.moveSlide({index:c,start:d,end:l,reverse:r})}this.touchReset()}},touchReset:function(){this.swipe={start:!1,positionAsPercentage:0}}},i.prototype={bindEvents:function(){var t=this,e=function(t){t.preventDefault()},n=function(){return t.stop(),i.off("click",e),!1},i=this.wrapper;i.on("click",e).find(".close").one("click touchstart",n),this.player.on("ended webkitendfullscreen",n)},play:function(){var t=this,e=this.carousel.$viewport.find(".actions, .indicators");this.originalHtml=this.videocontrolcontainer.html(),this.carousel.pause(),this.showCanvas(function(){e.hide(),t.carousel.unbindTouchEvents(),t.player.sky_html5player(t.options),setTimeout(function(){sky.html5player.play()},1333)})},stop:function(){var n=this,i=this.carousel.$viewport.find(".actions, .indicators");e(t).off("skycom.resizeend",n.resizeCarousel),sky.html5player.close(this.wrapper),n.videocontrolcontainer.html(n.originalHtml),this.hideCanvas(function(){n.carousel.bindTouchEvents(),i.show()})},showCanvas:function(n){var i,o=this.carousel.$viewport,a=o.find(".video-overlay"),s=o.find(".video-wrapper"),r=o.find(".play-video"),d=o.find(".video-wrapper .close"),c=500,l=this;this.originalHeight=o.height(),s.addClass("playing-video"),a.fadeIn(function(){r.fadeOut(),i=l.calculateHeightForVideo(),o.animate({height:i},c,function(){e(t).on("skycom.resizeend",e.proxy(l.resizeCarousel,l)),s.show(),a.fadeOut(c,function(){d.addClass("active")}),n()})})},calculateHeightForVideo:function(){return Math.round(9*(this.carousel.$viewport.width()/16))},resizeCarousel:function(){this.carousel.$viewport.animate({height:this.calculateHeightForVideo()},250)},hideCanvas:function(t){var e=this.carousel.$viewport,n=e.find(".video-overlay"),i=e.find(".video-wrapper"),o=e.find(".play-video"),a=e.find(".video-wrapper .close"),s=500,r=this.originalHeight;n.fadeIn(s,function(){a.removeClass("active"),e.animate({height:r},s,function(){e.css({height:"auto"}),t(),o.fadeIn(),n.hide(),i.fadeOut(),i.removeClass("playing-video")})})}},e.fn.skycom_carousel=function(t){var o=e.extend(!0,{carousel:{actions:[{id:"play",label:"Play Carousel"},{id:"pause",label:"Pause Carousel"},{id:"previous",label:"Previous"},{id:"next",label:"Next"}],autoplay:!0,startSlideIndex:0,onPlayDelay:500,interval:6e3},video:{token:"8D5B12D4-E1E6-48E8-AF24-F7B13050EE85",autoplay:!1,videoId:null,freewheel:!1,placeHolderImage:"//static.video.sky.com/posterframes/skychasky.jpg"}},t),a={actions:function(t,n){var i,o,a,s,r="",d=n.actions,c=n.onclick;if(n.count<=1)return this;for(a in d)s="",i=d[a].id,o=d[a].label,("next"==i||"previous"==i)&&(s=" hidden-touch "),r+='<a href="#" class="skycom-internal '+s+i+'" >',r+='<span class="icon-carousel-'+i+'"></span>'+o,("next"==i||"previous"==i)&&(r+='<span class="icon-carousel-'+i+'-over over"></span>'),r+="</a>";return t.find(".skycom-carousel-container").before('<div class="actions">'+r+"</div>"),t.find("> .actions > *").each(function(t){e(this).attr("data-action",d[t].id).on("click",function(e){c(d[t].id),e.preventDefault()})}),this},indicators:function(t,n){var i,o,a=n.count,s=n.onclick,r='<div class="indicators"><div class="container">',d=' class="active"';if(1>=a)return this;for(o=a;o--;)r+="<span"+d+' data-tracking data-tracking-label="indicator"></span>',d="";return i=e(r+"</div></div>").on("click","span",function(t){s(e(t.currentTarget).index())}),t.append(i),this},video:function(t){return t.append('<div class="video-overlay"></div>'),this}};return this.each(function(){var t=e(this),s=new n(t,o.carousel),r=function(e){a.indicators(t,{count:e.slideCount,onclick:function(t){e.goto(t)}}).actions(t,{count:e.slideCount,actions:o.carousel.actions,onclick:function(t){e[t]()}}).video(t)};r(s),t.on("click",".play-video",function(t){t.preventDefault(),o.video.videoId=e(this).attr("data-video-id"),o.carousel.videoAds&&(o.video.freewheel=!0);var n=new i(s,o.video);n.play()}).on("change",function(e,n){n=n||0,t.find(".indicators .container > *").removeClass("active").eq(n).addClass("active"),s.$slides.removeClass("active").find("a").attr("tabindex",-1),s.$slides.eq(n).addClass("active").find("a").removeAttr("tabindex")}).on("playing",function(){t.removeClass("paused").addClass("playing")}).on("paused",function(){t.removeClass("playing").addClass("paused")}).on("pause",function(){s.pause()}).on("play",function(){s.play()}).on("refresh",function(e,n){s.$slides=s.$slideContainer.find(">"),s.slideCount=s.$slides.length,t.find(".indicators").remove(),t.find(".actions").remove(),t.find(".video-overlay").remove(),r(s),n=parseInt(n,10),isNaN(n)||0>n?n=0:n>s.slideCount-1&&(n=s.slideCount-1),n>s.currentIndex?s.moveSlide({index:n,start:0,end:-50}):s.moveSlide({index:n,start:-50,end:0})}).on("keyup",function(t){switch(t.keyCode){case 9:s.pause();break;case 37:s.previous();break;case 39:s.next()}}).find(".toggle-terms").on("click",function(){s.$viewport.toggleClass("showing-tandcs")}),s.slideCount>1?(s[o.carousel.autoplay===!0?"play":"pause"](!1,o.carousel.interval),s.goto(o.carousel.startSlideIndex,!1),t.trigger("change")):s.unbindTouchEvents()})}}(window,jQuery),"function"==typeof window.define&&window.define.amd&&define("modules/carousel",[],function(){return toolkit.carousel}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.datepicker=function(){function t(){p.datepicker.keyup(function(){this.value!=this.value.replace(/\D/g,"")&&(this.value=this.value.replace(/\D/g,""))}),p.datepicker.on("focus",function(){i($(this),"show")}),p.day.on("keyup",function(){p.day.val()>s(m,w)?p.day.val(s(m,w)):"00"===p.day.val()&&p.day.val("01"),2===p.day.val().length&&(y=parseInt(p.day.val(),10),k=parseInt(y,10),e())}).on("blur",function(t){p.day.val().length<2&&0!==p.day.val().length&&(y=parseInt(p.day.val(),10),k=parseInt(y,10),"00"!==p.day.val()&&"0"!==p.day.val()?p.day.val("0"+p.day.val()):p.day.val("01"),e()),t.shiftKey&&9==t.keyCode&&$(".calendar").hide()}),p.month.on("keyup",function(){p.month.val()>12&&p.month.val("12"),"00"===p.month.val()&&p.month.val("01"),2===p.month.val().length&&(m=parseInt(p.month.val(),10)-1,b=parseInt(m,10),e())}).on("blur",function(){p.month.val().length<2&&0!==p.month.val().length&&(m=parseInt(p.month.val(),10)-1,b=parseInt(m,10),"00"!==p.month.val()&&"0"!==p.month.val()?p.month.val("0"+p.month.val()):p.month.val("01"),e())}),p.year.on("keyup",function(){4===p.year.val().length&&(w=parseInt(p.year.val(),10),g=parseInt(w,10),e())}).on("blur",function(t){0===t.which&&$(".calendar").hide()}),$(".monthleft").on("click",o),$(".monthright").on("click",a),$(document).on("keyup",function(t){27==t.keyCode&&$(".calendar").hide()})}function e(){$(".monthyearval").html(v[m]+" "+w),n(s(m,w),r(m,w)),$(".daycontainer .day").on("click",function(){console.log("picked date"),y=this.innerHTML,$(".daycontainer").find(".selected").removeClass("selected"),$(this).addClass("selected"),p.day.val(10>y?"0"+y:y),k=y,p.month.val(10>m+1?"0"+(m+1):m+1),b=m,p.year.val(w),g=w,$(".calendar").hide(),p.day.css("border-radius","5px"),p.month.css("border-radius","5px"),p.year.css("border-radius","5px")}),$(document).click(function(t){"datepicker"==t.target.class||$(".datepicker").find(t.target).length||$(".calendar").hide()}),console.log("rendering calendar"),console.log("values: day: "+y+". month: "+m+". year: "+w),console.log("calender vals: days in month: "+s(m+1,w)+". first day: "+r(m,w)),console.log("Input day: "+k+" input month: "+b+" input year: "+g)}function n(t,e){for(var n="",i=1;e>i;i++)n+="<span></span>";for(var o=1;t>=o;o++)n+=o==k&&m==b&&w==g?C>m&&I>=w||x>o&&C>=m&&I>=w?"<span class='past selected day'>"+o+"</span>":"<span class='selected day'>"+o+"</span>":C>m&&I>=w?"<span class='past day'>"+o+"</span>":x>o&&C>=m&&I>=w?"<span class='past day'>"+o+"</span>":"<span class='day'>"+o+"</span>";$(".daycontainer").html(n)}function i(t,e){"show"==e?t.siblings("div.calendar").show():t.siblings("div.calendar").hide()}function o(){0===m?(m=11,w--):m--,e()}function a(){11===m?(m=0,w++):m++,e()}function s(t,e){return[31,d(e)?29:28,31,30,31,30,31,31,30,31,30,31][t]}function r(t,e){var n=new Date(e,t,1).getDay();return 0===n?7:n}function d(t){return 0===t%4&&0!==t%100||0===t%400}function c(){return(new Date).getDate()}function l(){return(new Date).getMonth()}function u(){return(new Date).getFullYear()}function h(){$(".datepicker .datepicker-container").append('<div class="calendar"><div class="monthyear"><span class="monthleft">&larr;</span><span class="monthyearval"></span><span class="monthright">&rarr;</span></div><div class="days"><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span></div><div class="daycontainer"></div></div>')}function f(){h(),e(),t()}var p={datepicker:$(".datepicker input"),day:$("#day"),month:$("#month"),year:$("#year"),monthleft:$(".monthleft"),monthright:$(".monthright"),dayspan:$(".daycontainer .day"),monthyear:$(".monthyear")},v=["January","February","March","April","May","June","July","August","September","October","November","December"],y=c(),m=l(),w=u(),k=y,b=m,g=w,x=y,C=m,I=w;return{init:f}}(),"function"==typeof window.define&&window.define.amd&&define("modules/datepicker",[],function(){return toolkit.datepicker}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.main=function(){function t(){var t=function(){$(document.body).addClass("window-loaded")},e=setTimeout(t,5e3);$(window).load(function(){clearTimeout(e),t()})}t()}(),toolkit.modules=function(){var t=function(t){var e,n=$.extend({skycons:!1,share:!1,popup:!1,datepicker:!1},t);for(e in n)(n[e]||!t)&&toolkit[e]&&toolkit[e].init&&toolkit[e].init()};return{init:t}}(),"function"==typeof window.define&&window.define.amd&&define("modules",[],function(){return toolkit.modules}),"function"==typeof window.define&&window.define.amd&&define("toolkit",["utils/skycons","utils/hashmanager","utils/popup","modules","modules/tabs","modules/share","modules/carousel","modules/datepicker"],function(t,e,n,i,o,a,s,r){return{modules:i,skycons:t,hashmanager:e,popup:n,tabs:o,share:a,carousel:s,datepicker:r}});
//# sourceMappingURL=toolkit.js.map