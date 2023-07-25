<template>
	<div :class="`wrapper${isModal ? ' hidden' : ''}`">
		<header-com :classes="'wrapper'" />
		<join-social-network :classes="'wrapper'" />
		<main class="wrapper__content block-content">
			<router-view />
		</main>
		<footer-com :classes="'wrapper'" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";

export default defineComponent({
	computed: {
		...mapState({
			isModal: (state: any) => state.conductorModalWindows.isModal
		})
	}
});
</script>
