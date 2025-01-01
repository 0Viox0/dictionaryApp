import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../../storage/store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
