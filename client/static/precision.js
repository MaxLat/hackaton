// recuperer le parametre de l'URL
var url = new URLSearchParams(document.location.search);
var userid = url.get("id");


console.log(userid);

// Appel de L'API 
var url = '/liste/' + userid;

console.log(url)


//debut de la requete 
var xhr = new XMLHttpRequest();

xhr.open('GET', url ,true);
var maListe


xhr.send(null);

xhr.addEventListener('readystatechange', function() {

	 if (xhr.readyState === XMLHttpRequest.DONE) 
	 { // La constante DONE appartient à l'objet XMLHttpRequest, elle n'est pas globale
        //console.log(xhr.responseText)
        var response = JSON.parse(xhr.responseText);
		mon_ul = document.getElementById("listePrecision")

		console.log(xhr.responseText);

		console.log(response.Nom)

		for( item in response)
		{
			console.log(response[item]);
			mon_li = document.createElement("li")
			mon_li.innerHTML = item + " = " + response[item]
			mon_ul.appendChild(mon_li);
		}



     }

});

document.getElementById("id").value = userid;

