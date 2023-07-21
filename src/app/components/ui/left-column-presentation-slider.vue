<template>
	<div class="slider-presentation__column">
		<div ref="block-posters" :style="styleBlockPosters" class="slider-presentation__block-posters">
			<slide-presentation-slider v-for="{ _id, nameGame, posterGameNameFile, alt } of dataGames" :key="_id" :path="posterGameNameFile" :nameGame="nameGame" :alt="alt" />
			<div class="slider-presentation__dots-controller">
				<span v-for="({ _id }, i) of dataGames" :class="`${current === i ? 'active' : ''}`" @click="updateValueSlide(i)" :key="_id"></span>
			</div>
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
		}),
		styleBlockPosters() {
			return { transform: "translateX(" + this.valueTranslateX + "px)" };
		},
		valueTranslateX() {
			const elementHTML: any = this.$refs["block-posters"];

			return (elementHTML.offsetWidth + 15) * this.current;
		}
	},
	methods: {
		updateValueSlide(newValueSlide: number) {
			this.$emit("update-slide", { event: newValueSlide });
		}
	},
	props: {
		current: {
			type: Number,
			default: 0
		}
	}
});
</script>
