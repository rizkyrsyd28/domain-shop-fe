export function generateID(domain: string) {
    const currentDate = new Date().toISOString();
    const combinedString = domain + currentDate;
    const encodedString = btoa(combinedString);
    return encodedString;
}
