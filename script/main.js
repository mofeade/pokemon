//set variables for images, headline, subtext, main content & an empty variable called appliedClass

(function () {
	var pokeImg = document.querySelectorAll('nav li'),
		critterName = document.querySelector('.click-header'),
		critterPic = document.querySelector('.pokemon-large'),
		critterInfo = document.querySelector('.content-secion p'),
		habName = document.querySelector('.habitat-header'),
		critterHab = document.querySelector('.habitat');


		function makeRequest() {
			httpRequest = new XMLHttpRequest();

			if (!httpRequest) {
				console.log('your brower aint shit');
				return false;
			}

			 httpRequest.onreadystatechange = showPokemonInfo;
			 httpRequest.open('GET', 'includes/getPokemon.php' + '?critter' + this.id);
			 httpRequest.send();
		}

		function showPokemonInfo() {
		 	if (httpRequest.readystate === XMLHttpRequest.DONE && httpRequest.status ===200){
		 		//parse stringed result
		 		var	pokeData = JSON.parse(httpRequest.responseText);
		 			critterName.firstChild.nodeValue = pokeData.pokeName;


		 		[].forEach.call(document.querySelectorAll('.hidden'), function(item){
		 			item.classList.remove('hidden');
		 		});


				critterPic.src = "images/" + pokeData.pokeImage + ".png";
		 		critterInfo.firstChild.nodeValue = pokeData.pokeDesc;
		 		habName.firstChild.nodeValue = pokeData.pokeName + "lives here!";
		 		critterHab.src = "images/" + pokeData.bgImage + ".jpg";

		
		 	}
		 }



		//event handling
		[].forEach.call(pokeImg, function(bbk) {
			bbk.addEventListener('click', makeRequest, false);
		});

})();