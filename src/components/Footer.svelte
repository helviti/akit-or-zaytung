<script>
	import { fade } from 'svelte/transition';

	import {
		state,
		increment,
		decrement,
		startGame,
		pauseGame,
		question,
		getQuestion,
		answerText
	} from '../components/store.js';

	function checkAnswer(choice) {
		pauseGame();
		if (choice === $question.src) {
			increment();
			answerText.set('right');
		} else {
			decrement();
			answerText.set('wrong');
		}
	}
</script>

<div
	in:fade={{ duration: 200 }}
	class="flex flex-row justify-evenly h-[15%] align-middle border-[1px] border-gray-300 p-4 bg-gray-200 shadow-md"
>
	{#if $state == 'playing'}
		<button
			on:click={() => checkAnswer('akit')}
			class="font-extrabold bg-red-700 hover:bg-opacity-90 w-2/6 text-gray-100 text-3xl h-auto focus:outline-none shadow-md"
		>
			akit
		</button>
		<button
			on:click={() => checkAnswer('zaytung')}
			class="font-serif font-extrabold bg-gray-400 hover:bg-opacity-90 w-2/6 text-3xl uppercase focus:outline-none shadow-md"
		>
			zaytung
		</button>
	{/if}
	{#if $state == 'paused'}
		<button
			class="font-bold bg-gray-600 bg-opacity-80 text-xl focus:outline-none w-full text-white h-max hover:bg-opacity-70 focus:bg-opacity-90 p-4 shadow-md"
			on:click={() => {
				startGame();
				getQuestion();
			}}
		>
			sonraki soru
		</button>
	{/if}
</div>
