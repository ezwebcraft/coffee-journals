import React from 'react';
import ReactDOM from 'react-dom';

export const SearchBar = React.createClass({
    render() {
        return (
            <form>
                <input type="search" placeholder="Search..."/>
                <label>
                    <input type="checkbox"/>
                    Only show products in stock
                </label>
            </form>
        );
    }
});

export const FilterableProductTable = React.createClass({
    render() {
        return (<SearchBar/>);
    }
});

export const ProductTable = React.createClass({

    render() {

        const products = this.props.products;

        const rows = [];
        let currentCategory;

        products.forEach((product) => {
            if (product.category !== currentCategory) {
                currentCategory = product.category;

                rows.push((
                    <ProductCategoryRowrod key={currentCategory} category={currentCategory}/>

                ));

            }

            rows.push((<ProductRow key={product.name} product={products}/>));

        });

        return (<table>
            		<thread>
                		<tr>
                    		<th>Name</th>
                    		<th>Price</th>
                		</tr>
            		</thread>
            			<tbody>
                			{rows}
                		</tbody>
              	</table>

                ); }, }); 

export const ProductRow = React.createClass({
                    render() {
                        const product = this.props.product;

                        const style = {
                            color: product.stocked
                                ? null
                                : 'red'
                        };

                        return (
                            <tr>
                                <td style={sytle}>
                                    {product.name}
                                </td>
                                <td>
                                    {product.price}
                                </td>

                            </tr>
                        );
                    }
                }); 


export const ProductCategoryRow = React.createClass({
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    );
  }

    
});


const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];


ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById('container')
);