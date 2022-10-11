/* This function retrieves user entered values from input boxes, calculates earned simple interest, and updates the webpage with these values when the user clicks the 'Compute Interest' button */
function compute()
{
    if(isPositiveNumber() == false){return false;}
    var principal = document.getElementById("principal").value; //Retrieve principal amount entered by the user
    var rate = document.getElementById("rate").value; //Retrieve the interest rate entered by the user
    var years = document.getElementById("years").value; //Retrieve the number of years entered by the user
    var interest = principal * years * rate /100; //Calculate the interest earned on the principal at the given interest rate over the given number of years
    var year = new Date().getFullYear()+parseInt(years); //Obtain the current year as an integer
    document.getElementById("interest").innerText=interest; //Update the calculated interest earned to be displayed on the webpage
    document.getElementById("result").innerHTML = "If you deposit <mark>" + principal + "</mark>,\<br\>at an interest rate of <mark>" + rate + "</mark>%.\<br\>You will receive an amount of <mark>" + interest + "</mark>,\<br\>in the year <mark>" + year + "</mark>\<br\>"; //Displays a formatted text thread with entered and calculated values when the user clicks 'Compute Interest'
}
/* This function updates the interest rate displayed on the webpage each time the user changes it */
function updateRate() 
{
    var rateval = document.getElementById("rate").value; //Retrieve the interest rate selected by the user
    document.getElementById("rate_val").innerText=rateval+"%"; //Assign the retrieved rate value to rate_val to be displayed next to the slider object
}
/* This function checks the input in the 'principal' box to ensure it's positive */
function isPositiveNumber()
{
    var num = document.getElementById("principal").value; // Retrieve value entered by user in 'principal' input box
    if(num < 1){ //Verify that value entered by user is positive
        alert("Enter a positive number") //Prompt the user for a positive number if a negative number is entered
        document.getElementById("principal").value = ""; //Clear the value stored in 'principal'
        document.getElementById("principal").focus(); //Set the focus to the 'principal' input box
        return false;
    }
}       