import { createStore } from "vuex";
import { presentationSliderData } from "@/app/store/presentation-slider-data";
import { gamesImagesData } from "./games-images-block";

export default createStore({
	state: {},
	getters: {},
	mutations: {},
	actions: {},
	modules: {
		presentationSliderData,
		gamesImagesData
	}
});
