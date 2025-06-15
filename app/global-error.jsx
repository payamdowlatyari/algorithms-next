"use client";

import * as Sentry from "@sentry/nextjs";
import Error from "next/error";
import { useEffect } from "react";

/**
 * GlobalError component to capture and display errors.
 * Utilizes Sentry for error tracking.
 */
export default function GlobalError({ error }) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html>
      <body>
        <Error />
      </body>
    </html>
  );
}
