
interface TimestampItemProps {
  timestamp: string
}

export function TimestampItem({ timestamp }: TimestampItemProps) {
  const date = new Date(Date.parse(timestamp))
  return (
    <li className="timestamp-item">
      {`Hoje - ${date.toLocaleTimeString('pt-br', { hour: "numeric", minute: "2-digit" })}`}
    </li>
  )
}