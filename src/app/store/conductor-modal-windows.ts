import type { IStoreConductorModalWindows } from "../type/store-conductor-modal-windows";

const defaultState: IStoreConductorModalWindows = {
	isModal: false
};

const conductorModalWindows = {
	namespaced: true,
	state: function () {
		return { ...defaultState };
	},
	mutations: {
		setStatusConductorModalWindows(state: IStoreConductorModalWindows, data: boolean) {
			state.isModal = data;
		}
	}
};

export { conductorModalWindows };
