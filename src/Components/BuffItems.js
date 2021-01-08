import React, {Component} from 'react';
import BuffItem from './BuffItem'

class BuffItems extends Component {
    render() {
        
        return this.props.Buff.map(buff => 
            <BuffItem
                buff={buff}
                key={buff.id}
                checkBuff={this.props.checkBuff}
            />
        );
    }
}
export default BuffItems;