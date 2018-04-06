var xhr = new XMLHttpRequest();

xhr.open('GET', '/liste',true);
var maListe



xhr.send(null);

xhr.addEventListener('readystatechange', function() {

	 if (xhr.readyState === XMLHttpRequest.DONE) 
	 { // La constante DONE appartient à l'objet XMLHttpRequest, elle n'est pas globale
        //console.log(xhr.responseText)
        var response = JSON.parse(xhr.responseText);
		mon_ul = document.getElementById("listeclient")

        response.forEach(function(item)
        {
			mon_li = document.createElement("li")
			boutonsupprimer = document.createElement("button");
			boutonsupprimer.className = "remove"
			
			boutonsupprimer.addEventListener("click" , function()
			{
				console.log("ca marche");
			})

			mon_li.innerHTML = "<span> <a href=/precision?id=" + item._id + ">" + item.Nom + " </a>&nbsp &nbsp &nbsp &nbsp;"
			boutonsupprimer.innerHTML = "supprimer"
			mon_li.appendChild(boutonsupprimer)
			mon_ul.appendChild(mon_li);
        });
        
        

     }

});







