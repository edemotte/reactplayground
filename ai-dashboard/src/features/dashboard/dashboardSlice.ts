import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Report {
  name: string;
  value: number;
  date: string;
}

interface DashboardState {
  data: Report[];
  loading: boolean;
}

const initialState: DashboardState = {
  data: [],
  loading: false,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Report[]>) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = dashboardSlice.actions;
export default dashboardSlice.reducer;
