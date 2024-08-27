export function addContentToDiv(id, content) {
    const newDiv = document.createElement('div');
    newDiv.innerHTML = content;
    document.getElementById(id).appendChild(newDiv);
}

export function addShowContent(showDisplayContent, show, venues) {
    showDisplayContent += `<hr>`;
    showDisplayContent = addParagraphIfExists(showDisplayContent, show.title, show.title)
    showDisplayContent = addParagraphIfExists(showDisplayContent, show.subtitle, show.subtitle)
    showDisplayContent = addParagraphIfExists(showDisplayContent, show.showDateDisplay, show.showDateDisplay)
    showDisplayContent = addParagraphIfExists(showDisplayContent, show.showTimeDisplay, "Show: " + show.showTimeDisplay)
    showDisplayContent = addParagraphIfExists(showDisplayContent, show.doorDateDisplay, "Doors: " + show.doorDateDisplay)

    const matchingVenue = getMatchingVenue(venues, show);
    if (matchingVenue !== null) {
        showDisplayContent = addParagraphLinkIfExists(showDisplayContent, matchingVenue.url, matchingVenue.url, matchingVenue.name)
    } else {
        showDisplayContent = addParagraphIfExists(showDisplayContent, show.venue, show.venue)
    }

    showDisplayContent = addParagraphIfExists(showDisplayContent, show.ageLimit, show.ageLimit)
    showDisplayContent = addParagraphIfExists(showDisplayContent, show.ticketPrice, show.ticketPrice)
    showDisplayContent = addParagraphIfExists(showDisplayContent, show.genre, show.genre)
    showDisplayContent = addParagraphLinkIfExists(showDisplayContent, show.showDetailsURL, show.showDetailsURL, "Show Details")
    showDisplayContent = addParagraphLinkIfExists(showDisplayContent, show._id, `/des_moines_showpage/show.html?show=${show._id}`, "More Details")
    return showDisplayContent;
}

function addParagraphIfExists(originalContent, field, newContent) {
    if (field) {
        return originalContent + `
            <p>
               ${newContent}
            </p>
        `;
    }
    return originalContent
}

function addParagraphLinkIfExists(originalContent, field, link, text) {
    if (field) {
        return originalContent + `
            <p>
                <a href="${link}" target="_blank">
                    ${text}
                </a>
            </p>
        `;
    }
    return originalContent
}

function getMatchingVenue(venues, show) {
    let matchingVenue = null;
    for (let i = 0; i < venues.length; i++) {
        const venue = venues[i];
        if (venue.name === show.venue) {
            matchingVenue = venue;
        }
    }
    return matchingVenue;
}

export function buildShowsContentWithVenueDetails(shows, venues) {
    let showsDisplayContent = "";
    for (let i = 0; i < shows.length; i++) {
        const show = shows[i];
        showsDisplayContent = addShowContent(showsDisplayContent, show, venues);
    }
    return showsDisplayContent;
}
