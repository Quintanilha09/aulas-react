import { Rectangle } from "./Rectangle";

export function Summary() {
    return (
        <section>
            <h2>Summary</h2>
            
            <Rectangle tipo={"Reaction"} number={80} /> 
            <Rectangle tipo={"Memory"} number={92} /> 
            <Rectangle tipo={"Verbal"} number={61} /> 
            <Rectangle tipo={"Visual"} number={73} /> 
        </section>
    )
}

