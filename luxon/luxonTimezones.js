import { DateTime } from 'luxon';

//* Introduce UTC timestamp + timezone
export function timestampToTimezone(utcTimestamp, timezone) {
    return DateTime.fromISO(utcTimestamp)
                    .setZone(timezone)
                    .toFormat('yyyy-MM-ddTHH:mm:ss.SSS');
}

const convertedTimestamp = convertToTimezone('2023-12-12T14:00:00Z', 'Europe/Paris');
// This will print the timestamp in the specified timezone
//console.log(convertedTimestamp); 



//* Introduce UTC hh:mm + timezone
// Convert from utc-hh:mm to timezone-hh:mm 
const timeToUTC = (utcHoursMinutes, timezone) => {
    // Parse the UTC time. Assume the date is today for the sake of simplicity.
    const utcDateTime = DateTime.fromFormat(utcHoursMinutes, 'HH:mm', { zone: 'UTC' });

    // Convert to the specified timezone.
    const localDateTime = utcDateTime.setZone(timezone);

    // Return the time in the "hh:mm" format.
    return localDateTime.toFormat('HH:mm');
};

const convertedTime = timeToUTC('20:30', 'Asia/Urumqi');
// console.log(convertedTime);
