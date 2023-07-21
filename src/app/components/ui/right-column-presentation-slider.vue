<template>
	<div class="slider-presentation__column gallery-slider-presentation">
		<p class="gallery-slider-presentation__phrase">
			{{ phrase }}
		</p>
		<div class="gallery-slider-presentation__block-columns">
			<div class="gallery-slider-presentation__column">
				<template v-for="({ alt, path }, index) of gameData.miniPosters" :key="path">
					<div v-if="index < 2" class="gallery-slider-presentation__image-container">
						<img class="gallery-slider-presentation__image" :src="getImgUrl(path)" :alt="alt" />
					</div>
				</template>
			</div>
			<div class="gallery-slider-presentation__column">
				<div class="gallery-slider-presentation__image-container">
					<img :src="getImgUrl(gameData.miniPosters[2].path)" :alt="gameData.miniPosters[2].alt" class="gallery-slider-presentation__image" />
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";

export default defineComponent({
	props: {
		gameData: {
			type: Object,
			default: function () {
				return {};
			}
		},
		phrase: {
			type: String,
			default: ""
		}
	},
	computed: {
		...mapState({
			dataGames: (state: any) => state.presentationSliderData.data
		})
	},
	methods: {
		getImgUrl(path: string) {
			return require("@/app/assets/images/mini-posters/" + path);
		}
	}
});
</script>
