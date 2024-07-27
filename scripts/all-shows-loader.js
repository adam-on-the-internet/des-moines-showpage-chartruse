import {buildCurrentDatetimeComponent, buildFooterComponent} from "./shared-components.js"
import {retrieveAllShowsInDesMoines, retrieveVenues} from "./rest-util.js"
import {addContentToDiv, buildShowsContentWithVenueDetails} from "./document-builder.js"

async function loadAllVenues() {
    const venues = await retrieveVenues();
    setupAllShowsInDesMoines(venues);
}

function setupAllShows(allShows, allVenues) {
    const allShowsDisplayContent = buildShowsContentWithVenueDetails(allShows, allVenues);
    const allShowsDisplayId = 'all-shows-display';
    addContentToDiv(allShowsDisplayId, allShowsDisplayContent);
}

async function setupAllShowsInDesMoines(venues) {
    const allShows = await retrieveAllShowsInDesMoines();
    setupAllShows(allShows, venues);
}

$(document).ready(function () {
    loadAllVenues();
    buildCurrentDatetimeComponent();
    buildFooterComponent();
});
