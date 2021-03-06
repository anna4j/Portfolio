// Change the current window shown by toggling the active class.
$('.main-menu a').on('click', function (e) {

    var activeClass = $(this).attr('href').substring(1);

    setTimeout(function () {
        $('.content.active').removeClass('active');

        $('.' + activeClass).addClass('active');

        $('html, body').animate({
            scrollTop: $($('.' + activeClass)).offset().top
        }, 500);

    }, 300);
    // Once a user clicks the portfolio link, animate the portfolio.
    if (activeClass === 'portfolio') {

        setTimeout(function () {

            $('.filter-controls li')[0].click();

        }, 300);
    }

});

// Change the current active window based on the hash value in the url.
var type = window.location.hash.substr(1);

if (type) {
    $('.content.active').removeClass('active');

    $('.' + type).addClass('active');

}

// Magnific Popup init
$('.popup-link').magnificPopup({
    type: 'image'
});

// Adds active class to the current portfolio item selected.
$('.filter-controls li').on('click', function () {

    if (!$(this).hasClass('active')) {

        $('.filter-controls li.active').removeClass('active');

        $(this).addClass('active')

    }

});

// Filterizr init for portfolio page.
var options = {
    /* check next step for available options */
};

// Adjust the CSS selector to match the container where you set up your image gallery
var filterizr = new Filterizr('.filter-container', options);

// Submit form with id function.
function submit_by_id() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    if (validation()) // Calling validation function
    {
        document.getElementById("form_id").submit(); //form submission
        alert(" Name : " + name + " n Email : " + email + " n Form Id : " + document.getElementById("form_id").getAttribute("id") + "nn Form Submitted Successfully......");
    }
}

function validation() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;
    if (name === '' || email === '') {
        alert("Please fill all fields...!!!!!!");
        return false;
    } else if (!(email).match(emailReg)) {
        alert("Invalid Email...!!!!!!");
        return false;
    } else {
        return true;
    }
}