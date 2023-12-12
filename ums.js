document.addEventListener('DOMContentLoaded', function () {
    var loginLinks = document.querySelectorAll('.scrolll');
    var loginContainer = document.querySelector('.login-container');

    loginLinks.forEach(function (loginLink) {
        loginLink.addEventListener('click', function () {
            var offsetTop = loginContainer.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var stickman = document.querySelector('.stickman');

    stickman.addEventListener('click', function () {
        // Toggle the 'invert-filter' class on the body
        document.body.classList.toggle('invert-filter');
        
        // Toggle the 'invert-filter' class on .Egypt and .logo elements
        document.querySelectorAll('.Egypt, .logo').forEach(function (element) {
            element.classList.toggle('invert-filter');
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    var whatNav = document.querySelector('.what');
    var firstSelection = document.querySelector('.first-selection');
    var secondSelection = document.querySelector('.second-selection');
    var thirdSelection = document.querySelector('.third-selection');
    var forthSelection = document.querySelector('.forth-selection');
    var fifthSelection = document.querySelector('.fifth-selection');


    whatNav.addEventListener('click', function (event) {
        var target = event.target;
        if (target.tagName === 'LI') {
            // Reset the display for both selections
            firstSelection.style.display = 'none';
            secondSelection.style.display = 'none';
            thirdSelection.style.display = 'none';
            forthSelection.style.display = 'none';
            fifthSelection.style.display = 'none';


            // Determine which selection to show based on the clicked menu item
            if (target.textContent.includes('Students Services')) {
                firstSelection.style.display = 'flex';
            } else if (target.textContent.includes('Alumni Services')) {
                secondSelection.style.display = 'flex';
            } else if (target.textContent.includes('Postgraduate Students')) {
                thirdSelection.style.display = 'flex';
            } else if (target.textContent.includes('Vaccine Service')) {
                forthSelection.style.display = 'flex';
            } else if (target.textContent.includes('Other Services')) {
                fifthSelection.style.display = 'flex';
            }
        }
    });
});