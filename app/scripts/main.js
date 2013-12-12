(function( $, undefined ) {
  $.fn.mtgproxy = function() {

    var proxy = {
      //Properties


      //Methods
      addListeners: function(){
        $('#number').focus(function(){
          proxy.clearInput(this);
        });
        $('#submit').click(function(){
          proxy.submitCallback();
          return false;
        });
      },
      clearInput: function(input){
        if($(input).val() === 'Enter ID Number'){
          $(input).val('');
        }
      },
      init: function(){
        proxy.addListeners()
      },
      submitCallback: function(){
        //console.log($('#number').val());
        var string = $('#number').val();
        var ids = string.split(',');
        console.log(ids);
        ids.forEach(function(index){
          console.log(this);
        });
      },
    };
    //Kick it off
    proxy.init();
  };
})( jQuery );

(function( $ ) {
  $(window).load(function(){
    $().mtgproxy();
  });
})( jQuery );