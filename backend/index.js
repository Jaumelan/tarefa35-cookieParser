const express = require("express");
const port = 3005;
const cors = require("cors");
const app = express();
const sessionControl = require("./routes/sessionControl");

app.use(express.urlencoded({extended:true}));
app.use(cors({origin: ["http://localhost:8180"], credentials: true, optionsSuccessStatus:200}));
app.use("/", sessionControl);

app.listen(port, err => {
    if(err) {
        return console.log(`ERROR ${err}`);
    } else {
        console.log(`Listening at port ${port}`);
    }
    
});