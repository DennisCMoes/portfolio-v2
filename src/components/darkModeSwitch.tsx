'use client'

import * as React from 'react'
import * as SwitchPrimitives from '@radix-ui/react-switch'
import { HTMLMotionProps, motion } from 'framer-motion'
import { useState } from 'react'

const MotionSwitch = motion(SwitchPrimitives.Root)
const MotionThumb = motion(SwitchPrimitives.Thumb)

const DarkModeSwitch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> &
    HTMLMotionProps<'button'>
>(({ className, checked, ...props }, ref) => {
  const [internalChecked, setInternalChecked] = useState(false)

  const handleCheckedChange = (newChecked: boolean) => {
    setInternalChecked(newChecked)
    document.querySelector('html')?.classList.toggle('dark')
  }

  const thumbVariants = {
    tap: {
      width: '24px',
      translateX: internalChecked ? '24px' : '2px',
      transition: {
        duration: 0.15,
      },
    },
    checked: {
      translateX: '28px',
      transition: { ease: 'circInOut' },
    },
    unchecked: {
      translateX: '4px',
      transition: { ease: 'circInOut' },
    },
  }

  return (
    <MotionSwitch
      checked={internalChecked}
      onCheckedChange={handleCheckedChange}
      className="focus-visible:ring-ring relative inline-flex h-10 w-16 shrink-0 cursor-pointer items-center rounded-full bg-gray-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-link"
      whileTap="tap"
      animate={internalChecked ? 'checked' : 'unchecked'}
      {...props}
      ref={ref}
    >
      <MotionThumb
        initial={{ translateX: '4px' }}
        className="block h-8 w-8 rounded-full bg-white shadow-sm"
        variants={thumbVariants}
      />
    </MotionSwitch>
  )
})

DarkModeSwitch.displayName = SwitchPrimitives.Root.displayName

export default DarkModeSwitch
