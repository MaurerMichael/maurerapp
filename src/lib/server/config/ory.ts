import {FrontendApi, Configuration} from "@ory/client";
import type { Handle } from "@sveltejs/kit";
import {config} from "dotenv"
config()

export const oryFrontend = new FrontendApi(
    new Configuration({
        basePath: process.env.ORY_BASE_PATH,
        baseOptions: {
            withCredentials: true
        }
    })
)

export const sessionHook: Handle = async ({ event, resolve }) => {
    if(!event.locals.sessionRequired){
        return resolve(event)
    }

    const {data: session} = await oryFrontend.toSession()
    if(session) {
        event.locals.session = session
    }

    return resolve(event);
};
