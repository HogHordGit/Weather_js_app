import { getData } from "./request.js";
import { createHeader } from "./appCreation/appHeader.js";
import { createContent } from "./appCreation/appContent.js";
import { withoutInterner } from "./helper.js";

const app = async function() {

    const weather = await getData(JSON.parse(localStorage.getItem("city")) || "Odesa")
    .catch(err => {
        const block = withoutInterner();

        document.body.append(block);
    });

    const header = createHeader(weather.name);
    const content = createContent(weather);

    document.body.append(header);
    document.body.append(content);

    console.log(weather);
};

app();