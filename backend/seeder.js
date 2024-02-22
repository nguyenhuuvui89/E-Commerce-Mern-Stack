import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './productData/userData.js';
import products from './productData/products.js';
import User from './models/userModels.js';
import Product from './models/productsModel.js';
import Order from './models/orderModels.js';
import connectDB from './config/db.js';
import jsonData from './productData/bestbuy_seo.json' assert { type: "json" };

dotenv.config();

connectDB(); // Connect to MongoDB database online

const importData = async () => {
  try {
    await Order.deleteMany(); // Delete multiple records
    await Product.deleteMany(); // Delete multiple records
    await User.deleteMany(); // Delete multiple records

    const insertUSers = await User.insertMany(users);
    const adminUser = insertUSers[0]._id; // get Admin data

    // const sampleProducts = products.map((product) => ({ ...product, user: adminUser }));
    // await Product.insertMany(sampleProducts);
    const sampleProducts = jsonData.filter((product) => {
      const isAppleProduct = product.manufacturer && product.manufacturer.includes("Apple");
      const containsKeyword = product.name && ["iPad", "MacBook", "iPhone"].some(keyword => product.name.includes(keyword));
      return isAppleProduct && containsKeyword;
    }).map(
      ({
        name,
        thumbnailImage,
        manufacturer,
        customerReviewCount,
        salePrice,
        categories,
        shortDescription,
      }) => ({
        name,
        image: thumbnailImage,
        brand: manufacturer || "Default Brand",
        category: categories && categories.length > 0 ? categories[0] : "Other",
        description: shortDescription || "Default Description",
        // review: [
        //   {
        //     name: "Sample User",
        //     comment: "Sample Comment",
        //     rating: 5,
        //   },
        // ],
        rating: Math.floor(customerReviewCount / 1000), // Example transformation for rating
        numReviews: customerReviewCount || 0,
        price: salePrice || 0,
        countInStock: 10,
        user: adminUser
      }));
      await Product.insertMany(sampleProducts);

    console.log('Data Imported! '.blue.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit();
  }
};
const deleteData = async () => {
  try {
    await Order.deleteMany(); // Delete multiple records
    await Product.deleteMany(); // Delete multiple records
    await User.deleteMany(); // Delete multiple records
    console.log('Data Deleted! '.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

// Condition to choose to run which function above.
// (Then go to package.json to add to the "script"
// "scripts": {
//   "start": "node backend/server.js",
//   "server": "nodemon backend/server.js",
//   "client": "npm start --prefix frontend",
//   "dev": "concurrently \"npm run server\" \"npm run client\"",
//   "data:import": "node backend/seeder.js",
//   "data:delete": "node backend/seeder.js -d"
// }
// then we can run in terminal: npm run data:import or data:delete)

if (process.argv[2] === '-d') {
  deleteData();
} else {
  importData();
}
