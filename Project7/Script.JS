const passwordBox = document.getElementById("password");
const lengh =12;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+";
const allchars = uppercase + lowercase + numbers + symbols;

function createPassword()
{
    let Password ="";
    Password += uppercase[Math.floor(Math.random()*uppercase.length)];
    Password += lowercase[Math.floor(Math.random()*lowercase.length)];
    Password += numbers[Math.floor(Math.random()*numbers.length)];
    Password += symbols[Math.floor(Math.random()*symbols.length)];

    while(lengh> Password.length)
    {
        Password += allchars[Math.floor(Math.random()*allchars.length)];
    }
    passwordBox.value = Password;
}
function copypassword() {
    const passwordBox = document.getElementById("password");
    navigator.clipboard.writeText(passwordBox.value)
        .then(() => alert("Password copied to clipboard!"))
        .catch(err => console.error("Failed to copy password:", err));
}
