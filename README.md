Image gallery
=====
Open all images (with a direct link to a bigger version) in a gallery-like page.

Usage
-----
To use it just <a href="javascript:(function(){function%20validate(u){var%20t=u.split(%22.%22),e=t[t.length%20-%201].toLowerCase();return{gif:1,jpg:1,jpeg:1,png:1}[e]}function%20transform(s){return%20s.replace(/%26/g,%22%26amp;%22).replace(/%3E/g,%22%26gt;%22).replace(/%3C/g,%22%26lt;%22).replace(/%22/g,%20%22%26quot;%22);}var%20doc=open().document;doc.write(%22%3Cstyle%3Enav%20{%20text-align:%20right;%20margin-bottom:%2020px;%20}%20%23images%20{%20list-style:%20none;%20padding:%200;}%23images%20li%20{%20float:%20left;%20margin-bottom:%2010px;%20}%23images.grid6%20li%20{%20width:%2016.66%25;%20height:%2016.66%25;%20}%23images.grid4%20li%20{%20width:%2025%25;%20height:%2025%25;%20}%23images.grid2%20li%20{%20width:%2050%25;%20height:%2050%25;%20}img%20{%20max-width:%20100%25;%20max-height:%20100%25;%20}%20ol%20{%20clear:left;%20}%3C/style%3E%22);doc.write('%3Cnav%3E%3Ca%20href=%22javascript:document.getElementById(\'images\').setAttribute(\'class\',\'grid6\');%22%20id=%22grid6%22%3EGrid%20of%206%3C/a%3E%20%3Ca%20href=%22javascript:document.getElementById(\'images\').setAttribute(\'class\',\'grid4\');%22%20id=%22grid4%22%3EGrid%20of%204%3C/a%3E%20%3Ca%20href=%22javascript:document.getElementById(\'images\').setAttribute(\'class\',\'grid2\');%22%20id=%22grid2%22%3EGrid%20of%202%3C/a%3E%3C/nav%3E');doc.write('%3Col%20id=%22images%22%20class=%22grid4%22%3E');for(i=0;url=document.links[i];++i){image_url=url.href;if(image_url%20%26%26%20validate(image_url)){doc.write(%22%3Cli%3E%3Cimg%20src=\%22%22%20+%20transform(image_url)%20+%20%22\%22%3E%3C/li%3E%22);}}doc.write(%22%3C/ol%3E%22);doc.write(%22%3Col%3E%22);for(i=0;url=document.links[i];++i){image_url=url.href;if(image_url%20%26%26%20validate(image_url)){doc.write(%22%3Cli%3E%22+transform(image_url)+%22%3C/li%3E%22);}}doc.write(%22%3C/ol%3E%22);doc.close();})();/* by @tiagopedras */">drag this</a> to your browser bookmark bar or <a href="javascript:(function(){function%20validate(u){var%20t=u.split(%22.%22),e=t[t.length%20-%201].toLowerCase();return{gif:1,jpg:1,jpeg:1,png:1}[e]}function%20transform(s){return%20s.replace(/%26/g,%22%26amp;%22).replace(/%3E/g,%22%26gt;%22).replace(/%3C/g,%22%26lt;%22).replace(/%22/g,%20%22%26quot;%22);}var%20doc=open().document;doc.write(%22%3Cstyle%3Enav%20{%20text-align:%20right;%20margin-bottom:%2020px;%20}%20%23images%20{%20list-style:%20none;%20padding:%200;}%23images%20li%20{%20float:%20left;%20margin-bottom:%2010px;%20}%23images.grid6%20li%20{%20width:%2016.66%25;%20height:%2016.66%25;%20}%23images.grid4%20li%20{%20width:%2025%25;%20height:%2025%25;%20}%23images.grid2%20li%20{%20width:%2050%25;%20height:%2050%25;%20}img%20{%20max-width:%20100%25;%20max-height:%20100%25;%20}%20ol%20{%20clear:left;%20}%3C/style%3E%22);doc.write('%3Cnav%3E%3Ca%20href=%22javascript:document.getElementById(\'images\').setAttribute(\'class\',\'grid6\');%22%20id=%22grid6%22%3EGrid%20of%206%3C/a%3E%20%3Ca%20href=%22javascript:document.getElementById(\'images\').setAttribute(\'class\',\'grid4\');%22%20id=%22grid4%22%3EGrid%20of%204%3C/a%3E%20%3Ca%20href=%22javascript:document.getElementById(\'images\').setAttribute(\'class\',\'grid2\');%22%20id=%22grid2%22%3EGrid%20of%202%3C/a%3E%3C/nav%3E');doc.write('%3Col%20id=%22images%22%20class=%22grid4%22%3E');for(i=0;url=document.links[i];++i){image_url=url.href;if(image_url%20%26%26%20validate(image_url)){doc.write(%22%3Cli%3E%3Cimg%20src=\%22%22%20+%20transform(image_url)%20+%20%22\%22%3E%3C/li%3E%22);}}doc.write(%22%3C/ol%3E%22);doc.write(%22%3Col%3E%22);for(i=0;url=document.links[i];++i){image_url=url.href;if(image_url%20%26%26%20validate(image_url)){doc.write(%22%3Cli%3E%22+transform(image_url)+%22%3C/li%3E%22);}}doc.write(%22%3C/ol%3E%22);doc.close();})();/* by @tiagopedras */">right click here</a> and add it to your favorites.
