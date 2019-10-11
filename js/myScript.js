var movies =

    [
    {

        "name": "The Godfather",

        "productionYear": "1972",

        "image": "./img/godfather.jpg",

        "description": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."

    },
    {

        "name": "The Dark Knight",

        "productionYear": "2008",

        "image": "./img/darkknight.jpg",

        "description": "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice."

    }, 
    {

        "name": "Pulp Fiction",

        "productionYear": "1994",

        "image": "./img/pulpfiction.jpg",

        "description": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."


    },
    {

        "name": "Casablanca",

        "productionYear": "1942",

        "image": "./img/casablanca.jpg",

        "description": "A cynical American expatriate struggles to decide whether or not he should help his former lover and her fugitive husband escape French Morocco."

    },
    {

        "name": "Avengers: Endgame",

        "productionYear": "2019",

        "image": "./img/endgame.jpg",

        "description": "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe."

    },
    {

        "name": "Inception",

        "productionYear": "2010",

        "image": "./img/inception.jpg",

        "description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O."


    },

]

function createHeader(){
	let header = document.createElement("HEADER");
	header.id = "header";
	document.getElementById("mainSite").appendChild(header);

	let heading = document.createElement("h1");
	heading.innerHTML ="MovieFactory";
	header.appendChild(heading);

	let navbar = document.createElement("nav");
	navbar.className = "navbar";

	let ul = document.createElement("ul");
	let li1 = document.createElement("li");
	let li2 = document.createElement("li");
	li1.innerHTML = `<a href="index.html" title="Home">Home</a>`;
	li2.innerHTML = `<a href="index.html" title="Home">Movies</a>`;
	header.appendChild(navbar);
	navbar.appendChild(ul);
	ul.appendChild(li1);
	ul.appendChild(li2);

}

function creatMainContent(){
	let main = document.createElement('main');
	let contentHeader = document.createElement("div");
	contentHeader.id = "contentHeader"
	contentHeader.innerHTML =`<h2>Movies</h2><span>▲▼  Sort</span>`;

	document.getElementById("mainSite").appendChild(main);
	main.appendChild(contentHeader);

}

function createMovies(){
	let movieFlexBox = document.createElement("div");
	movieFlexBox.className ="flex";
	document.querySelector("main").appendChild(movieFlexBox);

	for(i=0; i < movies.length; i++){
		let movieFlexChildren = document.createElement("div");
		let movieImg = document.createElement("img");
		let obj = movies[i];
		movieImg.src = obj.image;
		let likeBtnDiv = document.createElement("div");
		likeBtnDiv.id = "likediv";
		likeBtnDiv.innerHTML = `Like <img src="./img/thumbsup.png" id="likebutton">`;
		let description = document.createElement("div");
		description.innerHTML = `<h3>${obj.name}</h3>Year: ${obj.productionYear} <br><br> Synopsis:<br>  ${obj.description} `;
		movieFlexBox.appendChild(movieFlexChildren);
		movieFlexChildren.appendChild(movieImg);
		movieFlexChildren.appendChild(description);
		movieFlexChildren.appendChild(likeBtnDiv);

	}
}
createHeader();
creatMainContent();
createMovies();


