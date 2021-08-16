export default function(value, currency = "€") {
    if (value) {
        return value + ' ' +currency
    }
}