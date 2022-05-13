import React from "react";
export default class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            DynamicComponent: null
        }
    }
    componentDidMount() {
        this.loadComponent();
    }
    loadComponent = async() => {
        const promiseComponent = import('./dynamic-module');
        const result = await promiseComponent;
        this.setState({
            DynamicComponent: result.default
        })
    }
    render() {
        const { DynamicComponent } = this.state;
        return (
            <div>
                <div>box1</div>
                {
                    DynamicComponent ? <DynamicComponent /> : <div>loading..</div>
                }
            </div>
        )
        
    }
}