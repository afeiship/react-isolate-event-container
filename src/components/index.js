import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CLASS_NAME = 'react-isolate-event-container';

export default class ReactIsolateEventContainer extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * React events list.
     */
    items: PropTypes.array
  };

  static defaultProps = {
    items: []
  };

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
    const { className, ...props } = this.props;
    return (
      <div
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        {...this.isolatedEvents}
        {...props}
      />
    );
  }
}
