"use client";

import { useEffect } from "react";

const AffiliateLinkSetter = () => {

    useEffect(() => {
        if (typeof window !== "undefined") {
          const urlParams = new URLSearchParams(window.location.search);
          const ref = urlParams.get('ref');
          if (ref) {
            localStorage.setItem('ref', ref);
          }
        }
      }, []);
  
  return null;
};

export default AffiliateLinkSetter;
