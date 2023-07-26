import type { IVideoGames } from "@/app/type/data-video-games";

const dataVideoGames: IVideoGames[] = [
	{
		_id: "0113123",
		idGame: "hello-neighbor-1234325435",
		nameGame: "Hello Neighbor",
		icon: "shovel.svg",
		videoСlips: [
			{ path: "https://www.youtube.com/embed/n733WosmzmE?fs=0", _id: "01", alt: "Обзор 1" },
			{ path: "https://www.youtube.com/embed/BqcFz0QA7S8?fs=0", _id: "012", alt: "Обзор 1" },
			{ path: "https://www.youtube.com/embed/rZC-OSMd-Nw?fs=0", _id: "0123", alt: "Обзор 1" }
		]
	},
	{
		_id: "023232345",
		idGame: "this-war-of-mine-1232145466778790",
		nameGame: "This War of Mine",
		icon: "flag.svg",
		videoСlips: [
			{ path: "https://www.youtube.com/embed/vdPVwRKVTJQ?fs=0", _id: "01234", alt: "Обзор 1" },
			{ path: "https://www.youtube.com/embed/cXENyZBk8ns?fs=0", _id: "012345", alt: "Обзор 1" },
			{ path: "https://www.youtube.com/embed/E3ubJ2blrhc?fs=0", _id: "0123456", alt: "Обзор 1" }
		]
	},
	{
		_id: "034324879",
		idGame: "company-of-heroes-2-435567912",
		nameGame: "Company of Heroes 2",
		icon: "tank.svg",
		videoСlips: [
			{ path: "https://www.youtube.com/embed/DulGrqiARWU?fs=0", _id: "0123467345", alt: "Обзор 1" },
			{ path: "https://www.youtube.com/embed/TsUCTZEHRhU?fs=0", _id: "012346765", alt: "Обзор 1" },
			{ path: "https://www.youtube.com/embed/BWweSxDJ2G4?fs=0", _id: "0123468798ert", alt: "Обзор 1" }
		]
	},
	{
		_id: "0443543590",
		idGame: "ravenous-devils-435567912",
		nameGame: "Ravenous Devils",
		icon: "maniac.svg",
		videoСlips: [
			{ path: "https://www.youtube.com/embed/C-8Y1ENaWyA?fs=0", _id: "0123468798ertwer", alt: "Обзор 1" },
			{ path: "https://www.youtube.com/embed/wlYP5KFDzrA?fs=0", _id: "0123468798erttryrtyui", alt: "Обзор 1" },
			{ path: "https://www.youtube.com/embed/uH7WFoK6gbI?fs=0", _id: "vvvvvvvvvvvvvvvvvvbbbbbbbbbbbbb", alt: "Обзор 1" }
		]
	},
	{
		_id: "05546546555",
		idGame: "dota-2-435567912",
		nameGame: "Dota 2",
		icon: "dota.svg",
		videoСlips: [
			{ path: "https://www.youtube.com/embed/gokNITaF2Cs?fs=0", _id: "0123468798ertvcbbvc435657", alt: "Обзор 1" },
			{ path: "https://www.youtube.com/embed/8CBW4DqQaxw?fs=0", _id: "0123468798ertvcbbvc78909-", alt: "Обзор 1" },
			{ path: "https://www.youtube.com/embed/CM03leAk6SE?fs=0", _id: "0123468798ertvcbbvc45632424", alt: "Обзор 1" }
		]
	},
	{
		_id: "0643654354444",
		idGame: "inside-435567912-ins",
		nameGame: "Inside",
		icon: "man.svg",
		videoСlips: [
			{ path: "https://www.youtube.com/embed/DIYz-5b5y-A?fs=0", _id: "0123468798ertvcbbvc435657zzzz", alt: "Обзор 1" },
			{ path: "https://www.youtube.com/embed/Oct-eZ_cqzk?fs=0", _id: "0123468798ertvcbbvc435657xccc", alt: "Обзор 1" },
			{ path: "https://www.youtube.com/embed/qMgIMiQyKVI?fs=0", _id: "0123468798ertvcbbvc435657vvvv", alt: "Обзор 1" }
		]
	}
];

function fetchDataVideoGames(): Promise<IVideoGames[]> {
	return new Promise((resolve): void => {
		setTimeout(() => {
			resolve(dataVideoGames);
		}, 400);
	});
}

export { fetchDataVideoGames };
