// Function to handle try and catch errors
function handleAsyncErr(fn: (req: any, res: any) => Promise<void>) {
    return async function (req: any, res: any) {
        try {
            await fn(req, res);
        } catch (err) {
            console.error("Error occurred:", (err as Error).message);
            
        }
    };
}


export default handleAsyncErr;

