<script lang="ts">
	import { createDropdownMenu } from '@melt-ui/svelte';
	import { languages, language, switchLanguage } from '@inlang/sdk-js';

	import Languages from '$lib/icons/languages.svelte';

	const { trigger, menu, createMenuRadioGroup } = createDropdownMenu();

	const { radioGroup, radioItem, isChecked } = createMenuRadioGroup({
		value: language
	});
</script>

<button
	type="button"
	class="!data-[highlighted]:ring-offset-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white p-0 text-sm font-medium text-blue-900 ring-1 ring-gray-950/10 transition-colors hover:bg-white/90 focus:ring data-[highlighted]:outline-none data-[highlighted]:ring-blue-400"
	melt={$trigger}
>
	<Languages class="h-4 w-4" />
	<span class="sr-only">Open Languages Popover</span>
</button>

<div
	class="z-10 flex max-h-[300px] min-w-[8rem] flex-col rounded-md bg-white p-1 shadow-lg shadow-neutral-900/30 ring-1 ring-gray-950/10 lg:max-h-none"
	melt={$menu}
>
	<div melt={$radioGroup}>
		{#each languages as language}
			<button
				class="relative z-20 flex h-[25px] min-h-[25px] w-full select-none items-center rounded-sm pl-6 pr-1 text-sm leading-none text-blue-900 outline-none !ring-0 data-[highlighted]:bg-blue-200 data-[disabled]:text-neutral-300 data-[highlighted]:text-blue-900"
				melt={$radioItem({ value: language })}
				on:click={() => switchLanguage(language)}
			>
				<div class="absolute left-0 inline-flex w-[25px] items-center justify-center">
					{#if $isChecked(language)}
						<div class="h-[4.75px] w-[4.75px] rounded-full bg-blue-900" />
					{/if}
				</div>
				{language === 'en' ? 'English' : 'German'}
			</button>
		{/each}
	</div>
</div>
