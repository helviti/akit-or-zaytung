<script>
	import { onMount } from 'svelte';
	import Start from '../components/Start.svelte';
	import Game from '../components/Game.svelte';

	import { state, prev, question, getQuestion } from '../components/store.js';

	$: answerText = '';

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
	{#if $state == 'init'}
		<Start />
	{:else if $state != 'init'}
		<Game />
	{/if}
</div>
