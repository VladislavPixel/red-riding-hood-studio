<template>
	<div :class="`${classes}__header header`">
		<div class="header__container _container">
			<div class="header__logo">
				<router-link title="Нажмите, чтобы перейти на главную - Домой." class="header__link" to="/">RedRidingHoodStudio</router-link>
			</div>
			<div class="header__menu">
				<navbar :classes="'header'" />
			</div>
		</div>
		<div class="header__sub-container _container">
			<span title="Послание пользователям)))">Игры из России с любовью</span>
			<img title="Послание пользователям)))" class="header__icon-heart" src="@/app/assets/images/icons/heart.svg" alt="Иконка сердца" />
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
