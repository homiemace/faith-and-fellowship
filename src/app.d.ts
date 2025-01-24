// src/app.d.ts
declare global {
    namespace svelte.JSX {
        interface HTMLAttributes<T> {
            "on:intersect"?: (event: CustomEvent) => void;
        }
    }

    namespace App {
        // interface Error {}
        // interface Locals {}
        // interface PageData {}
        // interface PageState {}
        // interface Platform {}
    }
}

export {};