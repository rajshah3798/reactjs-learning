import Accordion from "../components/Accordion";

function AccordionPage() {
    const items = [
        {
            id: 1,
            label: 'First label',
            content: 'First Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, provident sapiente quidem excepturi optio, quae natus quo libero expedita tempore quod vitae vero, totam impedit adipisci eos assumenda minus illum.'
        },
        {
            id: 2,
            label: 'Second label',
            content: 'Second Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, provident sapiente quidem excepturi optio, quae natus quo libero expedita tempore quod vitae vero, totam impedit adipisci eos assumenda minus illum.'
        },
        {
            id: 3,
            label: 'Third label',
            content: 'Second Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, provident sapiente quidem excepturi optio, quae natus quo libero expedita tempore quod vitae vero, totam impedit adipisci eos assumenda minus illum.'
        },
    ]

    return <Accordion items={items}/>
}

export default AccordionPage;
