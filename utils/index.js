module.exports = {
    cleanText: text => text.trim(),
    capitalizeText: text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
}