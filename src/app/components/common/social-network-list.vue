<template>
	<ul :class="`${classes}__list-social-network list-social-network`">
		<!-- УСТАНОВИТЬ ССЫЛКУ ИКОНКИ, ПО КОТОРОЙ ОНА ОТСЫЛАЕТ -->
		<li v-for="{ _id, title, alt, img } of socialNetworkData" :key="_id">
			<router-link :title="title" class="list-social-network__link" :to="'/foo'">
				<img :alt="`${alt}`" class="list-social-network__icon" :src="getImgUrl(img)" />
			</router-link>
		</li>
	</ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { socialData } from "@/app/core/social-network-data-list";

export default defineComponent({
	nameComponent: "social-network-list",
	props: {
		classes: {
			type: String,
			default: "some-component"
		}
	},
	computed: {
		socialNetworkData() {
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
