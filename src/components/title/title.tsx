import { useSyncExternalStore } from 'react';
import { countStore } from '../../store/countStore';

export const Title = () => {
  const countFromStore = useSyncExternalStore(
    countStore.subscribe,
    countStore.getSnapshot
  );

  return (
    <h1 className="text-xxl uppercase">Products count: {countFromStore}</h1>
  );
};
