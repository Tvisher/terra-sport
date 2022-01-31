// проверка поддержки webP
export function testWebP() {
    return new Promise(res => {
        const webP = new Image();
        webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
        webP.onload = webP.onerror = () => {
            res(webP.height === 2);
        };
    }).then(hasWebP => {
        let className = hasWebP === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    });
};
