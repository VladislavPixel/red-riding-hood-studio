<template>
	<div :class="`${classes}__video-block video-gallery-block`">
		<h2 class="video-gallery-block__title">
			<span title="Название блока">Видео</span>
			<img title="Красная звезда" class="video-gallery-block__icon" src="@/app/assets/images/icons/star.svg" alt="Иконка красной звезды" />
		</h2>
		<div class="video-gallery-block__container-controllers">
			<pointer-video-game @update-current="updateCurrent" v-for="(videoConfig, index) of videoElements" :key="videoConfig._id" :dataVideo="videoConfig" :current="current" :i="index" />
			<span class="video-gallery-block__controllers-flag"></span>
		</div>
		<video-gallery @update-active-index="updateActiveVideo" :dataCurrent="activeVideo" :otherData="otherVideos" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";
import PointerVideoGame from "@/app/components/ui/pointer-video-game.vue";
import type { IVideoMini } from "@/app/type/data-video-games";
import VideoGallery from "@/app/components/ui/video-gallery.vue";

export default defineComponent({
	nameComponent: "video-block",
	data() {
		return {
			current: 0,
			currentActiveVideo: 0
		};
	},
	components: {
		PointerVideoGame,
		VideoGallery
	},
	props: {
		classes: {
			type: String,
			default: ""
		}
	},
	computed: {
		...mapState({
			videoElements: (state: any) => state.videoGamesData.data
		}),
		activeVideo(): IVideoMini {
			return this.videoElements[this.current].videoСlips[this.currentActiveVideo];
		},
		otherVideos() {
			return this.videoElements[this.current].videoСlips;
		}
	},
	methods: {
		updateCurrent(data: { value: number }): void {
			this.current = data.value;
		},
		updateActiveVideo(event: { value: number }): void {
			this.currentActiveVideo = event.value;
		}
	}
});
</script>
