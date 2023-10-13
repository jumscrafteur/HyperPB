import type { LayoutLoad } from './$types';

import { classesFromParams, classesList } from '$lib/classes';

export const load: LayoutLoad = ({ params }) => {

    return { urlClasses: classesFromParams(params) }

    // const urlClassesList = params['classesUrl']?.split(',').map((str) => str.split('~')) || [];

    // const urlClasses = classesList.filter((classe) =>
    //     urlClassesList.find((el) => el[0] == classe.subject && el[1] == classe.group)
    // );

    // return { urlClasses }

};