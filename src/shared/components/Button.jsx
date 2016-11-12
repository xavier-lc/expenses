import React, { PropTypes } from 'react';
import Loader from 'halogen/PulseLoader';
import classnames from 'classnames';

const propTypes = {
  id: PropTypes.string.isRequired,
  triggerId: PropTypes.string,
  txt: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func.isRequired,
  isInline: PropTypes.bool,
  className: PropTypes.string, // used to replace the "btn-primary" class
  loaderSize: PropTypes.number,
  dataset: PropTypes.object
};

function Button(props) {
  const btnClass = classnames(
    'btn',
    {
      'btn-primary': !props.className,
      [props.className]: props.className,
      'center-block': !props.isInline,
    },
  );

  const txtClass = classnames({
    hidden: props.id === props.triggerId,
    glyphicon: props.icon,
    [`glyphicon-${props.icon}`]: props.icon,
  });

  const loaderClass = classnames({ hidden: props.id !== props.triggerId });

  // create an object with the optional data key-value pairs to spread as attributes of the button
  const dataset = props.dataset
    ? Object.keys(props.dataset).reduce((data, key) => {
      data[`data-${key}`] = props.dataset[key];

      return data;
    }, {})
    : {};

  return (
    <button
      id={props.id}
      title={props.title}
      className={btnClass}
      onClick={props.clickHandler}
      disabled={props.isLoading}
      {...dataset}
    >
      <span className={txtClass}>
        {props.txt}
      </span>

      <Loader
        className={loaderClass}
        color="#fff"
        size={`${props.loaderSize ? props.loaderSize : 14}px`}
        margin="4px"
      />
    </button>
  );
}

Button.propTypes = propTypes;

function InlineButton(props) {
  return <Button isInline {...props} />;
}

export { InlineButton };
export default Button;
