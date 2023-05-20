import {useState} from "react"
import { useTranslation } from "react-i18next";

export function ChangeLanguage(){
    const {t, i18n:{changeLanguage, language}}= useTranslation()
    const [currentLanguage, setCurrentLanguage] = useState(language)

    const handleChangeLanguage = ()=>{
        const newLanguage = currentLanguage === "en" ? "pt" : "en"
        changeLanguage(newLanguage)
        setCurrentLanguage(newLanguage)
    }

    return(
        <button type="button" onClick={handleChangeLanguage}>Change language</button>
    )
}