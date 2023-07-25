<template>
	<div class="gallery-block-images__column">
		<div class="gallery-block-images__block-container-image">
			<div @click="handlerClickImage" class="gallery-block-images__wrapper-image">
				<img title="Нажмите, чтобы открыть режим просмотра Изображений." class="gallery-block-images__img" :src="getImgUrl(currentData.path)" :alt="currentData.alt" />
			</div>
			<span class="gallery-block-images__element gallery-block-images__element_left"></span>
			<span class="gallery-block-images__element gallery-block-images__element_right"></span>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	props: {
		currentData: {
			type: Object,
			default: function () {
				return {};
			}
		},
		i: {
			type: Number,
			default: 0
		}
	},
	methods: {
		getImgUrl(path: string) {
			return require("@/app/assets/images/gallery-games/" + path);
		},
		handlerClickImage(): void {
			this.$emit("click-image", { index: this.i });
		}
	}
});
</script>
