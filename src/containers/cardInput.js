"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
require("../style/cardInput.scss");
var react_redux_1 = require("react-redux");
var actions_1 = require("../actions");
var CardInput = /** @class */ (function (_super) {
    __extends(CardInput, _super);
    function CardInput() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.createTodo = function (e) {
            _this.props.createTodo(e.target.value);
            _this.props.hiddenTodoInput();
        };
        _this.handleKeyEnter = function (e) {
            if (e.key === 'Enter') {
                _this.createTodo(e);
            }
        };
        return _this;
    }
    CardInput.prototype.render = function () {
        var _this = this;
        if (this.props.visibleTodoInput) {
            return (<div className="cardInput__wrapper">
          <input className="cardInput" type="textarea" size="25" placeholder="ここに文字を入力してください" onBlur={function (e) { return _this.createTodo(e); }} onKeyPress={function (e) { return _this.handleKeyEnter(e); }}/>
        </div>);
        }
        return null;
    };
    return CardInput;
}(react_1["default"].Component));
var mapStateToProps = function (state) { return ({
    visibleTodoInput: state.visibleTodoInput
}); };
exports["default"] = react_redux_1.connect(mapStateToProps, { createTodo: actions_1.createTodo, hiddenTodoInput: actions_1.hiddenTodoInput })(CardInput);
