const express = require("express");
const app = express();
const port = 8180;

app.use(express.static("public"));

app.listen(port, err => {
    if(err) {
        return console.log(`ERROR ${err}`);
    } else {
        console.log(`Listening at port ${port}`);
    }
})