import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";

// export interface LayoutState {
//     title: string;
//     fluid: boolean;
//     cols: any;
//     featureTypesArry: any;
// }
// export interface LayoutObj {
//     title: string;
//     fluid: boolean;
//     cols: any;
//     featureTypesArry: any;
// }
export interface LayoutState {
  sections: any;
}

/**
 * Default state object with initial values.
 */
// const initialState: LayoutState = {
//     title: "MyTable",
//     fluid: false,
//     cols: ["3", "3", "3", "3"],
//     featureTypesArry: ["i", "0", "0", "0"],
//   } as const;

const initialState: LayoutState = {
  sections: [
    {
      title: "MyTable",
      fluid: false,
      cols: ["3", "3", "3", "3"],
      featureTypesArry: ["i", "0", "0", "0"],
    },
  ],
} as const;

/**
 * Create a slice as a reducer containing actions.
 *
 * In this example actions are included in the slice. It is fine and can be
 * changed based on your needs.
 */
export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setSection: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.sections>
    ) => {
      state.sections = action.payload;
    },
  },
});

// A small helper of layout state for `useSelector` function.
export const getLayoutState = (state: { layout: LayoutState }) => state.layout;

// Exports all actions
// export const { setName, setEmail } = layoutSlice.actions;

export default layoutSlice.reducer;
