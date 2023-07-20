<template>
	<div :class="`${classes}__presentation-slider slider-presentation`">
		<div class="slider-presentation__column">
			<div class="slider-presentation__block-posters">
				<div class="slider-presentation__slide"></div>
			</div>
		</div>
		<div class="slider-presentation__column">Правая часть</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";

export default defineComponent({
	nameComponent: "presentation-slider",
	state: {
		currentSlide: 1
	},
	props: {
		classes: {
			type: String,
			default: "some-component"
		}
	},
	computed: {
		...mapState({
			dataGames: (state: any) => state.presentationSliderData.data
		})
	}
});
</script>
