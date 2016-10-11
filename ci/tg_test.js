var tg = new Object;
var triggerMenu = new Object;
var barcode = new Object;
var msgCount = new Object;


tg.triggerMenu = {
    burger : function () {
        tg.debugFeedback.triggerMenu_burger = true;
    },
     search : function () {
         tg.debugFeedback.triggerMenu_search = true;
    } 
};
tg.barcode =  {
    scan : function () {
        tg.debugFeedback.barcode_scan = true;
    } 
};
tg.msgCount =   function () {
         tg.debugFeedback.msgCount = true;
    
};


tg.debugFeedback =  {
    triggerMenu_burger : false,
    triggerMenu_search : false,
    barcode_scan : false,
    msgCount : false ,
    msgCount_return : 0, 
    clear : function () {
            triggerMenu_burger =false
        triggerMenu_search = false
        barcode_scan = false
        msgCount = false 
        msgCount_return = 0
    } 
};
