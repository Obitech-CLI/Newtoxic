//Theme
{
    const openThemeBtn = document.querySelector("#theme > button");
    const selectTheme = document.querySelector("#theme > .drop-down");
    const selectLight = document.querySelector("#theme .light");
    const lightIcon = document.querySelector("#lightIcon");
    const selectDark = document.querySelector("#theme .dark");
    const darkIcon = document.querySelector("#darkIcon");

    const theme = localStorage.getItem("theme");

    openThemeBtn.addEventListener("click", () => {
        selectTheme.classList.toggle("show");
    });

    selectLight.addEventListener("click", () => {
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light");
        openThemeBtn.replaceChildren(lightIcon.cloneNode(true));
        selectTheme.classList.remove("show");
    });

    selectDark.addEventListener("click", () => {
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
        openThemeBtn.replaceChildren(darkIcon.cloneNode(true));
        selectTheme.classList.remove("show");
    });

    if (theme === "dark") {
        document.body.classList.add("dark");
        openThemeBtn.replaceChildren(darkIcon.cloneNode(true));
    } else if (theme === "light") {
        document.body.classList.remove("dark");
        openThemeBtn.replaceChildren(lightIcon.cloneNode(true));
    }
}