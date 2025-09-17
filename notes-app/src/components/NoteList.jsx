import Note from "./Note"

const NoteList = ({ notes, deleteNote }) => {
    if (notes.length === 0) {
        return (
            <p className="text-center text-grey-500">
                No Notes Yet
            </p>
        )
    }
    
    
    return ( 
        <div className="space-y-4">
            {/* each child have 4 space */}
            {notes.map((note) =>
                <Note key={note.id} note={note} deleteNote={deleteNote} />
                //when using list(.map) each child must have unique key.
            )}
        </div>

     );
}
 
export default NoteList;