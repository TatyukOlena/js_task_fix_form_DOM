'use strict';

const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach((input) => {
    const inputName = input.getAttribute('name');

    const id = input.getAttribute('id');

    const container = input.parentElement;

    const label = document.createElement('label');

    label.classList.add('field-label');
    label.setAttribute('for', id);
    label.textContent = inputName.charAt(0).toUpperCase() + inputName.slice(1);

    input.setAttribute('placeholder', label.textContent);

    container.insertBefore(label, input);
  });
});
