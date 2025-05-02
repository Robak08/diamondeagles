import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import validator from "validator";
import { cn } from "@/lib/utils"
import { Check, ChevronsUpDown } from "lucide-react"


import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
  } from "@/components/ui/command"
  import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"


  // CHECK PHONE VALIDATION 

/* TODO CHECKBOX
  I am a winner and I want to receive promotional materials
  I want to submit my company to the ranking
*/

const states = [
  "Alaska", 
  "Alabama", 
  "Arkansas", 
  "Arizona", 
  "California", 
  "Colorado", 
  "Connecticut", 
  "District of Columbia",
  "Delaware", 
  "Florida", 
  "Georgia", 
  "Hawaii", 
  "Iowa", 
  "Idaho", 
  "Illinois", 
  "Indiana", 
  "Kansas", 
  "Kentucky", 
  "Louisiana", 
  "Massachusetts", 
  "Maryland", 
  "Maine", 
  "Michigan", 
  "Minnesota", 
  "Missouri", 
  "Mississippi", 
  "Montana", 
  "North Carolina",
  "North Dakota",
  "Nebraska", 
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "Nevada", 
  "New York",
  "Ohio", 
  "Oklahoma", 
  "Oregon", 
  "Pennsylvania", 
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas", 
  "Utah", 
  "Virginia", 
  "Vermont", 
  "Washington", 
  "Wisconsin", 
  "West Virginia",
  "Wyoming"
] as string[];


const formSchema = z.object({
  firstname: z.string().min(3, {
    message: "First name must be at least 3 characters.",
  }),
  phone: z.string().refine(validator.isMobilePhone, {
    message: "Phone number is invalid",
  }),
  company: z.string().min(2, {
    message: "Company must be at least 2 characters.",
  }),
  city: z.string().min(3, {
    message: "City must be at least 2 characters.",
  }),
  state: z.enum(states as [string, ...string[]],{
    message: "Please select a state.",
  }),
  winner: z.boolean().optional(),
  submit: z.boolean().optional(),
  message: z.string().min(3, {
    message: "Message must be at least 3 characters.",
  }),
})

// TODO validation on city if checkboxes are checked -> otherwise optional
 
export function ContactForm() {
    const [open, setOpen] = React.useState(false)
    const [selectedState, setSelectedState] = React.useState<State | null>(
      null
    )


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      phone: "",
      company: "",
      city: "",
      state: "",
      winner: false,
      submit: false,
      message: ""
    },
  })
 
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 gap-x-6 gap-y-8">
        <FormField
          control={form.control}
          name="firstname"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel className="text-sm sm:text-base">First name</FormLabel>
              <FormControl>
                <Input placeholder="Your first name" {...field} />
              </FormControl>
              <FormMessage className="absolute top-13 sm:top-14 text-xs"/>
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="relative">
                <FormLabel className="text-sm sm:text-base">Phone</FormLabel>
              <FormControl>
                <Input placeholder="Enter Your phone" {...field} />
              </FormControl>
              <FormMessage className="absolute top-13 sm:top-14 text-xs"/>
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem className="relative col-span-2">
                 <FormLabel className="text-sm sm:text-base">Company</FormLabel>
              <FormControl>
                <Input placeholder="Your company" {...field} />
              </FormControl>
                <FormMessage className="absolute top-13 sm:top-14 text-xs"/>
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem className="relative">
                 <FormLabel className="text-sm sm:text-base">City</FormLabel>
              <FormControl>
                <Input placeholder="Enter your city" {...field} />
              </FormControl>
                <FormMessage className="absolute top-13 sm:top-14 text-xs"/>
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="state"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel className="text-sm sm:text-base">State</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[full] justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? states.find((st) => st === field.value)
                        : "Select state"}
                      <ChevronsUpDown className="opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput
                      placeholder="Search state"
                      className="h-9"
                    />
                    <CommandList>
                      <CommandEmpty>No state found.</CommandEmpty>
                      <CommandGroup>
                        {states.map((state) => (
                          <CommandItem
                            value={state}
                            key={state.replaceAll(' ','')}
                            onSelect={() => {
                              form.setValue("state", state)
                            }}
                          >
                            {state}
                            <Check
                              className={cn(
                                "ml-auto",
                                state === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
                <FormMessage className="absolute top-13 sm:top-14 text-xs"/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="winner"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 col-span-2 relative border rounded-md has-checked:bg-violet-50/50 dark:has-checked:bg-violet-950/30 has-checked:border-violet-200 dark:has-checked:border-violet-950/80">
              <FormLabel className="p-3">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    // TODO add here mutually exclusive check
                  />
                </FormControl>
               <div className="ml-2 space-y-1 leading-none">
                  I am a winner and I want to receive promotional materials
               </div>
              </FormLabel>
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="submit"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 col-span-2 relative border rounded-md has-checked:bg-violet-50/50 dark:has-checked:bg-violet-950/30 has-checked:border-violet-200 dark:has-checked:border-violet-950/80">
              <FormLabel className="p-3">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="ml-2 space-y-1 leading-none">
                  I want to submit my company to the ranking
                </div>
                </FormLabel>
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="relative col-span-2">
                 <FormLabel className="text-sm sm:text-base">Message</FormLabel>
              <FormControl>
              <Textarea
                  placeholder="Your message"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
                <FormMessage className="absolute top-20 text-xs"/>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}