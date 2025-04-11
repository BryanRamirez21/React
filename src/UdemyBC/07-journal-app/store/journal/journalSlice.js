import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        activeNote: {
            id: 123,
            title: '',
            body: '',
            date: 123,
            imageUrl: []
        },
        active: false
    },

    //* "Recuerden que todo lo que ponemos en el reducer debe ser sync, no puede ser async"
    reducers:{
        savingNewNote: (state) => {
            state.isSaving = true;
        },
        addNewEmptyNote: (state, action) => {
            state.notes.push(action.payload);
            state.isSaving = false
        },
        setActiveNote: (state, action) => {
            state.active = action.payload;

        },
        setNotes: (state, action) => {
            state.notes = action.payload
        },
        setSaving: (state) => {
            
        },
        updateNote: (state, action) => {
            
        },
        deleteNoteByID: (state, action) => {
            
        },
    }
});

export const {addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote, deleteNoteByID, savingNewNote} = journalSlice.actions;