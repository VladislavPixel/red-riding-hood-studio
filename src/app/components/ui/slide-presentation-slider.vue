<template>
	<div class="slider-presentation__slide">
		<div title="Название игры." class="slider-presentation__title-game">
			<span>{{ nameGame }}</span>
		</div>
		<img title="Основной постер." :src="getImgUrl(path)" class="slider-presentation__poster-img" :alt="alt" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	props: {
		path: {
			type: String,
			default: ""
		},
		nameGame: {
			type: String,
			default: ""
		},
		alt: {
			type: String,
			default: ""
		}
	},
	methods: {
		getImgUrl(path: string) {
			return require("@/app/assets/images/posters-games/" + path);
		}
	}
});
</script>
