import { LIGHT_COLOR, PRIMARY_COLOR, SECONDARY_COLOR } from "../../utils/colors"

export default function Modal({
    title,
    children,
    onClose,
}: {
    title: string;
    children: React.ReactNode
    onClose: () => void
}) {
    return (
        <div className="min-w-[90%]">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity" aria-hidden="true"></div>
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="rounded-3xl shadow-lg" style={{backgroundColor: LIGHT_COLOR}}>
                    <div className="text-white rounded-t-3xl flex justify-between p-6" style={{backgroundColor: SECONDARY_COLOR}}>
                        <h2 className="text-2xl font-semibold mr-8">{title}</h2>
                        <button className="text-white text-2xl" onClick={onClose}>
                            X
                        </button>
                    </div>
                    <div className="p-6">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}