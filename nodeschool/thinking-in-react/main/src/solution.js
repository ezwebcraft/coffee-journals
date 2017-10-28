import React from 'react';

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
    },
});

export const FilterableProductTable = React.createClass({
    render() {
        return (
            <SearchBar/>
        );
    },
});

export const ProductTable = React.createClass({

render(){

	const products = this.props.products;

	const rows = [];
	let currentCategory;

	products.forEach((product)=>{
		if(product.category !== currentCategory){
			currentCategory = product.category;

			rows.push((
				<ProductCategoryRowrod
					key = {currentCategory}
					category = {currentCategory}
				/>	

				));

		}

	rows.push((

		<ProductRow key = {product.name} product = {products} />

		));

	});

	return(
		<table>
			<thread>
				<tr>
					<th>Name</th>
					<th>Price</th>
				</tr>
			</thread>
			<tbody>
				{rows}
			<tbody>
		</table>

		);
},

});

export const ProductRow = React.createClass({


});

export const ProductCategoryRow = React.createClass({

	
});