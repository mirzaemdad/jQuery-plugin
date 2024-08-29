
wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();

//   countdown
var countdown = $("#countdown").countdown360({
    radius: 60,
    strokeStyle: "#477050",
    strokeWidth: undefined,
    fillStyle: "#8ac575",
    fontColor: "#477050", 
    fontFamily: "sans-serif",
    fontSize: undefined,
    fontWeight: 700,
    autostart: true,
    seconds: 10,
    label: ["second", "seconds"],
    startOverAfterAdding: true, 
    smooth: false,
    onComplete: function () {}
});

var countdown = $("#countdown").countdown360({
    radius      : 60,
    seconds     : 100,
    fontColor   : '#FFFFFF',
    autostart   : false,
    onComplete  : function () { console.log('done') }
});


// fadescroll


/* ================ jQ=============== */
$(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // $(selector).countMe(delay,speed)
    // $("#counter").countMe(40,65);
        $("#counter1").countMe(30, 30);
        $("#counter2").countMe(40, 50);
        $("#counter3").countMe(80,100);
})