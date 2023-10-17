<template>
	<section class="mgContainer" id="portafolio">
		<article class="mgContent">
			<div class="tittle center-center flex-col mb-4">
				<h2>Portafolio</h2>
				<span class="text-sm"> Mi historial de trabajos </span>
			</div>
			<div class="center-center flex-col">
				<div class="center-center gap-2 sm:gap-5 mb-6">
					<span
						v-for="(item, index) in categorys"
						@click="handleClickCategory(item, index)"
						:key="index"
						:class="[
							{
								'active-work bg-secondary text-base-content duration-[750ms]':
									active === index,
							},
							'work__item cursor-pointer text-primary py-1 px-3 rounded-lg capitalize',
						]"
					>
						{{ item }}
					</span>
				</div>
				<div class="grid sm:grid-cols-2 gap-10">
					<div
						v-for="(item, index) in projectsFilter"
						:key="index"
						class="w-full max-w-md bg-white p-5 rounded-2xl grid gap-1 border border-gray-300"
					>
						<img :src="item.img" alt="" class="w-full mb-4" />
						<h3 class="text-2xl font-semibold">{{ item.title }}</h3>
						<p class="text-sm text-base-100">{{ item.tools }}</p>
						<a
							:href="item.url"
							class="w-20 h-10 center-center text-base-content text-sm flex items-center bg-primary/50 hover:bg-primary rounded-lg gap-1 hover:gap-5 hover:w-24 mt-8 transition-[0.4s]"
							target="_blank"
						>
							Ver
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="25"
								height="25"
								viewBox="0 0 24 24"
							>
								<path
									fill="currentColor"
									d="M17.92 11.62a1 1 0 0 0-.21-.33l-5-5a1 1 0 0 0-1.42 1.42l3.3 3.29H7a1 1 0 0 0 0 2h7.59l-3.3 3.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l5-5a1 1 0 0 0 .21-.33a1 1 0 0 0 0-.76Z"
								/>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</article>
	</section>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import Conecta2 from "@/assets/portfolio/Conecta2.jpg";
import RYD_Booking from "@/assets/portfolio/RYD_Booking.jpg";
import Store69 from "@/assets/portfolio/69Store.jpg";
import CalculadoraJS from "@/assets/portfolio/CalculadoraJS.jpg";
import Manage from "@/assets/portfolio/Manage.jpg";
import type Project from "@/types";

const categorys = ["Todo", "Frontend", "Backend", "Sonido"];
const projects = [
	{
		title: "Conecta-2",
		url: "https://www.youtube.com/watch?v=Ve-QLiwjmLs",
		category: ["Sonido"],
		tools: "Ableton Live - Native Intruments - Waves",
		img: Conecta2,
	},
	{
		title: "RYD Booking",
		url: "http://frontend-r-y-d.s3-website.us-east-2.amazonaws.com/Home",
		category: ["Frontend", "Backend"],
		tools: "ReactJS - Taildwind - Java - Spring Boot - MySQL",
		img: RYD_Booking,
	},
	{
		title: "69 Store",
		url: "https://juanjosemarinlujan.github.io/69Store",
		category: ["Frontend"],
		tools: "ReactJS - Taildwind - Firebase",
		img: Store69,
	},
	{
		title: "Manage Web",
		url: "https://juanjosemarinlujan.github.io/Manage",
		category: ["Frontend"],
		tools: "Html - Css",
		img: Manage,
	},
	{
		title: "Calculadora Web",
		url: "https://juanjosemarinlujan.github.io/Calculadora1",
		category: ["Frontend"],
		tools: "Html - Saas - Javascript",
		img: CalculadoraJS,
	},
];

const item = ref<any>({ name: "Todo" });
const active = ref<number>(0);
const projectsFilter = ref<Project[]>(projects);

function handleClickCategory(event: string, index: number) {
	item.value = { name: event };
	active.value = index;
}

watch(item, () => {
	if (item.value.name === "Todo") {
		projectsFilter.value = projects;
	} else {
		projectsFilter.value = projects.filter((project) => {
			return project.category.includes(item.value.name);
		});
	}
});
</script>

<style scoped></style>
