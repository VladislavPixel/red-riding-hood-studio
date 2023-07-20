<template>
	<spinner v-if="isLoading" />
	<message-lite v-else-if="!isLoading && errorMessage.length" :text="errorMessage" :offer="'Попробуйте обновить страницу сайта или обратитесь к ресурсу позже. Приносим свои извинения.'" />
	<message-lite v-else-if="!isLoading && !errorMessage.length && !dataGames.length" :text="'Массив данных пустой. Сервис не может ничего отрисовать.'" :offer="'Попробуйте обновить страницу или приходите позже. Приносим свои извинения.'" />
	<slot v-else></slot>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapActions } from "vuex";

export default defineComponent({
	computed: {
		...mapState({
			dataGames: (state: any) => state.presentationSliderData.data,
			isLoading: (state: any) => state.presentationSliderData.isLoadingData,
			errorMessage: (state: any) => state.presentationSliderData.error
		})
	},
	methods: {
		...mapActions({
			fetchDataPresentation: "presentationSliderData/fetchDataPresentationSlider"
		})
	},
	props: {
		classes: {
			type: String,
			default: ""
		}
	},
	mounted() {
		if (this.isLoading) {
			this.fetchDataPresentation();
		}
	}
});
</script>
