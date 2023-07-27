<template>
	<div :class="`${classes}__short-description description-short`">
		<h2 class="description-short__title">
			<span title="Название блока">Познакомься поближе</span>
			<img title="Красная звезда" class="description-short__icon" src="@/app/assets/images/icons/star.svg" alt="Иконка красной звезды" />
		</h2>
		<div class="description-short__row"></div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	nameComponent: "short-description",
	props: {
		classes: {
			type: String,
			default: "some-component"
		}
	}
});
</script>
