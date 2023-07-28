<template>
	<div class="slider-presentation__column">
		<div ref="block-posters" :style="styleBlockPosters" class="slider-presentation__block-posters">
			<slide-presentation-slider v-for="({ _id, nameGame, posterGameNameFile, alt }, index) of arrayWithClonning" :key="_id + index" :path="posterGameNameFile" :nameGame="nameGame" :alt="alt" />
		</div>
		<div title="Начните перелистывать слайдер игр." class="slider-presentation__dots-controller">
			<span v-for="({ _id }, i) of dataGames" :class="`${current === i ? 'active' : i === current + 1 ? 'extreme' : current - 1 === i ? 'extreme' : ''}`" @click="updateValueSlide(i), updateLastEventName('update:dots-controller')" :key="_id"></span>
		</div>
		<button @click="updateValueSlide(current - 1), updateLastEventName('update:left-arrow-click')" title="Нажмите, чтобы перелистнуть слайдер влево." type="button" class="slider-presentation__arrow slider-presentation__arrow_left">
			<img alt="Стрелка переключения слайдов влево." src="@/app/assets/images/icons/arrow.svg" />
		</button>
		<button @click="updateValueSlide(current + 1), updateLastEventName('update:right-arrow-click')" title="Нажмите, чтобы перелистнуть слайдер вправо." type="button" class="slider-presentation__arrow slider-presentation__arrow_right">
			<img alt="Стрелка переключения слайдов вправо." src="@/app/assets/images/icons/arrow.svg" />
		</button>
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
	data() {
		return {
			valueTranslateX: 0,
			lastEventName: "",
			transitionValue: "transform 0.3s ease 0s"
		};
	},
	computed: {
		...mapState({
			dataGames: (state: any) => state.presentationSliderData.data
		}),
		styleBlockPosters() {
			return { transform: "translateX(" + "-" + this.valueTranslateX + "px)" };
		},
		arrayWithClonning() {
			return [this.dataGames[this.dataGames.length - 1], ...this.dataGames, this.dataGames[0]];
		}
	},
	mounted() {
		this.updateValueTranslateX(this.current + 1);

		this.$watch(
			"current",
			() => {
				const elementHTML: any = this.$refs["block-posters"];

				if (this.current === this.dataGames.length - 1 && this.lastEventName === "update:left-arrow-click") {
					this.valueTranslateX = 0;
				} else if (this.current === 0 && (this.lastEventName === "update:right-arrow-click" || this.lastEventName === "update:interval-timer")) {
					this.valueTranslateX = (elementHTML.offsetWidth + 15) * (this.dataGames.length + 1);
				} else {
					this.updateValueTranslateX(this.current + 1);
				}
			},
			{ flush: "sync" }
		);

		this.$watch(
			"valueTranslateX",
			() => {
				const elementHTML: any = this.$refs["block-posters"];

				if (this.valueTranslateX === 0 || this.valueTranslateX === (elementHTML.offsetWidth + 15) * (this.dataGames.length + 1)) {
					setTimeout(() => {
						this.transitionValue = "transform 0s ease 0s";

						elementHTML.style.transition = "transform 0s ease 0s";
					}, 310);
				}
			},
			{ flush: "post" }
		);

		this.$watch(
			"transitionValue",
			() => {
				const elementHTML: any = this.$refs["block-posters"];

				if (this.transitionValue === "transform 0s ease 0s" && this.lastEventName === "update:left-arrow-click") {
					this.valueTranslateX = (elementHTML.offsetWidth + 15) * this.dataGames.length;

					this.lastEventName = "";
				} else if (this.transitionValue === "transform 0s ease 0s" && (this.lastEventName === "update:right-arrow-click" || this.lastEventName === "update:interval-timer")) {
					this.updateValueTranslateX(this.current + 1);

					this.lastEventName = "";
				}
			},
			{ flush: "post" }
		);

		this.$watch(
			"lastEventName",
			() => {
				if (this.transitionValue === "transform 0s ease 0s") {
					const elementHTML: any = this.$refs["block-posters"];

					elementHTML.style.transition = "transform 0.3s ease 0s";

					this.transitionValue = "transform 0.3s ease 0s";
				}
			},
			{ flush: "post" }
		);
	},
	methods: {
		updateLastEventName(valueEventName: string): void {
			this.lastEventName = valueEventName;
		},
		updateValueSlide(newValueSlide: number): void {
			if (newValueSlide < 0) {
				this.$emit("update-slide", { event: this.dataGames.length - 1 });

				return;
			}

			if (newValueSlide >= this.dataGames.length) {
				this.$emit("update-slide", { event: 0 });

				return;
			}

			this.$emit("update-slide", { event: newValueSlide });
		},
		updateValueTranslateX(valueSlide: number): void {
			const elementHTML: any = this.$refs["block-posters"];

			this.valueTranslateX = (elementHTML.offsetWidth + 15) * valueSlide;
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
