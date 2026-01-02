'use client'

import { useState } from 'react'
import { useTranslation } from '@/hooks/useTranslation'

interface OnboardingFormProps {
  onComplete: (data: any) => void
}

export default function OnboardingForm({ onComplete }: OnboardingFormProps) {
  const [step, setStep] = useState(1)
  const [data, setData] = useState({
    name: '',
    email: '',
    preferences: []
  })
  const { t } = useTranslation()

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1)
    } else {
      onComplete(data)
    }
  }

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const updateData = (field: string, value: any) => {
    setData({ ...data, [field]: value })
  }

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">{t('onboarding')}</h2>

      {step === 1 && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('email')}
          </label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => updateData('email', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
      )}

      {step === 2 && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nome
          </label>
          <input
            type="text"
            value={data.name}
            onChange={(e) => updateData('name', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
      )}

      {step === 3 && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Preferências
          </label>
          <textarea
            value={data.preferences.join(', ')}
            onChange={(e) => updateData('preferences', e.target.value.split(', '))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Separe por vírgula"
          />
        </div>
      )}

      <div className="flex justify-between mt-6">
        <button
          onClick={handlePrevious}
          disabled={step === 1}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md disabled:opacity-50"
        >
          {t('previous')}
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          {step === 3 ? t('finish') : t('next')}
        </button>
      </div>
    </div>
  )
}