// BUSINESS LOGIC //
function pingPong(userEntry) {
  var result = "";
  for (var index = 1; index <= userEntry; index += 1) {
    if (index % 3 ===0 && index % 5 === 0) {
      $("#result").append("<li>" + "ping-pong" + "</li>");
    }
    else if ( index  % 3 === 0) {
      $("#result").append("<li>" + "ping" + "</li>");
    }
    else if ( index % 5 === 0) {
      $("#result").append( "<li>" + "pong" + "</li>")
    }
    else {
      $("#result").append("<li>" + index + "</li>");
    }
  }
}

// UI LOGIC //
$(document).ready(function() {
  console.log("fire away little buddy.")
  $("#game").submit(function(event) {
    event.preventDefault();
    var entry = parseInt($("input").val());
    pingPong(entry);
    $("#result").show();
  });
});
