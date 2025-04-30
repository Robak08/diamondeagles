import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { cn } from "@/lib/utils"
import { Check, ChevronsUpDown } from "lucide-react"


import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
//   FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
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
 
const formSchema = z.object({
  firstname: z.string().min(3, {
    message: "First name must be at least 3 characters.",
  }),
  lastname: z.string().min(3, {
    message: "Last name must be at least 3 characters.",
  }),
  company: z.string().min(2, {
    message: "Company must be at least 2 characters.",
  }),
  city: z.string().min(3, {
    message: "City must be at least 2 characters.",
  }),
  state: z.string({
    required_error: "Please select a state.",
  }),
  message: z.string().min(3, {
    message: "Message must be at least 3 characters.",
  }),
})

type State = {
    label: string
    value: string
  }

export const states: State[] = [
    { label: "Alaska", value: "Alaska" },
    { label: "Alabama", value: "Alabama" },
    { label: "Arkansas", value: "Arkansas" },
    { label: "Arizona", value: "Arizona" },
    { label: "California", value: "California" },
    { label: "Colorado", value: "Colorado" },
    { label: "Connecticut", value: "Connecticut" },
    { label: "District of Columbia", value: "District of Columbia" },
    { label: "Delaware", value: "Delaware" },
    { label: "Florida", value: "Florida" },
    { label: "Georgia", value: "Georgia" },
    { label: "Hawaii", value: "Hawaii" },
    { label: "Iowa", value: "Iowa" },
    { label: "Idaho", value: "Idaho" },
    { label: "IL", value: "Illinois" },
    { label: "Illinois", value: "Indiana" },
    { label: "Kansas", value: "Kansas" },
    { label: "Kentucky", value: "Kentucky" },
    { label: "Louisiana", value: "Louisiana" },
    { label: "Massachusetts", value: "Massachusetts" },
    { label: "Maryland", value: "Maryland" },
    { label: "Maine", value: "Maine" },
    { label: "Michigan", value: "Michigan" },
    { label: "Minnesota", value: "Minnesota" },
    { label: "Missouri", value: "Missouri" },
    { label: "Mississippi", value: "Mississippi" },
    { label: "Montana", value: "Montana" },
    { label: "North Carolina", value: "North Carolina" },
    { label: "North Dakota", value: "North Dakota" },
    { label: "Nebraska", value: "Nebraska" },
    { label: "New Hampshire", value: "New Hampshire" },
    { label: "New Jersey", value: "New Jersey" },
    { label: "New Mexico", value: "New Mexico" },
    { label: "Nevada", value: "Nevada" },
    { label: "New York", value: "NewYork" },
    { label: "Ohio", value: "Ohio" },
    { label: "Oklahoma", value: "Oklahoma" },
    { label: "Oregon", value: "Oregon" },
    { label: "Pennsylvania", value: "Pennsylvania" },
    { label: "Rhode Island", value: "Rhode Island" },
    { label: "South Carolina", value: "South Carolina" },
    { label: "South Dakota", value: "South Dakota" },
    { label: "Tennessee", value: "Tennessee" },
    { label: "Texas", value: "Texas" },
    { label: "Utah", value: "Utah" },
    { label: "Virginia", value: "Virginia" },
    { label: "Vermont", value: "Vermont" },
    { label: "Washington", value: "Washington" },
    { label: "Wisconsin", value: "Wisconsin" },
    { label: "West Virginia", value: "West Virginia" },
    { label: "Wyoming", value: "Wyoming" },
  ];
// TODO city/state search ?
 
export function ContactForm() {
    const [open, setOpen] = React.useState(false)
    const [selectedState, setSelectedState] = React.useState<State | null>(
      null
    )


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      company: "",
      city: "",
      state: "",
      message: ""
    },
  })
 
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 gap-x-6 gap-y-9 lg:gap-y-11">
        <FormField
          control={form.control}
          name="firstname"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel className="text-sm sm:text-base">First name</FormLabel>
              <FormControl>
                <Input placeholder="Your first name" {...field} />
              </FormControl>
              <FormMessage className="absolute top-13 sm:top-14 text-xs sm:text-sm"/>
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="lastname"
          render={({ field }) => (
            <FormItem className="relative">
                <FormLabel className="text-sm sm:text-base">Last name</FormLabel>
              <FormControl>
                <Input placeholder="Your last name" {...field} />
              </FormControl>
              <FormMessage className="absolute top-13 sm:top-14 text-xs sm:text-sm"/>
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
                <FormMessage className="absolute top-13 sm:top-14 text-xs sm:text-sm"/>
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
                <FormMessage className="absolute top-13 sm:top-14 text-xs sm:text-sm"/>
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
                        ? states.find(
                            (language) => language.value === field.value
                          )?.label
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
                      <CommandEmpty>No framework found.</CommandEmpty>
                      <CommandGroup>
                        {states.map((state) => (
                          <CommandItem
                            value={state.label}
                            key={state.value}
                            onSelect={() => {
                              form.setValue("state", state.value)
                            }}
                          >
                            {state.label}
                            <Check
                              className={cn(
                                "ml-auto",
                                state.value === field.value
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
                <FormMessage className="absolute top-13 sm:top-14 text-xs sm:text-sm"/>
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
                <FormMessage className="absolute top-19 sm:top-20 text-xs sm:text-sm"/>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}