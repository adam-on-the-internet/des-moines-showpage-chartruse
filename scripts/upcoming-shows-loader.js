
function addContentToDiv(id, content) {
    const newDiv = document.createElement('div');
    newDiv.innerHTML = content;
    document.getElementById(id).appendChild(newDiv);
}

function loadAllVenues() {
    const venueListURL = "./data/venue-list.json";
    $.getJSON(venueListURL, function (allVenues) {
        loadAllShows(allVenues);
    });
}

function loadAllShows(allVenues) {
    const showListURL = "./data/show-list.json";
    $.getJSON(showListURL, function (allShows) {
        // TODO filter down to only upcoming shows, instead of just copying whole list
        const upcomingShows = allShows;
        setupUpcomingShows(upcomingShows, allVenues);
    });
}

function addUpcomingShowContent(upcomingShowsDisplayContent, show, allVenues) {
    let matchingVenue = null;
    for (let i = 0; i < allVenues.length; i++) {
        const venue = allVenues[i];
        if (venue.name === show.venue) {
            matchingVenue = venue;
        }
    }
    upcomingShowsDisplayContent += `
        <hr>
        <p>
            ${show.date}
        </p>
        <p>
            ${show.title}
        </p>
    `;
    if (matchingVenue !== null) {
        upcomingShowsDisplayContent += `
            <p>
                <a href="${matchingVenue.url}" target="_blank">
                    ${matchingVenue.name}
                </a>
            </p>
        `;
    } else {
        upcomingShowsDisplayContent += `
            <p>
                ${show.venue}
            </p>
        `;
    }
    return upcomingShowsDisplayContent;
}

function buildUpcomingShowsContent(upcomingShows, allVenues) {
    let upcomingShowsDisplayContent = "";
    for (let i = 0; i < upcomingShows.length; i++) {
        const show = upcomingShows[i];
        upcomingShowsDisplayContent = addUpcomingShowContent(upcomingShowsDisplayContent, show, allVenues);
    }
    return upcomingShowsDisplayContent;
}

function setupUpcomingShows(upcomingShows, allVenues) {
    const upcomingShowsDisplayContent = buildUpcomingShowsContent(upcomingShows, allVenues);
    const upcomingShowsDisplayId = 'upcoming-shows-display';
    addContentToDiv(upcomingShowsDisplayId, upcomingShowsDisplayContent);
}

$(document).ready(function () {
    loadAllVenues();
});
