<template>
	<div class="video-gallery-block__column-video">
		<div @click="handlerClickVideo" title="Нажмите, чтобы сменить видео для просмотра" class="video-gallery-block__wrapper-video">
			<img class="video-gallery-block__video-poster" :src="getImgUrl(videoConfig.imgPath)" :alt="videoConfig.altImg" />
		</div>
		<span class="video-gallery-block__video-decor video-gallery-block__video-decor_left"></span>
		<span class="video-gallery-block__video-decor video-gallery-block__video-decor_right"></span>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	props: {
		videoConfig: {
			type: Object,
			default: function () {
				return {};
			}
		},
		index: {
			type: String,
			default: "0"
		}
	},
	methods: {
		handlerClickVideo(): void {
			this.$emit("update-active-index", { value: this.index });
		},
		getImgUrl(path: string) {
			return require("@/app/assets/images/video-poster/" + path);
		}
	}
});
</script>
