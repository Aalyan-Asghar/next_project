import './Modal.css';

export default function ({ isOpen, onClose }) {

    if (!isOpen) return null

    return (
        <div className="dialog-overlay">
            <div className="dialog-box">
                <h2 className="text-[24px] font-bold mb-4">Add Note</h2>
                {/* <NotesForm onSubmit={handleSubmit} onClose={onClose} /> */}
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    )
}