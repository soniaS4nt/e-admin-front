import { useCallback, useState } from 'react'
import { UseBooleanReturnType } from './interface'

const useBoolean = (defaultValue?: boolean): UseBooleanReturnType => {
  const [value, setValue] = useState(defaultValue ?? false)

  const setTrue = useCallback(() => setValue(true), [])
  const setFalse = useCallback(() => setValue(false), [])
  const toggle = useCallback(() => setValue(x => !x), [])

  return { value, setTrue, setFalse, toggle }
}

export default useBoolean
