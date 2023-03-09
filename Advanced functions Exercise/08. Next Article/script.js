function getArticleGenerator(articles) {
    let arr = Array.from(articles);
    let div = document.getElementById('content');
    return () => {
        if(!arr.length) {
            return;
        }
        let curr = arr.shift();
        div.innerHTML += `<article>${curr}</article>`;
    }
}
