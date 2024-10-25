import {buildGenericComponents} from "./shared-components.js"
import {fetchParam} from "./query-param-util.js"
import {retrieveShowDetails, retrieveVenues} from "./rest-util.js";
import {replaceDivContent, buildShowsContentWithVenueDetails} from "./document-builder.js";

async function loadAllVenues() {
    const venues = await retrieveVenues();
    setupShow(venues);
}

function getShowId() {
    return fetchParam("show")
}

function setupShowDisplay(show, allVenues) {
    const showDisplayContent = buildShowsContentWithVenueDetails([show], allVenues);
    const showDisplayId = 'show-display';
    replaceDivContent(showDisplayId, showDisplayContent);
}

async function setupShow(venues) {
    const showId = getShowId();
    const show = await retrieveShowDetails(showId);
    setupShowDisplay(show, venues);
}

$(document).ready(function () {
    loadAllVenues();
    buildGenericComponents();
});
