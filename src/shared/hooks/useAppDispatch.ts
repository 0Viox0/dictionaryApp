import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../storage/store';

export const useAppDispatch: () => AppDispatch = useDispatch;
