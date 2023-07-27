<template>
	<div class="video-gallery-block__main-video">
		<div class="video-gallery-block__main-container">
			<div class="video-gallery-block__container-frame">
				<section>
					<iframe :src="dataCurrent.path" :title="dataCurrent.alt" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
				</section>
			</div>
			<span class="video-gallery-block__video-decor video-gallery-block__video-decor_left"></span>
			<span class="video-gallery-block__video-decor video-gallery-block__video-decor_right"></span>
		</div>
	</div>
	<div class="video-gallery-block__other-videos">
		<video-gallery-column @update-active-index="$emit('update-active-index', $event)" v-for="(dataVideo, index) of otherData" :index="index" :key="dataVideo._id" :videoConfig="dataVideo" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VideoGalleryColumn from "@/app/components/ui/video-gallery-column.vue";

export default defineComponent({
	components: {
		VideoGalleryColumn
	},
	props: {
		dataCurrent: {
			type: Object,
			default: function () {
				return {};
			}
		},
		otherData: {
			type: Object,
			default: function () {
				return {};
			}
		}
	}
});
</script>
