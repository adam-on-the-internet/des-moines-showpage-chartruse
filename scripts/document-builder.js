export function replaceDivContent(id, content) {
    document.getElementById(id).innerHTML = content;
}

export function addShowContentV1(showDisplayContent, show, venues, linkToShow) {
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
    showDisplayContent = addParagraphLinkIfExists(showDisplayContent, show.showDetailsURL, show.showDetailsURL, "Learn More")
    if (linkToShow) {
        showDisplayContent = addParagraphLinkIfExists(showDisplayContent, show._id, `./show.html?show=${show._id}`, "...")
    }
    return showDisplayContent;
}

export function addShowContentV2(showDisplayContent, show, venues) {
    showDisplayContent += `<hr>`;
    showDisplayContent = addSpanIfExists(showDisplayContent, show.showDateDisplay, show.showDateDisplay)

    showDisplayContent += "<br>";
    showDisplayContent = addSpanIfExists(showDisplayContent, show.title, "<strong>" + show.title + "</strong>")
    showDisplayContent = addSpanIfExists(showDisplayContent, show.subtitle, " " + show.subtitle + " ")

    showDisplayContent += ` @ `;
    const matchingVenue = getMatchingVenue(venues, show);
    if (matchingVenue !== null) {
        showDisplayContent = addSpanLinkIfExists(showDisplayContent, matchingVenue.url, matchingVenue.url, matchingVenue.name)
    } else {
        showDisplayContent = addSpanIfExists(showDisplayContent, show.venue, show.venue)
    }

    showDisplayContent += "<br>";
    showDisplayContent = addSpanIfExists(showDisplayContent, show.doorDateDisplay, "Doors: " + show.doorDateDisplay + " | ")
    showDisplayContent = addSpanIfExists(showDisplayContent, show.showTimeDisplay, "Show: " + show.showTimeDisplay)

    showDisplayContent = addSpanIfExists(showDisplayContent, show.ageLimit, " | " + show.ageLimit)
    showDisplayContent = addSpanIfExists(showDisplayContent, show.ticketPrice, " | " + show.ticketPrice)
    showDisplayContent = addSpanIfExists(showDisplayContent, show.genre, " | " + show.genre)

    if (show.showDetailsURL) {
        showDisplayContent += " | ";
    }
    showDisplayContent = addSpanLinkIfExists(showDisplayContent, show.showDetailsURL, show.showDetailsURL, "More Show Details")
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

function addSpanIfExists(originalContent, field, newContent) {
    if (field) {
        return originalContent + `
            <span>
               ${newContent}
            </span>
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

function addSpanLinkIfExists(originalContent, field, link, text) {
    if (field) {
        return originalContent + `
            <span>
                <a href="${link}" target="_blank">
                    ${text}
                </a>
            </span>
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
        showsDisplayContent = addShowContentV2(showsDisplayContent, show, venues);
    }
    return showsDisplayContent;
}
