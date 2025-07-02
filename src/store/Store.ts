import { create } from "zustand";

const useStore = create((set) => {
  return {
    count: 0,
    incrementCount: () => {
      set(function (state:any) {
        return {
          count: state.count + 1,
        };
      });
    },
  };
});

export default useStore;
