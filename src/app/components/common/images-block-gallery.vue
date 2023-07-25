<template>
	<div :class="`${classes}__images-block-gallery gallery-block-images`">
		<h2 class="gallery-block-images__title">
			<span title="Название блока">Изображения</span>
			<img title="Красная звезда" class="gallery-block-images__icon" src="@/app/assets/images/icons/star.svg" alt="Иконка красной звезды" />
		</h2>
		<div class="gallery-block-images__wrapper">
			<images-data-column v-for="(data, index) of iterableImages" :i="index" @click-image="handlerClickImage($event)" :key="data._id" :currentData="data" />
		</div>
		<moodal-gallery @close-modal="closeModalWindow" @update-current="updateCurrentImage" :nameGame="nameGame" v-if="isModalGallery" :current="currentIndex" :allElements="iterableImages.length" :dataGallery="iterableImages[currentIndex]" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapMutations } from "vuex";
import ImagesDataColumn from "@/app/components/ui/images-data-column.vue";
import MoodalGallery from "@/app/components/ui/modal-gallery.vue";
import type { IMiniPoster } from "@/app/type/data-presentation-slider";

export default defineComponent({
	components: {
		ImagesDataColumn,
		MoodalGallery
	},
	nameComponent: "images-block-gallery",
	data() {
		return {
			isModalGallery: false,
			currentIndex: 0
		};
	},
	props: {
		classes: {
			type: String,
			default: "some-component"
		}
	},
	computed: {
		...mapState({
			dataImages: (state: any) => state.gamesImagesData.data
		}),
		iterableImages(): IMiniPoster[] {
			const arr = [];

			for (const dataPack of this.dataImages) {
				arr.push(...dataPack.gallery);
			}

			return arr;
		},
		nameGame(): string {
			let name = "";

			for (const dataPack of this.dataImages) {
				const findElement = dataPack.gallery.find((data: IMiniPoster) => data._id === this.iterableImages[this.currentIndex]._id);

				if (findElement) {
					name = dataPack.nameGame;

					break;
				}
			}

			return name;
		}
	},
	methods: {
		closeModalWindow() {
			this.isModalGallery = false;

			this.setConductorModalWindows(false);
		},
		updateCurrentImage(data: { value: number }): void {
			this.currentIndex = data.value;
		},
		handlerClickImage(event: { index: number }): void {
			this.currentIndex = event.index;

			this.isModalGallery = true;

			this.setConductorModalWindows(true);
		},
		...mapMutations({
			setConductorModalWindows: "conductorModalWindows/setStatusConductorModalWindows"
		})
	}
});
</script>
