export function TextInput({
    label, value, onChange
} : {
    label: string, value: string, onChange: (e: any) => void
}) {
    return (
        <>
            <label htmlFor={label}>{label}</label>
            <input type="text" id={label} value={value} onChange={onChange} className="border-2 border-black rounded-md" />
        </>
    )
}