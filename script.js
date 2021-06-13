
var travelImages = [ "media/street-1.jpg", "media/street-2.jpg", 
"media/shop.jpg", "media/window.jpg" ];
var descs = ["Visit Copenhagen", "Check out the view from the top of the Eiffel Tower",
"walk across the Golden Gate Bridge"];
		
var urls = [ "https://www.japanvisitor.com/japan-city-guides/karuizawa-guide", "https://www.japan-guide.com/e/e6317.html", 
"https://www.japan-guide.com/e/e6030.html", "https://www.japan-guide.com/e/e5200.html" ]
		
function displayImage(index)
	{
		var img = document.getElementById("myImage");
		img.src = travelImages[index];
	}
	
function openWindow(url)
	{
		var win = open(url, "", "height=200,width=300,top=100,left=100, menubar=no");
		var timer = setTimeout(function() {
			win.close();	
			}, 3000);
				
	}