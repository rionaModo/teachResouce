
function htmlFont () {
    let deviceWidth = window.innerWidth;
    deviceWidth = deviceWidth > 1200 ? 1200 : deviceWidth < 375 ? 375 : deviceWidth;
    document.documentElement.style.fontSize = deviceWidth / 12 + 'px';
  }
function showPage(showId, hideId){
    $("#" + showId).fadeIn();
    $("#" + hideId).fadeOut();
    // $("#" + showId).css({
    //     opacity: 1
    // });
    // $("#" + hideId).css({
    //     opacity: 0
    // });
    
}
function handleNext(id){
    $("#page-hannan-map").fadeOut("slow", function(){
        mapHandle.handleNextHandle();   
    });
}

function handlePage4(){
    mapHandlePage4.handleNextHandle();
}

var mapHandle = {
    nextStep: 1,
    handleNextHandle(){
        switch(this.nextStep){
            case 1:
                this.nextStep = 2
                return this.showZj();
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
                return showPage('ppt-page4', 'ppt-page3');

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
            }, 'slow');  
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
            }, 'slow');  
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
            }, 'slow');
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
            }, 'slow');
        });  
    }
}
var mapHandlePage4 = {
    nextStep: 1,
    handleNextHandle(){
        switch(this.nextStep){
            case 1:
                this.nextStep = 2
                return this.showMap();
            case 2:
                this.nextStep = 3 
                return this.showAnimate();
            default:
                this.nextStep = 1
                return showPage('ppt-page5', 'ppt-page4');

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
    }
}
$(document).ready(function(){
    // showPage('ppt-page3', 'ppt-page2')
    showPage('ppt-page2', 'ppt-page11')
    htmlFont()
})