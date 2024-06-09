import Bottom from "./customComponents/Bottom"
import Header from "./customComponents/Header"
import Stuff from "./customComponents/Stuff"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"


const App = () => {
  return (
    <div className="bg-black h-screen text-white">
       <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Alert</AlertTitle>
          <AlertDescription>
            Our team was only able to afford the free tier of openai api, so it will have rate limits. if that happens, please contact to 7569004375 for new api key.
          </AlertDescription>
              </Alert>
      <Sheet>
        <Header />

        <div className="text-center">

        <SheetTrigger className="font-mono text-xs">First Time in Hackathon?😊</SheetTrigger>
        </div>

        <SheetContent className="bg-black text-slate-300">
          <SheetHeader>
            <SheetTitle className="text-lime-300 font-mono">Dev Guides 101</SheetTitle>
            <SheetDescription className="text-slate-300 font-mono py-5">
              An Attempt to ease your hackathon journey.
            </SheetDescription>
          </SheetHeader>
          <iframe width="100%" height="200" src="https://www.youtube.com/embed/vnmZAfIMNhA?si=_EnxkG3JvFxBVG2m" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <iframe width="100%" height="200" src="https://www.youtube.com/embed/60798vx7QU0?si=4sdK8VUTFCSpmsal" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <iframe width="100%" height="200" src="https://www.youtube.com/embed/zut46AB8DHQ?si=cJ7OdEEb27fb3avS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <iframe width="100%" height="200" src="https://www.youtube.com/embed/Y0QBmXEylP8?si=gbZEvYW4qVfhzWAy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </SheetContent>

         
        <Stuff/>
        <Bottom/>


      </Sheet>
    </div>
  )
}

export default App