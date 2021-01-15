const formatPrice = (text) => {
    return new Intl.NumberFormat('ru-RU', {
        currency: 'rub',
        style: 'currency'
    }).format(text)
}

document.querySelectorAll('.price').forEach(node => {
    node.textContent = formatPrice(node.textContent)
})

const $cart = document.querySelector('#cart')
if ($cart) {
    $cart.addEventListener('click', e => {
        if (e.target.classList.contains('js-remove')) {
            const id = e.target.dataset.id

            fetch('/cart/remove/' + id, {
                method: 'delete'
            })
                .then(res => res.json())
                .then(cart => {
                    if (cart.courses.length) {
                        const html = cart.courses.map(c => {
                            return `
                                <tr>
                                    <td>${c.title}</td>
                                    <td>${formatPrice(c.price)}</td>
                                    <td>${c.count}</td>
                                    <td>
                                        <button class="btn btn-small js-remove" data-id="${c.id}">Удалить</button>
                                    </td>
                                </tr>
                            `
                        }).join('')
                        $cart.querySelector('tbody').innerHTML = html
                        $cart.querySelector('#cart-price').textContent = formatPrice(cart.price)
                    } else {
                        $cart.innerHTML = '<p>Корзина пуста</p>'
                    }
                })
        }
    })
}