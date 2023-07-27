import { fetchDataGamesForPresentationSlider } from "@/app/fake-api/data-games-for-presentation-slider";
import { fetchDataGamesForImagesBlock } from "@/app/fake-api/data-games-for-images-block";
import { fetchDataVideoGames } from "@/app/fake-api/data-video-games";
import { fetchDataGamesShortDescription } from "@/app/fake-api/data-games-short-description";

const fakeAPI = {
	fetchDataGamesForPresentationSlider,
	fetchDataGamesForImagesBlock,
	fetchDataVideoGames,
	fetchDataGamesShortDescription
};

export { fakeAPI };
