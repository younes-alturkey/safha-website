import { useState } from "react"

export default function MadeBySafha() {
  const [hidden, setHiden] = useState(false)

  const hide = () => setHiden(true)

  return (
    <a
      className={hidden ? "hidden" : null}
      href="https://github.com/younes-alturkey"
      target="_blank"
    >
      <div onClick={hide} className="fixed bottom-4 right-4">
        <div className="relative overflow-hidden bg-black text-safha border border-safha py-1 px-2 shadow-md rounded-md hover:opacity-90 flex justify-center items-center gap-2">
          <p className="text-xs">Made by Safha</p>
        </div>
      </div>
    </a>
  )
}
