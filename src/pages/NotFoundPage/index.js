import React from 'react';
import PageDefault from '../components/PageDefault';

export default function NotFoundPage() {
  return (
    <PageDefault>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        404: Sorry. Page not Found
      </div>
    </PageDefault>
  );
}
