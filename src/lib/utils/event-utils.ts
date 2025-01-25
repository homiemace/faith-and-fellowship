// src/lib/utils/events.ts
import type { RawEvent, CalendarEvent } from "$lib/types/event-types";

export function convertTo24Hour(time12h: string): string {
  const [time, modifier] = time12h.split(' ');
  let [hours, minutes] = time.split(':');
  if (modifier === 'PM' && hours !== '12') {
    hours = String(parseInt(hours, 10) + 12);
  } else if (modifier === 'AM' && hours === '12') {
    hours = '00';
  }
  return `${hours.padStart(2, '0')}:${minutes}`;
}

export function parseEvent(raw: RawEvent): CalendarEvent {
  const time24h = convertTo24Hour(raw.time);
  const cstDateTime = `${raw.date}T${time24h}-06:00`; // CST offset
  return {
    ...raw,
    date: new Date(cstDateTime),
  };
}