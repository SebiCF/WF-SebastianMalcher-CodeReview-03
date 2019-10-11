

function initPage(){
createHeader();
createMain();
createMovieFlexBox();
createMovies(movies);
increaseCounterOnClick(movies);
}

initPage();

function createHeader() {

    let header = document.createElement("HEADER");
    header.id = "header";
    document.getElementById("mainSite").appendChild(header);
    let heading = document.createElement("h1");
    heading.innerHTML = "MovieFactory";
    header.appendChild(heading);
    let navbar = document.createElement("nav");
    navbar.className = "navbar";
    let ul = document.createElement("ul");
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    li1.innerHTML = `<a title="Home">Home</a>`;
    li2.innerHTML = `<a id="reloadDefaultMovies" title="Movies">Movies</a>`;
    header.appendChild(navbar);
    navbar.appendChild(ul);
    ul.appendChild(li1);
    ul.appendChild(li2);
    document.getElementById("reloadDefaultMovies").addEventListener("click", function(){
    	createMovies(movies);
    });


}

function createMain() {
    
    let main = document.createElement('main');
    let contentHeader = document.createElement("div");
    contentHeader.id = "contentHeader"
    contentHeader.innerHTML = `<h2>Movies</h2><span id="sortBtn">▲▼  Sort</span>`;
	 document.getElementById("mainSite").appendChild(main);
    main.appendChild(contentHeader);
    document.getElementById("sortBtn").addEventListener("click", sortMoviesByLikes);

}

function createMovieFlexBox() {

    let movieFlexBox = document.createElement("div");
    movieFlexBox.className = "flex";
    document.querySelector("main").appendChild(movieFlexBox);
    }

function createMovies(movies) {
	document.querySelector(".flex").innerHTML = " ";
    for (i = 0; i < movies.length; i++) {
        let movieFlexChildren = document.createElement("div");
        let movieImg = document.createElement("img");
        movieImg.src = movies[i].image;
        let likeBtnDiv = document.createElement("div");
        likeBtnDiv.className = "likediv";
        likeBtnDiv.innerHTML = `Like: <img src="./img/thumbsup.png" class="likebutton" id="likeBtn${i}"> <div id="likeAmount${i}" value="">${movies[i].likeCount}</div>`;
        let description = document.createElement("div");
        description.innerHTML = `<h3>${movies[i].name}</h3>Year: ${movies[i].productionYear} <br><br> Synopsis:<br>  ${movies[i].description} `;
        document.querySelector(".flex").appendChild(movieFlexChildren);
        movieFlexChildren.appendChild(movieImg);
        movieFlexChildren.appendChild(description);
        movieFlexChildren.appendChild(likeBtnDiv);
    }
}

function increaseCounterOnClick(movies) {
    let allLikeBtns = document.querySelectorAll(".likebutton")
    allLikeBtns.forEach(function(elem) {
            elem.addEventListener("click", function(e) {
                for (i = 0; i < allLikeBtns.length; i++) {
                    if (e.target.id == "likeBtn" + i) {
                        let likeAmountId = "likeAmount" + i;
                        let currentLikeCount = parseInt(movies[i].likeCount);
                        movies[i].likeCount = currentLikeCount + 1;
                        document.getElementById(likeAmountId).innerHTML = movies[i].likeCount;
                    }
                }
            })
        }



    );
}


function sortMoviesByLikes() {
    
    let moviesByLikes = movies.slice(0);
    moviesByLikes.sort(function(a, b) {
        return b.likeCount - a.likeCount;
    });
    document.querySelector(".flex").innerHTML = " ";
	createMovies(moviesByLikes);
    increaseCounterOnClick(moviesByLikes);
}


