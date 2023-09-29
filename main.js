document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Aquí puedes agregar tus usuarios y contraseñas
    var users = [
        { username: "sergio", password: "1234" },
        { username: "flopi", password: "sobolan" }
    ];

    var validUser = users.find(function(user) {
        return user.username === username && user.password === password;
    });

    if (validUser) {
        // Usuario y contraseña válidos, redireccionar a otra página
        window.location.href = "yes.html";
    } else {
        // Mostrar mensaje de error
        var errorMessage = document.getElementById("error-message");
        errorMessage.innerText = "Usuario o contraseña incorrectos. Inténtalo de nuevo.";
    }
});
