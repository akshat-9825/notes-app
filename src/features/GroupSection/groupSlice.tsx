import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface GroupState {
  selectedGroupIndex: number;
  totalGroups: number;
  groups: {
    name: string;
    id: number;
    color: string;
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
    addGroup: (
      state,
      action: PayloadAction<{ name: string; color: string }>
    ) => {
      state.totalGroups += 1;
      state.groups.push({
        name: action.payload.name,
        id: state.totalGroups + 1,
        color: action.payload.color,
      });
    },
  },
});

export const { addGroup } = groupSlice.actions;

export const selectTotalGroups = (state: RootState) => state.group.totalGroups;

export const selectGroups = (state: RootState) => state.group.groups;

export const selectGroupData = (state: RootState) => ({
  totalGroups: state.group.totalGroups,
  groups: state.group.groups,
});

export default groupSlice.reducer;
