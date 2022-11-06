const formEl = document.querySelector("form.login-form");

function onSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (!emailValue || !passwordValue) {
    return alert("Всі поля мають бути заповнені!");
  }

  console.log({ email: emailValue, password: passwordValue });
  event.currentTarget.reset();
}

formEl.addEventListener("submit", onSubmit);
