<template>
	<div :class="`${classes}__header header`">
		<div class="header__container _container">
			<div class="header__logo">
				<router-link title="Нажмите, чтобы перейти на главную - Домой" class="header__link" to="/">RedRidingHoodStudio</router-link>
			</div>
			<div class="header__menu">
				<navbar :classes="'header'" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	nameComponent: "header-com",
	props: {
		classes: {
			type: String,
			default: "some-component"
		}
	}
});
</script>
