import Link from "next/link"
import { FC } from "react"
import Button from "../ui/Button"
import { Github } from "lucide-react"

interface ProfileNameProps {}

const ProfileName: FC<ProfileNameProps> = ({}) => {
  return (
    <div className="text-3xl flex flex-col font-bold text-highlight">
      Karan CS
      <div className="text-sm font-thin flex justify-between items-center">
        @karan1110
        <Link
          className="block md:hidden"
          href="https://github.com/karan1110"
          target="_blank"
        >
          <Button variant="primary" sizes={"iconOnly"}>
            <Github />
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default ProfileName
