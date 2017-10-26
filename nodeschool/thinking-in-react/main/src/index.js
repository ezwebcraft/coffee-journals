import ReactDOM from 'react-dom';
import React, { Component } from 'react';


class ProductCategoryRow  extends React.Component {
	render(){
		const category = this.props.category;
		return(

			<tr>
			 <th colSpan="2">
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
		products.name :
		<span style = {{ color: 'red'}} >
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

class ProductTable extends React.Component {
   render(){

   	const row = [];
   	let lastCategory = null;


   	this.props.products.forEach((products) => {
   		if(products.category !== lastCategory){
   			rows.push(
   			<ProductCategoryRowou
   				category = {products.category}
   				key={products.category} />
   			);

   		}
   	

   	rows.push(
   			<ProductCategoryRowou
   				category = {products.category}
   				key={products.category} />


   	);


   });

   return (
   	<table>
   		<thread>
   			<tr>
   				<th>Name</th>
   				<th>Price</th>
   			</tr>
   				<tbody>{rows}</tbody>
   		</thread>

   	</table>
   	);
	}
}



class SearchBar extends React.Component {

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


ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById('container')
);
