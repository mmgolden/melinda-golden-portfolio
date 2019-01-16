(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict

// Current year
var currentYear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentYear;

// Projects
const projects = [
  {
    title: 'React Gallery',
    image: '../img/gallery2.jpg',
    description: 'This image gallery app was created using React. Using React Router, routes are set up for three default topic pages and a search page. Images are displayed from the Flickr API using Axios to fetch data. This project was bootstrapped with Create React App. ',
    technology: [
        'React',
        'JavaScript',
        'CSS'
    ],
    links: [
        'https://github.com/mmgolden/react-gallery',
        'https://mmgolden-react-gallery.netlify.com'
    ]
  },
  {
    title: 'Express Portfolio',
    image: '../img/express2.jpg',
    description: 'This portfolio website showcases the projects that I have built. A JSON file stores all the data about the projects. Pug is used to create templates that utilize the JSON to generate markup that is displayed in the browser. Express is used to import the required dependencies, link JSON with the Pug templates, set up routes to handle requests, set up middleware to utilize static files, handle errors, and set up a server to serve the project.',
    technology: [
        'Express',
        'JSON',
        'Pug'
    ],
    links: [
        'https://github.com/mmgolden/express-portfolio',
        'https://mmgolden-express-portfolio.herokuapp.com/'
    ]
  },
  {
    title: 'Employee Directory',
    image: '../img/directory2.jpg',
    description: 'This app is built for a fictional company called Awesome Startup, a distributed company with remote employees working all over the world. They need a way for employees to share contact information with each other. The employee directory uses the Random User Generator API (randomuser.me) to grab information for 12 random "employees". This app uses the browser\'s Fetch API to request a JSON object from the API and parse the data so that 12 employees are listed with their thumbnail image, full name, email, and location.',
    technology: [
        'Fetch API',
        'JavaScript',
        'JSON'
    ],
    links: [
        'https://github.com/mmgolden/employee-directory',
        'https://mmgolden.github.io/employee-directory/'
    ]
  },
  {
    title: 'Game Show App',
    image: '../img/game2.jpg',
    description: 'This is a browser-based, word guessing game called "Phrase Hunter." This project focuses on OOP (Object Oriented Programming). In the game, the player tries to guess a random, hidden phrase by clicking on letters on an onscreen keyboard. ',
    technology: [
        'JavaScript',
        'CSS',
        'HTML'
    ],
    links: [
        'https://github.com/mmgolden/game-show-app',
        'https://mmgolden.github.io/game-show-app/'
    ]
  },
  {
    title: 'Interactive Form',
    image: '../img/form2.jpg',
    description: 'This project enhances an interactive registration form for a fictional conference called "FullStack Conf" using the jQuery library. The form is made to be more user friendly by adding customized and conditional behavior and interactivity. It also validates user input and provides helpful error messages when the user enters invalid information into the form fields.',
    technology: [
        'jQuery',
        'CSS',
        'HTML'
    ],
    links: [
        'https://github.com/mmgolden/interactive-form',
        'https://mmgolden.github.io/interactive-form/'
    ]
  },
  {
    title: 'Pagination and Filtering',
    image: '../img/pagination2.jpg',
    description: 'This project enhances the usability of a web page with pagination. This project uses "progressive enhancement" so that JavaScript is used to enhance the web page, without making the web page dependent upon JavaScript. The pagination is dynamic, meaning it will work for any list containing any number of items.',
    technology: [
        'JavaScript',
        'CSS',
        'HTML'
    ],
    links: [
        'https://github.com/mmgolden/list-pagination-and-filtering',
        'https://mmgolden.github.io/list-pagination-and-filtering/'
    ]
  },
  {
    title: 'That Dirty Dog',
    image: '../img/dog2.jpg',
    description: 'Established in 2005, That Dirty Dog is a dog groomer in Roswell, GA. They offer self-service bathing, full service bathing, and professional grooming. I was asked to update and re-design their website. Their old website was outdated and not mobile friendly.',
    technology: [
        'jQuery',
        'SCSS',
        'Bootstrap'
    ],
    links: [
        'https://github.com/mmgolden/that-dirty-dog',
        'http://thatdirtydog.com/'
    ]
  },
  {
    title: 'Lightbox',
    image: '../img/lightbox2.jpg',
    description: 'This is a responsive image gallery with a simple lightbox. Users are able to click on a photo to enlarge it with a background overlay, toggle between photos and close the lightbox and return to the gallery.',
    technology: [
        'jQuery',
        'CSS',
        'Bootstrap'
    ],
    links: [
        'https://github.com/mmgolden/jquery-lightbox',
        'https://mmgolden.github.io/jquery-lightbox/'
    ]
  },
  {
    title: 'Time Tracker',
    image: '../img/tracker2.jpg',
    description: 'This time tracker app allows users to track the total time spent on projects. First, users enter a project name. Then total time spent on a project is shown with a timer. The timers can be stopped and projects can be deleted.',
    technology: [
        'JavaScript',
        'SCSS',
        'HTML'
    ],
    links: [
        'https://github.com/mmgolden/time-tracker',
        'https://mmgolden.github.io/time-tracker/'
    ]
  }
];

// Get body
const body = document.querySelector('body');
// Get the portfolio
const portfolio = document.getElementById('portfolio');

// Create the modal container
const container = document.createElement('div');
container.className = 'project-modal-container';

// Create modal
function createModal(project) {
  // Modal markup
  const markup = `
    <div class="project-modal">
        <div class="button-container">
            <h2>${project.title}</h2>
            <button class="prev-btn" aria-label="Previous"><i class="fas fa-chevron-left"></i></button>
            <button class="next-btn" aria-label="Next"><i class="fas fa-chevron-right"></i></button>
            <button class="close-btn" aria-label="Close"><i class="fas fa-times"></i></button>
        </div>
        <div class="details-container">
            <img src="${project.image}" alt="project preview">
            <div class="project-details">
                <h3>Description</h3>
                <p>${project.description}</p>
                <h3>Technology</h3>
                <ul class="project-technology">
                    ${project.technology[0] ? `<li>${project.technology[0]}</li>` : ''}
                    ${project.technology[1] ? `<li>${project.technology[1]}</li>` : ''}
                    ${project.technology[2] ? `<li>${project.technology[2]}</li>` : ''}
                    ${project.technology[3] ? `<li>${project.technology[3]}</li>` : ''}
                </ul>
                <h3>Links</h3>
                <ul class="project-links">
                    <li><a href="${project.links[0]}" target="_blank"><i class="fab fa-github"></i> Github</a></li>
                    ${project.links[1] !== '#' ? `<li><a href="${project.links[1]}" target="_blank"><i class="fas fa-globe-americas"></i> Live Demo</a></li>` : ''}
                </ul>
            </div>
        </div>
    </div>
  `;

  container.innerHTML = markup;
  
  // Append the modal to the body
  body.appendChild(container);
}

// Get the project that was clicked
function getProject(event) {
    const target = event.target;

    // Get the project name from the event target
    let projectName;
    if (target.tagName === 'H3') {
        projectName = target.textContent;
    } else if (target.tagName === 'IMG') {
        projectName = target.nextElementSibling.firstElementChild.textContent;
    } else if (target.className === 'project-overlay') {
        projectName = target.firstElementChild.textContent;
    } else if (target.tagName === 'P') {
        projectName = target.previousElementSibling.textContent;
    }

    // Filter the project that was clicked from the projects array
    const selectedProject = projects.filter(project => project.title === projectName);

    createModal(selectedProject[0]);
}

// Close modal
function closeModal() {
    body.removeChild(container);
}

// Toggle modal
function toggleModal(event) {
    const target = event.target;

    // Get the project name that was clicked
    let projectName;
    if (target.className === 'prev-btn') {
        projectName = target.previousElementSibling.textContent;
    } else if (target.className === 'fas fa-chevron-left') {
        projectName = target.parentElement.previousElementSibling.textContent;
    } else if (target.className === 'next-btn') {
        projectName = target.previousElementSibling.previousElementSibling.textContent;
    } else if (target.className === 'fas fa-chevron-right') {
        projectName = target.parentElement.previousElementSibling.previousElementSibling.textContent;
    }

    // Filter the project that was clicked from the projects array
    const currentProjectIndex = projects.findIndex(project => project.title === projectName);

    // Get the adjacent project
    let adjProject;
    if (target.className === 'prev-btn' || target.className === 'fas fa-chevron-left') {
        adjProject = projects[currentProjectIndex - 1];
    } else if (target.className === 'next-btn' || target.className === 'fas fa-chevron-right') {
        adjProject = projects[currentProjectIndex + 1];
    }

    // Close the modal
    closeModal();

    // Toggle modals
    if (currentProjectIndex === 0 && !adjProject) {
        createModal(projects[projects.length - 1]);
    } else if (currentProjectIndex === projects.length - 1  && !adjProject) {
        createModal(projects[0]);
    } else if (adjProject) {
        createModal(adjProject);
    }
}

// When a project is clicked
portfolio.addEventListener('click', function(event) {
    if (event.target.tagName === 'IMG' || event.target.className === 'project-overlay' || event.target.tagName === 'H3' || event.target.tagName === 'P') {
        getProject(event);
    }
});

// Modal events
document.addEventListener('click', function(event) {
    if (event.target.className === 'close-btn' || event.target.className === 'fas fa-times' || event.target.className === 'project-modal-container') {
        closeModal();
    } else if (event.target.className === 'prev-btn' || event.target.className === 'fas fa-chevron-left' || event.target.className === 'next-btn' || event.target.className === 'fas fa-chevron-right') {
        toggleModal(event);
    }
});

// Keep spam out
function validateMyForm() {
    if(!document.getElementById("honeypot").value) { 
        return true;
    } 
    else {
        return false;
    }
}