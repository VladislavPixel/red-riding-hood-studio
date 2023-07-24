import type { IDataGamesImagesBlock } from "@/app/type/data-games-images-block";

const dataGamesForImagesBlock: IDataGamesImagesBlock[] = [
	{
		_id: "0113",
		idGame: "hello-neighbor-1234325435",
		nameGame: "Hello Neighbor",
		gallery: [
			{ path: "HHUWi7MYM3.png", alt: "Сосед размахивается лопатой." },
			{ path: "p1_2859740_685c69a5.jpg", alt: "Сосед выглядывает из-за стены и позади него дети." },
			{ path: "ss_be432a3ffe628d60e219e72973349acf163b28dc.1920x1080.jpg", alt: "В соседа бросили краску" }
		]
	},
	{
		_id: "023232",
		idGame: "this-war-of-mine-1232145466778790",
		nameGame: "This War of Mine",
		gallery: [
			{ path: "5261929.jpg", alt: "Девушка заложница войны" },
			{ path: "p1_3420976_3f8dda16.jpg", alt: "Солдаты штурмуют здание." },
			{ path: "pB3bOEPBsIw.jpg", alt: "Никакого счастливого детства" }
		]
	},
	{
		_id: "034324",
		idGame: "company-of-heroes-2-435567912",
		nameGame: "Company of Heroes 2",
		gallery: [
			{ path: "company-of-heroes-2-british-forces.jpg", alt: "Разбитый город" },
			{ path: "p1_2389614_6500b780.jpg", alt: "Армия фашистов" },
			{ path: "CompanyofHeroes2_VictoryatStalingrad_Femalesnipers.jpg", alt: "Девушки снайперши СССР" }
		]
	},
	{
		_id: "04435435",
		idGame: "ravenous-devils-435567912",
		nameGame: "Ravenous Devils",
		gallery: [
			{ path: "20220416144016_b8248e8a.jpg", alt: "Маньяк держит жертву" },
			{ path: "ss_f485c93a2428da3315603a6a3a9685728d052.jpg", alt: "Отрубила ноги" },
			{ path: "p1_3560688_fbe5e9b6.png", alt: "Читают письма" }
		]
	},
	{
		_id: "05546546",
		idGame: "dota-2-435567912",
		nameGame: "Dota 2",
		gallery: [
			{ path: "023a870873535104691c91984986edd3.jpeg", alt: "Варлок" },
			{ path: "bc5f16afca612f3a53a03624cca67c9c.jpeg", alt: "Сталкер" },
			{ path: "06062da334fc28ee58de3e388ba8d174.jpeg", alt: "Дазле" }
		]
	},
	{
		_id: "064365435",
		idGame: "inside-435567912-ins",
		nameGame: "Inside",
		gallery: [
			{ path: "304430_screenshots_20170903014248_1.jpg", alt: "Смотрят в колбу" },
			{ path: "p1_3258767_9f306341.jpg", alt: "Скидывает сейф" },
			{ path: "p1_3063949_f006f880.jpg", alt: "В шлеме" }
		]
	}
];

function fetchDataGamesForImagesBlock() {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(dataGamesForImagesBlock);
		}, 3000);
	});
}

export { fetchDataGamesForImagesBlock };
