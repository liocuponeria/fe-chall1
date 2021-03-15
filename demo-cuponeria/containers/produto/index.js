import React from 'react';
import Link from 'next/link';

export default function ProductPage() {
  return (
    <div>
      <h1>Página do produto</h1>
      <Link href="/">
        Back to home
      </Link>
    </div>
  );
}
