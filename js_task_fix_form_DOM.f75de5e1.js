'use strict';
const input = document.querySelectorAll('input');
[
    ...input
].forEach((element)=>{
    const label = document.createElement('label');
    label.className = 'field-label';
    label.setAttribute('for', element.id);
    const text = element.name;
    element.placeholder = text[0].toUpperCase() + text.slice(1);
    label.textContent = element.placeholder;
    element.parentElement.insertBefore(label, element);
});

//# sourceMappingURL=js_task_fix_form_DOM.f75de5e1.js.map
