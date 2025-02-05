import { app } from "./app.js";
import dotenv from "dotenv";
import { dbConnect } from "./db/dbConnect.js"

dotenv.config({
    path: ".env"
});

const port = 9000 || process.env.PORT;

dbConnect()

    .then(() => {
        app.on("err", (err) => {
            console.log("somthing went wrong while connecting db: ", err);
        });

        app.listen(port, () => {
            console.log(`http://localhost:${port}`);
        });
    })

    .catch((err) => {
        console.log("Failed to build connectin with database: ", err);
    });