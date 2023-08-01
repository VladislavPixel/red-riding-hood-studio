<template>
	<div class="block-content__about-us about-us-block">
		<div class="about-us-block__container _container">
			<head-about-us :classes="'about-us-block'" />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeadAboutUs from "@/app/components/ui/head-about-us.vue";

export default defineComponent({
	components: {
		HeadAboutUs
	}
});
</script>
