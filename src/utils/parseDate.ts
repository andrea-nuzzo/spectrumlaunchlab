export function parseDate(timestamp: number): string {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const milliseconds = date.getMilliseconds();

    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

