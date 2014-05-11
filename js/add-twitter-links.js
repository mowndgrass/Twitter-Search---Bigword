/**@author Alex Cyphus @file add-twitter-links.minify.js @dependecies none*/
function addTwitterLinks(e) {
    return e.replace(/(^|\s)[\@\#]([a-zA-z0-9_]*)/g, function (e, t, n) {
        var r = '<a href="http://twitter.com/';
        if (e.charAt(0) === "#" || e.charAt(1) === "#") {
            r += "hashtag/";
            return r + encodeURI(n) + '" target="_blank">' + e + "</a>"
        } else {
            return r + encodeURI(n) + '" target="_blank">' + e + "</a>"
        }
    })
}

function updatetags() {
    var e = document.getElementsByTagName("body").item(0).innerHTML;
    document.getElementsByTagName("body").item(0).innerHTML = addTwitterLinks(e)
}