import { getData } from "./request.js";
import { createHeader } from "./appCreation/appHeader.js";
import { createContent } from "./appCreation/appContent.js";

const app = async function() {

    const weather = await getData("Киев");

    const header = createHeader(weather.name);
    const content = createContent(weather);

    document.body.append(header);
    document.body.append(content);

    console.log(weather);
};

app();