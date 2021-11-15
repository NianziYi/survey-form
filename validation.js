//form validation
(function () {
    'use strict'
  
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over form and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {

          //check if fields has correct input
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }

          //check if recaptcha is checked 
          /*if (grecaptcha.getResponse() === '') {                            
            event.preventDefault();
            alert('Please prove you are not a Robot!');
          }*/

          form.classList.add('was-validated')
        }, false);
      })
  })()
