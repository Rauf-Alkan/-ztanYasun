"use client";

import { useEffect } from "react";

type ViewTrackerProps = {
  slug: string;
};

const ViewTracker = ({ slug }: ViewTrackerProps) => {
  useEffect(() => {
    const registerView = async () => {
      try {
        await fetch(`/api/blog/${slug}/views`, {
          method: "POST",
        });
      } catch (error) {
        console.error("View tracking failed", error);
      }
    };

    registerView();
  }, [slug]);

  return null;
};

export default ViewTracker;
