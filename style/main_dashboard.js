// create active class on selected menu
$(document).on('click', 'nav a', function(){
  $(this).addClass('active').siblings().removeClass('active')
})


$(document).ready(function(){
  
  // clear the textarea of posting form
  $("#clear").click(function(){
    $(".form-posting").trigger("reset");
  });

  // remove the "select a class" option
  $('#class').click(function(){
    $("#class option[value='selectClass']").remove();
  });

  // like counter based on click
  $('#like').click(function() {
    $('#count-like').html(function(i,val) {
      return val*1+1 });
  });

  // get first name value and show in alert once
  $('#btn-save').one('click', function() {
    var name = $("#fname").val();
    alert("Hi "+name);
  })
});

// unfinished component alert
function underDev() {
  alert('Component Under Development ^_^"')
}

// not responsive yet alert
$(window).resize(function() {
  alert("Not Responsive Yet :)")
})