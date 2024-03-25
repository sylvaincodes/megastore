import { ListPlus, Search } from 'lucide-react'
import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export const SearchInput = ({active}: {active: boolean}) => {
  return (
    <div className={`relative h-[48px] ${active ? "" : "hidden"}  md:flex w-[300px] lg:w-[350px] max-w-lg rounded-lg flex gap-x-32 items-center bg-bg_primary_light px-4`}>
        <div className="flex gap-x-4">
          <Search size={18} className="text-color_icon" />
          <input
            className="placeholder-shown:border-gray-500 focus:outline-none w-full bg-transparent focus:border-0 text-sm text-text_gray"
            type="text"
            name="search"
            id="search"
            placeholder="search essantials, groceries and more..."
          />
        </div>

      </div>
  )
}
