<script lang="ts">
	import * as Sheet from '$lib/components/ui/sheet';
	import { Button } from '$lib/components/ui/button';
	import { Copy, ExclamationTriangle, Pencil2, Share1 } from 'radix-icons-svelte';
	import { Separator } from '$lib/components/ui/separator';
	import * as Select from '$lib/components/ui/select';
	import * as Table from '$lib/components/ui/table';

	import ClassesList from './ClassesList.svelte';

	import { type classe, faculties, classesList, classes } from '$lib/classes';
	import { page } from '$app/stores';

	let selectedFaculty: { value: string; label: string; disabled: boolean } | undefined;
	$: filteredSubjects = classesList.reduce((list: string[], classe) => {
		if (
			selectedFaculty &&
			!list.includes(classe.subject) &&
			classe.faculty == selectedFaculty.value &&
			!$classes.includes(classe)
		)
			return [...list, classe.subject];
		return list;
	}, []);
	let selectedSubject: { value: string; label: string; disabled: boolean } | undefined;

	$: filteredGroupes = classesList.reduce((list: string[], classe) => {
		if (
			selectedFaculty &&
			selectedSubject &&
			!list.includes(classe.group) &&
			classe.faculty == selectedFaculty.value &&
			classe.subject == selectedSubject.value
		)
			return [...list, classe.group];
		return list;
	}, []);
	let selectedGroup: { value: string; label: string; disabled: boolean } | undefined;

	$: filteredClasses = classesList.reduce((list: classe[], classe) => {
		if (
			selectedFaculty &&
			selectedSubject &&
			selectedGroup &&
			!list.includes(classe) &&
			classe.faculty == selectedFaculty.value &&
			classe.subject == selectedSubject.value &&
			classe.group == selectedGroup.value
		)
			return [...list, classe];
		return list;
	}, []);

	$: linkString = Array(
		...$classes.reduce(
			(set, classe) => set.add(`${classe.subject}~${classe.group}`),
			new Set<String>()
		)
	).join(',');

	// const url = new URL($page.url);
</script>

<Sheet.Root preventScroll={false}>
	<Sheet.Trigger asChild let:builder>
		<Button builders={[builder]} variant="outline" class="h-full"><Pencil2 /></Button>
	</Sheet.Trigger>
	<Sheet.Content side="left" class="overflow-scroll">
		<Sheet.Header>
			<Sheet.Title>Select your classes</Sheet.Title>
			<Separator class="my-4" />
			<Sheet.Description class="flex gap-2">
				<ExclamationTriangle class="text-red-500 flex-none mt-2" size={25} />
				<p>
					This application won't take care of collisions between classes, <span
						class="underline decoration-red-500"
					>
						please check with the official planning to make sure everything is OK.</span
					>
				</p>
			</Sheet.Description>
		</Sheet.Header>
		<Separator class="my-4" />
		<ClassesList />
		<Separator class="my-4" />

		<div class="flex flex-col gap-3">
			<Select.Root bind:selected={selectedFaculty}>
				<Select.Trigger class="w-full">
					<Select.Value placeholder="Faculties" />
				</Select.Trigger>
				<Select.Content>
					{#each faculties as faculty}
						<Select.Item value={faculty}>{faculty}</Select.Item>
					{/each}
				</Select.Content>
			</Select.Root>

			<Select.Root disabled={!selectedFaculty} bind:selected={selectedSubject}>
				<Select.Trigger class="w-full">
					<Select.Value placeholder="Subjects" />
				</Select.Trigger>
				<Select.Content>
					{#each filteredSubjects as subject}
						<Select.Item value={subject}>{subject}</Select.Item>
					{/each}
				</Select.Content>
			</Select.Root>

			<Select.Root disabled={!selectedSubject} bind:selected={selectedGroup}>
				<Select.Trigger class="w-full">
					<Select.Value placeholder="Groupes" />
				</Select.Trigger>
				<Select.Content>
					{#each filteredGroupes as groupe}
						<Select.Item value={groupe}>{groupe}</Select.Item>
					{/each}
				</Select.Content>
			</Select.Root>

			<Table.Root>
				<Table.Caption>List of hours of your seleted classe</Table.Caption>
				<Table.Header>
					<Table.Row>
						<Table.Head>Day</Table.Head>
						<Table.Head>Hour</Table.Head>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{#each filteredClasses as classe, i (i)}
						<Table.Row>
							<Table.Cell>{classe.day}</Table.Cell>
							<Table.Cell>{classe.start}h00 - {classe.end}h00</Table.Cell>
						</Table.Row>
					{/each}
				</Table.Body>
			</Table.Root>
			<Button
				variant="creative"
				disabled={!selectedGroup}
				on:click={() => {
					$classes = [...$classes, ...filteredClasses];
					selectedFaculty = selectedSubject = selectedGroup = undefined;
				}}>Add Selected Classes</Button
			>

			<div
				class="rounded-md border whitespace-nowrap overflow-scroll px-2 py-1 flex gap-2 items-center justify-between"
			>
				<p class=" ">{$page.url.origin + '/' + encodeURI(linkString)}</p>
				<Button
					class="sticky right-0"
					on:click={() => {
						navigator.clipboard.writeText($page.url.origin + '/' + encodeURI(linkString));
					}}><Copy /></Button
				>
			</div>
		</div>

		<!-- <Sheet.Footer>
			<Sheet.Close asChild let:builder>
				<Button builders={[builder]} type="submit">Save changes</Button>
			</Sheet.Close>
		</Sheet.Footer> -->
	</Sheet.Content>
</Sheet.Root>
