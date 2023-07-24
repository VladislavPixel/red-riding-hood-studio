<template>
	<spinner v-if="isLoading" />
	<message-lite v-else-if="!isLoading && errorMessage.length" :text="errorMessage" :offer="'Попробуйте обновить страницу сайта или обратитесь к ресурсу позже. Приносим свои извинения.'" />
	<message-lite v-else-if="!isLoading && !errorMessage.length && !dataImages.length" :text="'Массив данных пустой. Сервис не может ничего отрисовать.'" :offer="'Попробуйте обновить страницу или приходите позже. Приносим свои извинения.'" />
	<slot v-else></slot>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapActions } from "vuex";

export default defineComponent({
	computed: {
		...mapState({
			dataImages: (state: any) => state.gamesImagesData.data,
			isLoading: (state: any) => state.gamesImagesData.isLoadingData,
			errorMessage: (state: any) => state.gamesImagesData.error
		})
	},
	methods: {
		...mapActions({
			fetchDataImages: "gamesImagesData/fetchDataGamesImages"
		})
	},
	mounted() {
		if (this.isLoading) {
			this.fetchDataImages();
		}
	}
});
</script>
