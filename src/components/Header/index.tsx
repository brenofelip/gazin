import {GoSearch} from "react-icons/go";
import { Container, InternalContainer, SearchContainer } from "./style";


export function Header() {
    return(
        <Container>
           <InternalContainer>
               <h1 className="pageTitle">GazinFilms</h1>
               <SearchContainer>
                   <input type="text" />
                   <div>
                     <GoSearch />
                   </div>
               </SearchContainer>
           </InternalContainer>
        </Container>
    )
}