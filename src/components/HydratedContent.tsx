'use client';

import { useEffect, useState } from 'react';

export default function HydratedContent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return <div>{mounted ? 'Client' : 'Server'}</div>;
}