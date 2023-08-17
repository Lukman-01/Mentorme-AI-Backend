const app = require("./app");
const {Port} = process.env;

const startApp = () => {
    app.listen(Port, () =>{

        console.log(`App is listening at port ${Port}`);
    });
};

startApp();