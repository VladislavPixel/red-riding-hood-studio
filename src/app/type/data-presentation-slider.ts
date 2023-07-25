export interface IMiniPoster {
	alt: string;
	path: string;
	_id: string;
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
