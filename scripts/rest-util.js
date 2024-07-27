const host = "https://aoti-basic-express-app.herokuapp.com";

export async function retrieveLocalDatetime() {
    const response = await fetch(`${host}/show/des-moines-datetime`);
    return await response.json()
}

export async function retrieveAllShowsInDesMoines() {
    const allShowsResponse = await fetch(`${host}/show`);
    return await allShowsResponse.json();
}

export async function retrieveUpcomingShowsInDesMoines() {
    const upcomingShowsResponse = await fetch(`${host}/show/upcoming`);
    return await upcomingShowsResponse.json();
}

export async function retrieveShowDetails(showId) {
    const showResponse = await fetch(`${host}/show/${showId}`);
    return await showResponse.json();
}

export async function retrieveVenues() {
    // TODO actually load venues from API
    return [
        {
            "name": "xBk",
            "url": "https://xbklive.com/",
            "address": "1159 24th Street, Des Moines, IA 50311"
        }
    ];
}

