import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChatBox } from "@/components/chat-box"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Beautifully designed components <br className="hidden sm:inline" />
          built with Radix UI and Tailwind CSS.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Accessible and customizable components that you can copy and paste
          into your apps. Free. Open Source. And Next.js 13 Ready.
        </p>
      </div>
      <div>
        {" "}
        <h2>
          Your username is <strong>Johnatas</strong>
        </h2>{" "}
      </div>
      <div className="flex gap-4">
        <Input type="username" placeholder="Set your username" />
        <Button type="submit">Save</Button>
        <div></div>
      </div>
      <div className="grid w-full gap-2">
		<ChatBox></ChatBox>
      </div>
    </section>
  )
}
