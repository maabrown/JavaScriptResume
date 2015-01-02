
//var awesomeThoughts = "I am Mark Brown II and I am AWESOME";
//console.log(awesomeThoughts);

//var funThoughts = awesomeThoughts.replace("AWESOME","FUN")



//$("#main").append(funThoughts);

//console.log(awesomeThoughts);
//console.log(funThoughts);

//var name = "Mark Brown II";

//var role = "Front-End Web Developer";


//var skills = ["awesomeness", "programming", "teaching"]

//$('#main').append(skills[0]);

/*var bio = {
	"wholename" : "Mark Brown II",
	"role" : "Front-End Web Developer",
	"contact" : {
		"email": "markbrown09@gmail.com",
		"mobile": "804-313-1158",
		"github" : "maabrown",
	},
	"pictureURL" : "images/MarkBrownII",
	"welcomemessage" : "Thank You for coming to my page",
	"skills" : "skills"
};

//var name = "Mark Brown II";



$('#header').append(bio.contact);
$('#header').append(bio.pictureURL);
$('#header').append(bio.welcomemessage);
$('#header').append(bio.skills);
*/

//var name - "Mark Brown II"
//var formattedName = HTMLheaderName.replace("%data%", name);
//$("#header").prepend(formattedName);


var work = {     
	"jobs": [     
	{
		"employer": "The Aspen Institute",
		"title": "Program Coordinator",
		"location": "Washington, D.C.",
		"dates": "February 2014 to Present",
		"description": "Maintain web presence of the College Excellence Program, Develops new content and layour for our web site, Conducts research on community college reform and student success, Performs administrative duties as assigned"
	},
	{
		"employer": "Chinatown Coffee",
		"title": "Barista",
		"location": "Washington, D.C.",
		"dates": "May 2013 to Present",
		"description": "Opens coffeeshop undersupervised, Performs minimal accounting duties including counting the safe and making change from the bank, Demonstrates mastery of latte art"
	},
	{
		"employer": "ACME Bakery and Cafe",
		"title": "Project Manager",
		"location": "Miami, FL",
		"dates": "Aug 2012 to April 2013",
		"description": "Defined priorities and managed multiple projects (such as Special Order documentation, cash and bank systems, pastry & bread display and handling) to minimize product loss and confusion amongst the service team"
	}
	]
};

for (job in work.jobs) {
	$('#workExperience').append(HTMLworkStart);
	var formattedemployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedtitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	var formattedjobs = formattedemployer + formattedtitle + formattedworkDates + formattedLocation + formattedDescription;
	$('.work-entry:last').append(formattedjobs);
}

var projects = {
	"projects": [
	{
		"title": "Web Project",
		"dates": "September 2014",
		"description": "Website Layout 1",
		"images": [
			"image1",
			"image2",
			"image3"
		]	
	},
	{
		"title": "JavaScript Project",
		"dates": "January 2015",
		"description": "Project for Udacity Nanodegree",
		"images": [
			"image1",
			"image2",
			"image3"
		]
	}
	]
}

var bio = {
	"name": "Mark Brown II",
	"role": "Front-End Web Developer",
	"welcomeMessage": "Welcome to my Online Resume!",
	"contacts": {
		"mobile": "804-313-1158",
		"email": "markbrown09@gmail.com",
		"github": "maabrown",
		"location": "Washington, D.C."
	},
	"skills": [
		"being fun", 
		"having fun",
		"supporting fun"
		]
	} //bio object


if (bio.skills.length != 0) {
    $('#header').append(HTMLskillsStart);
    var bioskillsformat = HTMLskills.replace("%data%", bio.skills[0]);
    $('#skills').append(bioskillsformat);
    var bioskillsformat = HTMLskills.replace("%data%", bio.skills[1]);
    $('#skills').append(bioskillsformat);
    var bioskillsformat = HTMLskills.replace("%data%", bio.skills[2]);
    $('#skills').append(bioskillsformat);
};

//var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
//$('#header').append(formattedRole);

var education = {
	"schools": [
		{
			"name": "General Assembly",
			"location": "Washington, D.C.",
			"degree": "Credential",
			"major": ["Front-End Web Development"],
			"dates": "Sept. to Dec. 2014",
			"url": "https://generalassemb.ly/washington-dc"
		},
		{
			"name": "Brown University",
			"location": "Providence, RI",
			"degree": "BA",
			"major": ["Ethnic Studies", "Theatre Arts"],
			"dates": "Sept. 2005  to Dec. 2009",
			"url": "www.brown.edu"
		}, // Brown University object
		{
			"name": "Rappahannock Community College",
			"location": "Warsaw, VA",
			"degree": "Associate of Science",
			"major": ["Science", "General Studies"],
			"dates": "Sept. 2003 to May 2005",
			"url": "http://www.rappahannock.edu"
		} // RCC object
	], // schools array
	"onlineCourses": [
		{
			"title": "Front-End Web Development",
			"school": "Udacity",
			"dates": "Dec 2014 to Present",
			"url": "https://www.udacity.com/nanodegrees"
		} //udacity object
	] //online courses array
}; // education object

	

