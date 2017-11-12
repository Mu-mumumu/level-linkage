if(!document.getElementsByClassName) {
	document.getElementsByClassName = function(className, element) {
		var children = (element || document).getElementsByTagName('*');
		var elements = new Array();
		for(var i = 0; i < children.length; i++) {
			var child = children[i];
			var classNames = child.className.split(' ');
			for(var j = 0; j < classNames.length; j++) {
				if(classNames[j] == className) {
					elements.push(child);
					break;
				}
			}
		}
		return elements;
	};
}
var linkAge=(function(){
	var linkData;
	var cityData=[];
	var districtData=[];
	var linkInit=function(selector,url,fir,sec,thi){
		if(url){
			var xhr=new XMLHttpRequest()|| new ActiveXObject("Microsoft.XMLHTTP");
			xhr.open('GET',url,true);
			xhr.onreadystatechange=function(){
				if(xhr.readyState==4){
					if(xhr.status==200||xhr.status==304){
						var o=0
						linkData=xhr.responseText;
						var data=JSON.parse(linkData);							

//						console.log(data[0])
						var linkContent=document.getElementsByClassName(selector);
						var linkDom='<div class="linkage">';
						linkDom+='<select><option>--请选择--</option>'
						for(k in data[0]){
							cityData.push(data[0][k])
							districtData.push(data[0][k])
							linkDom+='<option value='+(o++)+'>'+k+'</option>'
						}

						linkDom+='</select><span>'+fir+'</span>'
						linkDom+='<select><option>--请选择--</option></select><span>'+sec+'</span>'
						linkDom+='<select><option>--请选择--</option></select><span>'+thi+'</span>'
						linkDom+='</div>';
						for(var i=0;i<linkContent.length;i++){
							linkContent[i].innerHTML=linkDom;				
						}
						
					}
				}
			}
			xhr.send();
		}
		function linkRender(selector){

		}
	}
	return {
		linkInit:linkInit
	}
})();
