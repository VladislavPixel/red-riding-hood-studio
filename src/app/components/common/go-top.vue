<template>
	<div :class="`${classes}__go-top go-top`">
		<button @click="handlerClickBtnGoTop" type="button" class="go-top__btn">
			<img title="Нажмите для поднятия скролла вверх." class="go-top__arrow-top" src="@/app/assets/images/icons/arrow-top.svg" alt="Стрелка вверх." />
		</button>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	nameComponent: "go-top",
	props: {
		classes: {
			type: String,
			default: "some-component"
		}
	},
	methods: {
		handlerClickBtnGoTop() {
			window.scroll({
				top: 0,
				behavior: "smooth"
			});
		}
	}
});
</script>
