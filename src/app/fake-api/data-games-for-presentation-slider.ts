import type { IPresentationData } from "@/app/type/data-presentation-slider";

const dataGamesForPresentationSlider: IPresentationData[] = [
	{
		_id: "present-slider-01",
		idGame: "hello-neighbor-1234325435",
		nameGame: "Hello Neighbor",
		posterGameNameFile: "hello-neighbor-poster.jpg",
		alt: "Постер с главным злодеем игры",
		phrase: "Время играть в прятки!",
		miniPosters: [
			{ path: "q7wasi4jj2k52gcl76yf9txdf3ks4oms.jpg", alt: "Постер персонажа 1" },
			{ path: "cgucqi9acxun5k3siq1cyzi3b2aup0my.jpg", alt: "Постер персонажа 2" },
			{ path: "n9by4pgp8k9txkn044djtxb49txpvwk5.jpg", alt: "Постер персонажа 3" }
		]
	},
	{
		_id: "present-slider-02",
		idGame: "this-war-of-mine-1232145466778790",
		nameGame: "This War of Mine",
		posterGameNameFile: "scale_1200.webp",
		alt: "Дом с ужасами войны на постере",
		phrase: "100 дней в аду...",
		miniPosters: [
			{ path: "a3iRYRKhfPbEarq1a96uYQ.jpeg", alt: "Постер персонажа 1" },
			{ path: "p1_3384575_398076cf.jpg", alt: "Постер персонажа 2" },
			{ path: "p1_3065416_ddc67064.jpg", alt: "Постер персонажа 3" }
		]
	},
	{
		_id: "present-slider-03",
		idGame: "company-of-heroes-2-435567912",
		nameGame: "Company of Heroes 2",
		posterGameNameFile: "strategiyu-company-of-heroes-2.jpg",
		alt: "Советский офицер с пистолетом на фоне солдат",
		phrase: "Теперь нужно наступать",
		miniPosters: [
			{ path: "company_of_heroes_2_screenshot_2ad99dcd.jpeg", alt: "Постер персонажа 1" },
			{ path: "p1_3429378_0584af0f.jpg", alt: "Постер персонажа 2" },
			{ path: "e6399a82622720d978919bc2a3d34253.png", alt: "Постер персонажа 3" }
		]
	},
	{
		_id: "present-slider-04",
		idGame: "ravenous-devils-435567912",
		nameGame: "Ravenous Devils",
		posterGameNameFile: "ravenousdevils_image1600w.jpg",
		alt: "Парочка маньяков на фоне своей столовой",
		phrase: "Вкусные человеческие ребрышки",
		miniPosters: [
			{ path: "hll2whfzcjpjf169anhmqhk916f0v9i7.png", alt: "Постер персонажа 1" },
			{ path: "maxresdefault.jpg", alt: "Постер персонажа 2" },
			{ path: "p1_3341948_3072a1f8.jpg", alt: "Постер персонажа 3" }
		]
	},
	{
		_id: "present-slider-05",
		idGame: "dota-2-435567912",
		nameGame: "Dota 2",
		posterGameNameFile: "1663744340_39-phonoteka-org-p-dota-oboi-na-telefon-instagram-49.jpg",
		alt: "Лого доты 2 и на фоне звезда",
		phrase: "Приготовиться к битве!",
		miniPosters: [
			{ path: "86f23fc62d9669a8250ba6ebcfc9c635.webp", alt: "Постер персонажа 1" },
			{ path: "b1886580666fa105ebcbdeeeadbeb38c.jpeg", alt: "Постер персонажа 2" },
			{ path: "2f7abd3e93cf65044d296bd45753be56.webp", alt: "Постер персонажа 3" }
		]
	},
	{
		_id: "present-slider-06",
		idGame: "inside-435567912-ins",
		nameGame: "Inside",
		posterGameNameFile: "1512559938_preview_INSIDE review thumbnail.png",
		alt: "Мальчик из игры Inside скрывается за железной балкой от лампочки",
		phrase: "Твой разум - их работа",
		miniPosters: [
			{ path: "maxresdefault123123123.jpg", alt: "Постер персонажа 1" },
			{ path: "4ee181050ae023aedeea7c9458c72551.png", alt: "Постер персонажа 2" },
			{ path: "400b3647ea65ecf9962ed621896c23a6--draw.jpg", alt: "Постер персонажа 3" }
		]
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
