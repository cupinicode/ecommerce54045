const product = [
    {
        id:'1',
        name: 'Iphone 12',
        price: 1000,
        category: 'Celular',
        img: 'https://itechstore.com.ar/wp-content/uploads/2020/06/iphone-12-pro-gold-helor-60',
        stock: 25,
        description: 'Iphone 12 Pro verde agua mojada'
    },
    {   id:'2', name: 'Samsung S21', price: 800, category: 'Celular', img:'https://', sotck: 30, description: 'Samsung S21 Elite' },
    {   id:'3', name: 'IPad 8a Generacion', price: 1200, category: 'Tablet', img:'https://', sotck: 24, description: 'Ipad super moderno y util' }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(product)
        }, 500);
    })
}