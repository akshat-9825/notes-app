import { createSelector, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface GroupState {
  selectedGroupIndex: number;
  totalGroups: number;
  groups: {
    name: string;
    id: number;
  }[];
}

const initialState: GroupState = {
  selectedGroupIndex: 0,
  totalGroups: 0,
  groups: [],
};

export const groupSlice = createSlice({
  name: "group",
  initialState,
  reducers: {
    addGroup: (state, action: PayloadAction<string>) => {
      state.totalGroups += 1;
      state.groups.push({
        name: action.payload,
        id: state.totalGroups + 1,
      });
    },
  },
});

export const { addGroup } = groupSlice.actions;

export const selectTotalGroups = (state: RootState) => state.group.totalGroups;

export const selectGroups = (state: RootState) => state.group.groups;

export const selectGroupData = createSelector(
  selectTotalGroups,
  selectGroups,
  (totalGroups, groups) => ({ totalGroups, groups })
);

export default groupSlice.reducer;
