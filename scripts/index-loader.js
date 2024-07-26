const host = "https://aoti-basic-express-app.herokuapp.com";

function addContentToDiv(id, content) {
    const newDiv = document.createElement('div');
    newDiv.innerHTML = content;
    document.getElementById(id).appendChild(newDiv);
}

function loadAllVenues() {
    const venueListURL = "./data/venue-list.json";
    $.getJSON(venueListURL, function (allVenues) {
        loadUpcomingShows(allVenues);
        loadAllShowsInDesMoines(allVenues);
    });
}

function loadUpcomingShows(allVenues) {
    const showListURL = "./data/show-list.json";
    $.getJSON(showListURL, function (upcomingShows) {
        setupUpcomingShows(upcomingShows, allVenues);
    });
}

function addShowContent(showDisplayContent, show, allVenues) {
    let matchingVenue = null;
    for (let i = 0; i < allVenues.length; i++) {
        const venue = allVenues[i];
        if (venue.name === show.venue) {
            matchingVenue = venue;
        }
    }
    showDisplayContent += `
        <hr>
        <p>
            ${show.date}
        </p>
        <p>
            ${show.title}
        </p>
    `;
    if (matchingVenue !== null) {
        showDisplayContent += `
            <p>
                <a href="${matchingVenue.url}" target="_blank">
                    ${matchingVenue.name}
                </a>
            </p>
        `;
    } else {
        showDisplayContent += `
            <p>
                ${show.venue}
            </p>
        `;
    }
    if (show._id) {
        showDisplayContent += `
            <p>
                <a href="/des_moines_showpage/show.html?show=${show._id}">More Details</a>
            </p>
        `;
    }
    return showDisplayContent;
}

function buildShowsContentWithVenueDetails(shows, allVenues) {
    let showsDisplayContent = "";
    for (let i = 0; i < shows.length; i++) {
        const show = shows[i];
        showsDisplayContent = addShowContent(showsDisplayContent, show, allVenues);
    }
    return showsDisplayContent;
}

function setupAllShows(allShows, allVenues) {
    const allShowsDisplayContent = buildShowsContentWithVenueDetails(allShows, allVenues);
    const allShowsDisplayId = 'all-shows-display';
    addContentToDiv(allShowsDisplayId, allShowsDisplayContent);
}

function setupUpcomingShows(upcomingShows, allVenues) {
    const upcomingShowsDisplayContent = buildShowsContentWithVenueDetails(upcomingShows, allVenues);
    const upcomingShowsDisplayId = 'upcoming-shows-display';
    addContentToDiv(upcomingShowsDisplayId, upcomingShowsDisplayContent);
}

function loadCurrentDateTimeInDesMoines() {
//    TODO load current datetime
}

async function loadAllShowsInDesMoines(allVenues) {
    const allShowsResponse = await fetch(`${host}/show`);
    const allShows = await allShowsResponse.json();
    setupAllShows(allShows, allVenues)
}

$(document).ready(function () {
    loadAllVenues();
    loadCurrentDateTimeInDesMoines();
});
