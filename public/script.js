window.addEventListener('load', function(){
	var textinput = document.getElementById('typeahead');
	textinput.addEventListener('keyup', function(event){
		showSuggestions(event);
	});
	window.xhr = new XMLHttpRequest();
});

function showSuggestions(event) {
	var input = document.getElementById('typeahead');
	var list = document.getElementById('suggestions');
	var minChars = 2;
	if(input.value.length < minChars){
		return;
	}else{
		window.xhr.abort();
		window.xhr.onreadystatechange = function onResponse(response) {
			if(this.readyState == 4 && this.status == 200){
				var data = JSON.parse(this.responseText);
				console.log(data);
				list.innerHTML = '';
				data.forEach(function(obj){
					var option = document.createElement('option');
					option.value = obj;
					list.appendChild(option);
				});
			}
		}
		window.xhr.open('GET', 'http://localhost:3000/data?str=' + input.value, true);
		window.xhr.send();
	}
}