<script>
	import source from '../source.json';
	$: points = 0;
	let currentAnswer = 1;
	$: currentQuestion = `Sağlık Bakanlığı Uyarıyor: 'Vaka sayıları bu hızla artarsa ne işe yaradığı
			belirsiz, kimsenin sallamayacağı yeni tedbirler almak zorunda
			kalabiliriz...'
			`;
	function checkIfTrue(choice) {
		if (choice === currentAnswer) {
			points += 1;
		} else {
			points -= 1;
		}
	}
	function getRandomQuestion() {}
</script>

<svelte:head>
	<title>akit mi, zaytung mu?</title>
</svelte:head>

<div
	id="body"
	class="select-none antialiased flex flex-col h-screen space-y-10 py-6 px-4 lg:py-10 lg:px-24 bg-gray-100"
>
	<div id="header flex justify-around items-center">
		<div class="text-2xl text-center text-gray-800 font-semibold ">
			<span class="font-extrabold bg-red-700 px-2 text-gray-100">akit</span> mi,
			<span class="font-serif font-bold bg-gray-300 py-1 px-2">ZAYTUNG</span>
			mu?
		</div>
	</div>
	<div
		class="
		flex flex-row text-center text-2xl md:text-3xl lg:text-4xl h-full italic font-semibold"
	>
		<!-- <span class="mb-auto text-8xl font-serif h-full opacity-30">“</span> -->
		<div
			class="py-8 px-12 flex-nowrap flex items-center ring-gray-800 ring-2 ring-offset-2 rounded-md"
		>
			{currentQuestion}
		</div>
		<!-- <span class="mt-auto text-8xl font-serif h-full flex items-end opacity-30"
			>”</span
		> -->
	</div>
	<div class="flex flex-row justify-evenly h-auto align-middle">
		<button
			on:click={() => checkIfTrue(0)}
			class="font-extrabold bg-red-700 w-2/6 text-gray-100 ring-2 ring-red-700 ring-offset-4 text-2xl h-auto rounded-md ring-offset-gray-100 focus:outline-none"
		>
			akit</button
		>
		<div
			class="w-auto text-center px-4 py-2 ring-offset-4 ring-gray-300 ring-2 rounded-md ring-offset-gray-100"
		>
			<span class="w-full font-semibold text-4xl">{points}</span>
		</div>
		<button
			on:click={() => checkIfTrue(1)}
			class="font-serif font-bold bg-gray-200 w-2/6 ring-2 ring-gray-300 ring-offset-4 text-2xl uppercase rounded-md ring-offset-gray-100 focus:outline-none"
		>
			zaytung</button
		>
	</div>
	<div class="flex justify-center flex-col items-center" />
</div>
