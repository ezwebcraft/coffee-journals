import ReactDOM from 'react-dom';
import React, { Component } from 'react';


class ProductCategoryRow  extends React.Component {
	render(){
		const category = this.props.category;
		return(

			<tr>
			 <th colSpan='2'>
			 	{category}
			 </th>
			</tr>

		);
	}
}

class ProductRow extends React.Component {
	render(){
		const products = this.props.products;
		const name = products.stocked ?
		<span style = {{ color: 'red'}}>
			{products.name}
		</span>;


	return(
		<tr>
			<td>{name}</td>
			<td>products.price</td>
		</tr>

		);
	}
}

class SearchBar extends React.Component {

}
class ProductTable extends React.Component {

}
class FilterableProductTable extends React.Component {
render() {
    return (
      <div>
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    );
  }

}

const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'}
]


