import { Container } from "@/components/ui/container"
import { Row } from "@/components/ui/row"
import { CategoryItem } from "./sub-components/category-item"
import categories from '@/mocks/categories.json'

export const CategoryProduct = () =>{

    return (
        <section className="h-[69px]">
            <Container>
                <Row classPlus="gap-x-4 justify-center overflow-auto w-full snap-mandatory snap-x ">
                    {
                        categories.map((data,idx)=>{
                            return <CategoryItem key={idx} item={data} />   
                        })
                    }
                </Row>
            </Container>
        </section>
        );
}