<script>
	import { fade } from 'svelte/transition';
	import { startGame } from './store';
</script>

<div
	class="flex flex-col items-center space-y-8 bg-gray-50 p-12 rounded-sm shadow-xl border-2 border-gray-200"
>
	<div
		class="flex flex-col text-3xl text-center text-gray-800 font-semibold items-center justify-items-center space-y-1"
	>
		<span class="font-extrabold bg-red-700 px-2 text-gray-100 shadow-md">
			akit
		</span>
		<span>mi</span>
		<span
			class="font-serif font-bold bg-gray-300 py-1 px-2 uppercase shadow-md"
		>
			zaytung
		</span>
		<span>mu?</span>
	</div>
	<button
		class="font-bold bg-green-600 text-xl focus:outline-none w-full text-white h-max hover:bg-green-500 focus:bg-green-700 mt- p-4 shadow-md"
		on:click={() => {
			startGame();
		}}
	>
		oyuna başla!
	</button>
</div>
