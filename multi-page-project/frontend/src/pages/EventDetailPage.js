import { Await, defer, json, redirect, useRouteLoaderData } from "react-router"
import EventItem from "../components/EventItem"
import EventsList from "../components/EventsList"
import { Suspense } from "react"

const EventDetailPage = () => {
    const { event, events } = useRouteLoaderData('eventDetail')

    return (
        <>
            <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
                <Await resolve={event}>
                    {(loadedEvent) => <EventItem event={loadedEvent} />}
                </Await>
            </Suspense>
            <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
                <Await resolve={events}>
                    {(loadedEvents) => <EventsList events={loadedEvents} />}
                </Await>
            </Suspense>
        </>
    )
}

const fetchItem = async ({ request, params }) => {
    return defer({
        event: await loadEvent(params.eventId),
        events: loadEvents()
    })
}

const actionItem = async ({ request, params }) => {
    const response = await fetch('http://localhost:8080/events/' + params.eventId, {
        method: request.method
    })

    if (!response.ok) {
        // return { isError: true, message: 'Could not fetch data!' }
        throw json({ message: 'Could not delete event!' }, { status: 500 })
    } else {
        return redirect('/events')
    }
}

const loadEvent = async (id) => {
    const response = await fetch('http://localhost:8080/events/' + id)

    if (!response.ok) {
        // return { isError: true, message: 'Could not fetch data!' }
        throw json({ message: 'Could not fetch data!' }, { status: 500 })
    } else {
        const resData = await response.json()
        return resData.event
    }
}

const loadEvents = async () => {
    const response = await fetch('http://localhost:8080/events')

    if (!response.ok) {
        // return { isError: true, message: 'Could not fetch data!' }
        throw new Response(JSON.stringify({ message: 'Could not fetch data!' }), {
            status: 500
        })
    } else {
        const resData = await response.json()
        return resData.events
    }
}

export default EventDetailPage
export { fetchItem, actionItem }