var pages = ["home", "about", "services", "contact"];

export function changePage () {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");

if (pageID != "") {
    $.get(`pages/${pageID}.html`, function (data) {
        $("#app").html(data);
    })
} else {
    $.get(`pages/home.html`, function (data) {
        $("#app").html(data);
    })
    }
}