import type { IStorePresentationSliderData } from "@/app/type/store-presentation-slider-data";
import type { IPresentationData } from "@/app/type/data-presentation-slider";
import { fakeAPI } from "@/app/fake-api";

const defaultState: IStorePresentationSliderData = {
	isLoadingData: true,
	data: [],
	error: ""
};

const presentationSliderData = {
	namespaced: true,
	state: function () {
		return { ...defaultState };
	},
	mutations: {
		setDataPresentationSlider(state: IStorePresentationSliderData, data: IPresentationData[]) {
			state.data = data;
		},
		setLoadingStatus(state: IStorePresentationSliderData, newStatus: boolean) {
			state.isLoadingData = newStatus;
		},
		setErrorValue(state: IStorePresentationSliderData, newMessage: string) {
			state.error = newMessage;
		}
	},
	actions: {
		async fetchDataPresentationSlider({ commit }: any) {
			try {
				commit("setLoadingStatus", true);

				const data = await fakeAPI.fetchDataGamesForPresentationSlider();

				commit("setDataPresentationSlider", data);

				commit("setErrorValue", "");

				commit("setLoadingStatus", false);
			} catch (err) {
				commit("setErrorValue", "Возникла ошибка при получении данных для показа в слайдере. Что-то пошло не так.");

				commit("setLoadingStatus", false);
			}
		}
	}
};

export { presentationSliderData };
