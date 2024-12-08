document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("menu_button")?.addEventListener("click", function (event) {
        event.stopImmediatePropagation();
        if (event.target instanceof Element) {
            if(event.target.getAttribute("state") === "unclicked")
                event.target.setAttribute("state", "clicked");
            else
                event.target.setAttribute("state", "unclicked");
        }
    });
});