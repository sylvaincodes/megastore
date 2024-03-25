import React, { Fragment, useState } from 'react'
import { Loader } from 'lucide-react'
import { Button } from "@/components/ui/button"


export const LoadMore = () => {

    const [loader,setLoader] = useState<boolean>(false);
    const handleclick = () => {
          setLoader(!loader)
    }

   return (
    <Fragment>
             <Button className="flex gap-x-6"  onClick={ handleclick }>
                            <Loader className={` ${loader ? 'flex': 'hidden'} animate-spin`}/>
                            <span className={` ${loader ? 'hidden ': 'flex'} `} >Load more </span>
                        </Button>
    </Fragment>
  )
}
