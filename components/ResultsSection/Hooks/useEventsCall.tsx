const url:"https://sekndapp.com" | "http://localhost:3000" = process.env.NODE_ENV === "development" ? "http://localhost:3000"
: "https://sekndapp.com"

export const useEvents = () => {
    const [eventsLoading, setLoading] = React.useState<boolean>(false)

    const triggerEventsCall:(searchParams: {
        [key: string]: any;
      }) =>  Promise<{ [key: string]: any }[] | string> = async () => {
          setLoading(true)

          try{
            const { location, radius, placeType, placesPrice, offset } = searchParams;
            const response:Response = await fetch(`${url}/api/`, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                method: 
            })

          }
          catch{

          }
      }
}
