import { sequence } from "@sveltejs/kit/hooks";
import { routingHook } from "./lib/hooks/routing.hook.js";


export const handle = sequence(routingHook)
