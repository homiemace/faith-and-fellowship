export interface Verse {
    reference: string;
    text: string;
    translation_name?: string;
  }
  
  export interface PopularVerse {
    reference: string;
    text: string;
  }
  
  export interface SearchResult {
    reference: string;
    text: string;
    translation_name: string;
    verses: Array<{
      book_id: string;
      book_name: string;
      chapter: number;
      verse: number;
      text: string;
    }>;
  }