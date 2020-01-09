import React from 'react';

const withHover = Component => {
    class ComponentWithHover extends React.Component {
       constructor(){
            super();
            this.state = {
                hovering: false
            }
       }
        onHover(){
            this.setState({
                hovering: true
            })
        }

        onHoverOver(){
            this.setState({
                hovering: false
            })
        }

        render(){
            return (
                <div onMouseOver={()=>this.onHover()} onMouseOut={()=>this.onHoverOver()}>
                    <Component {...this.props} hovering={this.state.hovering}/>
                </div>
            )
        }
    }

    return ComponentWithHover;
}

export default withHover;