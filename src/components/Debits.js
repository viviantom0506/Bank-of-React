import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
class Debits extends Component {
    constructor(props) {
        super(props);
        this.state = {
          debitInfo: {
            id: "",
            debitDescription: "",
            amount: 0,
            date: "",
          },
          isRedirect: false,
        };
      }
      handleSubmit = (e) => {
        e.preventDefault();
        this.props.addDebit(this.state.debitInfo);
        this.setState({isRedirect: true});
      };
    

      handleChange = (e) => {
        let input = e.target.name;
        let value = e.target.value;
        let newDebit = { ...this.state.debitInfo };
        newDebit[input] = value;
        const date = new Date().toLocaleDateString("en-US");
        newDebit.date = date;
        let id = Math.random();
        newDebit.id = id;
        this.setState({ debitInfo: newDebit });
      };
    
      render() {
        if (this.state.isRedirect) {
            return <Redirect to="/" />;
          }
    
          //maps the details onto the display
        let display = this.props.debitInfo.map((details) => {
          return (
            <div className="debitInfo" key={details.id}>
              <ul>
                <li>Description: {details.description}</li>
                <li>Amount: {details.amount}</li>
                <li>Date: {details.date.toString()}</li>
                
              </ul>
            </div>
            
          );
          
        });
    
        return (
          <>
            <div>
              <h1>Add Your Debit Amount</h1>
              <form onSubmit={this.handleSubmit}>
                
                <div>
                  <label htmlFor="description">Description</label>
                  <input
                    type="text"
                    name="Description"
                    value={this.state.debitInfo.description}
                    onChange={this.handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="amount">Debit Amount</label>
                  <input
                    type="number"
                    name="amount"
                    value={this.state.debitInfo.amount}
                    onChange={this.handleChange}
                  />
                </div>
                //button will be grayed out until everything is filled out
                <button
                  disabled={
                    !(this.state.debitInfo.amount && this.state.debitInfo.description)
                  }
                >
                  Confirm
                </button>
              </form>
            </div>
            <Link to="/">Home Page</Link>
            <br></br>
            <Link to="/UserProfile">User Profile</Link>
            {display}
          </>
        );
      }
    }


export default Debits;