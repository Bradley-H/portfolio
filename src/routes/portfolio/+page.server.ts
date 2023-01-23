import type { PageServerLoad } from './$types';
import data from "../../../static/portfolio.json";

export const load = (async () => {
    return {
        props: {
            items: data
        }
    };
}) satisfies PageServerLoad;