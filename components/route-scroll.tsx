"use client";

import { useEffect } from "react";

export function RouteScroll({ section }: { section: string }) {
  useEffect(() => {
    document.getElementById(section)?.scrollIntoView({ block: "start" });
  }, [section]);

  return null;
}
