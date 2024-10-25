import {buildGenericComponents} from "./shared-components.js"
import {retrieveUpcomingShowsInDesMoines, retrieveVenues} from "./rest-util.js"
import {replaceDivContent, buildShowsContentWithVenueDetails} from "./document-builder.js"

async function loadAllVenues() {
    const venues = await retrieveVenues();
    loadUpcomingShows(venues);
}

function setupUpcomingShows(upcomingShows, venues) {
    const upcomingShowsDisplayContent = buildShowsContentWithVenueDetails(upcomingShows, venues);
    const upcomingShowsDisplayId = 'upcoming-shows-display';
    replaceDivContent(upcomingShowsDisplayId, upcomingShowsDisplayContent);
}

async function loadUpcomingShows(venues) {
    const upcomingShows = await retrieveUpcomingShowsInDesMoines()
    setupUpcomingShows(upcomingShows, venues);
}

$(document).ready(function () {
    loadAllVenues();
    buildGenericComponents();
});
