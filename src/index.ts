interface minitocProps {
  tocSelector?: string
  containerSelector?: string
  headingSelector?: string
}

const minitoc = (() => {
  class Toc {
    tocSelector: string = "[data-toc]"
    containerSelector: string = "[data-toc-container]"
    headingSelector: string = "h1, h2, h3"
    targetToc: HTMLElement | null = null
    targetContainer: HTMLElement | null = null
    targetHeadings?: NodeListOf<
      HTMLElementTagNameMap[keyof HTMLElementTagNameMap]
    >

    constructor(options: minitocProps = {}) {
      Object.assign(this, options)
      this.targetToc = document.querySelector(this.tocSelector)
      this.targetContainer = document.querySelector(this.containerSelector)
      this.targetHeadings = this.targetContainer?.querySelectorAll(
        this.headingSelector
      )
      this.initToc()
    }

    initToc() {
      if (
        this.targetToc &&
        this.targetHeadings &&
        this.targetHeadings?.length > 0
      ) {
        this.createToc()
      }
    }

    createToc() {
      let i: number = 1
      let str: string = ""

      str += `<ul>`

      this.targetHeadings?.forEach((item) => {
        const level = Number(item.nodeName.replace("H", ""))

        str += `<li class="level-${level}">`
        const id = item.id ? item.id : `chapter-${i++}`
        const text = item.textContent?.trim()
        str += `<a href="#${id}">${text}</a>`
        str += "</li>"

        if (item.id !== id) {
          item.id = id
        }
      })

      str += "</ul>"

      const parser = new DOMParser()
      const html = parser.parseFromString(str, "text/html")
      const body = html.body
      const list = <Node>body.querySelector("ul")

      this.targetToc?.appendChild(list)
    }
  }

  let activeToc = null

  const init = (options: minitocProps) => {
    activeToc = new Toc(options)
  }

  return { init }
})()

export default minitoc
