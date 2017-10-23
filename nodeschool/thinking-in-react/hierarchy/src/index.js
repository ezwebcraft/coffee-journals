import ReactDOM from 'react-dom';
import React, { Component } from 'react';

const PRODUCTS = [{category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'}]

class ProductCategoryRow  extends React.Component {
}

class ProductRow extends React.Component {
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


