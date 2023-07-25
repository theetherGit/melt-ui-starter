import { componentToImageResponse } from '@ethercorps/sveltekit-og';
import OG from './OG.svelte';

const WIDTH = 1200;
const HEIGHT = 630;

export const GET = async ({ url }) => {
	const text = url.searchParams.get('text') ?? undefined;
	const spanText = url.searchParams.get('spanText') ?? undefined;
	const width = url.searchParams.get('w') ?? WIDTH;
	const height = url.searchParams.get('h') ?? HEIGHT;

	return await componentToImageResponse(
		OG,
		{ text, spanText },
		{
			height,
			width
		}
	);
};
