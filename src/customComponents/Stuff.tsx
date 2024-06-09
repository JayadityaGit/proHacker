import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"



import { callAi } from "@/api/AiCaller"
import { useState } from "react"

import loadingGif from "../assets/ai.gif"


const Stuff = () => {

  const [aiResponse, setAiResponse] = useState("")

  const [isLoading, setIsLoading] = useState(false)

    const formSchema = z.object({
        domain: z.string().min(2,{
            message: "Domain is required"
        }).max(50),
        level: z.string().min(2,{
          message: "level is required"
      }).max(50),
        time: z.string().min(2,{
          message: "duration required"
      }).max(50),
        techStack: z.string().min(2,{
          message: ""
      }).max(50),


      })

      const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          domain: "",
          level: "",
          time: "",
          techStack: "",
        },
      })
     
      // 2. Define a submit handler.
     async function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        

        setAiResponse("")
        console.log(values)

       const response = await callAi(values.domain, values.level, values.time, values.techStack);

       setAiResponse(response);

      }

  return (
    <div> 
    
    <Form  {...form}>
      <form className="space-y-8 px-10 my-10 text-center flex flex-col xl:px-80" onSubmit={form.handleSubmit(onSubmit)} >
        <FormField
          control={form.control}
          name="domain"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input className="bg-transparent  border-lime-300 border-b-1 border-t-0 border-l-0 border-r-0 font-mono" placeholder="enter domain of interest" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="level"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input className="bg-transparent border-lime-300 border-b-1 border-t-0 border-l-0 border-r-0 font-mono" placeholder="enter level of expertise" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

       <FormField
          control={form.control}
          name="time"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input className="bg-transparent border-lime-300 border-b-1 border-t-0 border-l-0 border-r-0 font-mono" placeholder="enter time allocated for hackathon in hrs" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="techStack"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input className="bg-transparent border-lime-300 border-b-1 border-t-0 border-l-0 border-r-0 font-mono" placeholder="enter tech stack" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
       
       <Dialog >
        <DialogTrigger asChild><Button type="submit" className="bg-lime-400 text-black font-mono font-bold w-40 self-center">Submit</Button></DialogTrigger>
        <DialogContent className="bg-black text-lime-400">
          <DialogHeader>
            <DialogDescription className="text-lime-400">
              {aiResponse ? aiResponse : <img src={loadingGif} alt="" className="w-full"/>}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      </form>

    </Form>

 


    </div>
  )
}


export default Stuff;