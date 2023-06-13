import { useSelector, type TypedUseSelectorHook, useDispatch } from 'react-redux';
// eslint-disable-next-line import/no-internal-modules, boundaries/element-types
import type { store } from '@app/providers/redux/store';

export const useAppDispatch = useDispatch<AppDispatch>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
