import React from 'react'

const Meeting = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      Metting Room: #{params.id}
    </div>
  )
}

export default Meeting
