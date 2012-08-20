javascript: (function () {
	function validate(u) {
	    var t = u.split("."),
	        e = t[t.length - 1].toLowerCase();
	    return { gif: 1, jpg: 1, jpeg: 1, png: 1 }[e]
	}
	
    function transform(s) {
	    return s.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
	}
	
	var doc = open().document;
	doc.write("<style>nav { text-align: right; margin-bottom: 20px; } #images { list-style: none; padding: 0;}#images li { float: left; margin-bottom: 10px; }#images.grid6 li { width: 16.66%; height: 16.66%; }#images.grid4 li { width: 25%; height: 25%; }#images.grid2 li { width: 50%; height: 50%; }img { max-width: 100%; max-height: 100%; } ol { clear:left; }</style>");
	doc.write('<nav><a href="javascript:document.getElementById(\'images\').setAttribute(\'class\', \'grid6\');" id="grid6">Grid of 6</a> <a href="javascript:document.getElementById(\'images\').setAttribute(\'class\', \'grid4\');" id="grid4">Grid of 4</a> <a href="javascript:document.getElementById(\'images\').setAttribute(\'class\', \'grid2\');" id="grid2">Grid of 2</a></nav>');
	doc.write('<ol id="images" class="grid4">');
	for (i = 0; url = document.links[i]; ++i) {
	    image_url = url.href;
	    if (image_url && validate(image_url)) {
	        doc.write("<li><a href=\""+transform(image_url)+"\" target=\"_blank\"><img src=\"" + transform(image_url) + "\"></a></li>");
	    }
	}
    doc.write("</ol>");
    doc.write("<ol>");
	for (i = 0; url = document.links[i]; ++i) {
	    image_url = url.href;
	    if (image_url && validate(image_url)) {
	        doc.write("<li>" + transform(image_url) + "</li>");
	    }
	}
    doc.write("</ol>");
    doc.close();

})(); /* by @tiagopedras */