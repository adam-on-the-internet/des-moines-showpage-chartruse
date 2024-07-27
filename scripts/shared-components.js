import {retrieveLocalDatetime} from "./rest-util.js"
import {addContentToDiv} from "./document-builder.js"

export async function buildFooterComponent() {
    const footerContent = `
        <hr>
        <p>
            <a href="/des_moines_showpage/index.html">Upcoming Shows</a>
        </p>
        <p>
            <a href="/des_moines_showpage/all-shows.html">All Shows</a>
        </p>
        <p>
            <a href="/des_moines_showpage/about.html">About</a>
        </p>
        <hr>
        Footer Text Here`
    const footerId = "footer";
    addContentToDiv(footerId, footerContent);
}

export async function buildCurrentDatetimeComponent() {
    const desMoinesDatetime = await retrieveLocalDatetime();
    console.log(desMoinesDatetime);
    const desMoinesDatetimeContent = `
        <p>
            Current Des Moines Date & Time: ${desMoinesDatetime.rawDate}
        </p>
    `;
    const desMoinesDatetimeId = "des-moines-datetime";
    addContentToDiv(desMoinesDatetimeId, desMoinesDatetimeContent);
}
