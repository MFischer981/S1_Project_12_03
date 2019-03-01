/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 3

 
   
   Filename: ah_report.js
   
   Functions:
   
   calcSum(donorAmt)
      A callback function that adds the current donation amount in the array to the donationTotal variable
   
   findMajorDonors(donorAmt)
      A callback function that returns the value true only if the current donation amount in the array
      is greater than or equal to 1000
      
   donorSortDescending(a, b)
      A callback function used to sort the donation amounts from the array in descending order
      
   writeDonorRow(value)
      A callback function that writes the HTML code for each table row that provides the contact
      information for the donor
      
*/


function calcSum(donorAmt) {
      donationTotal += donorAmt[9];
}

function findMajorDonors(donorAmt) {
      return donorAmt[9] >= 1000;
}

function donorSortDescending(a, b) {
      return b[9] - a[9];
}

function writeDonorRow(value) {
      donorTable += "<tr>";
      donorTable += "<td>$" + value[9].toLocaleString() + "</td>";
      donorTable += "<td>" + value[0] + "</td>";
      donorTable += "<td>" + value[10] + "</td>";
      donorTable += "<td>" + value[2] + ", " + value[1] + "</td>";
      donorTable += "<td>" + value[3] + "<br/>" + value[4] + ", " + value[5] + " " + value[6] + "</td>";
      donorTable += "<td>" + value[7] + "</td>";
      donorTable += "<td>" + value[8] + "</td>";
      donorTable += "</tr>";
}

// Total donations set to 0.
var donationTotal = 0;

// For each donor call the CalcSum funciton.
donors.forEach(calcSum)

// Set the variable of summary to string of text with variables.
var summaryTable = "<table><tr><th>Donors</th><td>" + donors.length + "</td></tr><tr><th>Total Donations</th><td>$" + donationTotal.toLocaleString() + "</td></tr></table>";

// Get the element with the id of donationSummary set the innerHTML to the variable of summaryTable.
document.getElementById('donationSummary').innerHTML = summaryTable;

// Filter the donors using the findMajorDonors function.
var majorDonors = donors.filter(findMajorDonors);

// Sort major donors in descending order.
majorDonors.sort(donorSortDescending);

// Set donor table value to string of HTML.
var donorTable = "<table> <caption>Major Donors</caption> <tr><th>Donation</th><th>Donor ID</th> <th>Date</th><th>Name</th><th>Address</th> <th>Phone</th><th>E-mail</th></tr>";

// Write donor row for each item in the majorDonor array.
majorDonors.forEach(writeDonorRow);
// Add closing tag string to donorTable.
donorTable += "<table/>"

// Get element by ID of donorTable and set HTML to donorTable.
document.getElementById('donorTable').innerHTML = donorTable;