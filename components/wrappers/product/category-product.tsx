import { Container } from "@/components/ui/container"
import { Row } from "@/components/ui/row"
import { CategoryItem } from "./sub-components/category-item"
import categories from '@/mocks/categories.json'
import {
    Carousel,
    CarouselContent,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

export const CategoryProduct = () =>{

    return (
        <section className="h-[69px] border-b border-bg-bg_border">
            <Container>
                <Row classPlus="overflow-hidden w-full snap-mandatory snap-x">
                    <Carousel className="w-full">
                    <CarouselContent className="w-fit">
                    {
                        categories.map((data,idx)=>{
                            return <CategoryItem key={idx} item={data} />   
                        })
                    }
                      </CarouselContent>
                   
                    </Carousel>
                </Row>
            </Container>
        </section>
        );
}