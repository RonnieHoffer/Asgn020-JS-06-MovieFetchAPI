document.addEventListener("DOMContentLoaded", () => {
    const search_form = document.querySelector('.search_form');
    search_form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log(e);
        const search_value = document.querySelector('#search_input')
        console.log(search_value.value);
        fetch(`http://www.omdbapi.com/?apikey=8aee70ea&s=${search_value.value}`)
            .then(e => e.json())
            .then((e) => {
                console.log(e)
                console.log(e.Search)
                e.Search.forEach((element) => {
                    console.log(`${element.Title}, ${element.Year}`)
                    const list_1 = document.querySelector(".search_results");
                    const element_1 = document.createElement("div");
                    element_1.className = "movie_element";
                    list_1.append(element_1);

                    const select_button = document.createElement("button");
                    select_button.className = "select_button";
                    // select_button.innerHTML = "<img class='film_reel' src=''>";
                    element_1.append(select_button);
                    select_button.addEventListener("click", (event) => {
                        display_element = document.querySelector(".movie_details");
                        display_element.innerHTML = "";
                        poster = document.createElement("img");
                        poster.src=element.Poster;
                        display_element.append(poster);
                        pp_1 = document.createElement("p");
                        pp_1.innerText = element.Title
                        display_element.append(pp_1);
                        pp_2 = document.createElement("p");
                        pp_2.innerText = element.Year;
                        display_element.append(pp_2);
                    });
                    
                    const p_1 = document.createElement("p");                    
                    p_1.innerText = element.Title;
                    element_1.append(p_1);
                    
                    const p_2 = document.createElement("p"); 
                    p_2.innerText = element.Year;
                    element_1.append(p_2);
                })
            })
            .catch()
    })
});