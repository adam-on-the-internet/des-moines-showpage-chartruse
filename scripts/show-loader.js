import {buildFooterComponent, buildCurrentDatetimeComponent} from "./shared-components.js"
import {retrieveShowDetails} from "./rest-util.js"
import {fetchParam} from "./query-param-util.js"

function loadShowIdParam() {
    const showId = fetchParam("show")
    loadShowDetails(showId);
}

async function loadShowDetails(showId) {
    const show = await retrieveShowDetails(showId)
    console.log(show);
//    TODO actually use show details in webpage
}

$(document).ready(function () {
    loadShowIdParam();
    buildCurrentDatetimeComponent();
    buildFooterComponent();
});
