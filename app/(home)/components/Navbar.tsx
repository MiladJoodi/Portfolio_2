
import Link from "next/link";
import {SiGithub, SiLinkedin, SiX} from "react-icons/si"

export default function Navbar() {

  const socials = [
    {
      link: "https://github.com/miladjoodi",
      lable: "Linkedin",
      Icon: SiGithub
    },
    {
      link: "https://github.com/miladjoodi",
      lable: "Github",
      Icon: SiLinkedin
    },
    {
      link: "https://github.com/miladjoodi",
      lable: "Facebook",
      Icon: SiX
    },
  ]

    return (
      <nav className="py-10 flex justify-between items-center">
        <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">MiladJoodi 👨🏻‍💻</h1>

        <div className="flex items-center gap-5">
          {socials.map((social, index)=>{
            const Icon = social.Icon
            return (
            <Link href={social.link} key={index}>
              <Icon className="w-5 h-5 hover:scale-125 transition-all" />
            </Link>
            )
          })}
        </div>

      </nav>
    );
  }
  