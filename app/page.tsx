'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [csrTime, setCsrTime] = useState('');
  const [ssrTime, setSsrTime] = useState('');
  const [ssgTime] = useState('2025/05/16 00:00:00');

  const [renderedTime, setRenderedTime] = useState('');
  useEffect(() => {
    setRenderedTime(new Date().toLocaleString());
  }, []);

  useEffect(() => {
    const now = new Date().toLocaleString();
    setCsrTime(now);

    fetch('/api/time', { cache: 'no-store' })
      .then((res) => res.json())
      .then((data) => setSsrTime(data.time));
  }, []);

  return (
    <main className="p-4 space-y-6">
      <h1 className="text-xl font-bold">Next.js App Router：レンダリング比較デモ</h1>

      <div className="border p-4 rounded-xl shadow">
        <h2 className="font-semibold">1. SSG（Static Site Generation）</h2>
        <p>SSG:ビルド時に決めた固定時刻</p>
        <p className="text-blue-600 font-mono">{ssgTime}</p>
      </div>

      <div className="border p-4 rounded-xl shadow">
        <h2 className="font-semibold">2. SSR（Server Side Rendering）</h2>
        <p>SSR：サーバーから現在時刻を取得（毎回変わる）</p>
        <p className="text-green-600 font-mono">{ssrTime}</p>
      </div>

      <div className="border p-4 rounded-xl shadow">
        <h2 className="font-semibold">3. CSR（Client Side Rendering）</h2>
        <p>CSR：クライアントが表示時に時刻を取得</p>
        <p className="text-red-600 font-mono">{csrTime}</p>
        <p className="text-xs text-gray-500 mt-1">※描画完了: {renderedTime}</p>
      </div>
    </main>
  );
}
