<template>
	<section class="mgContainer animation" id="contacto">
		<article class="mgContent">
			<div class="tittle center-center flex-col mb-4">
				<h2>Contactarme</h2>
				<span class="text-sm">Escribeme</span>
			</div>

			<div class="">
				<div class="center-center flex-col">
					<h3 class="text-center text-xl font-medium mb-4">Mensaje via</h3>
					<div class="w-full center-center gap-5 sm:gap-10">
						<div
							class="whatsapp w-full max-w-[208px] h-52 center-center flex-col bg-white p-4 gap-2 rounded-xl text-center border border-gray-300 cursor-default"
						>
							<div class="center-center flex-col">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="35"
									height="35"
									viewBox="0 0 24 24"
									class="text-primary mb-1 hover:text-[#25d366]"
								>
									<path
										fill="currentColor"
										d="M16.6 14c-.2-.1-1.5-.7-1.7-.8c-.2-.1-.4-.1-.6.1c-.2.2-.6.8-.8 1c-.1.2-.3.2-.5.1c-.7-.3-1.4-.7-2-1.2c-.5-.5-1-1.1-1.4-1.7c-.1-.2 0-.4.1-.5c.1-.1.2-.3.4-.4c.1-.1.2-.3.2-.4c.1-.1.1-.3 0-.4c-.1-.1-.6-1.3-.8-1.8c-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3c-.6.6-.9 1.3-.9 2.1c.1.9.4 1.8 1 2.6c1.1 1.6 2.5 2.9 4.2 3.7c.5.2.9.4 1.4.5c.5.2 1 .2 1.6.1c.7-.1 1.3-.6 1.7-1.2c.2-.4.2-.8.1-1.2l-.4-.2m2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2c5.5 0 9.9-4.4 9.9-9.9c.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3c-1.5 0-2.9-.4-4.2-1.1l-.3-.2l-3.1.8l.8-3l-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4"
									/>
								</svg>
								<h3 class="text-sm mb-3 hover:text-[#25d366]">WhatsApp</h3>
							</div>
							<span class="block text-sm mb-3 hover:text-[#25d366]">
								{{ contact.whatsapp.phone }}
							</span>
							<a
								:href="contact.whatsapp.url"
								class="text-primary text-sm inline-flex items-center justify-center gap-x-1 hover:text-[#25d366] hover:gap-5 transition-[0.5s]"
								target="_blank"
							>
								Escribeme
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="25"
									height="25"
									viewBox="0 0 24 24"
									class="transition-[0.5s]"
								>
									<path
										fill="currentColor"
										d="M17.92 11.62a1 1 0 0 0-.21-.33l-5-5a1 1 0 0 0-1.42 1.42l3.3 3.29H7a1 1 0 0 0 0 2h7.59l-3.3 3.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l5-5a1 1 0 0 0 .21-.33a1 1 0 0 0 0-.76Z"
									/>
								</svg>
							</a>
						</div>

						<div
							class="messenger w-full max-w-[208px] h-52 center-center flex-col bg-white p-4 gap-2 rounded-xl text-center border border-gray-300 cursor-default"
						>
							<div class="center-center flex-col">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="35"
									height="35"
									viewBox="0 0 24 24"
									class="text-primary mb-1 hover:text-[#006AFF]"
								>
									<path
										fill="currentColor"
										d="M11.991 1a10.614 10.614 0 0 0-11 10.7a10.461 10.461 0 0 0 3.414 7.866l.052 1.69A1.8 1.8 0 0 0 6.256 23a1.82 1.82 0 0 0 .726-.152L8.903 22a11.895 11.895 0 0 0 3.088.4a10.615 10.615 0 0 0 11.001-10.7a10.615 10.615 0 0 0-11-10.7Zm0 19.4a9.862 9.862 0 0 1-2.635-.35a1.799 1.799 0 0 0-1.196.092l-1.714.756l-.045-1.493A1.81 1.81 0 0 0 5.8 18.13a8.488 8.488 0 0 1-2.81-6.43a8.66 8.66 0 0 1 9-8.7a8.705 8.705 0 1 1 0 17.4Zm3.735-11.815l-2.313 2.755l-3.347-2.056a.998.998 0 0 0-1.289.21L5.726 13.13a1 1 0 1 0 1.53 1.285l2.499-2.975l3.347 2.056a.998.998 0 0 0 1.289-.21l2.866-3.415a1 1 0 1 0-1.531-1.286Z"
									/>
								</svg>
								<h3
									class="contact__card-title text-sm mb-3 hover:text-[#006AFF]"
								>
									Messenger
								</h3>
							</div>
							<span class="block text-sm mb-3 hover:text-[#006AFF]">
								{{ contact.messenger.username }}
							</span>
							<a
								:href="contact.messenger.url"
								class="text-primary text-sm inline-flex items-center justify-center gap-x-1 hover:text-[#006AFF] hover:gap-5 transition-[0.5s]"
								target="_blank"
							>
								Escribeme
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="25"
									height="25"
									viewBox="0 0 24 24"
									class="transition-[0.5s]"
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
				<!--      <Form />-->
			</div>
		</article>
	</section>
</template>

<script setup lang="ts">
const contact = {
	whatsapp: {
		phone: "+57 302 435 5354",
		url: "https://api.whatsapp.com/send/?phone=573024355354&text&type=phone_number&app_absent=0",
	},
	messenger: {
		username: "juanjosem.97",
		url: "https://m.me/juanjose.m97",
	},
};
</script>

<style scoped>
.whatsapp:hover,
.whatsapp:hover div svg {
	color: #25d366;
	transition-duration: 0.3s;
	border-color: #25d366;
}

.messenger:hover,
.messenger:hover div svg {
	color: #006aff;
	transition-duration: 0.3s;
	border-color: #006aff;
}
</style>
