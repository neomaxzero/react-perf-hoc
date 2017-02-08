function reactMeasure(WrappedComponent) {
    return class Enhancer extends WrappedComponent {
        constructor(props) {
            super(props);
            
            if (window.performance)
                this.rule = performance.now;
            else
                 this.rule = Date.now;

            this.timeRenderA = this.rule();
        }

        componentDidMount() {
            this.timeRenderB = this.rule();
            console.info(`Initial Render: ${this.timeRenderB - this.timeRenderA}ms`);
        }

        componentWillUpdate() {
            this.timeUpdateA = this.rule();
            
        }
        
        componentDidUpdate() {            
            this.timeUpdateB = this.rule();     
            console.info(`Update component in: ${this.timeUpdateB - this.timeUpdateA}ms`);            
        }

        render() {
            return super.render();
        }
    }
}

export default reactMeasure;
