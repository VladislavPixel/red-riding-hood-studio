<template>
	<div class="slider-presentation__column">
		<div class="slider-presentation__block-posters">
			<slide-presentation-slider v-for="{ _id, nameGame, posterGameNameFile, alt } of dataGames" :key="_id" :path="posterGameNameFile" :nameGame="nameGame" :alt="alt" />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";
import SlidePresentationSlider from "@/app/components/ui/slide-presentation-slider.vue";

export default defineComponent({
	components: {
		SlidePresentationSlider
	},
	computed: {
		...mapState({
			dataGames: (state: any) => state.presentationSliderData.data
		})
	}
});
</script>
