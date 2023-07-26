import type { IVideoGames } from "@/app/type/data-video-games";

export interface IStoreVideoGames {
	isLoadingData: boolean;
	error: string;
	data: IVideoGames[];
}
