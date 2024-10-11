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
        className="focus-visible:ring-ring relative inline-flex h-10 w-16 shrink-0 cursor-pointer items-center rounded-full bg-gray-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-link"
        whileTap="tap"
        animate={checkedState ? 'checked' : 'unchecked'}
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
  }
)
Switch.displayName = SwitchPrimitives.Root.displayName

export default Switch
