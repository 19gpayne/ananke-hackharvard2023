//Capitalizes the first letter of a word
export function capitalizeFirstLetter(word) {
    if (word.length === 0) {
        return word;
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
}

//Returns the initials of a name
export function getInitials(word) {
    return word.split(" ")[0].charAt(0) + word.split(" ")[1].charAt(0);
}