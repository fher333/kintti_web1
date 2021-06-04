import bcrypt from 'bcryptjs';

const data = {
    users:[
{
    name: 'fher',
    email:'admin@example.com',
    password: bcrypt.hashSync('1234',8),
    isAdmin: true,
    isSeller:true,
    seller: {
        name: 'Angels Models',
        logo: '/images/logo1.png',
        description: 'Best Agency',
        rating: 4.5,
        numReviews: 120,
      },
},
{
    name: 'john',
    email:'user@example.com',
    password: bcrypt.hashSync('1234',8),
    isAdmin: false,
},
    ],
    products:[
        {
        
        name: 'Juliana Valdiri',
        category: 'friends',
        image: '/images/0020-0.jpg',
        price: 60,
        countInStock:10,
        brand: 'Cali',
        rating: 4.5,
        numReviews: 10,
        description: 'Busco hacer amigos',
        phone: '(+57) 312 445XXXX'
    },
    {
        
        name: 'Samantha Aguilar',
        category: 'friends',
        image: '/images/0021-0.jpg',
        price: 80,
        countInStock:11,
        brand: 'Medellín',
        rating: 5,
        numReviews: 10,
        description: 'Busco hacer amigos',
        phone: '(+57) 320 785XXXX'
    },
    {
        
        name: 'Ashley Velez',
        category: 'dating',
        image: '/images/0022-0.jpg',
        price: 40,
        countInStock:16,
        brand: 'Bogota DC',
        rating: 3.5,
        numReviews: 10,
        description: 'Busco hacer amigos',
        phone: '(+57) 313 656XXXX'
    },
    {
        
        name: 'Sofia Henao',
        category: 'dating',
        image: '/images/0023-0.jpg',
        price: 40,
        countInStock:20,
        brand: 'Barranquilla',
        rating: 4,
        numReviews: 9,
        description: 'Busco hacer amigos',
        phone: '(+57) 318 332XXXX'
    },
    {
        
        name: 'Catalina Londoño',
        category: 'dating',
        image: '/images/0024-0.jpg',
        price: 40,
        countInStock:18,
        brand: 'Manizales',
        rating: 4.5,
        numReviews: 10,
        description: 'Busco hacer amigos',
        phone: '(+57) 321 495XXXX'
    },
    {
        
        name: 'Karol Bedoya',
        category: 'dating',
        image: '/images/0025-0.jpg',
        price: 40,
        countInStock:9,
        brand: 'Cucuta',
        rating: 4.5,
        numReviews: 17,
        description: 'Busco hacer amigos',
        phone: '(+57) 319 451XXXX'
    },
    {
        
        name: 'Angie Vallejo',
        category: 'dating',
        image: '/images/0026-0.jpeg',
        price: 40,
        countInStock:10,
        brand: 'Cartagena',
        rating: 4.5,
        numReviews: 10,
        description: 'Busco hacer amigos',
        phone: '(+57) 312 499XXXX'
    },
    {
        
        name: 'Katerine Cruz',
        category: 'dating',
        image: '/images/0027-0.jpg',
        price: 40,
        countInStock:0,
        brand: 'Pereira',
        rating: 1.5,
        numReviews: 19,
        description: 'Busco hacer amigos',
        phone: '(+57) 311 444XXXX'
    },
],
};

export default data;
//module.exports=data;  //me toco cambiar al modo anterior pues el export no me funciona