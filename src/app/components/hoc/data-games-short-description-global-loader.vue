<template>
	<spinner v-if="isLoading" />
	<message-lite v-else-if="!isLoading && errorMessage.length" :text="errorMessage" :offer="'Попробуйте обновить страницу сайта или обратитесь к ресурсу позже. Приносим свои извинения.'" />
	<message-lite v-else-if="!isLoading && !errorMessage.length && !shortDescription.length" :text="'Массив данных пустой. Сервис не может ничего отрисовать.'" :offer="'Попробуйте обновить страницу или приходите позже. Приносим свои извинения.'" />
	<slot v-else></slot>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapActions } from "vuex";

export default defineComponent({
	computed: {
		...mapState({
			shortDescription: (state: any) => state.shortDescription.data,
			isLoading: (state: any) => state.shortDescription.isLoadingData,
			errorMessage: (state: any) => state.shortDescription.error
		})
	},
	methods: {
		...mapActions({
			fetchDataShortDescription: "shortDescription/fetchDataShortDescription"
		})
	},
	mounted() {
		if (this.isLoading) {
			this.fetchDataShortDescription();
		}
	}
});
</script>
