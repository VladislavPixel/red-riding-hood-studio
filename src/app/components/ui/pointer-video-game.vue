<template>
	<button @click="$emit('update-current', { value: i })" title="Нажмите, чтобы посмотреть видео другой игры." type="button" :class="`video-gallery-block__dot${current === i ? ' active' : ''}`">
		<div class="video-gallery-block__block-info-dot">
			<img class="video-gallery-block__icon-dot" :src="`${getImgUrl(dataVideo.icon)}`" alt="Иконка игры" />
			<div class="video-gallery-block__title-dot">{{ dataVideo.nameGame }}</div>
		</div>
	</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	props: {
		current: {
			type: Number,
			default: 0
		},
		i: {
			type: Number,
			default: 0
		},
		dataVideo: {
			type: Object,
			default: function () {
				return {};
			}
		}
	},
	methods: {
		getImgUrl(nameFile: string) {
			return require("@/app/assets/images/icons/video-icons/" + nameFile);
		}
	}
});
</script>
