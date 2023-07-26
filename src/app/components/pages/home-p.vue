<template>
	<div class="block-content__home home-block">
		<div class="home-block__container _container">
			<data-presentation-slider-global-loader>
				<presentation-slider :classes="'home-block'" />
			</data-presentation-slider-global-loader>
			<data-games-images-block-global-loader>
				<images-block-gallery :classes="'home-block'" />
			</data-games-images-block-global-loader>
			<data-video-global-loader>
				<video-block :classes="'home-block'" />
			</data-video-global-loader>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DataPresentationSliderGlobalLoader from "@/app/components/hoc/data-presentation-slider-global-loader.vue";
import DataGamesImagesBlockGlobalLoader from "@/app/components/hoc/data-games-images-block-global-loader.vue";
import DataVideoGlobalLoader from "@/app/components/hoc/data-video-global-loader.vue";

export default defineComponent({
	components: {
		DataPresentationSliderGlobalLoader,
		DataGamesImagesBlockGlobalLoader,
		DataVideoGlobalLoader
	}
});
</script>
