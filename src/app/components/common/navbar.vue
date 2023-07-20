<template>
	<nav :class="`${classes}__navbar navbar`">
		<ul class="navbar__list">
			<li v-for="({ _id, text, path, title }, index) of routers" :key="_id">
				<router-link v-if="index === 0" :title="title" class="navbar__link" :to="path">
					<img alt="Иконка частного домика с крышей." class="navbar__home-icon" src="@/app/assets/images/icons/home.svg" />
				</router-link>
				<router-link v-else :title="title" class="navbar__link" :to="path">
					{{ text }}
				</router-link>
			</li>
		</ul>
	</nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { routersForView } from "@/app/router";
import type { IRouterForView } from "@/app/type/router-for-view";

export default defineComponent({
	nameComponent: "navbar",
	props: {
		classes: {
			type: String,
			default: "some-component"
		}
	},
	computed: {
		routers(): IRouterForView[] {
			return routersForView;
		}
	}
});
</script>
