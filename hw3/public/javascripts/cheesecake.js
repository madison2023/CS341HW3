//Rachel Madison

$(document).ready(function(){

  changeDropDownText("Jan");

  function changeDropDownText(month) {
    $("#dropDownButton").text(month);
    //post data from server to the list with last month's orders
    $.post('/orders', {month: month.toUpperCase()}, function(data) {
      
      const orders = JSON.parse(data);
      
      //if quantitiy of any of the types is null, set it to zero instead
      for (var i = 0; i < orders.length; i++) {
        if (orders[i].quantity == null) {
          orders[i].quantity = 0;
        }
      }

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
      //retrieving the input given by the user
      var numCheesecake = $('#num option:selected').text();
      var typeCheesecake = $('input[name="topping"]:checked').val();
      var notes = $("#notes").val();

      //Hides input forms
      $("#hideForms").remove();

      //Displays order details
      $("#orderPlacedText").prepend("Thank you! Your order has been placed. " + numCheesecake + " " + typeCheesecake+ " cheesecake(s) " + "Notes: " + notes);

      //posts new order info to database
      $.post('/neworder', {quantity: numCheesecake, topping: typeCheesecake, notes: notes});
    }
  });

  //changes the dropdown text when an element is clicked
  $('#Jan').click(function(){ changeDropDownText("Jan"); });
  $('#Feb').click(function(){ changeDropDownText("Feb"); });
  $('#Mar').click(function(){ changeDropDownText("Mar"); });
  $('#Apr').click(function(){ changeDropDownText("Apr"); });
  $('#May').click(function(){ changeDropDownText("May"); });
  $('#Jun').click(function(){ changeDropDownText("Jun"); });
  $('#Jul').click(function(){ changeDropDownText("Jul"); });
  $('#Aug').click(function(){ changeDropDownText("Aug"); });
  $('#Sep').click(function(){ changeDropDownText("Sep"); });
  $('#Oct').click(function(){ changeDropDownText("Oct"); });
  $('#Nov').click(function(){ changeDropDownText("Nov"); });
  $('#Dec').click(function(){ changeDropDownText("Dec"); });

});