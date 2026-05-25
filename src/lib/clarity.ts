export const initClarity = () => {
    if (typeof window === "undefined") return;
  
    const existingScript = document.getElementById("ms-clarity");
  
    if (existingScript) return;
  
    const script = document.createElement("script");
  
    script.id = "ms-clarity";
    script.async = true;
    script.src = "https://www.clarity.ms/tag/wwdvxtr24f";
  
    document.head.appendChild(script);
  };