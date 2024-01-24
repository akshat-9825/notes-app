import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { generateSlug } from "../../utils";

export interface GroupItem {
  name: string;
  id: number;
  color: string;
  slug: string;
}

export interface GroupState {
  selectedGroupIndex: number;
  totalGroups: number;
  groups: GroupItem[];
}

const initialState: GroupState = {
  selectedGroupIndex: 0,
  totalGroups: 0,
  groups: [],
};

export const groupSlice = createSlice({
  name: "group",
  initialState: localStorage.getItem("reduxState")
    ? JSON.parse(localStorage.getItem("reduxState") as string).group
    : initialState,
  reducers: {
    addGroup: (
      state,
      action: PayloadAction<{ name: string; color: string }>
    ) => {
      state.totalGroups += 1;
      state.groups.push({
        name: action.payload.name,
        id: state.totalGroups,
        color: action.payload.color,
        slug: generateSlug(action.payload.name),
      });
    },
    setSelectedGroup: (state, action: PayloadAction<number>) => {
      state.selectedGroupIndex = action.payload;
    },
  },
});

export const { addGroup, setSelectedGroup } = groupSlice.actions;

export const selectTotalGroups = (state: RootState) => state.group.totalGroups;
export const selectGroups = (state: RootState) => state.group.groups;
export const selectSelectedGroup = (state: RootState) =>
  state.group.selectedGroupIndex;

export const selectGroupData = createSelector(
  [selectTotalGroups, selectGroups, selectSelectedGroup],
  (totalGroups, groups, selectedGroup) => ({
    totalGroups,
    groups,
    selectedGroup,
  })
);

export default groupSlice.reducer;
