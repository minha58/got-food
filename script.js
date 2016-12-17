$("#donate").click(function() {
    window.location.href = 'donate.html';
});

$("#donatebutton").click(function() {
    $("#donatebutton").append("href", "http://www.foodbanknyc.org/how-you-can-help/donate-money");
});

$("#searchbutton").click(function() {
    $("p").html($("#searchinput").val());
});

$("#video2")
