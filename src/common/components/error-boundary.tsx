
interface FallbackProps {
    error: Error;
}


export const ErrorBoundaryComponent = ({ error }: FallbackProps) => {
    return (
        <div className="p-10">
            <div>
                message={<pre className="text-red">{error.name}</pre> || 'Error'}
                description={<pre className="text-red">{error.message}</pre>}
            </div>
        </div>
    );
}
