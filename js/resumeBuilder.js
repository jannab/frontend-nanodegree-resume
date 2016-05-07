/*
Builds with helper.js the html for an online resume webpage
 */
var bio = {
    "name": "Janna Brettingen",
    "role": "Code Ninja to be",
    "contacts": {
        "mobile": "+49 171 213 35 70",
        "email": "janna@brettingen.com",
        "github": "jannab",
        "twitter": "@jannabrettingen",
        "blog": "myblog.com",
        "location": "Berlin, Germany"
    },
    "welcomeMessage": "Hi!<br>I'm looking for a job! Feel free to explore my projects.<br>" +
        "I would love to hear from you!",
    "skills": [
        "programming", "planning", "doing", "optimizing"
    ],
    "biopic": "images/janna.jpg"
};

var education = {
    "schools": [{
        "name": "FernUniversität Hagen (University)",
        "location": "Berlin, Germany",
        "degree": "",
        "majors": "Computer Science",
        "dates": "2015-2016",
        "url": ""
    }, {
        "name": "Technische Universität Berlin (University)",
        "location": "Berlin, Germany",
        "degree": "",
        "majors": "Mathematics",
        "dates": "2008 - 2013",
        "url": "http://www.tu-berlin.de"
    }, {
        "name": "Hildegard-Wegscheider-Oberschule (High School)",
        "location": "Berlin, Germany",
        "degree": "Abitur",
        "majors": "-",
        "dates": "2008",
        "url": ""
    }, {
        "name": "Minato Sohgoh (High School)",
        "location": "Yokohama, Japan",
        "degree": "Student Exchange Program",
        "majors": "-",
        "dates": "2004 - 2005",
        "url": ""
    }],
    "onlineCourses": [{
        "title": "JavaScript Crash Course",
        "school": "Udacity",
        "date": "2016",
        "url": "http://udacity.com/course/ud804"
    }]
};

var work = {
    "jobs": [{
        "employer": "GRAVIS Computervertriebsgesellschaft mbH",
        "title": "Assistant in Accounting Departement",
        "dates": "May 2013 - September 2013",
        "location": "Berlin, Germany",
        "description": "bla blub blub blub"
    }, {
        "employer": "GRAVIS Computervertriebsgesellschaft mbH",
        "title": "Assistant in Administration Departement",
        "dates": "October 2007 - March 2012",
        "location": "Berlin, Germany",
        "description": "bla blub blub blub"
    }]
};

var projects = {
    "projects": [{
        "title": "Online Resume with JavaScript",
        "dates": "2016",
        "description": "Write JavaScript to build this online resume",
        "images": [
            "images/resumee.png",
            "images/code.png"
        ]
    }]
};

/*
function locationizer(work_obj) {
    var locationArray = [];

    for (job in work_obj.jobs) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }

    return locationArray;
}*/

//console.log(locationizer(work));

bio.display = function() {
    var formattedName = getNewString(HTMLheaderName, bio.name);
    var formattedRole = getNewString(HTMLheaderRole, bio.role);
    $("#header").prepend([formattedName, formattedRole]);

    var formattedPicture = getNewString(HTMLbioPic, bio.biopic);
    var formattedWelcomeMsg = getNewString(HTMLwelcomeMsg, bio.welcomeMessage);
    $("#header").append(formattedPicture, formattedWelcomeMsg);

    bio.display.contacts();
    bio.display.skills();
};


bio.display.skills = function() {
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (skill in bio.skills) {
            // create listitem for skill
            var formattedSkill = getNewString(HTMLskills, bio.skills[skill]);
            $("#header").append(formattedSkill);
        }
    }
};

