import React, { useEffect } from "react";

const AdsComponent = () => {
  useEffect(() => {
    const isDev = window.location.hostname === "localhost";

    // Check if the AdSense script is already present
    if (
      !document.querySelector(
        'script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'
      )
    ) {
      const script = document.createElement("script");
      script.async = true;
      script.src =
        "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4784962751858226";
      script.crossOrigin = "anonymous";
      document.head.appendChild(script);

      // No need to remove the script on unmount unless dynamically changing ads is required.
    }
  }, []);

  useEffect(() => {
    const isDev = window.location.hostname === "localhost";

    try {
      // Initialize adsbygoogle only if available
      if (window.adsbygoogle && !isDev) {
        window.adsbygoogle.push({});
      }
    } catch (e) {
      console.error("Adsense error:", e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-4784962751858226"
      data-ad-slot="3149986172"
      data-ad-format="auto"
      data-full-width-responsive="true"
      {...(window.location.hostname === "localhost" && { "data-adtest": "on" })}
    />
  );
};

export default AdsComponent;
