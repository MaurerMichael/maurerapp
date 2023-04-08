import { sequence } from "@sveltejs/kit/hooks";
import { routingHook } from "$lib/server/hooks/routing.hook.js";


export const handle = sequence(routingHook)
