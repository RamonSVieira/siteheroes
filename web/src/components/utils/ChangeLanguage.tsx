import {useState} from "react"
import { useTranslation } from "react-i18next";

export function ChangeLanguage(){
    const {t, i18n:{changeLanguage, language}}= useTranslation()
    const [currentLanguage, setCurrentLanguage] = useState(language)

    const handleChangeLanguage = ()=>{
        const newLanguage = currentLanguage === "pt" ? "en" : "pt"
        changeLanguage(newLanguage)
        setCurrentLanguage(newLanguage)
    }

    return(
        <div className="bg-white dark:bg-black p-5 rounded-full flex items-center gap-2">
            <span className="text-xl font-bold">Português</span>
            <input className="flex items-center w-12 cursor-pointer relative before:absolute before:w-12 before:h-6 before:bg-gray-700  before:rounded-full after:absolute after:w-6 after:h-6 after:bg-red-500  after:rounded-full after:transition-all after:duration-300 after:border-4 after:border-[#333] after:box-border after:left-0 checked:before:bg-[#00a1ff] checked:after:left-6 checked:after:border-[#00a1ff]" type="checkbox" onClick={handleChangeLanguage}/>
            <span className="text-xl font-bold">English</span>
        </div>
    )
}