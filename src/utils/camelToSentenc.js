export const camelToSentence = (text) => {
    return text.replace(/([A-Z])/g, " $1")
}