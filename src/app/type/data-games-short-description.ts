import type { IMiniPoster } from "@/app/type/data-presentation-slider";

export interface IDataGamesShortDescription {
	_id: string;
	idGame: string;
	nameGame: string;
	icon: string;
	textDescription: string;
	linkSteam: string;
	linkVKPlay: string;
	poster: IMiniPoster;
}
