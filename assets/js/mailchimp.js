  $('#mailchimp-subscription-form1').ajaxChimp({
      callback: mailChimpCallBack,
      url: 'http://eepurl.com/h7DM_n'
  });

  function mailChimpCallBack(resp) {
      // Hide any previous response text
      var $mailchimpform = $('#mailchimp-subscription-form1'),
          $response = '';
      $mailchimpform.children(".alert").remove();
      console.log(resp);
      if (resp.result === 'success') {
          $response = '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + resp.msg + '</div>';
      } else if (resp.result === 'error') {
          $response = '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + resp.msg + '</div>';
      }
      $mailchimpform.prepend($response);
  }