const data =  [
    {
      id: 1,
      imageURL:
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
      name: "Black Polo",
      type: "Polo",
      price: 250,
      currency: "INR",
      color: "Black",
      gender: "Men",
      quantity: 3,
    },
    {
      id: 2,
      imageURL:
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
      name: "Blue Polo",
      type: "Polo",
      price: 350,
      currency: "INR",
      color: "Blue",
      gender: "Women",
      quantity: 3,
    },
    {
      id: 3,
      imageURL:
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
      name: "Pink Polo",
      type: "Polo",
      price: 350,
      currency: "INR",
      color: "Pink",
      gender: "Women",
      quantity: 6,
    },
    {
      id: 4,
      imageURL:
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/hoodie-tshirts.png",
      name: "Black Hoodie",
      type: "Hoodie",
      price: 500,
      currency: "INR",
      color: "Black",
      gender: "Men",
      quantity: 2,
    },
    {
      id: 5,
      imageURL:
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
      name: "Green Polo",
      type: "Polo",
      price: 250,
      currency: "INR",
      color: "Green",
      gender: "Men",
      quantity: 1,
    },
    {
      id: 6,
      imageURL:
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
      name: "Green Polo",
      type: "Polo",
      price: 350,
      currency: "INR",
      color: "Green",
      gender: "Women",
      quantity: 1,
    },
    {
      id: 7,
      imageURL:
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/hoodie-tshirts.png",
      name: "Blue Hoodie",
      type: "Hoodie",
      price: 500,
      currency: "INR",
      color: "Blue",
      gender: "Women",
      quantity: 2,
    },
    {
      id: 8,
      imageURL:
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/hoodie-tshirts.png",
      name: "Black Hoodie",
      type: "Hoodie",
      price: 500,
      currency: "INR",
      color: "Black",
      gender: "Women",
      quantity: 5,
    },
    {
      id: 9,
      imageURL:
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/round-neck-tshirts.png",
      name: "Blue Round",
      type: "Basic",
      price: 300,
      currency: "INR",
      color: "Blue",
      gender: "Men",
      quantity: 2,
    },
    {
      id: 10,
      imageURL:
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/round-neck-tshirts.png",
      name: "Red Round",
      type: "Basic",
      price: 300,
      currency: "INR",
      color: "Red",
      gender: "Women",
      quantity: 2,
    },
    {
      id: 11,
      imageURL:
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/round-neck-tshirts.png",
      name: "Grey Round",
      type: "Basic",
      price: 300,
      currency: "INR",
      color: "Grey",
      gender: "Men",
      quantity: 1,
    },
    {
      id: 12,
      imageURL:
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/hoodie-tshirts.png",
      name: "Purple Hoodie",
      type: "Hoodie",
      price: 500,
      currency: "INR",
      color: "Purple",
      gender: "Women",
      quantity: 3,
    },
    {
      id: 13,
      imageURL:
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/round-neck-tshirts.png",
      name: "Grey Round",
      type: "Basic",
      price: 300,
      currency: "INR",
      color: "Grey",
      gender: "Women",
      quantity: 1,
    },
    {
      id: 14,
      imageURL:
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/round-neck-tshirts.png",
      name: "White Round",
      type: "Basic",
      price: 300,
      currency: "INR",
      color: "White",
      gender: "Women",
      quantity: 0,
    },
    {
      id: 15,
      imageURL:
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/round-neck-tshirts.png",
      name: "Black Round",
      type: "Basic",
      price: 300,
      currency: "INR",
      color: "Black",
      gender: "Men",
      quantity: 7,
    },
    {
      id: 16,
      imageURL:
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/round-neck-tshirts.png",
      name: "Purple Round",
      type: "Basic",
      price: 300,
      currency: "INR",
      color: "Purple",
      gender: "Men",
      quantity: 1,
    },
    {
      id: 17,
      imageURL:
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/round-neck-tshirts.png",
      name: "White Round",
      type: "Basic",
      price: 300,
      currency: "INR",
      color: "White",
      gender: "Men",
      quantity: 2,
    },
    {
      id: 18,
      imageURL:
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/round-neck-tshirts.png",
      name: "Blue Round",
      type: "Basic",
      price: 300,
      currency: "INR",
      color: "Blue",
      gender: "Women",
      quantity: 3,
    },
    {
      id: 19,
      imageURL:
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/hoodie-tshirts.png",
      name: "Yellow Hoodie",
      type: "Hoodie",
      price: 500,
      currency: "INR",
      color: "Yellow",
      gender: "Women",
      quantity: 1,
    },
    {
      id: 20,
      imageURL:
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
      name: "White Polo",
      type: "Polo",
      price: 350,
      currency: "INR",
      color: "White",
      gender: "Women",
      quantity: 4,
    },
    {
      id: 21,
      imageURL:
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
      name: "Red Polo",
      type: "Polo",
      price: 250,
      currency: "INR",
      color: "Red",
      gender: "Men",
      quantity: 2,
    },
    {
      id: 22,
      imageURL:
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/hoodie-tshirts.png",
      name: "Blue Hoodie",
      type: "Hoodie",
      price: 500,
      currency: "INR",
      color: "Blue",
      gender: "Men",
      quantity: 0,
    },
    {
      id: 23,
      imageURL:
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/hoodie-tshirts.png",
      name: "Grey Hoodie",
      type: "Hoodie",
      price: 500,
      currency: "INR",
      color: "Grey",
      gender: "Men",
      quantity: 2,
    },
    {
      id: 24,
      imageURL:
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
      name: "Grey Polo",
      type: "Polo",
      price: 300,
      currency: "INR",
      color: "Grey",
      gender: "Men",
      quantity: 3,
    },
    {
      id: 25,
      imageURL:
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/hoodie-tshirts.png",
      name: "Red Hoodie",
      type: "Hoodie",
      price: 300,
      currency: "INR",
      color: "Red",
      gender: "Men",
      quantity: 0,
    },
    {
      id: 26,
      imageURL:
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
      name: "White Polo",
      type: "Polo",
      price: 300,
      currency: "INR",
      color: "White",
      gender: "Men",
      quantity: 1,
    },
    {
      id: 27,
      imageURL:
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/hoodie-tshirts.png",
      name: "White Hoodie",
      type: "Hoodie",
      price: 500,
      currency: "INR",
      color: "White",
      gender: "Women",
      quantity: 3,
    },
    {
      id: 28,
      imageURL:
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/round-neck-tshirts.png",
      name: "Grey Round",
      type: "Basic",
      price: 300,
      currency: "INR",
      color: "Grey",
      gender: "Men",
      quantity: 0,
    },
    {
      id: 29,
      imageURL:
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/round-neck-tshirts.png",
      name: "Black Round",
      type: "Basic",
      price: 300,
      currency: "INR",
      color: "Black",
      gender: "Women",
      quantity: 0,
    },
    {
      id: 30,
      imageURL:
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
      name: "Black Polo",
      type: "Polo",
      price: 300,
      currency: "INR",
      color: "Black",
      gender: "Women",
      quantity: 4,
    },
  ];

