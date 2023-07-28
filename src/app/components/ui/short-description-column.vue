<template>
	<div class="description-short__column">
		<div class="description-short__card card-short-desc">
			<div class="card-short-desc__wrapper-img">
				<router-link title="Нажмите для перехода на страницу игры на нашем сайте." class="card-short-desc__link" to="/">
					<img class="card-short-desc__img" :src="getImgUrl('short-description-posters/', dataShort.poster.path)" :alt="dataShort.poster.alt" />
				</router-link>
			</div>
			<div class="card-short-desc__content">
				<div class="card-short-desc__wrapper-icon">
					<img class="card-short-desc__icon" title="Иконка карточки." alt="Картинка иконки поста." :src="getImgUrl('icons/short-description/', dataShort.icon)" />
				</div>
				<p title="Краткое описание." class="card-short-desc__text">{{ dataShort.textDescription }}</p>
				<div class="card-short-desc__footer">
					<p class="card-short-desc__text-market">Можете найти в одном из магазинов:</p>
					<a target="_blank" :href="dataShort.linkSteam" title="Нажмите для перехода на страницу игры в магазине Steam." class="card-short-desc__market-link">
						<img class="card-short-desc__icon-steam" alt="Иконка Steam" :src="getImgUrl('icons/marketplace/', 'steam.svg')" />
					</a>
					<a :href="dataShort.linkVKPlay" title="Нажмите для перехода на страницу игры в магазине VK Play." target="_blank" class="card-short-desc__market-link">
						<img class="card-short-desc__icon-vkplay" alt="Иконка VK Play" :src="getImgUrl('icons/marketplace/', 'vk-play.svg')" />
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	props: {
		dataShort: {
			type: Object,
			default: function () {
				return {};
			}
		}
	},
	methods: {
		getImgUrl(prefix: string, nameFile: string) {
			return require("@/app/assets/images/" + prefix + nameFile);
		}
	},
	mounted() {
		console.log(this.dataShort, "Данные конкретной колонки");
	}
});
</script>
