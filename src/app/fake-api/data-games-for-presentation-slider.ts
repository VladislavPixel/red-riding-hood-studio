import type { IPresentationData } from "@/app/type/data-presentation-slider";

const dataGamesForPresentationSlider: IPresentationData[] = [
	{
		_id: "present-slider-01",
		idGame: "hello-neighbor-1234325435",
		nameGame: "Hello Neighbor",
		posterGamePath: "@/app/assets/images/posters-games/hello-neighbor.jpg",
		miniPosters: ["@/app/assets/images/mini-posters/q7wasi4jj2k52gcl76yf9txdf3ks4oms.jpg", "@/app/assets/images/mini-posters/cgucqi9acxun5k3siq1cyzi3b2aup0my.jpg", "@/app/assets/images/mini-posters/n9by4pgp8k9txkn044djtxb49txpvwk5.jpg"]
	},
	{
		_id: "present-slider-02",
		idGame: "this-war-of-mine-1232145466778790",
		nameGame: "This War of Mine",
		posterGamePath: "@/app/assets/images/posters-games/scale_1200.webp",
		miniPosters: ["@/app/assets/images/mini-posters/a3iRYRKhfPbEarq1a96uYQ.jpeg", "@/app/assets/images/mini-posters/p1_3384575_398076cf.jpg", "@/app/assets/images/mini-posters/p1_3065416_ddc67064.jpg"]
	},
	{
		_id: "present-slider-03",
		idGame: "company-of-heroes-2-435567912",
		nameGame: "Company of Heroes 2",
		posterGamePath: "@/app/assets/images/posters-games/strategiyu-company-of-heroes-2.jpg",
		miniPosters: ["@/app/assets/images/mini-posters/company_of_heroes_2_screenshot_2ad99dcd.jpeg", "@/app/assets/images/mini-posters/p1_3429378_0584af0f.jpg", "@/app/assets/images/mini-posters/e6399a82622720d978919bc2a3d34253.png"]
	}
];

function fetchDataGamesForPresentationSlider(): Promise<IPresentationData[]> {
	return new Promise((resolve): void => {
		setTimeout(() => {
			resolve(dataGamesForPresentationSlider);
		}, 1000);
	});
}

export { fetchDataGamesForPresentationSlider };
