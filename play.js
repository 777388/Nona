chrome.contextMenus.create({
    id:"IPv6Recon",
    title:"Ipv6Recon",
    contexts: ["selection"]
})

chrome .contextMenus.onClicked.addListener(function (info, tab) {
    if(info.menuItemId){
        //`${info.menuItemId} ${variableName}`
        const test = info.selectionText;
        const boop = `https://ipaddress.com/ipv6/${test}`
        chrome.tabs.create({ url: `https://bgp.tools/prefix/${test}` });
        chrome.tabs.create({ url: encodeURI(`${boop}`) });
        chrome.tabs.create({ url: `https://ipsnoop.com/${test}`});
        chrome.tabs.create({ url: `https://certificatedetails.com/${test}`});
        chrome.tabs.create({ url: `https://tools.tracemyip.org/lookup/${test}`});
        chrome.tabs.create({ url: `https://domain.glass/search/?q=${test}`});
    }
});