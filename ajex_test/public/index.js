$(document).ready(function () {
  $('#ajex_form button[type=submit]').click(function() {
    event.preventDefault();
    $.ajax({
      method: "POST",
      data: {
        name: $('#ajex_form input[name=name]').val(),
        student_id: $('#ajex_form input[name=student_id]').val()
      },
      url: 'ajax.php',
      success: function(data) {
        $('#ajax_output').html(data);
      }
    });
    $('#ajax_output').html('loading...');
  });
});
/*
$('#ajax_form button[type=submit]').click(e => {
  e.preventDefault()
  // no need if button type is not 'submit',
  //   but make it work without ajax is a good practice

  $.get('ajax.php', {
    name: $('#ajex_form input[name=name]').val(),
    student_id: $('#ajex_form input[name=student_id]').val()
  }, (data) => {
    $('#ajax_output').html(data)
  })
  setTimeout(() => $('#ajax_output').html('loading'), 3000)
  // try to modify the timeout
})
*/