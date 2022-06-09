const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
        street: 'Rua das Flores',
        number: '389',
        apartment: '701',
    },
    order: {
        pizza: {
            marguerita: {
                amount: 1,
                price: 25,
            },
            pepperoni: {
                amount: 1,
                price: 20,
            }
        },
        drinks: {
            coke: {
                type: 'Coca-Cola Zero',
                price: 10,
                amount: 1,
            }
        },
        delivery: {
            deliveryPerson: 'Ana Silveira',
            price: 5,
        }
    },
    payment: {
        total: 60,
    },
};

const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    const attendant = Object.values(order['order']['delivery'])[0];
    const client = Object.values(order)[0];
    const phoneNumber = Object.values(order)[1];
    const street = Object.values(order['address'])[0];
    const number = Object.values(order['address'])[1];
    const ap = Object.values(order['address'])[2];
    return `Olá ${attendant}, entrega para: ${client}, Telefone: ${phoneNumber}, R. ${street}, Nº: ${number}, AP: ${ap}.`
}

console.log(customerInfo(order));

const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.

}

orderModifier(order);