import { fakeAPI } from "@/app/fake-api";
import type { IStoreGamesImagesBlock } from "@/app/type/store-games-images-block";
import type { IDataGamesImagesBlock } from "@/app/type/data-games-images-block";

const defaultState: IStoreGamesImagesBlock = {
	isLoadingData: true,
	data: [],
	error: ""
};

const gamesImagesData = {
	namespaced: true,
	state: function () {
		return { ...defaultState };
	},
	mutations: {
		setDataGamesImages(state: IStoreGamesImagesBlock, data: IDataGamesImagesBlock[]) {
			state.data = data;
		},
		setLoadingStatus(state: IStoreGamesImagesBlock, newStatus: boolean) {
			state.isLoadingData = newStatus;
		},
		setErrorValue(state: IStoreGamesImagesBlock, newMessage: string) {
			state.error = newMessage;
		}
	},
	actions: {
		async fetchDataGamesImages({ commit }: any) {
			try {
				commit("setLoadingStatus", true);

				const data = await fakeAPI.fetchDataGamesForImagesBlock();

				commit("setDataGamesImages", data);

				commit("setErrorValue", "");

				commit("setLoadingStatus", false);
			} catch (err) {
				commit("setErrorValue", "Возникла ошибка при получении данных для показа галереи изображений. Что-то пошло не так.");

				commit("setLoadingStatus", false);
			}
		}
	}
};

export { gamesImagesData };
