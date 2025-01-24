// Raw JSON structure (for the imported JSON file)
interface RawEvent {
    id: number;
    title: string;
    date: string; // JSON stores dates as strings
    time: string;
    location: string;
    category: string;
    image: string;
}

// Parsed structure
interface Event {
    id: number;
    title: string;
    date: Date; // Parsed as a Date object
    time: string;
    location: string;
    category: string;
    image: string;
}

declare const events: RawEvent[];
export default events;
export type { Event }; // Export the Event type