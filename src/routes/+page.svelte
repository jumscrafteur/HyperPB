<script>
	import { classes } from '$lib/classes';
	import Cell from '$lib/Cell.svelte';

	const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
</script>

<div
	class="grid grid-flow-col gap-1 grid-rows-[repeat(14,_minmax(0,_1fr))] grid-cols-[100px,repeat(5,_minmax(0,_1fr))] p-1 bg-zinc-200 h-full"
>
	<div />
	{#each [...Array(13).keys()] as n}
		<Cell
			col_start={1}
			row_start={n + 2}
			class="bg-zinc-100 flex flex-col justify-between text-right"
		>
			<p>{8 + n}h00</p>
			<p>{8 + n}h50</p>
		</Cell>
	{/each}
	{#each DAYS as day, n}
		<Cell row_start={1} col_start={n + 2} class="bg-zinc-100 flex justify-center items-center">
			<p>{day}</p>
		</Cell>
	{/each}
	{#each classes as classe}
		<Cell
			row_start={classe.start - 8 + 2}
			row_span={classe.end - classe.start}
			col_start={DAYS.indexOf(classe.day) + 2}
			class="bg-red-400 drop-shadow flex flex-col justify-center items-center text-center py-3 gap-4"
		>
			<p>
				<span class="bg-white rounded-full px-2">{classe.type[0]}</span>
				{classe.subject}
			</p>
			<p class="bg-white rounded-full px-2">
				{classe.building}
				{classe.room.toString().padStart(3, '0')}
			</p>
			{#if classe.week != 'all'}
				<p class="bg-white rounded-full px-2 fixed bottom-2 right-2 text-sm">
					{classe.week == 'even' ? 'P' : 'I'}
				</p>
			{/if}
		</Cell>
	{/each}
	{#each [...Array(40).keys()] as n}
		<div class="bg-zinc-900/20" />
	{/each}
</div>
