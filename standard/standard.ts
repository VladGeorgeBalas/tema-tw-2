class centeredContent extends HTMLDivElement {
    constructor() {
        super();
        this.style.left = "100px";
        this.style.width = "100px";
        this.style.height = "100px";
    }
}

customElements.define('centered-content', centeredContent);