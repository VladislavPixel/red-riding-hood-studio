<template>
	<div :class="`${classes}__opportunities block-opportunities`">
		<div class="block-opportunities__header">
			<h2 class="block-opportunities__title">Возможности</h2>
			<p class="block-opportunities__sub-title">Мы постоянно работаем над улучшениями:</p>
		</div>
		<div class="block-opportunities__row">
			<div v-for="{ _id, title, text, nameIcon, alt } of opportunitiesData" :key="_id" class="block-opportunities__column">
				<div class="block-opportunities__card">
					<div class="block-opportunities__icon-block">
						<img class="block-opportunities__icon" :src="getImgUrl(nameIcon)" :alt="alt" />
					</div>
					<h3 class="block-opportunities__card-title">{{ title }}</h3>
					<p class="block-opportunities__paragraph">{{ text }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { opportunities } from "@/app/core/opportunities";
import type { IMessage } from "@/app/type/message";

export default defineComponent({
	props: {
		classes: {
			type: String,
			default: "some-component"
		}
	},
	computed: {
		opportunitiesData(): IMessage[] {
			return opportunities;
		}
	},
	methods: {
		getImgUrl(iconName: string) {
			return require("@/app/assets/images/icons/opportunities/" + iconName);
		}
	}
});
</script>
