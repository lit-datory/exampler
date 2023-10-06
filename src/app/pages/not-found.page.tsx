import HTML from "../html"
import Button from "./_components/button"

export default function NotFoundPage() {
  return (
    <HTML title="404 - Page not found">
      <main class="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div class="text-center">
          <p class="text-base font-semibold text-primary">404</p>
          <h1 class="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Page not found
          </h1>
          <p class="mt-6 text-base leading-7">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <Button href="/" variant="primary">
              Go back home
            </Button>
          </div>
        </div>
      </main>
    </HTML>
  )
}
