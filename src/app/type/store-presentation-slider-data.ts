import type { IPresentationData } from "@/app/type/data-presentation-slider";

export interface IStorePresentationSliderData {
	isLoadingData: boolean;
	error: string;
	data: IPresentationData[];
}
