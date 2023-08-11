<template>
	<div class="block-content__about-us about-us-block">
		<div class="about-us-block__container _container">
			<head-about-us :classes="'about-us-block'" />
			<list-paragraphs-about-us :classes="'about-us-block'" />
		</div>
		<div class="about-us-block__block-messages">
			<div class="about-us-block__container-message _container">
				<message-about-us :classes="'about-us-block'" />
			</div>
		</div>
		<div class="about-us-block__container-opportunities">
			<div class="about-us-block__content-opportunities _container">
				<opportunities-about-us />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeadAboutUs from "@/app/components/ui/head-about-us.vue";
import ListParagraphsAboutUs from "@/app/components/ui/list-paragraphs-about-us.vue";
import MessageAboutUs from "@/app/components/ui/message-about-us.vue";
import OpportunitiesAboutUs from "@/app/components/ui/opportunities-about-us.vue";

export default defineComponent({
	components: {
		HeadAboutUs,
		ListParagraphsAboutUs,
		MessageAboutUs,
		OpportunitiesAboutUs
	}
});
</script>
