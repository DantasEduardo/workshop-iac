const openLogoff = document.querySelector("[openLogoff]");
const logoff = document.querySelector("[logoff]");

openLogoff.addEventListener("click", e => {
    logoff.style.display = logoff.style.display == "block" ? "none" : "block";
});
