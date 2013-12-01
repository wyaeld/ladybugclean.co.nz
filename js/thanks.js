$(document).ready(function() { 

  var url = window.location.href;
  if(url.indexOf('?thank-you') != -1) {
    $('#thankyou').removeClass('hidden');
  }
        
});