/* global $, swal */
/* eslint prefer-arrow-callback: 0, no-var: 0, func-names: 0, vars-on-top: 0 */
'use strict';

(function () {
  $('form').on('submit', function (e) {
    e.preventDefault();

    if ($('#file')[0].files.length < 1) {
      swal('請選擇檔案', '你沒選啊', 'error');
      return;
    }

    if ($('#file')[0].files[0].name.toLowerCase().slice(-4) !== '.pdf') {
      swal('副檔名錯誤', '只接受 .pdf 檔案', 'error');
      return;
    }

    var formElm = this;
    var fd = new FormData(this);

    $.ajax({
      url: '/',
      type: 'POST',
      data: fd,
      processData: false,
      contentType: false,
    })
    .then(function () {
      swal('文件已上傳', '請耐心等候', 'success');
      formElm.reset();
    })
    .catch(function () {
      swal('Oops!', 'something went wrong', 'error');
    });
  });
}).call(this);
