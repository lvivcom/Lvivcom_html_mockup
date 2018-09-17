
// var instance = M.Parallax.getInstance(elem);

    // $('.parallax').parallax('methodName');
    // $('.parallax').parallax('methodName', paramName);
  
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.parallax').parallax();
  });