$(document).ready(function() {
  var originalState = true;

  $("#editProfileButton").click(function () {
    originalState = !originalState;
    if (originalState) {
      $("#userInfo").show()
      $("#userUpdate").hide()
    } else {
      $("#userInfo").hide()
      $("#userUpdate").show()
    }
  })

  $('#updateUser').ajaxForm(function() {
    location.reload();
  });
});