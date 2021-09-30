//Rachel Madison

$(document).ready(function(){

  
  function changeDropDownText(month) {
    $("#dropDownButton").text(month);
    //post data from server to the list with last month's orders
    $.post('/orders', {month: month}, function(data) {
      //I couldn't get the correct data to show up here :(
      const orders = JSON.parse(data);
      console.log(orders[0].quantity);

      //editing each bullet point
      $("ul li:eq(0)").text(orders[0].quantity + " " + orders[0].topping);
      $("ul li:eq(1)").text(orders[1].quantity + " " + orders[1].topping);
      $("ul li:eq(2)").text(orders[2].quantity + " " + orders[2].topping);
    });

  }


  // Submits an order
  $("#orderbutton").click(function(){
    //Checks for "vegan" in any lower/upper case combination
    if($("#notes").val().toLowerCase().includes("vegan")) {
        alert("Warning: Our Cheesecake contains dairy");
    } 
    else {
      var numCheesecake = $('#num option:selected').text();
      var typeCheesecake = $('input[name="topping"]:checked').val();
      var notes = $("#notes").val();
      //Hides input forms
      $("#hideForms").remove();
      //Displays order details
      $("#orderPlacedText").prepend("Thank you! Your order has been placed. " + numCheesecake + " " + typeCheesecake+ " cheesecake(s) " + "Notes: " + notes);
    }
  });

  //changes the dropdown text when an element is clicked
  $('#Jan').click(function(){ changeDropDownText("JAN"); });
  $('#Feb').click(function(){ changeDropDownText("FEB"); });
  $('#Mar').click(function(){ changeDropDownText("MAR"); });
  $('#Apr').click(function(){ changeDropDownText("APR"); });
  $('#May').click(function(){ changeDropDownText("MAY"); });
  $('#Jun').click(function(){ changeDropDownText("JUN"); });
  $('#Jul').click(function(){ changeDropDownText("JUL"); });
  $('#Aug').click(function(){ changeDropDownText("AUG"); });
  $('#Sep').click(function(){ changeDropDownText("SEP"); });
  $('#Oct').click(function(){ changeDropDownText("OCT"); });
  $('#Nov').click(function(){ changeDropDownText("NOV"); });
  $('#Dec').click(function(){ changeDropDownText("DEC"); });

});