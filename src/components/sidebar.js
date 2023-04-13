
import Button from '@pluralsight/ps-design-system-button'
import Link from '@pluralsight/ps-design-system-link'


export default function Sidebar() {
  return (
    <div className="sidebar flex flex-col justify-end">
      <nav>
        <Link>
          <a href="https://duckduckgo.com">Dashboard</a>
        </Link>
        <Link>
          <a href="https://duckduckgo.com">History</a>
        </Link>
        <Link>
          <a href="https://duckduckgo.com">Docs & Flags</a>
        </Link>
      </nav>
      <Button appearance={Button.appearances.primary}>New Conversation</Button>
    </div>
  )
}