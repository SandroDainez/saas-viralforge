'use client'

import { useState } from 'react'

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8 p-8 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Lasy AI
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300">
          Seu projeto Next.js está funcionando perfeitamente! 🚀
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 space-y-6 min-w-[300px]">
        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Contador de teste</p>
          <p className="text-5xl font-bold text-indigo-600 dark:text-indigo-400">{count}</p>
        </div>
        
        <div className="flex gap-4">
          <button
            onClick={() => setCount(count - 1)}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Diminuir
          </button>
          <button
            onClick={() => setCount(count + 1)}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Aumentar
          </button>
        </div>
        
        <button
          onClick={() => setCount(0)}
          className="w-full bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300"
        >
          Resetar
        </button>
      </div>

      <div className="text-center text-sm text-gray-600 dark:text-gray-400">
        <p>✅ Next.js 15.4.6</p>
        <p>✅ React 19</p>
        <p>✅ TypeScript</p>
        <p>✅ Tailwind CSS v4</p>
      </div>
    </div>
  )
}
