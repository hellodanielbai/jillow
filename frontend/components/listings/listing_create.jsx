import React from 'react';

class ListingCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: "",
            city: "",
            state: "",
            zipcode: "",
            price: "",
            sqft: "",
            bd: "",
            ba: "",
            description: "",
            lat: 1,
            lng: 1
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addListing(this.parseState())
    };

    renderErrors() {
        return this.props.errors
    };

    parseState() {
        let dupeState = this.state
        dupeState.zipcode = parseInt(this.state.zipcode)
        dupeState.price = parseInt(this.state.price)
        dupeState.sqft = parseInt(this.state.sqft)
        dupeState.bd = parseFloat(this.state.bd)
        dupeState.ba = parseFloat(this.state.ba)
        return dupeState
    }

    render() {
        return(
            <div>
            <form className='addListing' onSubmit={this.handleSubmit}>
                <div>Address
                    <input id="address" type="text" value={this.state.address} onChange={this.update("address")} />
                </div>
                <div>City
                    <input id="city" type="text" value={this.state.city} onChange={this.update("city")} />
                </div>
                <div>State
                    <input id="state" type="text" value={this.state.state} onChange={this.update("state")} />
                </div>
                <div>ZipCode
                    <input id="zipcode" type="text" value={this.state.zipcode} onChange={this.update("zipcode")} />
                </div>
                <div>Price
                    <input id="price" type="text" value={this.state.price} onChange={this.update("price")} />
                </div>
                <div>Square Feet
                    <input id="sqft" type="text" value={this.state.sqft} onChange={this.update("sqft")} />
                </div>
                <div>Bedroom
                    <input id="bd" type="text" value={this.state.bd} onChange={this.update("bd")} />
                </div>
                <div>Bath
                    <input id="ba" type="text" value={this.state.ba} onChange={this.update("ba")} />
                </div>
                <div>Description
                    <input id="description" type="text" value={this.state.description} onChange={this.update("description")} />
                </div>
                <div>
                    <input type="submit" />
                </div>
                <div>
                    {this.renderErrors()}
                </div>
            </form>
            </div>
        )
    }
}

export default ListingCreate