export interface IMiniPoster {
	alt: string;
	path: string;
}

export interface IPresentationData {
	_id: string;
	idGame: string;
	nameGame: string;
	posterGameNameFile: string;
	alt: string;
	miniPosters: IMiniPoster[];
	phrase: string;
}
