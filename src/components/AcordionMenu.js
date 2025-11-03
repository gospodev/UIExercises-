import { Link } from "react-router-dom";
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel
} from "react-accessible-accordion";

export default function AccordionMenu() {
    return (
        <Accordion AllowMultipleExpanded={false} allowZeroExpanded={true}>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        <span>Motorcycles</span>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <ul>
                        <li>
                            <Link to="/" >
                                <span>Sport</span>
                            </Link>
                        </li>
                    </ul>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>

    );
}