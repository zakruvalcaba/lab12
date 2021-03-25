const $ = (id) => {
    return document.getElementById(id);
};

const processEntries = () => {
    // DEFINE GENERIC VARIABLES
    let header = '';
    let html = '';
    let required = '<span>Required field</span>';
    let message = 'Review your entries and complete all required fields';
    // COLLECT VALUES FROM FORM ELEMENTS
    let email = $('email_address').value;
    let phone = $('phone').value;
    let country = $('country').value;
    let contact = 'Text';
    if ($('email').checked) {
        contact = 'Email';
    }
    if ($('none').checked) {
        contact = 'None';
    }
    let terms = $('terms').checked;
    // CHECK FOR EMPTY VALUES
    if (email === '') {
        email = required;
        header = message;
    }
    if (phone === '') {
        phone = required;
        header = message;
    }
    if (country === '') {
        country = required;
        header = message;
    }
    if (terms === false) {
        terms = required;
        header = message;
    }
    $('registration_header').innerHTML = header;
    // BUILD OUT THE ERROR MESSAGE IF ANYTHING IS WRONG ABOVE
    if (header === message) {
        html = 
            `
            <tr><td>Email:</td><td>${email}</td></tr>
            <tr><td>Phone:</td><td>${phone}</td></tr>
            <tr><td>Country:</td><td>${country}</td></tr>
            <tr><td>Contact:</td><td>${contact}</td></tr>
            <tr><td>Terms:</td><td>${terms}</td></tr>
            `;
        $('registration_info').innerHTML = html;
    } else {
        $('registration_form').submit();
    }
}

const resetForm = () => {
    $('registration_form').reset();
    $('registration_header').innerHTML = '';
    $('registration_info').innerHTML = '';
    $('email_address').focus();
}

window.addEventListener('load', () => {
    $('register').addEventListener('click', processEntries);
    $('reset_form').addEventListener('click', resetForm);
    $('email_address').focus();
});