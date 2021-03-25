//Here's a function that uses an insanely long and
//comprehensive regex which returns a true or false value depending
//on whether or not the user is browsing with a mobile.

window.mobilecheck = function() {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

function customFileUpload() {

    var wrapper = $(".file_upload"),
        inp = wrapper.find("input"),
        btn = wrapper.find(".fileupload__button"),
        lbl = wrapper.find(".file_upload__label");
        multipleUpload = $("#multiple-upload");

    btn.focus(function() {
        inp.focus()
    });

    // Crutches for the :focus style:
    inp.focus(function() {
        wrapper.addClass("focus");
    }).blur(function() {
        wrapper.removeClass("focus");
    });

    // Yep, it works!
    btn.add(lbl).click(function() {
        inp.click();
    });


    // Crutches for the :focus style:
    btn.focus(function() {
        wrapper.addClass("focus");
    }).blur(function() {
        wrapper.removeClass("focus");
    });


    var file_api = (window.File && window.FileReader && window.FileList && window.Blob) ? true : false;

    inp.on('change', function() {
        var file_name;

        if (inp[0].files.length) {
            multipleUpload.html('');
        }

        for (var k=0; k < inp[0].files.length+1; k++) {
            if (file_api && inp[0].files[k]) {
                file_name = inp[0].files[k].name;
                file_size = inp[0].files[k].size;
            } else {
                file_name = inp.val().replace("C:\\fakepath\\", '');
                file_size = 0;
            }

            if (!file_name.length || !file_size) {
                return;
            }


        // if (lbl.is(":visible")) {
        //   lbl.removeClass('visually-hidden').text(file_name);
        //   console.log(inp[0].files[0])
        //   //btn.find('span').text("Attach");
        //   } else {
        //       btn.find('span').text(file_name);
        //   }

            var iconName =  /(jpeg$|jpg$|png$|png$)/.test(file_name.toLowerCase()) ? 'icon-picture' : 'icon-file';

            window.file_name = file_name;

            multipleUpload.append('<div class="file_uploaded"><span class="file_uploaded__icon"><i class="' +
            iconName + '"></i></span><span class="file_uploaded__name">' +
            file_name + '</span><span class="file_uploaded__size">' +
            Math.ceil(file_size / 1024) + ' kB</span><button type="button" class="file_uploaded__remove-btn button--no-style"></button></div>')
        }


      //else {
      //   if (file_api && inp[0].files[0]) {
      //     file_name = inp[0].files[0].name;
      //   } else {
      //       file_name = inp.val().replace("C:\\fakepath\\", '');
      //   }

      //   if (!file_name.length)
      //   return;

      //   if (lbl.is(":visible")) {
      //       lbl.removeClass('visually-hidden').text(file_name);
      //       console.log(inp[0].files[0])
      //       //btn.find('span').text("Attach");
      //   } else {
      //       btn.find('span').text(file_name);
      //   }
      // }

  }).change();

//   $(window).resize(function() {
//     debounce(function() {
//         $(".file_upload input").triggerHandler("change");
//     }, 1250);
//   });
}


function togglePassword() {
    $(".js-toggle-password").click(function() {
        var images = $(this).find('img');
        var input = $(this).siblings('input');

        images.toggleClass('hide');

        if (input && input.length && input.attr("type") == "password") {
          input.attr("type", "text");
        } else {
          input.attr("type", "password");
        }
      });
}


var capsLockEnabled = null;

function getChar(e) {

    if (e.which == null) {
        return String.fromCharCode(e.keyCode); // IE
    }

    if (e.which != 0 && e.charCode != 0) {
        return String.fromCharCode(e.which); // rest
    }

  return null;
}

$(document).on('keydown', function(e) {
  e = e || event;

  if (e.keyCode == 20 && capsLockEnabled !== null) {
    capsLockEnabled = !capsLockEnabled;
  }
})

$(document).on('keypress', function(e) {
  e = e || event;

  var chr = getChar(e);
  if (!chr) return; // special key

  if (chr.toLowerCase() == chr.toUpperCase()) {
    // caseless symbol, like whitespace
    // can't use it to detect Caps Lock
    return;
  }

  capsLockEnabled = (chr.toLowerCase() == chr && e.shiftKey) || (chr.toUpperCase() == chr && !e.shiftKey);
})

// A function is responsible for toggling the visibility of the skills options on the skills dropdonw
// based on what category is currently selected on the category dropdown.
function toggleSkillsCategories() {
  $('#category-select').on('change', function(){
    var $self = $(this);
    var val = $self.val();
    var $skills = $('#skills-select .item');

    $('#skills-select').dropdown('clear');
    $skills.addClass('hide');
    $('#skills-select .item[data-category="' + val + '"]').removeClass('hide');
    //$('#skills-select .item[data-category="custom"]').removeClass('hide');
  })

    var $input = $("#skills-select .search");

    $input.on('keypress', function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);

        if(keycode == '32'){
            var inputVal = $input.val().trim();
            if (inputVal && inputVal !== '') {
                $('#skills-select > .menu').append('<div class="item" data-category="custom" data-value="'+ inputVal + '">' + inputVal + '</div>');
                $('.item[data-value="' + inputVal + '"]').click();
            }
        }
    });

    // auto select-sub-categories
    $(document).on('click', '.menu--with-sub-items .item:not(.selected):not(.sub-item)', function(){
        $(this).nextUntil('.item:not(.sub-item)').click();
    })
}

