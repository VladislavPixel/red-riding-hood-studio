import { createStore } from "vuex";
import { presentationSliderData } from "@/app/store/presentation-slider-data";
import { gamesImagesData } from "@/app/store/games-images-block";
import { conductorModalWindows } from "@/app/store/conductor-modal-windows";

export default createStore({
	state: {},
	getters: {},
	mutations: {},
	actions: {},
	modules: {
		presentationSliderData,
		gamesImagesData,
		conductorModalWindows
	}
});
