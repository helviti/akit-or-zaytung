<script>
	import { onMount } from 'svelte';
	import Header from '../components/Header.svelte';
	import Start from '../components/Start.svelte';
	import Game from '../components/Game.svelte';
	import Footer from '../components/Footer.svelte';

	import {
		state,
		increment,
		decrement,
		startGame,
		pauseGame,
		prev,
		question,
		getQuestion
	} from '../components/store.js';

	$: answerText = '';

	function checkAnswer(choice) {
		pauseGame();
		if (choice === $question.src) {
			increment();
			answerText = 'Dogru!';
		} else {
			decrement();
			answerText = 'Yanlis!';
		}
	}

	onMount(() => {
		getQuestion();
	});
</script>

<svelte:head>
	<title>akit mi zaytung mu?</title>
</svelte:head>

<div
	class="select-none antialiased flex flex-col h-screen space-y-4 py-16 px-8 lg:py-10 lg:px-24 bg-isabelline"
>
	{#if $state != 'init'}
		<Header />
	{/if}

	<div
		class="
		flex text-2xl md:text-3xl lg:text-4xl h-full italic font-semibold"
	>
		<div
			class="py-8 px-12 flex-nowrap flex relative flex-row justify-center text-center items-center w-full lowercase border-[1px] border-gray-300 m-4"
		>
			{#if $state == 'playing'}
				<div class="flex flex-auto items-center">
					<span>{$question.title}</span>
				</div>
			{:else if $state == 'paused'}
				<div class="flex flex-col flex-auto">
					<div>{answerText}</div>
					<div class="space-x-5">
						<button class="bg-red-200 font-medium p-2 rounded-md">
							go to article
						</button>
					</div>
				</div>
			{:else if $state == 'init'}
				<Start />
			{/if}
		</div>
	</div>
	{#if $state != 'init'}
		<div
			class="flex flex-row justify-evenly h-[15%] align-middle border-[1px] border-gray-300 p-4 bg-gray-200 shadow-md"
		>
			{#if $state == 'playing'}
				<button
					on:click={() => checkAnswer('akit')}
					class="font-extrabold bg-red-700 hover:bg-red-600 w-2/6 text-gray-100 text-3xl h-auto rounded-md focus:outline-none shadow-md"
				>
					akit
				</button>
				<button
					on:click={() => checkAnswer('zaytung')}
					class="font-serif font-extrabold bg-gray-400 hover:bg-gray-300 w-2/6 text-3xl uppercase rounded-md focus:outline-none shadow-md"
				>
					zaytung
				</button>
			{/if}
			{#if $state == 'paused'}
				<button
					class="bg-red-200 font-medium p-2 rounded-md"
					on:click={() => {
						startGame();
						getQuestion();
					}}
				>
					sonraki soru
				</button>
			{/if}
		</div>
	{/if}
</div>
{$prev}
