import type { ReactNode } from 'react'

type TabButtonProps = {
  children: ReactNode
  onClick?: () => void
}

export function TabButton({ children, onClick }: TabButtonProps) {
  return <button className="tab-button" onClick={onClick}>{children}</button>
}