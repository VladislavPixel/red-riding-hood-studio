import type { IStoreShortDescription } from "@/app/type/store-short-description";
import type { IDataGamesShortDescription } from "@/app/type/data-games-short-description";
import { fakeAPI } from "@/app/fake-api";

const defaultState: IStoreShortDescription = {
	isLoadingData: true,
	data: [],
	error: ""
};

const shortDescription = {
	namespaced: true,
	state: function () {
		return { ...defaultState };
	},
	mutations: {
		setDataShortDescription(state: IStoreShortDescription, data: IDataGamesShortDescription[]) {
			state.data = data;
		},
		setLoadingStatus(state: IStoreShortDescription, newStatus: boolean) {
			state.isLoadingData = newStatus;
		},
		setErrorValue(state: IStoreShortDescription, newMessage: string) {
			state.error = newMessage;
		}
	},
	actions: {
		async fetchDataShortDescription({ commit }: any) {
			try {
				commit("setLoadingStatus", true);

				const data = await fakeAPI.fetchDataGamesShortDescription();

				commit("setDataShortDescription", data);

				commit("setErrorValue", "");

				commit("setLoadingStatus", false);
			} catch (err) {
				commit("setErrorValue", "Возникла ошибка при получении данных для показа карточек быстрого доступа к странице в магазине игры и ее описания. Что-то пошло не так.");

				commit("setLoadingStatus", false);
			}
		}
	}
};

export { shortDescription };
