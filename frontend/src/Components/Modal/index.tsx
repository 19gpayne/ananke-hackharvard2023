import { SECONDARY_COLOR } from "../../utils/colors"

export default function Modal({
    children,
    onClose,
}: {
    children: React.ReactNode
    onClose: () => void
}) {
    return (
        <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex items-center justify-center min-h-screen">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                    <div className="rounded-lg overflow-hidden shadow-xl transform transition-all max-w-[90%] max-h-[90%] p-6" style={{backgroundColor: SECONDARY_COLOR}}>
                    <div className="rounded-t-3xl p-3 text-white text-center" style={{backgroundColor: SECONDARY_COLOR}}>
                        <button className="w-full text-right" onClick={onClose}>X</button>
                    </div>
                    <div className="rounded-b-3xl p-3 pt-5">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}