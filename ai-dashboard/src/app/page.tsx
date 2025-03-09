"use client";
import { Provider } from 'react-redux';
import { store } from '../store';

export default function Home() {
  return (
    <Provider store={store}>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

          <h1>Dashboard</h1>

        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

        </footer>
      </div>
    </Provider>
  );
}
