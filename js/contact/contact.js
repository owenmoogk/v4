function loadContacts() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			contacts(this);
		}
    };
    xmlhttp.open("GET", "/assets/contact.xml", true);
    xmlhttp.send();
}
function contacts(xml) {
    var titles, links, i, txt, xmlDoc, images; 
    xmlDoc = xml.responseXML;
    txt = "";
    titles = xmlDoc.getElementsByTagName("title");
    links = xmlDoc.getElementsByTagName('link');
    texts = xmlDoc.getElementsByTagName('text');
    for (i = 0; i < 3; i++) { 
        txt += '<div class="link primary"><a href="'+links[i].childNodes[0].nodeValue+'"><div class="text">'+titles[i].childNodes[0].nodeValue+'</div></a></div>';
    }
    console.log(txt)
    document.getElementById("main").innerHTML = txt;
    txt = '';
    for (i = 3; i < titles.length; i++) { 
        txt += '<div class="link"><a href="'+links[i].childNodes[0].nodeValue+'"><div class="text">'+titles[i].childNodes[0].nodeValue+'</div></a></div>';    }
    document.getElementById("other").innerHTML = txt;
}