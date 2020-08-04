import { useState } from 'react';

// hook criado para gerenciar formulários
export default function useForm(initialValues) {
  const [formValue, setFormValue] = useState(initialValues);

  function handleChange({ target }) {
    function setValue(key, newValue) {
      setFormValue({ ...formValue, [key]: newValue });
    }
    const { value } = target;
    setValue(target.getAttribute('name'), value);
  }

  function clearForm() {
    setFormValue(initialValues);
  }
  return { formValue, handleChange, clearForm };
}
