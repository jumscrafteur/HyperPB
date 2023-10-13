export interface classe {
    subject:
    "Programming Paradigms" |
    "Programming Languages" |
    "Web and Cloud Applications" |
    "Romanian languages" |
    "Software Design Techniques" |
    "Software Engineering" |
    "Game and interactive simulation systems"

    day: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday"
    start: number
    end: number
    week: "even" | "odd" | "all"
    building: "CJ" | "CB" | "AN" | "JA"
    room: number
    type: "Course" | "Seminar" | "Laboratory" | "Project"
    group: "1211Bsg3" | "1241Bsg1" | "MSEsg2",
    faculty: "FILS"
}

import { writable } from 'svelte/store';

export const classesList: classe[] = [
    {
        subject: "Programming Paradigms",
        day: "Friday",
        start: 16,
        end: 18,
        week: "odd",
        building: "CB",
        room: 20,
        type: "Course",
        group: "MSEsg2",
        faculty: "FILS"
    },
    {
        subject: "Programming Paradigms",
        day: "Friday",
        start: 18,
        end: 20,
        week: "all",
        building: "CJ",
        room: 201,
        type: "Laboratory",
        group: "MSEsg2",
        faculty: "FILS"
    },
    {
        subject: "Programming Languages",
        day: "Tuesday",
        start: 8,
        end: 10,
        week: "all",
        building: "AN",
        room: 17,
        type: "Course",
        group: "1211Bsg3",
        faculty: "FILS"
    },
    {
        subject: "Programming Languages",
        day: "Wednesday",
        start: 8,
        end: 10,
        week: "all",
        building: "JA",
        room: 1,
        type: "Laboratory",
        group: "1211Bsg3",
        faculty: "FILS"
    },
    {
        subject: "Programming Languages",
        day: "Friday",
        start: 10,
        end: 12,
        week: "all",
        building: "JA",
        room: 1,
        type: "Laboratory",
        group: "1211Bsg3",
        faculty: "FILS"
    },
    {
        subject: "Web and Cloud Applications",
        day: "Tuesday",
        start: 19,
        end: 21,
        week: "all",
        building: "CJ",
        room: 201,
        type: "Project",
        group: "1241Bsg1",
        faculty: "FILS"
    },
    {
        subject: "Romanian languages",
        day: "Wednesday",
        start: 16,
        end: 18,
        week: "all",
        building: "AN",
        room: 17,
        type: "Course",
        group: "1211Bsg3",
        faculty: "FILS"
    },
    {
        subject: "Software Design Techniques",
        day: "Monday",
        start: 16,
        end: 19,
        week: "all",
        building: "AN",
        room: 24,
        type: "Course",
        group: "1241Bsg1",
        faculty: "FILS"
    },
    {
        subject: "Software Design Techniques",
        day: "Tuesday",
        start: 10,
        end: 12,
        week: "all",
        building: "CB",
        room: 20,
        type: "Course",
        group: "1241Bsg1",
        faculty: "FILS"
    },
    {
        subject: "Software Design Techniques",
        day: "Wednesday",
        start: 12,
        end: 14,
        week: "odd",
        building: "CJ",
        room: 201,
        type: "Laboratory",
        group: "1241Bsg1",
        faculty: "FILS"
    },
    {
        subject: "Software Engineering",
        day: "Thursday",
        start: 12,
        end: 14,
        week: "odd",
        building: "CJ",
        room: 205,
        type: "Laboratory",
        group: "1241Bsg1",
        faculty: "FILS"
    },
    {
        subject: "Software Engineering",
        day: "Thursday",
        start: 14,
        end: 16,
        week: "even",
        building: "CB",
        room: 205,
        type: "Project",
        group: "1241Bsg1",
        faculty: "FILS"
    },
    {
        subject: "Software Engineering",
        day: "Thursday",
        start: 19,
        end: 21,
        week: "all",
        building: "CB",
        room: 20,
        type: "Course",
        group: "1241Bsg1",
        faculty: "FILS"
    },
    {
        subject: "Game and interactive simulation systems",
        day: "Wednesday",
        start: 18,
        end: 20,
        week: "all",
        building: "CB",
        room: 20,
        type: "Course",
        group: "MSEsg2",
        faculty: "FILS"
    },
]

export const classesFromParams = (params: { classesUrl: string | undefined }): classe[] => {
    const urlClassesList = params['classesUrl']?.split(',').map((str) => str.split('~')) || [];

    const urlClasses = classesList.filter((classe) =>
        urlClassesList.find((el) => el[0] == classe.subject && el[1] == classe.group)
    );

    return urlClasses
}



// export const classes = writable(classesList);
export const classes = writable<classe[]>([]);
export const groups = classesList.reduce((set, classe) => set.add(classe.group), new Set())
export const subjects = classesList.reduce((set, classe) => set.add(classe.subject), new Set())
export const faculties = classesList.reduce((set, classe) => set.add(classe.faculty), new Set())
