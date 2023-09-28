import { componentToImageResponse } from '@ethercorps/sveltekit-og';
import OG from './OG.svelte';
import type {RequestHandler} from "@sveltejs/kit";

const WIDTH = 1200;
const HEIGHT = 630;

export const GET: RequestHandler = async ({ url }) => {
	const text = url.searchParams.get('text') ?? undefined;
	const spanText = url.searchParams.get('spanText') ?? undefined;
	const width = Number(url.searchParams.get('w')) ?? WIDTH;
	const height = Number(url.searchParams.get('h')) ?? HEIGHT;

	return await componentToImageResponse(
		OG,
		{ text, spanText },
		{
			height,
			width
		}
	);
};
