// Static array of Painting Objects, each containing attributes to be used as hints and coordinates to be fed to Google Maps API
// To be used for MVP. Later versions should pull random entries from an API with sufficient information.
var paintingsArray = [{
        name: "Mona Lisa",
        artist: "Leonardo da Vinci",
        year: "1503-1506",
        source: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/687px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
        lat: 43.7696,
        log: 11.2558,
    },

    {
        name: "The Starry Night",
        artist: "Vincent Van Gogh",
        year: "1889",
        source: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/450px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
        lat: 43.7766,
        log: 4.8352,
    },

    {
        name: "Lofty Mount Lu",
        artist: "Shen Zhou",
        year: "1467",
        source: "https://archive.shine.cn/newsimage/2016/07/22/020160722210459.bmp",
        lat: 29.5594,
        log: 115.9934
    },

    {
        name: "The Two Fridas",
        artist: "Frida Kahlo",
        year: "1939",
        source: "https://www.fridakahlo.org/images/paintings/the-two-fridas.jpg",
        lat: 19.4326,
        log: 99.1332
    },

    {
        name: "American Gothic",
        artist: "Grant Wood",
        year: "1930",
        source: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg/800px-Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg",
        lat: 41.587830982,
        log: -93.61916419
    }
];