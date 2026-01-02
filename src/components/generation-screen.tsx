'use client'

import { useState } from 'react'
import { useTranslation } from '@/hooks/useTranslation'

export default function GenerationScreen() {
  const [generating, setGenerating] = useState(false)
  const [result, setResult] = useState('')
  const { t } = useTranslation()

  const handleGenerate = async () => {
    setGenerating(true)
    // Simulate generation
    setTimeout(() => {
      setResult('Conteúdo gerado com sucesso!')
      setGenerating(false)
    }, 2000)
  }

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">{t('generate')}</h2>

      <button
        onClick={handleGenerate}
        disabled={generating}
        className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50"
      >
        {generating ? t('loading') : t('generate')}
      </button>

      {result && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md">
          <p>{result}</p>
        </div>
      )}
    </div>
  )
}