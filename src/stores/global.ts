import { defineStore } from "pinia";
export const useGlobalStore = defineStore("global", {
	state: () => ({ onMenu: false }),
	getters: {
		// doubleCount: (state) => state.count * 2,
	},
	actions: {
		increment() {
			// this.count++;
		},
	},
});
