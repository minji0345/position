import React, { useState, useEffect } from 'react'

function useForm({ initValue, onSubmit, validate }) {
  const [values, setValues] = useState(initValue)
  // const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)



  const handleChange = (e) => {
    const { name, value } = e.target
    // e.target  즉, 선택된 input란의 name과 value를 받아온다는 이야기?
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = async (e) => {
    setSubmitting(true)
    e.preventDefault()
    await new Promise((r) => setTimeout(r, 1000))
    // setErrors(validate(values))
  }

  //validate 함수 사용법 async await 정확히 알기

  useEffect(() => {
    if (submitting) {
      if (Object.keys(errors).length === 0) {
        onSubmit(values)
      }
      setSubmitting(false)
    }
  }, [errors])

  return {
    values,
    errors,
    submitting,
    handleChange,
    handleSubmit
  }
}

export default useForm