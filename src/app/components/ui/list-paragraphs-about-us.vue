<template>
	<div :class="`${classes}__list-about-us-paragraphs paragraphs-about-us`">
		<ul class="paragraphs-about-us__list">
			<li title="Наши базисы." class="paragraphs-about-us__element" v-for="(paragraph, index) of paragraphs" :key="paragraph + index">
				{{ paragraph }}
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { aboutUsParagraphs } from "@/app/core/about-us";

export default defineComponent({
	props: {
		classes: {
			type: String,
			default: "some-component"
		}
	},
	computed: {
		paragraphs(): string[] {
			return aboutUsParagraphs;
		}
	}
});
</script>
