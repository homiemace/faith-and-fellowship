// src/lib/types/events.ts
export interface RawEvent {
    id: number;
    title: string;
    date: string;
    time: string;
    location: string;
    category: string;
    image: string;
  }
  
  export interface CalendarEvent {
    id: number;
    title: string;
    date: Date;
    time: string;
    location: string;
    category: string;
    image: string;
  }