let count = 0;
let listeners: Array<Function> = [];

export const countStore = {
  increment: () => {
    count++;
    emitChange();
  },
  decrement: () => {
    count--;
    emitChange();
  },
  subscribe(listener) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot() {
    return count;
  },
};

function emitChange() {
  for (let listener of listeners) {
    listener();
  }
}
