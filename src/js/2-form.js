const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

function saveFormData() {
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

function fillUpForm() {
  const savedData = localStorage.getItem(localStorageKey);

  if (savedData) {
    const savedFormData = JSON.parse(savedData);
    formData.email.elements.value = savedFormData.email;
    formData.message.elements.value = savedFormData.message;
  }
}

function clearFormData() {
  localStorage.removeItem(localStorageKey);
}

fillUpForm();

form.addEventListener('input', () => {
  const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value.trim(),
  };
  saveFormData(formData);
});

form.addEventListener('submit', event => {
  event.preventDefault();
  const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value.trim(),
  };

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
  } else {
    console.log('Form:', formData);
    localStorage.removeItem(localStorageKey);
    form.reset();
  }
});
