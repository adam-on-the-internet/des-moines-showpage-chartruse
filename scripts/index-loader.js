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

async function loadCurrentDateTimeInDesMoines() {
    const desMoinesDatetimeResponse = await fetch(`${host}/show/des-moines-datetime`);
    const desMoinesDatetime = await desMoinesDatetimeResponse.json();
    console.log(desMoinesDatetime);
    const desMoinesDatetimeContent = `
        <p>
            Current Des Moines Date & Time: ${desMoinesDatetime.rawDate}
        </p>
    `;
    const desMoinesDatetimeId = "des-moines-datetime";
    addContentToDiv(desMoinesDatetimeId, desMoinesDatetimeContent);
}

async function loadUpcomingShows(allVenues) {
    const upcomingShowsResponse = await fetch(`${host}/show/upcoming`);
    const upcomingShows = await upcomingShowsResponse.json();
    setupUpcomingShows(upcomingShows, allVenues)
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
