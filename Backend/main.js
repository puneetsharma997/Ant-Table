const express = require("express");
const cors = require("cors")
const app = express();
app.use(express.static("assets/images"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

let data = [
    {
        key: '1',
        batchId: '#123',
        family: 'Sarees',
        source: 'Amazon',
        results: 85,
        imported: 85,
        lastUpdated: 'March 10, 2022',
        link: 'https://www.google.com',
        // img: sarees,
        pic: 'sarees.jpeg'
    },
    {
        key: '2',
        batchId: '#456',
        family: 'Handbags',
        source: 'Amazon',
        results: 12,
        imported: 12,
        lastUpdated: 'March 10, 2022',
        link: 'https://www.amazon.in',
        pic: 'handbags.jpg',
    },
    {
        key: '3',
        batchId: '#789',
        family: 'Salwar Suit',
        source: 'Flipkart',
        results: 9,
        imported: 9,
        lastUpdated: 'March 10, 2022',
        link: 'https://www.flipkart.com',
        pic: 'salwarsuit.jpeg',
    },
    {
        key: '4',
        batchId: '#849',
        family: 'Accessories',
        source: 'Amazon',
        results: 300,
        imported: 300,
        lastUpdated: 'March 10, 2022',
        link: 'https://www.jiomart.com/',
        pic: 'accessories.jpg',
    },
]

app.get("/rubick", function (req, res) {
    // console.log(req)
    res.send(data);
})

app.delete('/rubick/delete', function (req, res) {
    var keys = req.body.keys;
    data = [...data.filter(tempdata => keys.indexOf(tempdata.key) < 0)];
    res.send(data);
})


app.listen(4000, function (err) {
    if (!err) {
        console.log("server running");
    }
});
