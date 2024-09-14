

import { useNotFoundComponent } from "./use-not-found"



export const NotFoundComponent = () => {

    const { handleGoBack } = useNotFoundComponent();


    return (
        <div className="p-10 text-center">

            <h1>Ops... Page not found</h1>

           <button>Go Back</button>

        </div>
    )
}
