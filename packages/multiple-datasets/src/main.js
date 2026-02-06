import { Actor, log } from 'apify';

await Actor.init();

log.info('Hello from the Actor!');

const storageIds = JSON.parse(process.env.ACTOR_STORAGE_IDS);

log.info('Storages', storageIds);

const products = await Actor.openDataset();

for(let i = 0; i < 100; i++) {
    const categoryNo = Math.floor(Math.random() * 10);
    await products.pushData({
        id: `product-${i}`,
        title: `Product #${i}`,
        url: `http://example.com/store/products/${i}`,
        rating: Math.floor(Math.random() * 6),
        categoryId: `category-${categoryNo}`,
    })
}

const categories = await Actor.openDataset(storageIds.datasets.categories);
for(let i = 0; i < 10; i++) {
    await categories.pushData({
        id: `category-${i}`,
        title: `Category #${i}`,
        url: `http://example.com/store/categories/${i}`,
    });
}

await Actor.exit();
