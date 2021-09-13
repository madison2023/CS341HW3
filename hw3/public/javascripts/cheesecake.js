$(document).ready(function(){
    function changeDropDownText(month) {
        $("#dropDownButton").text(month)
    }

    // Submits an order
      $("#orderbutton").click(function(){
        //Checks for "vegan" in any lower/upper case combination
        if($("#notes").val().toLowerCase().includes("vegan")) {
            alert("Warning: Our Cheesecake contains dairy");
        } else {
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