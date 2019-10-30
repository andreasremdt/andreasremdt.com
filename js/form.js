(function() {
  "use strict";

  var form = document.forms[0];
  var button = form.getElementsByTagName("button")[0];

  function handleSubmit(evt) {
    evt.preventDefault();

    var hasErrors = false;
    var fields = evt.target.elements;
    var honeypotField = form.getElementsByClassName("honeypot")[0];

    if (honeypotField.checked) {
      return;
    }

    for (let i = 0; i < fields.length; i++) {
      var error = hasError(fields[i]);

      if (error) {
        showError(fields[i], error);

        if (!hasErrors) {
          hasErrors = fields[i];
        }
      }
    }

    if (hasErrors) {
      hasErrors.focus();
    } else {
      button.disabled = true;
      button.textContent = "Sending message...";

      handleFormSend();
    }
  }

  function handleBlur(evt) {
    var error = hasError(evt.target);

    if (error) {
      showError(evt.target, error);
    } else {
      removeError(evt.target);
    }
  }

  function hasError(field) {
    var validity = field.validity;

    if (field.type === 'submit' || field.type === 'button' || validity.valid) {
      return;
    }

    if (validity.valueMissing) {
      return 'Please fill out this field.';
    }

    if (validity.tooShort) {
      return 'Your text is too short, please lengthen it.';
    }

    if (validity.patternMismatch || validity.typeMismatch) {
      return 'Please enter a valid email address.';
    }
  }

  function showError(field, error) {
    var id = field.id || field.name;
    var message = field.form.querySelector(`[data-form-error]#error-for-${id}`);
    
    if (!message) {
      message = document.createElement("p");
  
      message.className = "form-error";
      message.id = `error-for-${id}`;
      message.setAttribute('data-form-error', true);
      
      field.classList.add("has-error");
      field.parentNode.insertBefore(message, field.nextSibling);
    }

    field.setAttribute("aria-describedby", `error-for-${id}`);
    message.textContent = error;
  }

  function removeError(field) {
    field.classList.remove("has-error");
    field.removeAttribute("aria-describedby");

    var id = field.id || field.name;
    var message = field.form.querySelector(`[data-form-error]#error-for-${id}`);

    if (!message) {
      return;
    }

    field.parentNode.removeChild(message);
  }

    function handleFormSuccess() {
      if (this.status === 200) {
        button.textContent = "Thanks! Message sent";
      } else {
        handleFormError(this.status);
      }
    }

  function handleFormError(err) {
    button.disabled = false;
    button.textContent = "Couldn't send your message...";
  }

  function handleFormSend() {
    var xhr = new XMLHttpRequest();
    var formData = new FormData(form);

    formData.append("service_id", "gmail");
    formData.append("template_id", "t6f0aA");
    formData.append("user_id", "user_mZ5eVYgFOb6lQnj8gcvRJ");

    xhr.addEventListener("load", handleFormSuccess);
    xhr.addEventListener("error", handleFormError);
    xhr.open("POST", "https://api.emailjs.com/api/v1.0/email/send-form");
    xhr.send(formData);
  }

  form.setAttribute("novalidate", true);
  form.addEventListener("submit", handleSubmit);
  form.addEventListener("blur", handleBlur, true);
})();