import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { URLSearchParams } from 'url';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import { MuiThemeProvider } from 'material-ui/styles';
import Typography from 'material-ui/Typography/Typography';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import PropTypes from 'prop-types';

import theme from '../../client/styles/material-ui-theme';
import history from '../../routes/history';
import MainNavigationBar from '../MainNavigationBar';

const queryString = require('query-string');

// We can inject some CSS into the DOM. (used for Material-UI)
const styles = {
    item1: {
        flex: 1,
        margin: 10       
    },
      button: {
        background: 'primary',
        borderRadius: 10,
        border: 0,
        color: 'white',
        margin: 50
    },
  };



class DriverDetails extends Component {
    constructor(props) {
        super(props);

        const parsed = queryString.parse(this.props.location.search);
        id = parsed.id;

        var name='';
    }
    
    componentDidMount() {
        Meteor.call('drivers.retreive', id, function(error,result){
            document.getElementById('name').value=result.name;
            document.getElementById('height').value=result.height;
            document.getElementById('weight').value=result.weight;
            document.getElementById('raceTeam').value=result.raceTeam;
            document.getElementById('raceTeamWebsite').value=result.raceTeamWebsite;
            document.getElementById('suit').value=result.suit;
            document.getElementById('shoes').value=result.shoes;
            document.getElementById('gloves').value=result.gloves;
            document.getElementById('helmet').value=result.helmet;
            document.getElementById('hans').value=result.hans;
            document.getElementById('personalNotes').value=result.personalNotes;
    })       
    }


    handleChange = (e) => {
       console.log("A change has been identified");
        
    }
    
    onSubmit(e) {
        e.preventDefault();
       const name=this.refs.name.value.trim();
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

       Meteor.call('drivers.save', id, name, height, weight, raceTeam, raceTeamWebsite,
            suit, shoes, gloves, helmet, hans, personalNotes, function(error,result){
        })   
    }


    render() {
        const { classes } = this.props;
        return (
            <MuiThemeProvider theme={theme}>
                <div>
                    <MainNavigationBar title="Driver Details Page"/>


                    <h3 className="form-section_title" style={{marginTop: 100}}>Driver</h3>
                    <div className="form-section">
                            
                            <TextField
                                id="name"
                                className="form-item"
                                className={classes.item1}
                                onChange={this.handleChange}
                                multiline
                                label="Name" 
                                
                                />
                           
                                 
                    </div>
                
                    <h3 className="form-section_title" style={{marginTop: 50}} > Personal Information</h3>
                    <div className="form-section">
                        
                        <div className="form-row">
                            <TextField
                                className="form-item"
                                className={classes.item1}
                                multiline
                                label="Height" />

                            <TextField     
                                className="form-item"   
                                className={classes.item1}
                                multiline
                                label="Weight"/>
                        
                        </div>

                        <div className="form-row">
                            <TextField   
                                className="form-item"  
                                className={classes.item1}       
                                multiline
                                label="Race Team"/>
                        
                            <TextField   
                                className="form-item"  
                                className={classes.item1}       
                                multiline
                                label="Race Team Website"/>
                        </div>               
                    </div>
                        
                    <h3 className="form-section_title" style={{marginTop: 50}}>Equipment</h3>
                    <div className="form-section">
                        
                        
                            <TextField
                                className="form-item"
                                className={classes.item1}
                                multiline
                                label="Suit" />

                            <TextField
                                className="form-item"
                                className={classes.item1}
                                multiline
                                label="Shoes" />

                            <TextField
                                className="form-item"
                                className={classes.item1}
                                multiline
                                label="Gloves" />

                            <TextField
                                className="form-item"
                                className={classes.item1}
                                multiline
                                label="Helmet" />

                            <TextField
                                className="form-item"
                                className={classes.item1}
                                multiline
                                label="HANS" />
                                                    
                    </div>

                    <h3 className="form-section_title" style={{marginTop: 50}}>Personal Notes</h3>
                    <div className="form-section">
                            
                            <TextField
                                className="form-item"
                                className={classes.item1}
                                multiline
                                label="Notes" />
                                 
                    </div>






                <form onSubmit={this.onSubmit.bind(this)} className="boxed-view__form">
                        
                        
                        <input type="text" ref="name" placeholder="Name"/><br/>
                        <input type="text" id="height" ref="height" placeholder="Height"/><br/>
                        <input type="text" id="weight" ref="weight" placeholder="Weight"/><br/>
                        <input type="text" id="raceTeam" ref="raceTeam" placeholder="Race Team"/><br/>
                        <input type="text" id="raceTeamWebsite" ref="raceTeamWebsite" placeholder="Race Team Website"/><br/>
                        <input type="text" id="suit" ref="suit" placeholder="Suit"/><br/>
                        <input type="text" id="shoes" ref="shoes" placeholder="shoes"/><br/>
                        <input type="text" id="gloves" ref="gloves" placeholder="Gloves"/><br/>
                        <input type="text" id="helmet" ref="helmet" placeholder="Helmet"/><br/>
                        <input type="text" id="hans" ref="hans" placeholder="HANS"/><br/>
                        <input type="text" id="personalNotes" ref="personalNotes" placeholder="Personal Notes"/><br/>
                        <button className="button">Save</button>
                    </form>
                </div>
            </MuiThemeProvider>
        );
    }
}


export default withStyles(styles)(DriverDetails);