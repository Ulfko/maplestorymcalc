import React, {Component} from 'react';

class BuffItem extends Component {

    StyleImg() {
        return{
            cursor: 'pointer',
            opacity: this.props.buff.check ? '1.0' : '0.3',
           

        }
    }
    

    render() {
        const {buff} = this.props;
        return <img 
            src={buff.image} 
            style={this.StyleImg()} 
            onClick ={this.props.checkBuff.bind(this, buff.id)}/>
    }
}


export default BuffItem;