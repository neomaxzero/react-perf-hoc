"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function reactMeasure(WrappedComponent) {
    return function (_WrappedComponent) {
        _inherits(Enhancer, _WrappedComponent);

        function Enhancer(props) {
            _classCallCheck(this, Enhancer);

            var _this = _possibleConstructorReturn(this, (Enhancer.__proto__ || Object.getPrototypeOf(Enhancer)).call(this, props));

            if (window.performance) _this.rule = performance.now;else _this.rule = Date.now;

            _this.timeRenderA = _this.rule();
            return _this;
        }

        _createClass(Enhancer, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                this.timeRenderB = this.rule();
                console.info("Initial Render: " + (this.timeRenderB - this.timeRenderA) + "ms");
            }
        }, {
            key: "componentWillUpdate",
            value: function componentWillUpdate() {
                this.timeUpdateA = this.rule();
            }
        }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                this.timeUpdateB = this.rule();
                console.info("Update component in: " + (this.timeUpdateB - this.timeUpdateA) + "ms");
            }
        }, {
            key: "render",
            value: function render() {
                return _get(Enhancer.prototype.__proto__ || Object.getPrototypeOf(Enhancer.prototype), "render", this).call(this);
            }
        }]);

        return Enhancer;
    }(WrappedComponent);
}

exports.default = reactMeasure;