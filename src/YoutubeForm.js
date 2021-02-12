import { useFormik } from 'formik'
import React from 'react'
const YoutubeForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      channel: ''
    }
  })

  console.log('form values: ', formik.values)
  return (
    <form>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <label htmlFor="email">E-mail</label>
      <input
        type="text"
        id="email"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <label htmlFor="channel">Channel</label>
      <input
        type="text"
        id="channel"
        name="channel"
        onChange={formik.handleChange}
        value={formik.values.channel}
      />
      <button type="button">Submit</button>
    </form>
  )
}

export default YoutubeForm
