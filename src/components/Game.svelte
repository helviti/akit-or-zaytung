<script>
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';

	import { fade } from 'svelte/transition';

	import { state, question, answerText } from '../components/store.js';
</script>

<Header />

<div
	in:fade={{ duration: 200 }}
	class="
  flex text-2xl md:text-3xl lg:text-4xl h-full italic font-semibold"
>
	<div
		class="bg-white py-8 px-12 flex-nowrap flex relative flex-row justify-center text-center items-center w-full lowercase border-[1px] border-gray-300 shadow-md"
	>
		{#if $state == 'playing'}
			<div class="flex flex-auto items-center justify-center">
				<span>{$question.title}</span>
			</div>
		{:else if $state == 'paused'}
			<div class="flex flex-col flex-auto space-y-8">
				{#if $answerText == 'right'}
					<div class="w-min bg-green-500 p-12 text-white m-auto shadow-md">
						<span class="">doğru cevap!</span>
					</div>
				{/if}
				{#if $answerText == 'wrong'}
					<div class="w-min bg-red-400 p-4 text-white m-auto">
						yanlış cevap!
					</div>
				{/if}
				<div class="normal-case text-xl text-gray-900">
					<div>- bu haber gerçek mi ya?</div>
					<div>- evet, hatta linki de bu:</div>
					<button
						class="mt-8 w-min m-auto bg-gray-600 bg-opacity-80 hover:bg-opacity-70 focus:bg-opacity-90 p-4 text-white shadow-md flex flex-row"
						on:click={() => {
							window.open($question.link);
						}}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 64 64"
							aria-labelledby="title"
							aria-describedby="desc"
							role="img"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							class="w-8 text-white mr-4"
						>
							<path
								data-name="layer2"
								d="M42 22h10a10 10 0 0 1 10 10 10 10 0 0 1-10 10H36a10 10 0 0 1-10-10 10 10 0 0 1 .2-2"
								fill="none"
								stroke="currentColor"
								stroke-miterlimit="10"
								stroke-width="3"
								stroke-linejoin="round"
								stroke-linecap="round"
							/>
							<path
								data-name="layer1"
								d="M22 42H12A10 10 0 0 1 2 32a10 10 0 0 1 10-10h16a10 10 0 0 1 10 10 10 10 0 0 1-.2 2"
								fill="none"
								stroke="currentColor"
								stroke-miterlimit="10"
								stroke-width="3"
								stroke-linejoin="round"
								stroke-linecap="round"
							/>
						</svg>
						{$question.src}
					</button>
				</div>
			</div>
		{/if}
	</div>
</div>

<Footer />
