<script>
	import { i } from '@inlang/sdk-js';
	import LanguageSwitcher from './LanguageSwitcher.svelte';
</script>

<LanguageSwitcher />

<h1>{i('welcome')}</h1>
<p>{@html i('description')}</p>
