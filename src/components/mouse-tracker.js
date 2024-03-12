import React from 'react';
class MouseTracker extends React.Component{
    constructor(props){
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0}
       
    }

    handleMouseMove(event){
        const newPosition = {
            x : event.clientX,
            y : event.clientY
        }
        this.setState(newPosition)
    }

    render(){
        return <div style={{height: '100vh'}} onMouseMove={this.handleMouseMove}>
            Mouse Tracker
            <p>Current Position  x: {this.state.x} y: {this.state.y} </p>
        </div>
    }
}

export default MouseTracker;