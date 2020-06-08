import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
class Debits extends Component {
    constructor(props) {
        super(props);
        this.state = {
          debitInfo: {
            id: "",
            description: "",
            amount: 0,
            date: "",
          },
          isRedirect: false,
        };
      }
     
    

      handleChange = (e) => {
        let input = e.target.name;
        let value = e.target.value;
        let newDebit = { ...this.state.debitInfo };
        newDebit[input] = value;
        const date = new Date().toLocaleDateString("en-US");
        newDebit.date = date;
        const id = Math.floor(Math.random() * 9999999999) + 1;
        this.setState({ debitInfo: newDebit });
      };
    
      handleSubmit = (e) => {
        e.preventDefault();
        this.props.Debits(this.state.debitInfo)
        this.setState({isRedirect: true});
      };
      render() {
        if (this.state.isRedirect) {
            return <Redirect to="/" />;
          }
    
          //maps the details onto the display
            let display = (
                this.props.debitInfo.map((debit) => {
                    return (
                        <div className="DebitHistory">
                        
                            <div>Description: {debit.description}</div>
                            <div>Amount: {debit.amount}</div>
                            <div>Date: {debit.date}</div>
                        </div>
                    )
                })
            )
    
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
                <button>
                  Add debit
                </button>
              </form>
            </div>
            <Link to="/">Home Page</Link>
            <br></br>
            <Link to="/UserProfile">User Profile</Link>
            <br></br>
            <Link to="/Debits">Debit Page</Link>
            <br></br>
            <Link to="/Login">Login Page</Link>
            <br></br>
           
            {display}
          </>
        );
      }
    }


export default Debits;
