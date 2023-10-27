/* eslint-disable react/jsx-props-no-spreading */

import 'jquery/dist/jquery.slim';
import 'bootstrap/dist/css/bootstrap.min.css';

import { NextComponentType } from 'next';

export default function YosumeApp({
  Component,
  pageProps,
}: {
  Component: NextComponentType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pageProps: any;
}) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{`
        .badge-primary,
        .btn-primary,
        .bg-primary {
          background-color: #800a0a !important;
          border-color: #800a0a !important;
        }
      `}</style>
      <style jsx global>{`
        .badge-secondary,
        .btn-secondary,
        .bg-secondary {
          background-color: #c04545 !important;
          border-color: #c04545 !important;
        }
      `}</style>
      <style jsx global>{`
        .badge-light,
        .btn-light,
        .bg-light {
          background-color: #ff8080 !important;
          border-color: #ff8080 !important;
          color: #ffffff !important;
        }
      `}</style>
      <style jsx global>{`
        .badge-info,
        .btn-info,
        .bg-info {
          background-color: #0a0a80 !important;
          border-color: #0a0a80 !important;
        }
      `}</style>
    </>
  );
}
