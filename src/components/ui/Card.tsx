import Image from "next/image"
import { FC } from "react"
import List from "./List"
import { Code, History } from "lucide-react"
import Link from "next/link"

interface CardProps {
  title: string
  snippetCount: number
  exp: string
  src: string
  progress: number
  href?: string
  // Add width and height properties if they are dynamic
  width?: number
  height?: number
}

const defaultWidth = 500
const defaultHeight = 300

const Card: FC<CardProps> = ({
  title,
  snippetCount,
  exp,
  src,
  href,
  progress,
  width = defaultWidth,
  height = defaultHeight,
}) => {
  return (
    <div className="flex flex-col gap-3">
      <Link target="_blank" href={href || "/"}>
        <div className="relative aspect-video rounded-lg overflow-hidden">
          <Image
            src={src}
            alt={title}
            className="object-cover"
            width={width}
            height={height}
          />
          <div className="progress-bar">
            <div
              className="h-full bg-btnHighlight"
              style={{
                width: `${progress || 90}%`,
              }}
            />
          </div>
        </div>
      </Link>
      <div className="grid gap-2 px-2">
        <div className="text-highlight font-bold">{title}</div>
        <div className="flex gap-2 md:gap-10">
          <List variant="info" target="_blank" link={href || "/"} sizes="xs">
            <Code size={16} />
            {snippetCount.toLocaleString()}
          </List>
          <List variant="info" target="_blank" link={href || "/"} sizes="xs">
            <History size={16} />
            {exp}
          </List>
        </div>
      </div>
    </div>
  )
}

export default Card
