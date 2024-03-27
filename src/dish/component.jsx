import { Counter } from "../counter/component";

export const Dish = ({dish}) =>{

    return(
        <div>            
            <span>{dish.name}</span>
            <Counter/>
        </div>
        
    );
}