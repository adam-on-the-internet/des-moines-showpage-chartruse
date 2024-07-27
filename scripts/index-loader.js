import {buildCurrentDatetimeComponent, buildFooterComponent} from "./shared-components.js"
import {retrieveUpcomingShowsInDesMoines, retrieveVenues} from "./rest-util.js"
import {addContentToDiv, buildShowsContentWithVenueDetails} from "./document-builder.js"

async function loadAllVenues() {
    const venues = await retrieveVenues();
    loadUpcomingShows(venues);
}

function setupUpcomingShows(upcomingShows, venues) {
    const upcomingShowsDisplayContent = buildShowsContentWithVenueDetails(upcomingShows, venues);
    const upcomingShowsDisplayId = 'upcoming-shows-display';
    addContentToDiv(upcomingShowsDisplayId, upcomingShowsDisplayContent);
}

async function loadUpcomingShows(venues) {
    const upcomingShows = await retrieveUpcomingShowsInDesMoines()
    setupUpcomingShows(upcomingShows, venues);
}

$(document).ready(function () {
    loadAllVenues();
    buildCurrentDatetimeComponent();
    buildFooterComponent();
});
