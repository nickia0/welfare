/** 示例
	<p>
		<a href="https://news.qq.com/FERD/cjRedDown.htm" target="_blank">腾讯新闻-领红包</a>
	</p>
*/
{
	function loadxml(xmlurl){
		try{
			if (window.XMLHttpRequest){
				// IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
				xhttp = new XMLHttpRequest();
			} else {
				// IE6, IE5 浏览器执行代码
				xhttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
			xhttp.open("GET",xmlurl,false);
			xhttp.send();
			xmlDoc = xhttp.responseXML;
		}catch(err){
			try{
				//IE查看本地测试可用
				xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
				xmlDoc.async = false;
				xmlDoc.load(xmlurl);
			}catch(err){
				alert("loadxml(): "+err);
			}
		}
		return xmlDoc;
	}
}