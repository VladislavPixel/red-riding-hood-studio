<template>
	<footer :class="`${classes}__footer footer`">
		<div class="footer__container _container">
			<div class="footer__column">
				<router-link title="Нажмите, чтобы перейти на главную - Домой." class="footer__logo" to="/">RedRidingHoodStudioGames</router-link>
				<div title="Копирайт." class="footer__rules">©️ 2023г. - {{ new Date().getFullYear() }}г. Все права защищены. Россия.</div>
			</div>
			<div class="footer__column">
				<navbar :classes="'footer'" />
				<social-network-list :classes="'footer'" />
			</div>
		</div>
	</footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	nameComponent: "footer-com",
	props: {
		classes: {
			type: String,
			default: "some-component"
		}
	}
});
</script>
