import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { generateUniqueId } from "../../utils";
import { RootState } from "../../store";

export interface NoteType {
  content: string;
  time: Date;
  id: string;
}

export interface NoteState {
  [groupId: string]: NoteType[];
}

const initialState: NoteState = {
  "0": [],
};

export const notesSlice = createSlice({
  name: "notes",
  initialState: localStorage.getItem("reduxState")
    ? JSON.parse(localStorage.getItem("reduxState") as string).notes ||
      initialState
    : initialState,
  reducers: {
    addNote: (
      state,
      action: PayloadAction<{ content: string; groupId: string }>
    ) => {
      const { content, groupId } = action.payload;
      if (!state[groupId]) {
        state[groupId] = [];
      }
      state[groupId].push({
        content,
        time: new Date().toISOString(),
        id: generateUniqueId(),
      });
    },
  },
});

export const { addNote } = notesSlice.actions;

export const selectNotes = (state: RootState) => state.notes;

export const selectNotesData = createSelector([selectNotes], (selectNotes) => ({
  selectNotes,
}));

export default notesSlice.reducer;
