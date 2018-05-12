import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { textStylesBase } from './textStyles';
import * as fontSizeSchema from '../../assets/json/fontSize.json';
import * as gridSchema from '../../assets/json/grid.json';

const headerFactory = props => {
  const {
    color, display, tag: propsTag, ...otherProps
  } = props;

  const tag = propsTag || 'h1';
  const overrides = {
    ...props,
    color,
    fontSizeBase: display ? fontSizeSchema.display[tag] : fontSizeSchema[tag],
    fontWeight: display ? '300' : 'inherit',
  };
  const baseStyles = textStylesBase(overrides);
  const Primitive = styled[tag]`
    ${baseStyles}
    margin: 0 0 ${gridSchema.gutter};
  `;
  return <Primitive {...otherProps} />;
};

headerFactory.propTypes = {
  color: PropTypes.string,
  display: PropTypes.bool,
  tag: PropTypes.string,
};

headerFactory.defaultProps = {
  color: 'inherit',
  display: false,
  tag: 'h1',
};

const Header = props => headerFactory(props);

Header.h1 = Header;
Header.h2 = props => headerFactory({ ...props, tag: 'h2' });
Header.h3 = props => headerFactory({ ...props, tag: 'h3' });
Header.h4 = props => headerFactory({ ...props, tag: 'h4' });
Header.h5 = props => headerFactory({ ...props, tag: 'h5' });
Header.h6 = props => headerFactory({ ...props, tag: 'h6' });
export { Header };
