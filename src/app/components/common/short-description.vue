<template>
	<div :class="`${classes}__short-description description-short`">
		<h2 class="description-short__title">
			<span title="Название блока">Знакомимся поближе</span>
			<img title="Красная звезда" class="description-short__icon" src="@/app/assets/images/icons/star.svg" alt="Иконка красной звезды" />
		</h2>
		<div class="description-short__row">
			<short-description-column v-for="shortDescData of shortDescription" :key="shortDescData._id" :dataShort="shortDescData" />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";
import ShortDescriptionColumn from "@/app/components/ui/short-description-column.vue";

export default defineComponent({
	nameComponent: "short-description",
	components: {
		ShortDescriptionColumn
	},
	props: {
		classes: {
			type: String,
			default: "some-component"
		}
	},
	computed: {
		...mapState({
			shortDescription: (state: any) => state.shortDescription.data
		})
	}
});
</script>
