<template>
	<spinner v-if="isLoading" />
	<message-lite v-else-if="!isLoading && errorMessage.length" :text="errorMessage" :offer="'Попробуйте обновить страницу сайта или обратитесь к ресурсу позже. Приносим свои извинения.'" />
	<message-lite v-else-if="!isLoading && !errorMessage.length && !dataVideo.length" :text="'Массив данных пустой. Сервис не может ничего отрисовать.'" :offer="'Попробуйте обновить страницу или приходите позже. Приносим свои извинения.'" />
	<slot v-else></slot>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapActions } from "vuex";

export default defineComponent({
	computed: {
		...mapState({
			dataVideo: (state: any) => state.videoGamesData.data,
			isLoading: (state: any) => state.videoGamesData.isLoadingData,
			errorMessage: (state: any) => state.videoGamesData.error
		})
	},
	methods: {
		...mapActions({
			fetchDataVideoGames: "videoGamesData/fetchDataVideoGames"
		})
	},
	mounted() {
		if (this.isLoading) {
			this.fetchDataVideoGames();
		}
	}
});
</script>
