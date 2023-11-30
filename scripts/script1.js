function submitForm() {
            var firstName = document.getElementById('Fname').value;
            var lastName = document.getElementById('Lname').value;
            var email = document.getElementById('email').value;
              var errorMessage = document.getElementById("errorMessage");


                  // Check if both name and email are filled
                  if (firstName.trim() === "" || lastName.trim() === "" || email.trim() === "") {
                      alert("Fill in all fields!");
                  } else {
                      var message = `Form submitted!\n\nFirst Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}`;
                      alert(message);
                  }
              }
        const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
