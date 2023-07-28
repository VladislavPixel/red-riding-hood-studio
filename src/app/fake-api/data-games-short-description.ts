import type { IDataGamesShortDescription } from "@/app/type/data-games-short-description";

const dataGamesShortDescription: IDataGamesShortDescription[] = [
	{
		_id: "011312311111",
		idGame: "hello-neighbor-1234325435",
		nameGame: "Hello Neighbor",
		icon: "gloves.svg",
		textDescription: "Hello Neighbor - это игра в жанре стелс-хоррор о том, как проникнуть в дом вашего жуткого соседа...",
		linkSteam: "https://store.steampowered.com/app/521890/Hello_Neighbor/",
		linkVKPlay: "https://vkplay.ru/play/game/atomic_heart/?_1ld=3428341_2072934&_1lp=1&mt_link_id=oyqd42",
		poster: { path: "8229228156447fb64edfadbb1a2e026d.jpg", alt: "Сосед", _id: "213213123dsfdfvcbgfhrty" }
	},
	{
		_id: "023232345222222222",
		idGame: "this-war-of-mine-1232145466778790",
		nameGame: "This War of Mine",
		icon: "soldier.svg",
		textDescription:
			"Компьютерная игра в жанре симулятора выживания с элементами стелс-экшена. Действие игры разворачивается в вымышленном городе, охваченном войной; группа героев под управлением игрока - обычные мирные жители, пытающиеся выжить в зоне военных действий.",
		linkSteam: "https://store.steampowered.com/app/282070/This_War_of_Mine/",
		linkVKPlay: "https://vkplay.ru/play/game/atomic_heart/?_1ld=3428341_2072934&_1lp=1&mt_link_id=oyqd42",
		poster: { path: "scale_1200.webp", alt: "Сосед", _id: "fdgfdgfdgfdgdfgdfg" }
	},
	{
		_id: "0343248793333333333",
		idGame: "company-of-heroes-2-435567912",
		nameGame: "Company of Heroes 2",
		icon: "helmet.svg",
		textDescription: "Компьютерная игра в жанре стратегии в реальном времени.",
		linkSteam: "https://store.steampowered.com/app/231430/Company_of_Heroes_2/",
		linkVKPlay: "https://vkplay.ru/play/game/atomic_heart/?_1ld=3428341_2072934&_1lp=1&mt_link_id=oyqd42",
		poster: { path: "company-of-heroes-2-rocket-on-land-hasozz7absia85i2.jpg", alt: "Сосед", _id: "213213123dsfdfvcbgfhrty" }
	},
	{
		_id: "044354359044444444",
		idGame: "ravenous-devils-435567912",
		nameGame: "Ravenous Devils",
		icon: "killer.svg",
		textDescription:
			"Заправляйте ателье и торговлей блюдами из человечины в городе, где преступность, коррупция и бедность — обычное явление. Персиваль и Хилдред только что переехали сюда, преследуя одну-единственную цель: как можно быстрее разбогатеть.",
		linkSteam: "https://store.steampowered.com/app/1615290/Ravenous_Devils/",
		linkVKPlay: "https://vkplay.ru/play/game/atomic_heart/?_1ld=3428341_2072934&_1lp=1&mt_link_id=oyqd42",
		poster: { path: "00442.lfWfVJE.jpg", alt: "Сосед", _id: "213213123dsfdfvcbgfhrty" }
	},
	{
		_id: "05546546555555555",
		idGame: "dota-2-435567912",
		nameGame: "Dota 2",
		icon: "dota.svg",
		textDescription:
			"Многопользовательская командная компьютерная игра в жанре MOBA. Игра изображает сражение на карте особого вида; в каждом матче участвуют две команды по пять игроков, управляющих разными «героями» - персонажами с различными наборами способностей и характеристиками.",
		linkSteam: "https://store.steampowered.com/app/570/Dota_2/",
		linkVKPlay: "https://vkplay.ru/play/game/atomic_heart/?_1ld=3428341_2072934&_1lp=1&mt_link_id=oyqd42",
		poster: { path: "image.jpg", alt: "Сосед", _id: "213213123dsfdfvcbgfhrty" }
	},
	{
		_id: "0643654354444666666",
		idGame: "inside-435567912-ins",
		nameGame: "Inside",
		icon: "clone.svg",
		textDescription:
			"Компьютерная игра в жанре платформера с элементами головоломки. Действие игры разворачивается в постапокалиптическом мире; игрок управляет безымянным мальчиком и должен избегать опасностей и преодолевать различные препятствия, чтобы продвинуться дальше.",
		linkSteam: "https://store.steampowered.com/app/570/Dota_2/",
		linkVKPlay: "https://vkplay.ru/play/game/atomic_heart/?_1ld=3428341_2072934&_1lp=1&mt_link_id=oyqd42",
		poster: { path: "41b7f20c6f18d186f731f5a251695e2a.jpg", alt: "Сосед", _id: "213213123dsfdfvcbgfhrty" }
	}
];

function fetchDataGamesShortDescription(): Promise<IDataGamesShortDescription[]> {
	return new Promise((resolve): void => {
		setTimeout(() => {
			resolve(dataGamesShortDescription);
		}, 500);
	});
}

export { fetchDataGamesShortDescription };
