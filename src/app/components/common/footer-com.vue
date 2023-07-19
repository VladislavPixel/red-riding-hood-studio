<template>
	<footer :class="`${classes}__footer footer`">
		<div class="footer__container _container">
			<div class="footer__column">
				<router-link title="Нажмите, чтобы перейти на главную - Домой." class="footer__logo" to="/">RedRidingHoodStudioGames</router-link>
				<div title="Благодарность для сообщества." class="footer__gratitude">
					<span class="footer__text-grat">Спасибо, что вы с нами</span>
					<img class="footer__fist" alt="Иконка кулака" src="@/app/assets/images/icons/fist.svg" />
				</div>
				<div title="Копирайт." class="footer__rules">©️ 2023г. - {{ new Date().getFullYear() }}г. Все права защищены. Россия.</div>
			</div>
			<div class="footer__column">
				<navbar :classes="'footer'" />
				<social-network-list :classes="'footer'" />
			</div>
		</div>
		<a title="Нажмите, чтобы написать нам на почту." class="footer__email" href="mailto:pixel.develop@yandex.ru">red.riding.hood.studio-games@yandex.ru</a>
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
