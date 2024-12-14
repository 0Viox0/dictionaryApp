export interface WordDefinition {
    name: string;
    partOfSpeech: string;
    definitions: string[];
    pronunciations: { ipa: string }[];
}

export interface WordsState {
    currentWordSearchQuery: string;
    isLoading: boolean;
    currentIndex: number;
    pageSize: number;
    words?: WordDefinition[];
}

export type FetchedWord = {
    meta: {
        id: number;
        'app-shortdef': {
            fl: string;
        };
    };
    shortdef: string[];
    hwi: {
        prs: string[];
    };
};
