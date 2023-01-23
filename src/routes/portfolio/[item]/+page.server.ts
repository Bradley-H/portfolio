import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import data from "../../../../static/portfolio.json";

let msg: string = "";

export const load = (({ params }) => {
    //find the item in the data json file that matches the title of the item in the url
    const item = data.find((item) => item.title.trim().replace(" ", "-") === params.item);

   //if item is found
    if (!item) {
        msg = `No project found. I'll redirect you in a few seconds. :)`;
        throw error(404, msg);
    }


    
    return { 
        props: {
            item,
            msg
        }
    };
}) satisfies PageServerLoad;