document.addEventListener('DOMContentLoaded', () => {
    const signInBtn = document.getElementById('sign-in-btn');
    const signUpBtn = document.getElementById('sign-up-btn');
    const signInForm = document.querySelector('.sign-in-form');
    const signUpForm = document.querySelector('.sign-up-form');

    signInBtn.addEventListener('click', () => {
        signInForm.classList.add('active-form');
        signUpForm.classList.remove('active-form');
    });

    signUpBtn.addEventListener('click', () => {
        signUpForm.classList.add('active-form');
        signInForm.classList.remove('active-form');
    });
});
