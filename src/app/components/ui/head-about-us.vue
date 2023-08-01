<template>
	<div :class="`${classes}__head-block block-head-about-us`">
		<h1 class="block-head-about-us__title-head">
			Мы всегда пытаемся подходить с должным, трепетным отношением ко всем проектам
			<img class="block-head-about-us__icon-vr" src="@/app/assets/images/icons/vr-girl.svg" alt="Девушка с VR гарнитурой на голове" />
		</h1>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	props: {
		classes: {
			type: String,
			default: "some-component"
		}
	}
});
</script>