const range = ['0-250','400-1000']
const price = range.map((item) => item.split("-").map(Number))
const gender = ['Men','Women']
const type = []
const color = []

let obj = Object.assign({},
    price.length > 0 ? {price} : null,
    gender.length > 0 ? {gender} : null,
    type.length > 0 ? {type} : null,
    color.length > 0 ? {color} : null,
  );
 
  const filterKeys = Object.keys(obj)
 
  const result = data.filter((product) => 
  {
    return filterKeys.every((key) => {
        if(key === "price") return true

        if(obj[key].includes(product[key])) {
            return true
        }
    })    
  }
)

const final = result.filter((product) => {
      let flag = false
        obj.price.forEach((item) => {
           if(product.price >= item[0] && product.price <= item[1])
            flag =  true
       })
       return flag;
    })


    applyFilter: (state,action) => {
        const filterKeys = Object.keys(action.payload);
        const noPriceFilter = state.value.copyData.filter((product) => {
            return filterKeys.every((key) => action.payload[key].includes(product[key]))
         })
         if(action.payload.hasOwnProperty('price')) {
            const filterPrice = noPriceFilter.filter((product) => {
                let flag = false
                action.payload.price.forEach((item) => {
                     if(product.price >= item[0] && product.price <= item[1])
                      flag =  true
                 })
                 return flag;
              })
              state.value.data = filterPrice
         }
         else {
            state.value.data = noPriceFilter
         }
    }

console.log(result)
console.log("*************************************************")
console.log(final);


const demo = obj.hasOwnProperty('price')
console.log(demo
    )