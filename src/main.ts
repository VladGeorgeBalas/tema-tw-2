//get device type
let device: string;

if (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i))
    device = "mobile";
else
    device = "computer";

//set css page
window.onload = () => {
    let element = document.getElementById("usr-def");
    if (element != null)
        element.setAttribute("dev-type", device);
    //document.getElementById("body")?.style.setProperty("", device);
}