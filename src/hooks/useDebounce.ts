import { useEffect, useState } from 'react';

type DebouncedFunction = (...args: any[]) => void;

export const useDebounce = (callback: DebouncedFunction, delay: number) => {};
