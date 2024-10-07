require("dotenv/config");
const app = require("./src/app.js");

const PORT = process.env.PORT || 3200;

app.listen(PORT, () => console.log(`Server ouvindo na porta ${PORT}`));
