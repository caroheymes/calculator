
//Freely adapted from https://www.codecademy.com/courses/web-intermediate-en-jfhjJ/0/1
//integrates clickable images, better design, bigger integgers, multiple operations and uikit css


//HOW IT WORKS :

// 1/ the calculator receives inputs from the buttons with .click() listeners.

// 2/When it gets a click, it will add that digit to the end of the number var,
// var will be a string while it is receiving input.

// 3/when the user clicks an operator, the operator var will be set to the operator clicked,
// The first inputted number will be saved into a new var newnumber, while setting number to "" (an empty string).

// When "=" is clicked, it takes the number, the newnumber, and the operator, and performs the operation.


$(function() {
    var number = "";                        //declare number as empty strings
    var newnumber = "";                     //declare newnumber as empty strings
    var operator = "";                      //declare operator as empty strings
    var totaldiv = $("#total");             //totaldiv variable to change the text of the $("#total")
    totaldiv.text("0");                     //set the .text() of totaldiv to "0"

    $('.numbers a img').click(function(){
    number += $(this).attr('alt');          //takes the alt attribute of the number img and assigns it to var number
    totaldiv.text(number);                  //Sets the .text() of totaldiv to number.
    });


    //Take the .text() of the button, and set the operator variable to that.

    $(".operators a img").click(function(){       //click() to handle all of the #operators
        operator = $(this).attr('alt');           //takes the value of the alt attribute
        newnumber = number;                       //set the value of newnumber to number
        number = "";                              //set number to ""
        totaldiv.text(operator);                  //displays the operator alt as text
    });
    $("#clear,#clearall").click(function(){       //reinitialise number #total
        number = "";
        totaldiv.text("0");
    });

    $("#equals").click(function(){
        if (operator === "+"){
			number = (parseInt(number) + parseInt(newnumber)).toString(); //Number.parseInt() converts to integer;
        } else if (operator === "-"){
            number = (parseInt(newnumber) - parseInt(number)).toString();
        } else if (operator === "/"){
            number = (parseInt(newnumber) / parseInt(number)).toString();
        } else if (operator === "x"){
            number = (parseInt(newnumber) * parseInt(number)).toString();
        }
        totaldiv.text(number);
        number += $totaldiv.text(number) //set total.div.text to number to allow next operations
        newnumber = "";
    });
});
