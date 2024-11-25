"use strict";
function complex(elem = null) {
    if (elem != null) {
        return { x: elem.offsetLeft, y: elem.offsetTop };
    }
    else {
        return { x: 0, y: 0 };
    }
}
function line() {
    return { m: 0, n: 0 };
}
window.onload = () => {
    //get menu
    let menu = document.getElementById("menu");
    let element1 = document.getElementById("element1"), coord1 = complex(element1);
    let element2 = document.getElementById("element2"), coord2 = complex(element2);
    let element3 = document.getElementById("element3"), coord3 = complex(element3);
    //get lines
    let line12 = document.getElementById("line12"), func12 = { m: 0, n: 0 };
    let line23 = document.getElementById("line23"), func23 = { m: 0, n: 0 };
    //set up line12
    if (element1 != null && element2 != null && line12 != null && element3 != null && line23 != null) {
        let y0 = (element1.offsetTop + element3.offsetTop) / 2;
        let x0 = (element1.offsetLeft + element3.offsetLeft) / 2;
        {
            let tmp = document.getElementById("block");
            if (tmp != null) {
                tmp.style.top = y0 + "px";
                tmp.style.left = x0 + "px";
            }
        }
        func12.m = (element2.offsetTop - element1.offsetTop) / (element2.offsetLeft - element1.offsetLeft);
        func12.n = y0 - func12.m * x0;
        line12.style.left = x0 - line12.offsetWidth / 2 + "px";
        line12.style.top = func12.n + func12.m * x0 + "px";
        line12.style.rotate = Math.atan(func12.m) + "rad";
        func23.m = (element3.offsetTop - element2.offsetTop) / (element3.offsetLeft - element2.offsetLeft);
        func23.n = y0 - func23.m * x0;
        line23.style.left = x0 - line23.offsetWidth / 2 + "px";
        line23.style.top = func23.n + func23.m * x0 + "px";
        line23.style.rotate = Math.atan(func23.m) + "rad";
    }
    if (element1 != null && element2 != null && element3 != null && line12 != null && line23 != null) {
        line12.style.setProperty("--mv1", Math.sin(Math.atan(func12.m) + Math.PI / 2) * 100 + "px");
        line23.style.setProperty("--mv1", Math.sin(Math.atan(func23.m) + Math.PI / 2) * 100 + "px");
        line12.style.setProperty("--mv2", Math.sin(Math.atan(func12.m) + Math.PI / 2) * 100 + "px");
        line23.style.setProperty("--mv2", Math.sin(Math.atan(func23.m) + Math.PI / 2) * (-100) + "px");
        line12.style.setProperty("--mv3", Math.sin(Math.atan(func12.m) + Math.PI / 2) * (-100) + "px");
        line23.style.setProperty("--mv3", Math.sin(Math.atan(func23.m) + Math.PI / 2) * (-100) + "px");
        let angle = Math.atan(func12.m) / 2;
        line12.style.setProperty("--rt1", -angle + "rad");
        line23.style.setProperty("--rt1", angle + "rad");
        line12.style.setProperty("--rt2", angle + "rad");
        line23.style.setProperty("--rt2", -angle + "rad");
        line12.style.setProperty("--rt3", -angle + "rad");
        line23.style.setProperty("--rt3", angle + "rad");
        element1.addEventListener("mouseover", () => {
            line12.className = "mvdown1";
            line23.className = "mvdown1";
            element2.className = "off";
            element3.className = "off";
        });
        element1.addEventListener("mouseleave", () => {
            line12.className = "";
            line23.className = "";
            element2.className = "";
            element3.className = "";
        });
        element2.addEventListener("mouseover", () => {
            line12.className = "mvdown2";
            line23.className = "mvdown2";
            element3.className = "off";
            element1.className = "off";
        });
        element2.addEventListener("mouseleave", () => {
            line12.className = "";
            line23.className = "";
            element1.className = "";
            element3.className = "";
        });
        element3.addEventListener("mouseover", () => {
            line12.className = "mvdown3";
            line23.className = "mvdown3";
            element2.className = "off";
            element1.className = "off";
        });
        element3.addEventListener("mouseleave", () => {
            line12.className = "";
            line23.className = "";
            element2.className = "";
            element1.className = "";
        });
    }
};
