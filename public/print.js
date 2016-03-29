/* global $, swal */
/* eslint prefer-arrow-callback: 0, no-var: 0, func-names: 0, vars-on-top: 0 */
'use strict';

(function () {
  $('form').on('submit', function (e) {
    e.preventDefault();

    var fd = new FormData(this);

    $.ajax({
      url: '/',
      type: 'POST',
      data: fd,
      processData: false,
      contentType: false,
      dataType: 'json',
    })
    .then(function () {
      swal('文件已上傳', '請耐心等候', 'success');
    }, function () {
      swal('Oops!', 'something went wrong', 'error');
    });
  });
}).call(this);
