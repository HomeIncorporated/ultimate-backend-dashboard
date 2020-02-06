// @flow
import * as React from 'react';
import {useTranslations} from 'fusion-plugin-i18n-react';
import {Helmet} from 'fusion-plugin-react-helmet-async';
import {assetUrl} from 'fusion-core';

type SeoUtilsProps = {
  title?: string,
};

type SchemaOrgUtilsProps = {
  title?: string,
};

export const SeoUtils = ({title}: SeoUtilsProps) => {
  const translate = useTranslations();

  return (
    <Helmet>
      <title>Dimension Four - IoT as a service</title>
      <meta
        name="title"
        content={`${translate('App.Title')} - ${title ||
          translate('App.OneLiner')}`}
      />
      <meta name="description" content={translate('App.Description')} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://dimensionfour.io/" />
      <meta
        property="og:title"
        content={`${translate('App.Title')} - ${translate('App.OneLiner')}`}
      />
      <meta property="og:description" content={translate('App.Description')} />
      <meta
        property="og:image"
        content={assetUrl('../static/images/logo.png')}
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://dimensionfour.io/" />
      <meta
        property="twitter:title"
        content="Dimension Four - IoT as a service"
      />
      <meta
        property="twitter:description"
        content={translate('App.Description')}
      />
      <meta
        property="twitter:image"
        content={assetUrl('../static/images/logo.png')}
      />

      <meta name="identifier-url" content="//dimensionfour.io" />
      <meta name="abstract" content="Events as a service" />
      <meta
        name="keywords"
        content="events, event, ticket, event ticketing, software as a service, SaaS"
      />
      <meta name="author" content="Rex Isaac Raphael" />
      <meta name="revisit-after" content="15" />
      <meta name="language" content="EN" />
      <meta name="copyright" content="© 2020 DimensionFour" />
      <meta name="robots" content="All" />
    </Helmet>
  );
};

export const SchemaOrgUtils = ({title}: SchemaOrgUtilsProps) => {
  return (
    <>
      <title>Dimension Four</title>

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://dimensionfour.io/" />
      <meta
        property="twitter:title"
        content="Dimension Four - IoT as a service"
      />
    </>
  );
};
