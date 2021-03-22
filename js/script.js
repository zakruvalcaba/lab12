const $ = (id) => {
    return document.getElementById(id);
};

const processEntries = () => {
    let header = '';
    let html = '';
    let required = '<span>Required field</span>';
    let msg = 'Please review your entries and complete all required fields';
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

    if (email === '') {
        email = required;
        header = msg;
    }
	if (phone === '') {
        phone = required;
        header = msg;
    }
	if (country === '') {
        country = required;
        header = msg;
    }
    if (terms === false) {
        terms = required;
        header = msg;
    }
    
    $('registration_header').innerHTML = header;
    if (header === msg) {
        html = html + '<tr><td>Email:</td><td>' + email + '</td></tr>';
        html = html + '<tr><td>Phone:</td><td>' + phone + '</td></tr>';
        html = html + '<tr><td>Country:</td><td>' + country + '</td></tr>';
        html = html + '<tr><td>Contact:</td><td>' + contact + '</td></tr>';
        html = html + '<tr><td>Terms:</td><td>' + terms + '</td></tr>';
        $('registration_info').innerHTML = html;
    } else {
        $('registration_info').innerHTML = '';
        $('registration_form').submit();
    }
};

const resetForm = () => {
    $('registration_form').reset();
    $('registration_header').innerHTML = '';
    $('registration_info').innerHTML = '';
    $('email_address').focus();
};

window.addEventListener('load', () => {
    $('register').addEventListener('click', processEntries);
    $('reset_form').addEventListener('click', resetForm);
    $('email_address').focus();
});