import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container relative mx-auto flex h-24 items-center px-4">
        <div className="absolute left-4">
          <p className="text-sm leading-loose text-muted-foreground">
            Built by{" "}
            <a
              href="https://codai.co.kr"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              CODAI
            </a>
            . The source code is available on{" "}
            <a
              href="https://github.com/codai"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </div>
        <div className="absolute right-4 flex items-center space-x-4">
          <Link
            href="/privacy"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            개인정보처리방침
          </Link>
          <Link
            href="/terms"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            이용약관
          </Link>
        </div>
      </div>
    </footer>
  )
}
