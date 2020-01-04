import React from "react";

//in order to change the parameters, there must be an onChange event,
//because React DOESN'T ALLOW to change a state value without onChange
//AND!!!! React thing: change only allowed if we update the state as well!!!!! - and we need to put that updated state back to App.js (INTO THE state)
class EditFishForm extends React.Component {
  handleChange = event => {
    //console.log(event.currentTarget.value);
    //update that fish
    //1. take a copy of the current fish
    //computed property names are used here, IN ORDER TO know which property to be updated (new in ES6)
    //that's why we needed that "name" property in render()
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value
    };
    //2. use updateFish() in App.js
    this.props.updateFish(this.props.index, updatedFish);
  };
  render() {
    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.props.fish.name}
        />
        <input
          type="text"
          name="price"
          onChange={this.handleChange}
          value={this.props.fish.price}
        />
        <select
          type="text"
          name="status"
          onChange={this.handleChange}
          value={this.props.fish.status}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          type="text"
          name="desc"
          onChange={this.handleChange}
          value={this.props.fish.desc}
        />
        <input
          type="text"
          name="image"
          onChange={this.handleChange}
          value={this.props.fish.image}
        />
        <button onClick={() => this.props.deleteFish(this.props.index)}>
          Remove Fish
        </button>
      </div>
    );
  }
}

export default EditFishForm;
