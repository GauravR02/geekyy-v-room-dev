import React from 'react'
import CallList from '@/components/CallList'
import { type ClassValue } from 'clsx';

const Upcoming = () => {
  return (
    <section className='flex size-full flex-col gap-10 text-white'>
        <CallList type="upcoming"/>
      </section>
  )
}

export default Upcoming
