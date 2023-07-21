<template>
	<div :class="`${classes}__presentation-slider slider-presentation`">
		<left-column-presentation-slider />
		<right-column-presentation-slider :gameData="dataGames[currentSlide]" :phrase="dataGames[currentSlide].phrase" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LeftColumnPresentationSlider from "@/app/components/ui/left-column-presentation-slider.vue";
import RightColumnPresentationSlider from "@/app/components/ui/right-column-presentation-slider.vue";
import { mapState } from "vuex";

export default defineComponent({
	nameComponent: "presentation-slider",
	components: {
		LeftColumnPresentationSlider,
		RightColumnPresentationSlider
	},
	data() {
		return {
			currentSlide: 0
		};
	},
	computed: {
		...mapState({
			dataGames: (state: any) => state.presentationSliderData.data
		})
	},
	props: {
		classes: {
			type: String,
			default: "some-component"
		}
	}
});
</script>
