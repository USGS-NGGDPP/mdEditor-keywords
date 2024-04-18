const axios = require('axios');
const fs = require('fs');

// const getProducts = async () => {
//   try {
//     const res = await axios.get(
//       'https://tnmaccess.nationalmap.gov/api/v1/products'
//     );
//     console.log(res.data.messages);
//     return [res.data.items, res.data.total];
//   } catch (err) {
//     console.error(err);
//   }
// };

const getDatasets = async () => {
  try {
    const res = await axios.get(
      'https://tnmaccess.nationalmap.gov/api/v1/datasets?code=gnis'
    );
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

const main = async () => {
  // const [products, totalItems] = await getProducts();
  // console.log('Products:', totalItems);
  // fs.writeFileSync('temp/products.json', JSON.stringify(products, null, 2));

  const datasets = await getDatasets();
  console.log('Datasets:', datasets.length);
  fs.writeFileSync('temp/datasets.json', JSON.stringify(datasets, null, 2));
};

main();
