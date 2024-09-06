import {replaceDivContent} from "./document-builder.js"

export async function buildFooterComponent() {
    const currentYear = new Date().getFullYear();
    const footerContent = `
        <hr>
        <p>
            <a href="./index.html">Upcoming Shows</a>
        </p>
        <p>
            <a href="./all-shows.html">All Shows</a>
        </p>
        <p>
            <a href="./about.html">About</a>
        </p>
        <hr>
        <p>
            <a href="https://www.adamontheinternet.com" target="_blank">
            © Adam on the Internet ${currentYear} 
            </a>
        </p>`
    const footerId = "footer";
    replaceDivContent(footerId, footerContent);
}