bio.display.contacts = function() {
    var formattedContact = "";
    if (bio.contacts.mobile.length > 0) {
        formattedContact = getNewString(HTMLmobile, bio.contacts.mobile);
        $("#topContacts").append(formattedContact);
        $("#footerContacts").append(formattedContact);
    }
    if (bio.contacts.email.length > 0) {
        formattedContact = getNewString(HTMLemail, bio.contacts.email);
        $("#topContacts").append(formattedContact);
        $("#footerContacts").append(formattedContact);
    }
    if (bio.contacts.twitter.length > 0) {
        formattedContact = getNewString(HTMLtwitter, bio.contacts.twitter);
        $("#topContacts").append(formattedContact);
        $("#footerContacts").append(formattedContact);
    }
    if (bio.contacts.github.length > 0) {
        formattedContact = getNewString(HTMLgithub, bio.contacts.github);
        $("#topContacts").append(formattedContact);
        $("#footerContacts").append(formattedContact);
    }
    if (bio.contacts.blog.length > 0) {
        formattedContact = getNewString(HTMLblog, bio.contacts.blog);
        $("#topContacts").append(formattedContact);
        $("#footerContacts").append(formattedContact);
    }
    if (bio.contacts.location.length > 0) {
        formattedContact = getNewString(HTMLlocation, bio.contacts.location);
        $("#topContacts").append(formattedContact);
        $("#footerContacts").append(formattedContact);
    }
};

function getNewString(oldString, newValue) {
    return oldString.replace("%data%", newValue);
}

function appendString(oldString, newValue, section) {
    if (newValue.length > 0) {
        $(section).append(getNewString(oldString, newValue));
    }
}


work.display = function() {
    for (job in work.jobs) {
        // create new div for work experience
        $("#workExperience").append(HTMLworkStart);
        // concat employer and title
        //var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        //var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployer = getNewString(HTMLworkEmployer, work.jobs[job].employer);
        var formattedTitle = getNewString(HTMLworkTitle, work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(
            formattedEmployerTitle);

        var formattedDates = getNewString(HTMLworkDates, work.jobs[job].dates);
        $(".work-entry:last").append(
            formattedDates);

        appendString(HTMLworkLocation, work.jobs[job].location, ".work-entry:last");

        var formattedDescription = getNewString(HTMLworkDescription, work.jobs[job].description);
        $(".work-entry:last").append(
            formattedDescription);
    }
};

projects.display = function() {
    for (project in projects.projects) {
        // create new div for projects
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = getNewString(HTMLprojectTitle, projects.projects[project].title);
        $(".project-entry:last").append(
            formattedTitle);

        var formattedDates = getNewString(HTMLprojectDates, projects.projects[project].dates);
        $(".project-entry:last").append(
            formattedDates);

        var formattedDescription = getNewString(HTMLprojectDescription, projects.projects[project].description);
        $(".project-entry:last").append(
            formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = getNewString(HTMLprojectImage, projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};

education.display = function() {
    education.display.schools();
    if (education.onlineCourses.length > 0) {
        education.display.onlineCourses();
    }
};

education.display.schools = function() {
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);

        var thisSection = ".education-entry:last";
        var completeHTMLschoolName = HTMLschoolName;
        if (education.schools[school].url.length > 0) {
            completeHTMLschoolName = HTMLschoolName.replace("#", education.schools[school].url);
        }
        if (education.schools[school].degree.length > 0) {
            completeHTMLschoolName = completeHTMLschoolName + getNewString(HTMLschoolDegree, education.schools[school].degree);
        }

        appendString(completeHTMLschoolName, education.schools[school].name, thisSection);
        appendString(HTMLschoolDates, education.schools[school].dates, thisSection);
        appendString(HTMLschoolLocation, education.schools[school].location, thisSection);
        appendString(HTMLschoolMajor, education.schools[school].majors, thisSection);
    }
};

education.display.onlineCourses = function() {
    $("#education").append(HTMLonlineClasses);
    for (course in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);
        var thisSection = ".education-entry:last";
        var completeOnlineCourseName = getNewString(HTMLonlineTitle, education.onlineCourses[course].title);
        completeOnlineCourseName += getNewString(HTMLonlineSchool, education.onlineCourses[course].school);
        $(".education-entry:last").append(completeOnlineCourseName);
        appendString(HTMLonlineDates, education.onlineCourses[course].date, thisSection);
        var urlHTMLonlineURL = HTMLonlineURL.replace("#", education.onlineCourses[course].url);
        appendString(urlHTMLonlineURL, education.onlineCourses[course].url, thisSection);
    }
};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);