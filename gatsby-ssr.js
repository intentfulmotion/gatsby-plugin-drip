'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.onRenderBody = function (_ref, pluginOptions) {
  var setPostBodyComponents = _ref.setPostBodyComponents;

  if (process.env.NODE_ENV === 'production') {
    return setPostBodyComponents([_react2.default.createElement('script', {
      key: 'gatsby-plugin-drip',
      dangerouslySetInnerHTML: {
        __html: '\n          <!-- Drip --><script type="text/javascript">var _dcq=_dcq||[];var _dcs=_dcs||{};\n          _dcs.account=\'' + pluginOptions.accountId + '\';(function(){var dc=document.createElement(\'script\');\n          dc.type=\'text/javascript\';dc.async=!0;dc.src=\'//tag.getdrip.com/' + pluginOptions.accountId + '.js\';\n          var s=document.getElementsByTagName(\'script\')[0];s.parentNode.insertBefore(dc,s)})();\n          </script><!-- end Drip -->\n      '
      }
    })]);
  }
};