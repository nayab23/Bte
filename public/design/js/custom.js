//tab selection with a dropdown list for small devices
$('#tab_selector').on('change', function(e) {
  $('.nav-pills a').eq($(this).val()).tab('show');
});

//$(document).ready(function() {
 // $('select').select2({
  //  width: '100%',
   // minimumResultsForSearch: -1

  //});
//});

$('.js-editor-switch-button').on('click', function() {
  $('html, body').animate({
        scrollTop: $(this).offset().top
    }, 0.1);
   $(this).closest('.editor-switch').toggleClass('editor-switch--is-editing');
   
	 console.log($(this).closest('.editor-switch')); 
})


$('.btn-toggle').click(function() {
  $('html, body').animate({
        scrollTop: $(this).offset().top
    }, 0.1);
    $(this).find('.btn').toggleClass('active');

    if ($(this).find('.btn-primary').length>0) {
    	$(this).find('.btn').toggleClass('btn-primary');
    }
    if ($(this).find('.btn-danger').length>0) {
    	$(this).find('.btn').toggleClass('btn-danger');
    }
    if ($(this).find('.btn-success').length>0) {
    	$(this).find('.btn').toggleClass('btn-success');
    }
    if ($(this).find('.btn-info').length>0) {
    	$(this).find('.btn').toggleClass('btn-info');
    }

    $(this).find('.btn').toggleClass('btn-default');

});

$('form').submit(function(){
  var radioValue = $("input[name='options']:checked").val();
  if(radioValue){
     alert("You selected - " + radioValue);
   };
    return false;
});
