var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import { PropTypes, CorePropTypes, MbscBase, deepCompare } from '../frameworks/react';

var reactFunc = PropTypes.func;

export let MbscScrollViewBase = class MbscScrollViewBase extends MbscBase {
    constructor(props) {
        super(props);

        this.shouldComponentUpdate = (nextProps, nextState) => {
            this.optimizeUpdate = {
                updateOptions: !deepCompare(this.state.options, nextState.options),
                updateChildren: !deepCompare(this.props.children, nextProps.children)
            };
            return true;
        };
    }

};

MbscScrollViewBase.prototypes = _extends({}, CorePropTypes, {
    itemWidth: PropTypes.number,
    layout: PropTypes.oneOf(['liquid', 'fixed']),
    snap: PropTypes.bool,
    threshold: PropTypes.number,
    paging: PropTypes.bool,
    onItemTap: reactFunc,
    onMarkupReady: reactFunc,
    onAnimationStart: reactFunc,
    onAnimationEnd: reactFunc,
    onMove: reactFunc,
    onGestureStart: reactFunc,
    onGestureEnd: reactFunc
});
