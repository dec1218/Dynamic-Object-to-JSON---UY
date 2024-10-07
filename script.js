// Initialize EmailJS with your user ID
(function(){
    emailjs.init("ImM20PyOwGxTbR4iB");
})();


// Function to send email using EmailJS
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Send the email using the form data
    console.log(this)
    emailjs.sendForm('service_b4ik7km', 'template_el51bp6', this)
        .then(function() {
            alert('Message Sent Successfully!');
        }, function(error) {
            alert('Failed to send the message: ' + JSON.stringify(error));
        });
});