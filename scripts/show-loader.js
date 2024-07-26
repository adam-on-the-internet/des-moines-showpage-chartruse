const host = "https://aoti-basic-express-app.herokuapp.com";

function loadShowIdParam() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const showId = urlParams.get('show')
    loadShowDetails(showId);
}

async function loadShowDetails(showId) {
    const showResponse = await fetch(`${host}/show/${showId}`);
    const show = await showResponse.json();
    console.log(show);
//    TODO actually use show details in webpage
}

$(document).ready(function () {
    loadShowIdParam();
});
