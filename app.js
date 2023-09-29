import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

// configurations
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const Users = [
    "jamesbondkingdom@gmail.com",
    "jamesbondkingdom2@gmail.com",
    "jamesbondkingdom3@gmail.com",
]

// get method
app.get("/", (req, res) => {
    console.log("welcome to anymiro cracked server");
    console.log("All Pro users : -------------------->");
    console.log(Users);
    res.send({ welcome: "anymiro server" })
});

app.get("/user", (req, res) => {
    const userEmail = req.query.email;
    const isPro = Users.includes(userEmail);
    if (isPro) {
        res.status(200).json(true);
        console.log("Pro User");
    } else {
        res.status(400).json(false);
        console.log("Fake User");
    }
});

// PORT
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server Port: ${PORT}`));