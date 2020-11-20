const mongoose = require("mongoose");
const chalk = require("chalk");

mongoose.connect("mongodb+srv://veganlife:veganlife@cluster0.9q5tu.mongodb.net/veganlife?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, chalk.red("connection error:")));
db.once("open", () => console.log(chalk.magenta("Database connected")));
