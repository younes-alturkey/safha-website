import MadeBySafha from "@/components/MadeBySafha"
import Progress from "@/components/Progress"
import ScrollToTopButton from "@/components/ScrollToTopButton"
import React, { useState } from "react"
import ScrollBar from "react-perfect-scrollbar"
import "react-perfect-scrollbar/dist/css/styles.css"

interface Props {
  children: React.ReactNode
}

export default function Container(props: Props) {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isEndOfPage, setIsEndOfPage] = useState(false)

  const handleScroll = (scrollBarContainer: any) => {
    const { scrollTop, scrollHeight, clientHeight } = scrollBarContainer
    const scrolled = scrollTop / (scrollHeight - clientHeight)
    setScrollProgress(scrolled)
    setIsEndOfPage(scrolled === 1)
  }

  return (
    <ScrollBar
      id="scrollbar"
      style={{ height: "100vh" }}
      onScrollY={(container) => handleScroll(container)}
    >
      <Progress scaleX={scrollProgress} />
      {props.children}
      <MadeBySafha />
      <ScrollToTopButton show={isEndOfPage} />
    </ScrollBar>
  )
}
