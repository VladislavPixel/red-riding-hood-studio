<template>
	<div class="gallery-block-images__modal-wrapper modal-window-gallery-images">
		<div class="modal-window-gallery-images__container">
			<h2 title="Игра, изображения которой Вы смотрите." class="modal-window-gallery-images__title">
				Изображение игры --> <span>{{ nameGame }}</span>
			</h2>
			<div class="modal-window-gallery-images__img-block">
				<img :title="dataGallery.alt" class="modal-window-gallery-images__img-target" :src="getImgUrl(dataGallery.path)" :alt="dataGallery.alt" />
				<img
					@click="updateCurrent(current - 1)"
					title="Нажмите для переключения изображений влево."
					class="modal-window-gallery-images__arrow modal-window-gallery-images__arrow_left"
					alt="Стрелка переключения изображений влево"
					src="@/app/assets/images/icons/arrow-in-square.svg"
				/>
				<img
					@click="updateCurrent(current + 1)"
					title="Нажмите для переключения изображений вправо."
					class="modal-window-gallery-images__arrow modal-window-gallery-images__arrow_right"
					alt="Стрелка переключения изображений вправо"
					src="@/app/assets/images/icons/arrow-in-square.svg"
				/>
				<img
					@click="$emit('close-modal')"
					src="@/app/assets/images/icons/close.svg"
					class="modal-window-gallery-images__close-icon"
					title="Нажмите, чтобы закрыть режим просмотра Изображений."
					alt="Иконка квадрата со стрелкой внутри для закрытия режима просмотра Изображений."
				/>
			</div>
			<div class="modal-window-gallery-images__info-images">
				<span title="Информация по просмотренным Изображениям" class="modal-window-gallery-images__number-flag">{{ current + 1 }}</span> <span title="Всего изображений в галерее.">/ {{ allElements }}</span>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	props: {
		dataGallery: {
			type: Object,
			default: function () {
				return {};
			}
		},
		nameGame: {
			type: String,
			default: ""
		},
		current: {
			type: Number,
			default: 0
		},
		allElements: {
			type: Number,
			default: 0
		}
	},
	methods: {
		getImgUrl(path: string) {
			return require("@/app/assets/images/gallery-games/" + path);
		},
		updateCurrent(newCurrent: number) {
			const value = newCurrent < 0 ? this.allElements - 1 : newCurrent > this.allElements - 1 ? 0 : newCurrent;

			this.$emit("update-current", { value });
		}
	}
});
</script>
