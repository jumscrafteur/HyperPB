<script lang="ts">
	import { twMerge as tw } from 'tailwind-merge';

	let className: string | undefined = undefined;

	export let col_start: number;
	export let row_span: number = 1;
	export let row_start: number;

	export { className as class };
</script>

<div
	class={tw(
		'rounded-sm p-1',
		row_start == 1 && 'row-start-[1]',
		row_start == 2 && 'row-start-[2]',
		row_start == 3 && 'row-start-[3]',
		row_start == 4 && 'row-start-[4]',
		row_start == 5 && 'row-start-[5]',
		row_start == 6 && 'row-start-[6]',
		row_start == 7 && 'row-start-[7]',
		row_start == 8 && 'row-start-[8]',
		row_start == 9 && 'row-start-[9]',
		row_start == 10 && 'row-start-[10]',
		row_start == 11 && 'row-start-[11]',
		row_start == 12 && 'row-start-[12]',
		row_start == 13 && 'row-start-[13]',
		row_start == 14 && 'row-start-[14]',

		row_span == 1 && 'row-span-1',
		row_span == 2 && 'row-span-2',
		row_span == 3 && 'row-span-3',

		col_start == 1 && 'col-start-1',
		col_start == 2 && 'col-start-2',
		col_start == 3 && 'col-start-3',
		col_start == 4 && 'col-start-4',
		col_start == 5 && 'col-start-5',
		col_start == 6 && 'col-start-6',
		className
	)}
>
	<slot />
</div>
