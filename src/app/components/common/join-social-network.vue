<template>
	<div :class="`${classes}__social-network-join join-social-network`">
		<div class="join-social-network__container _container">
			<div class="join-social-network__text">Присоединяйтесь:</div>
			<ul class="join-social-network__links-list">
				<li v-for="{ _id, title, alt, img } of socialNetworkData" :key="_id">
					<router-link :title="title" class="join-social-network__link" :to="'/foo'">
						<img class="join-social-network__icon" :alt="alt" :src="getImgUrl(img)" />
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { socialData } from "@/app/core/social-network-data-list";

export default defineComponent({
	nameComponent: "join-social-network",
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
