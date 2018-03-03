import React, { Component } from 'react';
import Modal from 'react-modal';

class AddDriver extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            error: ''
        }
    }
    onSubmit(e) {
        e.preventDefault();

        const name = this.refs.name.value.trim();
        const height = this.refs.height.value.trim();
        const weight = this.refs.weight.value.trim();
        const raceTeam = this.refs.raceTeam.value.trim();
        const raceTeamWebsite = this.refs.raceTeamWebsite.value.trim();
        const suit = this.refs.suit.value.trim();
        const shoes = this.refs.shoes.value.trim();
        const gloves = this.refs.gloves.value.trim();
        const helmet = this.refs.helmet.value.trim();
        const hans = this.refs.hans.value.trim();
        const personalNotes = this.refs.personalNotes.value.trim();
    
        Meteor.call('drivers.insert', name, height, weight, raceTeam, raceTeamWebsite,
        suit, shoes, gloves, helmet, hans, personalNotes, (err, res) => {
            if(!err) {
                this.handleModalClose();
            } else {
                this.setState({ error: err.reason });
            }
        });

        this.refs.name.value= '';
        this.refs.height.value= '';
        this.refs.weight.value= '';
        this.refs.raceTeam.value= '';
        this.refs.raceTeamWebsite.value= '';
        this.refs.suit.value= '';
        this.refs.shoes.value= '';
        this.refs.gloves.value= '';
        this.refs.helmet.value= '';
        this.refs.hans.value= '';
        this.refs.personalNotes.value= '';       
    }
    handleModalClose() {
       this.setState({ 
           isOpen: false,
           error: ''}) 
    }
    render() {
        return (
            <div>
                <h1>quick fix to add space</h1>
                <h1>quick fix to add space</h1>
                <button className="button" onClick={() => this.setState({isOpen: true})}>+ Add Driver</button>
                <Modal 
                    isOpen={this.state.isOpen} 
                    contentLabel="Add Driver"
                    onAfterOpen={() => this.refs.name.focus()}
                    onRequestClose={this.handleModalClose.bind(this)}
                    className="boxed-view__box"
                    overlayClassName="boxed-view boxed-view--modal"
                    >
                    <h1>quick fix to add space</h1>
                    <h1>quick fix to add space</h1>
                    <p>Add Driver</p>
                    {this.state.error ? <p>{this.state.error}</p> : undefined}
                    <form onSubmit={this.onSubmit.bind(this)} className="boxed-view__form">
                        <input type="text" ref="name" placeholder="Name"/><br/>
                        <input type="text" ref="height" placeholder="Height"/><br/>
                        <input type="text" ref="weight" placeholder="Weight"/><br/>
                        <input type="text" ref="raceTeam" placeholder="Race Team"/><br/>
                        <input type="text" ref="raceTeamWebsite" placeholder="Race Team Website"/><br/>
                        <input type="text" ref="suit" placeholder="Suit"/><br/>
                        <input type="text" ref="shoes" placeholder="shoes"/><br/>
                        <input type="text" ref="gloves" placeholder="Gloves"/><br/>
                        <input type="text" ref="helmet" placeholder="Helmet"/><br/>
                        <input type="text" ref="hans" placeholder="HANS"/><br/>
                        <input type="text" ref="personalNotes" placeholder="Personal Notes"/><br/>
                        <button className="button">Add Driver</button>
                        <button type="button" className="button button--secondary" onClick={this.handleModalClose.bind(this)}>Cancel</button>
                    </form>
                </Modal>     
            </div>
        );
    }
}

export default AddDriver;