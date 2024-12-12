const partOfSpeech = ['adjective', 'noun', 'verb'] as const;

export interface WordDefinition {
    name: string;
    partOfSpeech: (typeof partOfSpeech)[number];
    definitions: string[];
    pronunciations: string[];
}

export interface WordsState {
    currentWordSearchQuery: string;
    isLoading: boolean;
    currentIndex: number;
    pageSize: number;
    words?: WordDefinition[];
}
