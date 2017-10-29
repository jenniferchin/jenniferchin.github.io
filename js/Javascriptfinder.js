var mentors = new Array ();
var mentees = new Array ();
var names=[];
var current=[];
var matches = new Array();
var compare=[];

var mentorcounter=0;
var menteecounter=0;

var count1=0;
var count2=0;



var nameInput = document.getElementById("name");
var ageInput = document.getElementById("age");//
var addInput = document.getElementById("location");
var mentorInput = document.getElementById("mentor");
var fieldInput = document.getElementById("field");
var linkedInInput = document.getElementById("linkedIn");
var emailInput = document.getElementById("email");
var interestInput = document.getElementById("interest"); 
var messageBox = document.getElementById("display");

var service = new google.maps.DistanceMatrixService;

current.push(nameInput.value, ageInput.value, addInput.value, mentorInput.value, fieldInput.value, linkedInInput.value, emailInput.value, interestInput.value);


function insert() {
	if (mentorInput.value==("mentor")){
		mentors[mentorcounter]= new Array (nameInput.value, ageInput.value, addInput.value, mentorInput.value, fieldInput.value, linkedInInput.value, emailInput.value, interestInput.value);
		mentorcounter=mentorcounter+1;
		for (j=0;j<mentees.length;j++){
			if (count2<=3 && (mentees[j][4]==current[4] || mentees[j][7]==current[7]){
				compare=mentees[j][2];
				if(service.getDistanceMatrix[current[2],mentees[j][2]]{
					matches[count2]= mentees[j];
					count2=count2+1;
				}
			}
		}
	}
	else {
		mentees[menteecounter] = new Array (nameInput.value, ageInput.value, addInput.value, mentorInput.value, fieldInput.value, linkedInInput.value, emailInput.value, interestInput.value);
			menteecounter=menteecounter+1;
			for (i=0;i<mentors.length;i++){
			if (count1<=3 && (mentors[j][4]==current[4] || mentors[j][7]==current[7]){
				compare=mentors[j][2];
				if(service.getDistanceMatrix[current[2],mentors[i][2]]{
					matches[count1]= mentees[j];
					count1=count1+1;
				}
			}
		}

	}
}



	names.push(nameInput.value);
	clearAndShow();

 
}

function clearAndShow (){
	nameInput.value="";
	messageBox.innerHTML="";
	messageBox.innerHTML+="Names: "+names.join(", ");
	/*messageBox.innerHTML+="Mentors: "+mentInputs.join(",");*/
	
	
}
<script async defer
src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDfagwXweNt8Rd2sXlANtgbrQxgCEHQ5R4&callback=initMap"

