<template>
	<div class="wrapper">
		<header-com :classes="'wrapper'" />
		<join-social-network :classes="'wrapper'" />
		<main class="wrapper__content block-content">
			<router-view />
		</main>
	</div>
	<footer-com :classes="'wrapper'" />
</template>
