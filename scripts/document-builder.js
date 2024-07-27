export function addContentToDiv(id, content) {
    const newDiv = document.createElement('div');
    newDiv.innerHTML = content;
    document.getElementById(id).appendChild(newDiv);
}

export function addShowContent(showDisplayContent, show, venues) {
    let matchingVenue = null;
    for (let i = 0; i < venues.length; i++) {
        const venue = venues[i];
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

export function buildShowsContentWithVenueDetails(shows, venues) {
    let showsDisplayContent = "";
    for (let i = 0; i < shows.length; i++) {
        const show = shows[i];
        showsDisplayContent = addShowContent(showsDisplayContent, show, venues);
    }
    return showsDisplayContent;
}
