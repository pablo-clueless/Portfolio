import { Link } from '@phosphor-icons/react'
import React from 'react'

interface Props {
  description: string
  image: string
  name: string
  url: string
}

const Card = (props: Props) => {
  const { description, image, name, url } = props

  return (
    <div className="w-full flex flex-col gap-4 rounded relative select-none">
      <img src={image} alt={name} className="w-full h-full object-cover rounded" />
      <div className="w-full h-full flex flex-col justify-end bg-black/80 absolute left-0 top-0 rounded p-1">
        <div className="text-white">
          <a href={url} target="_blank" className="text-xs nav_link">{url}</a>
          <p className="text-lg font-extrabold">{name}</p>
          <p className="text-sm font-semibold">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
