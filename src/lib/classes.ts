interface classe {
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
    group: "1211Bsg3" | "1241Bsg1" | "sg2"
}

// export const classes: classe[] = [
//     {
//         subject: "Software Design Techniques",
//         day: "Monday",
//         start: 16,
//         end: 19,
//         week: "all",
//         building: "CB",
//         room: 20,
//         type: "Course",
//         // group: "1241"
//     },
//     {
//         subject: "Programming Languages",
//         day: "Tuesday",
//         start: 8,
//         end: 10,
//         week: "all",
//         building: "AN",
//         room: 17,
//         type: "Course",
//         // group: "1211B"
//     },
//     {
//         subject: "Software Design Techniques",
//         day: "Tuesday",
//         start: 10,
//         end: 13,
//         week: "all",
//         building: "CB",
//         room: 20,
//         type: "Course",
//         // group: "1241"
//     }
// ]

export const classes: classe[] = [
    {
        subject: "Programming Paradigms",
        day: "Wednesday",
        start: 8,
        end: 10,
        week: "all",
        building: "CJ",
        room: 205,
        type: "Laboratory",
        group: "sg2",
    },
    {
        subject: "Programming Paradigms",
        day: "Friday",
        start: 16,
        end: 18,
        week: "odd",
        building: "CB",
        room: 20,
        type: "Course",
        group: "sg2"
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
        group: "1211Bsg3"
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
        group: "1211Bsg3"
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
        group: "1211Bsg3"
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
        group: "1241Bsg1"
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
        group: "1211Bsg3"
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
        group: "1241Bsg1"
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
        group: "1241Bsg1"
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
        group: "1241Bsg1"
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
        group: "1241Bsg1"
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
        group: "1241Bsg1"
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
        group: "1241Bsg1"
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
        group: "sg2"
    }
]