import React from 'react'
import toast from 'react-hot-toast'

export const Alert = ({message}: {message?: string}) => {
  return (
    toast.success(message ? message : "default message", {
        duration: 2000,
        position: 'top-center',
      
        // Styling
        style: {},
        className: 'bg-primary-800 text-white',
      
        // Custom Icon
        icon: '👏',
      
        // Change colors of success/error/loading icon
        iconTheme: {
          primary: '#000',
          secondary: '#fff',
        },
      
        // Aria
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      })
  )
}
