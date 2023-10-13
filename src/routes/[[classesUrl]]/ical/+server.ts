import { classesFromParams } from "$lib/classes";
import type { RequestHandler } from "@sveltejs/kit";
import ical from 'ical-generator';
import { DateTime } from "luxon";

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

export const GET: RequestHandler = ({ setHeaders, params }) => {
    // setHeaders({
    //     "content-type": "text/calendar"
    // })

    setHeaders({
        "content-type": "text/html"
    })

    const classes = classesFromParams(params)

    const START_OF_WEEK = DateTime.now().setZone('Europe/Bucharest').startOf("week")

    const WEEK_NB = (START_OF_WEEK.weekNumber - 39 + START_OF_WEEK.weeksInWeekYear) % START_OF_WEEK.weeksInWeekYear


    const calendar = ical({ name: 'UPB Schedule', timezone: 'Europe/Bucharest' });

    for (let i = 0; i < 5; i++) {
        classes.forEach(classe => {
            if (classe.week == "even" && (WEEK_NB + i) % 2 == 1) return
            if (classe.week == "odd" && (WEEK_NB + i) % 2 == 0) return

            const start = START_OF_WEEK.plus({
                day: DAYS.indexOf(classe.day),
                hour: classe.start,
                weeks: i
            })

            const end = START_OF_WEEK.plus({
                day: DAYS.indexOf(classe.day),
                hour: classe.end,
                weeks: i
            })

            calendar.createEvent({
                start,
                end,
                summary: classe.subject,
                location: `${classe.room}${classe.building}`,
            })


        })
    }



    return new Response(calendar.toString())
};