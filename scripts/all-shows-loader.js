import {buildGenericComponents} from "./shared-components.js"
import {retrieveAllShowsInDesMoines, retrieveVenues} from "./rest-util.js"
import {replaceDivContent, buildShowsContentWithVenueDetails} from "./document-builder.js"

async function loadAllVenues() {
    const venues = await retrieveVenues();
    setupAllShowsInDesMoines(venues);
}

function setupAllShows(allShows, allVenues) {
    const allShowsDisplayContent = buildShowsContentWithVenueDetails(allShows, allVenues);
    const allShowsDisplayId = 'all-shows-display';
    replaceDivContent(allShowsDisplayId, allShowsDisplayContent);
}

async function setupAllShowsInDesMoines(venues) {
    const allShows = await retrieveAllShowsInDesMoines();
    setupAllShows(allShows, venues);
}

$(document).ready(function () {
    loadAllVenues();
    buildGenericComponents();
});
