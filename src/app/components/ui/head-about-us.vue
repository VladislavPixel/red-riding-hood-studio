<template>
	<div :class="`${classes}__head-block block-head-about-us`">
		<h1 title="Послание нашим дорогим пользователям" class="block-head-about-us__title-head">
			<img class="block-head-about-us__icon-megaphone" src="@/app/assets/images/icons/megaphone.svg" alt="Громкоговоритель" />
			Наслаждайтесь нашими играми, остальное за нами!
		</h1>
		<p class="block-head-about-us__sub">Команда разработчиков</p>
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
