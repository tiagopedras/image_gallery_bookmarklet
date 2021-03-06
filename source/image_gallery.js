javascript: (function () {

	function validate(u) {
	    var t = u.split("."),
	        e = t[t.length - 1].toLowerCase();
	    return { gif: 1, jpg: 1, jpeg: 1, png: 1 }[e]
	}
	
    function transform(s) {
	    return s.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
	}

	var images = [],
	    links = document.links,
	    status = "";

	//PROCESS LINKS AND CHECK FOR IMAGES
	for (i = 0; url = links[i]; ++i) {
	    image_url = url.href;
	    if (image_url && validate(image_url)) images.push(image_url);
	}
	
	//IF NO LINKS TO IMAGES FOUND
	//THEN GET THE LARGEST IMAGE TAGS FROM THE DOM
	if (images.length == 0) {
    	status += "No links with images found. ";

        var image_tags = document.body.getElementsByTagName("img"),
            last_winner = "";
        
        for (var i in image_tags) {
            var el = image_tags[i],
                h = el.offsetHeight,
                w = el.offsetWidth,
                last_winner = "",
                pixels = w * h;
            
            
            if (pixels > 50000) {
                last_winner = image_tags[i].src;
                images.push(last_winner);
            }
        }

        if (images.length == 0) { status += "And no large images found."; }
        else                    { status += "But " + images.length + " large images found. "; }
	} else {
    	status += images.length + " images found. ";
    }
	

	//CREATE NEW PAGE AND CONTENT
	var doc = open().document;
	doc.write("<html><head><style>body { margin: 20px; background-color: #222222; font-family: Helvetica, Arial; color: white; } a { color: white; } #status { float:left; } nav { float: right; text-align: right; margin-bottom: 20px; } #images { overflow: hidden; margin-top: 20px; list-style: none; padding: 0;} #images li { float: left; margin-bottom: 10px; margin-right: 10px; }  #images.grid6 li img { height: 400px } #images.grid4 li img { height: 300px; } #images.grid2 li img { height: 200px; } ol { clear:both; } #urls { clear: both; margin-top:90px; color: #CCC; }</style></head>");
	doc.write('<body><small id="status">'+status+'</small><nav><a href="javascript:document.getElementById(\'images\').setAttribute(\'class\', \'grid6\');" id="grid6">Grid of 6</a> <a href="javascript:document.getElementById(\'images\').setAttribute(\'class\', \'grid4\');" id="grid4">Grid of 4</a> <a href="javascript:document.getElementById(\'images\').setAttribute(\'class\', \'grid2\');" id="grid2">Grid of 2</a></nav>');
	doc.write('<ol id="images" class="grid2">');
	for (i = 0; url = images[i]; ++i) {
    	doc.write("<li><a href=\""+transform(images[i])+"\" target=\"_blank\"><img src=\"" + transform(images[i]) + "\"></a></li>");
	}
    doc.write("</ol>");
    doc.write('<small id="urls"><h3>URLs</h3><ol>');
	for (i = 0; url = images[i]; ++i) {
	    doc.write("<li>" + transform(images[i]) + "</li>");
	}
    doc.write("</ol></small></body></html>");
    doc.close();

})(); /* by @tiagopedras */