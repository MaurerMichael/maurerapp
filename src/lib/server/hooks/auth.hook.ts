import {redirect} from "@sveltejs/kit";
import type { Handle } from "@sveltejs/kit";
import {oryFrontend} from "$lib/server/config/ory";

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