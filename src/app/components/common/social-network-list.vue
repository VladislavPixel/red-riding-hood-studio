<template>
	<ul :class="`${classes}__list-social-network list-social-network`">
		<li v-for="{ _id, title, alt, img, path } of socialNetworkData" :key="_id">
			<a target="_blank" :title="title" class="list-social-network__link" :href="path">
				<img :alt="`${alt}`" class="list-social-network__icon" :src="getImgUrl(img)" />
			</a>
		</li>
	</ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { socialData } from "@/app/core/social-network-data-list";
import type { ISocialNetworkDataItem } from "@/app/type/social-network-data-item";

export default defineComponent({
	nameComponent: "social-network-list",
	props: {
		classes: {
			type: String,
			default: "some-component"
		}
	},
	computed: {
		socialNetworkData(): ISocialNetworkDataItem[] {
			return socialData;
		}
	},
	methods: {
		getImgUrl(nameFile: string) {
			return require("@/app/assets/images/icons/social-network-icons/" + nameFile);
		}
	}
});
</script>
