import type { IDataGamesShortDescription } from "@/app/type/data-games-short-description";

export interface IStoreShortDescription {
	isLoadingData: boolean;
	error: string;
	data: IDataGamesShortDescription[];
}
