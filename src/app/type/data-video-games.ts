import type { IMiniPoster } from "@/app/type/data-presentation-slider";

export interface IVideoGames {
	_id: string;
	idGame: string;
	nameGame: string;
	icon: string;
	videoСlips: IMiniPoster[];
}
