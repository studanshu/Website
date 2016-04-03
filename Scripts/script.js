// Greeting
function greet () {
  var greeting = "<STRONG>";
  day = new Date();
  hr = day.getHours();
  if ((hr >= 0) && (hr <=5)) {
    t = "Welcome";
  }
  if ((hr >= 6) && (hr <=11)) {
    t = "Good Morning";
  }
  if ((hr >= 12) && (hr <=16)) {
    t = "Good Afternoon";
  }
  if ((hr >= 17) && (hr <=21)) {
    t = "Good Evening";
  }
  if ((hr == 22) || (hr ==23)) {
    t = "Welcome";
  }
  greeting+=t;
  greeting+= "</STRONG>"
  $("#greeting").html(greeting);
}

greet();
// Disable right click context menu
// $(document).ready(function(){
//   $(this).bind("contextmenu", function(e) {
//     e.preventDefault();
//   });
// });

$(document).ready(function(){
  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top - $('nav').height()
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
  });

  // Tooltip for social links
  $('#linkall a').tooltip({
    placement :"bottom"
  });
  $('button').tooltip({
    placement :"bottom"
  });
});


var make_button_active = function()
{
  //Get item siblings
  var siblings =($(this).siblings());

  //Remove active class on all buttons
  siblings.each(function (index)
    {
      $(this).removeClass('active');
    }
  )

  //Add the clicked button class
  $(this).addClass('active');
}

// Menu active
$(document).ready(
  function()
  {
    $(".navbar-nav li").click(make_button_active);
    // $("#cover").css("min-height",$(window).height()- $("nav").height()-100);
  }  

)

// $( "#accordion" ).accordion();


// Cache selectors outside callback for performance. 
var $window = $(window),
$stickyEl = $('#navid'),
elTop = $stickyEl.offset().top;

$window.scroll(function() {
  var downPosition = $window.scrollTop() > elTop-10;
  if (downPosition) {
    $("#navbrand").css('opacity', 1);
  }
  else {
    $("#navbrand").css('opacity', 0);
  }
  $stickyEl.toggleClass('navbar-fixed-top',downPosition);

  $stickyEl.toggleClass('sticky',downPosition);
  $stickyEl.toggleClass('initial',!downPosition);
});

// $("#ama").click(function(e){
//   e.preventDefault();
//   console.log("here");
//   $('#ama').tooltip({ items: "#ama", content: "Displaying on click"});
//   $('#ama').tooltip("open");
// });