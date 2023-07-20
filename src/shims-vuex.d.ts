import { Store } from "@/app/store";

declare module "@vue/runtime-core" {
	interface ComponentCustomProperties {
		$store: Store;
	}
}
