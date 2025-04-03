import * as React from "react"

import { cn } from "src/lib/utils"

type Props = React.HTMLAttributes<HTMLDivElement>;

const Divider: React.FC<Props> = ({ className, ...props }) => {
  return (
    <div className={cn('h-[0.5px] bg-[#f3f5f726] w-full', className)} {...props} />
  )
}

export { Divider }
