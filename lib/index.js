function reactMeasure(WrappedComponent) {
    return class Enhancer extends WrappedComponent {
        constructor(props) {
            super(props);
            this.timeRenderA = performance.now();
        }

        componentDidMount() {
            this.timeRenderB = performance.now();
            console.info(`Initial Render: ${this.timeRenderB - this.timeRenderA}ms`);
        }

        componentWillUpdate() {
            this.timeUpdateA = performance.now();
            
        }
        
        componentDidUpdate() {            
            this.timeUpdateB = performance.now();     
            console.info(`Update component in: ${this.timeUpdateB - this.timeUpdateA}ms`);            
        }

        render() {
            return super.render();
        }
    }
}

export default reactMeasure;
