<script lang="ts">
	import { classes } from '$lib/classes';
	import type { PageData } from './$types';

	export let data: PageData;

	$classes = data.urlClasses;
</script>

<slot />

<!-- http://localhost:5173/Programming%20Paradigms~MSEsg2,Programming%20Languages~1211Bsg3,Web%20and%20Cloud%20Applications~1241Bsg1,Romanian%20languages~1211Bsg3,Software%20Design%20Techniques~1241Bsg1,Software%20Engineering~1241Bsg1,Game%20and%20interactive%20simulation%20systems~MSEsg2 -->
