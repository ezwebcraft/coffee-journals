import React, { Component } from 'react';

class ListContacts extends Component {
render(){

return (
	<ol className="contact-list"> 
	{ this.props.contact.map((contact) =>(
 	<li key={contact.id} className='contact-list-item'>

		<div className='contact-avatar' style={{
			backgroundImage:`url(${contact.avatarUrl})`	
		}}/>
		<div className='contact-details'>
			<p>{contact.name}</p>
			<p>{contact.email}</p>
		</div>
		<button className='contact-remove'>
			remove	
		</button>
	</li>
	))}		
	</ol> 
	)

  }

}

export default ListContacts 
