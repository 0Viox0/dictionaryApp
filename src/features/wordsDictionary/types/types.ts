export const partsOfSpeech = ['adjective', 'noun', 'verb', 'pronoun'] as const;

export type PartOfSpeech = (typeof partsOfSpeech)[number];
