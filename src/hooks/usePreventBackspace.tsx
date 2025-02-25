import { useEffect } from 'react'

const usePreventBackspace = () => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Backspace') {
        if (document.activeElement !== null &&
          !(document.activeElement.tagName === 'INPUT' ||
            document.activeElement.tagName === 'TEXTAREA' ||
            document.activeElement.textContent)) {
          e.preventDefault();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    };
  }, []);
}

export default usePreventBackspace
