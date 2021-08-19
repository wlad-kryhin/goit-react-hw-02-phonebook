import {Component} from 'react'

 export default class ContactForm extends Component{
state={
    name: '',
    tel: ''
}
handleInputChange = (event) =>{
    const {name , value } = event.currentTarget
    this.setState({ [name]:value })
      };

handleFormSubmit = event =>{
    event.preventDefault()

    this.props.onSubmit(this.state)
    
}
resetState(){
    this.setState({name: '' , tel: ''})
}
render(){
    return(
        <form onSubmit={this.handleFormSubmit}>
        <label>Name
        <input
  type="text"
  name="name"
  value={this.name}
  onChange={this.handleInputChange}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  required
/>
        </label>
        <label>Tel
        <input
  type="tel"
  name="tel"
  onChange={this.handleInputChange}
  value={this.tel}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  required
/></label>
<button type="submit">Add contact</button>
</form>
    )
}
}