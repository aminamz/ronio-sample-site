"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h2 className="font-black text-4xl">
        خطایی در زمان بارگذاری رخ داده است
      </h2>
      <h3 className="font-semibold text-xl">از اتصال جیسون سرور مطمئن شوید</h3>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        className="bg-secondary font-semibold mt-8 rounded-sm p-1 hover:bg-ronio hover:text-secondary"
      >
        مجددا تلاش نمایید
      </button>
    </div>
  );
}
