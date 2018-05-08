'use strict';

var _Button = require('./elements/Button');

var _GlobalStyles = require('./elements/GlobalStyles');

var _Header = require('./elements/typography/Header');

var _Paragraph = require('./elements/typography/Paragraph');

var _Text = require('./elements/typography/Text');

var _textStyles = require('./elements/typography/textStyles');

var _globalStyles = require('./global-styles');

module.exports = {
  Button: _Button.Button,
  generateGlobalStyles: _globalStyles.generateGlobalStyles,
  getDefaultGlobalStyles: _globalStyles.getDefaultGlobalStyles,
  GlobalStyles: _GlobalStyles.GlobalStyles,
  Header: _Header.Header,
  Paragraph: _Paragraph.Paragraph,
  Text: _Text.Text,
  textStylesBase: _textStyles.textStylesBase
};