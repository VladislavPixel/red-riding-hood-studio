<template>
	<div :class="`${classes}__presentation-slider slider-presentation`">
		<div class="slider-presentation__column">Левая часть</div>
		<div class="slider-presentation__column">Правая часть</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	nameComponent: "presentation-slider",
	props: {
		classes: {
			type: String,
			default: "some-component"
		}
	},
	mounted() {
		console.log(this.$store.state.presentationSliderData.data);
	}
});
</script>
