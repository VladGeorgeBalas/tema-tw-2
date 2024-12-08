document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("menu_button")?.addEventListener("click", function (event) {
        event.stopImmediatePropagation();
        if (event.target instanceof Element) {
            if(event.target.getAttribute("state") === "unclicked") {
                event.target.setAttribute("state", "clicked");
                event.target.textContent = "<<<"
            }
            else {
                event.target.setAttribute("state", "unclicked");
                event.target.textContent = "///"
            }
        }
    });

    if(document.documentElement != null) {
        if (window.innerWidth < window.innerHeight) {
            document.documentElement.style.setProperty("--menu-width", "100vw");
        } else {
            document.documentElement.style.setProperty("--menu-width", "10vw");
        }
    }
    else
        console.log("not supported");
});