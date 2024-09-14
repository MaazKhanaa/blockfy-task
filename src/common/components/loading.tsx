
import { HeadingComponent } from "./heading";

export const LoadingComponent = () => {
    return (
        <div className="absolute top-[50%] right-0 bottom-0 w-full h-full z-[99999] flex justify-center bg-initial">
            <HeadingComponent>Loading ...</HeadingComponent>
        </div>
    );
}