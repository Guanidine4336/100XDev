import { atom, selector } from "recoil";


export const countAtom = atom({
    key: "countAtom",
    default: 0,
});


export const evenSelector = selector({
  key: 'evenSelector', // A unique key for this selector
  get: ({ get }) => {
    const count = get(countAtom); // Access the value of countAtom
    return count % 2 === 0; // Check if the count is even
  },
});