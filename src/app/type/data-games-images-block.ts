import type { IMiniPoster } from "@/app/type/data-presentation-slider";

export interface IDataGamesImagesBlock {
	_id: string;
	idGame: string;
	nameGame: string;
	gallery: IMiniPoster[];
}
