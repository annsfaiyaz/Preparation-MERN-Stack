require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;

(async () => {
    try {
        const [User, Product] = await require('./dbconnect/dbconnect')();

        app.use('/users', require('./routes/user.js')(User));
        app.use('/products', require('./routes/product.js')(Product));
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.error('Failed to start:', error);
        process.exit(1);
    }
})();
