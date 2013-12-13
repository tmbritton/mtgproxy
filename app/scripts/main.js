(function( $, undefined ) {
  $.fn.mtgproxy = function() {

    var proxy = {
      //Properties


      //Methods
      addCard: function(id) {
        var url = 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=' + id + '&type=card';
        var div = '<figure class="card-wrap">';
        var img = '<img src="' + url + '" data-id="' + id + '">';
        var spans = '<a class="add" href="" title="Add"><i class="fa fa-plus-circle"></i></a><a class="subtract" href="" title="Subtract"><i class="fa fa-minus-circle"></i></a>';
        var closing = '</figure>';
        $('#print').append(div + img + spans + closing);
      },
      addListeners: function(){
        $('#number').focus(function(){
          proxy.clearInput(this);
        });
        $('#card_input').submit(function(){
          proxy.submitCallback();
          return false;
        });
        $('#print').on('click', '.add', function() {
          proxy.duplicateCard(this);
          return false;
        });
        $('#print').on('click', '.subtract', function() {
          proxy.deleteCard(this);
          return false;
        });
      },
      clearInput: function(input){
        if($(input).val() === 'Enter ID Number'){
          $(input).val('');
        }
      },
      deleteCard: function(element){
        $(element).parent().remove();
      },
      duplicateCard: function(element){
        $(element).parent().clone().appendTo('#print');
      },      
      init: function(){
        proxy.addListeners()
      },
      submitCallback: function(){
        var string = $('#number').val();
        var ids = string.split(',');
        ids.forEach(function(index){
          index = $.trim(index);
          proxy.addCard(index);
        });
        $('#number').val('');
      },

    };
    //Kick it off
    proxy.init();
  };
})( jQuery );

(function( $ ) {
  $(document).ready(function(){
    $().mtgproxy();
  });
})( jQuery );