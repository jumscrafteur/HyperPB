import { classesFromParams } from '$lib/classes';
import type { RequestHandler } from './$types';

import { DateTime } from 'luxon'

const formatForCal = (dt: DateTime) => {
    return dt.toISO()?.split(".")[0].replaceAll("-", "").replaceAll(":", "")
}

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

export const GET: RequestHandler = ({ setHeaders, params }) => {
    setHeaders({
        "content-type": "text/calendar"
    })

    const classes = classesFromParams(params)

    const START_OF_WEEK = DateTime.now().startOf("week")

    const WEEK_NB = (START_OF_WEEK.weekNumber - 39 + START_OF_WEEK.weeksInWeekYear) % START_OF_WEEK.weeksInWeekYear


    let events = ""

    for (let i = 0; i < 5; i++) {
        events = classes.reduce((old, newClasse) => {
            if (newClasse.week == "even" && (WEEK_NB + i) % 2 == 1) return old
            if (newClasse.week == "odd" && (WEEK_NB + i) % 2 == 0) return old

            const start = START_OF_WEEK.plus({
                day: DAYS.indexOf(newClasse.day),
                hour: newClasse.start,
                weeks: i
            })

            const end = START_OF_WEEK.plus({
                day: DAYS.indexOf(newClasse.day),
                hour: newClasse.end,
                weeks: i
            })

            return old + '\r\n' + `BEGIN:VEVENT
DTSTAMP:20231003T141736Z
UID:${start.toMillis()}@ical.jumscrafteur.com
DTSTART;TZID=Europe/Bucharest:${formatForCal(start)}
DTEND;TZID=Europe/Bucharest:${formatForCal(end)}
SUMMARY:${newClasse.subject}
BEGIN:VALARM
ACTION:DISPLAY
GEO:37.386013;-122.082932
DESCRIPTION:${newClasse.subject}
TRIGGER:-PT10M
END:VALARM
END:VEVENT`}, events)

    }





    return new Response(String(`BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//hyperpb.jumscrafteur.com//UPB Schedule
X-WR-CALNAME:UPB Schedule
NAME:UPB Schedule
CALSCALE:GREGORIAN
BEGIN:VTIMEZONE
TZID:Europe/Bucharest
LAST-MODIFIED:20230407T050750Z
TZURL:https://www.tzurl.org/zoneinfo-outlook/Europe/Bucharest
X-LIC-LOCATION:Europe/Bucharest
BEGIN:DAYLIGHT
TZNAME:EEST
TZOFFSETFROM:+0200
TZOFFSETTO:+0300
DTSTART:19700329T030000
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU
END:DAYLIGHT
BEGIN:STANDARD
TZNAME:EET
TZOFFSETFROM:+0300
TZOFFSETTO:+0200
DTSTART:19701025T040000
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU
END:STANDARD
END:VTIMEZONE${events}
END:VCALENDAR`));
};