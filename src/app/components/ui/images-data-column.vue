<template>
	<div class="gallery-block-images__column">
		<div class="gallery-block-images__wrapper-image">
			<!-- ДОДЕЛАТЬ КАРТИНКИ ВСТАВИТЬ ИХ СЮДА КАК КОЛОНКИ -->
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
		}
	}
});
</script>
