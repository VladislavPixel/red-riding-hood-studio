<template>
	<div :class="`${classes}__images-block-gallery gallery-block-images`">
		<h2 class="gallery-block-images__title">
			<span title="Название блока">Изображения</span>
			<img title="Красная звезда" class="gallery-block-images__icon" src="@/app/assets/images/icons/star.svg" alt="Иконка красной звезды" />
		</h2>
		<div class="gallery-block-images__wrapper">
			<template v-for="dataPack of dataImages" :key="dataPack._id">
				<images-data-column v-for="data of dataPack.gallery" :key="data.path + data.alt" :currentData="data" />
			</template>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";
import ImagesDataColumn from "@/app/components/ui/images-data-column.vue";

export default defineComponent({
	components: {
		ImagesDataColumn
	},
	nameComponent: "images-block-gallery",
	props: {
		classes: {
			type: String,
			default: "some-component"
		}
	},
	computed: {
		...mapState({
			dataImages: (state: any) => state.gamesImagesData.data
		})
	},
	mounted() {
		console.log(this.dataImages);
	}
});
</script>
