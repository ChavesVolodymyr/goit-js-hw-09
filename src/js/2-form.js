const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.form-feedback');
const localStorageKey = 'form-feedback-state';

function saveFormData() {
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

function fillUpForm() {
  const savedData = localStorage.getItem(localStorageKey);

  if (savedData) {
    const savedFormData = JSON.parse(savedData);
    formData.email = savedFormData.email;
    formData.message = savedFormData.message;
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  }
}

function clearFormData() {
  localStorage.removeItem(localStorageKey);
}

fillUpForm();

form.addEventListener('input', () => {
  formData.email = form.elements.email.value;
  formData.message = form.elements.message.value.trim();
  saveFormData();
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
  } else {
    console.log('Form', formData);
    clearFormData();
    formData.email = '';
    formData.message = '';
    form.reset();
  }
});
