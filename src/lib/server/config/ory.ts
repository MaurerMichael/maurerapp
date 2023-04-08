import {FrontendApi, Configuration} from "@ory/client";
import {config} from "dotenv"
import {redirect} from "@sveltejs/kit";
config()

export const oryFrontend = new FrontendApi(
    new Configuration({
        basePath: process.env.ORY_BASE_PATH,
        baseOptions: {
            withCredentials: true
        }
    })
)


