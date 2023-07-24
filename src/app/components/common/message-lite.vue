<template>
	<div title="Сообщение" :class="`${classes}__lite-message message-lite`">
		<img title="Иконка агента" class="message-lite__icon" src="@/app/assets/images/icons/agent.svg" alt="Агент в плаще и шляпе." />
		<div class="message-lite__text">{{ text }}</div>
		<div class="message-lite__offer">{{ offer }}</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	nameComponent: "message-lite",
	props: {
		classes: {
			type: String,
			default: "some-component"
		},
		text: {
			type: String,
			default: "Сообщение"
		},
		offer: {
			type: String,
			default: "Строка с предложением к пользователю"
		}
	}
});
</script>
