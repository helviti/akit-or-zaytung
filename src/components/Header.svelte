<script>
	import { fade } from 'svelte/transition';
	import { score } from './store';
</script>

<div
	class="text-xl lg:text-2xl text-center text-gray-800 font-semibold bg-gray-200 py-4 px-2 lg:px-6 flex flex-row justify-between shadow-sm"
	in:fade={{ duration: 100 }}
>
	<div>
		<span class="font-extrabold bg-red-700 px-2 text-gray-100">akit</span> mi
		<span class="font-serif font-bold bg-gray-300 py-1 px-2 uppercase"
			>zaytung</span
		>
		mu?
	</div>
	<div class="flex flex-row space-x-2">
		<div>+1 -1 effect here</div>
		<div>{$score} puan</div>
	</div>
</div>
