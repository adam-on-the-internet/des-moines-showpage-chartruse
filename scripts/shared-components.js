import {replaceDivContent} from "./document-builder.js"

export async function buildFooterComponent() {
    const currentYear = new Date().getFullYear();
    const footerContent = `
        <hr>
        <p>
            <a href="./index.html">Upcoming Shows</a> | 
            <a href="./all-shows.html">All Shows</a> | 
            <a href="./about.html">About</a> | 
            <a href="https://www.adamontheinternet.com" target="_blank">
            © Adam on the Internet ${currentYear} 
            </a>
        </p>`
    const footerId = "footer";
    replaceDivContent(footerId, footerContent);
}
