import { DARK_PRIMARY_COLOR } from "../../utils/colors";

export default function ActionButton({label, onClick, className}: {label: string, onClick: () => void, className?: string}) {
    return (
        <button 
            className={`text-white rounded-lg font-bold text-lg px-4 py-2 ${className}`} 
            onClick={onClick}
            style={{backgroundColor: DARK_PRIMARY_COLOR}}
        >
            {label}
        </button>
    )
}