/*
Builds with helper.js the html for an online resume webpage
 */
var bio = {
    "name": "Janna Brettingen",
    "role": "Machine Learning Engineer",
    "contacts": {
        "mobile": "",
        "email": "janna@brettingen.com",
        "github": '<a href="https://github.com/jannab" target="_blank" class="white-text" style="display: inline">jannab</a>',
        "twitter": "",
        "blog": "",
        "location": "Berlin, Germany"
    },
    "welcomeMessage": "Hi!<br>I am a student of Udacity's Machine Learning Engineer Nanodegree planning to graduate before the end of August. Currently based in Berlin, I am willing to relocate to SF Bay Area. No Visa needed.",
    "skills": [
        "Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "python / NumPy / Panda / sklearn"
    ],
    "biopic": "images/janna.jpg"
};

var education = {
    "schools": [{
        "name": "FernUniversität Hagen (University)",
        "location": "Berlin, Germany",
        "degree": "",
        "majors": ["Business Informatics (70 credits)"],
        "dates": "2013-2016",
        "url": "http://www.fernuni-hagen.de"
    }, {
        "name": "Technische Universität Berlin (University)",
        "location": "Berlin, Germany",
        "degree": "",
        "majors": ["Mathematics (84 credits)"],
        "dates": "2008 - 2013",
        "url": "http://www.tu-berlin.de"
    }, {
        "name": "Hildegard-Wegscheider-Oberschule (High School)",
        "location": "Berlin, Germany",
        "degree": "Abitur",
        "majors": ["Mathematics, Chemistry"],
        "dates": "2008",
        "url": "http://www.hwos.de/wordpress/"
    }, {
        "name": "Minato Sohgoh (High School)",
        "location": "Yokohama, Japan",
        "degree": "Student Exchange Program",
        "majors": ["-"],
        "dates": "2004 - 2005",
        "url": "http://www.edu.city.yokohama.lg.jp/school/hs/m-sogo/index.cfm/1,0,65,html"
    }],
    "onlineCourses": []
};

var work = {
    "jobs": [{
        "employer": "GRAVIS Computervertriebsgesellschaft mbH",
        "title": "Assistant in Accounting Departement",
        "dates": "May 2013 - September 2013",
        "location": "Berlin, Germany",
        "description": ""
    }, {
        "employer": "GRAVIS Computervertriebsgesellschaft mbH",
        "title": "Assistant in Administration Departement",
        "dates": "October 2007 - March 2012",
        "location": "Berlin, Germany",
        "description": ""
    }]
};

var projects = {
    "projects": [{
        "title": '<a href="https://jannab.github.io/smartcab/" target="_blank">Train a Smartcab to Drive</a>',
        "dates": "July 2016",
        "description": "Trained a smartcab, a self-driving car, to follow the traffic rules using reinforcement learning techniques and python.",
        "images": [
            "images/smartcab_screenshot.png"
        ]
    }, {
        "title": '<a href="https://jannab.github.io/customer_segments/" target="_blank">Creating Customer Segments</a>',
        "dates": "July 2016",
        "description": "Created customer segments for a wholesale distributor in Lisbon, Portugal using unsupervised learning techniques and python.",
        "images": [
            "images/possible-379215_960_720.jpg"
        ]
    }, {
        "title": '<a href="https://jannab.github.io/student_intervention/" target="_blank">Build a Student Intervention System</a>',
        "dates": "July 2016",
        "description": "Helped a local school district to identify students who need intervention before they drop out of school using supervised learning techniques and python.",
        "images": [
            "images/customer_segments_image.png"
        ]
    }]
};

bio.display = function() {
    'use strict';
    var formattedName = getNewString(HTMLheaderName, bio.name);
    var formattedRole = getNewString(HTMLheaderRole, bio.role);
    $("#header").prepend([formattedName, formattedRole]);

    var formattedPicture = getNewString(HTMLbioPic, bio.biopic);
    var formattedWelcomeMsg = getNewString(HTMLwelcomeMsg, bio.welcomeMessage);
    $("#header").append(formattedPicture, formattedWelcomeMsg);

    bio.displayContacts();
    bio.displaySkills();
};


