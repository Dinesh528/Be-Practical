var section = document.querySelector('#post');

var baseUrl = 'https://jsonplaceholder.typicode.com/posts';

// AJAX request (Asynchronous Javascrit And XML)
var request = new XMLHttpRequest();
	request.open('GET',baseUrl);
	request.responseType = 'text';
	request.send();

// handling response
request.onload  = function() {
	var x = request.response;
	var myRes = JSON.parse(x);
		console.log(myRes);

	handlePost(myRes);
}

function handlePost(jsonObj)
{
	for(i=0; i< jsonObj.length; i++) {
		var myArticle = document.createElement('article');
		var myH2 = document.createElement('h2');
		var myPara = document.createElement('p');

		myH2.textContent = jsonObj[i].userId + '' + jsonObj[i].id + ' ' + jsonObj[i].title;
		myPara.textContent = jsonObj[i].body;

		myArticle.appendChild(myH2);
		myArticle.appendChild(myPara);

		section.appendChild(myArticle);
	}
}