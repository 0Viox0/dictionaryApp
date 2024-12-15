export const partsOfSpeech = [
    'adjective',
    'noun',
    'verb',
    'pronoun',
    'adverb',
] as const;

export type PartOfSpeech = (typeof partsOfSpeech)[number];
