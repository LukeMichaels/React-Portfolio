// src/components/Analytics.jsx
import { useEffect } from "react";

export default function Analytics() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-QE4SN4R9EZ";
    script.async = true;
    document.head.appendChild(script);
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", "G-QE4SN4R9EZ");
  }, []);

  return null;
}
