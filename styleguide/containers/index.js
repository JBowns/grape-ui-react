const path = require('path');

module.exports = {
  CodeRenderer: path.join(
    __dirname,
    './CodeRenderer'
  ),
  ComponentsListRenderer: path.join(
    __dirname,
    './ComponentsListRenderer'
  ),
  HeadingRenderer: path.join(
    __dirname,
    './HeadingRenderer'
  ),
  LinkRenderer: path.join(
    __dirname,
    './LinkRenderer'
  ),
  ParaRenderer: path.join(
    __dirname,
    './ParaRenderer'
  ),
  PathlineRenderer: path.join(
    __dirname,
    './PathlineRenderer'
  ),
  StyleGuideRenderer: path.join(
    __dirname,
    './StyleGuideRenderer'
  ),
  TabButtonRenderer: path.join(
    __dirname,
    './TabButtonRenderer'
  ),
  TableOfContentsRenderer: path.join(
    __dirname,
    './TableOfContentsRenderer'
  ),
  ToolbarButtonRenderer: path.join(
    __dirname,
    './ToolbarButtonRenderer'
  )
};
