import React from 'react';

import CarouselHome from './CarouselHome';
import TextHome from './TextHome';
import AccordionHome from "./AccordionHome";
import TabsHome from './TabsHome';

function HomePage() {
    return (
        <>
            <main>
                <CarouselHome />
                <TextHome />
                <AccordionHome />
                <TabsHome />
            </main>
        </>
    )
}

export default HomePage
