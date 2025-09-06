const mongoose = require ('mongoose')
const Product = require('./models/product')



mongoose.connect('mongodb://127.0.0.1:27017/shop_db')
 .then(() => console.log('MongoDB connected'))
.catch(error => console.log("error:", error));


const seedProduct = [
    
{
		"name": "Kemeja Flanel",
		"brand": "Hollister",
		"price": 750000,
		"color": "biru muda",
		"category": "baju",
	},
	{
		"name": "Celana Chino",
		"brand": "Levi's",
		"price": 900000,
		"color": "krem",
		"category": "celana",
	},
	{
		"name": "Sweater",
		"brand": "Gap",
		"price": 650000,
		"color": "merah muda",
		"category": "jaket",
	},
	{
		"name": "Sepatu Sneakers",
		"brand": "Nike",
		"price": 1200000,
		"color": "putih",
		"category": "aksesoris",
	},
	{
		"name": "Tas Ransel",
		"brand": "Herschel",
		"price": 1500000,
		"color": "biru",
		"category": "aksesoris",
	},
	{
		"name": "Kacamata Aviator",
		"brand": "Ray-Ban",
		"price": 2000000,
		"color": "emas",
		"category": "aksesoris",
	},
	{
		"name": "Baju Renang",
		"brand": "Speedo",
		"price": 500000,
		"color": "biru tua",
		"category": "baju",

	},
	{
		"name": "Topi Baseball",
		"brand": "New Era",
		"price": 350000,
		"color": "hitam",
		"category": "aksesoris",
		
	},
	{
		"name": "Rompi",
		"brand": "Zara",
		"price": 850000,
		"color": "abu-abu",
		"category": "aksesoris",
	},
	{
		"name": "Jas",
		"brand": "Hugo Boss",
		"price": 4500000,
		"color": "hitam",
		"category": "jaket",

	}
]
Product.insertMany(seedProduct)
  .then(result => {
    console.log("Data berhasil disimpan:", result);
    mongoose.connection.close();  // tutup koneksi setelah selesai
  })
  .catch(err => {
    console.log("Error:", err);
    mongoose.connection.close();  // pastikan tetap ditutup meski error
  });








