import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { defaultTextStylesBase } from 'src/elements/typography/textStyles';
import { withBaseStyles } from 'src/decorators';
import { passThrough } from 'src/utils/componentHelpers';
import { getGlobalStyles } from 'src/global-styles';
import { getScaledSize } from 'src/elements/typography/utils';

const { grid: gridSchema } = getGlobalStyles();

const padding = getScaledSize(gridSchema.gutter, 0.5);

export const AssistiveText = props => {
  const overrides = {
    ...props,
    sm: true,
  };
  const ProtoAssistiveText = withBaseStyles(styled.div`padding: 0 ${padding};`, overrides);
  return <ProtoAssistiveText {...passThrough(AssistiveText, props)} />;
};

AssistiveText.propTypes = {
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontWeight: PropTypes.string,
  kerning: PropTypes.string,
  lg: PropTypes.bool,
  sm: PropTypes.bool,
  textAlign: PropTypes.string,
  textDecoration: PropTypes.string,
};

AssistiveText.defaultProps = {
  color: defaultTextStylesBase.color,
  fontFamily: defaultTextStylesBase.fontFamily,
  fontWeight: defaultTextStylesBase.fontWeight,
  kerning: defaultTextStylesBase.kerning,
  lg: defaultTextStylesBase.lg,
  sm: defaultTextStylesBase.sm,
  textAlign: defaultTextStylesBase.textAlign,
  textDecoration: defaultTextStylesBase.textDecoration,
};
