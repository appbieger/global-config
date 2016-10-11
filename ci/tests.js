
QUnit.test( "TG Object exist", function( assert ) {
  assert.ok( tg != undefined, "Passed!" );
});

QUnit.test( "TG tg.triggerMenu.burger exist", function( assert ) {
  assert.ok( tg.triggerMenu.burger != undefined, "Passed!" );
});

QUnit.test( "TG tg.triggerMenu.search exist", function( assert ) {
  assert.ok( tg.triggerMenu.search != undefined, "Passed!" );
});

QUnit.test( "TG tg.barcode.scan exist", function( assert ) {
  assert.ok( tg.barcode.scan != undefined, "Passed!" );
});

QUnit.test( "TG tg.msgCount exist", function( assert ) {
  assert.ok( tg.msgCount != undefined, "Passed!" );
});

QUnit.test( "TG tg.triggerMenu.burger exist", function( assert ) {
  tg.debugFeedback.clear();
  assert.ok( tg.debugFeedback.triggerMenu_burger == false, "Passed!" );
  tg.triggerMenu.burger();
  assert.ok( tg.debugFeedback.triggerMenu_burger == true, "Passed!" );

});

QUnit.test( "TG tg.triggerMenu.search worked", function( assert ) {
    tg.debugFeedback.clear();
  assert.ok( tg.debugFeedback.triggerMenu_search == false, "Passed!" );
  tg.triggerMenu.search();
  assert.ok( tg.debugFeedback.triggerMenu_search == true, "Passed!" );

});


QUnit.test( "TG tg.barcode.scan  worked", function( assert ) {
    tg.debugFeedback.clear();
  assert.ok( tg.debugFeedback.barcode_scan == false, "Passed!" );
  tg.barcode.scan();
  assert.ok( tg.debugFeedback.barcode_scan == true, "Passed!" );

});

QUnit.test( "TG tg.msgCount   worked", function( assert ) {
    tg.debugFeedback.clear();
  assert.ok( tg.debugFeedback.msgCount == false, "Passed!" );
  tg.msgCount();
  assert.ok( tg.debugFeedback.msgCount == true, "Passed!" );

});

test( "TG tg.msgCount   worked", function( assert ) {
    tg.debugFeedback.clear();
  assert.ok( tg.debugFeedback.msgCount == false, "Passed!" );
  tg.msgCount();
  assert.ok( tg.debugFeedback.msgCount == true, "Passed!" );

});

 
 