<template>
	<div class="slider-presentation__column gallery-slider-presentation">
		<p title="Слоган игры." class="gallery-slider-presentation__phrase">
			{{ phrase }}
		</p>
		<div class="gallery-slider-presentation__block-columns">
			<div class="gallery-slider-presentation__column">
				<template v-for="({ alt, path, _id }, index) of gameData.miniPosters" :key="_id">
					<div title="Галерея игры." v-if="index < 2" :class="`gallery-slider-presentation__image-container${index === 0 ? ' gallery-slider-presentation__image-container_first' : ''}`">
						<img class="gallery-slider-presentation__image" :src="getImgUrl(path)" :alt="alt" />
					</div>
				</template>
			</div>
			<div class="gallery-slider-presentation__column">
				<div title="Галерея игры." class="gallery-slider-presentation__image-container">
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
