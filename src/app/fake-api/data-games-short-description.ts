import type { IDataGamesShortDescription } from "@/app/type/data-games-short-description";

const dataGamesShortDescription: IDataGamesShortDescription[] = [
	{
		_id: "011312311111",
		idGame: "hello-neighbor-1234325435",
		nameGame: "Hello Neighbor",
		icon: "gloves.svg",
		textDescription: "Hello Neighbor - это игра в жанре стелс-хоррор о том, как проникнуть в дом вашего жуткого соседа..."
	},
	{
		_id: "023232345222222222",
		idGame: "this-war-of-mine-1232145466778790",
		nameGame: "This War of Mine",
		icon: "soldier.svg",
		textDescription:
			"Компьютерная игра в жанре симулятора выживания с элементами стелс-экшена. Действие игры разворачивается в вымышленном городе, охваченном войной; группа героев под управлением игрока - обычные мирные жители, пытающиеся выжить в зоне военных действий."
	},
	{
		_id: "0343248793333333333",
		idGame: "company-of-heroes-2-435567912",
		nameGame: "Company of Heroes 2",
		icon: "helmet.svg",
		textDescription: "Компьютерная игра в жанре стратегии в реальном времени."
	},
	{
		_id: "044354359044444444",
		idGame: "ravenous-devils-435567912",
		nameGame: "Ravenous Devils",
		icon: "killer.svg",
		textDescription:
			"Заправляйте ателье и торговлей блюдами из человечины в городе, где преступность, коррупция и бедность — обычное явление. Персиваль и Хилдред только что переехали сюда, преследуя одну-единственную цель: как можно быстрее разбогатеть."
	},
	{
		_id: "05546546555555555",
		idGame: "dota-2-435567912",
		nameGame: "Dota 2",
		icon: "dota.svg",
		textDescription:
			"Многопользовательская командная компьютерная игра в жанре MOBA. Игра изображает сражение на карте особого вида; в каждом матче участвуют две команды по пять игроков, управляющих разными «героями» - персонажами с различными наборами способностей и характеристиками."
	},
	{
		_id: "0643654354444666666",
		idGame: "inside-435567912-ins",
		nameGame: "Inside",
		icon: "clone.svg",
		textDescription:
			"Компьютерная игра в жанре платформера с элементами головоломки. Действие игры разворачивается в постапокалиптическом мире; игрок управляет безымянным мальчиком и должен избегать опасностей и преодолевать различные препятствия, чтобы продвинуться дальше."
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
