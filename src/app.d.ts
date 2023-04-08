// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import {Session} from "@ory/client/api";

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			sessionRequired?: boolean
			session?: Session
		}
		interface PageData {
			session: null | Session | undefined
		}
		// interface Platform {}
	}
}

export {};
