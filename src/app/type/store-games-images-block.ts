import type { IDataGamesImagesBlock } from "@/app/type/data-games-images-block";

export interface IStoreGamesImagesBlock {
	isLoadingData: boolean;
	error: string;
	data: IDataGamesImagesBlock[];
}
