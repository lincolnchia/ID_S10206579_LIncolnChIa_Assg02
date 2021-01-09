page = 0

animeList(page);

document.getElementById('nextpage').addEventListener('click', function(){
    $("#mainpage").empty()
    page+=1
    animeList(page);
})

document.getElementById('preivouspage').addEventListener('click', function(){
    if (page > 0){
        $("#mainpage").empty()
        page-=1
        animeList(page);
    }
    else{
        $("#mainpage").empty()
        animeList(page);
    }
})

document.getElementById('search-btn').addEventListener('click', function(){
    const searchdata = document.getElementById('search-txt').value
    if(searchdata == "")
        console.log("none")
    
    else
    FindAnime(searchdata)
})

function FindAnime(searchdata){
    
}

function animeList(page){
    fetch("https://kitsu.io/api/edge/anime?page[limit]=5&page[offset]="+5*page)
    .then(res=>res.json())
    .then(data=>{
        for (i=0;i<data["data"].length;i++){
            console.log(data["data"][i]);
            console.log("in loop: "+i)
            createDiv(data["data"][i])
        }
        function createDiv(anime){
            // variables needed for div
            let anime_id = anime["id"]
            let en_title = anime["attributes"]['canonicalTitle']
            let jp_title = anime["attributes"]['titles']['ja_jp']
            let age_rating = anime["attributes"]["ageRating"]
            let age_Rguide = anime["attributes"]["ageRatingGuide"]
            let coverImageLink = anime["attributes"]["posterImage"]["original"]
            let air_date = anime["attributes"]["startDate"]
            let status = anime["attributes"]["status"]
            let slug = anime["attributes"]["slug"]

            // creating div
            animeDiv = document.createElement('div');
            animeDiv.classList.add('anime-card')
            animeDiv.id = 'animeId';
            animeDiv.innerHTML = "\
            <h3>"+anime_id+"</h3>\
            <h1>"+en_title+"</h1>\
            <h2>"+jp_title+"</h2>\
            <img src='"+coverImageLink+"' alt='anime-cover-picture'>\
            <h3>Air Date: "+air_date+"</h3>\
            <h3>Status: "+status+"</h3>\
            <h3>Age Rating: "+age_rating+"</h3>\
            <h3>Age Guide: "+age_Rguide+"</h3>\
            ";
            $(".page").append(animeDiv);
        }
        
    })    
}

function AnimeLink(animeDiv){
    fetch("https://kitsu.io/api/edge/anime?page[limit]=5&page[offset]="+5*page)
    .then(res=>res.json())
    .then(data=>{
        for (i=0;i<data["data"].length;i++){
            console.log(data["data"][i]);
            console.log("in loop: "+i)
            createDiv(data["data"][i])
        }
    })
    if (slug )
}
           