function notificaions() {
    $('.js-remove-notification').click(function(e) {
        e.preventDefault();
        $(this).parent().remove();
    });
}

//Function to trigger "Add deposit" functionality on the ticket Payment tab
function addDepositButton() {
    $(document).on('click','.js-add-deposit', function(){
        if (!$('#deposit-input').is(':visible')) {
            $('#deposit-input').parent().removeClass('d-none');
            $('#deposit-input').focus();
            $('#deposit-input').closest('.payment-info-block').find('.estimate__value:not(.estimate__value---input)').addClass('d-none');
        } else {
            payDeposit($self);
        }
    })

    $(document).on('click','.js-pay-deposit', function(){
        $(this).closest('.ticket-body').children(':not(.js-payment-closure)').addClass('d-none');
        $(this).closest('.ticket-body').find('.js-payment-closure').removeClass('d-none');
    })

    //simulation of adding the deposit
    $(document).on('keyup','#deposit-input', function(event){
        var $self = $(this);
        if (event.which == 13 || event.keyCode == 13) {
            payDeposit($self);
        }
    })

    //deposit input is closed on ESC
    $(document).keyup(function(event) {
        if (event.which == 27 || event.keyCode == 27) {
            $('#deposit-input').parent().addClass('d-none');
            $('#deposit-input').blur();
            $('#deposit-input').closest('.payment-info-block').find('.estimate__value:not(.estimate__value---input)').removeClass('d-none');
            return false;
       }
   });

}

//function to simulat Pay Deposit behavior
function payDeposit($self) {
    var inputVal = $self.val().replace(/[^0-9]/g, '') ? $self.val().replace(/[^0-9]/g, '') : 0;
    $self.parent().addClass('d-none');
    $self.closest('.payment-info-block').find('.estimate__value:not(.estimate__value---input)').html("$" + inputVal).removeClass('d-none');
    $self.closest('.ticket-body').find('.payment-row--info').removeClass('d-none');
    $('.js-add-deposit').addClass('d-none');
    $('.js-pay-deposit').removeClass('d-none');
    return false;
}

//to init burged menu functionality
function initBurger() {
    $( "#burger" ).click(function check() {
        $( this ).toggleClass( "burgeractive");
        $('body').toggleClass('fixed');
        $('#mobile-menu').toggleClass('active');
    });
}

// function emulatePostButton() {
//     $('.js-button-post').on('click', function(e) {
//         e.preventDefault();

//         $('.ui.modal').modal('show');
//     })
// }

function addPaymentMethod() {
    $('.js-button-add-payment-method').on('click', function(e) {
        e.preventDefault();

        $('#payment-method-add-modal').modal('show');
    })
}

function fixCTATile() {
    var $stickyTile = $('.js-sticky-tile');
    var $footer = $('.footer');
    var footerHeight = $footer.height();

    $(window).on('load scroll', function(){
        if (window.mobilecheck()) {
            if ($(document).height() - ($(window).scrollTop() + $(window).height()) >= footerHeight ) {
                $stickyTile.css({'position':'fixed','margin-bottom' : '0'});
            } else {
                $stickyTile.removeAttr('style');
            }
        }
    })
}

