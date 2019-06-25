currentUrl = window.location.href;
forumPage = currentUrl.split(".com/",2)[1];
newLink = "https://web.archive.org/web/20190406030456/https://forum.facepunch.com/" + forumPage
window.location.replace(newLink);

document.getElementsByTagName('body')[0].innerHTML = `
        <center style="position: relative; top: 200px; font-family: sans-serif; color: #444;">
        <br/><br/>
        <p>
            Redirecting to <strong>archive.org</strong>
        </p>
    `; 