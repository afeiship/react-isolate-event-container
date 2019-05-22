import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

const CLASS_NAME = 'react-isolate-event-container';

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    items: PropTypes.array
  };

  static defaultProps = {
    items: []
  };
  /*===properties end===*/

  constructor(inProps) {
    super(inProps);
    const handler = this.stopEventPropagationOutsideContainer.bind(this);
    const { items } = inProps;
    this.isolatedEvents = {};
    items.forEach((item) => (this.isolatedEvents[item] = handler));
  }

  stopEventPropagationOutsideContainer(inEvent) {
    inEvent.stopPropagation();
  }

  render() {
    const { className, items, ...props } = this.props;
    return (
      <div
        className={classNames(CLASS_NAME, className)}
        {...this.isolatedEvents}
        {...props}
      />
    );
  }
}
