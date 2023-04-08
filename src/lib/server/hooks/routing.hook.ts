import type { Handle } from "@sveltejs/kit";


export const routingHook: Handle = async ({ event, resolve }) => {


  return resolve(event);
};
