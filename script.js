  /* Projects */
  // Get project tabs and project cards
  const projectTabs = document.querySelectorAll('.project-tabs li');
  const projectCards = document.querySelectorAll('.project-card');

  // Add click event listener to each project tab
  projectTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      // Remove 'active' class from all project tabs
      projectTabs.forEach((tab) => {
        tab.classList.remove('active');
      });

      // Add 'active' class to the clicked tab
      tab.classList.add('active');

      // Get the data-project value of the clicked tab
      const project = tab.getAttribute('data-project');

      // Show the corresponding project card and hide others
      projectCards.forEach((card) => {
        if (card.id === project) {
          card.classList.add('active');
        } else {
          card.classList.remove('active');
        }
      });
    });
  });



  /* Clear button */
  var clearButton = document.getElementById("clearButton");
  var form = document.getElementById("contactForm");

  clearButton.addEventListener("click", function() {
    form.reset();
  });

  /* Clear button */

  $("#clearButton").on("click", function() {
      $("#contactForm")[0].reset();
    });


  /* Contact Me functionality */
  var contactButton = document.getElementById("contactButton");
  var checkboxes = document.querySelectorAll('.question input[type="checkbox"]');

  function updateContactButtonVisibility() {
    var isChecked = false;
    
    checkboxes.forEach(function(checkbox) {
      if (checkbox.checked) {
        isChecked = true;
        return;
      }
    });
    
    if (isChecked) {
      contactButton.classList.remove("hidden");
    } else {
      contactButton.classList.add("hidden");
    }
  }

  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener("change", updateContactButtonVisibility);
  });

  document.getElementById("contactButton").addEventListener("click", function() {
  var message = "I am interested in the following services:\n";
  var checkboxes = document.querySelectorAll('.question input[type="checkbox"]');
  
  checkboxes.forEach(function(checkbox) {
    if (checkbox.checked) {
      var label = checkbox.nextElementSibling;
      message += "- " + label.textContent + "\n";
    }
  });
  
  document.getElementById("message").value = message;
  });

/* Email Sending Function */
emailjs.init("ZMgnOS7JgZr0hOEjt");

// Function to send the email
function sendEmail(event) {
  event.preventDefault(); // Prevent form submission

  // Get the form data
  const form = document.getElementById("contact-form");
  const formData = new FormData(form);

  // Prepare the email template parameters
  const emailParams = {
    from_name: formData.get("name"),
    from_email: formData.get("email"),
    phone: formData.get("phone"),
    contact_method: formData.get("contact-method"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };

  // Send the email using EmailJS
  emailjs
    .send("service_fwqyyn5", "template_0aej4we", emailParams)
    .then(() => {
      // Email sent successfully
      alert("Email sent!");
      form.reset(); // Reset the form
    })
    .catch((error) => {
      // Error occurred while sending the email
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    });
}