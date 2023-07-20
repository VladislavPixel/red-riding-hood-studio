import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import type { IRouterForView } from "@/app/type/router-for-view";
import HomeL from "@/app/layots/home-l.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "home",
		component: HomeL
	},
	{
		path: "/aboutus",
		name: "aboutus",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		// только домашний роут подключается сразу; все остальные имеют ленивое подключение без прогрева
		component: () => import(/* webpackChunkName: "about" */ "../layots/about-us-l.vue")
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

export const routersForView: IRouterForView[] = [
	{
		_id: 1,
		text: "Домой",
		path: "/",
		title: "Нажмите, чтобы перейти на главную - Домой."
	},
	{
		_id: 1,
		text: "Игры",
		path: "/games",
		title: "Нажмите, чтобы перейти на страницу - Игры."
	},
	{ _id: 1, text: "О нас", path: "/aboutus", title: "Нажмите, чтобы узнать о нас." },
	{
		_id: 1,
		text: "Новости",
		path: "/news",
		title: "Нажмите, чтобы перейти на страницу - Новости."
	},
	{
		_id: 1,
		text: "Мерч",
		path: "/merchandise",
		title: "Нажмите, чтобы перейти на страницу, где Вы сможете приобрести мерч."
	},
	{
		_id: 1,
		text: "Контакты",
		path: "/contacts",
		title: "Нажмите, чтобы перейти на страницу - Контакты."
	},
	{
		_id: 1,
		text: "Предложения",
		path: "/offers",
		title: "Нажмите, чтобы перейти на страницу предложений, где Вы сможете обратиться к разработчикам со своими идеями."
	}
];

export default router;
