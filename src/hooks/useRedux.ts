import {useDispatch, useSelector} from 'react-redux';

import type {AppDispatch, RootState} from '@/store';

/**
 * Hooks tipados de Redux. Usar estos en toda la app en lugar de
 * useDispatch/useSelector directamente.
 */
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
