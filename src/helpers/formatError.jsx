export const formatError = (err) => {
    if(err && err.message){
        return err.message
    }
    return "Váratlan hiba történt"
}