import { useId } from 'react'
import type { InputHTMLAttributes } from 'react'

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  error?: string
}

export function TextField({ label, error, ...rest }: TextFieldProps) {
  const id = useId()
  const errorId = `${id}-error`
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        {...rest}
      />
      {error && (
        <p id={errorId} role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
