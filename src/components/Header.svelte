<script>
	import { fade, fly } from 'svelte/transition';
	import { score, state, change } from './store';
</script>

<div
	class="text-xl lg:text-2xl text-center text-gray-800 font-semibold border-[1px] border-gray-300 bg-gray-200 py-4 px-2 lg:px-6 flex flex-row justify-between shadow-md"
	in:fade={{ duration: 200 }}
>
	<div on:click={() => state.set('init')} class="cursor-pointer mt-auto ml-1">
		<span class="font-extrabold bg-red-700 px-2 text-gray-100">akit</span>
		mi
		<span class="font-serif font-bold bg-gray-300 py-1 px-2 uppercase">
			zaytung
		</span>
		mu?
	</div>
	<div class="flex flex-row space-x-2">
		<!-- {#if change == '+'}
			<div
				class="bg-green-700 text-white px-2 py-1 rounded-md w-12"
				transition:fly={{ y: 200 }}
			>
				{change}1
			</div>
		{:else if change == '-'}
			<div
				class="bg-red-700 text-white px-2 py-1 rounded-md w-12"
				transition:fade
			>
				{change}1
			</div>
		{:else}
			<div />
		{/if} -->
		<div class="bg-white px-3 py-1">{$score} puan</div>
	</div>
</div>