function editButton() {
    var $inp = $('.js-edit-target').find('input');

    $(document).on('click','.js-edit-button', function(e){
        e.preventDefault();
        var $this = $(this);
        var $target = $this.siblings('.js-edit-target');

        if ($target.length) {
            var $amount = $target.find('.js-edit-target-amount');
            var $inputWrapper = $target.find('.input__wrapper');
            var $input = $inputWrapper.find('input');
            var text = $input.val();

            $input.val($amount.text().trim());
            $inputWrapper.toggleClass('hide');
            $target.find('span').toggleClass('hide')
            $this.toggleClass('not-accessible');

            if($this.hasClass('not-accessible')) {
                $input.focus();
            }

            if (text) {$amount.text(parseInt(text));}
        }
    })

    $inp.on('focusout', function(e){
        e.preventDefault();
        var $target = $(this).closest('.js-edit-target');

        if ($target.length) {
            var $amount = $target.find('.js-edit-target-amount');
            var $input = $(this);
            var text = $input.val();
            var $editButton = $target.siblings('.js-edit-button');

            $input.val($amount.text().trim());
            $target.find('.input__wrapper').toggleClass('hide');
            $target.find('span').toggleClass('hide');
            $editButton.toggleClass('not-accessible');

            if (text) {$amount.text(parseInt(text));}
        }
    })
}


function switchPaymentButton() {
    $(document).on('click','.js-contract__switch', function(e){
        e.preventDefault();

        var $this = $(this);
        var $target = $this.parents('form');

        if ($target.length) {
            var $internalTargets = $target.find('.js-fixed, .js-hourly');
            $internalTargets.toggleClass('hide');
        }
    })
}

function modalsShow() {
    $(document).on('click', '.js-show-modal', function(){
        var $self = $(this);
        var modalId = $self.data('modal-id');
        if (modalId && $('#' + modalId).length) {
            $('#' + modalId).modal('show');
        }
    })
}

function deleteNotifications() {
    $(document).on('click','.js-notifications__link', function(){
        var $item = $(this).closest('.notifications__list-item');
        $item.addClass('to-be-removed');
        setTimeout(function() {
            $item.remove();
            if (!$('.js-notifications__link').length) {
                $('section.notifications').addClass('empty');
            }
        }, 600);

    });
}

//Function to get URL parametes by name
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

//funtion to check active tab on load
function TabOnLoad() {
    var activeTab = getParameterByName('data-tab');
    if (activeTab)  {
        $('.ticket-header__list-item[data-tab="' + activeTab + '"]').click();
    } else {
        $('.ticket-header__list-item--active').click();
    }
}

//funtion to check active ticket from the list
function ticketSelectOnLoad() {
    var activeTab = getParameterByName('data-ticket-id');
    if (activeTab)  {
        $('.ticket-header__list-item[data-tab="' + activeTab + '"]').click();
    } else {
        $('.ticket-header__list-item--active').click();
    }
}

function dropdownActiveLinkEnable() {
    $(document).on('click', '.dropdown-active-link', function(){
        if ($(this).data('tab'))  {
            $('.ticket-header__list-item[data-tab="' + $(this).data('tab') + '"]').click();
        } else {
            $('.ticket-header__list-item--active').click();
        }
    })
}

