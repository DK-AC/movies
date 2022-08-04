import { FC } from 'react'

export const Preloader: FC = () => {
  return (
    <div className="progress">
      <div className="indeterminate" />
    </div>
  )
}
