nameofstudentarray= [];

function submit() 
{
    displaystudentarray= [];
    for (var j=1; j<=4; j++) {
        var nameofstudent= document.getElementById("name_of_the_student_"+j).value;
        console.log (nameofstudent);
        nameofstudentarray.push (nameofstudent);
    } console.log (nameofstudentarray);

    var lengthofstudentarray= nameofstudentarray.length;
    console.log (lengthofstudentarray);
    
    for (var s=0; s<lengthofstudentarray; s++) {
                    
       displaystudentarray.push("<h4>Name - " +nameofstudentarray[s]+ "</h4>");
       console.log (displaystudentarray);
    }
   document.getElementById ("display_name_with_commas").innerHTML= displaystudentarray;
   var removecommas= displaystudentarray.join (" ");
   console.log (removecommas);
   document.getElementById ("display_name_without_commas").innerHTML= removecommas;

   document.getElementById ("submit_button").style.display= "none";
   document.getElementById ("sort_button").style.display= "inline-block";

    }

    function sorting() {
        nameofstudentarray.sort();
        console.log (nameofstudentarray);

        var displaystudentarraysorting= [];

        var lengthofstudentarray= nameofstudentarray.length;
    console.log (lengthofstudentarray);
    
    for (var s=0; s<lengthofstudentarray; s++) {
                    
       displaystudentarraysorting.push("<h4>Name - " +nameofstudentarray[s]+ "</h4>");
       console.log (displaystudentarraysorting);
    }

    var removecommas= displaystudentarraysorting.join (" ");
   console.log (removecommas);
   document.getElementById ("display_name_without_commas").innerHTML= removecommas;

    }