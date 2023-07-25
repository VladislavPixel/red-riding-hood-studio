<template>
	<div :class="`${classes}__video-block video-gallery-block`">
		<h2 class="video-gallery-block__title">
			<span title="Название блока">Видео</span>
			<img title="Красная звезда" class="video-gallery-block__icon" src="@/app/assets/images/icons/star.svg" alt="Иконка красной звезды" />
		</h2>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	nameComponent: "video-block",
	props: {
		classes: {
			type: String,
			default: ""
		}
	}
});
</script>
