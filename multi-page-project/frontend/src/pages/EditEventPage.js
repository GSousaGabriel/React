// import { useParams } from "react-router"
import { useRouteLoaderData } from "react-router"
import EventForm from "../components/EventForm"

const EditEventPage = () => {
    // const params = useParams()
    const data = useRouteLoaderData('eventDetail')

    return <EventForm method='PATCH' event={data.event} />
}

export default EditEventPage