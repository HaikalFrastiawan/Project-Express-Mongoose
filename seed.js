// const mongoose = require ('mongoose')
// const Product = require('./models/product')



// mongoose.connect('mongodb://127.0.0.1:27017/shop_db')
//  .then(() => console.log('MongoDB connected'))
// .catch(error => console.log("error:", error));


// const seedProduct = [
    
// {
// 		"name": "Kemeja Flanel",
// 		"brand": "Hollister",
// 		"price": 750000,
// 		"color": "biru muda",
// 		"size": "M",
// 	},
// 	{
// 		"name": "Celana Chino",
// 		"brand": "Levi's",
// 		"price": 900000,
// 		"color": "krem",
// 		"size": "S",
// 	},
// 	{
// 		"name": "Sweater",
// 		"brand": "Gap",
// 		"price": 650000,
// 		"color": "merah muda",
// 		"size": "M",
// 	},
// 	{
// 		"name": "Sepatu Sneakers",
// 		"brand": "Nike",
// 		"price": 1200000,
// 		"color": "putih",
// 		"size": "L",
// 	},
// 	{
// 		"name": "Tas Ransel",
// 		"brand": "Herschel",
// 		"price": 1500000,
// 		"color": "biru",
// 		"size": "S",
// 	},
// 	{
// 		"name": "Kacamata Aviator",
// 		"brand": "Ray-Ban",
// 		"price": 2000000,
// 		"color": "emas",
// 		"size": "L",
// 	},
// 	{
// 		"name": "Baju Renang",
// 		"brand": "Speedo",
// 		"price": 500000,
// 		"color": "biru tua",
// 		"size": "L",

// 	},
// 	{
// 		"name": "Topi Baseball",
// 		"brand": "New Era",
// 		"price": 350000,
// 		"color": "hitam",
// 		"size": "M",
		
// 	},
// 	{
// 		"name": "Rompi",
// 		"brand": "Zara",
// 		"price": 850000,
// 		"color": "abu-abu",
// 		"size": "M",
// 	},
// 	{
// 		"name": "Jas",
// 		"brand": "Hugo Boss",
// 		"price": 4500000,
// 		"color": "hitam",
// 		"size": "L",

// 	}
// ]
// Product.insertMany(seedProduct)
//   .then(result => {
//     console.log("Data berhasil disimpan:", result);
//     mongoose.connection.close();  // tutup koneksi setelah selesai
//   })
//   .catch(err => {
//     console.log("Error:", err);
//     mongoose.connection.close();  // pastikan tetap ditutup meski error
//   });



const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://127.0.0.1:27017/shop_db')
  .then(() => {
    console.log('MongoDB connected');
    return Product.deleteMany({});   // hapus semua data lama
  })
  .then(() => {
    console.log('Data lama dihapus');
    return Product.insertMany([
      {
        name: "Kemeja Flanel",
        brand: "Hollister",
        price: 750000,
        color: "biru muda",
        size: "M",
      },
      {
        name: "Celana Chino",
        brand: "Levi's",
        price: 900000,
        color: "krem",
        size: "S",
      },
      {
        name: "Sweater",
        brand: "Gap",
        price: 650000,
        color: "merah muda",
        size: "M",
      },
      {
        name: "Sepatu Sneakers",
        brand: "Nike",
        price: 1200000,
        color: "putih",
        size: "L",
      },
      {
        name: "Tas Ransel",
        brand: "Herschel",
        price: 1500000,
        color: "biru",
        size: "S",
      },
      {
        name: "Kacamata Aviator",
        brand: "Ray-Ban",
        price: 2000000,
        color: "emas",
        size: "L",
      },
      {
        name: "Baju Renang",
        brand: "Speedo",
        price: 500000,
        color: "biru tua",
        size: "L",
      },
      {
        name: "Topi Baseball",
        brand: "New Era",
        price: 350000,
        color: "hitam",
        size: "M",
      },
      {
        name: "Rompi",
        brand: "Zara",
        price: 850000,
        color: "abu-abu",
        size: "M",
      },
      {
        name: "Jas",
        brand: "Hugo Boss",
        price: 4500000,
        color: "hitam",
        size: "L",
      }
    ]);
  })
  .then(result => {
    console.log("Data baru berhasil disimpan:", result);
    mongoose.connection.close(); // tutup koneksi biar script selesai
  })
  .catch(err => {
    console.error("Error:", err);
    mongoose.connection.close();
  });






