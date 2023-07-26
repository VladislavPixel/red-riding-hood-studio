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
		<div class="video-gallery-block__main-video">
			<div class="video-gallery-block__container-frame">
				<section>
					<iframe :src="activeVideo.path" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
				</section>
			</div>
		</div>
		<div class="video-gallery-block__other-videos"></div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";
import PointerVideoGame from "@/app/components/ui/pointer-video-game.vue";
import type { IMiniPoster } from "@/app/type/data-presentation-slider";

export default defineComponent({
	nameComponent: "video-block",
	data() {
		return {
			current: 0,
			currentActiveVideo: 0
		};
	},
	components: {
		PointerVideoGame
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
		activeVideo(): IMiniPoster {
			return this.videoElements[this.current].videoСlips[this.currentActiveVideo];
		},
		otherVideos() {
			return this.videoElements[this.current].videoСlips.filter((videoConfig: IMiniPoster) => videoConfig._id !== this.videoElements[this.current].videoСlips[this.currentActiveVideo]._id);
		}
	},
	methods: {
		updateCurrent(data: { value: number }): void {
			this.current = data.value;
		}
	},
	mounted() {
		console.log(this.otherVideos, "Игры которые на отрисовку");
	}
});
</script>
