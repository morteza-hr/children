import React, { Component } from 'react';


class Hello extends Component{
    render() { 
        return(
            <h1>
                HelloWorld!
               {this.props.name}
               {this.props.children}
            </h1>
        )
    }
}
 
export default Hello;