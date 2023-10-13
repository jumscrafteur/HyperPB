<script lang="ts">
	import { type classe, classes } from '$lib/classes';
	import Cell from '$lib/Cell.svelte';
	import { twMerge } from 'tailwind-merge';
	import EditPanel from './EditPanel.svelte';

	const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

	let indexedHours: { [key: number]: classe[] } = {};
	let totalHourCount = 0;

	classes.subscribe((classesList) => {
		indexedHours = {};
		totalHourCount = 0;

		classesList.forEach((classe) => {
			const index = classe.start + DAYS.indexOf(classe.day) * 13;
			const indexedHour = indexedHours[index];
			if (!indexedHour) {
				indexedHours[index] = [classe];
				totalHourCount += classe.end - classe.start;
				return;
			}
			if (indexedHours[index].length > 2) return;
			if (indexedHours[index].length == 2) {
				if (indexedHours[index].filter((classe) => classe.week == 'all').length != 0) return;
				if (indexedHours[index].filter((classe) => classe.week == 'even').length != 1) return;
				if (indexedHours[index].filter((classe) => classe.week == 'odd').length != 1) return;
			}
			indexedHours[index] = [...indexedHours[index], classe];
		});
	});
</script>

<div
	class="grid grid-flow-col gap-1 grid-rows-[repeat(14,_minmax(0,_1fr))] grid-cols-[60px,repeat(5,_minmax(100px,_1fr))] p-1 h-screen font-mono md:overflow-x-scroll"
>
	<EditPanel />
	{#each [...Array(13).keys()] as n}
		<Cell
			col_start={1}
			row_start={n + 2}
			class="bg-black text-white flex flex-col justify-between text-right"
		>
			<p class="text-sm">{8 + n}h00</p>
			<p class="text-sm">{8 + n}h50</p>
		</Cell>
	{/each}
	{#each DAYS as day, n}
		<Cell
			row_start={1}
			col_start={n + 2}
			class="bg-black flex justify-center items-center text-white font-bold"
		>
			<p>{day}</p>
		</Cell>
	{/each}
	{#each Object.values(indexedHours) as classes}
		<Cell
			row_start={classes[0].start - 8 + 2}
			row_span={classes[0].end - classes[0].start}
			col_start={DAYS.indexOf(classes[0].day) + 2}
			class="grid grid-cols-2 grid-rows-1 gap-x-1 p-0"
		>
			{#each classes as classe}
				<div
					class={twMerge(
						'bg-blue-200 drop-shadow flex flex-col justify-center items-center text-center gap-1 row-start-1 py-3',
						classe.week == 'all' && 'col-span-2',
						classe.week == 'even' && 'col-start-2'
					)}
				>
					<p class="text-sm">
						{classe.subject}
					</p>
					<p class="bg-white rounded-full px-4 text-sm">
						{classe.type[0]} -
						{classe.building}{classe.room.toString().padStart(3, '0')}
					</p>
				</div>
				{#if classes.length == 1 && classe.week != 'all'}
					<div class={twMerge('bg-neutral-200/70', classe.week == 'even' && 'col-start-1')} />
				{/if}
			{/each}
		</Cell>
	{/each}
	{#each [...Array(13 * 5 - totalHourCount).keys()] as n}
		<div class="bg-neutral-200/70" />
	{/each}
</div>
