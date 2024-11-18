import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface Starship {
    name: string;
    model: string;
}

interface StarshipsState {
    starships: Starship[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: StarshipsState = {
    starships: [],
    status: 'idle',
    error: null,
}

export const fetchStarships = createAsyncThunk(
    'starships/fetchStarships',
    async () => {
        const response = await fetch('https://swapi.dev/api/starships/');
        const data = await response.json();
        return data.results;
    }
);

const strshipsSlice = createSlice({
    name: 'starships',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(fetchStarships.pending, (state)=>{
            state.status = 'loading';
          })
          .addCase(fetchStarships.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            state.starships = action.payload;
          })
          .addCase(fetchStarships.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.error.message || 'Failed to fetch starships';
          });
    },
});
export default strshipsSlice.reducer;