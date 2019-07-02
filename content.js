/*
	Developed by Valkyrie
	Discord: Valkyrie#666
*/

if (window.location.href.match('//forum.facepunch.com/'))
{

	// fixes to #1
	var newURL = window.location.href
	if (newURL.match(/\/f\//g))
		newURL = newURL.replace(/\/f\//g, "/")

	window.location.replace(`https://web.archive.org/web/${newURL}`)

	document.title = "FP Archive";
	document.getElementsByTagName('body')[0].innerHTML = `
		 <center style="position: relative; top: 200px; font-family: sans-serif; color: #444;">
		<br/><br/>
		<p>
			Redirecting to <strong>archive.org</strong>
		</p>
	`; 
}