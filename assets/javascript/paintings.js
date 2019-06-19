// Static array of Painting Objects, each containing attributes to be used as hints and coordinates to be fed to Google Maps API
// To be used for MVP. Later versions should pull random entries from an API with sufficient information.
var paintingsArray = [{
        name: "The Adoration of the Magi",
        artist: "Giotto di Bandone",
        year: "1320",
        source: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436504/796336/main-image",
        link: "",
        ID: 436504,
        lat: 45.4118,
        log: 11.8795,
    },

    {
        name: "Dancing in Colombia",
        artist: "Fernando Botero",
        year: "1980",
        source: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/482698/1005689/restricted",
        link: "",
        ID: 482698,
        lat: 6.25184,
        log: -75.56359,
    },


    {
        name: "Wang Xizhi watching geese",
        artist: "Qian Xuan",
        year: "1295",
        source: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/40081/198958/main-image",
        link: "",
        ID: 40081,
        lat: 30.29365,
        log: 120.16142,
    },

    {
        name: "Queen Nefertari being led by Isis",
        artist: "Unknown",
        year: "1279–1213 B.C.",
        source: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/557811/1178342/main-image",
        link: "",
        ID: 557811,
        lat: 25.723163774,
        log: 32.58916431,
    },

    {
        name: "The Gulf Stream",
        artist: "Winslow Homer",
        year: "1899",
        source: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/11122/34093/main-image",
        link: "",
        ID: 11122,
        lat: 43.5333312,
        log: -70.308665432,
    }
];

for (let i = 0; i < paintingsArray.length; i++) {
    var queryURL = "https://collectionapi.metmuseum.org/public/collection/v1/objects/" + paintingsArray[i].ID;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        paintingsArray[i].link += response.objectURL;
    })
}