import type { IStoreVideoGames } from "@/app/type/store-video-games";
import type { IVideoGames } from "@/app/type/data-video-games";
import { fakeAPI } from "@/app/fake-api";

const defaultState: IStoreVideoGames = {
	isLoadingData: true,
	data: [],
	error: ""
};

const videoGamesData = {
	namespaced: true,
	state: function () {
		return { ...defaultState };
	},
	mutations: {
		setDataVideoGames(state: IStoreVideoGames, data: IVideoGames[]) {
			state.data = data;
		},
		setLoadingStatus(state: IStoreVideoGames, newStatus: boolean) {
			state.isLoadingData = newStatus;
		},
		setErrorValue(state: IStoreVideoGames, newMessage: string) {
			state.error = newMessage;
		}
	},
	actions: {
		async fetchDataVideoGames({ commit }: any) {
			try {
				commit("setLoadingStatus", true);

				const data = await fakeAPI.fetchDataVideoGames();

				commit("setDataVideoGames", data);

				commit("setErrorValue", "");

				commit("setLoadingStatus", false);
			} catch (err) {
				commit("setErrorValue", "Возникла ошибка при получении данных для показа видео. Что-то пошло не так.");

				commit("setLoadingStatus", false);
			}
		}
	}
};

export { videoGamesData };
