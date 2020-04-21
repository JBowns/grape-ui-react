"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom");

require("jest-styled-components");

var _styledComponents = require("styled-components");

var _ = require("..");

var _utils = require("./utils");

/* eslint-disable react/prop-types */
describe('Table - initially defined hiddenColumns', () => {
  let renderUtils;
  const pageOptions = [5, 10, 15];
  const data = [..._utils.testData];
  beforeEach(() => {
    renderUtils = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Table, {
      columns: [..._utils.columns],
      data: data,
      hiddenColumns: ['age'],
      pageOptions: pageOptions,
      pageSize: pageOptions[0]
    })));
  });
  it('should have the indicated columns not visible', () => {
    const _renderUtils = renderUtils,
          container = _renderUtils.container,
          queryByTitle = _renderUtils.queryByTitle;
    expect(container).toContainElement(queryByTitle('test-first-name-column'));
    expect(container).toContainElement(queryByTitle('test-last-name-column'));
    expect(container).not.toContainElement(queryByTitle('test-info-column'));
    expect(container).not.toContainElement(queryByTitle('test-age-column'));
  });
});
describe('Table - showToggleHideColumns set to false', () => {
  let renderUtils;
  const pageOptions = [5, 10, 15];
  const data = [..._utils.testData];
  beforeEach(() => {
    renderUtils = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Table, {
      columns: [..._utils.columns],
      data: data,
      pageOptions: pageOptions,
      pageSize: pageOptions[0]
    })));
  });
  it('should have all hide toggle controls not present', () => {
    const _renderUtils2 = renderUtils,
          container = _renderUtils2.container,
          queryByLabelText = _renderUtils2.queryByLabelText;
    expect(container).not.toContainElement(queryByLabelText('All'));
    expect(container).not.toContainElement(queryByLabelText('First Name'));
    expect(container).not.toContainElement(queryByLabelText('Last Name'));
    expect(container).not.toContainElement(queryByLabelText('Age'));
  });
});
describe('Table - showToggleHideColumns set to true with no hiddenColumns defined', () => {
  let renderUtils;
  const pageOptions = [5, 10, 15];
  const data = [..._utils.testData];
  beforeEach(() => {
    renderUtils = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Table, {
      columns: [..._utils.columns],
      data: data,
      pageOptions: pageOptions,
      pageSize: pageOptions[0],
      showToggleHideColumns: true
    })));
  });
  it('should have all hide toggle controls present', () => {
    const _renderUtils3 = renderUtils,
          container = _renderUtils3.container,
          queryByLabelText = _renderUtils3.queryByLabelText;
    const inputAll = queryByLabelText('All');
    const inputFirstName = queryByLabelText('First Name');
    const inputLastName = queryByLabelText('Last Name');
    const inputAge = queryByLabelText('Age');
    expect(container).toContainElement(inputAll);
    expect(container).toContainElement(inputFirstName);
    expect(container).toContainElement(inputLastName);
    expect(container).toContainElement(inputAge);
  });
  it('should have hide toggle controls in their appropriate checked state, initially defined by hiddenColumns', () => {
    const _renderUtils4 = renderUtils,
          queryByLabelText = _renderUtils4.queryByLabelText;
    const inputAll = queryByLabelText('All');
    const inputFirstName = queryByLabelText('First Name');
    const inputLastName = queryByLabelText('Last Name');
    const inputAge = queryByLabelText('Age');
    const expected = {
      age: true,
      all: true,
      firstName: true,
      lastName: true
    };
    expect({
      age: inputAge.checked,
      all: inputAll.checked,
      firstName: inputFirstName.checked,
      lastName: inputLastName.checked
    }).toEqual(expected);
  });
});
describe('Table - showToggleHideColumns is true with hiddenColumns', () => {
  let renderUtils;
  const pageOptions = [5, 10, 15];
  const data = [..._utils.testData];
  beforeEach(() => {
    renderUtils = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Table, {
      columns: [..._utils.columns],
      data: data,
      hiddenColumns: ['age', 'lastName'],
      pageOptions: pageOptions,
      pageSize: pageOptions[0],
      showToggleHideColumns: true
    })));
  });
  it('should have all hide toggle controls', () => {
    const _renderUtils5 = renderUtils,
          container = _renderUtils5.container,
          queryByLabelText = _renderUtils5.queryByLabelText;
    const inputAll = queryByLabelText('All');
    const inputFirstName = queryByLabelText('First Name');
    const inputLastName = queryByLabelText('Last Name');
    const inputAge = queryByLabelText('Age');
    expect(container).toContainElement(inputAll);
    expect(container).toContainElement(inputFirstName);
    expect(container).toContainElement(inputLastName);
    expect(container).toContainElement(inputAge);
  });
  it('should have hide toggle controls in their appropriate checked state', () => {
    const _renderUtils6 = renderUtils,
          queryByLabelText = _renderUtils6.queryByLabelText;
    const inputAll = queryByLabelText('All');
    const inputFirstName = queryByLabelText('First Name');
    const inputLastName = queryByLabelText('Last Name');
    const inputAge = queryByLabelText('Age');
    const expected = {
      age: false,
      all: false,
      firstName: true,
      lastName: false
    };
    expect({
      age: inputAge.checked,
      all: inputAll.checked,
      firstName: inputFirstName.checked,
      lastName: inputLastName.checked
    }).toEqual(expected);
  });
  it('should hide the appropriate columns when a hide column toggle is unchecked', () => {
    const _renderUtils7 = renderUtils,
          container = _renderUtils7.container,
          queryByLabelText = _renderUtils7.queryByLabelText,
          queryAllByText = _renderUtils7.queryAllByText;
    const inputAll = queryByLabelText('All');
    const inputFirstName = queryByLabelText('First Name');
    const inputLastName = queryByLabelText('Last Name');
    const inputAge = queryByLabelText('Age');

    const _queryAllByText = queryAllByText('First Name'),
          _queryAllByText2 = (0, _slicedToArray2.default)(_queryAllByText, 2),
          firstNameColumnHeader = _queryAllByText2[1];

    expect(container).toContainElement(firstNameColumnHeader); // Firing the click to toggle First Name column to hidden:

    _react2.fireEvent.click(queryByLabelText('First Name'));

    const expected = {
      age: false,
      all: false,
      firstName: false,
      lastName: false
    };
    expect({
      age: inputAge.checked,
      all: inputAll.checked,
      firstName: inputFirstName.checked,
      lastName: inputLastName.checked
    }).toEqual(expected);
    expect(container).not.toContainElement(firstNameColumnHeader);
  });
});
describe('Table - toggle for hide all columns', () => {
  let renderUtils;
  const pageOptions = [5, 10, 15];
  const data = [..._utils.testData];
  beforeEach(() => {
    renderUtils = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Table, {
      columns: [..._utils.columns],
      data: data,
      pageOptions: pageOptions,
      pageSize: pageOptions[0],
      showToggleHideColumns: true
    })));
  });
  it('should show all columns when toggle All is checked', () => {
    const _renderUtils8 = renderUtils,
          container = _renderUtils8.container,
          queryByLabelText = _renderUtils8.queryByLabelText,
          queryByTitle = _renderUtils8.queryByTitle;
    const inputAll = queryByLabelText('All');
    const inputFirstName = queryByLabelText('First Name');
    const inputLastName = queryByLabelText('Last Name');
    const inputAge = queryByLabelText('Age'); // clicking toggle All to unchecked

    _react2.fireEvent.click(queryByLabelText('All')); // clicking toggle All to checked


    _react2.fireEvent.click(queryByLabelText('All'));

    const expected = {
      age: true,
      all: true,
      firstName: true,
      lastName: true
    };
    expect({
      age: inputAge.checked,
      all: inputAll.checked,
      firstName: inputFirstName.checked,
      lastName: inputLastName.checked
    }).toEqual(expected);
    expect(container).toContainElement(queryByTitle('test-name-column'));
    expect(container).toContainElement(queryByTitle('test-info-column'));
    expect(container).toContainElement(queryByTitle('test-first-name-column'));
    expect(container).toContainElement(queryByTitle('test-last-name-column'));
    expect(container).toContainElement(queryByTitle('test-age-column'));
  });
  it('should show all columns when toggle All is unchecked', () => {
    const _renderUtils9 = renderUtils,
          container = _renderUtils9.container,
          queryByLabelText = _renderUtils9.queryByLabelText,
          queryByTitle = _renderUtils9.queryByTitle;
    const inputAll = queryByLabelText('All');
    const inputFirstName = queryByLabelText('First Name');
    const inputLastName = queryByLabelText('Last Name');
    const inputAge = queryByLabelText('Age'); // clicking toggle All to unchecked

    _react2.fireEvent.click(queryByLabelText('All'));

    const expected = {
      age: false,
      all: false,
      firstName: false,
      lastName: false
    };
    expect({
      age: inputAge.checked,
      all: inputAll.checked,
      firstName: inputFirstName.checked,
      lastName: inputLastName.checked
    }).toEqual(expected);
    expect(container).not.toContainElement(queryByTitle('test-name-column'));
    expect(container).not.toContainElement(queryByTitle('test-info-column'));
    expect(container).not.toContainElement(queryByTitle('test-first-name-column'));
    expect(container).not.toContainElement(queryByTitle('test-last-name-column'));
    expect(container).not.toContainElement(queryByTitle('test-age-column'));
  });
});