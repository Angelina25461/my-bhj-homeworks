document.addEventListener("DOMContentLoaded", function () {
    const signinForm = document.getElementById("signin__form");
    const welcomeBlock = document.getElementById("welcome");
    const userIdElement = document.getElementById("user_id");

    const userId = localStorage.getItem("user_id");
    if (userId) {
        welcomeBlock.classList.add("welcome_active");
        userIdElement.textContent = userId;
    }

    signinForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = new FormData(signinForm);

        fetch(signinForm.action, {
            method: "POST",
            body: formData
        })
        .then(function (response) {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Ошибка HTTP: " + response.status);
            }
        })
        .then(function (data) {
            if (data.success) {
                const userId = data.user_id;
                localStorage.setItem("user_id", userId);
                welcomeBlock.classList.add("welcome_active");
                userIdElement.textContent = userId;
            } else {
                alert("Неверный логин/пароль");
            }
        })
        .catch(function (error) {
            console.error(error);
            alert("Произошла ошибка при отправке запроса");
        });
    });
});