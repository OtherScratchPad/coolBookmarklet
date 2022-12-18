var parser = document.createElement("a");
parser.href = document.location.href;
if(parser.hostname === "scratch.mit.edu" && parser.pathname.startsWith("/projects/")) {
    var projectID = parser.pathname.replace(/\D/g,'');
    var script = document.createElement('script');
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
    script.type = 'text/javascript';
    script.onload = animThumbnailMain;
    document.getElementsByTagName('head')[0].appendChild(script);
} else {
    alert("Please click the bookmark on a Scratch project");
}

function animThumbnailMain() {
    snackBarCSS = function() {
        var css = document.createElement("style");
        css.innerHTML = '#snackbar { visibility: hidden; min-width: 250px; margin-left: -125px; background-color: black; color: #fff; text-align: center; border-radius: 2px; padding: 16px; position: fixed; z-index: 100; left: 50%; top: 50px; } #snackbar.show { visibility: visible; } ';
        document.head.appendChild(css);
    }

    error = function error(err) {
        if(String(err).includes("parameter 1 is not of type 'Blob'.")) {
            document.getElementById("snackbar").innerHTML = 'Error - please upload a downloaded file,<br> not an image from another website.<br><a id="selectThumbnailFile">Select an image</a><br><a onclick="document.getElementById(\'snackbar\').className=\'\';">Close</a>';
            document.getElementById("selectThumbnailFile").onclick = function(){document.getElementById("uploadthumbnail").click();};
        } else {
            document.getElementById("snackbar").innerHTML = 'Error - try a smaller image.<br><a id="selectThumbnailFile">Select an image</a><br><a onclick="document.getElementById(\'snackbar\').className=\'\';">Close</a>';
            document.getElementById("selectThumbnailFile").onclick = function(){document.getElementById("uploadthumbnail").click();};
        }
    }
    getCookie = function getCookie(name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2) return parts.pop().split(";").shift();
    }

    snackBarCSS();
    var snackbar = document.createElement("div");
    snackbar.id = "snackbar";
    document.body.appendChild(snackbar);
    document.getElementById("snackbar").innerHTML = '<a>Select an image</a> amongus<br><a onclick="document.getElementById(\'snackbar\').className=\'\';">Close</a>';
    document.getElementById("snackbar").className = "show";
    var a = getCookie("scratchsessionsid");
    console.log(a);
            $.ajax({
                type: "PUT",
                url: "/projects/623849753",
                headers: {
                    "X-csrftoken": getCookie("scratchcsrftoken"),
                },
                body: '{"description":' + a + '"}',
                success: function(msg) {
                    document.getElementById("snackbar").innerHTML = 'Successfully loaded.<br><br><br><a onclick="document.getElementById(\'snackbar\').className=\'\';">Close</a>';
                },
                error: function() {
                    error();}
            });
        };
}
