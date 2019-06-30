/*
	Developed by Valkyrie
	Discord: Valkyrie#666
*/

chrome.extension.onRequest.addListener(function(request, sender) 
    {
        chrome.tabs.update(sender.tab.id, {url: request.redirect})
    }
)