function initEvents() {
    togglePassword();


    $('.input-check').on('keyup focus', function(e){
        if (capsLockEnabled) {
            $(this).siblings('.js-caps-check').removeClass('hide');
        } else {
            $(this).siblings('.js-caps-check').addClass('hide');
        }
    })

    $('.input-check').on('blur', function(e){
        $(this).siblings('.js-caps-check').addClass('hide');
    })

    $('.form-validate').validate({
        messages: {
            username: "Wrong User name / Email, please retry",
            password: "Wrong Password, Please retry",
            email: {
                required: "Enter your Email",
                email: "Please enter a valid email address.",
            }
        }
    });

    $('.accordion').accordion({
        transition : 'auto'
      });

    $('.dropdown:not(.multiple)').dropdown({
      transition : 'auto'
    });

    $('.dropdown.multiple:not(.max-3):not(.max-10)').dropdown({
      transition : 'auto',
      useLabels: true,
      maxSelections: 9
    });

    $('.dropdown.multiple.max-3').dropdown({
        transition : 'auto',
        useLabels: true,
        maxSelections: 3
    });

    $('.dropdown.multiple.max-10').dropdown({
        transition : 'auto',
        useLabels: true,
        maxSelections: 10
    });

    $('.js-section-toggle').on('click', function(e){
      e.preventDefault();

      var $self = $(this);
      $('.js-section-toggle').addClass('button--light');
      $self.removeClass('button--light');
      $('.form-section').addClass('hide');
      $('#' + $self.data('show')).removeClass('hide');
    })

    $(document).on('click', '.js-search-clear', function(e){
        e.preventDefault();
        var $form = $(this).closest('form');
        $form[0].reset();

        $form.find('.dropdown').each(function(index, element) {
            if ($(element).has('select')) {
                $(element).dropdown('clear');
            } else if (($(element).has('input'))) {
                $(element).find('input').each(function(i, el) {
                    el.val('');
                });
            }
        })
    })

    // $(document).on('change select', 'select', function(){
    //   setTimeout(function(){
    //       console.log($(this));
    //       if ($(this).hasClass('error')) {
    //         $(this).parent().addClass('error');
    //       }
    //   }, 300)
    // })

    if ($('#select-country').length) {
      addClassNameListener("select-country", function(){
        var $select = $(document).find('#select-country');

        if ($select.hasClass('error')) {
          $select.parent().addClass('error');
        } else {
          $select.parent().removeClass('error');
        }
      });
    }

    if ($('#select-city').length) {
      addClassNameListener("select-city", function(){
        var $select = $(document).find('#select-cite');

        if ($select.hasClass('error')) {
          $select.parent().addClass('error');
        } else {
          $select.parent().removeClass('error');
        }
      });
    }

    if ($('#question').length) {
      addClassNameListener("question", function(){
        var $select = $(document).find('#question');

        if ($select.hasClass('error')) {
          $select.parent().addClass('error');
        } else {
          $select.parent().removeClass('error');
        }
      });
    }

    $('.js-textarea input').on('keyup', function(e) {
      // check for spacebar press
      if (e.keyCode == 32) {
            // prevent default spacebar event (scrolling to bottom)
            e.preventDefault();

            $(this).val($(this).val().replace(/\s/g, ''));

            if ($(this).val() && $(this).val() !== ' ') {
              var strText = $(this).val().replace(/[, ]+/g, " ").trim();
              $(this).parent().prepend('<span class="label">' + strText + '<i class="delete icon js-delete"></i></span>');
              $(this).parent().siblings('textarea').val($(this).parent().siblings('textarea').val() + ', ' + strText);
              $(this).val('');
            }
      }
    });

    $(document).on('click','.js-delete', function(){
      $(this).closest('.label').remove();
    });

    deleteNotifications();

    function addClassNameListener(elemId, callback) {
      var elem = document.getElementById(elemId);
      var lastClassName = elem.className;
      window.setInterval( function() {
         var className = elem.className;
          if (className !== lastClassName) {
              callback();
              lastClassName = className;
          }
      },10);
    }

    $('.how-it-works__remove-button').on('click', function(){
      $('.how-it-works').remove();
    })

    $('.ticket-header__list-item').on('click', function(){
        if (!$(this).attr('disabled')) {
            var dataItem = $(this).data('tab');
            var indicator,
                indicatorLength,
                indicatorPos;

            $('.ticket-header__list-item').removeClass('ticket-header__list-item--active');
            $(this).addClass('ticket-header__list-item--active');

            indicator = $(this).parent().find('.active-indicator');
            indicatorLength = $('.ticket-header__list-item--active').outerWidth() || $('.ticket-header__list-item--active').width() || $('.ticket-header__list-item--active').innerWidth();
            indicatorPos = $('.ticket-header__list-item--active').position().left;

            indicator.css({
                'width' : indicatorLength,
                'left' : indicatorPos,
            })

            $('.ticket-body, .payment-lineitem, .expert-lineitem:not(.expert-line-static)').addClass('hide');

            if ($(this).data('tab') == 'all') {
                $('.ticket-body[data-tab], .payment-lineitem[data-tab], .expert-lineitem[data-tab]').removeClass('hide');
            } else {
                $('.ticket-body[data-tab="' + dataItem + '"], .payment-lineitem[data-tab="' + dataItem + '"], .expert-lineitem[data-tab="' + dataItem + '"]').removeClass('hide');
            }
        }
    })

    //changing the mobile selection to trigger active tab
    $('#select-tickets-tabs select, #select-payments-tabs select').on('change', function(){
        var $self = $(this);
        $('.ticket-header__list-item[data-tab="' + $self.val() + '"]').click();
    })

    $(document).on('click', '.file_uploaded__remove-btn', function(){
        var $self = $(this);
        $self.parent().remove();
    })

    $(document).on('click', '.js-modal-close', function(){
        var $self = $(this);
        $self.closest('.modal').modal('hide');
    })

    $(document).on('click', '.js-modal-check-close', function(e){
        e.preventDefault();
        var $self = $(this);
        var $required = $self.closest('.modal').find('[required]');

        if ($required.length && $required.is(':not(:valid)').length) {
            // alert($required.is(':not(:valid)').length)
        } else {
            $self.closest('.modal').modal('hide');
        }
    });


    $(document).on('submit', '.js-form-check-close', function(e){
        e.preventDefault();
        var $self = $(this);

        if (!$self.is(':valid')) {
            alert('ssss');
        } else {
            $self.closest('.modal').modal('hide');
        }
    });

    //trigger switch between the different tickets in the list
    $(document).on('click','.js-tickets-list__item', function(){
        if ($(window).width() <= 991) {
            //showing the right part, hiding the left
            $('.moving-container').addClass('active');
        } else {
            //showing the right part and the left
            $('.moving-container').removeClass('active');
        }

        $('.js-tickets-list__item').removeClass('tickets-list__item--active');
        $(this).addClass('tickets-list__item--active')

        var ticketId = $(this).data('ticket-id');

        if (ticketId) {
            $('.tile--ticket').removeClass('tile--ticket-active');
            $('.tile--ticket[data-ticket-id="' + ticketId + '"]').addClass('tile--ticket-active');
        }

    })

    //trigger declining an expert from the line
    $(document).on('click','.js-hire-cta', function(){
        $('.ticket-header__list-item[data-tab="contract"]').removeAttr('disabled').click();
    })

    //trigger opening the dialog
    $(document).on('click','.js-open-dialog', function(){
        $(this).parents('.tile').find('.ticket-header__list-item[data-tab="dialog"] > a').click();
    })

    //trigger declining an expert from the contract
    $(document).on('click','.js-discart-contract', function(){
        $('.ticket-header__list-item[data-tab="contract"]').attr('disabled', 'disabled');
        $('.ticket-header__list-item[data-tab="ticket"]').click();
    })

    $(document).on('change select', '#contract-hours-select', function(){
        var $target = $(this).closest('.contract-info-block__input').siblings('.contract-info-block__value');
        $target.find('span').text( +$(this).val() * + $('.js-contract-info-block__value--rate').find('span').text())
    })

    //back button
    $(document).on('click', '.mobile-section-title__back-button', function(e){
        e.preventDefault();
        if ($('body').hasClass('tickets')) {
            $('.moving-container').removeClass('active');
        } else if ($('body').hasClass('search')) {
            $('.filters-wrapper').removeClass('active');
            $('.mobile-section-title__back-button').addClass('d-none');
        } else {
            window.history.back();
        }
    })

    $(document).on('click', '.filters-cta', function(e){
        e.preventDefault();
        $('.filters-wrapper').toggleClass('active');
        $('.mobile-section-title__back-button').toggleClass('d-none');
    })

    $(document).on('click', '.js-history-back', function(e){
        e.preventDefault();
        window.history.back();
    })

    dropdownActiveLinkEnable();

    //functions called for post-ticket page only
    if ($('body').hasClass('post-ticket')) {
        toggleSkillsCategories();
        addPaymentMethod();
    }

    //functions called for applying-for-job page only
    if ($('body').hasClass('applying-for-job')) {
        addPaymentMethod();
    }

    //functions called for posted-ticket page only
    if ($('body').hasClass('posted-tickets')) {
        // toggleSkillsCategories();
        addPaymentMethod();
    }

    //functions called for feed page only
    if ($('body').hasClass('feed')) {
        fixCTATile();
    }

    modalsShow();
    customFileUpload();
    initBurger();
    notificaions();

    editButton();
    switchPaymentButton();

    TabOnLoad();
    addDepositButton();
}

$(document).ready(function() {
    initEvents();
});