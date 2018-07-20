import React from 'react';

exports.onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  if (process.env.NODE_ENV === `production`) {
    return setPostBodyComponents([
      <script
        key={`gatsby-plugin-drip`}
        dangerouslySetInnerHTML={{
          __html: `
          <!-- Drip --><script type="text/javascript">var _dcq=_dcq||[];var _dcs=_dcs||{};
          _dcs.account='${ pluginOptions.accountId }';(function(){var dc=document.createElement('script');
          dc.type='text/javascript';dc.async=!0;dc.src='//tag.getdrip.com/${ pluginOptions.accountId }.js';
          var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(dc,s)})();
          </script><!-- end Drip -->
      `,
        }}
      />,
    ]);
  }
}