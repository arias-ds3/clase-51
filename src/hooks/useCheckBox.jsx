import { useState } from "react"
function useCheckBox(initialValue = false) {
  const [isChecked, setIsChecked] = useState(initialValue)
 
  const customCheckbox = ( 
    props
  ) => (
    <input
      type="checkbox"
      checked={isChecked}
      onChange={e => setIsChecked(e.target.checked)}
    />
  )
  
  return [isChecked, customCheckbox]
} 
export default useCheckBox