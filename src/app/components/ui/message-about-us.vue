<template>
	<div :class="`${classes}__block-messages-main messages-row`">
		<div class="messages-row__content" v-for="({ _id, title, text, nameIcon, alt }, index) of messagesData" :key="_id">
			<template v-if="index % 2 === 0">
				<div class="messages-row__column">
					<h3 class="messages-row__title-head">{{ title }}</h3>
					<div class="messages-row__text">{{ text }}</div>
				</div>
				<div class="messages-row__column">
					<img :src="getImgUrl(nameIcon)" class="messages-row__icon" :alt="alt" />
				</div>
			</template>
			<template v-else>
				<div class="messages-row__column">
					<img :src="getImgUrl(nameIcon)" class="messages-row__icon" :alt="alt" />
				</div>
				<div class="messages-row__column">
					<h3 class="messages-row__title-head">{{ title }}</h3>
					<div class="messages-row__text">{{ text }}</div>
				</div>
			</template>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { messages } from "@/app/core/message";
import type { IMessage } from "@/app/type/message";

export default defineComponent({
	props: {
		classes: {
			type: String,
			default: "some-component"
		}
	},
	computed: {
		messagesData(): IMessage[] {
			return messages;
		}
	},
	methods: {
		getImgUrl(iconName: string) {
			return require("@/app/assets/images/icons/" + iconName);
		}
	}
});
</script>
