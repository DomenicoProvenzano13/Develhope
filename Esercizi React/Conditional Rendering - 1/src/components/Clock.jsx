import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext";

export function Clock() {
  const [date, setDate] = useState(new Date());

  const language = useContext(LanguageContext);

  useEffect(() => {
    console.log("Clock component mounted");
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, []);
  return (
    <div>
      <h2>
        {language === "it"
          ? `Sono le ore: ${date.toLocaleTimeString()}`
          : `It's ${date.toLocaleTimeString()}`}
      </h2>
    </div>
  );
}
