import { TextField } from '@radix-ui/themes'
import { Search } from 'lucide-react'

interface SearchBarProps {
  isLoggedIn: boolean
}

export default function SearchBar({ isLoggedIn }: SearchBarProps) {
  return (
    <TextField.Root
      variant='surface'
      size={'3'}
      style={{ display: isLoggedIn ? 'flex' : 'none', background: 'var(--slate-1)', width: 400 }}
      placeholder="Paieška...">
      <TextField.Slot>
        <Search height="16" width="16" />
      </TextField.Slot>
    </TextField.Root>
  )
}