bio.displaySkills = function() {
    'use strict';
    if (bio.skills.length) {
        $("#header").append(HTMLskillsStart);
        for (var skill in bio.skills) {
            // create listitem for skill
            if (bio.skills.hasOwnProperty(skill)) {
                var formattedSkill = getNewString(HTMLskills, bio.skills[skill]);
                $("#header").append(formattedSkill);
            }

        }
    }
};

bio.displayContacts = function() {
    'use strict';
    if (bio.contacts.mobile.length) {
        bio.displayContact(HTMLmobile, bio.contacts.mobile);
    }
    if (bio.contacts.email.length) {
        bio.displayContact(HTMLemail, bio.contacts.email);
    }
    if (bio.contacts.twitter.length) {
        bio.displayContact(HTMLtwitter, bio.contacts.twitter);
    }
    if (bio.contacts.github.length) {
        bio.displayContact(HTMLgithub, bio.contacts.github);
    }
    if (bio.contacts.blog.length) {
        bio.displayContact(HTMLblog, bio.contacts.blog);
    }
    if (bio.contacts.location.length) {
        bio.displayContact(HTMLlocation, bio.contacts.location);
    }
};

bio.displayContact = function(oldString, newValue) {
    'use strict';
    var formattedContact = getNewString(oldString, newValue);
    $("#topContacts").append(formattedContact);
    $("#footerContacts").append(formattedContact);
};

function getNewString(oldString, newValue) {
    'use strict';
    return oldString.replace("%data%", newValue);
}

function appendString(oldString, newValue, section) {
    'use strict';
    if (newValue.length) {
        $(section).append(getNewString(oldString, newValue));
    }
}


work.display = function() {
    'use strict';
    for (var job in work.jobs) {
        if (work.jobs.hasOwnProperty(job)) {
            // create new div for work experience
            $("#workExperience").append(HTMLworkStart);
            // concat employer and title
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
    }
};

projects.display = function() {
    'use strict';
    for (var project in projects.projects) {
        if (projects.projects.hasOwnProperty(project)) {
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

            if (projects.projects[project].images.length) {
                for (var image in projects.projects[project].images) {
                    if (projects.projects[project].images.hasOwnProperty(image)) {
                        var formattedImage = getNewString(HTMLprojectImage, projects.projects[project].images[image]);
                        $(".project-entry:last").append(formattedImage);
                    }
                }
            }
        }
    }
};

education.display = function() {
    'use strict';
    education.displaySchools();
    if (education.onlineCourses.length) {
        education.displayOnlineCourses();
    }
};

education.displaySchools = function() {
    'use strict';
    for (var school in education.schools) {
        if (education.schools.hasOwnProperty(school)) {
            $("#education").append(HTMLschoolStart);

            var thisSection = ".education-entry:last";
            var completeHTMLschoolName = HTMLschoolName;
            if (education.schools[school].url.length) {
                completeHTMLschoolName = HTMLschoolName.replace("#", education.schools[school].url);
            }
            if (education.schools[school].degree.length) {
                completeHTMLschoolName = completeHTMLschoolName + getNewString(HTMLschoolDegree, education.schools[school].degree);
            }

            appendString(completeHTMLschoolName, education.schools[school].name, thisSection);
            appendString(HTMLschoolDates, education.schools[school].dates, thisSection);
            appendString(HTMLschoolLocation, education.schools[school].location, thisSection);
            appendString(HTMLschoolMajor, education.schools[school].majors, thisSection);
        }
    }
};

education.displayOnlineCourses = function() {
    'use strict';
    $("#education").append(HTMLonlineClasses);
    for (var course in education.onlineCourses) {
        if (education.onlineCourses.hasOwnProperty(course)) {
            $("#education").append(HTMLschoolStart);
            var thisSection = ".education-entry:last";
            var completeOnlineCourseName = getNewString(HTMLonlineTitle, education.onlineCourses[course].title);
            completeOnlineCourseName += getNewString(HTMLonlineSchool, education.onlineCourses[course].school);
            $(".education-entry:last").append(completeOnlineCourseName);
            appendString(HTMLonlineDates, education.onlineCourses[course].date, thisSection);
            var urlHTMLonlineURL = HTMLonlineURL.replace("#", education.onlineCourses[course].url);
            appendString(urlHTMLonlineURL, education.onlineCourses[course].url, thisSection);
        }
    }
};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);