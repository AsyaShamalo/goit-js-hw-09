let formData = {
    email: "",
    message: ""
}

const feedback = document.querySelector('.feedback-form');

const key = 'feedback-form-state';

const data = JSON.parse(localStorage.getItem(key));
if (data) {
  formData = { ...formData, ...data };
  feedback.elements.email.value = formData.email;
  feedback.elements.message.value = formData.message;
}

feedback.addEventListener('input', (event) => {
    const { name, value } = event.target;
    if (name in formData) {
      formData[name] = value;
      localStorage.setItem(key, JSON.stringify(formData));
    }
});
  
feedback.addEventListener('submit', (event) => {
    event.preventDefault();
    if (event.target.email.value === '' || event.target.message.value === '') {
        alert("Будь ласка, заповніть всі поля.");
        return;
    }
    console.log(formData);
    localStorage.removeItem(key);
    feedback.reset();
})