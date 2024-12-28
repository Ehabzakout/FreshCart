import { useState } from "react";

export default function useOnline() {
    let [isOnline, setIsOnline] = useState(true)

    window.addEventListener("online", () => {
        setIsOnline(true)
    })
    window.addEventListener("offlin", () => {
        setIsOnline(false)
    })
    return isOnline;
}