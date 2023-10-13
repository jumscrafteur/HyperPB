<script lang="ts">
	import * as Collapsible from '$lib/components/ui/collapsible';
	import { CaretSort, Trash } from 'radix-icons-svelte';
	import { Button } from '$lib/components/ui/button';

	import { classes } from '$lib/classes';
</script>

<Collapsible.Root class="w-[350px] space-y-2" open={true}>
	<div class="flex items-center justify-between space-x-4 px-4">
		<h4 class="text-sm font-semibold">Selected classes</h4>
		<Collapsible.Trigger asChild let:builder>
			<Button builders={[builder]} variant="ghost" size="sm" class="w-9 p-0">
				<CaretSort class="h-4 w-4" />
				<span class="sr-only">Toggle</span>
			</Button>
		</Collapsible.Trigger>
	</div>
	<Collapsible.Content class="space-y-2">
		{#each $classes as classe}
			<div
				class="rounded-md border px-4 py-3 font-mono text-sm grid grid-cols-[auto,max-content] grid-row-1 items-center"
			>
				<div>
					<p>{classe.subject}</p>
					<p class="text-xs text-neutral-500">{classe.start}h00 - {classe.end}h00</p>
				</div>
				<Button
					variant="outline"
					size="icon"
					on:click={() => {
						$classes = $classes.filter((iterClasse) => iterClasse != classe);
					}}
				>
					<Trash class="h-4 w-4 text-red-500" />
				</Button>
			</div>
		{/each}
	</Collapsible.Content>
</Collapsible.Root>
