<template>
	<div class="wrapper">
		<header-com :classes="'wrapper'" />
		<join-social-network :classes="'wrapper'" />
		<main className="wrapper__content block-content"></main>
		<!--<nav>
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link>
		</nav>
		<router-view />-->
	</div>
	<footer-com :classes="'wrapper'" />
</template>
