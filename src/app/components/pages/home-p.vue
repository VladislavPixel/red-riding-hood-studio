<template>
	<div class="block-content__home home-block">
		<div class="home-block__container _container">
			<data-presentation-slider-global-loader :classes="'home-block'">
				<presentation-slider :classes="'home-block'" />
			</data-presentation-slider-global-loader>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DataPresentationSliderGlobalLoader from "@/app/components/hoc/data-presentation-slider-global-loader.vue";

export default defineComponent({
	components: {
		DataPresentationSliderGlobalLoader
	}
});
</script>
