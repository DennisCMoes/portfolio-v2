'use client'

import * as React from 'react'
import * as SwitchPrimitives from '@radix-ui/react-switch'
import { motion, HTMLMotionProps } from 'framer-motion'
import { useState } from 'react'

const MotionSwitch = motion(SwitchPrimitives.Root)
const MotionThumb = motion(SwitchPrimitives.Thumb)

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> &
    HTMLMotionProps<'button'> & {
      checked?: boolean
      onCheckedChange?: (checked: boolean) => void
    }
>(
  (
    { className, checked: controlledChecked, onCheckedChange, ...props },
    ref
  ) => {
    const [internalChecked, setInternalChecked] = useState(
      props.defaultChecked || false
    )

    const isControlled = controlledChecked !== undefined
    const checkedState = isControlled ? controlledChecked : internalChecked

    const handleCheckedChange = (newChecked: boolean) => {
      if (!isControlled) {
        setInternalChecked(newChecked)
      }
      onCheckedChange?.(newChecked)
    }

    const thumbVariants = {
      tap: {
        width: '24px',
        translateX: checkedState ? '24px' : '2px',
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
        checked={checkedState}
        onCheckedChange={handleCheckedChange}
        className="inline-flex items-center w-16 h-10 shrink-0 cursor-pointer bg-gray-300 rounded-full relative data-[state=checked]:bg-link transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50"
        whileTap="tap"
        animate={checkedState ? 'checked' : 'unchecked'}
        {...props}
        ref={ref}
      >
        <MotionThumb
          initial={{ translateX: '4px' }}
          className="block w-8 h-8 bg-white rounded-full shadow-sm"
          variants={thumbVariants}
        />
      </MotionSwitch>
    )
  }
)
Switch.displayName = SwitchPrimitives.Root.displayName

export default Switch