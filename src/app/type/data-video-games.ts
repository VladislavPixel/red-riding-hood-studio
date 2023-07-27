export interface IVideoMini {
	alt: string;
	path: string;
	_id: string;
	imgPath: string;
	altImg: string;
}

export interface IVideoGames {
	_id: string;
	idGame: string;
	nameGame: string;
	icon: string;
	videoСlips: IVideoMini[];
}
