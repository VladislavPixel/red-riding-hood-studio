<template>
	<nav :class="`${classes}__navbar navbar`">
		<ul class="navbar__list">
			<li v-for="({ _id, text, path, title }, index) of routers" :key="_id">
				<router-link v-if="index === 0" :title="title" class="navbar__link" :to="path">
					<img class="navbar__home-icon" src="@/app/assets/images/icons/home.svg" />
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

export default defineComponent({
	nameComponent: "navbar",
	props: {
		classes: {
			type: String,
			default: "some-component"
		}
	},
	computed: {
		routers() {
			return routersForView;
		}
	}
});
</script>
