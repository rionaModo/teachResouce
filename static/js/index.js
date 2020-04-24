
function htmlFont () {
    let deviceWidth = window.innerWidth;
    deviceWidth = deviceWidth > 1200 ? 1200 : deviceWidth < 375 ? 375 : deviceWidth;
    document.documentElement.style.fontSize = deviceWidth / 12 + 'px';
}

function handleNext(id){
    mapHandle.handleNextHandle(); 
}
function handlePage3(showId, hideId){
    mapHandlePageAnimation3.handleNextHandle();
}
function handlePage4(showId, hideId){
    mapHandlePageAnimation4.handleNextHandle();
}
function handlePage15(showId, hideId){
    HandlePageAnimation15.handleNextHandle();
}
function handlePage19(showId, hideId){
    HandleBollPage19.handleNextHandle('page19-boll-container');
}
function handlePage20(showId, hideId){
    HandleBollPage20.handleNextHandle('page20-boll-container');
}
function handlePage23(showId, hideId){
    HandlePageAnimation23.handleNextHandle();
}
var  showPage = (function(){
    let prevShowPageId = 1;
    return function(nextShowPageId, nowPageId){
        if(arguments.length === 1) {
            if(nextShowPageId === 'prev'){
                if(parseInt(prevShowPageId) === 1){
                    return
                }
                nowPageId = prevShowPageId;
                nextShowPageId = parseInt(prevShowPageId)-1
            }
            if(nextShowPageId === 'next'){
                if(parseInt(prevShowPageId) === 30){
                    return
                }
                nowPageId = prevShowPageId;
                nextShowPageId =  parseInt(prevShowPageId)+1
            }
        }
        prevShowPageId = nextShowPageId;
        $("#ppt-page" + nowPageId).fadeOut();
        $("#ppt-page" + nextShowPageId).fadeIn(); 
        resetAllStyle()
    }
})()
var mapHandle = {
    nextStep: 1,
    handleNextHandle:function(){
        switch(this.nextStep){
            case 1:
                this.nextStep = 2
                let that = this
                $("#page-hannan-map").fadeOut("slow", function(){
                    that.showZj();
                });
                return 
            case 2:
                this.nextStep = 3 
                return this.showMgn();
            case 3:
                this.nextStep = 4 
                return this.showYN();
            case 4:
                    this.nextStep =  5
                    return this.showXJ();
            default:
                this.nextStep =  1
                return showPage('4', '3');

        }
    },
    showZj: function(){
        
        $("#page3-zj-title").show();
        $("#page3-zj-title").animate({
            top: '-0.1rem',
            display: 'block',
            opacity: '1',
        }, 'slow', function(){
            $("#page3-zj-map").show();
            $("#page3-zj-map").animate({
                top: '6%',
                display: 'block',
                opacity: '1',
            }, 'slow', function(){
                $("#page3-zj-name").show();
                $("#page3-zj-name").animate({
                    top: '18%',
                    display: 'block',
                    opacity: '1',
                }, 'slow');  
            });  
        });
        
    },
    showMgn: function(){
        $("#page3-mgn-title").show();
        $("#page3-mgn-title").animate({
            top: '-0.1rem',
            display: 'block',
            opacity: '1',
        }, 'slow', function(){
            $("#page3-mgn-map").show();
            $("#page3-mgn-map").animate({
                top: '6%',
                display: 'block',
                opacity: '1',
            }, 'slow', function(){
                $("#page3-mgn-name").show();
                $("#page3-mgn-name").animate({
                    top: '8%',
                    display: 'block',
                    opacity: '1',
                }, 'slow');  
            });  
        });
    },
    showYN: function(){
        $("#page3-yn-map").show();
        $("#page3-yn-map").animate({
            top: '54%',
            opacity: '1',
        }, 'slow', function(){
            $("#page3-yn-title").show();
            $("#page3-yn-title").animate({
                top: '85%',
                opacity: '1',
            }, 'slow', function(){
                $("#page3-yn-name").show();
                $("#page3-yn-name").animate({
                    top: '75%',
                    opacity: '1',
                }, 'slow');
            });
        });  
    },
    showXJ: function(){
        $("#page3-xj-map").show();
        $("#page3-xj-map").animate({
            top: '54%',
            opacity: '1',
        }, 'slow', function(){
            $("#page3-xj-title").show();
            $("#page3-xj-title").animate({
                top: '85%',
                opacity: '1',
            }, 'slow', function(){
                $("#page3-xj-name").show();
                $("#page3-xj-name").animate({
                    top: '55%',
                    opacity: '1',
                }, 'slow');
            });
        });  
    },
    resetStyle:function(){
        this.nextStep = 1
        $("#page-hannan-map").show();
        $("#page3-zj-title,#page3-zj-map,#page3-zj-name,#page3-mgn-title,#page3-mgn-map,#page3-mgn-name,#page3-yn-title,#page3-yn-map,#page3-yn-name,#page3-xj-title,#page3-xj-map,#page3-xj-name").css({
            top: '100%',
            display: 'none',
            opacity: '0.5',
        })
    }
}
var mapHandlePageAnimation3 = {
    nextStep: 1,
    handleNextHandle:function(){
        switch(this.nextStep){
            case 1:
                this.nextStep = 2
                
            case 2:
                this.nextStep = 3 
                return this.showDerection();
            default:
                this.nextStep = 1
                // this.resetStyle()
                return showPage('3', '2');

        }
    },
    showDerection: function(){
        $('.page2-content').fadeIn();
        $('.page2-travel').hide();
    },
    resetStyle: function(){
        $('.page2-content').hide();
        $('.page2-travel').show();
    }
}
var mapHandlePageAnimation4 = {
    nextStep: 1,
    handleNextHandle:function(){
        switch(this.nextStep){
            case 1:
                this.nextStep = 2
                return this.showMap();
            case 2:
                this.nextStep = 3 
                return this.showAnimate();
            default:
                this.nextStep = 1
                // this.resetStyle()
                return showPage('5', '4');

        }
    },
    showMap: function(){
        // $("#page4-xj-map").show();
        $("#page4-xj-map").animate({
            height: '100%',
            top: '0px',
        }, 'slow', function(){
            // $("#page3-zj-map").show();
            $("#page4-xj-text").animate({
                height: '1.7rem',
                top: '20%',
            }, 'slow');  
        }); 
    },
    showAnimate: function(){
        $("#page4-xj-animate").animate({
            height: '70%',
            top: '50%',
        }, 'slow')
    },
    resetStyle: function(){
        this.nextStep = 1
        $("#page4-xj-map,#page4-xj-text,#page4-xj-animate").css({
            height: '0',
            top: '100%'
        })
    }
}
var HandlePageAnimation15 = {
    nextStep: 1,
    handleNextHandle:function(){
        switch(this.nextStep){
            case 1:
                this.nextStep = 2
                $("#page15-right-one").show();
                return
            case 2:
                this.nextStep = 3 
                $("#page15-right-two").show();
                return
            case 3:
                this.nextStep = 4 
                $("#page15-right-three").show();
                return
            case 4:
                this.nextStep = 5 
                $("#page15-right-four").show();
                return
            default:
                this.nextStep = 1;
                $("#page15-right-one,#page15-right-two,#page15-right-three,#page15-right-four").hide()
                return showPage('16', '15');
        }
    }
}
var HandleBollPage19 = {
    nextStep: 1,
    handleNextHandle:function(id){
        switch (this.nextStep) {
            case 1:
                this.nextStep = 2
                this.excuteStyle('bollLeftBottom', id)
                return
            case 2:
                this.nextStep = 3
                this.excuteStyle('bollRightTop', id)
                return
            case 3:
                this.nextStep = 4
                this.excuteStyle('bollRightBottom', id)
                return
            case 4:
                this.nextStep = 5
                this.excuteStyle('bollLeftTop', id)
                return
            default:
                this.nextStep = 1;
                $(id).css({
                    top: '45%',
                    left: '45%'
                })
                return showPage('20', '19');
        }
    },
    excuteStyle:function(animate, id){
        $('#'+id).css({
            '-webkit-animation':animate + ' bollLeftBottom 1s ease-in forwards',
            'animation': animate + ' 1s ease-in forwards'
        })
    }
}
var HandleBollPage20 = $.extend({}, HandleBollPage19)
HandleBollPage20.handleNextHandle = function (id) {
    switch (this.nextStep) {
        case 1:
            this.nextStep = 2
            this.excuteStyle('bollRightBottom', id)
            
            return
        case 2:
            this.nextStep = 3
            this.excuteStyle('bollRightTop', id)
            return
        case 3:
            this.nextStep = 4
            this.excuteStyle('bollLeftTop', id)
            return
        case 4:
            this.nextStep = 5
            this.excuteStyle('bollLeftBottom', id)
            return
        default:
            this.nextStep = 1;
            $(id).css({
                top: '45%',
                left: '45%'
            })
            return showPage('21', '20');
    }
}
var HandlePageAnimation23 = {
    nextStep: 1,
    handleNextHandle:function(){
        if(this.nextStep>7){
            showPage('24', '23')
            $(".page23-answer").hide();
            return;
        }
        $("#page23-answer-" + this.nextStep).show();
        this.nextStep++
    }
}
function resetAllStyle(){
    mapHandle.resetStyle()
    mapHandlePageAnimation3.resetStyle();
    mapHandlePageAnimation4.resetStyle();
}
$(document).ready(function(){
    showPage('1', '0')
    htmlFont()
})