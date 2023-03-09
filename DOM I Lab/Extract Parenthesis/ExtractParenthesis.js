function extract(content) {
    let pattern = /\(([^(]+)\)/g;
    let textElement = document.getElementById(content);
    let matches = textElement.textContent.matchAll(pattern)
    let result = [];
    for (let match of matches) {
        result.push(match[1]);
    }
    return result.join("; ");
}
