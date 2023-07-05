import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const d = [
    {
      id: 'p1',
      price: 23,
      title: 'My book',
      description: 'dasdadassa'
    },
    {
      id: 'p2',
      price: 4,
      title: 'My book 2',
      description: 'dasdadas2sa'
    },
  ]

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {d.map(item => (
          <ProductItem
            key={item.id}
            id= {item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}

      </ul>
    </section>
  );
};

export default Products;
