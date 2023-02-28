function displayHikeInformation() {
    // Retreive the document id from the URL
    let params = new URL(window.location.href) // get the url from the search bar.
    let ID = params.searchParams.get("docID");
    console.log(ID);

    db.collection("hikes").doc(ID).get().then(thisHikes => {
        hikeInfo = thisHikes.data();
        hikeCode = hikeInfo.code;
        hikeName = hikeInfo.name;

        document.getElementById("hikeName").innerHTML = hikeName;
        let imgEvent = document.querySelector(".hike-img");
        imgEvent.src = "../images/" + hikeCode + ".jpg";
    });
}

displayHikeInformation();