if (window.location.href.match('//forum.facepunch.com/'))
{
    window.location.replace(`https://web.archive.org/web/${window.location.href}`)

    document.getElementsByTagName('body')[0].innerHTML = `
        <center style="position: relative; top: 200px; font-family: sans-serif; color: #444;">
        <br/><br/>
        <p>
            Redirecting to <strong>archive.org</strong>
        </p>
    `; 
}